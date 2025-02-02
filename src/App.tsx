import React, { useState, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { Images } from "./components/Images";
import { processImages, initializeModel, getModelInfo } from "../lib/process";
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { CircleAlert } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Faq } from "./components/Faq";
import { useTranslation } from 'react-i18next';
import './i18n';
import { LanguageSelector } from "./components/LanguageSelector";
import { CompareSlider } from "./components/CompareSlider";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";

interface AppError {
  message: string;
}

export interface ImageFile {
  id: number;
  file: File;
  processedFile?: File;
}

// Sample images from Unsplash
const sampleImages = [
  "https://images.unsplash.com/photo-1561037404-61cd46aa615b?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3",
  "https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=2972&auto=format&fit=crop&ixlib=rb-4.0.3"
];

// Check if the user is on mobile Safari
const isMobileSafari = () => {
  const ua = window.navigator.userAgent;
  const iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
  const webkit = !!ua.match(/WebKit/i);
  const iOSSafari = iOS && webkit && !ua.match(/CriOS/i) && !ua.match(/OPiOS/i) && !ua.match(/FxiOS/i);
  return iOSSafari && 'ontouchend' in document;
};

export default function App() {
  const { t, i18n } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<AppError | null>(null);
  const [isWebGPU, setIsWebGPU] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [currentModel, setCurrentModel] = useState<'briaai/RMBG-1.4' | 'Xenova/modnet'>('briaai/RMBG-1.4');
  const [isModelSwitching, setIsModelSwitching] = useState(false);
  const [images, setImages] = useState<ImageFile[]>([]);

  useEffect(() => {

    // Only check iOS on load since that won't change
    const { isIOS: isIOSDevice } = getModelInfo();
    setIsIOS(isIOSDevice);
    setIsLoading(false);
  }, []);

  const handleModelChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newModel = event.target.value as typeof currentModel;
    setIsModelSwitching(true);
    setError(null);
    try {
      const initialized = await initializeModel(newModel);
      if (!initialized) {
        throw new Error("Failed to initialize new model");
      }
      setCurrentModel(newModel);
    } catch (err) {
      if (err instanceof Error && err.message.includes("Falling back")) {
        setCurrentModel('briaai/RMBG-1.4');
      } else {
        setError({
          message: err instanceof Error ? err.message : "Failed to switch models"
        });
      }
    } finally {
      setIsModelSwitching(false);
    }
  };

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const newImages = acceptedFiles.map((file, index) => ({
      id: Date.now() + index,
      file,
      processedFile: undefined
    }));
    setImages(prev => [...prev, ...newImages]);
    
    // Initialize model if this is the first image
    if (images.length === 0) {
      setIsLoading(true);
      setError(null);
      try {
        const initialized = await initializeModel();
        if (!initialized) {
          throw new Error("Failed to initialize background removal model");
        }
        // Update WebGPU support status after model initialization
        const { isWebGPUSupported } = getModelInfo();
        setIsWebGPU(isWebGPUSupported);
      } catch (err) {
        setError({
          message: err instanceof Error ? err.message : "An unknown error occurred"
        });
        setImages([]); // Clear the newly added images if model fails to load
        setIsLoading(false);
        return;
      }
      setIsLoading(false);
    }
    
    for (const image of newImages) {
      try {
        const result = await processImages([image.file]);
        if (result && result.length > 0) {
          setImages(prev => prev.map(img =>
            img.id === image.id
              ? { ...img, processedFile: result[0] }
              : img
          ));
        }
      } catch (error) {
        console.error('Error processing image:', error);
      }
    }
  }, [images.length]);


  const handlePaste = async (event: React.ClipboardEvent) => {
    const clipboardItems = event.clipboardData.items;
    const imageFiles: File[] = [];
    for (const item of clipboardItems) {
      if (item.type.startsWith("image")) {
        const file = item.getAsFile();
        if (file) {
          imageFiles.push(file);
        }
      }
    }
    if (imageFiles.length > 0) {
      onDrop(imageFiles);
    }
  };  

  const handleSampleImageClick = async (url: string) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const file = new File([blob], 'sample-image.jpg', { type: 'image/jpeg' });
      onDrop([file]);
    } catch (error) {
      console.error('Error loading sample image:', error);
    }
  };

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".mp4"],
    },
  });

  return (
    <div className="min-h-screen bg-gray-50" onPaste={handlePaste}>
      <Navbar isIOS={isIOS} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8 mt-12">
        <div className={`grid ${images.length === 0 ? 'grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8' : 'grid-cols-1'}`}>
          {images.length === 0 && (
            <div className="flex flex-col justify-top items-start">
              <div className="mb-4 w-full">
                <CompareSlider />
              </div>
              <p className="text-base sm:text-lg text-gray-600 mb-4">
                {t('description')}
              </p>
              <p className="text-sm sm:text-base text-gray-500">
                {t('subDescription')}
              </p>
            </div>
          )}
          
          <div className={images.length === 0 ? '' : 'w-full'}>
            <div className="mb-4">
              {!isIOS && (
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                  <span className="text-sm sm:text-base text-gray-600">{t('model')}</span>
                  <select
                    value={currentModel}
                    onChange={handleModelChange}
                    className="w-full sm:w-auto bg-white border border-gray-300 rounded-md px-3 py-1.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    disabled={!isWebGPU}
                  >
                    <option value="briaai/RMBG-1.4">RMBG-1.4 (Cross-browser)</option>
                    {isWebGPU && (
                      <option value="Xenova/modnet">MODNet (WebGPU)</option>
                    )}
                  </select>
                </div>
              )}
            </div>
            <div
              {...getRootProps()}
              className={`p-4 sm:p-6 mb-4 sm:mb-8 border-2 border-dashed rounded-lg text-center cursor-pointer transition-colors duration-300 ease-in-out bg-white
                ${isDragAccept ? "border-green-500 bg-green-50" : ""}
                ${isDragReject ? "border-red-500 bg-red-50" : ""}
                ${isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-300 hover:border-blue-500 hover:bg-blue-50"}
                ${isLoading || isModelSwitching ? "cursor-not-allowed" : ""}
              `}
            >
              <input {...getInputProps()} className="hidden" disabled={isLoading || isModelSwitching} />
              <div className="flex flex-col items-center gap-2">
                {isLoading || isModelSwitching ? (
                  <>
                    <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600 mb-2"></div>
                    <p className="text-lg text-gray-600">
                      {isModelSwitching ? t('switchingModel') : t('loading')}
                    </p>
                  </>
                ) : error ? (
                  <>
                    <svg className="w-12 h-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <p className="text-lg text-red-600 font-medium mb-2">{error.message}</p>
                    {currentModel === 'Xenova/modnet' && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleModelChange({ target: { value: 'briaai/RMBG-1.4' }} as any);
                        }}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                      >
                        Switch to Cross-browser Version
                      </button>
                    )}
                  </>
                ) : (
                  <>
                    <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <p className="text-lg text-gray-600">
                      {isDragActive ? t('dropzoneActive') : t('dropzoneTitle')}
                    </p>
                    <p className="text-sm text-gray-500">{t('dropzoneSubtitle')}</p>
                    <Alert className="text-left">
                      <CircleAlert className="h-4 w-4 stroke-gray-500" />
                      <AlertTitle>{t('alertTitle')}</AlertTitle>
                      <AlertDescription>
                        {t('alertDescription')}
                      </AlertDescription>
                    </Alert>
                  </>
                )}
              </div>
            </div>

            {images.length === 0 && (
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
                <h3 className="text-lg sm:text-xl text-gray-700 font-semibold mb-3 sm:mb-4">{t('sampleTitle')}</h3>
                <div className="grid grid-cols-2 gap-2 md:grid-cols-4 sm:gap-4">
                  {sampleImages.map((url, index) => (
                    <button
                      key={index}
                      onClick={() => handleSampleImageClick(url)}
                      className="relative aspect-square overflow-hidden rounded-lg hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <img
                        src={url}
                        alt={`Sample ${index + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}

            <Images images={images} onDelete={(id) => setImages(prev => prev.filter(img => img.id !== id))} />
          </div>
        </div>
      </main>

      <Faq />
      
      <Footer />
    </div>
  );
}

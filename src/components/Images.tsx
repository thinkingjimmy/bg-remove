import React, { useState } from "react";
import type { ImageFile } from "../App";
import { EditModal } from "./EditModal";

interface ImagesProps {
  images: ImageFile[];
  onDelete: (id: number) => void;
}

export function Images({ images, onDelete }: ImagesProps) {
  return (
    <div>
      <h2 className="hidden text-gray-800 text-xl font-semibold mb-4">Images: {images.length}</h2>
      <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {images.map((image) => {
          if(image.file.type.includes("video")) {
            return <Video video={image} key={image.id} />;
          } else {
            return <ImageSpot image={image} onDelete={onDelete} key={image.id} />;
          }
        })}
      </div>
    </div>
  );
}

function Video({ video }: { video: ImageFile }) {
  const url = URL.createObjectURL(video.file);
  return (
    <div className="bg-white rounded-lg shadow-md p-3">
      <video
        className="rounded-lg aspect-square object-cover"
        loop
        muted
        autoPlay
        src={url}
      ></video>
    </div>
  );
}

interface ImageSpotProps {
  image: ImageFile;
  onDelete: (id: number) => void;
}

function ImageSpot({ image, onDelete }: ImageSpotProps) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [processedImageUrl, setProcessedImageUrl] = useState("");

  const url = URL.createObjectURL(image.file);
  const processedURL = image.processedFile ? URL.createObjectURL(image.processedFile) : "";
  const isProcessing = !image.processedFile;

  const handleEditSave = (editedImageUrl: string) => {
    setProcessedImageUrl(editedImageUrl);
  };

  const transparentBg = `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAGUExURb+/v////5nD/3QAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAUSURBVBjTYwABQSCglEENMxgYGAAynwRB8BEAgQAAAABJRU5ErkJggg==")`;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        {isProcessing ? (
          <div className="relative">
            <img
              className="w-full aspect-square object-cover opacity-50 transition-opacity duration-200"
              src={url}
              alt={`Processing image ${image.id}`}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black bg-opacity-50 px-4 py-2 rounded-lg">
                <div className="inline-block animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white mr-2"></div>
                <span className="text-white font-medium">Processing...</span>
              </div>
            </div>
          </div>
        ) : (
          <div 
            className="w-full aspect-square"
            style={{ 
              background: transparentBg,
              backgroundRepeat: 'repeat'
            }}
          >
            <img
              className="w-full h-full object-cover transition-opacity duration-200"
              src={processedImageUrl || processedURL}
              alt={`Processed image ${image.id}`}
            />
          </div>
        )}
      </div>

      {!isProcessing && (
        <div className="p-3 border-t border-gray-100">
          <div className="flex justify-center gap-2">
            <button
              onClick={() => onDelete(image.id)}
              className="flex items-center gap-1 px-3 py-1.5 bg-white border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
              title="Delete"
            >
              <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              <span className="text-sm text-gray-700">Delete</span>
            </button>
            <button
              onClick={() => setIsEditModalOpen(true)}
              className="flex items-center gap-1 px-3 py-1.5 bg-white border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
              title="Edit"
            >
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
              <span className="text-sm text-gray-700">Edit</span>
            </button>
            <a
              href={processedImageUrl || processedURL}
              download={`processed-${image.id}.png`}
              className="flex items-center gap-1 px-3 py-1.5 bg-white border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
              title="Download"
            >
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span className="text-sm text-gray-700">Download</span>
            </a>
          </div>
        </div>
      )}

      <EditModal
        image={image}
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSave={handleEditSave}
      />
    </div>
  );
}

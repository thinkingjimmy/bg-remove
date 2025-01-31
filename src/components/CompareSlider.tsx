import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const IMAGE_TYPES = ['people', 'animal', 'product', 'car'] as const;
type ImageType = typeof IMAGE_TYPES[number];

export function CompareSlider() {
  const { t } = useTranslation();
  const [selectedType, setSelectedType] = useState<ImageType>('animal');

  return (
    <div className="w-full space-y-4">
      <div className="relative">
        <Tabs defaultValue="animal" onValueChange={(value) => setSelectedType(value as ImageType)}>
          <TabsList className="grid w-full grid-cols-4 mb-4">
            {IMAGE_TYPES.map((type) => (
              <TabsTrigger key={type} value={type}>
                {t(`imageTypes.${type}`)}
              </TabsTrigger>
            ))}
          </TabsList>
          {IMAGE_TYPES.map((type) => (
            <TabsContent key={type} value={type}>
              <ReactCompareSlider
                itemOne={<ReactCompareSliderImage src={`/${type}.png`} alt={`Original ${type} image`} />}
                itemTwo={<ReactCompareSliderImage src={`/${type}-bg-removed.png`} alt={`${type} image with background removed`} style={{ filter: 'saturate(1.25) contrast(1.1)' }} />}
                className='rounded-md'
                style={{
                  backgroundColor: 'white',
                  backgroundImage: 'linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)',
                  backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
                  backgroundSize: '20px 20px',
                  width: '100%'
                }}
              />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 mt-8">
        <div className="flex justify-start gap-2 items-center ">
          <img src="/favicon-512.png" alt="BGNix Logo" className="w-8 h-8" />
          <h2 className="text-2xl font-bold">BGNix</h2>
        </div>
        <p className="text-gray-500 mt-2">
          100% Free & Privacy Image Background Removal
        </p>
        <div className="border-t border-gray-200 mt-4">
          <p className="text-sm text-gray-500 mt-2">
            <div dangerouslySetInnerHTML={{
              __html: t('footer').replace(
                '<a>',
                '<a href="https://x.com/hellojimmywong" target="_blank" class="text-blue-500">'
              )
            }} />
          </p>
        </div>
        
      </div>
    </footer>
  );
} 
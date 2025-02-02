import React from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageSelector } from './LanguageSelector';
import { Button } from './ui/button';
import { Github } from "lucide-react"

interface NavbarProps {
  isIOS: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ isIOS }) => {
  const { t } = useTranslation();

  return (
    <nav className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <img src="/favicon-512.png" alt="BGNix Logo" className="w-12 h-12" />
                <div>
                  <h1 className="text-xl font-bold text-gray-800">
                    {t('title')}
                  </h1>
                  <p className="text-sm text-gray-500">
                    {t('subtitle')}
                  </p>
                </div>
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <LanguageSelector />
              <Button
                onClick={() => window.open('https://github.com/thinkingjimmy/bg-remove', '_blank')}
              >
                <Github /> {t('support_project')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}; 
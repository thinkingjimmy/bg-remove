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
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 sm:gap-2">
              <img src="/favicon-512.png" alt="BGNix Logo" className="w-8 h-8 sm:w-12 sm:h-12" />
              <div>
                <h1 className="text-lg sm:text-xl font-bold text-gray-800">
                  {t('title')}
                </h1>
                <p className="hidden sm:block text-sm text-gray-500">
                  {t('subtitle')}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <LanguageSelector />
              <Button
                size="sm"
                className="hidden sm:flex sm:items-center"
                onClick={() => window.open('https://github.com/thinkingjimmy/bg-remove', '_blank')}
              >
                <Github className="mr-2" /> {t('support_project')}
              </Button>
              <Button
                size="icon"
                className="sm:hidden"
                onClick={() => window.open('https://github.com/thinkingjimmy/bg-remove', '_blank')}
              >
                <Github className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}; 
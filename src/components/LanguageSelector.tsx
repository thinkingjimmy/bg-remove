import React, { useEffect } from "react";
import { useTranslation } from 'react-i18next';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function LanguageSelector() {
  const { i18n } = useTranslation();

  const languages = [
    { value: 'en', label: '🇺🇸 English' },
    { value: 'zh', label: '🇨🇳 中文' },
    { value: 'ja', label: '🇯🇵 日本語' }
  ];

  // 标准化语言代码
  const normalizeLanguage = (lang: string) => {
    // 只取主要语言代码，例如 'zh-CN' -> 'zh'
    const mainLang = lang.split('-')[0].toLowerCase();
    return languages.some(l => l.value === mainLang) ? mainLang : 'en';
  };

  // 获取当前语言
  const currentLang = normalizeLanguage(i18n.language);

  useEffect(() => {
    // 确保当前语言是支持的语言之一
    const normalizedLang = normalizeLanguage(i18n.language);
    if (normalizedLang !== i18n.language) {
      i18n.changeLanguage(normalizedLang);
    }
  }, [i18n.language]);

  return (
    <Select
      value={currentLang}
      onValueChange={(value) => i18n.changeLanguage(value)}
    >
      <SelectTrigger className="w-[140px]">
        <SelectValue placeholder="Select language" />
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem key={lang.value} value={lang.value}>
            {lang.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

const LanguageToggle = () => {
  const { i18n, t } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
    
    // Apply Alexandria font for Arabic
    if (newLang === 'ar') {
      document.body.style.fontFamily = 'Tajawal, sans-serif';
    } else {
      document.body.style.fontFamily = 'Roboto, sans-serif';
    }
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="gap-2"
    >
      <Globe className="h-4 w-4" />
      <span className="hidden sm:inline">
        {i18n.language === 'en' ? t('language.ar') : t('language.en')}
      </span>
    </Button>
  );
};

export default LanguageToggle;
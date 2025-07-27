import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageToggle = ({className}) => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'en' ? 'hi' : 'en';
    i18n.changeLanguage(nextLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className={`${className}`}
    >
      {i18n.language === 'en' ? 'हिंदी में देखें' : 'View in English'}
    </button>
  );
};

export default LanguageToggle;
// client/src/components/Footer.jsx

import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n'
import '../../i18n'

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-800 text-white px-4 py-6 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <h1 className="text-lg font-semibold">{t("footer.app_name", "StreetKart")}</h1>
          <p className="text-sm">
            {t("footer.tagline", "Empowering Street Vendors Through Technology")}
          </p>
        </div>

        <div className="flex gap-6">
          <a href="#about" className="hover:text-yellow-300 text-sm">{t("about")}</a>
          
          <a href="#contact" className="hover:text-yellow-300 text-sm">{t("contact")}</a>
          
          <a href="#help" className="hover:text-yellow-300 text-sm">{t("help")}</a>
        </div>

        <div className="text-sm text-center md:text-right">
          &copy; {new Date().getFullYear()} {t("footer.copyright", "StreetKart. All rights reserved.")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
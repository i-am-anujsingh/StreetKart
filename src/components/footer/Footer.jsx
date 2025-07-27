import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n'
import '../../i18n'

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-yellow-100 px-4 py-8 mt-10 shadow-inner">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* App Info */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold text-yellow-300">{t("footer.app_name", "StreetKart")}</h1>
          <p className="text-sm text-yellow-200 mt-1">
            {t("footer.tagline", "Empowering Street Vendors Through Technology")}
          </p>
        </div>

        {/* Footer Navigation */}
        <div className="flex gap-6 flex-wrap justify-center">
          <a href="#about" className="hover:text-yellow-400 text-sm transition duration-200">{t("about", "About")}</a>
          <a href="#contact" className="hover:text-yellow-400 text-sm transition duration-200">{t("contact", "Contact")}</a>
          <a href="#help" className="hover:text-yellow-400 text-sm transition duration-200">{t("help", "Help")}</a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-yellow-200 text-center md:text-right">
          &copy; {new Date().getFullYear()} {t("footer.copyright", "StreetKart. All rights reserved.")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-yellow-50 flex flex-col items-center justify-center px-6 py-10">
      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-xl w-full border-2 border-green-200">
        <h1 className="text-5xl font-extrabold text-center text-green-700 mb-6 drop-shadow-md">
          {t('welcome')}
        </h1>

        <p className="text-lg text-gray-800 text-center mb-6 leading-relaxed">
          {t('intro')}
        </p>

        <div className="flex justify-center gap-6 mb-6">
          <Link to="/signup">
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 shadow-md">
              {t('Signup')}
            </button>
          </Link>
          <Link to="/login">
            <button className="bg-white hover:bg-green-50 border-2 border-green-600 text-green-700 font-semibold px-6 py-2 rounded-full transition-all duration-300 shadow-md">
              {t('Login')}
            </button>
          </Link>
        </div>

        <div className="text-center text-sm text-gray-600">
          <p>{t('lang_note')}</p>
        </div>
      </div>

      <div className="mt-12 text-xs text-gray-400">
        <p>&copy; {new Date().getFullYear()} SmartVendor. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Home;
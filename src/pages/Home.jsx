import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen min-w-auto bg-yellow-50 flex flex-col items-center justify-center px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-green-800 mb-4">
        {t('welcome')}
      </h1>

      <p className="text-lg text-center text-gray-700 max-w-md mb-6">
        {t('intro')}
      </p>

      <div className="flex gap-4">
        <Link to="/signup">
          <button className="bg-green-600 text-white px-5 py-2 rounded-full shadow-md hover:bg-green-700">
            {t('Signup')}
          </button>
        </Link>
        <Link to="/login">
          <button className="bg-white border border-green-600 text-green-700 px-5 py-2 rounded-full shadow-md hover:bg-green-100">
            {t('Login')}
          </button>
        </Link>
      </div>

      <div className="mt-8 text-sm text-gray-500">
        <p>{t('lang_note')}</p>
      </div>
    </div>
  );
};

export default Home;
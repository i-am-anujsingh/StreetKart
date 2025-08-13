import React from 'react';
import Container from '../container/Container.jsx';
import Button from '../Button.jsx';
import Logo from '../Logo.jsx';
import { Link, useNavigate } from 'react-router-dom';
import LogoutBtn from '../header/LogoutBtn.jsx';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';
import '../../i18n';
import LanguageToggle from '../LanguageToggle.jsx';
import { useSelector } from 'react-redux';

function Header() {
  const navigate = useNavigate();
  const authStatus =  useSelector((state) => state.auth.status);
  const { t } = useTranslation();

  const navItems = [
    {
      name: 'Home',
      slug: '/',
      active: true,
    },
    {
      name: 'Buy Materials',
      slug: '/buy-items',
      active: true,
    },
    {
      name: 'Sell Materials',
      slug: '/sell-items',
      active: true,
    },
    {
      name: 'Profile',
      slug: '/profile',
      active: authStatus,
    },
   {
      name: 'Resale Form',
      slug: '/resale',
      active: authStatus,
    },  
  ];

  return (
    <header className="py-3 shadow-md bg-gray-900 text-white">
      <Container>
        <nav className="flex flex-wrap items-center justify-between">
          {/* Logo */}
          <div className="mr-4 flex items-center">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>

          {/* Navigation */}
          <ul className="flex flex-wrap gap-3 items-center">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="px-4 py-2 rounded-full transition-colors duration-300 hover:bg-yellow-400 hover:text-black"
                  >
                    {t(item.name)}
                  </button>
                </li>
              ) : null
            )}
          </ul>

          {/* Language Toggle & Logout */}
          <div className="flex items-center bg-amber-500 p-3 m-2 rounded-lg font-bold text-black gap-2">
            <LanguageToggle />
            </div>
            {authStatus && <LogoutBtn />}
          
        </nav>
      </Container>
    </header>
  );
}

export default Header;
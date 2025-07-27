import React from 'react'
import Container from '../container/Container.jsx'
import Button from '../Button.jsx'
import Logo from '../Logo.jsx'
import { Link, useNavigate } from 'react-router-dom'
import LogoutBtn from '../header/LogoutBtn.jsx'
import { useTranslation } from 'react-i18next'
import i18n from '../../i18n'
import '../../i18n'
import LanguageToggle from '../LanguageToggle.jsx'
import {useSelector} from 'react-redux'


function Header() {
  const navigate = useNavigate()
  const authStatus = false//useSelector((state) => state.auth.status)
  const navItems = [    
    {
      name: 'Home',
      slug: "/",
      active:true,
    }, 
  {
      name: "Buy Materials",
      slug: "/buy-items",
      active:!authStatus,
  },
  {
      name: "Sell Materials",
      slug: "/sell-items",
      active:!authStatus,
  },
  {
      name: "Profile",
      slug: "/profile",
      active:!authStatus,
  },

  ]
  const {t} = useTranslation()
  return (
    <header className='py-3 shadow bg-gray-500'>
      <Container>
        <nav className='flex flex-wrap'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='70px'   />
            </Link>
          </div>
          <ul className='flex ml-auto'>
          {navItems.map((item) =>
          item.active?
          (
              <li key={item.name}>
                <button
                onClick={() => navigate(item.slug)}
                className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                >{t(item.name)}</button>
              </li>):null
            )}
          </ul>
          <LanguageToggle/>
        </nav>
        </Container>
    </header>
  )
}

export default Header
import React from 'react'
import { useTranslation } from 'react-i18next';
function LogoutBtn({...props}) {
  const {t} = useTranslation()
  return (
    <button
    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    {...props}
    >{t('Logout')}</button>
  )
}

export default LogoutBtn
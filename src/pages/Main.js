import React from 'react'
import { useTranslation } from 'react-i18next'

const Main = () => {
  const { t, i18n } = useTranslation()

  function toggleLanguage() {
    if (i18n.language === 'fr') {
      i18n.changeLanguage('en')
    } else {
      i18n.changeLanguage('fr')
    }
  }

  return (
    <div className="content">
      <h1>Briscola</h1>
      <h2>{t('translation:title')}</h2>
      <p className="description">{t('translation:description')}</p>
      <div className="awful-selfie"></div>
      <div
        className="button"
        role="button"
        tabIndex="-1"
        onClick={() => toggleLanguage()}
        onKeyPress={() => toggleLanguage()}
      >
        {t('translation:change-language')}
      </div>
    </div>
  )
}

export default Main

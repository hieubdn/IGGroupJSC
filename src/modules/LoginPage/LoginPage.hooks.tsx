import { ENG, VNM } from 'src/assets/svg'
import './LoginPage.scss'
import { useTranslation } from 'react-i18next';
import { useLanguageToggle } from 'src/hooks/useLanguageToggle';

export default function LoginPage() {
  const { t } = useTranslation();
  const { isVNM, toggleLanguage } = useLanguageToggle();

  return (
    <div className="login-page">
      <div
        className="login-page-language"
        onClick={toggleLanguage}
        style={{ cursor: "pointer" }}
      >
        {isVNM ? (
          <VNM width="100%" height="100%" />
        ) : (
          <ENG width="100%" height="100%" />
        )}
      </div>
      <div className="login-page-hooks-container">
        <div className="left-section">
          <div className="brand">
            <h1>IG GROUP</h1>
            <p>{t('login.company_name')}</p>
          </div>
          <div className="company-info">
            <p>{t('login.company_name')} © Copyright <b>IG Group</b> 2022</p>
          </div>
        </div>

        <div className="right-section">
          <div className="login-header">
            <h2>{t('login.title')}</h2>
          </div>
          <form className="login-form">
            <div className="form-group">
              <label className="form-label-user">{t('login.username_label')}</label>
              <input
                type="text"
                placeholder={t('login.username_placeholder')}
              />
            </div>
            <div className="form-group">
              <label className="form-label-pass">{t('login.password_label')}</label>
              <input
                type="password"
                placeholder={t('login.password_placeholder')}
              />
            </div>
            <div className="forgot-password">
              <a href="#">{t('login.forgot_password')}</a>
            </div>
            <button type="submit" className="login-button">
              {t('login.submit')}
            </button>
            <div className="register-link">
              <p>
                {t('login.no_account')} <a href="#">{t('login.register_here')}</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
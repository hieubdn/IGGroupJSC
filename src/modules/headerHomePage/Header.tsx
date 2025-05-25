import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ENG, VNM, LoginSvg } from "src/assets/svg";
import { useLanguageToggle } from "src/hooks/useLanguageToggle";
import "./Header.scss";
import { useNavigateWithLoading } from "src/hooks/useNavigateWithLoading";

const Header = () => {
  const { t } = useTranslation();
  const { isVNM, toggleLanguage } = useLanguageToggle();

  const navigateWithLoading = useNavigateWithLoading();

  const handleNavigateToHome = () => {
    navigateWithLoading('/');
  };

  const handleNavigateToServices = () => {
    navigateWithLoading('/services');
  };

  const handleNavigateToTerms = () => {
    navigateWithLoading('/terms');
  };
  
  const handleNavigateToAds = () => {
    navigateWithLoading('/ads');
  };

  const handleNavigateToLogin = () => {
    navigateWithLoading('/login');
  };

  return (
    <header className="header">
      <div className="logo">
        <div className="header-link" onClick={handleNavigateToHome}>
          IG Group JSC
        </div>
      </div>

      <div className="header-between-options">
        <div className="header-link" onClick={handleNavigateToHome}>
          {t("header.home")}
        </div>
        <div className="header-link" onClick={handleNavigateToServices}>
          {t("header.services")}
        </div>
        <div className="header-link" onClick={handleNavigateToTerms}>
          {t("header.terms")}
        </div>
        <div className="header-link" onClick={handleNavigateToAds}>
          {t("header.ads")}
        </div>
      </div>

      <div className="header-right-options">
        <div className="icon-wrapper" onClick={handleNavigateToLogin}>
          <LoginSvg />
        </div>
        <div
          className="header-language"
          onClick={toggleLanguage}
          style={{ cursor: "pointer" }}
        >
          {isVNM ? (
            <VNM width="100%" height="100%" />
          ) : (
            <ENG width="100%" height="100%" />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ENG, VNM, LoginSvg } from "src/assets/svg";
import { useLanguageToggle } from "src/hooks/useLanguageToggle";
import "./Header.scss";

const Header = () => {
  const { t } = useTranslation();
  const { isVNM, toggleLanguage } = useLanguageToggle();

  return (
    <header className="header">
      <div className="logo">
        <Link className="header-link" to="/">
          IG Group JSC
        </Link>
      </div>

      <div className="header-between-options">
        <Link className="header-link" to="/">
          {t("header.home")}
        </Link>
        <Link className="header-link" to="/services">
          {t("header.services")}
        </Link>
        <Link className="header-link" to="/terms">
          {t("header.terms")}
        </Link>
        <Link className="header-link" to="/ads">
          {t("header.ads")}
        </Link>
      </div>

      <div className="header-right-options">
        <Link className="header-link" to="/login">
          <LoginSvg />
          {t("header.login")}
        </Link>
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
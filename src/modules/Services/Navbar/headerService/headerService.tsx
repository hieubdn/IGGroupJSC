import React from "react";
import { Link } from "react-router-dom";
import { Notification, UserLogout, ENG, VNM, SettingIcon } from "src/assets/svg.js";
import { useLanguageToggle } from "src/hooks/useLanguageToggle";

import "./headerService.scss";
const HeaderService = () => {
  const { isVNM, toggleLanguage } = useLanguageToggle();

  return (
    <header className="header-service">
      <div className="logo"> 
        <Link className="header-service-link" to="/">
          IG Group JSC
        </Link>
      </div>

      <div className="header-service-right-options">
        <div className="icon-wrapper notification-icon">
          <Notification />
        </div>
        <div className="icon-wrapper setting-icon">
          <SettingIcon />
        </div>
        <div
          className="header-service-language"
          onClick={toggleLanguage}
          style={{ cursor: "pointer" }}
        >
          {isVNM ? (
            <VNM width="100%" height="100%" />
          ) : (
            <ENG width="100%" height="100%" />
          )}
        </div>
        <div className="icon-wrapper">
          <UserLogout />
        </div>
      </div>
    </header>
  );
};

export default HeaderService;
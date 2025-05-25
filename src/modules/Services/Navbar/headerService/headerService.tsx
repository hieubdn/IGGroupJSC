import React from "react";
import { Notification, UserLogout, ENG, VNM, SettingIcon } from "src/assets/svg.js";
import { useLanguageToggle } from "src/hooks/useLanguageToggle";

import "./headerService.scss";
import { useNavigateWithLoading } from "src/hooks/useNavigateWithLoading";
const HeaderService = () => {
  const { isVNM, toggleLanguage } = useLanguageToggle();
  const navigateWithLoading = useNavigateWithLoading();

  const handleNavigateToHome = () => {
    navigateWithLoading('/');
  };

  return (
    <header className="header-service">
      <div className="logo"> 
        <div className="header-service-link" onClick={handleNavigateToHome}>
          IG Group JSC
        </div>
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
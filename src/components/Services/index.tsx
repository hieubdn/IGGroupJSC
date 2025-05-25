import React from 'react';
import { useNavigateWithLoading } from 'src/hooks/useNavigateWithLoading';
import HeaderService from "src/modules/Services/Navbar/headerService/headerService";
import SidebarService from "src/modules/Services/Navbar/sidebarService";
import ProfileSummary from "src/modules/Services/ProfileSummary/ProfileSummary.hook";
import "./Services.scss";

const Services = () => {
  const navigateWithLoading = useNavigateWithLoading();

  const handleNavigateToHome = () => {
    navigateWithLoading('/');
  };

  const handleNavigateToLogin = () => {
    navigateWithLoading('/login');
  };

  return (
    <div className="services-container">
      <HeaderService />
      <div className="services-content">
        <div className="services-content-sidebar">
          <SidebarService />
        </div>
        <div className="services-content-body">
          <h1>Services</h1>
          <button onClick={handleNavigateToHome}>Back to Home</button>
          <button onClick={handleNavigateToLogin}>Go to Login</button>
        </div>
        <div className="services-content-contactInfo">
          <ProfileSummary />
        </div>
      </div>
    </div>
  );
};

export default Services;
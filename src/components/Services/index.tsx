import React from "react";
import HeaderService from "src/modules/Services/Navbar/headerService/headerService";
import SidebarService from "src/modules/Services/Navbar/sidebarService";
import ProfileSummary from "src/modules/Services/ProfileSummary/ProfileSummary";
import "./Services.scss";

const Services = () => {
  return (
    <div className="services-container">
      <HeaderService />
      <div className="services-content">
        <div className="services-content-sidebar">
          <SidebarService />
        </div>
        <div className="services-content-body">
          <h1>Services</h1>
        </div>
        <div className="services-content-contactInfo">
          <ProfileSummary />
        </div>
      </div>
    </div>
  );
};

export default Services;
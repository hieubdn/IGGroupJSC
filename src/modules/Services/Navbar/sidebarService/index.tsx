import React from "react";
import "./sidebarService.scss";

const SidebarService = () => {
  const navItems = [
    "JGSystemMenu",
    "Facebook",
    "Titok",
    "Instagram",
    "Youtube",
    "Telegram",
    "Twitter",
    "Shoppe",
    "Thread",
    "Google",
    "TrafficWeb"
  ];

  return (
    <div className="sidebar-service">
      <nav>
        <ul className="nav-list">
          {navItems.map((item, index) => (
            <li key={index} className="nav-item">
              <span className="nav-text">{item}</span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SidebarService;
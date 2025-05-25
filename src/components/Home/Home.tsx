import React from "react";
import "./Home.scss";
import Header from "src/modules/headerHomePage/Header";

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <div className="home-page-content">
        <h1>Trang chủ</h1>
        <p>Chào mừng bạn đến với hệ thống dịch vụ buff mạng xã hội!</p>
      </div>
    </div>
  );
};

export default Home;

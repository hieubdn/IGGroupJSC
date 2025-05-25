import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "src/modules/headerHomePage/Header";
import Home from "src/components/Home/Home";
import Services from "src/components/Services/index";
import "./i18n";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        <Route path="/services" element={<Services />} />
        {/* Thêm các trang khác nếu cần */}
        {/* Ví dụ:
        <Route
          path="/terms"
          element={
            <>
              <Header />
              <Terms />
            </>
          }
        />
        <Route
          path="/ads"
          element={
            <>
              <Header />
              <Ads />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Header />
              <Login />
            </>
          }
        />
        */}
      </Routes>
    </Router>
  );
};

export default App;
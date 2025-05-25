import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./state/app";
import Home from "src/components/Home/Home";
import Services from "src/components/Services/index";
import Login from "src/components/Login/Login";
import { LoadingHandler } from "./components/LoadingHandler/index";

import "./i18n";

const App = () => {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
              </>
            }
          />
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={<Login />} />
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
        <LoadingHandler />
      </Router>
    </AppProvider>
  );
};

export default App;
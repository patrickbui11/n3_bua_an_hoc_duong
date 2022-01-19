import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/home/Home";
import Statistical from "./component/statistical/Statistical";
import "./css/order.css";
import "./css/statistical.css";
import "./css/bootstrap.min.css";
import "./css/style.css";
import "./css/fonts/fontawesome/css/all.css";
import Sidebar from "./component/common/Sidebar";
import Footer from "./component/common/Footer";
import Header from "./component/common/Header";
import ExpressDetail from "./component/home/ExpressDetail";

function App() {
  return (
    <div>
      <Sidebar />
      <div id="main">
        {/* boxsearch */}
        <div className="topnavv">
          <Header />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/don-hang/*" element={<ExpressDetail />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

import React from "react";

import { Routes, Route } from "react-router-dom";
import Catalog from "../pages/Catalog";
import Detail from "../pages/details/Detail";
import Home from "../pages/Home";

const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:category/search/:keyword" element={<Catalog />} />
      <Route path="/:category/:id" element={<Detail />} />
      <Route path="/:category" element={<Catalog />} />
    </Routes>
  );
};

export default RoutesConfig;

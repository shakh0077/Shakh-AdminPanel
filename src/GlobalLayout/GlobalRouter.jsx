import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboards from "../Pages/Dashboards";
import Orders from "../Pages/Orders";
import Costumers from "../Pages/Costumers";
import Inventory from "../Pages/Inventory";
import Conversations from "../Pages/Conversations";
import Login from "../Components/Login";
import GlobalLayout from "./GlobalLayout";

const GlobalRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<GlobalLayout />}>
          <Route path="/dashboards" element={<Dashboards/>} />
          <Route path="/orders" element={<Orders/>} />
          <Route path="/customers" element={<Costumers/>} />
          <Route path="/inventory" element={<Inventory/>} />
          <Route path="/conversations" element={<Conversations/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default GlobalRouter;

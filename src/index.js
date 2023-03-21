import React from "react";
import ReactDOM from "react-dom/client";

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Explore from "./pages/Explore";

import NFTDetail from "./pages/NFTDetail";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <ThirdwebProvider activeChain="mumbai">
            <Explore />
          </ThirdwebProvider>
        }
      />
      <Route
        path="/detail"
        element={
          <ThirdwebProvider actveChain="mumbai">
            <NFTDetail />
          </ThirdwebProvider>
        }
      />
    </Routes>
  </BrowserRouter>
);
reportWebVitals();

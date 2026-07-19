import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import ColorProvider from "./context/ColorContext";
import MaterialProvider from "./context/MaterialContext";
import ParentCategoryProvider from "./context/ParentCategoryContext";
import SubCategoryProvider from "./context/SubCategoryContext";
import SubSubCategoryProvider from "./context/SubSubCategoryContext";
import ProductProvider from "./context/ProductContext";

ReactDOM.createRoot(document.getElementById("root")).render(
 <BrowserRouter>
  <ColorProvider>
    <MaterialProvider>
      <ParentCategoryProvider>
        <SubCategoryProvider>
          <SubSubCategoryProvider>
            <ProductProvider>
              <App />
            </ProductProvider>
          </SubSubCategoryProvider>
        </SubCategoryProvider>
      </ParentCategoryProvider>
    </MaterialProvider>
  </ColorProvider>
</BrowserRouter>
);
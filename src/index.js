import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { CategoryProvider } from "./contexts/CategoryContext";
import { ProductListProvider } from "./contexts/ProductsListContext";
import { AuthProvider } from "./contexts/AuthContext";
import { FeatureProvider } from "./contexts/featuresContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CategoryProvider>
        <ProductListProvider>
          <AuthProvider>
            <FeatureProvider>
              <App />
            </FeatureProvider>
          </AuthProvider>
        </ProductListProvider>
      </CategoryProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Register from "./Register.jsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-4w4zlhf4wkz4rv7m.us.auth0.com"
      clientId="Ed9kSKQd8Mg9y1EFlgFQhV8Irwmg7ONC"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
       <RouterProvider router={router} />
    </Auth0Provider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Sergi from "./Sergi";

let router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/sergi",
    Component: Sergi,
  },
  {
    path: "*",
    Component: App,
  },
]);

const Navbar = () => (
  <ol class="navbar">
    <li>
      <a href="index.html">Index</a>
    </li>
    <li>
      <a href="Sergi.js">Memes del Bana</a>
    </li>
  </ol>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </React.StrictMode>
);

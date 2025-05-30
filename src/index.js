import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Champions from "./Champions";
import Maps from "./Maps";
import AboutMe from "./AboutMe";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

let router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/champions",
    Component: Champions,
  },
  {
    path: "/maps",
    Component: Maps,
  },
  {
    path: "/about",
    Component: AboutMe,
  },
  {
    path: "*",
    Component: App,
  },
]);

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-container">
      <div className="navbar-brand">LoL Guide</div>
      <ul className="navbar-menu">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/champions">Campions</a>
        </li>
        <li>
          <a href="/maps">Mapes & Objectius</a>
        </li>
        <li>
          <a href="/about">Sobre mi</a>
        </li>
      </ul>
    </div>
  </nav>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </React.StrictMode>
);

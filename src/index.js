import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import NotFound from "./pages/NotFound/NotFound";
import Home from "./pages/HomePage/Home";
import Html from "./pages/HtmlPage/Html";
import Css from "./pages/CssPage/Css";
import Javascript from "./pages/JavascriptPage/Javascript";
import ComputerScience from "./pages/ComputerScience/ComputerScience";
import DataStructure from "./pages/DataStructure/DataStructure";
import Contact from "./pages/Contact/Contact";
import BookMark from "./pages/BookMark/BookMark";
import ReactJs from "./pages/ReactJs/ReactJs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "html", element: <Html /> },
      { path: "css", element: <Css /> },
      { path: "javascript", element: <Javascript /> },
      { path: "react", element: <ReactJs /> },
      { path: "cs", element: <ComputerScience /> },
      { path: "ds", element: <DataStructure /> },
      { path: "contact", element: <Contact /> },
      { path: "bookmark", element: <BookMark /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

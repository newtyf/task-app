import React from "react";
import ReactDOM from "react-dom/client";
import TaskApp from "./TaskApp.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <TaskApp />
    </BrowserRouter>
  </React.StrictMode>
);

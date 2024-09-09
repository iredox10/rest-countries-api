import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { DarkMode, DarkModeContext } from "./context/modeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DarkModeContext>
      <App />
    </DarkModeContext>
  </StrictMode>
);

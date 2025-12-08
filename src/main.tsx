import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

(function normalizeRedirect() {
  const url = new URL(window.location.href);
  const redirect = url.searchParams.get("redirect");

  if (redirect) {
    const targetPath =
      redirect.startsWith("/") ? redirect : `/${redirect}`;

    window.history.replaceState(null, "", targetPath);
  }
})();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
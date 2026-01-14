import ReactDOM from "react-dom/client";
import App from "./App";
import { ModelProvider } from "./context/model-context";
import { ThemeProvider } from "./context/theme-context";
import "./index.css";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <ThemeProvider>
    <ModelProvider>
      <App />
    </ModelProvider>
  </ThemeProvider>
);

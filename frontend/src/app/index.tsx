import ReactDOM from "react-dom/client";
import "./styles/index.sass";
import { App } from "./app";
import { appStarted } from "@/shared/config";

appStarted();
ReactDOM.createRoot(document.getElementById("root")!).render(<App />);

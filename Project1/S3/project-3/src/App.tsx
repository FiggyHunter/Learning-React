import Main from "./components/Main";
import NavBar from "./components/NavBar";
import { createRoot } from "react-dom/client";
import "./index.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <>
    <NavBar />
    <Main />
  </>
);

import { Routes, Route } from "react-router-dom";
import "./index.css";
import { Login } from "./pages/login";
import { HomeUser } from "./pages/HomeUser";
import { LandingPage } from "./pages/LandingPage";
import "@fontsource/roboto/500.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<HomeUser />} />
      </Routes>
    </>
  );
}
export { App };

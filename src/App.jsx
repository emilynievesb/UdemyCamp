import "./index.css";
import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { HomeUser } from "./pages/HomeUser";
import { LandingPage } from "./pages/LandingPage";
import "@fontsource/roboto/500.css";
import { Fail } from "./pages/Fail";
import { PreviewVideoUser } from "./pages/PreviewVideoUser";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom/dist";
import { userFetch } from "./shared/services/formulary";

function App() {
  const [isAuth, setIsAuth] = useState(
    async () => (await userFetch().status) === 200
  );
  const [user, setUser] = useState(false);
  const [avatar, setAvatar] = useState(false);
  const [username, setUsername] = useState(false);
  const [id, setId] = useState(false);
  const auth = (component) => (isAuth ? component : <Navigate to="/login" />);
  useEffect(() => {
    async function fetchData() {
      if (!user && isAuth) {
        const data = await userFetch();
        const response = await data.json();
        setUser(response);
        setAvatar(response.avatar);
        setId(response.id);
        setUsername(response.username);
      }
    }
    fetchData();
  }),
    [isAuth];
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={auth(
            <HomeUser username={username} id={id} avatar={avatar} />
          )}
        />
        <Route path="/fail" element={<Fail />} />
        <Route path="/preview" element={auth(<PreviewVideoUser />)} />
      </Routes>
    </>
  );
}
export { App };

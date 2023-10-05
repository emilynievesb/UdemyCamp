import "./index.css";
import "@fontsource/inter";

import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { HomeUser } from "./pages/HomeUser";
import { LandingPage } from "./pages/LandingPage";
import { PreviewVideoUser } from "./pages/PreviewVideoUser";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom/dist";
import { userFetch } from "./shared/services/fetchServices";

const statusCodeFetch = async () => {
  const fetch = await userFetch();
  if (fetch.ok) {
    return true;
  }
  return false;
};
const status = await statusCodeFetch();
function App() {
  const [isAuth, setIsAuth] = useState(status);
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
        <Route
          path="/preview/react"
          element={auth(
            <PreviewVideoUser
              username={username}
              id={id}
              avatar={avatar}
              course={"react"}
            />
          )}
        />
        <Route
          path="/preview/git"
          element={auth(
            <PreviewVideoUser
              username={username}
              id={id}
              avatar={avatar}
              course={"git"}
            />
          )}
        />
        <Route
          path="/preview/docker"
          element={auth(
            <PreviewVideoUser
              username={username}
              id={id}
              avatar={avatar}
              course={"docker"}
            />
          )}
        />
        <Route
          path="/preview/nodejs"
          element={auth(
            <PreviewVideoUser
              username={username}
              id={id}
              avatar={avatar}
              course={"node"}
            />
          )}
        />
      </Routes>
    </>
  );
}
export { App };

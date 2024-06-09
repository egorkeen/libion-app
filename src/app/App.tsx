import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("@pages/Home/Home"));
const Profile = lazy(() => import("@pages/Profile/Profile"));
const Random = lazy(() => import("@pages/Random/Random"));
const Title = lazy(() => import("@pages/Title/Title"));

export const App = () => {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Profile />} path="/profile" />
      <Route element={<Random />} path="/random" />
      <Route element={<Title />} path="/title/:titleId" />
    </Routes>
  );
};
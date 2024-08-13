import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import "./styles/index.scss"
import { Suspense, useContext, useState } from "react";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./theme/ThemeContext";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";





export const App = () => {

    const { theme, toggleTheme } = useTheme()

    return (
        <div className={classNames("app", {}, [theme])}>
            <button onClick={toggleTheme}>Swith theme</button>
            <Link to={"/"}>main</Link>
            <Link to={"/about"}>about</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={"/"} element={<MainPageAsync />} />
                    <Route path={"/about"} element={<AboutPageAsync />} />
                </Routes>
            </Suspense>
        </div>)
};
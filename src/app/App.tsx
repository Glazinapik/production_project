import { Link } from "react-router-dom";

import "./styles/index.scss"

import { classNames } from "shared/lib/classNames";
import { useTheme } from "app/providers/ThemeProvider";

import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { Suspense } from "react";
import { useTranslation } from "react-i18next";


export const App = () => {
    const { t, i18n } = useTranslation()
    const { theme, } = useTheme()
    const onToggleLanguage = () => {
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru")
    }

    return (
        <div className={classNames("app", {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <button onClick={onToggleLanguage}>{t("перевод")}</button>
            <div className="content-page">
                <Sidebar />
                <AppRouter />
            </div>
        </Suspense>
       
        </ div >
    )
}; 



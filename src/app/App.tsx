import { Suspense, useContext, useState } from "react"
import { Routes, Route, Link } from "react-router-dom"
import "./styles/index.scss"
import { AboutPage } from "pages/AboutPage"
import { MainPage } from "pages/MainPage"
import { useTheme } from "app/providers/ThemeProvider"
import { classNames } from "shared/lib/classNames/classNames"

export enum Theme {
    LIGHT = "light",
    DARK = "dark",
}

export const App = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className={classNames("app", {}, [theme])}>
            <Link to={"/"}>Глав</Link>
            <Link to={"/about"}>О</Link>
            <button onClick={toggleTheme}>{theme}</button>
            <Suspense fallback={<div>loading...</div>}>
                <Routes>
                    <Route path={"/about"} element={<AboutPage />} />
                    <Route path={"/"} element={<MainPage />} />
                </Routes>
            </Suspense>
        </div>
    )
}

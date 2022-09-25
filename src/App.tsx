import { Suspense, useContext, useState } from "react"
import { Routes, Route, Link } from "react-router-dom"
import { Counter } from "./components/Counter"
import "./styles/index.scss"
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async"
import { MainPageAsync } from "./pages/MainPage/MainPage.async"
import { useTheme } from "./theme/useTheme"
import { classNames } from "./helpers/classNames/classNames"

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
                    <Route path={"/about"} element={<AboutPageAsync />} />
                    <Route path={"/"} element={<MainPageAsync />} />
                </Routes>
            </Suspense>
            <Counter />
        </div>
    )
}

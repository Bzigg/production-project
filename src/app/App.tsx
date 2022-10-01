import { Link } from "react-router-dom"
import "./styles/index.scss"
import { useTheme } from "app/providers/ThemeProvider"
import { classNames } from "shared/lib/classNames/classNames"
import { AppRouter } from "app/providers/router"
import { Navbar } from "widgets/Navbar"

export enum Theme {
    LIGHT = "light",
    DARK = "dark",
}

export const App = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className={classNames("app", {}, [theme])}>
            <Navbar />
            <AppRouter />
            <button onClick={toggleTheme}>{theme}</button>
        </div>
    )
}
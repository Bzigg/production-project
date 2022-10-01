import { Link } from "react-router-dom"
import "./styles/index.scss"
import { useTheme } from "app/providers/ThemeProvider"
import { classNames } from "shared/lib/classNames/classNames"
import { AppRouter } from "app/providers/router"

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
            <AppRouter />
        </div>
    )
}

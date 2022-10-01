import { createContext } from "react"

export interface IthemeContextProps {
    theme?: Theme
    setTheme?: (theme: Theme) => void
}

export enum Theme {
    LIGHT = "light",
    DARK = "dark",
}

export const ThemeContext = createContext<IthemeContextProps>({})

export const LOCAL_STORAGE_THEME_KEY = "theme"

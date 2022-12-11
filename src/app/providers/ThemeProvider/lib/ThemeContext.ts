import { createContext } from "react"

export interface IthemeContextProps {
    theme?: Theme
    setTheme?: (theme: Theme) => void
}

export enum Theme {
    LIGHT = "app_light_theme",
    DARK = "app_dark_theme",
}

export const ThemeContext = createContext<IthemeContextProps>({})

export const LOCAL_STORAGE_THEME_KEY = "theme"

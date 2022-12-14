import { Theme, useTheme } from "app/providers/ThemeProvider"
import { classNames } from "shared/lib/classNames/classNames"
import cls from "./ThemeSwitcher.module.scss"
import LightIcon from "shared/assets/icons/theme-light.svg"
import DarkIcon from "shared/assets/icons/theme-dark.svg"
import { AppButton, ButtonTheme } from "shared/ui/AppButton/AppButton"

interface ThemeSwitcher {
    className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcher) => {
    const { theme, toggleTheme } = useTheme()

    return (
        <AppButton
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
            theme={ButtonTheme.CLEAR}
        >
            {theme === Theme.DARK ? <LightIcon /> : <DarkIcon />}
        </AppButton>
    )
}

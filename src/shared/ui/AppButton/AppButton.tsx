import { ButtonHTMLAttributes, FC } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import cls from "./AppButton.module.scss"

export enum ButtonTheme {
    CLEAR = "clear",
    CLEAR_INVERTED = "clearInverted",
    OUTLINE = "outline",
    BACKGROUND = "background",
    BACKGROUND_INVERTED = "backgroundInverted",
}

export enum ButtonSize {
    M = "size_m",
    L = "size_l",
    XL = "size_xl",
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonTheme
    square?: boolean
    size?: ButtonSize
}

export const AppButton: FC<AppButtonProps> = (props) => {
    const { className, children, theme, square, size, ...otherProps } = props

    const mods: Record<string, boolean> = {
        [cls[theme]]: true,
        [cls[size]]: true,
        [cls.square]: square,
    }

    return (
        <button
            className={classNames(cls.AppButton, mods, [className])}
            {...otherProps}
        >
            {children}
        </button>
    )
}

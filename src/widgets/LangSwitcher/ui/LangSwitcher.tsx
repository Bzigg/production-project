import { useTranslation } from "react-i18next"
import { classNames } from "shared/lib/classNames/classNames"
import { AppButton, ButtonTheme } from "shared/ui/AppButton/AppButton"
import cls from "./LangSwitcher.module.scss"

interface ILangSwitcherProps {
    className?: string
    short?: boolean
}

export const LangSwitcher = (props: ILangSwitcherProps) => {
    const { className, short } = props

    const { t, i18n } = useTranslation()

    const change = async () => {
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru")
    }

    return (
        <AppButton
            theme={ButtonTheme.CLEAR}
            className={classNames(cls.LangSwitcher, {}, [className])}
            onClick={change}
        >
            {t(short ? "Короткий язык" : "Язык")}
        </AppButton>
    )
}

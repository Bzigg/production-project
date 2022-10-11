import { useTranslation } from "react-i18next"
import { classNames } from "shared/lib/classNames/classNames"
import { AppButton, ThemeButton } from "shared/ui/AppButton/AppButton"
import cls from "./LangSwitcher.module.scss"

interface ILangSwitcherProps {
    className?: string
}

export const LangSwitcher = (props: ILangSwitcherProps) => {
    const { className } = props

    const { t, i18n } = useTranslation()

    const change = () => {
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru")
    }

    return (
        <AppButton
            theme={ThemeButton.CLEAR}
            className={classNames(cls.LangSwitcher, {}, [className])}
            onClick={change}
        >
            {t("Язык")}
        </AppButton>
    )
}

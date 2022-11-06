import React from "react"
import { useTranslation } from "react-i18next"
import { classNames } from "shared/lib/classNames/classNames"
import { AppButton } from "shared/ui/AppButton/AppButton"
import cls from "./PageError.module.scss"

interface PageErrorProps {
    className?: string
}

export const PageError: React.FC<PageErrorProps> = ({ className }) => {
    const { t } = useTranslation()

    const reloadPage = () => {
        //
        location.reload()
    }

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p>{t("Произошла непредвиденная ошибка")}</p>
            <AppButton onClick={reloadPage}>{t("Обновить")}</AppButton>
        </div>
    )
}

import { useState } from "react"
import { RoutePath } from "shared/config/routeConfig/routeConfig"
import { classNames } from "shared/lib/classNames/classNames"
import {
    AppButton,
    ButtonSize,
    ButtonTheme,
} from "shared/ui/AppButton/AppButton"
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink"
import { LangSwitcher } from "widgets/LangSwitcher"
import { ThemeSwitcher } from "widgets/ThemeSwitcher"
import HomeIcon from "shared/assets/icons/home.svg"
import ListIcon from "shared/assets/icons/list.svg"
import cls from "./Sidebar.module.scss"
import { useTranslation } from "react-i18next"

export const Sidebar = () => {
    const { t, i18n } = useTranslation()
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed((prev) => !prev)
    }

    return (
        <div
            data-testid="sidebar"
            className={classNames(
                cls.Sidebar,
                { [cls.collapsed]: collapsed },
                []
            )}
        >
            <div className={cls.items}>
                <div className={cls.item}>
                    <AppLink
                        theme={AppLinkTheme.SECONDARY}
                        className={cls.link}
                        to={RoutePath.main}
                    >
                        <HomeIcon className={cls.icon} />
                        <span className={cls.text}>{t("Главная")}</span>
                    </AppLink>
                </div>
                <div className={cls.item}>
                    <AppLink
                        theme={AppLinkTheme.SECONDARY}
                        className={cls.link}
                        to={RoutePath.about}
                    >
                        <ListIcon className={cls.icon} />
                        <span className={cls.text}>{t("О сайте")}</span>
                    </AppLink>
                </div>
            </div>
            <AppButton
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square={true}
                size={ButtonSize.L}
            >
                {collapsed ? ">" : "<"}
            </AppButton>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} short={collapsed} />
            </div>
        </div>
    )
}

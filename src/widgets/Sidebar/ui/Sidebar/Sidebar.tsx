import { useState } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import {
    AppButton,
    ButtonSize,
    ButtonTheme,
} from "shared/ui/AppButton/AppButton"
import { LangSwitcher } from "widgets/LangSwitcher"
import { ThemeSwitcher } from "widgets/ThemeSwitcher"
import cls from "./Sidebar.module.scss"

export const Sidebar = () => {
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

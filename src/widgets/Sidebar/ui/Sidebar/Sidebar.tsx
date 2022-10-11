import { useState } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import { AppButton } from "shared/ui/AppButton/AppButton"
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
            className={classNames(
                cls.Sidebar,
                { [cls.collapsed]: collapsed },
                []
            )}
        >
            <AppButton onClick={onToggle}>1</AppButton>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    )
}

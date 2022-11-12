import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink"
import { classNames } from "shared/lib/classNames/classNames"
import cls from "./Navbar.module.scss"

interface NavbarProps {
    className?: string
}

export const Navbar = () => {
    return (
        <div className={classNames(cls.Nav, {}, [])}>
            <div></div>
        </div>
    )
}

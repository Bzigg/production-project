import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink"
import { classNames } from "shared/lib/classNames/classNames"
import cls from "./Navbar.module.scss"

interface NavbarProps {
    className?: string
}

export const Navbar = () => {
    return (
        <div className={classNames(cls.Nav, {}, [])}>
            <div className={cls.links}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.link}
                    to={"/"}
                >
                    Глав
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.link}
                    to={"/about"}
                >
                    О сайте
                </AppLink>
            </div>
        </div>
    )
}

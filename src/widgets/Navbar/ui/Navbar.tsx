import { classNames } from "shared/lib/classNames/classNames"
import cls from "./Navbar.module.scss"
import { useCallback, useState } from "react"
import { Modal } from "shared/ui/Modal/Modal"
import { AppButton, ButtonTheme } from "shared/ui/AppButton/AppButton"
import { useTranslation } from "react-i18next"

interface NavbarProps {
    className?: string
}

export const Navbar = () => {
    const [isAuthModal, setIsAuthModal] = useState(false)
    const { t } = useTranslation()

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prevValue) => !prevValue)
    }, [])

    return (
        <div className={classNames(cls.Nav, {}, [])}>
            <div>
                <AppButton
                    theme={ButtonTheme.CLEAR_INVERTED}
                    onClick={onToggleModal}
                >
                    {t("Войти")}
                </AppButton>
            </div>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                123
            </Modal>
        </div>
    )
}

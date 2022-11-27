import { ErrorBtn } from "app/providers/ErrorBoundary"
import { Counter } from "entities/Counter"
import { useTranslation } from "react-i18next"

const MainPage = () => {
    const { t } = useTranslation("main")

    return (
        <div>
            <ErrorBtn />
            <br />
            {t("Главная")}
            <br />
            <Counter></Counter>
        </div>
    )
}

export default MainPage

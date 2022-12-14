import { render, screen } from "@testing-library/react"
import { AppButton, ButtonTheme } from "shared/ui/AppButton/AppButton"

describe("AppButton", () => {
    test("без пропсов", () => {
        render(<AppButton>Test</AppButton>)
        expect(screen.getByText("Test")).toBeInTheDocument()
    })

    test("тема clear", () => {
        render(<AppButton theme={ButtonTheme.CLEAR}>Test</AppButton>)
        expect(screen.getByText("Test")).toHaveClass("clear")
        // вывод DOM элемента в консоль
        // screen.debug()
    })
})

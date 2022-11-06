import { render, screen } from "@testing-library/react"
import { AppButton, ThemeButton } from "shared/ui/AppButton/AppButton"

describe("AppButton", () => {
    test("без пропсов", () => {
        render(<AppButton>Test</AppButton>)
        expect(screen.getByText("Test")).toBeInTheDocument()
    })

    test("тема clear", () => {
        render(<AppButton theme={ThemeButton.CLEAR}>Test</AppButton>)
        expect(screen.getByText("Test")).toHaveClass("clear")
        screen.debug()
    })
})

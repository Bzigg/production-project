import { fireEvent, screen } from "@testing-library/react"
import { Sidebar } from "widgets/Sidebar"
import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation/renderWithTranslation"

describe("Sidebar", () => {
    test("без пропсов", () => {
        renderWithTranslation(<Sidebar />)
        expect(screen.getByTestId("sidebar")).toBeInTheDocument()
    })

    test("toggle test", () => {
        renderWithTranslation(<Sidebar />)
        const toggleBtn = screen.getByTestId("sidebar-toggle")
        expect(screen.getByTestId("sidebar")).toBeInTheDocument()
        fireEvent.click(toggleBtn)
        expect(screen.getByTestId("sidebar")).toHaveClass("collapsed")
    })
})
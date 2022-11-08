import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { AppButton, ThemeButton } from "./AppButton"
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator"
import { Theme } from "app/providers/ThemeProvider"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "shared/AppButton",
    component: AppButton,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof AppButton>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AppButton> = (args) => (
    <AppButton {...args} />
)

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    children: "Text",
}

export const PrimaryDark = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PrimaryDark.args = {
    children: "Text",
}

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Clear = Template.bind({})
Clear.args = {
    children: "Text",
    theme: ThemeButton.CLEAR,
}

export const ClearDark = Template.bind({})
ClearDark.args = {
    children: "Text",
    theme: ThemeButton.CLEAR,
}

ClearDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Outline = Template.bind({})
Outline.args = {
    children: "Text",
    theme: ThemeButton.OUTLINE,
}

export const OutlineDark = Template.bind({})
OutlineDark.args = {
    children: "Text",
    theme: ThemeButton.OUTLINE,
}

Outline.decorators = [ThemeDecorator(Theme.DARK)]

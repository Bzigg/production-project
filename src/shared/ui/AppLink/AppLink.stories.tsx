import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { AppLink, AppLinkTheme } from "./AppLink"
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator"
import { Theme } from "app/providers/ThemeProvider"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "shared/AppLink",
    component: AppLink,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: "color" },
    },
    args: {
        to: "#",
        children: "link",
    },
} as ComponentMeta<typeof AppLink>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />

export const PRIMARY = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PRIMARY.args = {
    theme: AppLinkTheme.PRIMARY,
}

export const PRIMARY_DARK = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PRIMARY_DARK.args = {
    theme: AppLinkTheme.PRIMARY,
}

PRIMARY_DARK.decorators = [ThemeDecorator(Theme.DARK)]

export const SECONDARY = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SECONDARY.args = {
    theme: AppLinkTheme.SECONDARY,
}

export const SECONDARY_DARK = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SECONDARY_DARK.args = {
    theme: AppLinkTheme.SECONDARY,
}

SECONDARY_DARK.decorators = [ThemeDecorator(Theme.DARK)]

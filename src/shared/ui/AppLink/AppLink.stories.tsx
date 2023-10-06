import type { Meta, StoryObj } from "@storybook/react";
import { AppLink, AppLinkTheme } from "./AppLink";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof AppLink> = {
  title: "shared/AppLink",
  component: AppLink,
  parameters: {},
  tags: [],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
  args: {
    children: "Text",
    theme: AppLinkTheme.PRIMARY,
    to: "/",
  },
};
export const PrimaryDark: Story = {
  args: {
    children: "Text",
    theme: AppLinkTheme.PRIMARY,
    to: "/",
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Secondary: Story = {
  args: {
    children: "Text",
    theme: AppLinkTheme.PRIMARY,
    to: "/",
  },
};
export const SecondaryDark: Story = {
  args: {
    children: "Text",
    theme: AppLinkTheme.PRIMARY,
    to: "/",
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
export const Red: Story = {
  args: {
    children: "Text",
    theme: AppLinkTheme.RED,
    to: "/",
  },
};
export const RedDark: Story = {
  args: {
    children: "Text",
    theme: AppLinkTheme.RED,
    to: "/",
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

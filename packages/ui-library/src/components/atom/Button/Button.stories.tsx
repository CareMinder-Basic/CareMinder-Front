import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Button from "./Button"; // Adjust path based on your project structure

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    label: { control: "text" },
    onClick: { action: "clicked" },
  },
} as Meta;

const Template: StoryFn<typeof Button> = (args) => (
  <Button label={"테스트"} {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Click Me",
};

export const WithEmoji = Template.bind({});
WithEmoji.args = {
  label: "🚀 Launch",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled",
  onClick: undefined,
};

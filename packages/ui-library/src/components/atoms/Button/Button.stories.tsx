import type { Meta, StoryObj } from "@storybook/react";
import CDSButton from "./Button";

const meta = {
  title: "Components/Button",
  component: CDSButton,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    width: { control: "text" },
    height: { control: "text" },
    fontSize: { control: "text" },
    borderRadius: { control: "text" },
    fontWeight: { control: "text" },
    lineHeight: { control: "text" },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CDSButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// Primary 버튼
export const Primary: Story = {
  name: "Primary",
  args: {
    buttontype: "primary",
    children: "BUTTON",
    width: "200px",
    height: "48px",
    fontSize: "16px",
    borderRadius: "8px",
  },
};

// Primary White 버튼
export const PrimaryWhite: Story = {
  name: "Primary White",
  args: {
    buttontype: "primaryWhite",
    children: "BUTTON",
    width: "200px",
    height: "48px",
    fontSize: "16px",
    borderRadius: "8px",
  },
};

// Primary White with Border 버튼
export const PrimaryWhiteBorder: Story = {
  name: "Primary White with Border",
  args: {
    buttontype: "primarySpaureWhite",
    children: "BUTTON",
    width: "200px",
    height: "48px",
    fontSize: "16px",
    borderRadius: "8px",
  },
};

// Black Border 버튼
export const BlackBorder: Story = {
  name: "Black Border",
  args: {
    buttontype: "primaryBlack",
    children: "BUTTON",
    width: "200px",
    height: "48px",
    fontSize: "16px",
    borderRadius: "8px",
  },
};

// Gradient 버튼
export const Gradient: Story = {
  name: "Gradient",
  args: {
    buttontype: "gradient",
    children: "BUTTON",
    width: "600px",
    height: "82px",
    fontSize: "16px",
    borderRadius: "8px",
  },
};

// Impact Red 버튼
export const ImpactRed: Story = {
  name: "Impact Red",
  args: {
    buttontype: "impactRed",
    children: "BUTTON",
    width: "141px",
    height: "32px",
    fontSize: "14px",
    borderRadius: "8px",
  },
};

// Secondary 버튼
export const Secondary: Story = {
  name: "Secondary",
  args: {
    buttontype: "primarySecond",
    children: "BUTTON",
    width: "148px",
    height: "36px",
    fontSize: "16px",
    borderRadius: "6px",
  },
};

// 아이콘이 있는 버튼
export const WithIcon: Story = {
  name: "With Icon",
  args: {
    buttontype: "primary",
    children: "BUTTON",
    icon: "→",
    width: "200px",
    height: "48px",
    fontSize: "16px",
    borderRadius: "8px",
  },
};

// 커스텀 사이즈 버튼
export const CustomSized: Story = {
  name: "Custom Size",
  args: {
    buttontype: "primary",
    children: "BUTTON",
    width: "300px",
    height: "60px",
    fontSize: "20px",
    borderRadius: "12px",
    fontWeight: "500",
    lineHeight: "28px",
  },
};

// 비활성화된 버튼
export const Disabled: Story = {
  name: "Disabled",
  args: {
    buttontype: "primary",
    children: "BUTTON",
    width: "200px",
    height: "48px",
    fontSize: "16px",
    borderRadius: "8px",
    disabled: true,
  },
};

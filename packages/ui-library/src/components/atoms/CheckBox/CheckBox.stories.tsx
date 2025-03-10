import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './CheckBox';
import React from 'react';

const meta = {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['mint', 'blue', 'gray'],
      description: '체크박스의 색상을 설정합니다',
    },
    checked: {
      control: 'boolean',
      description: '체크박스의 선택 상태를 설정합니다',
    },
    disabled: {
      control: 'boolean',
      description: '체크박스의 비활성화 상태를 설정합니다',
    },
    onCheckedChange: {
      action: 'checked changed',
      description: '체크박스 상태가 변경될 때 호출되는 함수입니다',
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 체크박스 (민트색)
export const Default: Story = {
  args: {
    variant: 'ward',
  },
};

// 색상 변형 예시
export const Variants: Story = {
  render: () => (
    <div className="flex items-center space-x-4">
      <Checkbox variant="admin" checked />
      <Checkbox variant="ward" checked />
      <Checkbox variant="staff" checked />
    </div>
  ),
};

// 체크된 상태
export const Checked: Story = {
  args: {
    checked: true,
  },
};

// 비활성화 상태
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

// 체크된 비활성화 상태
export const CheckedAndDisabled: Story = {
  args: {
    checked: true,
    disabled: true,
  },
};

// 라벨과 함께 사용하는 예시
export const WithLabel: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Checkbox variant="admin" id="mint" />
        <label htmlFor="mint" className="text-sm font-medium leading-none">
          어드민 체크박스
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox variant="ward" id="blue" />
        <label htmlFor="blue" className="text-sm font-medium leading-none">
          병동 체크박스
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox variant="staff" id="gray" />
        <label htmlFor="gray" className="text-sm font-medium leading-none">
          스테프 체크박스
        </label>
      </div>
    </div>
  ),
};

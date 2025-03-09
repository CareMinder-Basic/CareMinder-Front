import type { Meta, StoryObj } from '@storybook/react';
import { LockIcon, PersonIcon } from './Icon';
import React from 'react';

const meta = {
  title: 'Atoms/Icon',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'number',
      defaultValue: 30,
    },
    className: {
      control: 'text',
    },
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj;

// 기본 아이콘들
export const Icons: Story = {
  render: (args) => (
    <div className="flex gap-4 items-center">
      <div className="flex flex-col items-center gap-2">
        <LockIcon {...args} />
        <span className="text-sm">LockIcon</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <PersonIcon {...args} />
        <span className="text-sm">PersonIcon</span>
      </div>
    </div>
  ),
};

// 다양한 크기
export const IconSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div className="flex gap-4 items-end">
        <div className="flex flex-col items-center gap-2">
          <LockIcon size={20} />
          <span className="text-sm">20px</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <LockIcon size={24} />
          <span className="text-sm">24px</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <LockIcon size={30} />
          <span className="text-sm">30px</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <LockIcon size={36} />
          <span className="text-sm">36px</span>
        </div>
      </div>
    </div>
  ),
};

// 다양한 색상
export const IconColors: Story = {
  render: () => (
    <div className="flex gap-4">
      <div className="flex flex-col items-center gap-2">
        <LockIcon className="text-primary" />
        <span className="text-sm">Primary</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <LockIcon className="text-destructive" />
        <span className="text-sm">Destructive</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <LockIcon className="text-text-DEFAULT" />
        <span className="text-sm">Default</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <LockIcon className="text-disabled" />
        <span className="text-sm">Disabled</span>
      </div>
    </div>
  ),
}; 
import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from './Spinner';
import React from 'react';

const meta = {
  title: 'Atoms/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['admin', 'staff', 'ward'],
      description: '스피너의 색상 variant를 설정합니다',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: '스피너의 크기를 설정합니다',
    },
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스피너
export const Default: Story = {
  args: {
    variant: 'admin',
    size: 'md',
  },
};

// Variant별 스피너
export const Variants: Story = {
  render: () => (
    <div className="flex items-center space-x-4">
      <Spinner variant="admin" />
      <Spinner variant="staff" />
      <Spinner variant="ward" />
    </div>
  ),
};

// 크기별 스피너
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center space-x-4">
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </div>
  ),
};

// Variant와 크기 조합
export const VariantsWithSizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm font-medium">Admin</p>
        <div className="flex items-center space-x-4">
          <Spinner variant="admin" size="sm" />
          <Spinner variant="admin" size="md" />
          <Spinner variant="admin" size="lg" />
        </div>
      </div>
      <div className="space-y-2">
        <p className="text-sm font-medium">Staff</p>
        <div className="flex items-center space-x-4">
          <Spinner variant="staff" size="sm" />
          <Spinner variant="staff" size="md" />
          <Spinner variant="staff" size="lg" />
        </div>
      </div>
      <div className="space-y-2">
        <p className="text-sm font-medium">Ward</p>
        <div className="flex items-center space-x-4">
          <Spinner variant="ward" size="sm" />
          <Spinner variant="ward" size="md" />
          <Spinner variant="ward" size="lg" />
        </div>
      </div>
    </div>
  ),
};
import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './TextArea';
import React from 'react';

const meta = {
  title: 'Atoms/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['admin', 'staff', 'ward'],
      description: 'TextArea의 포커스 색상 variant를 설정합니다',
    },
    width: {
      control: 'number',
      description: 'TextArea의 너비를 픽셀 단위로 설정합니다',
    },
    height: {
      control: 'number',
      description: 'TextArea의 높이를 픽셀 단위로 설정합니다',
    },
    disabled: {
      control: 'boolean',
      description: 'TextArea의 비활성화 상태를 설정합니다',
    },
    placeholder: {
      control: 'text',
      description: 'placeholder 텍스트를 설정합니다',
    },
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 TextArea (Admin)
export const Default: Story = {
  args: {
    placeholder: '메모를 입력해주세요.',
    width: 327,
    height: 80,
    variant: 'admin',
  },
};

// 큰 크기의 TextArea
export const Large: Story = {
  args: {
    placeholder: '메모를 입력해주세요.',
    width: 327,
    height: 160,
  },
};

// Variant 예시
export const Variants: Story = {
  render: () => (
    <div className="space-y-4 ">
      <div className="space-y-2 flex flex-col">
        <label className="text-sm font-medium">Admin Textarea</label>
        <Textarea
          variant="admin"
          placeholder="Admin 포커스 색상"
          width={327}
          height={80}
        />
      </div>
      <div className="space-y-2 flex flex-col">
        <label className="text-sm font-medium">Staff Textarea</label>
        <Textarea
          variant="staff"
          placeholder="Staff 포커스 색상"
          width={327}
          height={80}
        />
      </div>
      <div className="space-y-2 flex flex-col">
        <label className="text-sm font-medium">Ward Textarea</label>
        <Textarea
          variant="ward"
          placeholder="Ward 포커스 색상"
          width={327}
          height={80}
        />
      </div>
    </div>
  ),
};

// 비활성화된 TextArea
export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: '비활성화된 상태',
    width: 327,
    height: 80,
    value: '수정할 수 없는 내용입니다.',
  },
};

// 라벨이 있는 TextArea
export const WithLabel: Story = {
  render: () => (
    <div className="space-y-2 flex flex-col">
      <label 
        htmlFor="message" 
        className="text-sm font-medium"
      >
        메모
      </label>
      <Textarea 
        id="message" 
        placeholder="메모를 입력해주세요." 
        width={327}
        height={80}
      />
    </div>
  ),
};
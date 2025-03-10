import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './Switch';
import { useState } from 'react';
import React from 'react';

const meta = {
  title: 'Atoms/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['admin', 'staff', 'ward'],
      description: '스위치의 색상 variant를 설정합니다',
    },
    checked: {
      control: 'boolean',
      description: '스위치의 on/off 상태를 설정합니다',
    },
    disabled: {
      control: 'boolean',
      description: '스위치의 비활성화 상태를 설정합니다',
    },
    onCheckedChange: {
      action: 'checked changed',
      description: '스위치 상태가 변경될 때 호출되는 함수입니다',
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

// 색상 variant 예시
export const Variants: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between space-x-4">
        <span className="text-sm font-medium">Admin</span>
        <Switch variant="admin" defaultChecked />
      </div>
      <div className="flex items-center justify-between space-x-4">
        <span className="text-sm font-medium">Staff</span>
        <Switch variant="staff" defaultChecked />
      </div>
      <div className="flex items-center justify-between space-x-4">
        <span className="text-sm font-medium">Ward</span>
        <Switch variant="ward" defaultChecked />
      </div>
    </div>
  ),
};

// 기본 스위치
export const Default: Story = {
  args: {
    checked: false,
  },
};

// 활성화된 스위치
export const Checked: Story = {
  args: {
    checked: true,
  },
};

// 비활성화된 스위치
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

// 비활성화되고 체크된 스위치
export const CheckedAndDisabled: Story = {
  args: {
    checked: true,
    disabled: true,
  },
};

// 라벨과 함께 사용하는 예시
export const WithLabel: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    
    return (
      <div className="flex items-center space-x-2">
        <Switch
          id="airplane-mode"
          checked={checked}
          onCheckedChange={setChecked}
        />
        <label
          htmlFor="airplane-mode"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          비행기 모드
        </label>
      </div>
    );
  },
};

// 여러 개의 스위치 그룹
export const SwitchGroup: Story = {
  render: () => {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label
            htmlFor="notifications"
            className="text-sm font-medium leading-none"
          >
            알림 설정
          </label>
          <Switch id="notifications" defaultChecked />
        </div>
        
        <div className="flex items-center justify-between">
          <label
            htmlFor="email-notifications"
            className="text-sm font-medium leading-none"
          >
            이메일 알림
          </label>
          <Switch id="email-notifications" />
        </div>
        
        <div className="flex items-center justify-between">
          <label
            htmlFor="marketing-emails"
            className="text-sm font-medium leading-none"
          >
            마케팅 수신 동의
          </label>
          <Switch id="marketing-emails" disabled />
        </div>
      </div>
    );
  },
};

// 상태 변경 예시
export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between space-x-4">
          <Switch
            checked={checked}
            onCheckedChange={setChecked}
          />
          <span className="text-sm">
            현재 상태: {checked ? 'On' : 'Off'}
          </span>
        </div>
      </div>
    );
  },
};
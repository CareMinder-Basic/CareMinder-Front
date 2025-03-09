import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button } from './Button';

const meta = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link', 'gradient'],
    },    
    color: {
      control: 'color',
    },
    radius: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl', 'full'],
    },
    textSize: {
      control: 'select',
      options: [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'body1',
        'body2',
        'title',
        'subtitle1',
        'subtitle2',
        'caption',
        'overline'
      ],
    },
    width: {
      control: 'text',
    },
    height: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    asChild: {
      control: 'boolean',
    },
    fontWeight: {
      control: 'select',
      options: ['thin', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold'],
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

// 기본 버튼 스타일들
export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'default',
    width: '140px',
    height: '40px',
    textSize: "base", 
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
    width: '140px',
    height: '40px',
    textSize: "base", 
  },
};

export const Destructive: Story = {
  args: {
    children: 'Destructive Button',
    variant: 'destructive',
    width: '140px',
    height: '40px',
    textSize: "base", 
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline Button',
    variant: 'outline',
    width: '140px',
    height: '40px',
    textSize: "base", 
  },
};

export const Ghost: Story = {
  args: {
    children: 'Ghost Button',
    variant: 'ghost',
    width: '140px',
    height: '40px',
    textSize: "base", 
  },
};

export const Link: Story = {
  args: {
    children: 'Link Button',
    variant: 'link',
    width: '140px',
    height: '40px',
    textSize: "base", 
  },
};

// 아이콘 버튼
export const IconButton: Story = {
  args: {
    children: '→',    
    width: '140px',
    height: '40px',
    textSize: "base", 
  },
};

// 아이콘과 텍스트가 함께 있는 버튼
export const WithIcon: Story = {
  args: {
    width: '140px',
    height: '40px',
    textSize: "base", 
    children: (
      <>
        Next
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </>
    ),
  },
};

// 비활성화된 버튼
export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
    width: '140px',
    height: '40px',
    textSize: "base", 
  },
};

//그라데이션 버튼
export const Gradient: Story = {  
  args: {
    children: 'Gradient Button',
    variant: 'gradient',
    width: '140px',
    height: '40px',
    textSize: "base", 
  },
}

// All variants
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <Button width={'100px'} height={'40px'}>Default</Button>
        <Button variant="secondary" width={'100px'} height={'40px'}>Secondary</Button>
        <Button variant="destructive" width={'100px'} height={'40px'}>Destructive</Button>
      </div>
      <div className="flex gap-4">
        <Button variant="outline" width={'100px'} height={'40px'}>Outline</Button>
        <Button variant="ghost" width={'100px'} height={'40px'}>Ghost</Button>
        <Button variant="link" width={'100px'} height={'40px'}>Link</Button>
      </div>
      <div className="flex gap-4">
        <Button variant="gradient" width={'100px'} height={'40px'}>Gradient</Button>
      </div>
    </div>
  ),
};

// All radius variants
export const AllRadiusVariants: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button radius="none" width="100px" height="40px">None</Button>
      <Button radius="sm" width="100px" height="40px">Small</Button>
      <Button radius="md" width="100px" height="40px">Medium</Button>
      <Button radius="lg" width="100px" height="40px">Large</Button>
      <Button radius="xl" width="100px" height="40px">XLarge</Button>
      <Button radius="full" width="100px" height="40px">Full</Button>
    </div>
  ),
};

// All text sizes
export const AllTextSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Button textSize="xs" width="200px" height="40px">H1 Text (12px)</Button>
      <Button textSize="sm" width="200px" height="40px">H2 Text (14px)</Button>
      <Button textSize="base" width="200px" height="40px">H3 Text (16px)</Button>
      <Button textSize="lg" width="200px" height="40px">H4 Text (18px)</Button>
      <Button textSize="xl" width="200px" height="40px">H5 Text (20px)</Button>
      <Button textSize="2xl" width="200px" height="40px">Body1 Text (24px)</Button>
      <Button textSize="3xl" width="200px" height="40px">Body2 Text (30px)</Button>      
    </div>
  ),
};

// All font weights
export const AllFontWeights: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Button fontWeight="thin" width="200px" height="40px">Thin Text</Button>
      <Button fontWeight="light" width="200px" height="40px">Light Text</Button>
      <Button fontWeight="normal" width="200px" height="40px">Normal Text</Button>
      <Button fontWeight="medium" width="200px" height="40px">Medium Text</Button>
      <Button fontWeight="semibold" width="200px" height="40px">Semibold Text</Button>
      <Button fontWeight="bold" width="200px" height="40px">Bold Text</Button>
      <Button fontWeight="extrabold" width="200px" height="40px">Extra Bold Text</Button>
    </div>
  ),
};




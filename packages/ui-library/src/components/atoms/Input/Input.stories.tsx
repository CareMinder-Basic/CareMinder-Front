import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import React from 'react';

const meta = {
  title: 'Atoms/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
      description: '입력 필드가 비활성화되었는지 여부를 나타냅니다',      
    },
    placeholder: {
      control: 'text',
      description: '입력 필드의 플레이스홀더 텍스트를 나타냅니다',
    },
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number', 'search', 'tel', 'url'],
      description: '입력 필드의 타입을 나타냅니다',
    },
    leftIconPosition: {
      control: 'number',
      description: '왼쪽 아이콘의 위치를 나타냅니다',
      
    },
    rightIconPosition: {
      control: 'number',
      description: '오른쪽 아이콘의 위치를 나타냅니다',
      defaultValue: 5,
    },
    width: {
      control: 'text',
    },    
    height: {
      control: 'text',
      description: '입력 필드의 높이를 나타냅니다',
    },
    radius: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl', 'full'],
      description: '입력 필드의 모서리 반경을 나타냅니다',
    },
    textSize: {
      control: 'select',
      options: ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl'],
      description: '입력 필드의 텍스트 크기를 나타냅니다',
    },
    fontWeight: {
      control: 'select',
      options: ['thin', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold'],
      description: '입력 필드의 폰트 두께를 나타냅니다',
    },
    status: {
      control: 'select',
      options: ['default', 'error', 'success', 'warning'],
      description: '입력 필드의 상태를 나타냅니다',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

// 기본 입력 필드
export const Default: Story = {
  args: {
    placeholder: '입력해주세요',
    width: '300px',
    height: '40px',
  },
};



// 이메일 입력 필드
export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'example@email.com',
    width: '300px',
    height: '40px',
  },
};

// 비밀번호 입력 필드
export const Password: Story = {
  args: {
    type: 'password',
    placeholder: '비밀번호를 입력해주세요',
    width: '300px',
    height: '40px',
  },
};

// 검색 입력 필드
export const Search: Story = {
  args: {
    type: 'search',
    placeholder: '검색어를 입력해주세요',
    width: '300px',
    height: '40px',          
  },
};

// 라벨과 함께 사용하는 예시
export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <label htmlFor="email" className="text-sm font-medium leading-none">
        이메일
      </label>
      <Input type="email" id="email" placeholder="example@email.com" width={''} height={''} />
    </div>
  ),
};

// 검색 아이콘
const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

// 이메일 아이콘
const EmailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

// 비밀번호 아이콘
const LockIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

// 왼쪽 아이콘이 있는 입력 필드
export const WithLeftIcon: Story = {
  args: {
    placeholder: '검색어를 입력하세요',
    leftIcon: <SearchIcon />,
    leftIconPosition: 5,
  },
};

// 오른쪽 아이콘이 있는 입력 필드
export const WithRightIcon: Story = {
  args: {
    placeholder: '검색어를 입력하세요',
    rightIcon: <SearchIcon />,
  },
};

// 양쪽 아이콘이 있는 입력 필드
export const WithBothIcons: Story = {
  args: {
    placeholder: '검색어를 입력하세요',
    leftIcon: <SearchIcon />,
    rightIcon: <EmailIcon />,
  },
};

// 다양한 아이콘 입력 필드 예시
export const IconInputVariants: Story = {
  render: () => (
    <div className="flex flex-col space-y-4 w-[300px]">
      <Input
        placeholder="이메일을 입력하세요"
        leftIcon={<EmailIcon />} width={''} height={''}      />
      <Input
        type="password"
        placeholder="비밀번호를 입력하세요"
        leftIcon={<LockIcon />} width={''} height={''}      />
      <Input
        placeholder="검색어를 입력하세요"
        leftIcon={<SearchIcon />} width={''} height={''}      />
      <Input
        placeholder="클릭 가능한 아이콘"
        rightIcon={<button
          onClick={() => alert('clicked!')}
          className="hover:text-primary"
        >
          <SearchIcon />
        </button>} width={''} height={''}      />
    </div>
  ),
};

// 모든 radius 변형 보여주기
export const AllRadiusVariants: Story = {
  render: () => (
    <div className="flex flex-col space-y-4 w-[300px]">
      <Input radius="none" placeholder="No Radius" width="300px" height="40px" />
      <Input radius="sm" placeholder="Small Radius" width="300px" height="40px" />
      <Input radius="md" placeholder="Medium Radius" width="300px" height="40px" />
      <Input radius="lg" placeholder="Large Radius" width="300px" height="40px" />
      <Input radius="xl" placeholder="Extra Large Radius" width="300px" height="40px" />
      <Input radius="full" placeholder="Full Radius" width="300px" height="40px" />
    </div>
  ),
};

// 모든 텍스트 크기 변형 보여주기
export const AllTextSizes: Story = {
  render: () => (
    <div className="flex flex-col space-y-4 w-[300px]">
      <Input textSize="xs" placeholder="Extra Small (12px)" width="300px" height="40px" />
      <Input textSize="sm" placeholder="Small (14px)" width="300px" height="40px" />
      <Input textSize="base" placeholder="Base (16px)" width="300px" height="40px" />
      <Input textSize="lg" placeholder="Large (18px)" width="300px" height="40px" />
      <Input textSize="xl" placeholder="Extra Large (20px)" width="300px" height="40px" />
      <Input textSize="2xl" placeholder="2XL (24px)" width="300px" height="40px" />
      <Input textSize="3xl" placeholder="3XL (30px)" width="300px" height="40px" />
    </div>
  ),
};

export const StatusVariants: Story = {
  render: () => (
    <div className="flex flex-col space-y-4 w-[300px]">
      <Input 
        status="default"
        placeholder="기본 상태"
        width="300px"
        height="40px"
      />
      <Input 
        status="error"
        placeholder="에러 상태"
        width="300px"
        height="40px"
      />
      <Input 
        status="success"
        placeholder="성공 상태"
        width="300px"
        height="40px"
      />  
      <Input 
        status="default"
        disabled={true}
        placeholder="비활성화 상태"
        width="300px"
        height="40px"
      />      
    </div>
  ),
};



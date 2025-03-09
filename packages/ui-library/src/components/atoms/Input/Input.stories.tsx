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
    },
    placeholder: {
      control: 'text',
    },
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number', 'search', 'tel', 'url'],
    },
    width: {
      control: 'text',
    },
    height: {
      control: 'text',
    },
    radius: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl', 'full'],
    },
    textSize: {
      control: 'select',
      options: ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl'],
    },
    fontWeight: {
      control: 'select',
      options: ['thin', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold'],
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

// 비활성화된 입력 필드
export const Disabled: Story = {
  args: {
    placeholder: '비활성화된 입력 필드',
    disabled: true,
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

// 에러 상태의 입력 필드
export const WithError: Story = {
  args: {
    placeholder: '에러 상태',
    className: 'border-destructive',
    'aria-invalid': true,
    width: '300px',
    height: '40px',
  },
};

// 다양한 입력 필드 모음
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col space-y-4 w-[300px]">
      <Input placeholder="기본 입력 필드" width={''} height={''} />
      <Input placeholder="비활성화된 입력 필드" disabled width={''} height={''} />
      <Input type="email" placeholder="이메일 입력" width={''} height={''} />
      <Input type="password" placeholder="비밀번호 입력" width={''} height={''} />
      <Input type="search" placeholder="검색어 입력" width={''} height={''} />
      <Input placeholder="에러 상태" className="border-destructive" aria-invalid width={''} height={''} />
    </div>
  ),
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

// 아이콘과 radius 조합
export const IconWithRadius: Story = {
  render: () => (
    <div className="flex flex-col space-y-4 w-[300px]">
      <Input
        radius="full"
        placeholder="Search with rounded corners"
        leftIcon={<SearchIcon />}
        width="300px"
        height="40px"
      />
      <Input
        radius="lg"
        placeholder="Email with large radius"
        leftIcon={<EmailIcon />}
        width="300px"
        height="40px"
      />
      <Input
        radius="none"
        placeholder="Password with no radius"
        leftIcon={<LockIcon />}
        width="300px"
        height="40px"
      />
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

// 모든 폰트 두께 변형 보여주기
export const AllFontWeights: Story = {
  render: () => (
    <div className="flex flex-col space-y-4 w-[300px]">
      <Input fontWeight="thin" placeholder="Thin Font Weight" width="300px" height="40px" />
      <Input fontWeight="light" placeholder="Light Font Weight" width="300px" height="40px" />
      <Input fontWeight="normal" placeholder="Normal Font Weight" width="300px" height="40px" />
      <Input fontWeight="medium" placeholder="Medium Font Weight" width="300px" height="40px" />
      <Input fontWeight="semibold" placeholder="Semibold Font Weight" width="300px" height="40px" />
      <Input fontWeight="bold" placeholder="Bold Font Weight" width="300px" height="40px" />
      <Input fontWeight="extrabold" placeholder="Extra Bold Font Weight" width="300px" height="40px" />
    </div>
  ),
};

// 텍스트 크기와 폰트 두께 조합
export const TextSizeWithFontWeight: Story = {
  render: () => (
    <div className="flex flex-col space-y-4 w-[300px]">
      <Input 
        textSize="2xl" 
        fontWeight="bold" 
        placeholder="2XL Bold" 
        width="300px" 
        height="40px" 
      />
      <Input 
        textSize="base" 
        fontWeight="medium" 
        placeholder="Base Medium" 
        width="300px" 
        height="40px" 
      />
      <Input 
        textSize="xs" 
        fontWeight="light" 
        placeholder="XS Light" 
        width="300px" 
        height="40px" 
      />
    </div>
  ),
};

import type { Meta, StoryObj } from '@storybook/react';
import { LoginForm } from './LoginForm';
import {  useForm } from 'react-hook-form';
import React from 'react';

const meta = {
  title: 'Molecules/LoginForm',
  component: LoginForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof LoginForm>;

// Wrapper 컴포넌트를 만들어서 react-hook-form 로직 제공
const LoginFormWrapper = () => {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      loginId: '',
      password: '',
    },
    mode: "onSubmit"
  });

  const isDisabled = Boolean(watch("loginId")?.trim()) && Boolean(watch("password")?.trim());

  const onSubmit = (data: { loginId: string; password: string }) => {
    console.log('Form submitted:', data);
  };

  const onError = (error: any) => {
    console.error('Form error:', error);
  };

  return (
    <LoginForm
      onSubmit={onSubmit}
      handleSubmit={handleSubmit}
      register={register}
      errors={errors}
      onError={onError}
      isDisabled={isDisabled}
      dataCy={{
        loginId: 'login-id-input',
        password: 'password-input',
        submitButton: 'submit-button'
      }}
    />
  );
};

// 기본 로그인 폼
export const Default: Story = {
  render: () => <LoginFormWrapper />,
  args: {
    // 기본 props 값 설정 가능
  },
  parameters: {
    // 컴포넌트 배경 설정
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#333333' },
      ]
    },
    // 뷰포트 설정
    viewport: {
      defaultViewport: 'responsive',
    },
    // 컴포넌트 설명
    docs: {
      description: {
        component: '로그인 폼 컴포넌트입니다. 사용자 아이디와 비밀번호를 입력받습니다.'
      }
    }
  },
  // 플레이 함수로 인터랙션 테스트 가능
  play: async ({ canvasElement }) => {
    // 여기에 테스트 코드 작성 가능
  }
};


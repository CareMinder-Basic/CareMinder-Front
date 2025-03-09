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
    />
  );
};

// 기본 로그인 폼
export const Default: Story = {
  render: () => <LoginFormWrapper />
};

// 에러 상태의 로그인 폼
const LoginFormWithErrorsWrapper = () => {
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
  });

  const onSubmit = (data: { loginId: string; password: string }) => {
    console.log('Form submitted:', data);
  };

  const onError = (error: any) => {
    console.error('Form error:', error);
  };

  // 강제로 에러 상태 설정
  const errorsWithMessage = {
    loginId: {
      type: 'required',
      message: '아이디를 입력해주세요.',
    },
    password: {
      type: 'required',
      message: '비밀번호를 입력해주세요.',
    },
  };

  return (
    <LoginForm
      onSubmit={onSubmit}
      handleSubmit={handleSubmit}
      register={register}
      errors={errorsWithMessage}
      onError={onError}
      isDisabled={false}
    />
  );
};

export const WithErrors: Story = {
  render: () => <LoginFormWithErrorsWrapper />
};
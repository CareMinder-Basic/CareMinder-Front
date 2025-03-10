'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginFormType, loginSchema, useUserStore } from '@/lib';
import { useUser } from '@/hooks/useUser';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import LoadingSpinner from '@/components/loading-spinner';
import { LoginForm } from '@careminder/cds';
export default function LoginFormWard() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginFormType>({
    resolver: zodResolver(loginSchema),
  });

  const router = useRouter();
  const { mutate: login,isPending } = useUser();
  const setUser = useUserStore((state) => state.setUser);
  const isDisabled = Boolean(watch("loginId")?.trim()) && Boolean(watch("password")?.trim());

  const dataCy = {
    loginId: 'login-id',
    password: 'password',
    submitButton: 'submit-button',
  }

  const onError = (error: any) => {    
    throw new Error('로그인 실패');
  };    

  const onSubmit = async (data: LoginFormType) => {
    process.env.NODE_ENV === 'development' && console.log('로그인 시도');
    await login(
      {
        ...data,
        accountType: 'WARD',
      },
      {
        onSuccess: (userData) => {          
          {/* 유저 정보 저장 */}
          setUser({
            id: userData.currentUser.accountId,
            name: userData.currentUser.name,
            type: userData.currentUser.role,
            wardId: userData.currentUser.accountId,
          });

          {/* 토큰 저장 */}
          Cookies.set('accessTokenWard', userData.jwtResponse.accessToken);
          Cookies.set('refreshTokenWard', userData.jwtResponse.refreshToken);

          {/* 페이지 이동 */}
          process.env.NODE_ENV === 'development' && console.log('로그인 성공');          
          router.push('/');          
        },
        onError: (error) => {
          throw new Error('로그인 실패');
        },
        
      }
    );
  };

  if(isPending) {
    return <LoadingSpinner/>;
  }

  return (
    <LoginForm
      onSubmit={onSubmit}
      handleSubmit={handleSubmit}
      register={register}
      onError={onError}
      errors={errors}
      dataCy={dataCy}
      isDisabled={isDisabled}
    />
  );
}

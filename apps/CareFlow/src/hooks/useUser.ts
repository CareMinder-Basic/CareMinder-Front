/* 로그인 요청 훅 */
import { LoginCredentials, LoginResponse } from '@/models';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export function useUser() {
  return useMutation<LoginResponse, Error, LoginCredentials>({
    mutationFn: async (credentials) => {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/users/login`,
        credentials
      );
      if (!response) {
        throw new Error('Login failed');
      }

      return response.data;
    },
  });
}

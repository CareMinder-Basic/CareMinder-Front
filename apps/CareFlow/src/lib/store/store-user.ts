import { User } from '@/models/model-user';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserStore {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
}

// 상태 생성 함수를 정의할 때, 올바른 타입을 사용합니다.
export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      clearUser: () => set({ user: null }),
    }),
    {
      name: 'user-storage',
    }
  )
);

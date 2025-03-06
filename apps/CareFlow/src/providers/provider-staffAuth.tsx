'use client';

import { useUserStore } from '@/lib/store/store-user';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { useEffect } from 'react';

export default function StaffAuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = useUserStore();
  const router = useRouter();
  const accessTokenStaff = Cookies.get('accessTokenStaff');
  
  useEffect(() => {
    if (user?.type !== 'STAFF' || !accessTokenStaff) {
      router.push('/staff');
    }
  }, [user, accessTokenStaff]);

  return <>{children}</>;
}

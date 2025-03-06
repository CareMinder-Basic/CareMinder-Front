"use client";

import { useUserStore } from "@/lib";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function WardAuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
    const { user } = useUserStore();
    const router = useRouter();    
    
    useEffect(() => {
      if (!user) {
        router.push('/sign-in')
      }
    }, [user]);

  return <>{children}</>;
}
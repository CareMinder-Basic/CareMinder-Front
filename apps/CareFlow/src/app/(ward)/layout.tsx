'use client';


import { WardAuthProvider } from '@/providers';
export default function WardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <WardAuthProvider>{children}</WardAuthProvider>;
}

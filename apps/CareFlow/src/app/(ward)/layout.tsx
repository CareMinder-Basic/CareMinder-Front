'use client';

import { ThemeProvider } from '@careminder/cds';
import { WardAuthProvider } from '@/providers';
export default function WardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider><WardAuthProvider>{children}</WardAuthProvider></ThemeProvider>;
}

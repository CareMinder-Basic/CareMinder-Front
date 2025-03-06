import { StaffAuthProvider } from '@/providers';

export default async function StaffLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <StaffAuthProvider>{children}</StaffAuthProvider>;
}

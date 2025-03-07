import type { Metadata } from 'next';
import './globals.css';
import {ErrorProvider,QueryProvider} from '@/providers';
import 'react-loading-skeleton/dist/skeleton.css';
import localFont from 'next/font/local';

const pretendard = localFont({
  src: '../assets/fonts/PretendardVariable.woff2',  
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: 'CareFlow',
  description: 'CareFlow',
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  const testScript = "test"
  return (
    <html lang="ko">
      <body className={pretendard.className}>
        <ErrorProvider>
          <QueryProvider>            
          {children}
          {modal}
          </QueryProvider>
        </ErrorProvider>
      </body>
    </html>
  );
}

"use client";
import { ThemeProvider } from "@careminder/cds";

export default function WardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

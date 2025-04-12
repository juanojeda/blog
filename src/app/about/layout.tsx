import CommonLayout from "@/components/CommonLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Juan Ojeda — About',
  description: 'About Juan Ojeda, a software engineer and problem solver based in Melbourne, Australia.'
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CommonLayout>
      {children}
    </CommonLayout>
  );
}
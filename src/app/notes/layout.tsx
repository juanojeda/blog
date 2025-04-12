import CommonLayout from "@/components/CommonLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Juan Ojeda — Notes',
  description: 'Notes and musings by Juan Ojeda, a software engineer and problem solver based in Melbourne, Australia.',
}

export default function BlogLayout({
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
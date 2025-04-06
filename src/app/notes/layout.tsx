import CommonLayout from "@/components/CommonLayout";

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
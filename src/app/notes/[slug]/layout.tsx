import CommonLayout from "@/components/CommonLayout";

export default function PostLayout({
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
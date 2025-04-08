import CommonLayout from "@/components/CommonLayout";

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
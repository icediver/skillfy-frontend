import { Layout } from "@/components/layout/Layout";

interface IVariantLayout {
  variant: "primary" | "secondary";
}

export default function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: IVariantLayout;
}) {
  return <Layout variant={params.variant}>{children}</Layout>;
}

import Layout from '../(root)/layout';

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <Layout params={{ variant: 'secondary' }}>{children}</Layout>;
}

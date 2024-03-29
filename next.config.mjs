/** @type {import('next').NextConfig} */
const nextConfig = {
	// reactStrictMode: false,
	env: {
		SERVER_URL: process.env.SERVER_URL,
		APP_URL: process.env.APP_URL,
	},
	images: {
		domains: ['smartbird.ru', 'localhost', 'i.pravatar.cc'],
	},
	async rewrites() {
		return [
			{
				source: '/uploads/:path*',
				// destination: 'http://localhost:4200/uploads/:path*',
				destination: 'https://skillfy-backend.onrender.com/uploads/:path*',
			},
		];
	},
};

export default nextConfig;

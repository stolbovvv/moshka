/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: false,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'api-moshka.ru',
				port: '',
				pathname: '/**',
			},
		],
	},
};

export default nextConfig;

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
	async redirects() {
		return [
			{
				source: '/:path*', // Перехватываем все пути
				has: [
					{
						type: 'host',
						value: 'www.moshka.ru', // Если запрос пришёл с www.moshka.ru
					},
				],
				destination: 'https://moshka.ru/:path*', // Перенаправляем на moshka.ru с сохранением пути
				permanent: true, // 301 редирект (постоянный)
			},
		];
	},
};

export default nextConfig;
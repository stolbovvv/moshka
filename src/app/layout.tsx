import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import 'sanitize.css';
import 'swiper/css';
import '@/assets/styles/global.css';
import '@/assets/styles/layout.css';
import '@/assets/styles/helper.css';
import { sffont, unbounded } from '@/assets/fonts';
import { Footer } from '@/app/sections/footer/footer';
import { Header } from '@/app/sections/header/header';
import { Suspense } from 'react';
import { Metrika } from '@/app/components/metrika/metrika';

export const metadata: Metadata = {
	title: 'MOSHKA',
	description: 'Международная онлайн школа контента.',
	manifest: '/site.webmanifest',
	icons: [
		{
			rel: 'apple-touch-icon',
			url: '/apple-touch-icon.png',
			sizes: '180x180',
		},
		{
			rel: 'icon',
			url: '/favicon-32x32.png',
			sizes: '32x32',
			type: 'image/png',
		},
		{
			rel: 'icon',
			url: '/favicon-16x16.png',
			sizes: '16x16',
			type: 'image/png',
		},
	],
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
	return (
		<html lang="ru" className={unbounded.variable}>
			<head>
				<meta name="format-detection" content="telephone=no" />
			</head>
			<body className={sffont.className}>
				<Suspense>
					<Metrika />
				</Suspense>
				<div className="wrapper">
					<Header />
					{children}
					<Footer />
				</div>
			</body>
		</html>
	);
}

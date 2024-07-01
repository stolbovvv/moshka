import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import 'sanitize.css';
import '@/assets/styles/global.css';
import '@/assets/styles/layout.css';
import '@/assets/styles/helper.css';
import { sffont, unbounded } from '@/assets/fonts';
import { Footer } from '@/sections/footer/footer';
import { Header } from '@/sections/header/header';

export const metadata: Metadata = {
	title: 'Moshka',
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
			<body className={sffont.className}>
				<div className="wrapper">
					<Header />
					{children}
					<Footer />
				</div>
			</body>
		</html>
	);
}

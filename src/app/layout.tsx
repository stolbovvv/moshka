import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import '@/styles/global.css';
import '@/styles/layout.css';
import '@/styles/helper.css';

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
		<html lang="ru">
			<body>{children}</body>
		</html>
	);
}

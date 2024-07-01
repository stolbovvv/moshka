import local from 'next/font/local';
import { Unbounded } from 'next/font/google';

export const sffont = local({
	src: [
		{
			path: './SF-Pro-Display/SF-Pro-Display-Regular.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: './SF-Pro-Display/SF-Pro-Display-Medium.woff2',
			weight: '500',
			style: 'normal',
		},
		{
			path: './SF-Pro-Display/SF-Pro-Display-Semibold.woff2',
			weight: '600',
			style: 'normal',
		},
	],
	variable: '--ff-common',
});

export const unbounded = Unbounded({
	subsets: ['latin', 'cyrillic'],
	weight: ['400', '500', '600', '700', '900'],
	variable: '--ff-accent',
});

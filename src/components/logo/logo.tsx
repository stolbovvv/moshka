import Image from 'next/image';
import logo from './logo.svg';
import styles from './logo.module.css';
import clsx from 'clsx';

export interface LogoProps {
	className?: string;
	image?: string;
	width?: number;
	height?: number;
	alt?: string;
}

export function Logo({ className, image, width, height, alt }: LogoProps) {
	return (
		<Image
			className={clsx(className, styles.logo)}
			src={image ?? logo}
			alt={alt ?? 'Moshka – Международная онлайн школа контента.'}
			width={width ?? 140}
			height={height ?? 60}
		/>
	);
}

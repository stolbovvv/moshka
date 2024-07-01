import type { ReactNode } from 'react';
import clsx from 'clsx';
import styles from './button.module.css';
import Link from 'next/link';

export type ButtonProps = {
	className?: string;
	theme?: 'blue' | 'dark' | 'transparent';
	href?: string;
	target?: string;
	children?: ReactNode;
	onClick?: () => void;
};

export function Button({ className, theme = 'blue', href, children, target, onClick, ...props }: ButtonProps) {
	const classes = clsx(className, styles.button);

	if (href) {
		return (
			<Link className={classes} data-theme={theme} href={href} target={target} {...props}>
				{children}
			</Link>
		);
	}

	return (
		<button className={classes} data-theme={theme} onClick={onClick} {...props}>
			{children}
		</button>
	);
}

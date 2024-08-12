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
	notDot?: boolean;
	onClick?: () => void;
};

export function Button({ className, theme = 'blue', notDot, href, children, target, onClick, ...props }: ButtonProps) {
	const classes = clsx(className, styles.button);

	if (href) {
		return (
			<Link className={classes} data-theme={theme} data-not-dot={notDot} href={href} target={target} {...props}>
				{children}
			</Link>
		);
	}

	return (
		<button className={classes} data-theme={theme} data-not-dot={notDot} onClick={onClick} {...props}>
			{children}
		</button>
	);
}

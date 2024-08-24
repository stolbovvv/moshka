import type { ReactNode } from 'react';
import clsx from 'clsx';
import styles from './button.module.css';
import Link from 'next/link';

type ButtonProps = {
	className?: string;
	theme?: 'blue' | 'dark' | 'transparent';
	href?: string;
	type?: 'button' | 'submit' | 'reset';
	target?: string;
	children?: ReactNode;
	notDot?: boolean;
	onClick?: () => void;
};

export function Button({ className, theme = 'blue', notDot, href, children, target, onClick, ...props }: ButtonProps) {
	const classes = clsx(className, styles.button, styles[`button--${theme}`], {
		[styles['button--no-dot']]: notDot,
	});

	if (href) {
		return (
			<Link className={classes} href={href} target={target} {...props}>
				{children}
			</Link>
		);
	}

	return (
		<button className={classes} onClick={onClick} {...props}>
			{children}
		</button>
	);
}

'use client';

import { type Variants as AnimationVariants, motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Button, Logo } from '@/components';
import { useEffect, useRef, useState } from 'react';
import styles from './page-header.module.css';
import clsx from 'clsx';

interface HeaderProps {
	navigation: { href: string; text: string }[];
}

const animationVariants: AnimationVariants = {
	hide: {
		y: 'calc(-100% - 2.5rem)',
		boxShadow: '0 0.75rem 1.25rem rgba(0,0,0,0.0)',
	},
	show: {
		y: 0,
		boxShadow: '0 0.75rem 1.25rem rgba(0,0,0,0.25)',
	},
};

export function PageHeader({ navigation }: HeaderProps) {
	const [menuIsOpen, setMenuIsOpen] = useState(false);
	const [headIsShow, setHeadIsShow] = useState(true);

	const { scrollY } = useScroll();

	const headerRef = useRef<HTMLElement>(null);
	const scrollPos = useRef<number>(0);

	useMotionValueEvent(scrollY, 'change', (latest: number) => {
		if (!headerRef.current) return;

		if (latest < scrollPos.current || (headerRef.current.offsetHeight > scrollPos.current && !menuIsOpen)) {
			setHeadIsShow(true);
		} else {
			setHeadIsShow(false);
		}

		scrollPos.current = latest;
	});

	useEffect(() => {
		if (menuIsOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.removeProperty('overflow');
		}
	}, [menuIsOpen]);

	return (
		<motion.header
			ref={headerRef}
			className={styles.wrap}
			initial="show"
			animate={headIsShow ? 'show' : 'hide'}
			variants={animationVariants}
		>
			<Logo className={styles.logo} />
			<button
				className={clsx(styles.burger, {
					[styles['burger--active']]: menuIsOpen,
				})}
				onClick={() => setMenuIsOpen(!menuIsOpen)}
			>
				<span></span>
				<span></span>
				<span></span>
			</button>
			<nav
				className={clsx(styles.menu, {
					[styles['menu--open']]: menuIsOpen,
				})}
			>
				<ul className={styles.menu__list}>
					{navigation.map(({ href, text }, index) => (
						<li key={index} className={styles.menu__item}>
							<a className={styles.menu__link} href={href} onClick={() => setMenuIsOpen(false)}>
								{text}
							</a>
						</li>
					))}
				</ul>
				<Button className={styles.menu__button} theme="transparent" href="https://lk.moshka.ru/">
					Личный кабинет
				</Button>
			</nav>
		</motion.header>
	);
}

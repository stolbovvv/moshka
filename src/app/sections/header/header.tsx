'use client';

import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/app/ui/button/button';
import styles from './header.module.css';

const navigation = [
	{ href: '/#section-history', text: 'Чем полезна Moshka' },
	{ href: '/#section-for-whom', text: 'Для кого' },
	{ href: '/#section-banner', text: 'О проекте' },
	{ href: '/#section-resources', text: 'Курсы' },
	{ href: '/#section-profit', text: 'Цена' },
	{ href: '/#section-reviews', text: 'Отзывы' },
	{ href: '/#section-faq', text: 'FAQ' },
];

export function Header() {
	const [open, setOpen] = useState(false);
	const [visibleHeader, setVisibleHeader] = useState<boolean>(true);
	const [scrolledHeader, setScrolledHeader] = useState<boolean>(false);
	const { scrollY } = useScroll();

	const headerRef = useRef<any>(null);
	const lastScrolPosition = useRef<number>(0);

	useMotionValueEvent(scrollY, 'change', (latest) => {
		setVisibleHeader(latest > lastScrolPosition.current && headerRef.current.offsetHeight < latest && !open);
		setScrolledHeader(headerRef.current.offsetHeight < latest);

		lastScrolPosition.current = latest;
	});

	useEffect(() => {
		document.body.style.overflow = open ? 'hidden' : 'auto';
	}, [open]);

	return (
		<motion.header
			ref={headerRef}
			animate={{
				y: visibleHeader && scrolledHeader ? 'calc(-100% - 2.5rem)' : '0',
				boxShadow: scrolledHeader ? '0 0.75rem 1.25rem rgba(0,0,0,0.5)' : '0 0.75rem 1.25rem rgba(0,0,0,0.0)',
			}}
			className={styles.wrap}
		>
			<Link className={styles.logo} href="/">
				<Image
					className={styles.logo__icon}
					src="/images/moshka-white.svg"
					alt="Moska – Международная онлайн школа контента."
					width={140}
					height={60}
				/>
			</Link>
			<button className={clsx(styles.burger, { [styles.burger_active]: open })} onClick={() => setOpen(!open)}>
				<span></span>
				<span></span>
				<span></span>
			</button>
			<nav className={clsx(styles.menu, { [styles.menu_open]: open })}>
				<ul className={styles.menu__list}>
					{navigation.map(({ href, text }, index) => (
						<li key={index} className={styles.menu__item}>
							<a className={styles.menu__link} href={href} onClick={() => setOpen(false)}>
								{text}
							</a>
						</li>
					))}
				</ul>

				<Button className={styles.menu__button} theme="transparent" href="https://getcourse.ru/">
					Личный кабинет
				</Button>
			</nav>
		</motion.header>
	);
}

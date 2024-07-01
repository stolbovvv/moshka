'use client';

import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import { useState } from 'react';
import { Button } from '@/ui/button/button';
import styles from './header.module.css';

const navigation = [
	{ href: '#section-history', text: 'Чем полезна Moshka' },
	{ href: '#section-for-whom', text: 'Для кого' },
	{ href: '#section-banner', text: 'О проекте' },
	{ href: '#section-resources', text: 'Курсы' },
	{ href: '#section-profit', text: 'Цена' },
	{ href: '#section-reviews', text: 'Отзывы' },
	{ href: '#section-faq', text: 'FAQ' },
];

export function Header() {
	const [open, setOpen] = useState(false);

	return (
		<header className={styles.wrap}>
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
		</header>
	);
}

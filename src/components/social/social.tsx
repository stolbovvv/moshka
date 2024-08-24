import Link from 'next/link';
import clsx from 'clsx';
import { type IconVariant, Icon } from '../icon/icon';
import styles from './social.module.css';

interface SocialLink {
	href: string;
	icon: IconVariant;
}

interface SocialProps {
	className: string;
}

const links: SocialLink[] = [
	{ href: 'https://vk.com/moshka_ed', icon: 'Vkontakte' },
	{ href: 'https://t.me/+FpT2KAqnp4k2ZDA', icon: 'Telegram' },
	{ href: 'https://www.youtube.com/@MOSHKAed', icon: 'Youtube' },
	{ href: 'https://www.tiktok.com/@moshka_ed?is_from_webapp=1&sender_device=pc', icon: 'Dzen' },
];

export function Social({ className }: SocialProps) {
	return (
		<div className={clsx(className, styles.social)}>
			{links.map(({ href, icon }, index) => (
				<Link key={index} className={styles.social__link} href={href} target="_blank">
					<Icon className={styles.social__icon} variant={icon}></Icon>
				</Link>
			))}
		</div>
	);
}

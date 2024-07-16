import Link from 'next/link';
import Image from 'next/image';
import styles from './footer.module.css';
import IconDzen from '@/assets/icons/dzen.svg';
import IconYoutube from '@/assets/icons/youtube.svg';
import IconTelegram from '@/assets/icons/telegram.svg';
import IconVkontakte from '@/assets/icons/vkontakte.svg';

const navigation = [
	// { href: '/#section-history', text: 'Чем полезна MOSHKA' },
	{ href: '/#section-for-whom', text: 'Для кого' },
	{ href: '/#section-banner', text: 'О проекте' },
	{ href: '/#section-resources', text: 'Курсы' },
	{ href: '/#section-profit', text: 'Цена' },
	{ href: '/#section-reviews', text: 'Отзывы' },
	{ href: '/#section-faq', text: 'FAQ' },
];

export function Footer() {
	return (
		<footer className={styles.wrap}>
			<div className={styles.row}>
				<Image
					className={styles.logo}
					src="/images/moshka-white.svg"
					alt="Moska – Международная онлайн школа контента."
					width={140}
					height={60}
				/>
				<div className={styles.social}>
					<Link className={styles.social__link} href="https://vk.com/moshka_ed" target="_blank">
						<Image className={styles.social__icon} src={IconVkontakte} alt="" />
					</Link>
					<Link className={styles.social__link} href="https://t.me/+FpT2KAqnp4k2ZDAy" target="_blank">
						<Image className={styles.social__icon} src={IconTelegram} alt="" />
					</Link>
					<Link className={styles.social__link} href="https://www.youtube.com/@MOSHKAed" target="_blank">
						<Image className={styles.social__icon} src={IconYoutube} alt="" />
					</Link>
					<Link className={styles.social__link} href="https://www.tiktok.com/@moshka_ed?is_from_webapp=1&sender_device=pc" target="_blank">
						<Image className={styles.social__icon} src={IconDzen} alt="" />
					</Link>
				</div>
				<ul className={styles.menu}>
					{navigation.map(({ href, text }, index) => (
						<li key={index} className={styles.menu__item}>
							<a className={styles.menu__link} href={href}>
								{text}
							</a>
						</li>
					))}
				</ul>
			</div>
			<div className={styles.row}>
				<div className={styles.mails}>
					<Link className={styles.mail} href="mailto:Pr@moshka.ru">
						Pr@moshka.ru
					</Link>
					<Link className={styles.mail} href="mailto:Help@moshka.ru">
						Help@moshka.ru
					</Link>
				</div>
			</div>
			<div className={styles.row}>
				<div className={styles.links}>
					<Link className={styles.link} href="/offerta">
						Договор оферты
					</Link>
					<Link className={styles.link} href="/agreement">
						Согласие на обработку персональных данных
					</Link>
				</div>
				<p className={styles.text}>
					© 2024 ООО &laquo;ТРИ-КА&raquo; ИНН 7720392273 ОГРН 1177746904785 Все права защищены
				</p>
			</div>
			<div className={styles.foot}>
				<div className={styles.row}>
					<div className={styles.foot__col}>
						<p className={styles.text}>№ Л035-01298-77/01082986</p>
						<p className={styles.text}>
							Название выдавшего органа: ДЕПАРТАМЕНТ ОБРАЗОВАНИЯ И НАУКИ ГОРОДА МОСКВЫ.
						</p>
						<p className={styles.text}>Дата выдачи: 05.03.2024</p>
					</div>
					<div className={styles.foot__col}>
						<p className={styles.link}>
							Made by GoWeb.Pro
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}

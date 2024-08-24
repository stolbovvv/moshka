import { Logo, Social } from '@/components';
import styles from './page-footer.module.css';
import Link from 'next/link';

interface FooterProps {
	navigation: { href: string; text: string }[];
}

export function PageFooter({ navigation }: FooterProps) {
	return (
		<footer className={styles.wrap}>
			<div className={styles.row}>
				<Logo className={styles.logo} />
				<Social className={styles.social} />
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
						<a className={styles.link} href="https://.goweb.pro">
							Made by GoWeb.Pro
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}

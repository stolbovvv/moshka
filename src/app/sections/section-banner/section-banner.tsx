import Image from 'next/image';
import styles from './section-banner.module.css';

const cards = [
	{
		heading: 'В любой момент',
		content: 'Все курсы в доступе 24/7',
		theme: 'blue',
	},
	{
		heading: 'Общение',
		content: 'Авторские вебинары и онлайн- встречи',
		theme: 'neutral',
	},
	{
		heading: 'Курсы по подписке',
		content: 'И новые материалы каждый месяц',
		theme: 'yellow',
	},
];

export function SectionBanner() {
	return (
		<section className={styles.wrap} id="section-banner">
			<div className={styles.head}>
				<ul className={styles.list}>
					<li className={styles.stick} data-item="1">
						Мастер-классы
					</li>
					<li className={styles.stick} data-item="2">
						Лекции
					</li>
					<li className={styles.stick} data-item="3">
						Практические навыки
					</li>
					<li className={styles.stick} data-item="4">
						Контент
					</li>
				</ul>
				<Image
					className={styles.image}
					src="/images/moshka-black.svg"
					alt="Moshka – международная онлайн школа контента."
					width={890}
					height={382}
				/>
				<ul className={styles.list}>
					<li className={styles.stick} data-item="5">
						Cторителлинг
					</li>
					<li className={styles.stick} data-item="6">
						Курсы
					</li>
					<li className={styles.stick} data-item="7">
						Видео
					</li>
					<li className={styles.stick} data-item="8">
						Вдохновение
					</li>
				</ul>
			</div>

			<div className={styles.body}>
				{cards.map(({ theme, heading, content }, index) => (
					<div key={index} className={styles.card} data-theme={theme}>
						<h2 className={styles.card__header}>{heading}</h2>
						<p className={styles.card__text}>{content}</p>
					</div>
				))}
			</div>
		</section>
	);
}

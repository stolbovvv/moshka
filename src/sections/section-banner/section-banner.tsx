import Image from 'next/image';
import styles from './section-banner.module.css';

const cards = [
	{
		heading: 'В любой момент',
		content: 'Все курсы в доступе в любой момент',
		theme: 'blue',
	},
	{
		heading: 'Самопроверка',
		content: 'Домашние задания для самопроверки',
		theme: 'neutral',
	},
	{
		heading: 'Курс по подписке',
		content: 'Рассказать про концепцию подписки',
		theme: 'yellow',
	},
];

export function SectionBanner() {
	return (
		<section className={styles.wrap} id="section-banner">
			<Image
				className={styles.image}
				src="/images/moshka-black.svg"
				alt="Moshka – международная онлайн школа контента."
				width={890}
				height={382}
			/>

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

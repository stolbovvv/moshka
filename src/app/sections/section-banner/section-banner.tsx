import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import decor from './section-banner-decor.svg';
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

const tags = [
	'Мастер-классы',
	'Cторителлинг',
	'Лекции',
	'Курсы',
	'Практические навыки',
	'Видео',
	'Контент',
	'Вдохновение',
];

export function SectionBanner() {
	return (
		<section className={styles.wrap} id="section-banner">
			<img className={styles.decor} src={decor.src} alt="" />
			<h2 className={styles.heading}>Добро пожаловать в будущее вместе с нами</h2>
			<div className={styles.head}>
				<Image
					className={styles.image}
					src="/images/moshka-black.svg"
					alt="Moshka – международная онлайн школа контента."
					width={890}
					height={382}
				/>
			</div>
			<Marquee className={styles.marquee} autoFill={true}>
				{tags.map((tag, index) => (
					<p key={index} className={styles.marquee__item}>
						{tag}
					</p>
				))}
			</Marquee>
			<div className={styles.body}>
				{cards.map(({ theme, heading, content }, index) => (
					<div key={index} className={styles.card} data-theme={theme}>
						<h3 className={styles.card__header}>{heading}</h3>
						<p className={styles.card__text}>{content}</p>
					</div>
				))}
			</div>
		</section>
	);
}

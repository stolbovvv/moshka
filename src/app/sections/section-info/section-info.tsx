import styles from './section-info.module.css';

const cards = [
	{
		heading: 'Сохрани моменты',
		content: 'своей жизни, чтобы их пересматривали как фильм',
		theme: 'yellow',
	},
	{
		heading: 'Расскажи истории',
		content: 'чтобы они отзывались у зрителя и вовлекали',
		theme: 'neutral',
	},
	{
		heading: 'Превращай идеи',
		content: 'в контент, от которого невозможно оторваться',
		theme: 'blue',
	},
];

export function SectionInfo() {
	return (
		<section className={styles.wrap} id="section-info">
			{cards.map(({ theme, heading, content }, index) => (
				<div key={index} className={styles.card} data-theme={theme}>
					<h2 className={styles.heading}>{heading}</h2>
					<p className={styles.text}>{content}</p>
				</div>
			))}
		</section>
	);
}

import styles from './section-info.module.css';

const cards = [
	{
		heading: 'Как сохранить',
		content: 'моменты своей жизни, чтобы их пересматривали как фильм',
		theme: 'yellow',
	},
	{
		heading: 'Как рассказывать',
		content: 'истории, чтобы они отзывались у зрителя',
		theme: 'neutral',
	},
	{
		heading: 'Как превратить',
		content: 'свои идеи в контент, от которого невозможно оторваться',
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

import { fetchAuthors } from '@/lib/data';
import { SliderExperts } from './slider-experts';
import styles from './section-experts.module.css';

export async function SectionExperts() {
	const authors = await fetchAuthors();

	if (!authors) return;

	return (
		<section className={styles.wrap}>
			<div className={styles.head}>
				<h2 className={styles.heading}>Наши эксперты</h2>
			</div>
			<div className={styles.body}>
				<SliderExperts authors={authors} />
			</div>
		</section>
	);
}

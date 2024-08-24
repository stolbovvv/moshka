import type { Author } from '@/libs/definitions';
import { SliderExperts } from './slider-experts';
import styles from './section-experts.module.css';

export async function SectionExperts({ authors }: { authors: Author[] }) {
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

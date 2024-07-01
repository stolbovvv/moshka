import type { ReviewsData } from '@/types/Reviews';
import Image from 'next/image';
import styles from './card-review.module.css';

export function CardReview({ data: { name, info, photo, content } }: { data: ReviewsData }) {
	return (
		<div className={styles.wrap}>
			<div className={styles.head}>
				<div className={styles.user}>
					<Image className={styles.user__image} src={photo} alt="" width={42} height={42} />
					<span className={styles.user__name}>{name}</span>
				</div>
				<p className={styles.info}>{info}</p>
			</div>
			<div className={styles.body}>
				<p>{content}</p>
			</div>
		</div>
	);
}

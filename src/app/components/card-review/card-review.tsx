'use client';

import styles from './card-review.module.css';
import { Review } from '@/lib/definitions';
import { useState } from 'react';

export function CardReview({ data: { name, info, photo, content } }: { data: Review }) {
	const [isFull, setIsFull] = useState<boolean>(false);

	return (
		<div className={styles.wrap}>
			<div className={styles.head}>
				<div className={styles.user}>
					<img className={styles.user__image} src={photo} alt={name} width={42} height={42} />
					<span className={styles.user__name}>{name}</span>
				</div>
			</div>
			<p className={styles.info}>{info}</p>
			<div className={styles.body}>
				<p>{isFull ? content : `${content.slice(0, 280).trim()}...`}</p>
			</div>
			<button className={styles.button} onClick={() => setIsFull((isFull) => !isFull)}>
				{isFull ? 'Скрыть' : 'Раскрыть'}
			</button>
		</div>
	);
}

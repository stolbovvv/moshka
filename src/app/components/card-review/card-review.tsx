'use client';

import styles from './card-review.module.css';
import { Review } from '@/lib/definitions';
import sanitizeHtml from 'sanitize-html';
import { useState } from 'react';

export function CardReview({ data: { name, info, photo, content } }: { data: Review }) {
	const [isFull, setIsFull] = useState<boolean>(false);

	const truncateHtml = (html: string, maxLength: number): string => {
		let trimmedString = html.substring(0, maxLength);

		let lastOpening = trimmedString.lastIndexOf('<');
		let lastClosing = trimmedString.lastIndexOf('>');

		if (lastOpening > lastClosing) {
			trimmedString = trimmedString.substring(0, lastOpening).trim();
		}

		return trimmedString;
	};

	const displayContent = isFull ? sanitizeHtml(content) : `${truncateHtml(sanitizeHtml(content), 250)}...`;

	return (
		<div className={styles.wrap}>
			<div className={styles.head}>
				<div className={styles.user}>
					<img className={styles.user__image} src={photo} alt={name} width={42} height={42} />
					<span className={styles.user__name}>{name}</span>
				</div>
			</div>
			<p className={styles.info}>{info}</p>
			<div className={styles.body} dangerouslySetInnerHTML={{ __html: displayContent }} />
			<button className={styles.button} onClick={() => setIsFull((isFull) => !isFull)}>
				{isFull ? 'Скрыть' : 'Раскрыть'}
			</button>
		</div>
	);
}
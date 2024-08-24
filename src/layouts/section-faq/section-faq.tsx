'use client';

import { useState } from 'react';
import type { Faq } from '@/libs/definitions';
import { CardFaq } from '@/components';
import styles from './section-faq.module.css';

export function SectionFaq({ faqs }: { faqs: Faq[] }) {
	const [currentId, setCurrentId] = useState<number | null>(0);

	const handleClick = (index: number) => {
		if (index === currentId) {
			setCurrentId(null);
		} else {
			setCurrentId(index);
		}
	};

	return (
		<section className={styles.wrap} id="section-faq">
			<div className={styles.head}>
				<h2 className={styles.heading}>Вопросы и ответы</h2>
			</div>
			<div className={styles.body}>
				{faqs.map((data, index) => (
					<CardFaq key={data.id} data={data} opened={index === currentId} onOpen={() => handleClick(index)} />
				))}
			</div>
		</section>
	);
}

'use client';

import type { Faq } from '@/lib/definitions';
import { CardFaq } from '@/app/components/card-faq/card-faq';
import styles from './section-faq.module.css';
import { useState } from 'react';

export function SectionFaq({ faqs }: { faqs: Faq[] }) {
	const [currentId, setCurrentId] = useState<number>(0);

	return (
		<section className={styles.wrap} id="section-faq">
			<div className={styles.head}>
				<h2 className={styles.heading}>Вопросы и ответы</h2>
			</div>
			<div className={styles.body}>
				{faqs.map((data, index) => (
					<CardFaq
						key={data.id}
						data={data}
						opened={index === currentId}
						onOpen={() => setCurrentId(index)}
					/>
				))}
			</div>
		</section>
	);
}

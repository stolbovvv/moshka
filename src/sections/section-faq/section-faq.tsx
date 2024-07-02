'use client';

import type { FaqData, FaqItem } from '@/types/Faq';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { CardFaq } from '@/components/card-faq/card-faq';
import styles from './section-faq.module.css';

export function SectionFaq({ data }: { data: FaqData[] }) {
	const [current, setCurrent] = useState<{ id: string | null; faqs: FaqItem[] }>({ id: null, faqs: [] });

	useEffect(() => {
		data.length && setCurrent({ id: data[0].id, faqs: data[0].faqs });
	}, [data]);

	return (
		<section className={styles.wrap} id="section-faq">
			<div className={styles.head}>
				<h2 className={styles.heading}>Вопросы и ответы</h2>
				<div className={styles.tabs}>
					{data.length &&
						data.map(({ id, name, faqs }) => (
							<button
								key={id}
								className={clsx(styles.tabs__button, {
									[styles.tabs__button_current]: id === current.id,
								})}
								onClick={() => setCurrent({ id, faqs })}
							>
								{name}
							</button>
						))}
				</div>
			</div>
			<div className={styles.body}>
				{current.faqs.map((data) => (
					<CardFaq key={data.id} data={data} />
				))}
			</div>
		</section>
	);
}

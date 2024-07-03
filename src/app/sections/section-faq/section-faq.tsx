'use client';

import type { Faq, FaqCategory } from '@/lib/definitions';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { CardFaq } from '@/app/components/card-faq/card-faq';
import styles from './section-faq.module.css';

export function SectionFaq({ faqs }: { faqs: Faq[] }) {
	const [filtered, setFiltered] = useState<Faq[]>([]);
	const [category, setCategory] = useState<FaqCategory | null>();

	const tabs = getUniqueCategories(faqs);

	const changeCategory = (id: string) => {
		const filtered = faqs.filter((faq) => faq.category.id === id);
		const category = tabs.filter((tab) => tab.id === id)[0] || null;

		setCategory(category);
		setFiltered(filtered);
	};

	useEffect(() => {
		changeCategory(tabs[0].id);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<section className={styles.wrap} id="section-faq">
			<div className={styles.head}>
				<h2 className={styles.heading}>Вопросы и ответы</h2>
				<div className={styles.tabs}>
					{tabs.map((tab) => (
						<button
							key={tab.id}
							className={clsx(styles.tabs__button, {
								[styles.tabs__button_current]: tab.id === category?.id,
							})}
							onClick={() => changeCategory(tab.id)}
						>
							{tab.name}
						</button>
					))}
				</div>
			</div>
			<div className={styles.body}>
				{filtered.map((data) => (
					<CardFaq key={data.id} data={data} />
				))}
			</div>
		</section>
	);
}

function getUniqueCategories(faqs: Faq[]): FaqCategory[] {
	const uniqueCategories: { [key: string]: FaqCategory } = {};

	faqs.forEach((faq) => {
		const categoryKey = faq.category.id;
		if (!uniqueCategories[categoryKey]) {
			uniqueCategories[categoryKey] = faq.category;
		}
	});

	return Object.values(uniqueCategories);
}

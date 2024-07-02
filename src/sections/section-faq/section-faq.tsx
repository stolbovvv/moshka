'use client';

import type { FaqData } from '@/types/Faq';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { CardFaq } from '@/components/card-faq/card-faq';
import styles from './section-faq.module.css';

export function SectionFaq({ data }: { data: FaqData[] }) {
	const [filter, setFilter] = useState<string>('');
	const [filterData, setFilterData] = useState<FaqData[]>([]);

	const tabs = Array.from(new Set(data.map((item) => item.category)));

	useEffect(() => {}, [filter, data]);

	const changeFilter = (type: string) => {
		setFilter(type);
	};

	useEffect(() => {
		if (filter) {
			setFilterData(data.filter((item) => item.category === filter));
		} else {
			setFilterData(data);
		}
	}, [filter, data]);

	useEffect(() => {
		changeFilter(data[0]?.category);
	}, [data]);

	return (
		<section className={styles.wrap} id="section-faq">
			<div className={styles.head}>
				<h2 className={styles.heading}>Вопросы и ответы</h2>
				<div className={styles.tabs}>
					{tabs.map((item, index) => (
						<button
							key={index}
							className={clsx(styles.tabs__button, {
								[styles.tabs__button_current]: filter === item,
							})}
							onClick={() => changeFilter(item)}
						>
							{item}
						</button>
					))}
				</div>
			</div>
			<div className={styles.body}>
				{filterData.map((data) => (
					<CardFaq key={data.id} data={data} />
				))}
			</div>
		</section>
	);
}

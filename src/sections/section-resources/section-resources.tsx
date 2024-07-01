'use client';

import type { ResourceData } from '@/types/Resource';
import { useEffect, useState } from 'react';
import { Button } from '@/ui/button/button';
import { CardResource } from '@/components/card-resource/card-resource';
import styles from './section-resources.module.css';
import clsx from 'clsx';

export function SectionResources({ data }: { data: ResourceData[] }) {
	const [filter, setFilter] = useState<string | null>(null);
	const [filterData, setFilterData] = useState<ResourceData[]>(data);

	const tabs = Array.from(new Set(data.map((item) => item.type)));

	const changeFilter = (type: string | null) => {
		setFilter(type);
	};

	useEffect(() => {
		if (filter) {
			setFilterData(data.filter((item) => item.type === filter));
		} else {
			setFilterData(data);
		}
	}, [filter, data]);

	return (
		<section className={styles.wrap} id="section-resources">
			<div className={styles.head}>
				<h2 className={styles.heading}>
					Что входит <br />в подписку?
				</h2>
				<div className={styles.tabs}>
					<button
						className={clsx(styles.tabs__button, {
							[styles.tabs__button_current]: filter === null,
						})}
						onClick={() => changeFilter(null)}
					>
						Все материалы
					</button>
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
				<div className={styles.grid}>
					{filterData.map((item, index) => (
						<CardResource key={index} data={item} />
					))}
				</div>
				<Button className={styles.button} href="https://getcourse.ru/">
					Получить все в подписке за 8900 ₽
				</Button>
			</div>
		</section>
	);
}

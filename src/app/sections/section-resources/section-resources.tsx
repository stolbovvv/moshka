'use client';

import type { Resource, ResourceCategory } from '@/lib/definitions';
import { useState } from 'react';
import clsx from 'clsx';
import { Button } from '@/app/ui/button/button';
import { CardResource } from '@/app/components/card-resource/card-resource';
import styles from './section-resources.module.css';
import { PopupPesource } from '@/app/components/popup-resource/popup-resource';

export function SectionResources({ resources }: { resources: Resource[] }) {
	const [filtered, setFiltered] = useState<Resource[]>(resources);
	const [category, setCategory] = useState<ResourceCategory | null>({ id: 'all', name: '' });
	const [showCount, setShowCount] = useState<number>(6);

	const tabs = getUniqueCategories(resources);

	const changeCategory = (id: string) => {
		if (id === 'all') {
			setCategory({ id: 'all', name: '' });
			setFiltered(resources);
		} else {
			const filtered = resources.filter((resource) => id === resource.category.id);
			const category = tabs.filter((tab) => tab.id === id)[0] || null;
			setCategory(category);
			setFiltered(filtered);
		}

		setShowCount(6);
	};

	return (
		<>
			<section className={styles.wrap} id="section-resources">
				<div className={styles.head}>
					<h2 className={styles.heading}>
						Что входит <br />в подписку?
					</h2>

					<div className={styles.tabs}>
						<button
							className={clsx(styles.tabs__button, {
								[styles.tabs__button_current]: category?.id === 'all',
							})}
							onClick={() => changeCategory('all')}
						>
							Все материалы
						</button>
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
					<div className={styles.grid}>
						{filtered.map((data, index) => {
							if (index < showCount) return <CardResource key={data.id} data={data} />;
						})}
					</div>

					{showCount < filtered.length && (
						<Button
							className={styles.button}
							theme="dark"
							notDot={true}
							onClick={() => setShowCount(filtered.length)}
						>
							Показать все
						</Button>
					)}

					<Button className={styles.button} href="https://getcourse.ru/">
						Получить все в подписке за 8900 ₽
					</Button>
				</div>
			</section>
			<PopupPesource />
		</>
	);
}

function getUniqueCategories(resources: Resource[]): ResourceCategory[] {
	const uniqueCategories: { [key: string]: ResourceCategory } = {};

	resources.forEach((resource) => {
		const categoryKey = resource.category.id;
		if (!uniqueCategories[categoryKey]) {
			uniqueCategories[categoryKey] = resource.category;
		}
	});

	return Object.values(uniqueCategories);
}

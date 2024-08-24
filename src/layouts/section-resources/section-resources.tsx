'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { LayoutGroup } from 'framer-motion';
import clsx from 'clsx';
import type { Resource } from '@/libs/definitions';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { Button, CardResource } from '@/components';
import styles from './section-resources.module.css';

export function SectionResources({ resources }: { resources: Resource[] }) {
	const [step, setStep] = useState<number>(0);
	const [count, setCount] = useState<number>(0);
	const [filtered, setFiltered] = useState<Resource[]>(resources);
	const [category, setCategory] = useState<{ id: string; name: string }>({ id: 'all', name: '' });

	const isMobile = useMediaQuery('(max-width: 48em)');
	const pathName = usePathname();

	const wrap = useRef<HTMLDivElement>(null);
	const tabs = getUniqueCategories(resources);

	let price = 8900;

	if (pathName.match('/month')) price = 890;
	if (pathName.match('/monthone')) price = 890;

	const changeCategory = (id: string) => {
		if (id === 'all') {
			setCategory({ id: 'all', name: '' });
			setFiltered(resources);
		} else {
			const filtered = resources.filter((resource) => id === resource.categoryId);
			const category = tabs.filter((tab) => tab.id === id)[0] || null;

			setFiltered(filtered);
			setCategory(category);
		}
	};

	useEffect(() => {
		if (isMobile) {
			setStep(6);
			setCount(6);
		} else {
			setStep(10);
			setCount(10);
		}
	}, [isMobile]);

	return (
		<>
			<section className={styles.wrap} id="section-resources" ref={wrap}>
				<div className={styles.head}>
					<h2 className={styles.heading}>
						Что входит <br />в подписку?
					</h2>
					<div className={styles.tabs}>
						<button
							className={clsx(styles.tabs__button, {
								[styles['tabs__button--current']]: category?.id === 'all',
							})}
							onClick={() => changeCategory('all')}
						>
							Все материалы
						</button>
						{tabs.map((tab) => (
							<button
								key={tab.id}
								className={clsx(styles.tabs__button, {
									[styles['tabs__button--current']]: tab.id === category?.id,
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
						<LayoutGroup>
							{filtered.map((data, index) => {
								if (index < count) return <CardResource key={data.id} data={data} />;
							})}
						</LayoutGroup>
					</div>

					<div className={styles.buttons}>
						{count < filtered.length && (
							<Button
								className={styles.button}
								theme="dark"
								notDot={true}
								onClick={() => setCount((count) => count + step)}
							>
								Показать еще {filtered.length - count > step ? step : filtered.length - count}
							</Button>
						)}
						{count !== step && (
							<Button className={styles.button} theme="dark" notDot={true} onClick={() => setCount(step)}>
								Скрыть
							</Button>
						)}
					</div>

					<Button className={styles.button} href="#section-profit">
						Получить все в подписке за {price} ₽
					</Button>
				</div>
			</section>
		</>
	);
}

function getUniqueCategories(resources: Resource[]): { id: string; name: string }[] {
	const uniqueCategories: { [key: string]: { id: string; name: string } } = {};

	resources.forEach((resource) => {
		const categoryKey = resource.categoryId;
		if (!uniqueCategories[categoryKey]) {
			uniqueCategories[categoryKey] = { id: resource.categoryId, name: resource.categoryName };
		}
	});

	return Object.values(uniqueCategories);
}

'use client';

import type { Resource } from '@/lib/definitions';
import { useEffect, useRef, useState } from 'react';
import { LayoutGroup } from 'framer-motion';
import clsx from 'clsx';
import { Button } from '@/app/_components/button/button';
import { CardResource } from '@/app/_components/card-resource/card-resource';
import styles from './section-resources.module.css';
import { PopupResource } from '@/app/_components/popup-resource/popup-resource';
import { usePathname } from 'next/navigation';

export function SectionResources({ resources }: { resources: Resource[] }) {
	const [step, setStep] = useState<number>(0);
	const [count, setCount] = useState<number>(0);
	const [mobile, setMobile] = useState<MediaQueryList>();
	const [tablet, setTablet] = useState<MediaQueryList>();
	const [filtered, setFiltered] = useState<Resource[]>(resources);
	const [category, setCategory] = useState<{ id: string; name: string }>({ id: 'all', name: '' });
	const [modalOpened, setModalOpened] = useState<boolean>(false);
	const [resource, setResource] = useState<Resource>();
	const pathName = usePathname();

	const wrap = useRef(null);
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
		setTablet(window.matchMedia('(max-width: 63.999em) and (min-width: 48em)'));
		setMobile(window.matchMedia('(max-width: 47.999em)'));

		function changeStep() {
			if (mobile?.matches) return setStep(6);
			setStep(10);
		}

		if (mobile?.matches) {
			setCount(6);
		} else {
			setCount(10);
		}

		changeStep();
		window.addEventListener('resize', changeStep);

		return () => window.removeEventListener('resize', changeStep);
	}, [mobile?.matches, tablet?.matches]);

	useEffect(() => {
		document.body.style.overflow = modalOpened ? 'hidden' : 'auto';
	}, [modalOpened]);

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
						<LayoutGroup>
							{filtered.map((data, index) => {
								if (index < count)
									return (
										<CardResource
											key={data.id}
											data={data}
											openModal={() => {
												setResource(data);
												setModalOpened(true);
											}}
										/>
									);
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

			<PopupResource
				isOpened={modalOpened}
				resource={resource}
				price={price}
				onClose={() => setModalOpened(false)}
			/>
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

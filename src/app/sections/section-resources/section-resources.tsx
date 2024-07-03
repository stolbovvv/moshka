'use client';

import type { Resource, ResourceCategory } from '@/lib/definitions';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { Button } from '@/app/ui/button/button';
import { CardResource } from '@/app/components/card-resource/card-resource';
import styles from './section-resources.module.css';
import { PopupPesource } from '@/app/components/popup-resource/popup-resource';

export function SectionResources({ resources }: { resources: Resource[] }) {
	const [step, setStep] = useState<number>(0);
	const [count, setCount] = useState<number>(0);
	const [mobile, setMobile] = useState<MediaQueryList>();
	const [tablet, setTablet] = useState<MediaQueryList>();
	const [filtered, setFiltered] = useState<Resource[]>(resources);
	const [category, setCategory] = useState<ResourceCategory | null>({ id: 'all', name: '' });
	const [modalOpened, setModalOpened] = useState<boolean>(false);

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
	};

	useEffect(() => {
		setTablet(window.matchMedia('(max-width: 63.999em) and (min-width: 48em)'));
		setMobile(window.matchMedia('(max-width: 47.999em)'));

		function cangeStap() {
			if (mobile?.matches) return setStep(2);
			if (tablet?.matches) return setStep(4);
			setStep(6);
		}

		if (mobile?.matches) {
			setCount(2);
		} else if (tablet?.matches) {
			setCount(4);
		} else {
			setCount(6);
		}

		cangeStap();
		window.addEventListener('resize', cangeStap);

		return () => window.removeEventListener('resize', cangeStap);
	}, [mobile?.matches, tablet?.matches]);

	useEffect(() => {
		document.body.style.overflow = modalOpened ? 'hidden' : 'auto';
	}, [modalOpened]);

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
							if (index < count)
								return (
									<CardResource key={data.id} data={data} openModal={() => setModalOpened(true)} />
								);
						})}
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

					<Button className={styles.button} href="https://getcourse.ru/">
						Получить все в подписке за 8900 ₽
					</Button>
				</div>
			</section>

			<PopupPesource isOpend={modalOpened} onClose={() => setModalOpened(false)} />
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

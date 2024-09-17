'use client';

import { usePageStore } from '@/store/usePageStore';
import { Button } from '@/components';
import styles from './section-buttons.module.css';

export function SectionButtons() {
	const { openPopupFrame } = usePageStore((state) => state);

	return (
		<section className={styles.wrap}>
			<Button notDot onClick={openPopupFrame}>
				Начать обучение
			</Button>
		</section>
	);
}

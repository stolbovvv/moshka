'use client';

import { useEffect } from 'react';
import { usePageStore } from '@/store/usePageStore';
import styles from './popup-frame.module.css';
import clsx from 'clsx';

export function PopupFrame() {
	const { popupFrame, closePopupFrame } = usePageStore((state) => state);

	useEffect(() => {
		if (document.querySelector('#a1abb1e73b7c7212eb5f5f5f94853f73271f97a8')) return;

		const script = document.createElement('script');

		script.id = 'a1abb1e73b7c7212eb5f5f5f94853f73271f97a8';
		script.src = 'https://lk.moshka.ru/pl/lite/widget/script?id=1223744';
		script.async = true;

		document.body.appendChild(script);
	}, []);

	return (
		<div
			className={clsx(styles.wrap, {
				[styles['is-active']]: popupFrame.isOpen,
			})}
		>
			<div className={styles.container}>
				<button className={styles.close} onClick={closePopupFrame}>
					✖
				</button>
				<iframe
					className={styles.frame}
					allowFullScreen
					src="https://lk.moshka.ru/pl/lite/widget/widget?id=1223744"
				/>
			</div>
		</div>
	);
}

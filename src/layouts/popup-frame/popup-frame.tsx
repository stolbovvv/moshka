'use client';

import { useEffect } from 'react';
import { usePageStore } from '@/store/usePageStore';
import styles from './popup-frame.module.css';
import clsx from 'clsx';

// <script id="35a3fd584153e09c128c3961eb62f0e15ac224ba" src="https://lk.moshka.ru/pl/lite/widget/script?id=1269513"></script>

export function PopupFrame() {
	const { popupFrame, closePopupFrame } = usePageStore((state) => state);

	useEffect(() => {
		if (document.getElementById('35a3fd584153e09c128c3961eb62f0e15ac224ba')) return;

		const script = document.createElement('script');

		script.id = '35a3fd584153e09c128c3961eb62f0e15ac224ba';
		script.src = 'https://lk.moshka.ru/pl/lite/widget/script?id=1269513';
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
					src="https://lk.moshka.ru/pl/lite/widget/widget?id=1269513"
				/>
			</div>
		</div>
	);
}

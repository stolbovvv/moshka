'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/app/ui/button/button';
import styles from './popup-out.module.css';

export function PopupOut() {
	const [open, setOpen] = useState(false);
	const wasOpen = useRef<boolean>(false);
	const timeout = useRef<any>();

	useEffect(() => {
		document.body.style.overflow = open ? 'hidden' : 'auto';
	}, [open]);

	useEffect(() => {
		if (window.matchMedia('(max-width: 47.999em)').matches) {
			timeout.current = setTimeout(() => {
				setOpen(true);
			}, 30000);

			return () => clearTimeout(timeout.current);
		} else {
			const showPopupByOut = () => {
				if (!wasOpen.current) {
					setOpen(true);
					wasOpen.current = true;
				}
			};

			document.addEventListener('mouseleave', showPopupByOut);

			return () => document.removeEventListener('mouseleave', showPopupByOut);
		}
	}, []);

	return (
		<motion.div
			initial={{
				backgroundColor: 'rgba(0,0,0,0)',
				visibility: 'hidden',
				opacity: 0,
			}}
			animate={{
				backgroundColor: open ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0)',
				visibility: open ? 'visible' : 'hidden',
				opacity: open ? 1 : 0,
			}}
			className={styles.over}
		>
			<motion.div className={styles.wrap}>
				<div className={styles.head}>
					<h2 className={styles.heading}>Уже уходишь?</h2>
					<button className={styles.close} onClick={() => setOpen(false)}>
						<span></span>
						<span></span>
					</button>
				</div>
				<div className={styles.body}>
					<p className={styles.text}>Заполни форму и получи бесплатное руководство</p>
					<p className={styles.lable}>8 киношных лайфхаков для мобильной съемки</p>
					<ul className={styles.list}>
						<li>- как улучшить фото товаров для рекламы с помощью одной настройки</li>
						<li>- как вызывать эмоции и создать эпичность кадра</li>
						<li>- приём монтажа из «Слово пацана» и «Звоните Ди Каприо»</li>
					</ul>
					<Button href="https://salebot.site/md/61631aab25a54d8b4966639de060ad41" className={styles.button}>Забрать бесплатно</Button>
				</div>
			</motion.div>
		</motion.div>
	);
}

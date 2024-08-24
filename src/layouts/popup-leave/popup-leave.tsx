'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { type Variants as AnimationVariants, motion } from 'framer-motion';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { usePageStore } from '@/store/usePageStore';
import { Button } from '@/components';
import styles from './popup-leave.module.css';
import image from './popup-leave-image.png';

const animationVariants: AnimationVariants = {
	show: {
		backgroundColor: 'rgba(0,0,0,0.5)',
		visibility: 'visible',
		opacity: 1,
	},
	hide: {
		backgroundColor: 'rgba(0,0,0,0)',
		visibility: 'hidden',
		opacity: 0,
	},
};

export function PopupLeave() {
	const [headerText, setHeaderText] = useState<string>('');

	const { popupLeave, openPopupLeave, closePopupLeave } = usePageStore((state) => state);

	const isMobile = useMediaQuery('(max-width: 48em)');
	const timeout = useRef<NodeJS.Timeout>();

	useEffect(() => {
		if (isMobile) {
			setHeaderText('Забрать подарок!');
			timeout.current = setTimeout(openPopupLeave, 30000);

			return () => clearTimeout(timeout.current);
		} else {
			setHeaderText('Уже уходишь?');
			document.addEventListener('mouseleave', openPopupLeave, { once: true });

			return () => document.removeEventListener('mouseleave', openPopupLeave);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isMobile]);

	useEffect(() => {
		if (popupLeave.isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.removeProperty('overflow');
		}
	}, [popupLeave.isOpen]);

	return (
		<motion.div
			className={styles.over}
			initial={'hide'}
			animate={popupLeave.isOpen ? 'show' : 'hide'}
			variants={animationVariants}
		>
			<div className={styles.wrap}>
				<div className={styles.head}>
					<h2 className={styles.heading}>{headerText}</h2>
					<button className={styles.close} onClick={closePopupLeave}>
						<span></span>
						<span></span>
					</button>
				</div>
				<div className={styles.body}>
					<p className={styles.text}>Заполни форму и получи бесплатное руководство</p>
					<p className={styles.label}>8 киношных лайфхаков для мобильной съемки</p>
					<ul className={styles.list}>
						<li>- как улучшить фото товаров для рекламы с помощью одной настройки</li>
						<li>- как вызывать эмоции и создать эпичность кадра</li>
						<li>- приём монтажа из «Слово пацана» и «Звоните Ди Каприо»</li>
					</ul>
					<Button href="https://salebot.site/md/61631aab25a54d8b4966639de060ad41" className={styles.button}>
						Забрать бесплатно
					</Button>
				</div>
				<Image className={styles.image} src={image} alt="" />
			</div>
		</motion.div>
	);
}

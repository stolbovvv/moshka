'use client';

import { useEffect } from 'react';
import sanitizeHtml from 'sanitize-html';
import { type Variants as AnimationVariants, motion } from 'framer-motion';
import { usePageStore } from '@/store/usePageStore';
import { Button } from '@/components';
import styles from './popup-resource.module.css';

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

export function PopupResource({ price }: { price?: number }) {
	const { popupResource, closePopupResource, openPopupFrame } = usePageStore((state) => state);
	const { isOpen, data } = popupResource;

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.removeProperty('overflow');
		}
	}, [isOpen]);

	return (
		<>
			<motion.div
				className={styles.over}
				initial={'hide'}
				animate={isOpen ? 'show' : 'hide'}
				variants={animationVariants}
			>
				<div className={styles.wrap}>
					<button className={styles.close} onClick={closePopupResource}>
						<span></span>
						<span></span>
					</button>
					<div className={styles.body}>
						<div className={styles.grid}>
							<div className={styles.item}>
								<h2 className={styles.heading}>{data.head_description}</h2>
								<p
									className={styles.text}
									dangerouslySetInnerHTML={{
										__html: (data.description ?? '').replace(/\n/g, ''),
									}}
								/>
								<ul className={styles.list}>
									{data.properties.map((prop, index) => (
										<li key={index} className={styles.info}>
											{prop}
										</li>
									))}
								</ul>
							</div>
							{data.program && data.program.length > 0 && (
								<div className={styles.item}>
									<h3 className={styles.heading}>Программа курса</h3>
									<ul className={styles.program}>
										{data.program.map((item, index) => (
											<li key={index} className={styles.program__item}>
												<div className={styles.program__head}>
													<div className={styles.program__label}>Модуль {index + 1}.</div>
													<div className={styles.program__count}>{item?.count}</div>
												</div>
												<h4 className={styles.program__name}>{item?.title}</h4>
											</li>
										))}
									</ul>
								</div>
							)}
							<div className={styles.item}>
								<h3 className={styles.heading}>Автор курса</h3>
								<div className={styles.author}>
									<img
										className={styles.author__image}
										src={data.author?.photo || ''}
										alt={data.author?.name || ''}
										width={300}
										height={380}
									/>
									<div className={styles.author__content}>
										<p className={styles.author__name}>{data.author?.name}</p>
										<p className={styles.author__descr}>{data.author?.role}</p>
										{data.author?.text && (
											<p
												className={styles.text}
												dangerouslySetInnerHTML={{
													__html: sanitizeHtml(data.author?.text),
												}}
											/>
										)}
									</div>
								</div>
							</div>
							<div className={styles.item}>
								<h3 className={styles.heading}>Работы автора</h3>
								<div className={styles.images}>
									{data.posters.map((poster, index) => (
										<img
											key={index}
											className={styles.image}
											src={poster}
											alt=""
											width={105}
											height={148}
										/>
									))}
								</div>
							</div>
						</div>
						<Button className={styles.button} onClick={openPopupFrame}>
							Купить подписку на все курсы за {price || '8900'} ₽
						</Button>
					</div>
				</div>
			</motion.div>
		</>
	);
}

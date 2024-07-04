'use client';

import type { Resource } from '@/lib/definitions';
import Image from 'next/image';
import { Button } from '@/app/ui/button/button';
import { motion } from 'framer-motion';
import styles from './popup-resource.module.css';

export function PopupPesource({
	isOpend,
	resource,
	onClose,
}: {
	isOpend: boolean;
	resource: Resource | undefined;
	onClose: () => void;
}) {
	return (
		<motion.div
			initial={{
				backgroundColor: 'rgba(0,0,0,0)',
				visibility: 'hidden',
				opacity: 0,
			}}
			animate={{
				backgroundColor: isOpend && resource ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0)',
				visibility: isOpend && resource ? 'visible' : 'hidden',
				opacity: isOpend && resource ? 1 : 0,
			}}
			className={styles.over}
		>
			<div className={styles.wrap}>
				<button className={styles.close} onClick={onClose}>
					<span></span>
					<span></span>
				</button>
				<div className={styles.body}>
					<div className={styles.grid}>
						<div className={styles.item}>
							<h2 className={styles.heading}>Вы научитесь</h2>
							<p className={styles.text}>{resource?.description}</p>
							<ul className={styles.list}>
								{resource?.properties.map((prop, index) => (
									<li key={index} className={styles.info}>
										{prop}
									</li>
								))}
							</ul>
						</div>
						<div className={styles.item}>
							<h3 className={styles.heading}>Программа курса</h3>
							<ul className={styles.program}>
								{resource?.program.map((item, index) => (
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
						<div className={styles.item}>
							<h3 className={styles.heading}>Автор курса</h3>
							<div className={styles.author}>
								<Image
									className={styles.author__image}
									src={resource?.author?.photo || ''}
									alt={resource?.author?.name || ''}
									width={300}
									height={380}
								/>
								<div className={styles.author__content}>
									<p className={styles.author__name}>{resource?.author?.name}</p>
									<p className={styles.author__descr}>{resource?.author?.role}</p>
									<p className={styles.text}>{resource?.author?.text}</p>
								</div>
							</div>
						</div>
						<div className={styles.item}>
							<h3 className={styles.heading}>Работы автора</h3>
							<div className={styles.images}>
								{resource?.posters.map((poster, index) => (
									<Image
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
					<Button className={styles.button} href="https://getcourse.ru/">
						Купить подписку на все курсы за 8900 ₽
					</Button>
				</div>
			</div>
		</motion.div>
	);
}

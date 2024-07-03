'use client';

import Image from 'next/image';
import { Button } from '@/app/ui/button/button';
import { motion } from 'framer-motion';
import styles from './popup-resource.module.css';

export function PopupPesource({ isOpend, onClose }: { isOpend: boolean; onClose: () => void }) {
	return (
		<motion.div
			initial={{
				backgroundColor: 'rgba(0,0,0,0)',
				visibility: 'hidden',
				opacity: 0,
			}}
			animate={{
				backgroundColor: isOpend ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0)',
				visibility: isOpend ? 'visible' : 'hidden',
				opacity: isOpend ? 1 : 0,
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
							<p className={styles.text}>
								Легко генерировать идеи для создания контента. Писать захватывающие сценарии по формулам
								мирового кино. Управлять вниманием зрителя так, чтобы он досматривал видео до конца
							</p>
							<ul className={styles.list}>
								<li className={styles.info}>17 видео-уроков</li>
								<li className={styles.info}>5,5 часов видео</li>
								<li className={styles.info}>Задания для самостоятельной проработки</li>
								<li className={styles.info}>6 чек-листов по темам уроков</li>
								<li className={styles.info}>Досье на 19 известных персонажей</li>
							</ul>
						</div>
						<div className={styles.item}>
							<h3 className={styles.heading}>Программа курса</h3>
							<ul className={styles.program}>
								<li className={styles.program__item}>
									<div className={styles.program__head}>
										<div className={styles.program__label}>Модуль 1.</div>
										<div className={styles.program__count}>4 урока</div>
									</div>
									<h4 className={styles.program__name}>Генерация идей для контента</h4>
								</li>
								<li className={styles.program__item}>
									<div className={styles.program__head}>
										<div className={styles.program__label}>Модуль 2.</div>
										<div className={styles.program__count}>10 уроков</div>
									</div>
									<h4 className={styles.program__name}>Формулы захватывающих сценариев</h4>
								</li>
								<li className={styles.program__item}>
									<div className={styles.program__head}>
										<div className={styles.program__label}>Модуль 3.</div>
										<div className={styles.program__count}>3 урока</div>
									</div>
									<h4 className={styles.program__name}>Управление вниманием зрителя</h4>
								</li>
								<li className={styles.program__item}>
									<div className={styles.program__head}>
										<div className={styles.program__label}>Модуль 4.</div>
										<div className={styles.program__count}>5 уроков</div>
									</div>
									<h4 className={styles.program__name}>-</h4>
								</li>
							</ul>
						</div>
						<div className={styles.item}>
							<h3 className={styles.heading}>Автор курса</h3>
							<div className={styles.author}>
								<Image
									className={styles.author__image}
									src="/images/media-placeholder.jpg"
									alt=""
									width={300}
									height={380}
								/>
								<div className={styles.author__content}>
									<p className={styles.author__name}>Ильяна Левина</p>
									<p className={styles.author__descr}>
										Эксперт по личному бренду, интернет-маркетолог
									</p>
									<p className={styles.text}>
										Участие в проектах СБЕР, Тинькофф, РЖД, IKEA, OZON, Газпром, 1 канал, Первый
										ОФД. Работает с блогером Ян Топлес
									</p>
								</div>
							</div>
						</div>
						<div className={styles.item}>
							<h3 className={styles.heading}>Работы автора</h3>
							<div className={styles.images}>
								<Image
									className={styles.image}
									src="/images/posters/poster-1.jpg"
									alt=""
									width={105}
									height={148}
								/>
								<Image
									className={styles.image}
									src="/images/posters/poster-2.jpg"
									alt=""
									width={105}
									height={148}
								/>
								<Image
									className={styles.image}
									src="/images/posters/poster-3.jpg"
									alt=""
									width={105}
									height={148}
								/>
								<Image
									className={styles.image}
									src="/images/posters/poster-4.jpg"
									alt=""
									width={105}
									height={148}
								/>
								<Image
									className={styles.image}
									src="/images/posters/poster-5.jpg"
									alt=""
									width={105}
									height={148}
								/>
								<Image
									className={styles.image}
									src="/images/posters/poster-6.jpg"
									alt=""
									width={105}
									height={148}
								/>
								<Image
									className={styles.image}
									src="/images/posters/poster-7.jpg"
									alt=""
									width={105}
									height={148}
								/>
								<Image
									className={styles.image}
									src="/images/posters/poster-8.jpg"
									alt=""
									width={105}
									height={148}
								/>
							</div>
						</div>
					</div>
					<Button className={styles.button} href="#">
						Купить подписку на все курсы за 8900 ₽
					</Button>
				</div>
			</div>
		</motion.div>
	);
}

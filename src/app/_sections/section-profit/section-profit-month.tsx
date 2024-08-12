'use client';

import React from 'react';
import styles from './section-profit.module.css';
import imgShield from './section-profit-shield.svg';
import { Button } from '@/app/_components/button/button';
import { usePopupFrame } from '@/hooks/use-popup-frame';
import clsx from 'clsx';

export function SectionProfitMonth() {
	const { isPopupFrameOpen, setIsPopupFrameOpen } = usePopupFrame();

	return (
		<section className={styles.wrap} id="section-profit">
			<div className={styles.head}>
				<h2 className={styles.heading}>Получи все курсы сразу с подпиской</h2>
				<div className={styles.shield}>
					<img src={imgShield.src} alt="" aria-hidden="false" />
					<p className={styles.text}>
						Никаких рисков для тебя — в течение 14 дней после подписки ты можешь отменить её без объяснения
						причин, и мы вернём тебе 100% суммы.
					</p>
				</div>
			</div>
			<div className={styles.body}>
				<h3 className={styles.subtitle}>Сразу после подписки ты получишь:</h3>

				<ul className={styles.roll}>
					<li>44 часов видеоуроков</li>
					<li>47 авторских лонгридов и материалов к урокам</li>
					<li>32 домашних задания для самопроверки</li>
					<li>10 курсов, мастер-классов и лекций</li>
					<li>Регулярные обновления и новые курсы</li>
					<li>Переводы эксклюзивных материалов</li>
					<li>Закрытые мероприятия для подписчиков</li>
					<li>Скидки и специальные предложения на другие продукты от наших авторов и партнеров</li>
				</ul>

				{/* <ul className={styles.list}>
					<li className={styles.item}>режиссура</li>
					<li className={styles.item}>нейросети</li>
					<li className={styles.item}>драматургия сериалов</li>
					<li className={styles.item}>мобильная съемка</li>
					<li className={styles.item}>блогинг</li>
					<li className={styles.item}>визуальные образы</li>
					<li className={styles.item}>вдохновение</li>
					<li className={styles.item}>сторителлинг</li>
				</ul> */}
				<div className={styles.price}>
					<p className={styles.price__label}>Стоимость подписки</p>
					<p className={clsx(styles.price__value, styles.price__value_old)}>3900 ₽</p>
				</div>
				<div className={styles.price}>
					<p className={styles.price__label}>Стоимость по АКЦИИ</p>
					<p className={styles.price__value}>
						890 ₽ / <span style={{ fontSize: '0.875em' }}>месяц</span>
					</p>
					<p className={styles.price__footnote}>Выгода 53%</p>
				</div>
				<Button className={styles.button} theme="dark" onClick={() => setIsPopupFrameOpen(true)}>
					Стать участником
				</Button>
			</div>

			{isPopupFrameOpen && (
				<div className="popap-frame" style={{ position: 'absolute' }}>
					{/* Контейнер для iframe */}
				</div>
			)}
		</section>
	);
}

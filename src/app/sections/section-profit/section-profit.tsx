import { Button } from '@/app/ui/button/button';
import styles from './section-profit.module.css';

export function SectionProfit() {
	return (
		<section className={styles.wrap} id="section-profit">
			<div className={styles.head}>
				<h2 className={styles.heading}>Получите все курсы сразу с подпиской</h2>
			</div>
			<div className={styles.body}>
				<ul className={styles.list}>
					<li className={styles.item}>режиссура</li>
					<li className={styles.item}>нейросети</li>
					<li className={styles.item}>драматургия сериалов</li>
					<li className={styles.item}>мобильная съемка</li>
					<li className={styles.item}>блогинг</li>
					<li className={styles.item}>визуальные образы</li>
					<li className={styles.item}>вдохновение</li>
					<li className={styles.item}>сторителлинг</li>
				</ul>
				<div className={styles.price}>
					<p className={styles.price__label}>Цена фиксирована</p>
					<p className={styles.price__value}>8900 ₽ / год</p>
					<p className={styles.price__footnote}>*Только для beta-доступа до сентября 2024 г.</p>
				</div>
				<Button className={styles.button} theme="dark" href="https://getcourse.ru/">
					Начать обучение
				</Button>
				<p className={styles.text}>
					Никаких рисков — в течение 14 дней после подписки возможен возврат без объяснения причин
				</p>
			</div>
		</section>
	);
}

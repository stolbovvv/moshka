import { Button } from '@/ui/button/button';
import styles from './section-profit.module.css';

export function SectionProfit() {
	return (
		<section className={styles.wrap} id="section-profit">
			<div className={styles.head}>
				<h2 className={styles.heading}>Сразу после подписки ты получишь</h2>
			</div>
			<div className={styles.body}>
				<ul className={styles.list}>
					<li className={styles.item}>
						<span className="fw-700">10</span> курсов, мастер-классов и лекций
					</li>
					<li className={styles.item}>
						<span className="fw-700">44</span> часа видео уроков
					</li>
					<li className={styles.item}>
						<span className="fw-700">47</span> конспектов и рабочих тетрадей
					</li>
					<li className={styles.item}>
						<span className="fw-700">32</span> домашних задания для самопроверок
					</li>
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

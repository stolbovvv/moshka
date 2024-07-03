import Image from 'next/image';
import styles from './section-payment.module.css';
import imageBank1 from './image-bank-1.png';
import imageBank2 from './image-bank-2.png';
import imageBank3 from './image-bank-3.png';
import imageBank4 from './image-bank-4.png';

export function SectionPayment() {
	return (
		<section className={styles.wrap} id="section-payment">
			<div className={styles.head}>
				<h2 className={styles.heading}>
					Условия оплаты <br />и рассрочки
				</h2>
			</div>
			<div className={styles.cards}>
				<div className={styles.card} data-theme="blue">
					<h3 className={styles.card__heading}>&gt; 4 способов оплаты</h3>
					<div className={styles.card__images}>
						<Image className={styles.card__image} src={imageBank1} alt="" />
						<Image className={styles.card__image} src={imageBank2} alt="" />
						<Image className={styles.card__image} src={imageBank3} alt="" />
						<Image className={styles.card__image} src={imageBank4} alt="" />
					</div>
				</div>
				<div className={styles.card} data-theme="yellow">
					<h3 className={styles.card__heading}>Без переплат</h3>
					<p className={styles.card__text}>Разделим стоимость на части — это не дороже, чем оплатить сразу</p>
				</div>
				<div className={styles.card} data-theme="neutral">
					<h3 className={styles.card__heading}>За 5 минут</h3>
					<p className={styles.card__text}>Оформим рассрочку онлайн с подтверждением по СМС</p>
				</div>
			</div>
		</section>
	);
}

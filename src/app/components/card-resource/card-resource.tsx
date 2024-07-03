import type { Resource } from '@/lib/definitions';
import Image from 'next/image';
import styles from './card-resource.module.css';

export function CardResource({
	data: { title, thumb, author, duration, complexity, tags, price, category },
	openModal,
}: {
	data: Resource;
	openModal: () => void;
}) {
	return (
		<div className={styles.wrap}>
			<Image className={styles.thumb} src={thumb} alt={title} width={427} height={220} />
			<h3 className={styles.heading}>{title}</h3>
			<p className={styles.author}>{author}</p>
			<ul className={styles.props}>
				<li className={styles.props__item}>
					<span className={styles.props__label}>Время на освоение</span>
					<span className={styles.props__value}>{duration}</span>
				</li>
				<li className={styles.props__item}>
					<span className={styles.props__label}>Сложность</span>
					<span className={styles.props__value}>{complexity}</span>
				</li>
			</ul>
			<ul className={styles.tags}>
				{tags.map((item, index) => (
					<li key={index} className={styles.tag}>
						{item}
					</li>
				))}
			</ul>
			<div className={styles.price}>
				<span className={styles.price__label}>Цена без подписки</span>
				<span className={styles.price__value}>{price} ₽</span>
			</div>
			<div className={styles.foot}>
				<button className={styles.more} onClick={openModal}>
					Подробнее
				</button>
				<p className={styles.type}>{category.name}</p>
			</div>
		</div>
	);
}

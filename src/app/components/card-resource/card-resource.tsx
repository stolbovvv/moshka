import type { Resource } from '@/lib/definitions';
import { motion } from 'framer-motion';
import styles from './card-resource.module.css';

export function CardResource({
	data: { title = '', thumb = '', author, duration = '', complexity = '', tags = [], price = '', category = '' },
	// data: { title = '', thumb = '', author, duration = '', complexity = '', tags = [], category = '' },
	openModal,
}: {
	data: Resource;
	openModal: () => void;
}) {
	return (
		<motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={styles.wrap}>
			<img className={styles.thumb} src={thumb} alt={title} width={427} height={220} />
			<h3 className={styles.heading}>{title}</h3>
			<p className={styles.author}>{author?.name || ''}</p>
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
				{price === '0' ? (
					<>
						<span className={styles.price__label}>Доступно только в годовой подписке</span>
						<span className={styles.price__value}></span>
					</>
				) : (
					<>
						<span className={styles.price__label}>Цена без подписки</span>
						<span className={styles.price__value}>{price}</span>
					</>
				)}
			</div>
			<div className={styles.foot}>
				<button className={styles.more} onClick={openModal}>
					Подробнее
				</button>
				<p className={styles.type}>{category}</p>
			</div>
		</motion.div>
	);
}

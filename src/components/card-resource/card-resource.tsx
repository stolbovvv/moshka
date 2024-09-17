'use client';

import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import type { Resource } from '@/libs/definitions';
import { usePageStore } from '@/store/usePageStore';
import styles from './card-resource.module.css';

export function CardResource({ data }: { data: Resource }) {
	const { openPopupResource } = usePageStore((state) => state);
	const pathName = usePathname();

	return (
		<motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={styles.wrap}>
			<img className={styles.thumb} src={data.thumb} alt={data.title} width={427} height={220} />
			<h3 className={styles.heading}>{data.title}</h3>
			<p className={styles.author}>{data.author.name || ''}</p>

			{pathName.match(/\/month$/i) ? null : (
				<ul className={styles.props}>
					<li className={styles.props__item}>
						<span className={styles.props__label}>Время на освоение</span>
						<span className={styles.props__value}>{data.duration}</span>
					</li>
					<li className={styles.props__item}>
						<span className={styles.props__label}>Сложность</span>
						<span className={styles.props__value}>{data.complexity}</span>
					</li>
				</ul>
			)}

			<ul className={styles.tags}>
				{data.tags.map((item, index) => (
					<li key={index} className={styles.tag}>
						{item}
					</li>
				))}
			</ul>
			<div className={styles.price}>
				{pathName.match(/\/month$/i) ? (
					<>
						<span className={styles.price__label}>Входит в подписку</span>
						<span className={styles.price__value}></span>
					</>
				) : data.price === '0' ? (
					<>
						<span className={styles.price__label}>Входит в подписку</span>
						<span className={styles.price__value}></span>
					</>
				) : (
					<>
						<span className={styles.price__label}>Входит в подписку</span>
						<span className={styles.price__value}></span>
						{/* <span className={styles.price__value}>{data.price}</span> */}
					</>
				)}
			</div>
			<div className={styles.foot}>
				<button className={styles.more} onClick={() => openPopupResource(data)}>
					Подробнее
				</button>
				<p className={styles.type}>{data.category}</p>
			</div>
		</motion.div>
	);
}

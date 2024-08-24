'use client';

import type { Faq } from '@/libs/definitions';
import { type Variants as AnimationVariants, motion } from 'framer-motion';
import sanitizeHtml from 'sanitize-html';
import styles from './card-faq.module.css';

const animationVariantsWrapper: AnimationVariants = {
	open: {
		borderColor: '#2e2e2e00',
		backgroundColor: '#ffffff',
	},
	hide: {
		borderColor: '#2e2e2e',
		backgroundColor: '#ffffff00',
	},
};

const animationVariantsTrigger: AnimationVariants = {
	open: {
		rotate: 45,
	},
	hide: {
		rotate: 0,
	},
};

const animationVariantsContent: AnimationVariants = {
	open: {
		height: 'auto',
		opacity: 1,
	},
	hide: {
		height: 0,
		opacity: 0,
	},
};

export function CardFaq({ data, opened, onOpen }: { data: Faq; opened: boolean; onOpen: () => void }) {
	return (
		<motion.div
			className={styles.wrap}
			initial={opened ? 'open' : 'hide'}
			animate={opened ? 'open' : 'hide'}
			variants={animationVariantsWrapper}
		>
			<div className={styles.head} onClick={() => onOpen()}>
				<h3 className={styles.heading}>{data.question}</h3>
				<motion.button
					className={styles.button}
					initial={opened ? 'open' : 'hide'}
					animate={opened ? 'open' : 'hide'}
					variants={animationVariantsTrigger}
					onClick={() => onOpen()}
				>
					<span></span>
					<span></span>
				</motion.button>
			</div>
			<motion.div
				className={styles.body}
				initial={opened ? 'open' : 'hide'}
				animate={opened ? 'open' : 'hide'}
				variants={animationVariantsContent}
			>
				<div className={styles.content} dangerouslySetInnerHTML={{ __html: sanitizeHtml(data.answer) }} />
			</motion.div>
		</motion.div>
	);
}

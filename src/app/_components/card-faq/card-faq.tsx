'use client';

import type { Faq } from '@/lib/definitions';
import { motion } from 'framer-motion';
import sanitizeHtml from 'sanitize-html';
import styles from './card-faq.module.css';

const variants = {
	wrapper: {
		open: {
			borderColor: '#2e2e2e00',
			backgroundColor: '#ffffff',
		},
		hide: {
			borderColor: '#2e2e2e',
			backgroundColor: '#ffffff00',
		},
	},

	trigger: {
		open: {
			rotate: 45,
		},
		hide: {
			rotate: 0,
		},
	},

	content: {
		open: {
			height: 'auto',
			opacity: 1,
		},
		hide: {
			height: 0,
			opacity: 0,
		},
	},
};

export function CardFaq({
	data: { question, answer },
	opened,
	onOpen,
}: {
	data: Faq;
	opened: boolean;
	onOpen: () => void;
}) {
	return (
		<motion.div
			className={styles.wrap}
			initial={opened ? 'open' : 'hide'}
			animate={opened ? 'open' : 'hide'}
			variants={variants.wrapper}
		>
			<div className={styles.head} onClick={() => onOpen()}>
				<h3 className={styles.heading}>{question}</h3>
				<motion.button
					className={styles.button}
					initial={opened ? 'open' : 'hide'}
					animate={opened ? 'open' : 'hide'}
					variants={variants.trigger}
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
				variants={variants.content}
			>
				<div className={styles.content} dangerouslySetInnerHTML={{ __html: sanitizeHtml(answer) }} />
			</motion.div>
		</motion.div>
	);
}

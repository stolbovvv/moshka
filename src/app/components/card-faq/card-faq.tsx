'use client';

import type { Faq } from '@/lib/definitions';
import { useState } from 'react';
import { motion } from 'framer-motion';
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

export function CardFaq({ data: { question, answer }, opened }: { data: Faq; opened: boolean }) {
	const [open, setOpen] = useState(opened);

	return (
		<motion.div
			className={styles.wrap}
			initial={open ? 'open' : 'hide'}
			animate={open ? 'open' : 'hide'}
			variants={variants.wrapper}
		>
			<div className={styles.head}>
				<h3 className={styles.heading} onClick={() => setOpen(!open)}>
					{question}
				</h3>
				<motion.button
					className={styles.button}
					initial={open ? 'open' : 'hide'}
					animate={open ? 'open' : 'hide'}
					variants={variants.trigger}
					onClick={() => setOpen(!open)}
				>
					<span></span>
					<span></span>
				</motion.button>
			</div>
			<motion.div
				className={styles.body}
				initial={open ? 'open' : 'hide'}
				animate={open ? 'open' : 'hide'}
				variants={variants.content}
			>
				<div className={styles.content}>{answer}</div>
			</motion.div>
		</motion.div>
	);
}

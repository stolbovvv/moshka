'use client';

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

export function CardFaq() {
	const [open, setOpen] = useState(false);

	return (
		<motion.div
			className={styles.wrap}
			initial={'hide'}
			animate={open ? 'open' : 'hide'}
			variants={variants.wrapper}
		>
			<div className={styles.head}>
				<h3 className={styles.heading} onClick={() => setOpen(!open)}>
					Для обучения достаточно одного телефона, или нужно приобретать дополнительные гаджеты для съемок?
				</h3>
				<motion.button
					className={styles.button}
					initial={'hide'}
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
				initial={'hide'}
				animate={open ? 'open' : 'hide'}
				variants={variants.content}
			>
				<div className={styles.content}>
					<ul>
						<li>научитесь превращать свои идеи и задумки в сюжеты и истории</li>
						<li>поймёте как вести контент без напряжения и выстраивать отношения с аудиторией</li>
						<li>получите практические навыки и обретёте уверенность</li>
						<li>начнёте проявляться в мире соцсетей</li>
					</ul>
				</div>
			</motion.div>
		</motion.div>
	);
}

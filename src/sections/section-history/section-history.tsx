import styles from './section-history.module.css';

export function SectionHistory() {
	return (
		<section className={styles.wrap} id="section-history">
			<div className={styles.head}>
				<video
					className={styles.video}
					width={720}
					height={405}
					loop
					autoPlay
					preload="none"
					muted
					poster="/images/media-placeholder.jpg"
				>
					<source src="/video/promo-video.mp4" type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			</div>
			<div className={styles.body}>
				<h2 className={styles.heading}>История, которую увидит весь мир, будет вашей</h2>
				<p className={styles.text}>
					Вы никогда не думали о жизни, как об одном большом сценарии, который мы сочиняем сами?
				</p>
				<blockquote className={styles.blockquote}>
					<div className={styles.blockquote__body}>
						<p>
							«Мы — персонажи фильма любимого жанра и все, что мы делаем в нашей жизни, влияет на финал.
							So make it a good one!»
						</p>
					</div>
					<cite className={styles.blockquote__cite}>
						Денис Елдышов (Специалист по визуальным эффектам FXTD)
					</cite>
				</blockquote>
			</div>
		</section>
	);
}

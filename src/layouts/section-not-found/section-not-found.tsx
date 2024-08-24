import { Button } from '@/components';
import styles from './section-not-found.module.css';

export function SectionNotFound() {
	return (
		<section className={styles.wrap}>
			<div className={styles.head}>
				<div className={styles.head__content}>
					<span className={styles.number}>4</span>
					<span className={styles.round}></span>
					<span className={styles.number}>4</span>
				</div>
			</div>
			<div className={styles.body}>
				<div className={styles.body__content}>
					<p>
						Чем больше информации будет предоставлено, тем более релевантные предложения будут вам поступать
					</p>
					<Button className={styles.button} href="/">
						Вернуться на главную
					</Button>
				</div>
			</div>
		</section>
	);
}

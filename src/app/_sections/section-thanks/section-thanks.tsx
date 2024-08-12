import { Button } from '@/app/_components/button/button';
import styles from './section-thanks.module.css';
import Image from 'next/image';

export function SectionThanks() {
	return (
		<section className={styles.wrap}>
			<div className={styles.head}>
				<div className={styles.header__content}>
					<h1 className={styles.heading}>
						Благодарим вас <br />
						за покупку!
					</h1>
					<p className={styles.text}>
						В ближайшее время вы получите письмо на почту с вашими доступами к личному кабинету
					</p>
					<Button href="/">Вернуться на главную</Button>
				</div>
			</div>
			<div className={styles.body}>
				<Image
					className={styles.image}
					src="/images/moshka-black.svg"
					alt="Moshka – международная онлайн школа контента."
					width={760}
					height={326}
				/>
			</div>
		</section>
	);
}

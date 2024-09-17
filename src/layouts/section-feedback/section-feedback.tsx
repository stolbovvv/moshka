import { Button } from '@/components';
import styles from './section-feedback.module.css';

export function SectionFeedback() {
	return (
		<section className={styles.wrap}>
			<div className={styles.head}>
				<h2 className={styles.heading}>Остались вопросы?</h2>
				<p className={styles.descr}>Не стесняйся, напиши нам и мы обязательно с тобой свяжемся!</p>
			</div>
			<form className={styles.form} method="post" action="https://zumcspb.ru/test.php">
				<label className={styles.label} htmlFor="name">
					Ваше имя:
				</label>
				<input className={styles.input} id="name" name="name" type="text" required />

				<label className={styles.label} htmlFor="phone">
					Ваш телефон:
				</label>
				<input className={styles.input} id="phone" name="phone" type="tel" required />

				<label className={styles.label} htmlFor="email">
					E-mail:
				</label>
				<input className={styles.input} id="email" name="email" type="email" required />

				<label className={styles.label} htmlFor="message">
					Текст сообщения:
				</label>
				<textarea className={styles.textarea} id="message" name="message" rows={3} minLength={5} />

				<Button className={styles.button} theme="dark" notDot={true} type="submit">
					Написать нам
				</Button>

				<div className={styles.checkbox}>
					<input id="agree" name="agree" type="checkbox" />
					<label htmlFor="agree">Я согласен на обработку персональных данных.</label>
				</div>
			</form>
		</section>
	);
}

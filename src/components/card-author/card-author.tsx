import Image from 'next/image';
import sanitizeHTML from 'sanitize-html';
import { Author } from '@/libs/definitions';
import styles from './card-author.module.css';

export function CardAuthor({ data, rotate }: { data: Author; rotate: 'left' | 'right' }) {
	return (
		<div className={styles.wrap}>
			<p
				className={styles.role}
				data-rotate={rotate}
				dangerouslySetInnerHTML={{ __html: sanitizeHTML(data.role) }}
			/>
			<div className={styles.head}>
				<Image className={styles.photo} src={data.photo} alt={data.name} width={320} height={377} />
			</div>
			<div className={styles.body}>
				<p className={styles.name} dangerouslySetInnerHTML={{ __html: sanitizeHTML(data.name) }} />
				<p className={styles.text} dangerouslySetInnerHTML={{ __html: sanitizeHTML(data.text) }} />
			</div>
		</div>
	);
}

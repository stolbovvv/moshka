import styles from './section-history.module.css';

export function SectionHistoryHome() {
	return (
		<section className={styles.wrap} id="section-history">
			<div className={styles.head}>
				<video
					className={styles.video}
					width={720}
					height={405}
					preload="auto"
					loop={true}
					muted={true}
					autoPlay={true}
					playsInline={true}
					poster="/images/media-placeholder.jpg"
				>
					<source src="/video/promo-video.mp4" type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			</div>
			<div className={styles.body}>
				<h2 className={styles.heading}>Мы живём в эпоху контента</h2>
				<ul className={styles.list}>
					<li>более 1 миллиона часов видео и более 100 миллионов коротких роликов публикуется ежедневно</li>
					<li>более 50 платформ предлагают различные способы монетизации контента</li>
					<li>бренды, компании, артисты и политики общаются с аудиторией с помощью блогов</li>
				</ul>
			</div>
			<div className={styles.foot}>
				<div className={styles.card}>
					<h3 className={styles.card__heading}>Любая профессия связана с созданием контента</h3>
					<ul className={styles.card__list}>
						<li>главный капитал — это внимание аудитории</li>
						<li>преуспевают и получают клиентов те, кто умеет рассказать о себе</li>
						<li>покупают у тех, кого знают и кому доверяют</li>
					</ul>
				</div>
				<div className={styles.card}>
					<h3 className={styles.card__heading}>Каждый человек — автор контента</h3>
					<ul className={styles.card__list}>
						<li>получить доступ к аудитории никогда не было так просто и легко</li>
						<li>достаточно телефона, который лежит в твоём кармане</li>
						<li className={styles['card__item--mark']}>каждый может рассказать свою историю</li>
					</ul>
				</div>
				<div className={styles.card}>
					<h3 className={styles.card__heading}>Навыки создания контента – навыки будущего</h3>
					<ul className={styles.card__list}>
						<li>
							Умение привлекать и вовлекать аудиторию = подписчики, популярность, деньги, самовыражение
						</li>
						<li>бизнес и бренды всегда охотятся за профессионалами в создании контента</li>
						<li>Индустрия создателей контента оценивается в $250 млрд и достигнет $480 млрд в 2027</li>
					</ul>
				</div>
				<div className={styles.card}>
					<h3 className={styles.card__heading}>Зачем учиться делать контент?</h3>
					<ul className={styles.card__list}>
						<li>Свыше 10.000 вакансий на площадках по поиску работы</li>
						<li>Диапазон зарплат составляет 100.000 - 300.000</li>
						<li>ТОП 3 в списке востребованных профессий</li>
					</ul>
				</div>
			</div>
		</section>
	);
}

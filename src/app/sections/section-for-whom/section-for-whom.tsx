'use client';

import Image from 'next/image';
import clsx from 'clsx';
import { useState } from 'react';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import image1 from './image-1.png';
import image2 from './image-2.png';
import styles from './section-for-whom.module.css';
import 'swiper/css/effect-fade';

const cards = [
	{
		img: image1,
		theme: 'blue',
		title: 'Блогеры и эксперты',
		content: (
			<ul>
				<li>получите практические навыки сторителлинга, написания сценария, мобильной съемки и монтажа</li>
				<li>узнаете как создавать киношный, стильный контент для своего блога</li>
				<li>научитесь создавать контент, привлекающий внимание и вовлекающий аудиторию</li>
			</ul>
		),
	},
	{
		img: image2,
		theme: 'neutral',
		title: 'Фотографы и видеомейкеры',
		content: (
			<ul>
				<li>повысите навык и освоите мастерство создания видеоконтента</li>
				<li>прокачаете мышцу креатива, чтобы создавать уникальные и яркие проекты, о которых будут говорить</li>
				<li>обогатитесь свежим взглядом, вдохновением и новым подходом к творчеству</li>
			</ul>
		),
	},
	{
		img: image1,
		theme: 'yellow',
		title: 'Контент-мейкеры, SMM специалисты и маркетологи',
		content: (
			<ul>
				<li>научитесь разговаривать с аудиторией на языке визуальных образов</li>
				<li>повысите навык создания креативного контента</li>
				<li>узнаете больше про киношные приемы и выработаете собственный стиль</li>
				<li>расширите арсенал сценарных и визуальных приемов для вовлечения аудитории</li>
			</ul>
		),
	},
	{
		img: image2,
		theme: 'neutral',
		title: 'Кинематографисты',
		content: (
			<ul>
				<li>Расширите знания и приобретёте новые практические навыки</li>
				<li>Обогатите творческий арсенал приёмами опытных мастеров кино</li>
				<li>Изучите разные подходы к созданию сценариев, съёмке и постановке</li>
				<li>Улучшите знания о современных технологиях создания контента</li>
			</ul>
		),
	},
];

const sliderOptions: SwiperProps = {
	slidesPerView: 1,
	effect: 'fade',
	speed: 1000,
	loop: true,
	autoplay: {
		delay: 5000,
		pauseOnMouseEnter: false,
		disableOnInteraction: false,
	},
	modules: [EffectFade, Autoplay],
};

export function SectionForWhom() {
	const [picture, setPicture] = useState(0);

	const onPictureChange = (swiper: any) => {
		setPicture(swiper.realIndex);
	};

	return (
		<section className={styles.wrap} id="section-for-whom">
			<div className={styles.head}>
				<h2 className={styles.heading}>
					Кому будет <br />
					полезно?
				</h2>
				<Swiper className={styles.pictures} onSlideChange={onPictureChange} {...sliderOptions}>
					{cards.map((card, index) => (
						<SwiperSlide className={styles.pictures__slide} key={index} virtualIndex={index}>
							{({ isActive }) => (
								<Image
									className={styles.image}
									src={card.img}
									alt=""
									width={500}
									height={784}
									style={{ visibility: isActive ? 'visible' : 'hidden' }}
								/>
							)}
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<div className={styles.body}>
				<h2 className={styles.heading}>
					Кому будет <br />
					полезно?
				</h2>
				<Cards current={picture} />
			</div>
		</section>
	);
}

function Cards({ current }: { current: number }) {
	return (
		<div className={styles.grid}>
			{cards.map((card, index) => (
				<div
					key={index}
					className={clsx(styles.card, {
						[styles.card__current]: index === current,
					})}
					data-theme={card.theme}
				>
					<h3 className={styles.card__heading}>{card.title}</h3>
					<div className={styles.card__content}>{card.content}</div>
				</div>
			))}
		</div>
	);
}

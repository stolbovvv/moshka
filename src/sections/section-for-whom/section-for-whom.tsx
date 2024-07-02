'use client';

import Image from 'next/image';
import clsx from 'clsx';
import { useState } from 'react';
import { Swiper, SwiperProps, SwiperSlide, useSwiper } from 'swiper/react';
import { Autoplay, Controller, EffectFade } from 'swiper/modules';
import IconArrowLeft from '@/assets/icons/arrow-left.svg';
import IconArrowRight from '@/assets/icons/arrow-right.svg';
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
				<li>получите знания в кинорежиссуре, драматургии и рассказывать истории через визуальные образы</li>
			</ul>
		),
	},
];

const sliderOptions: SwiperProps = {
	slidesPerView: 1,
	effect: 'fade',
	speed: 1000,
	modules: [EffectFade, Autoplay, Controller],
};

export function SectionForWhom() {
	const [picture, setPicture] = useState(0);
	const [firstSwiper, setFirstSwiper] = useState<any>(null);
	const [secondSwiper, setSecondSwiper] = useState<any>(null);

	const onPictureChange = (swiper: any) => {
		setPicture(swiper.realIndex);
		console.log(swiper.realIndex);
	};

	return (
		<section className={styles.wrap} id="section-for-whom">
			<div className={styles.body}>
				<div className={styles.body__sidebar}>
					<h2 className={styles.heading}>
						Кому будет <br />
						полезно?
					</h2>
					<Swiper
						className={styles.pictures}
						{...sliderOptions}
						onSlideChange={onPictureChange}
						onSwiper={setFirstSwiper}
						controller={{ control: secondSwiper }}
					>
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
				<div className={styles.body__content}>
					<h2 className={styles.heading}>
						Кому будет <br />
						полезно?
					</h2>
					<Slider setSecondSwiper={setSecondSwiper} firstSwiper={firstSwiper} />
					<Cards current={picture} />
				</div>
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

function Slider({ setSecondSwiper, firstSwiper }: { setSecondSwiper: any; firstSwiper: any }) {
	return (
		<Swiper
			className={styles.slider}
			wrapperClass={styles.slider__wrapper}
			onSwiper={setSecondSwiper}
			controller={{ control: firstSwiper }}
			modules={[Controller]}
		>
			{cards.map((card, index) => (
				<SwiperSlide key={index} className={styles.slider__slide}>
					<div key={index} className={styles.card} data-theme={card.theme}>
						<h3 className={styles.card__heading}>{card.title}</h3>
						<div className={styles.card__content}>{card.content}</div>
					</div>
				</SwiperSlide>
			))}

			<SwipertNavigation />
		</Swiper>
	);
}

function SwipertNavigation() {
	const swiper = useSwiper();

	return (
		<div className={styles.slider__navbar}>
			<button className={styles.slider__button} onClick={() => swiper.slidePrev()}>
				<Image src={IconArrowLeft} alt="" />
			</button>
			<button className={styles.slider__button} onClick={() => swiper.slideNext()}>
				<Image src={IconArrowRight} alt="" />
			</button>
		</div>
	);
}

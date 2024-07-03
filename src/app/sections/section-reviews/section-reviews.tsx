'use client';

import type { Review } from '@/lib/definitions';
import Image from 'next/image';
import { Swiper, type SwiperProps, SwiperSlide, useSwiper } from 'swiper/react';
import IconArrowLeft from '@/assets/icons/arrow-left.svg';
import IconArrowRight from '@/assets/icons/arrow-right.svg';
import { CardReview } from '@/app/components/card-review/card-review';
import styles from './section-reviews.module.css';

const swiperOptions: SwiperProps = {
	slidesPerView: 1,
	spaceBetween: '20rem',
	loop: true,
	speed: 500,
	breakpoints: {
		'1024': {
			slidesPerView: 2,
		},
	},
};

export function SectionReviews({ reviews }: { reviews: Review[] }) {
	return (
		<section className={styles.wrap} id="section-reviews">
			<div className={styles.head}>
				<h2 className={styles.heading}>
					Высокий рейтинг <br />
					яндекс отзывов
				</h2>
			</div>
			<div className={styles.body}>
				<Swiper {...swiperOptions}>
					{reviews.map((review) => (
						<SwiperSlide className={styles.slider__slide} key={review.id}>
							<CardReview data={review} />
						</SwiperSlide>
					))}
					<SwipertNavigation />
				</Swiper>
			</div>
		</section>
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

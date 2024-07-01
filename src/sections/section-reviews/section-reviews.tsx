'use client';

import type { ReviewsData } from '@/types/Reviews';
import { Swiper, type SwiperProps, SwiperSlide, useSwiper } from 'swiper/react';
import IconArrowLeft from '@/assets/icons/arrow-left.svg';
import IconArrowRight from '@/assets/icons/arrow-right.svg';
import { CardReview } from '@/components/card-review/card-review';
import 'swiper/css';
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

export function SectionReviews({ data }: { data: ReviewsData[] }) {
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
					{data.map((item, index) => (
						<SwiperSlide key={index}>
							<CardReview data={item} />
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
				<IconArrowLeft />
			</button>
			<button className={styles.slider__button} onClick={() => swiper.slideNext()}>
				<IconArrowRight />
			</button>
		</div>
	);
}

'use client';

import { Swiper, type SwiperProps, SwiperSlide, useSwiper } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import type { Review } from '@/libs/definitions';
import { CardReview, Icon } from '@/components';
import styles from './section-reviews.module.css';

const swiperOptions: SwiperProps = {
	slidesPerView: 1,
	spaceBetween: '20rem',
	loop: true,
	speed: 500,
	autoplay: {
		delay: 10000,
		pauseOnMouseEnter: true,
	},
	modules: [Autoplay],
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
					Следующий отзыв <br />
					может быть Вашим
				</h2>
			</div>
			<div className={styles.body}>
				<Swiper className={styles.slider} {...swiperOptions}>
					{reviews.map((review, index) => (
						<SwiperSlide className={styles.slider__slide} key={review?.id || index}>
							<CardReview data={review} />
						</SwiperSlide>
					))}
					<SwiperNavigation />
				</Swiper>
			</div>
		</section>
	);
}

function SwiperNavigation() {
	const swiper = useSwiper();

	return (
		<div className={styles.slider__navbar}>
			<button className={styles.slider__button} onClick={() => swiper.slidePrev()}>
				<Icon className={styles.slider__icon} variant="ArrowLeft" />
			</button>
			<button className={styles.slider__button} onClick={() => swiper.slideNext()}>
				<Icon className={styles.slider__icon} variant="ArrowRight" />
			</button>
		</div>
	);
}

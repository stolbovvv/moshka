'use client';

import { CardAuthor } from '@/app/components/card-author/card-author';
import { Author } from '@/lib/definitions';
import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './section-experts.module.css';

export function SliderExperts({ authors }: { authors: Author[] }) {
	return (
		<Swiper
			className={styles.slider}
			slidesPerView={'auto'}
			spaceBetween={10}
			freeMode={true}
			modules={[FreeMode]}
			style={{ overflow: 'visible' }}
			breakpoints={{
				'767': {
					spaceBetween: 20,
				},
				'1280': {
					spaceBetween: 40,
				},
			}}
		>
			{authors.map((data, index) => (
				<SwiperSlide className={styles.slide} key={index}>
					<CardAuthor data={data} rotate={index % 2 ? 'left' : 'right'} />
				</SwiperSlide>
			))}
		</Swiper>
	);
}

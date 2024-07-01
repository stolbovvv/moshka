import type { ResourceData } from '@/types/Resource';
import type { ReviewsData } from '@/types/Reviews';
import { SectionBanner } from '@/sections/section-banner/section-banner';
import { SectionHistory } from '@/sections/section-history/section-history';
import { SectionInfo } from '@/sections/section-info/section-info';
import { SectionPayment } from '@/sections/section-payment/section-payment';
import { SectionProfit } from '@/sections/section-profit/section-profit';
import { SectionResources } from '@/sections/section-resources/section-resources';
import { SectionGallery } from '@/sections/section-gallery/section-gallery';
import { SectionHero } from '@/sections/section-hero/section-hero';
import { SectionReviews } from '@/sections/section-reviews/section-reviews';

async function getResources(): Promise<ResourceData[]> {
	const response = await fetch('http:/localhost:3030/resources', {
		cache: 'no-cache',
	});

	return await response.json();
}

async function getReviews(): Promise<ReviewsData[]> {
	const response = await fetch('http:/localhost:3030/resources', {
		cache: 'no-cache',
	});

	return await response.json();
}

export default async function Home() {
	const [resourcesData, reviewsData] = await Promise.all([getResources(), getReviews()]);

	return (
		<main>
			<SectionHero />
			<SectionInfo />
			<SectionHistory />
			<SectionBanner />
			<SectionResources data={resourcesData} />
			<SectionProfit />
			<SectionPayment />
			<SectionGallery />
			<SectionReviews data={reviewsData} />
		</main>
	);
}

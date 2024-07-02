import type { ResourceData } from '@/types/Resource';
import type { ReviewsData } from '@/types/Reviews';
import type { FaqData } from '@/types/Faq';
import { SectionBanner } from '@/sections/section-banner/section-banner';
import { SectionHistory } from '@/sections/section-history/section-history';
import { SectionInfo } from '@/sections/section-info/section-info';
import { SectionPayment } from '@/sections/section-payment/section-payment';
import { SectionProfit } from '@/sections/section-profit/section-profit';
import { SectionResources } from '@/sections/section-resources/section-resources';
import { SectionGallery } from '@/sections/section-gallery/section-gallery';
import { SectionHero } from '@/sections/section-hero/section-hero';
import { SectionReviews } from '@/sections/section-reviews/section-reviews';
import { SectionFaq } from '@/sections/section-faq/section-faq';
import { SectionForWhom } from '@/sections/section-for-whom/section-for-whom';

async function getResources(): Promise<ResourceData[]> {
	try {
		const response = await fetch('http:/localhost:3030/resources', {
			cache: 'no-cache',
		});

		return await response.json();
	} catch (error) {
		return [];
	}
}

async function getReviews(): Promise<ReviewsData[]> {
	try {
		const response = await fetch('http:/localhost:3030/reviews', {
			cache: 'no-cache',
		});

		return await response.json();
	} catch (error) {
		return [];
	}
}

async function getFaq(): Promise<FaqData[]> {
	try {
		const response = await fetch('http:/localhost:3030/faq', {
			cache: 'no-cache',
		});
		return await response.json();
	} catch {
		return [];
	}
}

export default async function Home() {
	const [resourcesData, reviewsData, faqData] = await Promise.all([getResources(), getReviews(), getFaq()]);

	return (
		<main>
			<SectionHero />
			<SectionInfo />
			<SectionHistory />
			<SectionForWhom />
			<SectionBanner />
			<SectionResources data={resourcesData} />
			<SectionProfit />
			<SectionPayment />
			<SectionGallery />
			<SectionReviews data={reviewsData} />
			<SectionFaq data={faqData} />
		</main>
	);
}

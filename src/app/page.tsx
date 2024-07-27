import { fetchFaqs, fetchResources, fetchReviews } from '@/lib/data';
import { SectionBanner } from '@/app/sections/section-banner/section-banner';
import { SectionHistory } from '@/app/sections/section-history/section-history';
import { SectionInfo } from '@/app/sections/section-info/section-info';
import { SectionPayment } from '@/app/sections/section-payment/section-payment';
import { SectionProfit } from '@/app/sections/section-profit/section-profit';
import { SectionResources } from '@/app/sections/section-resources/section-resources';
import { SectionGallery } from '@/app/sections/section-gallery/section-gallery';
import { SectionHero } from '@/app/sections/section-hero/section-hero';
import { SectionReviews } from '@/app/sections/section-reviews/section-reviews';
import { SectionFaq } from '@/app/sections/section-faq/section-faq';
import { SectionForWhom } from '@/app/sections/section-for-whom/section-for-whom';
import { PopupOut } from '@/app/components/popup-out/popup-out';
import { SectionExperts } from './sections/section-experts/section-experts';

export default async function Home() {
	const resources = await fetchResources();
	const reviews = await fetchReviews();
	const faqs = await fetchFaqs();

	return (
		<main>
			<SectionHero />
			<SectionInfo />
			<SectionHistory />
			<SectionBanner />
			<SectionForWhom />
			{resources && <SectionResources resources={resources} />}
			<SectionGallery />
			<SectionProfit />
			<SectionPayment />
			<SectionExperts />
			{reviews && <SectionReviews reviews={reviews} />}
			{faqs && <SectionFaq faqs={faqs} />}
			<PopupOut />
		</main>
	);
}

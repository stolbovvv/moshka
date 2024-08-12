import { fetchFaqs, fetchResources, fetchReviews } from '@/lib/data';
import { SectionBanner } from '@/app/_sections/section-banner/section-banner';
import { SectionHistory } from '@/app/_sections/section-history/section-history';
import { SectionInfo } from '@/app/_sections/section-info/section-info';
import { SectionPayment } from '@/app/_sections/section-payment/section-payment';
import { SectionProfitPodpiska365 } from '../_sections/section-profit/section-profit-podpiska365';
import { SectionResources } from '@/app/_sections/section-resources/section-resources';
import { SectionGallery } from '@/app/_sections/section-gallery/section-gallery';
import { SectionHero } from '@/app/_sections/section-hero/section-hero';
import { SectionReviews } from '@/app/_sections/section-reviews/section-reviews';
import { SectionFaq } from '@/app/_sections/section-faq/section-faq';
import { SectionForWhom } from '@/app/_sections/section-for-whom/section-for-whom';
import { PopupOut } from '@/app/_components/popup-out/popup-out';
import { SectionExperts } from '@/app/_sections/section-experts/section-experts';

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
			<SectionExperts />
			<SectionGallery />
			<SectionProfitPodpiska365 />
			<SectionPayment />
			{reviews && <SectionReviews reviews={reviews} />}
			{faqs && <SectionFaq faqs={faqs} />}
			<PopupOut />
		</main>
	);
}

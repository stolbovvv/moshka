import { fetchAuthors, fetchFaqs, fetchResources, fetchReviews } from '@/libs/data';
import {
	SectionBanner,
	SectionExperts,
	SectionFaq,
	SectionFeedback,
	SectionForWhom,
	SectionGallery,
	SectionHero,
	SectionHistoryHome,
	SectionInfo,
	SectionPayment,
	SectionProfit,
	SectionResources,
	SectionReviews,
} from '@/layouts';

export default async function Home() {
	const resource = await fetchResources();
	const authors = await fetchAuthors();
	const reviews = await fetchReviews();
	const faqs = await fetchFaqs();

	return (
		<main>
			<SectionHero />
			<SectionInfo />
			<SectionHistoryHome />
			<SectionBanner />
			{resource && <SectionResources resources={resource} />}
			<SectionForWhom />
			{authors && <SectionExperts authors={authors} />}
			<SectionGallery />
			<SectionProfit />
			<SectionPayment />
			{reviews && <SectionReviews reviews={reviews} />}
			{faqs && <SectionFaq faqs={faqs} />}
			<SectionFeedback />
		</main>
	);
}

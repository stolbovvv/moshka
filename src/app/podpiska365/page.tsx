import { fetchAuthors, fetchFaqs, fetchResources, fetchReviews } from '@/libs/data';
import {
	SectionBanner,
	SectionExperts,
	SectionFaq,
	SectionForWhom,
	SectionGallery,
	SectionHero,
	SectionHistory,
	SectionInfo,
	SectionPayment,
	SectionProfitPodpiska365,
	SectionResources,
	SectionReviews,
} from '@/layouts';

export default async function Podpiska365() {
	const resources = await fetchResources();
	const authors = await fetchAuthors();
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
			{authors && <SectionExperts authors={authors} />}
			<SectionGallery />
			<SectionProfitPodpiska365 />
			<SectionPayment />
			{reviews && <SectionReviews reviews={reviews} />}
			{faqs && <SectionFaq faqs={faqs} />}
		</main>
	);
}

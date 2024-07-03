import { Faq, Resource, Review } from './definitions';

export async function fetchResources(): Promise<Resource[] | undefined> {
	try {
		const data = await fetch(`${process.env.API_HOST}/resources`, {
			next: { revalidate: 300 },
		});

		return await data.json();
	} catch (error) {
		console.error(`ERROR: Failed to fetch resource data. ${error}`);
	}
}

export async function fetchReviews(): Promise<Review[] | undefined> {
	try {
		const data = await fetch(`${process.env.API_HOST}/reviews`, {
			next: { revalidate: 300 },
		});

		return await data.json();
	} catch (error) {
		console.error(`ERROR: Failed to fetch reviews data. ${error}`);
	}
}

export async function fetchFaqs(): Promise<Faq[] | undefined> {
	try {
		const data = await fetch(`${process.env.API_HOST}/faq`, {
			next: { revalidate: 300 },
		});

		return await data.json();
	} catch (error) {
		console.error(`ERROR: Failed to fetch FAQ data. ${error}`);
	}
}

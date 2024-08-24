import { Author, Faq, Resource, Review } from './definitions';

export async function fetchResources(): Promise<Resource[] | undefined> {
	try {
		const data = await fetch(`${process.env.API_HOST}/resources`, {
			next: { revalidate: 300 },
		});

		return await data.json();
	} catch (error) {
		return;
	}
}

export async function fetchReviews(): Promise<Review[] | undefined> {
	try {
		const data = await fetch(`${process.env.API_HOST}/reviews`, {
			next: { revalidate: 300 },
		});

		return await data.json();
	} catch (error) {
		return;
	}
}

export async function fetchAuthors(): Promise<Author[] | undefined> {
	try {
		const data = await fetch(`https://api-moshka.ru/authors`, {
			next: { revalidate: 300 },
		});

		return await data.json();
	} catch (error) {
		return;
	}
}

export async function fetchFaqs(): Promise<Faq[] | undefined> {
	try {
		const data = await fetch(`${process.env.API_HOST}/faq`, {
			next: { revalidate: 300 },
		});

		return await data.json();
	} catch (error) {
		return;
	}
}

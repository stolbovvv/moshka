export type Resource = {
	id: string;
	thumb: string;
	title: string;
	author: {
		name: string;
		photo: string;
		role: string;
		text: string;
	};
	duration: string;
	complexity: string;
	tags: string[];
	price: string;
	category: string;
	description: string;
	properties: string[];
	program: { count: string; title: string }[];
	posters: string[];
	categoryId: string;
	categoryName: string;
};

export type Review = {
	id: string;
	name: string;
	info: string;
	photo: string;
	content: string;
};

export type Faq = {
	id: string;
	question: string;
	answer: string;
	categoryId: string;
	categoryName: string;
};

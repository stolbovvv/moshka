export type Resource = {
	id: string;
	thumb: string;
	title: string;
	author: string;
	duration: string;
	complexity: string;
	tags: string[];
	price: string;
	category: ResourceCategory;
};

export type ResourceCategory = {
	id: string;
	name: string;
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
	category: FaqCategory;
};

export type FaqCategory = {
	id: string;
	name: string;
};

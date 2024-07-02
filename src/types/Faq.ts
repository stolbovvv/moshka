export interface FaqData {
	id: string;
	name: string;
	faqs: FaqItem[];
}

export interface FaqItem {
	id: string;
	title: string;
	content: string;
}

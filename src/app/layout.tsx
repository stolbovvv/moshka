import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import 'sanitize.css';
import 'swiper/css';
import '@/assets/styles/global.css';
import '@/assets/styles/layout.css';
import '@/assets/styles/helper.css';
import { Calltouch, YandexMetrika } from '@/analytics';
import { sffont, unbounded } from '@/assets/fonts';
import { PageFooter, PageHeader, PopupFrame, PopupLeave, PopupResource } from '@/layouts';
import Script from 'next/script';

export const metadata: Metadata = {
	title: 'MOSHKA',
	description: 'Международная онлайн школа контента.',
	manifest: '/site.webmanifest',
	icons: [
		{
			rel: 'apple-touch-icon',
			url: '/apple-touch-icon.png',
			sizes: '180x180',
		},
		{
			rel: 'icon',
			url: '/favicon-32x32.png',
			sizes: '32x32',
			type: 'image/png',
		},
		{
			rel: 'icon',
			url: '/favicon-16x16.png',
			sizes: '16x16',
			type: 'image/png',
		},
	],
	formatDetection: {
		telephone: false,
	},
	openGraph: {
		siteName: 'MOSHKA',
		url: 'https://moshka.ru/',
		title: 'MOSHKA | Международная онлайн-школа контента',
		description: `Курсы по созданию и продвижению цифрового контента, работа с нейросетями, сценарное мастерство, режиссура. Учитесь у экспертов и развивайте навыки создания качественного контента в онлайн школе MOSHKA`,
		type: 'website',
		images: 'https://static.tildacdn.com/tild3838-3434-4438-a639-336161636437/_3_.svg',
	},
};

const jsonLdOrganization = {
	'@context': 'http://schema.org',
	'@type': 'Organization',
	name: 'MOSHKA | Международная онлайн-школа контента',
	url: 'https://moshka.ru/',
	logo: 'https://static.tildacdn.com/tild3838-3434-4438-a639-336161636437/_3_.svg',
	sameAs: ['https://vk.com/moshka_ed', 'https://t.me/+FpT2KAqnp4k2ZDAy', 'https://www.youtube.com/@MOSHKAed'],
};

const jsonLdWebSite = {
	'@context': 'http://schema.org',
	'@type': 'WebSite',
	name: 'MOSHKA | Международная онлайн-школа контента',
	url: 'https://moshka.ru/',
};

const jsonLdCourseList = {
	'@context': 'https://schema.org',
	'@type': 'ItemList',
	itemListElement: [
		{
			'@type': 'Course',
			name: 'Блог по сценариям Netflix и Pixar',
			description: 'Изучите, как создавать успешные сценарии по моделям Netflix и Pixar.',
			provider: {
				'@type': 'Organization',
				name: 'MOSHKA | Международная онлайн-школа контента',
				sameAs: 'https://moshka.ru/',
			},
		},
		{
			'@type': 'Course',
			name: 'Мобильная видеосъёмка',
			description: 'Освойте технику съёмки и монтажа видео с использованием мобильных устройств.',
			provider: {
				'@type': 'Organization',
				name: 'MOSHKA | Международная онлайн-школа контента',
				sameAs: 'https://moshka.ru/',
			},
		},
		{
			'@type': 'Course',
			name: 'Нейросети: создание мультимедийного контента',
			description: 'Узнайте, как использовать нейросети для создания уникального мультимедийного контента.',
			provider: {
				'@type': 'Organization',
				name: 'MOSHKA | Международная онлайн-школа контента',
				sameAs: 'https://moshka.ru/',
			},
		},
		{
			'@type': 'Course',
			name: 'Визуальные эффекты: путь к профессии',
			description: 'Изучите основы создания визуальных эффектов и начните свой путь к профессии.',
			provider: {
				'@type': 'Organization',
				name: 'MOSHKA | Международная онлайн-школа контента',
				sameAs: 'https://moshka.ru/',
			},
		},
		{
			'@type': 'Course',
			name: 'Драматургия: пилот современного сериала',
			description: 'Освойте создание пилота для современного сериала с акцентом на драматургию.',
			provider: {
				'@type': 'Organization',
				name: 'MOSHKA | Международная онлайн-школа контента',
				sameAs: 'https://moshka.ru/',
			},
		},
		{
			'@type': 'Course',
			name: 'Автор нашего времени',
			description: 'Познакомьтесь с современными методами писательства и выразите свои идеи.',
			provider: {
				'@type': 'Organization',
				name: 'MOSHKA | Международная онлайн-школа контента',
				sameAs: 'https://moshka.ru/',
			},
		},
		{
			'@type': 'Course',
			name: 'Кинорежиссура',
			description: 'Освойте искусство кинорежиссуры и научитесь управлять процессом создания фильма.',
			provider: {
				'@type': 'Organization',
				name: 'MOSHKA | Международная онлайн-школа контента',
				sameAs: 'https://moshka.ru/',
			},
		},
		{
			'@type': 'Course',
			name: 'Художник кино',
			description: 'Изучите основы работы художника в кино и развивайте свой визуальный стиль.',
			provider: {
				'@type': 'Organization',
				name: 'MOSHKA | Международная онлайн-школа контента',
				sameAs: 'https://moshka.ru/',
			},
		},
		{
			'@type': 'Course',
			name: 'Режиссерская разработка: Основы взаимодействия со зрителем',
			description: 'Научитесь создавать эмоциональные и запоминающиеся сцены для зрителя.',
			provider: {
				'@type': 'Organization',
				name: 'MOSHKA | Международная онлайн-школа контента',
				sameAs: 'https://moshka.ru/',
			},
		},
		{
			'@type': 'Course',
			name: 'Визуальное повествование',
			description: 'Освойте технику создания визуальных историй, которые захватывают внимание зрителя.',
			provider: {
				'@type': 'Organization',
				name: 'MOSHKA | Международная онлайн-школа контента',
				sameAs: 'https://moshka.ru/',
			},
		},
	],
};

const jsonLdFAQPage = {
	'@context': 'http://schema.org',
	'@type': 'FAQPage',
	mainEntity: [
		{
			'@type': 'Question',
			name: 'Какие курсы входят в годовую подписку?',
			acceptedAnswer: {
				'@type': 'Answer',
				text: '10 курсов сейчас, и все ежемесячные обновления материалов и курсов в течение периода подписки за 8900 рублей в год!',
			},
		},
		{
			'@type': 'Question',
			name: 'Кто меня будет учить?',
			acceptedAnswer: {
				'@type': 'Answer',
				text: 'Создатели киноблокбастеров российских и мировых. Ведущие эксперты в создании контента. Это практики, которые ежедневно создают успешные проекты, знают все нюансы и готовы делиться проверенными методиками. Присоединяйтесь и учитесь у лучших, чтобы быстро и эффективно достигать своих целей!',
			},
		},
		{
			'@type': 'Question',
			name: 'Должен ли у меня быть блог, чтобы начать учиться?',
			acceptedAnswer: {
				'@type': 'Answer',
				text: 'Необязательно. Если у вас уже есть блог, вы сможете использовать его для выполнения практических заданий. Если вы пока не создали блог, вы сможете начать с нуля. А ещё можно потренироваться на блоге вашего знакомого, который хотел бы увеличить охваты или аудиторию.',
			},
		},
		{
			'@type': 'Question',
			name: 'Как можно оплатить?',
			acceptedAnswer: {
				'@type': 'Answer',
				text: 'Вы можете оплатить всю сумму сразу любой картой любого банка или выбрать оплату в рассрочку. Для удобства мы предлагаем несколько вариантов рассрочки: Оплата в течение 3, 6 или 12 месяцев равными платежами. Выберите наиболее удобный для вас формат оплаты.',
			},
		},
		{
			'@type': 'Question',
			name: 'Если не понравится, смогу ли я вернуть деньги?',
			acceptedAnswer: {
				'@type': 'Answer',
				text: 'Никаких рисков для тебя — в течение 14 дней после подписки ты можешь отменить её без объяснения причин, и мы вернём тебе 100% суммы.',
			},
		},
		{
			'@type': 'Question',
			name: 'Получу ли я документ после прохождения курсов?',
			acceptedAnswer: {
				'@type': 'Answer',
				text: 'Да, мы выдаем сертификаты о прохождении курсов и других материалов из подписки в электронном виде.',
			},
		},
	],
};

const navigation = [
	{ href: '/#section-for-whom', text: 'Для кого' },
	{ href: '/#section-banner', text: 'О проекте' },
	{ href: '/#section-resources', text: 'Курсы' },
	{ href: '/#section-profit', text: 'Цена' },
	{ href: '/#section-reviews', text: 'Отзывы' },
	{ href: '/#section-faq', text: 'FAQ' },
];

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
	return (
		<html lang="ru" className={unbounded.variable}>
			<body className={sffont.className}>
				<div className="wrapper">
					<PageHeader navigation={navigation} />
					{children}
					<PageFooter navigation={navigation} />
				</div>

				<PopupFrame />
				<PopupLeave />
				<PopupResource />

				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdCourseList) }}
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQPage) }}
				/>

				<YandexMetrika />
				<Calltouch />

				<Script id="brand-log">
					{`console.log('%cGOWEB.PRO\n' + '%cХочешь такой же сайт?' + '%c\n\nПиши в telegram: @goweb_pro\nНаш сайт: https://goweb.pro','font-size: 37px; font-weight: 900; color: rgb(90, 205, 211);','font-size: 14px; background: rgb(90, 205, 211); padding: 5px 10px; color: rgb(255, 255, 255);','line-height: 1.5; background: none;',);`}
				</Script>
			</body>
		</html>
	);
}

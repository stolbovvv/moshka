'use client';

import { useEffect } from 'react';

const googleAnalyticsScript = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-VKRF31XBBW');
`;

export function GoogleAnalytics() {
	useEffect(() => {
		// Добавляем внешний скрипт Google Tag Manager
		const scriptTag = document.createElement('script');
		scriptTag.src = 'https://www.googletagmanager.com/gtag/js?id=G-VKRF31XBBW';
		scriptTag.async = true;
		document.head.appendChild(scriptTag);

		// Добавляем сам код Google Analytics
		const scriptContainer = document.querySelector('#google-analytics');
		if (scriptContainer) {
			scriptContainer.innerHTML = googleAnalyticsScript;
		}
	}, []);

	return (
		<>
			<script id="google-analytics" />
		</>
	);
}

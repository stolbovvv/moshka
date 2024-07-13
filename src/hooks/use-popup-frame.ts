'use client';

import { useEffect, useState } from 'react';

export function usePopupFrame() {
	const [isPopupFrameOpen, setIsPopupFrameOpen] = useState<boolean>(false);

	useEffect(() => {
		if (isPopupFrameOpen) {
			// Динамическая загрузка скрипта
			const script = document.createElement('script');
			script.id = 'a1abb1e73b7c7212eb5f5f5f94853f73271f97a8';
			script.src = 'https://lk.moshka.ru/pl/lite/widget/script?id=1223744';
			script.async = true;
			document.body.appendChild(script);

			script.onload = () => {
				// Создание контейнера с нужными стилями
				const container = document.createElement('div');
				container.style.position = 'fixed';
				container.style.width = '100%';
				container.style.height = '100%';
				container.style.top = '0';
				container.style.left = '0';
				container.style.backdropFilter = 'blur(20px)';
				container.style.background = 'rgba(217, 217, 217, 0.01)';
				container.style.display = 'flex';
				container.style.justifyContent = 'center';
				container.style.alignItems = 'center';
				container.style.zIndex = '1001';

				// Создание кнопки закрытия
				const closeButton = document.createElement('button');
				closeButton.textContent = '✖'; // Крестик
				closeButton.style.position = 'absolute';
				closeButton.style.top = '20px';
				closeButton.style.right = '20px';
				closeButton.style.background = 'none';
				closeButton.style.border = 'none';
				closeButton.style.fontSize = '34px';
				closeButton.style.cursor = 'pointer';
				closeButton.style.color = '#fff';
				closeButton.onclick = () => setIsPopupFrameOpen(false);

				// Создание iframe и добавление его в контейнер
				const iframe = document.createElement('iframe');
				iframe.src = 'https://lk.moshka.ru/pl/lite/widget/widget?id=1223744';
				iframe.allowFullscreen = true;
				iframe.style.width = '100%';
				iframe.style.maxWidth = '900px';
				iframe.style.height = '604px';
				iframe.style.border = 'none';
				iframe.style.overflow = 'hidden';
				iframe.style.borderRadius = '1.875rem';

				container.appendChild(closeButton);
				container.appendChild(iframe);

				// Добавление контейнера в тело документа
				const popupBody = document.querySelector(`.popap-frame`);
				if (popupBody) {
					popupBody.appendChild(container);
				}
			};

			return () => {
				// Удаляем скрипт и содержимое попапа, чтобы предотвратить утечки памяти и конфликты
				const scriptElement = document.getElementById('a1abb1e73b7c7212eb5f5f5f94853f73271f97a8');
				if (scriptElement) {
					document.body.removeChild(scriptElement);
				}
				const popupBody = document.querySelector(`.popap-frame`);
				if (popupBody) {
					while (popupBody.firstChild) {
						popupBody.removeChild(popupBody.firstChild);
					}
				}
			};
		}
	}, [isPopupFrameOpen]);

	return { isPopupFrameOpen, setIsPopupFrameOpen };
}

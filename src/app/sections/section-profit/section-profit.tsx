'use client';

import React from 'react';
import styles from './section-profit.module.css';
import { Button } from '@/app/ui/button/button';
import { usePopupFrame } from '@/hooks/use-popup-frame';

export function SectionProfit() {
    const { isPopupFrameOpen, setIsPopupFrameOpen } = usePopupFrame();

    return (
        <section className={styles.wrap} id="section-profit">
            <div className={styles.head}>
                <h2 className={styles.heading}>Получи все курсы сразу с подпиской</h2>
            </div>
            <div className={styles.body}>
                <ul className={styles.list}>
                    <li className={styles.item}>режиссура</li>
                    <li className={styles.item}>нейросети</li>
                    <li className={styles.item}>драматургия сериалов</li>
                    <li className={styles.item}>мобильная съемка</li>
                    <li className={styles.item}>блогинг</li>
                    <li className={styles.item}>визуальные образы</li>
                    <li className={styles.item}>вдохновение</li>
                    <li className={styles.item}>сторителлинг</li>
                </ul>
                <div className={styles.price}>
                    <p className={styles.price__label}>Стоимость подписки</p>
                    <p className={styles.price__value}>18 900 ₽</p>
                </div>
                <div className={styles.price}>
                    <p className={styles.price__label}>Стоимость на условиях beta</p>
                    <p className={styles.price__value}>8900 ₽ / год</p>
                    <p className={styles.price__footnote}>выгода 53% (10 000 Р в год)</p>
                </div>
                <Button className={styles.button} theme="dark" onClick={() => setIsPopupFrameOpen(true)}>
                    Стать участником
                </Button>
                <p className={styles.text}>
                    Набор на условиях beta-доступа скоро закончится — подписывайся сейчас, чтобы получить лучшие условия и закрепить за собой самую низкую цену.
                </p>
                <p className={styles.text}>
                    Никаких рисков для тебя — в течение 14 дней после подписки ты можешь отменить её без объяснения причин, и мы вернём тебе 100% суммы.
                </p>
            </div>

            {isPopupFrameOpen && <div className="popap-frame">{/* Контейнер для iframe */}</div>}
        </section>
    );
}

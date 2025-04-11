import Link from "@/components/link/Link";
import config from '../../config/config.json'
import {ANCHOR_IDS, getAnchor} from "@/components/anchors/anchors";

const TEXTS = {
    heading: 'Полировка и выкуп\nApple Watch в Москве',
    description: 'Добро пожаловать в наш сервис, где мы предлагаем\nпрофессиональную полировку часов Apple Watch.\nТакже мы с радостью выкупаем ваши часы по выгодным условиям.'
}

function MainDescription() {
    return (
        <div className="flex flex-col justify-center">
            <h1 className="font-[Roboto] text-[40px] leading-[1.2] font-bold mb-4 whitespace-pre-wrap mb-[20px] lg:text-[56px] lg:mb-[24px]">
                {TEXTS.heading}
            </h1>
            <p className="font-[Roboto] text-[18px] leading-[1.5] whitespace-pre-wrap mb-[36px] lg:mg-[44px]">
                {TEXTS.description}
            </p>
            <div className="flex flex-row gap-[16px]">
                <Link
                    variant="primary"
                    href={getAnchor(ANCHOR_IDS.polishing)}
                >
                    Узнать больше
                </Link>
                <Link
                    variant="secondary"
                    href={config.telegramLink}
                >
                    Связаться с нами
                </Link>
            </div>
        </div>
    );
}

export {
    MainDescription
};
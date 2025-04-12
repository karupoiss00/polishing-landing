import {CubeBulletIcon} from "@/components/bullet/Bullet";

const TEXTS = {
    heading: 'Преимущества полировки\nчасов Apple Watch:\nвосстановление и защита.',
    description: 'Полировка часов Apple Watch восстанавливает их первоначальный блеск и удаляет царапины.\nМы обеспечиваем защиту поверхности, чтобы ваши часы выглядели как новые.',
    bullets: [
        'Восстановление блеска для ваших Apple Watch',
        'Удаление царапин для идеального внешнего вида',
        'Защита поверхности для долговечности покрытия ваших часов'
    ]
}

function PolishingDescription() {
    return (
        <div className="flex flex-col justify-center">
            <h3 className="font-[var(--font-roboto)] text-[32px] leading-[1.2] font-bold mb-4 whitespace-pre-wrap mb-[20px] lg:text-[40px] lg:mb-[24px]">
                {TEXTS.heading}
            </h3>
            <p className="font-[var(--font-roboto)] text-[18px] leading-[1.5] whitespace-pre-wrap mb-[36px] lg:mg-[44px]">
                {TEXTS.description}
            </p>
            <ul className="flex flex-col gap-[16px]">
                {TEXTS.bullets.map((text, i) => (
                    <li className="font-[var(--font-roboto)] text-[16px] leading-[1.5]" key={i}>
                        <span className="flex flex-row gap-[18px] lg:gap-[16px] items-center">
                            <span className="width-[12px]">
                                <CubeBulletIcon/>
                            </span>
                            {text}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export {
    PolishingDescription
};
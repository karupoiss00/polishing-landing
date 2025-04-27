import React from 'react';
import {ANCHOR_IDS} from "@/anchors/anchors";
import {Star} from "@/components/star/Star";
import config from "@/config/config.json"

const STAR_SIZE = 50
const STARS = new Array(5).fill(1)

function RatingBlock() {
    return (
        <div className="py-[300px] px-[20px] lg:py-[400px] lg:px-[64px] bg-white box-content flex flex-col gap-[50px]" id={ANCHOR_IDS.reviews}>
            <div className="flex flex-col  gap-[20px] justify-center items-center">
                <h2 className="text-[32px] md:text-[40px] leading-[1.2] font-bold text-gray-900 text-center">
                    Рейтинг от наших клиентов
                </h2>
                <div className="text-amber-300 flex row">
                    {STARS.map((_, i) =>  <Star className={`w-[50px] h-[50px]`} key={i}/>)}
                </div>
            </div>
            <div className="flex flex-row justify-center text-[24px] md:text-[28px] leading-[1.2] text-gray-900 items-center text-center">
                <span>Читайте отзывы в <a
                    className="underline"
                    href={config.avitoProfile}
                    target="_blank"
                >профиле Авито</a></span>
            </div>
        </div>
    );
}

export {
    RatingBlock
};
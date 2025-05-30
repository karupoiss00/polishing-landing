import React from 'react';
import {DualLayoutSection} from "@/components/dualSection/DualSection";
import {ANCHOR_IDS} from "@/anchors/anchors";
import {ContactLink} from "@/components/contactLink/ContactLink";

function LetOrderBlock() {
    return (
        <DualLayoutSection id={ANCHOR_IDS.ransom}>
            <div className="md:flex-1 space-y-3">
                <h3 className="text-[32px] md:text-[40px] leading-[1.2] font-bold text-gray-900">
                    Полировка и выкуп Apple Watch
                </h3>
                <p className="text-gray-600 md:pr-8">
                    Вернём вашим часам первозданный вид и предложим лучшую цену на рынке
                </p>
            </div>

            <div className="self-center">
                <ContactLink text="Напишите нам"/>
            </div>
        </DualLayoutSection>
    );
}

export {
    LetOrderBlock
}
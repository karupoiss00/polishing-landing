import React from 'react';
import {DualLayoutSection} from "@/components/dualSection/DualSection";
import Image from "next/image";
import mainImage from '../../../public/mainImage.jpg'
import {PolishingDescription} from "@/blocks/aboutPolishingBlock/polishingDescription/PolishingDescription";
import {ANCHOR_IDS} from "@/anchors/anchors";

function AboutPolishing() {
    return (
        <DualLayoutSection id={ANCHOR_IDS.polishing}>
            <PolishingDescription />
            <div className="flex justify-end flex-grow">
                <div className="fmax-w-[335px] relative lg:max-w-[620px]">
                    <Image
                        src={mainImage}
                        alt="результат полировки"
                        width={960}
                        height={960}
                        style={{
                            objectFit: 'contain',
                            width: '100%',
                            position: 'relative',
                            height: 'unset',
                        }}
                    />
                </div>
            </div>
        </DualLayoutSection>
    );
}

export {
    AboutPolishing
}
import React from 'react';
import {DualLayoutSection} from "@/components/dualSection/DualSection";
import {MainDescription} from "@/components/mainDescription/MainDescription";
import Image from "next/image";
import mainImage from '../../public/mainImage.jpg'

function MainBlock() {
    return (
        <DualLayoutSection>
            <MainDescription />
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
    MainBlock
}
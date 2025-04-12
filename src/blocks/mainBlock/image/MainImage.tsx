import React from 'react';
import Image from "next/image";
import mainImage from "../../../../public/mainImage.jpg";
import {AdaptiveImageContainer} from "@/components/adaptiveImageContainer/AdaptiveImageContainer";

function MainImage() {
    return (
        <div className="flex justify-center  flex-grow lg:justify-end">
            <AdaptiveImageContainer>
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
            </AdaptiveImageContainer>
        </div>
    );
}

export {
    MainImage
}
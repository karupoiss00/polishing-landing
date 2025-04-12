import React, {PropsWithChildren} from 'react';
import Image from "next/image";
import polishBefore from "../../../../public/polishBefore.jpg";
import polishAfter from "../../../../public/polishAfter.jpg";
import {Carousel} from "@/components/carousel/Carousel";
import {AdaptiveImageContainer} from "@/components/adaptiveImageContainer/AdaptiveImageContainer";

function ImageSlider() {
    return (
        <div className="flex justify-center flex-grow lg:justify-end">
            <AdaptiveImageContainer>
                <Carousel>
                    <AdaptiveImageContainer>
                        <Image
                            src={polishBefore}
                            alt="до полировки"
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
                    <AdaptiveImageContainer>
                        <Image
                            src={polishAfter}
                            alt="после полировки"
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
                </Carousel>
            </AdaptiveImageContainer>
        </div>
    );
}


export {
    ImageSlider
}
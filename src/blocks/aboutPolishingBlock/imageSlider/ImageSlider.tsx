import Image from "next/image";
import polishBefore1 from "../../../../public/polishBefore1.jpg";
import polishAfter1 from "../../../../public/polishAfter1.jpg";
import polishBefore2 from "../../../../public/polishBefore2.jpg";
import polishAfter2 from "../../../../public/polishAfter2.jpg";
import polishBefore3 from "../../../../public/polishBefore3.jpg";
import polishAfter3 from "../../../../public/polishAfter3.jpg";
import {Carousel} from "@/components/carousel/Carousel";
import {AdaptiveImageContainer} from "@/components/adaptiveImageContainer/AdaptiveImageContainer";

function ImageSlider() {
    return (
        <div className="flex justify-center flex-grow lg:justify-end">
            <AdaptiveImageContainer>
                <Carousel>
                    <AdaptiveImageContainer>
                        <Image
                            src={polishBefore1}
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
                            src={polishAfter1}
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
                    <AdaptiveImageContainer>
                        <Image
                            src={polishBefore2}
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
                            src={polishAfter2}
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
                    <AdaptiveImageContainer>
                        <Image
                            src={polishBefore3}
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
                            src={polishAfter3}
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
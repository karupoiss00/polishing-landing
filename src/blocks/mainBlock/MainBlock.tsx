import React from 'react';
import {DualLayoutSection} from "@/components/dualSection/DualSection";
import {MainDescription} from "@/blocks/mainBlock/description/MainDescription";
import {MainImage} from "@/blocks/mainBlock/image/MainImage";

function MainBlock() {
    return (
        <DualLayoutSection className="lg:h-[calc(100vh-224px)]">
            <MainDescription />
            <MainImage/>
        </DualLayoutSection>
    );
}

export {
    MainBlock
}
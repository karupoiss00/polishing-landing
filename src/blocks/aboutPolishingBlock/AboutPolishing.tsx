'use client'

import React from 'react';
import {DualLayoutSection} from "@/components/dualSection/DualSection";
import {PolishingDescription} from "@/blocks/aboutPolishingBlock/polishingDescription/PolishingDescription";
import {ANCHOR_IDS} from "@/anchors/anchors";
import {ImageSlider} from "@/blocks/aboutPolishingBlock/imageSlider/ImageSlider";

function AboutPolishing() {
    return (
        <DualLayoutSection id={ANCHOR_IDS.polishing}>
            <PolishingDescription />
            <ImageSlider/>
        </DualLayoutSection>
    );
}

export {
    AboutPolishing
}
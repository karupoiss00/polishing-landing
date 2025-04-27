'use client'

import NextLink from "next/link";
import {ANCHOR_IDS, getAnchor} from "@/anchors/anchors";
import {ContactLink} from "@/components/contactLink/ContactLink";
import {CompanyName} from "@/components/companyName/CompanyName";


function Header() {

    const navigation = [
        { name: 'Главная', href: getAnchor(ANCHOR_IDS.main) },
        { name: 'Полировка', href: getAnchor(ANCHOR_IDS.polishing) },
        { name: 'Выкуп', href: getAnchor(ANCHOR_IDS.ransom) },
        // { name: 'О нас', href: getAnchor(ANCHOR_IDS.about) },
        { name: 'Отзывы', href: getAnchor(ANCHOR_IDS.reviews) },
    ]

    return (
        <header className="bg-white fixed w-full top-0 z-50">
            <nav className="max-w-full mx-auto px-[20px] sm:px-6 lg:px-8">
                <div className="flex items-center h-[72px] gap-[50px]">
                    <CompanyName />

                    <div className="hidden md:flex space-x-[56px] ms-auto">
                        {navigation.map((item) => (
                            <NextLink
                                key={item.name}
                                href={item.href}
                                className="text-(--text-color) hover:text-(--text-hover-color) transition-colors duration-200 font-[Roboto] text-[16px]"
                            >
                                {item.name}
                            </NextLink>
                        ))}
                    </div>

                    <div className="hidden md:block ms-[112px]">
                       <ContactLink/>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export  {
    Header
};
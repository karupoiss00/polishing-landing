'use client'

import Image from "next/image";
import Link from "@/components/link/Link";
import NextLink from "next/link";
import config from '../../config/config.json';
import {ANCHOR_IDS, getAnchor} from "@/components/anchors/anchors";
import logo from '../../../public/logo.png'

const LOGO_SIZE = 48

function Header() {

    const navigation = [
        { name: 'Главная страница', href: getAnchor(ANCHOR_IDS.main) },
        { name: 'Полировка', href: getAnchor(ANCHOR_IDS.polishing) },
        { name: 'Выкуп', href: getAnchor(ANCHOR_IDS.ransom) },
        { name: 'О нас', href: getAnchor(ANCHOR_IDS.about) },
        { name: 'Отзывы', href: getAnchor(ANCHOR_IDS.reviews) },
    ]

    return (
        <header className="bg-white fixed w-full top-0 z-50">
            <nav className="max-w-full mx-auto px-[20px] sm:px-6 lg:px-8">
                <div className="flex items-center h-[72px]">
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
                        <Link
                            variant="primary"
                            href={config.telegramLink}
                         >
                            Связаться с нами
                        </Link>
                    </div>

                </div>
            </nav>
        </header>
    )
}

function CompanyName() {
    return (
        <div className="flex flex-shrink-0 flex-row items-center gap-[20px] select-none cursor-pointer">
            <NextLink href="/">
                <Image
                    src={logo}
                    alt="logo"
                    width={LOGO_SIZE}
                    height={LOGO_SIZE}
                />
            </NextLink>
            <NextLink
                href="/"
                className="text-(--text-color) hover:text-(--text-hover-color) transition-colors duration-200 text-2xl font-[Roboto]"
            >
                {config.companyName}
            </NextLink>
        </div>
    )
}

export  {
    Header
};
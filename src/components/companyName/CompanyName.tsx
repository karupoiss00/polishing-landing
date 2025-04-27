import NextLink from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.png";
import config from "@/config/config.json";

const LOGO_SIZE = 48

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

export {
    CompanyName
}
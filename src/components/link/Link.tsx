import React from "react";
import NextLink from 'next/link'

type LinkProps = {
    variant?: "primary" | "secondary";
    children: React.ReactNode;
    href: string,
};

const Link = ({ variant = "primary", children, href }: LinkProps) => {
    const baseClasses =
        "border-none cursor-pointer font-[Roboto] text-base px-6 py-3 transition-all duration-300 ease-in-out outline-solid";

    const variantClasses = variant === "primary"
        ? "bg-(--primary-color) text-white border-transparent hover:bg-white hover:outline-2 hover:outline-black-600 hover:text-black hover:-translate-y-1"
        : "bg-transparent text-black-600 outline-2 border-black-600 hover:bg-black-50 hover:-translate-y-1";

    return (
        <NextLink
            className={`${baseClasses} ${variantClasses}`}
            href={href}
        >
            {children}
        </NextLink>
    );
};

export default Link;
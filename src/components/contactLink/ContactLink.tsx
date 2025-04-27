import React from 'react';
import Link from "@/components/link/Link";
import config from "@/config/config.json";

function ContactLink({
     text = 'Связаться с нами'
}: {
    text?: string,
}) {
    return (
        <Link
            variant="primary"
            href={config.telegramLink}
        >
            {text}
        </Link>
    );
}

export {
    ContactLink
}
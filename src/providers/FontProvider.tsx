import { Roboto } from 'next/font/google'
import {PropsWithChildren} from "react";

const roboto = Roboto({
    weight: ['400', '700'],
    subsets: ['latin'],
    display: 'swap',
})
function FontProvider({ children }: PropsWithChildren) {
    return (
        <div className={roboto.className}>
            {children}
        </div>
    )
}

export {
    FontProvider
}
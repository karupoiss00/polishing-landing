import {PropsWithChildren} from "react";

type DualSectionProps = PropsWithChildren & {
    className?: string,
    id?: string,
}

function DualLayoutSection({className, children, id}: DualSectionProps) {
    return (
        <section className={`${className ?? ''} py-[64px] px-[20px] lg:py-[112px] lg:px-[64px] bg-white box-content`} id={id}>
            <div className="mx-auto flex flex-col gap-[60px] lg:flex-row lg:gap-[80px]">
                {children}
            </div>
        </section>
    );
};

export {
    DualLayoutSection
}
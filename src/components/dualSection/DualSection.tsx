import {PropsWithChildren} from "react";

type DualSectionProps = PropsWithChildren & {
    id?: string,
}

function DualLayoutSection({children, id}: DualSectionProps) {
    return (
        <section className="h-[100vh] py-[64px] px-[20px] lg:py-[112px] lg:px-[64px] bg-white" id={id}>
            <div className="mx-auto flex flex-col gap-[60px] lg:flex-row lg:gap-[80px]">
                {children}
            </div>
        </section>
    );
};

export {
    DualLayoutSection
}
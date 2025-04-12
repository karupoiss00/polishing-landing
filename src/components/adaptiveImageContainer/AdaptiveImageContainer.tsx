import React, {PropsWithChildren} from 'react';

function AdaptiveImageContainer({children}: PropsWithChildren) {
    return (
        <div className="w-[320px] sm:w-[400px] lg:w-[500px] xl:w-[600px]">
            {children}
        </div>
    )
}
export {
    AdaptiveImageContainer
}
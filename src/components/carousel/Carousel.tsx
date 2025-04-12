import React, { useState, useEffect } from 'react';

const Carousel = ({ children, delay = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const items = React.Children.toArray(children);
    const length = items.length;

    useEffect(() => {
        if (length <= 1) return;

        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % length);
        }, delay);

        return () => clearInterval(interval);
    }, [length, delay]);

    if (length === 0) return null;

    return (
        <div className="relative overflow-hidden">
            {/* Слайды */}
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {items.map((item, index) => (
                    <div key={index} className="flex-shrink-0">
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
};

export {Carousel}
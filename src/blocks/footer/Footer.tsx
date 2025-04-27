import React from 'react';
import config from '@/config/config.json'
import {CompanyName} from "@/components/companyName/CompanyName";

function Footer() {
    return (
        <footer className="w-full bg-white border-t border-gray-200">
            <div className="container mx-auto">
                <div className="py-8 flex flex-col md:flex-row items-center justify-center">
                    <p className="text-sm text-gray-500 md:order-last">
                        © {new Date().getFullYear()} {config.companyName}. Все права защищены.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export {
    Footer
}
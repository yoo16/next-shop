import React from "react";

interface BannerProps {
    title?: string;
    subtitle?: string;
}

const Banner: React.FC<BannerProps> = ({
    title = "Welcome to Next Shop!",
    subtitle = "Discover our latest collections."
}) => {
    return (
        <section className="bg-white shadow mt-4">
            <div className="container mx-auto px-4 py-6">
                <h2 className="text-2xl font-bold mb-2">{title}</h2>
                <p className="text-gray-700">{subtitle}</p>
            </div>
        </section>
    );
};

export default Banner;
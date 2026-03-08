"use client";

import React from "react";
import Image from "next/image";
import { Star, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MOCK_HOTELS } from "@/lib/mock-data";

interface HotelCardProps {
    id: string;
    name: string;
    location: string;
    price: number;
    rating: number;
    image: string;
    reviews: number;
}

export const HotelCard = ({ name, location, price, rating, image, reviews }: HotelCardProps) => {
    return (
        <Card className="overflow-hidden group border-none bg-white">
            {/* Image Container */}
            <div className="relative h-64 w-full overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                    <Star className="text-accent fill-accent" size={14} />
                    <span className="text-xs font-bold text-secondary">{rating}</span>
                </div>
                <div className="absolute bottom-4 left-4">
                    <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full luxury-shadow">
                        Limited Deal
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-5">
                <div className="flex items-center text-muted-foreground mb-2">
                    <MapPin size={14} className="mr-1" />
                    <span className="text-xs uppercase tracking-wider font-medium">{location}</span>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors line-clamp-1">
                    {name}
                </h3>

                <div className="flex items-center mb-4">
                    <div className="flex text-accent mr-2">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={14} className={i < Math.floor(rating) ? "fill-accent" : ""} />
                        ))}
                    </div>
                    <span className="text-xs text-muted-foreground">({reviews} Reviews)</span>
                </div>

                <div className="flex items-center justify-between mt-auto">
                    <div>
                        <span className="text-2xl font-bold text-primary">${price}</span>
                        <span className="text-sm text-muted-foreground ml-1">/ night</span>
                    </div>
                    <Button variant="outline" size="sm">Details</Button>
                </div>
            </div>
        </Card>
    );
};

export const FeaturedHotels = () => {
    const hotels = MOCK_HOTELS;

    return (
        <section className="py-24 px-6 bg-muted/30">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                    <div>
                        <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-3">Top Recommendations</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-secondary">Featured Collections</h3>
                    </div>
                    <Button variant="gold" size="lg">Explore All Hotels</Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {hotels.map((hotel) => (
                        <HotelCard key={hotel.id} {...hotel} />
                    ))}
                </div>
            </div>
        </section>
    );
};

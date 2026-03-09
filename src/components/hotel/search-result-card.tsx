"use client";

import React from "react";
import { Star, MapPin, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useStarlux } from "@/context/starlux-context";

interface SearchResultCardProps {
    id: string;
    name: string;
    location: string;
    price: number;
    rating: number;
    image: string;
    reviews: number;
    amenities: string[];
}

export const SearchResultCard = ({ id, name, location, price, rating, image, reviews, amenities }: SearchResultCardProps) => {
    const { db, toggleFavorite } = useStarlux();
    const isFavorite = db.favorites.includes(id);

    return (
        <Card className="flex flex-col md:flex-row overflow-hidden group mb-6 bg-white border-none">
            {/* Image */}
            <div className="relative w-full md:w-80 h-64 md:h-auto overflow-hidden">
                <Link to={`/hotels/view?id=${id}`} className="block h-full">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                </Link>
                <button
                    onClick={() => toggleFavorite(id)}
                    className={`absolute top-4 left-4 p-2 backdrop-blur-md rounded-full transition-all ${isFavorite ? "bg-primary text-white" : "bg-white/20 hover:bg-white/40 text-white"
                        }`}
                >
                    <Heart size={20} className={isFavorite ? "fill-white" : ""} />
                </button>
            </div>

            {/* Content */}
            <div className="flex-1 p-6 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <div className="flex items-center text-muted-foreground gap-1 mb-1">
                            <MapPin size={14} />
                            <span className="text-xs font-semibold uppercase tracking-widest">{location}</span>
                        </div>
                        <Link to={`/hotels/view?id=${id}`} className="hover:text-primary transition-colors">
                            <h3 className="text-2xl font-bold text-secondary">{name}</h3>
                        </Link>
                    </div>
                    <div className="bg-primary/10 text-primary px-3 py-1 rounded-lg flex items-center gap-1">
                        <Star size={16} className="fill-primary" />
                        <span className="font-bold">{rating}</span>
                    </div>
                </div>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-2 italic">
                    Experience unrivaled luxury and personalized service in the heart of {location.split(',')[0]}.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {amenities.map((item, i) => (
                        <span key={i} className="text-[10px] font-bold uppercase tracking-wider bg-muted px-2 py-1 rounded text-secondary/60">
                            {item}
                        </span>
                    ))}
                </div>
            </div>

            <div className="flex flex-col items-center justify-center p-6 border-t lg:border-t-0 lg:border-l lg:w-48 bg-muted/20">
                <div className="text-center mb-4">
                    <span className="text-xs text-muted-foreground block uppercase font-bold tracking-widest">Starts from</span>
                    <span className="text-2xl font-black text-primary">${price}</span>
                    <span className="text-[10px] text-muted-foreground block font-bold uppercase">per night</span>
                </div>
                <Link to={`/booking?hotel=${encodeURIComponent(name)}&price=${encodeURIComponent("$" + price.toString())}&image=${encodeURIComponent(image)}&location=${encodeURIComponent(location)}`} className="w-full">
                    <Button variant="primary" className="w-full gap-2 rounded-xl group/btn">
                        Book Now <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                </Link>
            </div>
        </Card>
    );
};

"use client";

import React from "react";
import { Star, MapPin, Heart, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

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
    return (
        <Card className="flex flex-col md:flex-row overflow-hidden group mb-6 bg-white border-none">
            {/* Image */}
            <div className="relative w-full md:w-80 h-64 md:h-auto overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <button className="absolute top-4 left-4 p-2 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white transition-all">
                    <Heart size={20} />
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
                        <h3 className="text-2xl font-bold text-secondary">{name}</h3>
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

                <div className="mt-auto flex items-end justify-between border-t pt-6">
                    <div className="flex items-baseline gap-1">
                        <span className="text-sm text-muted-foreground">From</span>
                        <span className="text-3xl font-black text-primary">${price}</span>
                        <span className="text-sm text-muted-foreground decoration-accent/30 decoration-double">/ night</span>
                    </div>
                    <Link href={`/hotels/${id}`}>
                        <Button variant="gold" className="rounded-full px-8">View Details</Button>
                    </Link>
                </div>
            </div>
        </Card>
    );
};

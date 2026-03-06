"use client";

import React from "react";
import { Star, MapPin, Coffee, Wifi, Car, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FiltersSidebar = () => {
    return (
        <div className="space-y-8 p-6 bg-white rounded-2xl border luxury-shadow">
            <div>
                <h4 className="font-bold text-secondary mb-4 uppercase tracking-wider text-xs">Price Range</h4>
                <div className="space-y-4">
                    <input type="range" className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary" />
                    <div className="flex justify-between text-sm font-medium text-muted-foreground">
                        <span>$50</span>
                        <span>$5000+</span>
                    </div>
                </div>
            </div>

            <hr />

            <div>
                <h4 className="font-bold text-secondary mb-4 uppercase tracking-wider text-xs">Star Rating</h4>
                <div className="space-y-2">
                    {[5, 4, 3, 2].map((stars) => (
                        <label key={stars} className="flex items-center gap-3 cursor-pointer group">
                            <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary" />
                            <div className="flex text-accent">
                                {[...Array(stars)].map((_, i) => (
                                    <Star key={i} size={14} className="fill-accent" />
                                ))}
                            </div>
                            <span className="text-sm text-muted-foreground group-hover:text-secondary transition-colors italic">
                                & Up
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            <hr />

            <div>
                <h4 className="font-bold text-secondary mb-4 uppercase tracking-wider text-xs">Amenities</h4>
                <div className="space-y-3">
                    {[
                        { icon: <Wifi size={14} />, label: "Free WiFi" },
                        { icon: <Waves size={14} />, label: "Swimming Pool" },
                        { icon: <Coffee size={14} />, label: "Breakfast Included" },
                        { icon: <Car size={14} />, label: "Parking Area" },
                    ].map((item, i) => (
                        <label key={i} className="flex items-center gap-3 cursor-pointer group">
                            <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary" />
                            <div className="text-muted-foreground group-hover:text-primary transition-colors">
                                {item.icon}
                            </div>
                            <span className="text-sm text-secondary/80 group-hover:text-secondary transition-colors">
                                {item.label}
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            <Button variant="primary" className="w-full">Apply Filters</Button>
        </div>
    );
};

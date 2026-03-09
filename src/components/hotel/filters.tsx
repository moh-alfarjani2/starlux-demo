import React from "react";
import { Star, MapPin, Coffee, Wifi, Car, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";

import { useNavigate, useSearchParams } from "react-router-dom";

export const FiltersSidebar = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const updateFilter = (key: string, value: string) => {
        const params = new URLSearchParams(searchParams.toString());
        if (value) {
            params.set(key, value);
        } else {
            params.delete(key);
        }
        navigate(`/hotels?${params.toString()}`);
    };

    const handleAmenityToggle = (amenity: string, checked: boolean) => {
        const current = searchParams.get("amenities")?.split(",").filter(Boolean) || [];
        let next;
        if (checked) {
            next = [...current, amenity];
        } else {
            next = current.filter(a => a !== amenity);
        }
        updateFilter("amenities", next.join(","));
    };

    return (
        <div className="space-y-8 p-6 bg-white rounded-2xl border luxury-shadow">
            <div>
                <h4 className="font-bold text-secondary mb-4 uppercase tracking-wider text-xs">Price Range (Max)</h4>
                <div className="space-y-4">
                    <input
                        type="range"
                        min="500"
                        max="10000"
                        step="500"
                        value={searchParams.get("maxPrice") || "10000"}
                        onChange={(e) => updateFilter("maxPrice", e.target.value)}
                        className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                    <div className="flex justify-between text-sm font-medium text-muted-foreground">
                        <span>$500</span>
                        <span>${searchParams.get("maxPrice") || "10000"}</span>
                    </div>
                </div>
            </div>

            <hr />

            <div>
                <h4 className="font-bold text-secondary mb-4 uppercase tracking-wider text-xs">Minimum Star Rating</h4>
                <div className="space-y-2">
                    {[5, 4, 3].map((stars) => (
                        <label key={stars} className="flex items-center gap-3 cursor-pointer group">
                            <input
                                type="radio"
                                name="rating"
                                checked={parseInt(searchParams.get("rating") || "0") === stars}
                                onChange={() => updateFilter("rating", stars.toString())}
                                className="w-4 h-4 rounded-full border-gray-300 text-primary focus:ring-primary"
                            />
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
                    <button
                        onClick={() => updateFilter("rating", "")}
                        className="text-xs text-primary font-bold hover:underline mt-2"
                    >
                        Clear Rating
                    </button>
                </div>
            </div>

            <hr />

            <div>
                <h4 className="font-bold text-secondary mb-4 uppercase tracking-wider text-xs">Amenities</h4>
                <div className="space-y-3">
                    {[
                        "Free WiFi",
                        "Swimming Pool",
                        "Breakfast Included",
                        "Parking Area",
                    ].map((amenity, i) => {
                        const iconMap: Record<string, React.ReactNode> = {
                            "Free WiFi": <Wifi size={14} />,
                            "Swimming Pool": <Waves size={14} />,
                            "Breakfast Included": <Coffee size={14} />,
                            "Parking Area": <Car size={14} />,
                        };
                        return (
                            <label key={i} className="flex items-center gap-3 cursor-pointer group">
                                <input
                                    type="checkbox"
                                    checked={searchParams.get("amenities")?.split(",").includes(amenity)}
                                    onChange={(e) => handleAmenityToggle(amenity, e.target.checked)}
                                    className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
                                />
                                <div className="text-muted-foreground group-hover:text-primary transition-colors">
                                    {iconMap[amenity]}
                                </div>
                                <span className="text-sm text-secondary/80 group-hover:text-secondary transition-colors">
                                    {amenity}
                                </span>
                            </label>
                        );
                    })}
                </div>
            </div>

            <Button variant="outline" className="w-full" onClick={() => navigate('/hotels')}>Reset Filters</Button>
        </div>
    );
};

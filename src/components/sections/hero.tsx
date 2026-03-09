import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Calendar, Users, Search } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Hero = () => {
    const navigate = useNavigate();
    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const location = (form.elements.namedItem("location") as HTMLInputElement)?.value || "";
        const dates = (form.elements.namedItem("dates") as HTMLInputElement)?.value || "";
        const guests = (form.elements.namedItem("guests") as HTMLInputElement)?.value || "";

        const params = new URLSearchParams();
        if (location) params.set("location", location);
        if (dates) params.set("dates", dates);
        if (guests) params.set("guests", guests);

        navigate(`/hotels?${params.toString()}`);
    };

    return (
        <section className="relative h-[90vh] min-h-[700px] w-full flex items-center justify-center overflow-hidden">
            {/* Background with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=2070')",
                }}
            >
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-5xl w-full px-6 text-center text-white">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-700">
                    Find Your Next <span className="text-accent">Luxury</span> Escape
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
                    Experience world-class hospitality in the most breathtaking destinations across the globe.
                </p>

                {/* Premium Search Bar */}
                <Card glass className="p-2 md:p-3 animate-in fade-in zoom-in duration-700 delay-500">
                    <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-2 items-end">
                        <div className="text-left px-4 py-2 border-r border-white/20">
                            <label className="text-xs font-bold uppercase tracking-wider text-accent mb-1 flex items-center gap-1">
                                <MapPin size={14} /> Location
                            </label>
                            <input
                                name="location"
                                type="text"
                                placeholder="Where are you going?"
                                className="bg-transparent border-none outline-none w-full text-secondary font-medium placeholder:text-secondary/50"
                                required
                            />
                        </div>

                        <div className="text-left px-4 py-2 border-r border-white/20">
                            <label className="text-xs font-bold uppercase tracking-wider text-accent mb-1 flex items-center gap-1">
                                <Calendar size={14} /> Stay Dates
                            </label>
                            <input
                                name="dates"
                                type="text"
                                placeholder="Check-in — Check-out"
                                className="bg-transparent border-none outline-none w-full text-secondary font-medium placeholder:text-secondary/50"
                                required
                            />
                        </div>

                        <div className="text-left px-4 py-2 md:border-none">
                            <label className="text-xs font-bold uppercase tracking-wider text-accent mb-1 flex items-center gap-1">
                                <Users size={14} /> Guests
                            </label>
                            <input
                                name="guests"
                                type="text"
                                placeholder="2 Adults, 1 Room"
                                className="bg-transparent border-none outline-none w-full text-secondary font-medium placeholder:text-secondary/50"
                            />
                        </div>

                        <Button type="submit" size="lg" className="w-full h-full text-lg rounded-xl">
                            <Search className="mr-2" size={20} />
                            Search
                        </Button>
                    </form>
                </Card>

                {/* Popular Tags */}
                <div className="mt-8 flex flex-wrap justify-center gap-3 animate-in fade-in duration-1000 delay-700">
                    <span className="text-sm text-white/70">Popular:</span>
                    {["Dubai", "Maldives", "Paris", "London", "Bali"].map((city) => (
                        <button key={city} className="text-sm font-medium hover:text-accent transition-colors underline underline-offset-4 decoration-accent/30">
                            {city}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

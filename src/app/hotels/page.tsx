"use client";

import React from "react";
import { BaseLayout } from "@/components/layout/base-layout";
import { SearchResultCard } from "@/components/hotel/search-result-card";
import { FiltersSidebar } from "@/components/hotel/filters";
import { ChevronDown, Map, LayoutGrid, List } from "lucide-react";
import { Button } from "@/components/ui/button";

const MOCK_HOTELS = [
    {
        id: "1",
        name: "The Grand Burj Resort",
        location: "Dubai, UAE",
        price: 1200,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800",
        amenities: ["Free WiFi", "Infinity Pool", "Spa", "Private Beach"],
        reviews: 1240
    },
    {
        id: "2",
        name: "Royal Parisian Palace",
        location: "Paris, France",
        price: 850,
        rating: 4.8,
        image: "/paris-palace.png",
        amenities: ["Classic Architecture", "Michelin Dining", "Valet"],
        reviews: 890
    },
    {
        id: "3",
        name: "Oceanic Blue Maldives",
        location: "Malé, Maldives",
        price: 2400,
        rating: 5.0,
        image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&q=80&w=800",
        amenities: ["Overwater Villa", "All inclusive", "Diving"],
        reviews: 450
    },
    {
        id: "4",
        name: "Alpine Peak Lodge",
        location: "Zermatt, Switzerland",
        price: 980,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&q=80&w=800",
        amenities: ["Ski-in/Ski-out", "Fireplace", "Mountain View"],
        reviews: 670
    }
];

export default function HotelsPage() {
    return (
        <BaseLayout>
            <div className="bg-muted/30 pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Page Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                        <div>
                            <h1 className="text-3xl font-bold text-secondary mb-2">Exclusive Stays in Dubai</h1>
                            <p className="text-muted-foreground">Showing 150 luxury results found for your dates</p>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="flex items-center border rounded-lg bg-white overflow-hidden shadow-sm">
                                <button className="p-2.5 bg-muted text-secondary hover:bg-muted transition-colors"><List size={18} /></button>
                                <button className="p-2.5 text-muted-foreground hover:bg-muted transition-colors border-l"><LayoutGrid size={18} /></button>
                            </div>
                            <Button variant="outline" className="gap-2 bg-white">
                                <Map size={18} /> Show Map
                            </Button>
                            <Button variant="outline" className="gap-2 bg-white">
                                Sort by: Recommended <ChevronDown size={18} />
                            </Button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        {/* Filters Sidebar */}
                        <aside className="lg:col-span-1 hidden lg:block">
                            <FiltersSidebar />
                        </aside>

                        {/* Results List */}
                        <main className="lg:col-span-3">
                            <div className="space-y-6">
                                {MOCK_HOTELS.map((hotel) => (
                                    <SearchResultCard key={hotel.id} {...hotel} />
                                ))}
                            </div>

                            {/* Pagination Placeholder */}
                            <div className="mt-12 flex justify-center">
                                <div className="flex items-center gap-2">
                                    <Button variant="outline" disabled>Previous</Button>
                                    <Button variant="primary" className="h-10 w-10 p-0">1</Button>
                                    <Button variant="outline" className="h-10 w-10 p-0">2</Button>
                                    <Button variant="outline" className="h-10 w-10 p-0">3</Button>
                                    <Button variant="outline">Next</Button>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </BaseLayout>
    );
}

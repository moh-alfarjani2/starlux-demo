import React from "react";
import { BaseLayout } from "@/components/layout/base-layout";
import { SearchResultCard } from "@/components/hotel/search-result-card";
import { FiltersSidebar } from "@/components/hotel/filters";
import { ChevronDown, Map, LayoutGrid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card"; // Added Card import

import { useStarlux } from "@/context/starlux-context";

import { useSearchParams } from "react-router-dom";

export default function HotelsPage() {
    const { db } = useStarlux();
    const [searchParams] = useSearchParams();

    // Filter parameters
    const locationQuery = searchParams.get("location")?.toLowerCase() || "";
    const minPrice = parseInt(searchParams.get("minPrice") || "0");
    const maxPrice = parseInt(searchParams.get("maxPrice") || "10000");
    const ratingQuery = parseInt(searchParams.get("rating") || "0");
    const amenitiesQuery = searchParams.get("amenities")?.split(",") || [];
    const tabQuery = searchParams.get("tab") || "hotels";

    const filteredHotels = db.hotels.filter(hotel => {
        const matchesLocation = !locationQuery ||
            hotel.location.toLowerCase().includes(locationQuery) ||
            hotel.name.toLowerCase().includes(locationQuery);

        const matchesPrice = hotel.price >= minPrice && hotel.price <= maxPrice;
        const matchesRating = hotel.rating >= ratingQuery;

        const matchesAmenities = amenitiesQuery.length === 0 ||
            amenitiesQuery.every(a => hotel.amenities.includes(a));

        if (tabQuery === "destinations") {
            // For destinations tab, we only show top locations (simulate this by filtering specific ones)
            if (!["Dubai, UAE", "Paris, France", "London, UK"].includes(hotel.location)) return false;
        }

        if (tabQuery === "deals") {
            // For deals, we only show hotels with price < $1000 to simulate deals
            if (hotel.price >= 1000) return false;
        }

        return matchesLocation && matchesPrice && matchesRating && matchesAmenities;
    });

    return (
        <BaseLayout>
            <div className="bg-muted/30 pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Page Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                        <div>
                            <h1 className="text-3xl font-bold text-secondary mb-2">
                                {tabQuery === "deals" ? "Exclusive Luxury Deals" :
                                    tabQuery === "destinations" ? "Top Global Destinations" :
                                        locationQuery ? `Luxury Stays in ${locationQuery}` : "Exclusive Global Stays"}
                            </h1>
                            <p className="text-muted-foreground">Showing {filteredHotels.length} luxury results found for your search</p>
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
                                {filteredHotels.length > 0 ? (
                                    filteredHotels.map((hotel: any) => (
                                        <SearchResultCard key={hotel.id} {...hotel} />
                                    ))
                                ) : (
                                    <Card className="p-20 text-center luxury-shadow border-none bg-white">
                                        <div className="flex flex-col items-center gap-4">
                                            <div className="p-4 bg-muted rounded-full">
                                                <Map size={40} className="text-muted-foreground" />
                                            </div>
                                            <h2 className="text-2xl font-bold text-secondary">No stays found</h2>
                                            <p className="text-muted-foreground max-w-xs mx-auto">
                                                We couldn't find any luxury stays matching your current filters. Try adjusting your preferences.
                                            </p>
                                            <Button variant="primary" onClick={() => window.location.href = '/hotels'}>Clear All Filters</Button>
                                        </div>
                                    </Card>
                                )}
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

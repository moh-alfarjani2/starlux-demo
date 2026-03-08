"use client";

import React from "react";
import { BaseLayout } from "@/components/layout/base-layout";
import { SearchResultCard } from "@/components/hotel/search-result-card";
import { FiltersSidebar } from "@/components/hotel/filters";
import { ChevronDown, Map, LayoutGrid, List } from "lucide-react";
import { Button } from "@/components/ui/button";

import { MOCK_HOTELS } from "@/lib/mock-data";

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

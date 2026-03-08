"use client";

import React from "react";
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Heart, Trash2, ArrowRight } from "lucide-react";
import Link from "next/link";

import { MOCK_FAVORITES } from "@/lib/mock-data";

export default function FavoritesPage() {
    const favorites = MOCK_FAVORITES;

    return (
        <DashboardLayout role="guest">
            <div className="space-y-8">
                <div>
                    <h1 className="text-3xl font-bold text-secondary">My Favorites</h1>
                    <p className="text-muted-foreground italic">Your curated collection of world-class luxury stays.</p>
                </div>

                {favorites.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {favorites.map((hotel) => (
                            <Card key={hotel.id} className="p-0 border-none luxury-shadow bg-white overflow-hidden group">
                                <div className="h-48 relative overflow-hidden">
                                    <img src={hotel.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={hotel.name} />
                                    <div className="absolute top-4 right-4">
                                        <Button variant="ghost" size="icon" className="bg-white/20 backdrop-blur-md text-white hover:text-red-500 rounded-full">
                                            <Trash2 size={18} />
                                        </Button>
                                    </div>
                                    <div className="absolute bottom-4 left-4">
                                        <div className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-lg flex items-center gap-1 text-primary text-xs font-bold">
                                            <Star size={12} className="fill-primary" /> {hotel.rating}
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center text-muted-foreground gap-1 text-[10px] font-bold uppercase tracking-widest mb-2">
                                        <MapPin size={12} /> {hotel.location}
                                    </div>
                                    <h3 className="text-xl font-bold text-secondary mb-4">{hotel.name}</h3>
                                    <div className="flex items-center justify-between border-t pt-4">
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-lg font-black text-primary">${hotel.price}</span>
                                            <span className="text-xs text-muted-foreground">/ night</span>
                                        </div>
                                        <Link href={`/hotels/${hotel.id}`}>
                                            <Button variant="ghost" className="text-primary font-bold text-sm p-0 hover:bg-transparent group/btn">
                                                Book Now <ArrowRight size={14} className="ml-1 transition-transform group-hover/btn:translate-x-1" />
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white rounded-3xl luxury-shadow flex flex-col items-center">
                        <Heart size={64} className="text-muted/30 mb-6" />
                        <h2 className="text-2xl font-bold text-secondary">No favorites yet</h2>
                        <p className="text-muted-foreground italic mb-8">Start exploring the world to build your luxury wishlist.</p>
                        <Link href="/hotels">
                            <Button variant="gold" className="rounded-xl px-8">Find Hotels</Button>
                        </Link>
                    </div>
                )}
            </div>
        </DashboardLayout>
    );
}

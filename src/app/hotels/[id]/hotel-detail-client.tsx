"use client";

import React from "react";
import { BaseLayout } from "@/components/layout/base-layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, MapPin, Users, BedDouble, Square, CheckCircle2 } from "lucide-react";
import Link from "next/link";

import { MOCK_HOTELS } from "@/lib/mock-data";

import { useParams, useSearchParams } from "next/navigation";
import { getDB } from "@/lib/db";
import { MapPin } from "lucide-react";

export default function HotelDetailClient() {
    const params = useParams();
    const searchParams = useSearchParams();
    const db = getDB();

    // Support both path segment and query parameter for maximum flexibility
    const hotelId = (params.id as string) || searchParams.get("id");
    const hotel = db.hotels.find((h: any) => h.id === hotelId);

    if (!hotel) {
        return (
            <BaseLayout>
                <div className="min-h-screen pt-40 pb-20 flex items-center justify-center">
                    <div className="text-center space-y-6">
                        <div className="w-20 h-20 bg-muted rounded-2xl flex items-center justify-center mx-auto text-muted-foreground">
                            <MapPin size={40} />
                        </div>
                        <h1 className="text-3xl font-bold text-secondary">Property Not Found</h1>
                        <p className="text-muted-foreground max-w-sm mx-auto">
                            The luxury destination you are looking for might have moved or been decommissioned from our exclusive portfolio.
                        </p>
                        <Button variant="primary" onClick={() => window.location.href = '/hotels'}>
                            View Available Properties
                        </Button>
                    </div>
                </div>
            </BaseLayout>
        );
    }

    return (
        <BaseLayout>
            <div className="pt-24 pb-20">
                {/* Gallery Section */}
                <section className="px-6 mb-12">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[600px]">
                            <div className="md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden relative group">
                                <img src={hotel.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={hotel.name} />
                            </div>
                            <div className="rounded-2xl overflow-hidden relative group">
                                <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Presidential Suite" />
                            </div>
                            <div className="rounded-2xl overflow-hidden relative group">
                                <img src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Luxury Grand Lobby" />
                            </div>
                            <div className="rounded-2xl overflow-hidden relative group">
                                <img src="https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Infinity Pool" />
                            </div>
                            <div className="rounded-2xl overflow-hidden relative group bg-secondary/80 flex items-center justify-center cursor-pointer hover:bg-secondary">
                                <span className="text-white font-bold text-lg">+ 12 Photos</span>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <div className="flex text-accent">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={18} className={i < Math.floor(hotel.rating) ? "fill-accent" : ""} />)}
                                </div>
                                <span className="text-muted-foreground font-medium">• {hotel.rating} Rating</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">{hotel.name}</h1>
                            <div className="flex items-center text-muted-foreground gap-2 text-lg">
                                <MapPin size={20} className="text-primary" />
                                <span>{hotel.location}</span>
                            </div>
                        </div>

                        <hr />

                        <div>
                            <h3 className="text-2xl font-bold text-secondary mb-6">About the Estate</h3>
                            <p className="text-muted-foreground leading-relaxed text-lg">
                                {hotel.description}
                            </p>
                        </div>

                        {/* Amenities Grid */}
                        <div>
                            <h3 className="text-2xl font-bold text-secondary mb-8">What this place offers</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                {hotel.amenities.map((amenity, i) => (
                                    <div key={i} className="flex flex-col gap-2 p-4 rounded-xl border bg-muted/20 hover:border-primary/30 transition-colors">
                                        <div className="text-primary"><CheckCircle2 size={24} /></div>
                                        <span className="text-sm font-semibold text-secondary">{amenity}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Room Availability */}
                        <div id="booking">
                            <h3 className="text-2xl font-bold text-secondary mb-8">Available Room Types</h3>
                            <div className="space-y-6">
                                {hotel.rooms?.map((room, i) => (
                                    <Card key={i} className="p-0 overflow-hidden flex flex-col md:flex-row gap-0 hover:border-primary transition-all luxury-shadow border-none bg-white group">
                                        <div className="w-full md:w-64 h-48 md:h-auto overflow-hidden shrink-0">
                                            <img
                                                src={room.image}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                alt={room.name}
                                            />
                                        </div>
                                        <div className="flex-1 p-6 flex flex-col justify-between">
                                            <div>
                                                <h4 className="text-xl font-bold text-secondary mb-2">{room.name}</h4>
                                                <p className="text-sm text-muted-foreground mb-4 italic line-clamp-2">{room.description}</p>
                                                <div className="flex flex-wrap gap-4 text-[10px] font-bold uppercase tracking-wider text-muted-foreground/60">
                                                    <span className="flex items-center gap-1 bg-muted px-2 py-1 rounded"><Square size={12} /> {room.size}</span>
                                                    <span className="flex items-center gap-1 bg-muted px-2 py-1 rounded"><Users size={12} /> {room.guests}</span>
                                                    <span className="flex items-center gap-1 bg-muted px-2 py-1 rounded"><BedDouble size={12} /> {room.bed}</span>
                                                </div>
                                            </div>

                                            <div className="mt-4 flex gap-2">
                                                <span className="text-[10px] font-bold uppercase tracking-widest bg-green-100 text-green-700 px-2 py-0.5 rounded">Refundable</span>
                                                <span className="text-[10px] font-bold uppercase tracking-widest bg-blue-100 text-blue-700 px-2 py-0.5 rounded">All-Inclusive</span>
                                            </div>
                                        </div>
                                        <div className="p-8 flex flex-col items-center justify-center border-t md:border-t-0 md:border-l bg-muted/5 min-w-[200px]">
                                            <div className="text-center mb-4">
                                                <span className="text-xs text-muted-foreground block">Per night</span>
                                                <span className="text-3xl font-black text-primary">${room.price}</span>
                                            </div>
                                            <Link href="/booking" className="w-full">
                                                <Button variant="gold" className="w-full rounded-xl">Book Now</Button>
                                            </Link>
                                        </div>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Card */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-28 space-y-6">
                            <Card className="p-8 luxury-shadow border-t-4 border-t-primary">
                                <div className="flex justify-between items-baseline mb-6">
                                    <span className="text-sm text-muted-foreground font-medium">Starting from</span>
                                    <div className="text-right">
                                        <span className="text-4xl font-black text-primary">${hotel.price}</span>
                                        <span className="text-muted-foreground text-sm ml-1">/ night</span>
                                    </div>
                                </div>

                                <div className="space-y-4 mb-8">
                                    <div className="grid grid-cols-2 border rounded-xl overflow-hidden">
                                        <div className="p-3 border-r bg-muted/30">
                                            <label className="block text-[10px] font-bold uppercase text-muted-foreground mb-1">Check-in</label>
                                            <span className="font-semibold text-secondary">Oct 12, 2026</span>
                                        </div>
                                        <div className="p-3 bg-muted/30">
                                            <label className="block text-[10px] font-bold uppercase text-muted-foreground mb-1">Check-out</label>
                                            <span className="font-semibold text-secondary">Oct 15, 2026</span>
                                        </div>
                                    </div>
                                    <div className="p-4 border rounded-xl bg-muted/30">
                                        <label className="block text-[10px] font-bold uppercase text-muted-foreground mb-1">Guests</label>
                                        <span className="font-semibold text-secondary">2 Adults, 1 Room</span>
                                    </div>
                                </div>

                                <a href="#booking">
                                    <Button variant="gold" className="w-full text-lg py-7 rounded-xl font-bold">Check Availability</Button>
                                </a>

                                <p className="mt-4 text-center text-xs text-muted-foreground flex items-center justify-center gap-1">
                                    <CheckCircle2 size={12} className="text-green-500" /> No hidden fees, guaranteed price.
                                </p>
                            </Card>

                            {/* Badges/Trust */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 border rounded-xl bg-white text-center">
                                    <h5 className="font-bold text-secondary text-lg">{hotel.rating}/5</h5>
                                    <p className="text-xs text-muted-foreground">Excellent Rating</p>
                                </div>
                                <div className="p-4 border rounded-xl bg-white text-center">
                                    <h5 className="font-bold text-secondary text-lg">{hotel.reviews.toLocaleString()}+</h5>
                                    <p className="text-xs text-muted-foreground">Happy Guests</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BaseLayout>
    );
}

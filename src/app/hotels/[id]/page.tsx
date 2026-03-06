"use client";

import React from "react";
import { BaseLayout } from "@/components/layout/base-layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, MapPin, Wifi, Coffee, Waves, Shield, Info, Users, BedDouble, Square, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function HotelDetailsPage() {
    return (
        <BaseLayout>
            <div className="pt-24 pb-20">
                {/* Gallery Section */}
                <section className="px-6 mb-12">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[600px]">
                            <div className="md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden relative group">
                                <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="The Grand Burj Resort - Elegant Night View of Main Tower" />
                            </div>
                            <div className="rounded-2xl overflow-hidden relative group">
                                <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Presidential Suite - Luxurious Interior Design" />
                            </div>
                            <div className="rounded-2xl overflow-hidden relative group">
                                <img src="https://images.unsplash.com/photo-1551882547-ff43c61f1c90?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Luxury Grand Lobby - Golden Marble and Crystal Chandeliers" />
                            </div>
                            <div className="rounded-2xl overflow-hidden relative group">
                                <img src="https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Infinity Pool Overlooking Dubai Skyline" />
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
                                    {[...Array(5)].map((_, i) => <Star key={i} size={18} className="fill-accent" />)}
                                </div>
                                <span className="text-muted-foreground font-medium">• 5 Stars Hotel</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">The Grand Burj Resort & Spa</h1>
                            <div className="flex items-center text-muted-foreground gap-2 text-lg">
                                <MapPin size={20} className="text-primary" />
                                <span>Downtown Dubai, Sheikh Zayed Road, PO Box 1234, UAE</span>
                            </div>
                        </div>

                        <hr />

                        <div>
                            <h3 className="text-2xl font-bold text-secondary mb-6">About the Estate</h3>
                            <p className="text-muted-foreground leading-relaxed text-lg">
                                Indulge in unparalleled luxury at The Grand Burj Resort, where world-class service meets breathtaking Arabian architecture.
                                Located in the heart of Dubai, our resort offers stunning views of the Burj Khalifa and the Dubai Fountain.
                                Each room is a sanctuary of comfort, featuring bespoke furnishings, state-of-the-art technology, and a private balcony overlooking the city skyline.
                            </p>
                        </div>

                        {/* Amenities Grid */}
                        <div>
                            <h3 className="text-2xl font-bold text-secondary mb-8">What this place offers</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                {[
                                    { icon: <Wifi size={24} />, label: "High-speed WiFi" },
                                    { icon: <Waves size={24} />, label: "Infinity Pool" },
                                    { icon: <Coffee size={24} />, label: "Michelin Breakfast" },
                                    { icon: <Shield size={24} />, label: "24/7 Security" },
                                    { icon: <BedDouble size={24} />, label: "Luxury King Bed" },
                                    { icon: <Square size={24} />, label: "120m² Space" },
                                    { icon: <Users size={24} />, label: "Concierge" },
                                    { icon: <Info size={24} />, label: "City Views" },
                                ].map((item, i) => (
                                    <div key={i} className="flex flex-col gap-2 p-4 rounded-xl border bg-muted/20 hover:border-primary/30 transition-colors">
                                        <div className="text-primary">{item.icon}</div>
                                        <span className="text-sm font-semibold text-secondary">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Room Availability */}
                        <div id="booking">
                            <h3 className="text-2xl font-bold text-secondary mb-8">Available Room Types</h3>
                            <div className="space-y-6">
                                {[
                                    {
                                        name: "Deluxe King Room",
                                        price: 1200,
                                        size: "85m²",
                                        guests: "2 Adults",
                                        bed: "1 King Bed",
                                        image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=400",
                                        description: "Elegant and spacious room featuring a floor-to-ceiling city view and a marble bathroom."
                                    },
                                    {
                                        name: "Executive Ocean Suite",
                                        price: 1850,
                                        size: "120m²",
                                        guests: "2 Adults, 1 Child",
                                        bed: "1 King Bed, 1 Sofa Bed",
                                        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=400",
                                        description: "Panoramic ocean views with a separate living area and exclusive lounge access."
                                    },
                                    {
                                        name: "Royal Presidential Villa",
                                        price: 4500,
                                        size: "350m²",
                                        guests: "4 Adults",
                                        bed: "2 King Beds",
                                        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=400",
                                        description: "Ultra-luxury private villa with its own infinity pool, personal butler, and private entrance."
                                    },
                                ].map((room, i) => (
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
                                        <span className="text-4xl font-black text-primary">$1,200</span>
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
                                    <h5 className="font-bold text-secondary text-lg">4.9/5</h5>
                                    <p className="text-xs text-muted-foreground">Excellent Rating</p>
                                </div>
                                <div className="p-4 border rounded-xl bg-white text-center">
                                    <h5 className="font-bold text-secondary text-lg">1,240+</h5>
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

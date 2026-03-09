import React from "react";
import { BaseLayout } from "@/components/layout/base-layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, MapPin, Users, BedDouble, Square, CheckCircle2 } from "lucide-react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { getDB } from "@/lib/db";

export default function HotelDetailClient() {
    const params = useParams();
    const [searchParams] = useSearchParams();
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
            <div className="bg-muted/30 pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Breadcrumbs */}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
                        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                        <span>/</span>
                        <Link to="/hotels" className="hover:text-primary transition-colors">Hotels</Link>
                        <span>/</span>
                        <span className="text-secondary font-medium">{hotel.name}</span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Left Column: Images & Info */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Main Image Container */}
                            <div className="aspect-[16/9] rounded-3xl overflow-hidden luxury-shadow relative group">
                                <img
                                    src={hotel.image}
                                    alt={hotel.name}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute top-6 right-6 flex gap-3">
                                    <button className="p-3 bg-white/80 backdrop-blur-md rounded-full text-secondary hover:bg-white transition-all luxury-shadow-sm">
                                        <Heart size={20} />
                                    </button>
                                    <button className="p-3 bg-white/80 backdrop-blur-md rounded-full text-secondary hover:bg-white transition-all luxury-shadow-sm">
                                        <Share2 size={20} />
                                    </button>
                                </div>
                            </div>

                            {/* Header Info */}
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="flex text-primary">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} size={16} className={i < Math.floor(hotel.rating) ? "fill-primary" : ""} />
                                            ))}
                                        </div>
                                        <span className="text-sm font-bold text-secondary">({hotel.reviews} Authentic Reviews)</span>
                                    </div>
                                    <h1 className="text-4xl font-black text-secondary tracking-tight mb-2">{hotel.name}</h1>
                                    <div className="flex items-center text-muted-foreground gap-1">
                                        <MapPin size={18} />
                                        <span className="font-medium italic">{hotel.location}</span>
                                    </div>
                                </div>
                                <div className="bg-white p-6 rounded-2xl luxury-shadow flex flex-col items-center min-w-[160px]">
                                    <span className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-1">From</span>
                                    <span className="text-4xl font-black text-primary">${hotel.price}</span>
                                    <span className="text-[10px] font-black uppercase text-muted-foreground">Per Guest / Night</span>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold text-secondary">A Masterpiece of Hospitality</h2>
                                <p className="text-muted-foreground leading-relaxed text-lg">
                                    Experience unrivaled luxury in the heart of {hotel.location.split(',')[0]}. {hotel.name} offers a perfect blend of modern sophistication and timeless elegance. Our world-class amenities and personalized service ensure an unforgettable stay for the most discerning travelers.
                                </p>
                                <p className="text-muted-foreground leading-relaxed">
                                    Each room is meticulously designed with premium finishes, offering breathtaking views and the ultimate in comfort. Whether you're here for business or leisure, our dedicated concierge team is available 24/7 to cater to your every need.
                                </p>
                            </div>

                            {/* Amenities Grid */}
                            <div className="space-y-6 pt-8 border-t">
                                <h2 className="text-2xl font-bold text-secondary">Premium Amenities</h2>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                    {hotel.amenities.map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-xl luxury-shadow-sm border border-muted/50">
                                            <div className="text-primary font-bold">
                                                <CheckCircle2 size={18} />
                                            </div>
                                            <span className="text-sm font-bold text-secondary">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Booking Card */}
                        <div className="lg:col-span-1">
                            <Card className="sticky top-32 p-8 border-none luxury-shadow bg-secondary text-white space-y-8 rounded-[2rem]">
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">Reserve Your Experience</h3>
                                    <p className="text-white/60 italic text-sm">Best price guaranteed for elite members.</p>
                                </div>

                                <div className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-accent">Check-in</label>
                                            <div className="bg-white/10 p-3 rounded-xl border border-white/10 text-sm">Oct 24, 2023</div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-accent">Check-out</label>
                                            <div className="bg-white/10 p-3 rounded-xl border border-white/10 text-sm">Oct 28, 2023</div>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-accent">Guests</label>
                                        <div className="bg-white/10 p-4 rounded-xl border border-white/10 text-sm flex justify-between items-center">
                                            <span>2 Adults, 1 Child</span>
                                            <Users size={18} className="text-accent" />
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-white/10 space-y-3">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-white/60 italic">${hotel.price} x 4 nights</span>
                                        <span className="font-bold">${hotel.price * 4}</span>
                                    </div>
                                    <div className="flex justify-between text-sm text-accent">
                                        <span className="italic">Elite Member Discount (10%)</span>
                                        <span className="font-bold">-${(hotel.price * 4 * 0.1).toFixed(0)}</span>
                                    </div>
                                    <div className="flex justify-between text-xl font-black pt-4 border-t border-white/10">
                                        <span>Total</span>
                                        <span className="text-primary">${(hotel.price * 4 * 0.9).toFixed(0)}</span>
                                    </div>
                                </div>

                                <Link to={`/booking?hotel=${encodeURIComponent(hotel.name)}&price=${encodeURIComponent("$" + hotel.price.toString())}&image=${encodeURIComponent(hotel.image)}&location=${encodeURIComponent(hotel.location)}`} className="block">
                                    <Button variant="gold" className="w-full py-8 text-lg font-black rounded-2xl luxury-shadow active:scale-[0.98] transition-all">
                                        REQUEST BOOKING
                                    </Button>
                                </Link>

                                <p className="text-center text-[10px] text-white/40 uppercase font-black tracking-widest">
                                    Zero booking fees • Instant confirmation
                                </p>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </BaseLayout>
    );
}

import { Share2, Heart } from "lucide-react";

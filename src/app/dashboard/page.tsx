"use client";

import React from "react";
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CalendarDays, Heart, Star, MapPin, ChevronRight, Clock, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function GuestDashboardPage() {
    const stats = [
        { label: "Total Bookings", value: "12", icon: <CalendarDays className="text-primary" />, color: "bg-primary/10" },
        { label: "Wishlist", value: "24", icon: <Heart className="text-red-500" />, color: "bg-red-50" },
        { label: "Reviews", value: "8", icon: <Star className="text-accent" />, color: "bg-accent/10" },
        { label: "Points", value: "2.4k", icon: <ShieldCheck className="text-green-500" />, color: "bg-green-50" },
    ];

    return (
        <DashboardLayout role="guest">
            <div className="space-y-8">
                {/* Welcome Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-secondary">Welcome back, John!</h1>
                        <p className="text-muted-foreground italic">You have 2 upcoming bookings this month.</p>
                    </div>
                    <Link href="/hotels">
                        <Button variant="gold" className="rounded-xl px-8 shadow-md">Book New Trip</Button>
                    </Link>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, i) => (
                        <Card key={i} className="p-6 border-none luxury-shadow bg-white flex items-center gap-4">
                            <div className={cn("p-3 rounded-xl", stat.color)}>
                                {stat.icon}
                            </div>
                            <div>
                                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{stat.label}</p>
                                <p className="text-2xl font-black text-secondary">{stat.value}</p>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Content Rows */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Recent Bookings */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-bold text-secondary">Upcoming Bookings</h2>
                            <Link href="/dashboard/bookings" className="text-sm font-bold text-primary flex items-center gap-1 hover:underline">
                                View All <ChevronRight size={14} />
                            </Link>
                        </div>

                        <Card className="p-0 border-none luxury-shadow bg-white overflow-hidden">
                            <div className="flex flex-col md:flex-row items-center p-4 gap-6">
                                <div className="w-full md:w-32 h-24 rounded-lg overflow-hidden shrink-0">
                                    <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Hotel" />
                                </div>
                                <div className="flex-1 text-center md:text-left">
                                    <h3 className="font-bold text-secondary text-lg">The Grand Burj Resort</h3>
                                    <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-muted-foreground mt-1">
                                        <MapPin size={12} /> Dubai, UAE
                                    </div>
                                    <div className="flex items-center justify-center md:justify-start gap-4 mt-3">
                                        <span className="text-xs font-bold bg-primary/10 text-primary px-3 py-1 rounded-full uppercase tracking-tighter">Confirmed</span>
                                        <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock size={12} /> Check-in: Oct 12</span>
                                    </div>
                                </div>
                                <div className="p-4 border-t md:border-t-0 md:border-l w-full md:w-fit flex flex-col items-center">
                                    <span className="text-xs text-muted-foreground mb-1">Status</span>
                                    <span className="font-black text-secondary text-xl font-mono">12 Days Left</span>
                                </div>
                            </div>
                        </Card>
                    </div>

                    {/* Points/Offers Sidebar */}
                    <div className="lg:col-span-1 space-y-6">
                        <h2 className="text-xl font-bold text-secondary">Luxury Rewards</h2>
                        <Card className="bg-secondary p-8 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <Star size={100} />
                            </div>
                            <div className="relative z-10">
                                <p className="text-accent font-black uppercase tracking-[.2em] text-[10px] mb-2">Membership Status</p>
                                <h3 className="text-2xl font-bold mb-6">Platinum Elite</h3>
                                <div className="space-y-4">
                                    <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                                        <div className="bg-accent h-full w-[75%]" />
                                    </div>
                                    <p className="text-xs text-white/60 leading-relaxed italic">
                                        Book 3 more nights to reach <span className="text-accent font-bold">Diamond Tier</span> and unlock VIP airport transfers.
                                    </p>
                                </div>
                                <Button variant="gold" className="w-full mt-8 rounded-xl shadow-lg">View Benefits</Button>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}

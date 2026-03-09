"use client";

import React from "react";
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Clock, CreditCard, Download, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

import { useStarlux } from "@/context/starlux-context";
import { cn } from "@/lib/utils";

export default function MyBookingsPage() {
    const { db } = useStarlux();
    const { bookings } = db;

    return (
        <DashboardLayout role="guest">
            <div className="space-y-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-secondary">My Bookings</h1>
                        <p className="text-muted-foreground italic">Manage your upcoming and past luxury escapes.</p>
                    </div>
                    <div className="flex bg-white rounded-xl p-1 shadow-sm border">
                        <button className="px-6 py-2 rounded-lg bg-primary text-white font-bold text-sm">Upcoming</button>
                        <button className="px-6 py-2 rounded-lg text-muted-foreground font-medium text-sm hover:bg-muted transition-all">Past</button>
                    </div>
                </div>

                <div className="space-y-6">
                    {bookings.map((booking: any, i: number) => (
                        <Card key={i} className="p-0 border-none luxury-shadow bg-white overflow-hidden group">
                            <div className="flex flex-col lg:flex-row justify-between">
                                {/* Hotel Info */}
                                <div className="flex flex-col md:flex-row items-center p-6 gap-6 flex-1">
                                    <div className="w-full md:w-48 h-32 rounded-xl overflow-hidden shrink-0">
                                        <img src={booking.image} className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-700" alt="Hotel" />
                                    </div>
                                    <div className="flex-1 text-center md:text-left">
                                        <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                                            <span className={cn(
                                                "text-[10px] font-black uppercase px-3 py-1 rounded-full tracking-widest",
                                                booking.isUpcoming ? "bg-green-100 text-green-700" : "bg-muted text-muted-foreground"
                                            )}>
                                                {booking.status}
                                            </span>
                                            <span className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-widest">ID: {booking.id}</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-secondary mb-2 group-hover:text-primary transition-all underline decoration-accent/0 group-hover:decoration-accent/30 underline-offset-4">{booking.hotel}</h3>
                                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-2 text-sm text-muted-foreground">
                                            <span className="flex items-center gap-1.5"><MapPin size={14} className="text-primary" /> {booking.location}</span>
                                            <span className="flex items-center gap-1.5"><Calendar size={14} className="text-primary" /> {booking.dates}</span>
                                            <span className="flex items-center gap-1.5"><CreditCard size={14} className="text-primary" /> {booking.price}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="p-8 bg-muted/20 lg:w-72 flex lg:flex-col gap-3 border-t lg:border-t-0 lg:border-l items-center justify-center">
                                    {booking.isUpcoming ? (
                                        <>
                                            <Link to={`/hotels/view?id=${booking.id}`} className="w-full">
                                                <Button variant="primary" className="w-full gap-2">
                                                    <ExternalLink size={16} /> View Details
                                                </Button>
                                            </Link>
                                            <Button variant="outline" className="w-full text-red-500 border-red-100 hover:bg-red-50 hover:text-red-600 bg-white">
                                                Cancel Booking
                                            </Button>
                                        </>
                                    ) : (
                                        <>
                                            <Button variant="outline" className="w-full gap-2 bg-white">
                                                <Download size={16} /> Invoice
                                            </Button>
                                            <Button variant="gold" className="w-full">
                                                Review Hotel
                                            </Button>
                                        </>
                                    )}
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </DashboardLayout>
    );
}

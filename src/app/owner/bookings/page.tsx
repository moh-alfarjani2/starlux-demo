"use client";

import React from "react";
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Search, Filter, Mail, Phone, CalendarDays, MoreHorizontal, CheckCircle2, XCircle, Clock } from "lucide-react";

export default function BookingManagementPage() {
    const bookings = [
        { guest: "Amelie Roche", email: "amelie@example.com", room: "Superior Suite", dates: "Oct 12 — Oct 15", total: "$1,350", status: "Arrived" },
        { guest: "Marcus Vane", email: "marcus.v@provider.com", room: "Deluxe King", dates: "Oct 13 — Oct 18", total: "$3,100", status: "Confirmed" },
        { guest: "Sarah Jenkins", email: "s.jenkins@work.com", room: "Penthouse", dates: "Oct 14 — Oct 20", total: "$8,500", status: "Pending" },
        { guest: "Tom Baker", email: "tom.b@web.io", room: "Ocean View", dates: "Oct 15 — Oct 17", total: "$1,700", status: "Cancelled" },
    ];

    return (
        <DashboardLayout role="owner">
            <div className="space-y-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-secondary">Reservation Management</h1>
                        <p className="text-muted-foreground italic">Track guest arrivals, cancellations, and revenue settlement.</p>
                    </div>
                    <div className="flex gap-3">
                        <Button variant="outline" className="rounded-xl px-6">Export CSV</Button>
                    </div>
                </div>

                {/* Stats Summary Brief */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="p-4 border-l-4 border-l-green-500 bg-white luxury-shadow flex justify-between items-center">
                        <div>
                            <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">Expected Today</p>
                            <p className="text-2xl font-black text-secondary">8 Guests</p>
                        </div>
                        <CheckCircle2 className="text-green-500/20" size={32} />
                    </Card>
                    <Card className="p-4 border-l-4 border-l-blue-500 bg-white luxury-shadow flex justify-between items-center">
                        <div>
                            <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">Active Stays</p>
                            <p className="text-2xl font-black text-secondary">24 Rooms</p>
                        </div>
                        <Clock className="text-blue-500/20" size={32} />
                    </Card>
                    <Card className="p-4 border-l-4 border-l-primary bg-white luxury-shadow flex justify-between items-center">
                        <div>
                            <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">Cancellations (30d)</p>
                            <p className="text-2xl font-black text-secondary">3.2%</p>
                        </div>
                        <XCircle className="text-primary/20" size={32} />
                    </Card>
                </div>

                {/* Search and Filters */}
                <div className="flex flex-col lg:flex-row gap-4">
                    <div className="flex-1 bg-white p-2 rounded-2xl border luxury-shadow flex items-center px-4 gap-3">
                        <Search size={18} className="text-muted-foreground" />
                        <input type="text" placeholder="Search by guest name, email, or booking ID..." className="bg-transparent border-none outline-none text-sm w-full h-10" />
                    </div>
                    <Button variant="outline" className="rounded-xl px-8 gap-2 border-none luxury-shadow bg-white">
                        <Filter size={18} /> Detailed Filters
                    </Button>
                </div>

                {/* Table */}
                <Card className="p-0 border-none luxury-shadow bg-white overflow-hidden">
                    <table className="w-full text-left">
                        <thead className="bg-[#1F2933] text-white text-[10px] font-black uppercase tracking-widest">
                            <tr>
                                <th className="px-6 py-5">Guest Information</th>
                                <th className="px-6 py-5">Room Details</th>
                                <th className="px-6 py-5">Stay Dates</th>
                                <th className="px-6 py-5 text-center">Total Price</th>
                                <th className="px-6 py-5 text-center">Status</th>
                                <th className="px-6 py-5 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y text-xs">
                            {bookings.map((booking, i) => (
                                <tr key={i} className="hover:bg-muted/30 transition-all">
                                    <td className="px-6 py-6">
                                        <div className="font-bold text-secondary text-sm">{booking.guest}</div>
                                        <div className="flex gap-2 mt-1 text-muted-foreground">
                                            <Mail size={12} /> {booking.email}
                                        </div>
                                    </td>
                                    <td className="px-6 py-6 font-medium text-secondary">{booking.room}</td>
                                    <td className="px-6 py-6">
                                        <div className="flex items-center gap-2 font-semibold">
                                            <CalendarDays size={14} className="text-primary" /> {booking.dates}
                                        </div>
                                    </td>
                                    <td className="px-6 py-6 text-center font-black text-secondary text-sm">{booking.total}</td>
                                    <td className="px-6 py-6 text-center">
                                        <span className={cn(
                                            "px-3 py-1 rounded-full font-bold",
                                            booking.status === "Arrived" ? "bg-green-100 text-green-700" :
                                                booking.status === "Confirmed" ? "bg-blue-100 text-blue-700" :
                                                    booking.status === "Pending" ? "bg-orange-100 text-orange-700" : "bg-red-100 text-red-700"
                                        )}>
                                            {booking.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-6 text-right">
                                        <button className="p-2 hover:bg-muted rounded-full transition-colors">
                                            <MoreHorizontal size={20} className="text-muted-foreground" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Card>
            </div>
        </DashboardLayout>
    );
}

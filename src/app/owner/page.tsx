"use client";

import React from "react";
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
    TrendingUp,
    Users,
    Hotel,
    DollarSign,
    Plus,
    ArrowUpRight,
    ArrowDownRight,
    MoreVertical,
    Calendar
} from "lucide-react";
import Link from "next/link";

export default function OwnerDashboardPage() {
    const stats = [
        { label: "Total Revenue", value: "$45,200", change: "+12.5%", isUp: true, icon: <DollarSign />, color: "bg-green-100 text-green-600" },
        { label: "Bookings", value: "128", change: "+5.2%", isUp: true, icon: <Calendar />, color: "bg-blue-100 text-blue-600" },
        { label: "Avg. Occupancy", value: "82%", change: "-2.1%", isUp: false, icon: <TrendingUp />, color: "bg-orange-100 text-orange-600" },
        { label: "Total Properties", value: "4", change: "0%", isUp: true, icon: <Hotel />, color: "bg-primary/10 text-primary" },
    ];

    return (
        <DashboardLayout role="owner">
            <div className="space-y-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-secondary">Proprietor Overview</h1>
                        <p className="text-muted-foreground italic">Monitor your portfolio performance and guest hospitality.</p>
                    </div>
                    <div className="flex gap-3">
                        <Button variant="outline" className="rounded-xl">Export Report</Button>
                        <Button variant="primary" className="rounded-xl px-6 gap-2">
                            <Plus size={18} /> Add New Property
                        </Button>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, i) => (
                        <Card key={i} className="p-6 border-none luxury-shadow bg-white space-y-4">
                            <div className="flex justify-between items-center">
                                <div className={cn("p-2.5 rounded-xl", stat.color)}>
                                    {stat.icon}
                                </div>
                                <div className={cn(
                                    "flex items-center text-xs font-bold rounded-full px-2 py-0.5",
                                    stat.isUp ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                                )}>
                                    {stat.isUp ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                                    {stat.change}
                                </div>
                            </div>
                            <div>
                                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{stat.label}</p>
                                <p className="text-3xl font-black text-secondary">{stat.value}</p>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Layout with Recent and Chart */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Revenue Chart Placeholder */}
                    <div className="lg:col-span-2">
                        <Card className="p-8 border-none luxury-shadow bg-white h-full">
                            <div className="flex justify-between items-center mb-10">
                                <h3 className="text-xl font-bold text-secondary">Revenue Performance</h3>
                                <select className="bg-muted text-xs font-bold p-2 rounded-lg outline-none border-none">
                                    <option>Last 7 Days</option>
                                    <option>Last 30 Days</option>
                                    <option>Last Year</option>
                                </select>
                            </div>
                            <div className="h-64 w-full bg-muted/30 rounded-2xl flex items-center justify-center border-2 border-dashed border-muted-foreground/20">
                                <div className="text-center">
                                    <TrendingUp className="mx-auto text-muted-foreground/30 mb-2" size={48} />
                                    <p className="text-sm font-medium text-muted-foreground italic">Interactive Chart Visualization</p>
                                </div>
                            </div>
                        </Card>
                    </div>

                    {/* Recent Reservations Table */}
                    <div className="lg:col-span-1">
                        <Card className="p-0 border-none luxury-shadow bg-white overflow-hidden h-full">
                            <div className="p-6 border-b flex justify-between items-center bg-secondary text-white">
                                <h3 className="font-bold">Recent Reservations</h3>
                                <button className="text-white/60 hover:text-white transition-all"><MoreVertical size={20} /></button>
                            </div>
                            <div className="divide-y">
                                {[
                                    { guest: "Amelie Roche", room: "Superior Suite", date: "Today", price: "$450", status: "Arrived" },
                                    { guest: "Marcus Vane", room: "Deluxe King", date: "Tomorrow", price: "$620", status: "Pending" },
                                    { guest: "Sarah J.", room: "Penthouse", date: "Oct 15", price: "$1,800", status: "Confirmed" },
                                    { guest: "Tom Baker", room: "Ocean View", date: "Oct 18", price: "$850", status: "Confirmed" },
                                ].map((res, i) => (
                                    <div key={i} className="p-4 flex items-center justify-between hover:bg-muted/30 transition-all cursor-pointer">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
                                                {res.guest.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-secondary">{res.guest}</p>
                                                <p className="text-[10px] text-muted-foreground italic">{res.room}</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-xs font-bold text-secondary">{res.price}</p>
                                            <p className="text-[10px] text-muted-foreground">{res.date}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="p-4 bg-muted/30 text-center">
                                <Link href="/owner/bookings">
                                    <Button variant="ghost" className="text-xs font-bold text-primary">View All Reservations</Button>
                                </Link>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}

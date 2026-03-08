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
    Calendar,
    BarChart3,
    Settings
} from "lucide-react";
import { useSearchParams } from "next/navigation";
import { MOCK_STATS } from "@/lib/mock-data";

export default function OwnerDashboardPage() {
    const searchParams = useSearchParams();
    const activeTab = searchParams.get("tab") || "overview";

    const statsArray = MOCK_STATS.owner || [];
    const stats = statsArray.map(s => ({
        ...s,
        icon: s.label === "Total Revenue" ? <DollarSign /> :
            s.label === "Bookings" ? <Calendar /> :
                s.label === "Avg. Occupancy" ? <TrendingUp /> :
                    <Hotel />,
        color: s.label === "Total Revenue" ? "bg-green-100 text-green-600" :
            s.label === "Bookings" ? "bg-blue-100 text-blue-600" :
                s.label === "Avg. Occupancy" ? "bg-orange-100 text-orange-600" :
                    "bg-primary/10 text-primary"
    }));

    return (
        <DashboardLayout role="owner">
            <div className="space-y-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-secondary">
                            {activeTab === "analytics" ? "Performance Analytics" :
                                activeTab === "settings" ? "Account Settings" : "Proprietor Overview"}
                        </h1>
                        <p className="text-muted-foreground italic">
                            {activeTab === "analytics" ? "In-depth insights into your property revenue and guest trends." :
                                activeTab === "settings" ? "Manage your profile, payout methods, and notifications." :
                                    "Monitor your portfolio performance and guest hospitality."}
                        </p>
                    </div>
                </div>

                {activeTab === "overview" && (
                    <>
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
                                    </div>
                                    <div className="h-64 w-full bg-muted/30 rounded-2xl flex items-center justify-center border-2 border-dashed border-muted-foreground/20">
                                        <div className="text-center text-muted-foreground/30">
                                            <TrendingUp size={48} className="mx-auto" />
                                            <p className="text-sm italic">Interactive Visualization</p>
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
                                                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs uppercase">
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
                                </Card>
                            </div>
                        </div>
                    </>
                )}

                {activeTab === "analytics" && (
                    <Card className="p-12 border-none luxury-shadow bg-white text-center space-y-4">
                        <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <BarChart3 size={40} />
                        </div>
                        <h2 className="text-2xl font-bold text-secondary">Advanced Analytics Dashboard</h2>
                        <p className="text-muted-foreground max-w-md mx-auto italic">
                            This section is populated with real-time data in the production environment.
                            In the demo, you can see how the layout adapts to display conversion rates and visitor metrics.
                        </p>
                        <div className="pt-8 h-48 bg-muted/20 rounded-2xl flex items-center justify-center border-2 border-dashed border-muted-foreground/10">
                            <TrendingUp className="text-muted-foreground/20" size={64} />
                        </div>
                    </Card>
                )}

                {activeTab === "settings" && (
                    <Card className="p-12 border-none luxury-shadow bg-white text-center space-y-4">
                        <div className="w-20 h-20 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Settings size={40} />
                        </div>
                        <h2 className="text-2xl font-bold text-secondary">Owner Preferences & Payouts</h2>
                        <p className="text-muted-foreground max-w-md mx-auto italic">
                            Configure your notification settings, tax information, and preferred payment gateways for seamless revenue management.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                            <div className="p-6 bg-muted/30 rounded-2xl text-left border">
                                <p className="font-bold text-secondary mb-1">Identity Verification</p>
                                <p className="text-xs text-green-600 font-bold uppercase tracking-tight">Verified</p>
                            </div>
                            <div className="p-6 bg-muted/30 rounded-2xl text-left border">
                                <p className="font-bold text-secondary mb-1">Payout Method</p>
                                <p className="text-xs text-muted-foreground">Bank Transfer (**** 4590)</p>
                            </div>
                        </div>
                    </Card>
                )}
            </div>
        </DashboardLayout >
    );
}

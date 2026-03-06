"use client";

import React from "react";
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
    Users,
    Hotel,
    CreditCard,
    ShieldAlert,
    Activity,
    ArrowUp,
    DollarSign,
    CheckCircle2,
    Clock
} from "lucide-react";

export default function AdminDashboardPage() {
    const stats = [
        { label: "Total Revenue", value: "$1.2M", change: "+18%", icon: <DollarSign />, color: "bg-primary/10 text-primary" },
        { label: "Total Hotels", value: "482", change: "+4", icon: <Hotel />, color: "bg-accent/10 text-accent" },
        { label: "Active Users", value: "12,450", change: "+850", icon: <Users />, color: "bg-blue-100 text-blue-600" },
        { label: "Pending Approvals", value: "14", change: "", icon: <ShieldAlert />, color: "bg-red-100 text-red-600" },
    ];

    return (
        <DashboardLayout role="admin">
            <div className="space-y-8">
                <div>
                    <h1 className="text-3xl font-bold text-secondary">System Command Center</h1>
                    <p className="text-muted-foreground italic">Monitor platform growth, commissions, and security updates.</p>
                </div>

                {/* Global Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, i) => (
                        <Card key={i} className="p-6 border-none luxury-shadow bg-white flex items-center gap-4">
                            <div className={cn("p-4 rounded-2xl", stat.color)}>
                                {stat.icon}
                            </div>
                            <div>
                                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{stat.label}</p>
                                <div className="flex items-baseline gap-2">
                                    <p className="text-2xl font-black text-secondary">{stat.value}</p>
                                    {stat.change && <span className="text-[10px] font-bold text-green-600 flex items-center"><ArrowUp size={10} /> {stat.change}</span>}
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Recent System Activity */}
                    <div className="lg:col-span-2 space-y-6">
                        <h2 className="text-xl font-bold text-secondary flex items-center gap-2">
                            <Activity size={20} className="text-primary" /> Recent Activity
                        </h2>
                        <div className="bg-white rounded-2xl luxury-shadow overflow-hidden border">
                            <table className="w-full text-left">
                                <thead className="bg-muted text-xs font-black uppercase tracking-widest text-muted-foreground border-b">
                                    <tr>
                                        <th className="px-6 py-4">Event</th>
                                        <th className="px-6 py-4">Status</th>
                                        <th className="px-6 py-4 text-right">Date</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y text-sm">
                                    {[
                                        { event: "New Hotel Registration: Marriott Marquis", status: "Pending Approval", date: "2 mins ago", type: "warning" },
                                        { event: "Commission Payment: $450 from Hilton Dubai", status: "Completed", date: "15 mins ago", type: "success" },
                                        { event: "User Security Alert: Multiple Login Attempts", status: "Resolved", date: "1 hour ago", type: "info" },
                                        { event: "Booking System Update v2.5.1", status: "Synced", date: "4 hours ago", type: "success" },
                                    ].map((row, i) => (
                                        <tr key={i} className="hover:bg-muted/30 transition-all cursor-pointer">
                                            <td className="px-6 py-4 font-semibold text-secondary">{row.event}</td>
                                            <td className="px-6 py-4">
                                                <span className={cn(
                                                    "text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-tighter",
                                                    row.type === "success" ? "bg-green-100 text-green-700" :
                                                        row.type === "warning" ? "bg-red-100 text-red-700" : "bg-blue-100 text-blue-700"
                                                )}>
                                                    {row.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-right text-muted-foreground">{row.date}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="lg:col-span-1 space-y-6">
                        <h2 className="text-xl font-bold text-secondary">Quick Actions</h2>
                        <div className="grid grid-cols-1 gap-4">
                            <Button variant="outline" className="h-20 justify-start gap-4 p-6 bg-white border-none luxury-shadow hover:luxury-shadow group">
                                <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:scale-110 transition-transform"><CheckCircle2 /></div>
                                <div className="text-left">
                                    <p className="font-bold text-secondary">Approve Hotels</p>
                                    <p className="text-xs text-muted-foreground">14 requests pending</p>
                                </div>
                            </Button>
                            <Button variant="outline" className="h-20 justify-start gap-4 p-6 bg-white border-none luxury-shadow hover:luxury-shadow group">
                                <div className="p-2 bg-accent/10 rounded-lg text-accent group-hover:scale-110 transition-transform"><DollarSign /></div>
                                <div className="text-left">
                                    <p className="font-bold text-secondary">Payouts</p>
                                    <p className="text-xs text-muted-foreground">Manage owner commissions</p>
                                </div>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}

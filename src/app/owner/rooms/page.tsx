"use client";

import React from "react";
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Plus, Edit2, Trash2, Users, BedDouble, Square, Search, Filter, Hotel } from "lucide-react";

export default function RoomManagementPage() {
    const rooms = [
        { type: "Deluxe King Room", capacity: "2 Adults", size: "85m²", price: "$1,200", inventory: 12, status: "Available" },
        { type: "Executive Ocean Suite", capacity: "2 Adults, 1 Child", size: "120m²", price: "$1,850", inventory: 5, status: "Low Stock" },
        { type: "Royal Presidential Villa", capacity: "4 Adults", size: "350m²", price: "$4,500", inventory: 2, status: "Available" },
        { type: "Garden View Twin", capacity: "2 Adults", size: "75m²", price: "$950", inventory: 0, status: "Out of Stock" },
    ];

    return (
        <DashboardLayout role="owner">
            <div className="space-y-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-secondary">Room Inventory</h1>
                        <p className="text-muted-foreground italic">Manage room types, pricing, and live availability.</p>
                    </div>
                    <Button variant="primary" className="gap-2 rounded-xl px-6">
                        <Plus size={18} /> Add Room Type
                    </Button>
                </div>

                {/* Filters bar */}
                <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-2xl border luxury-shadow">
                    <div className="flex items-center gap-4 w-full md:w-fit bg-muted px-4 py-2 rounded-xl border">
                        <Search size={16} className="text-muted-foreground" />
                        <input type="text" placeholder="Search rooms..." className="bg-transparent border-none outline-none text-sm" />
                    </div>
                    <Button variant="outline" className="gap-2 rounded-xl w-full md:w-fit">
                        <Filter size={16} /> Filters
                    </Button>
                </div>

                {/* Rooms Table */}
                <Card className="p-0 border-none luxury-shadow bg-white overflow-hidden">
                    <table className="w-full text-left">
                        <thead className="bg-secondary text-white text-xs font-black uppercase tracking-widest border-b">
                            <tr>
                                <th className="px-6 py-5">Room Type</th>
                                <th className="px-6 py-5 text-center">Capacity</th>
                                <th className="px-6 py-5 text-center">Price</th>
                                <th className="px-6 py-5 text-center">Inventory</th>
                                <th className="px-6 py-5 text-center">Status</th>
                                <th className="px-6 py-5 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {rooms.map((room, i) => (
                                <tr key={i} className="hover:bg-muted/30 transition-all group">
                                    <td className="px-6 py-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center text-primary">
                                                <Hotel size={24} />
                                            </div>
                                            <div>
                                                <p className="font-bold text-secondary">{room.type}</p>
                                                <p className="text-xs text-muted-foreground italic flex items-center gap-1"><Square size={10} /> {room.size}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-6 text-center">
                                        <div className="flex items-center justify-center gap-1.5 text-secondary font-medium">
                                            <Users size={14} className="text-muted-foreground" />
                                            {room.capacity}
                                        </div>
                                    </td>
                                    <td className="px-6 py-6 text-center font-black text-primary">{room.price}</td>
                                    <td className="px-6 py-6 text-center">
                                        <span className="font-bold text-secondary">{room.inventory} Rooms</span>
                                    </td>
                                    <td className="px-6 py-6 text-center">
                                        <span className={cn(
                                            "text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter",
                                            room.status === "Available" ? "bg-green-100 text-green-700" :
                                                room.status === "Low Stock" ? "bg-orange-100 text-orange-700" : "bg-red-100 text-red-700"
                                        )}>
                                            {room.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-6 text-right">
                                        <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <Button variant="ghost" size="icon" className="h-8 w-8 text-blue-600 hover:bg-blue-50"><Edit2 size={16} /></Button>
                                            <Button variant="ghost" size="icon" className="h-8 w-8 text-red-600 hover:bg-red-50"><Trash2 size={16} /></Button>
                                        </div>
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

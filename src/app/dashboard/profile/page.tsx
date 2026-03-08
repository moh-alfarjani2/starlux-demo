"use client";

import React from "react";
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User, Mail, Phone, ShieldCheck, Camera, CreditCard, Bell } from "lucide-react";

import { MOCK_USER_PROFILE } from "@/lib/mock-data";

export default function ProfilePage() {
    const user = MOCK_USER_PROFILE;

    return (
        <DashboardLayout role="guest">
            <div className="space-y-8">
                <div>
                    <h1 className="text-3xl font-bold text-secondary">Account Settings</h1>
                    <p className="text-muted-foreground italic">Manage your personal information and preferences.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column: Avatar & Basic Info */}
                    <div className="lg:col-span-1 space-y-8">
                        <Card className="p-8 text-center border-none luxury-shadow bg-white flex flex-col items-center">
                            <div className="relative group cursor-pointer mb-6">
                                <div className="w-32 h-32 rounded-3xl bg-accent flex items-center justify-center text-accent-foreground text-4xl font-bold luxury-shadow overflow-hidden">
                                    {user.firstName[0]}{user.lastName[0]}
                                </div>
                                <div className="absolute inset-0 bg-black/40 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                                    <Camera size={24} />
                                </div>
                            </div>
                            <h2 className="text-2xl font-bold text-secondary">{user.firstName} {user.lastName}</h2>
                            <p className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">{user.membership}</p>
                            <div className="w-full flex justify-center gap-4 border-t pt-6">
                                <div className="text-center">
                                    <p className="font-black text-secondary text-lg">{user.stats.points}</p>
                                    <p className="text-[10px] text-muted-foreground uppercase font-bold">Reward Points</p>
                                </div>
                                <div className="w-px bg-muted h-10" />
                                <div className="text-center">
                                    <p className="font-black text-secondary text-lg">{user.stats.stays}</p>
                                    <p className="text-[10px] text-muted-foreground uppercase font-bold">Total Stays</p>
                                </div>
                            </div>
                        </Card>

                        <div className="space-y-4">
                            {[
                                { icon: <ShieldCheck size={18} />, label: "Security & Password" },
                                { icon: <CreditCard size={18} />, label: "Payment Methods" },
                                { icon: <Bell size={18} />, label: "Notification Preferences" }
                            ].map((item, i) => (
                                <Button key={i} variant="outline" className="w-full justify-start h-14 bg-white border-none luxury-shadow hover:bg-muted/50 transition-all font-bold text-secondary">
                                    <span className="text-primary mr-3">{item.icon}</span>
                                    {item.label}
                                </Button>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Edit Form */}
                    <div className="lg:col-span-2">
                        <Card className="p-8 border-none luxury-shadow bg-white">
                            <h3 className="text-xl font-bold text-secondary mb-8 border-b pb-4">Personal Information</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div className="space-y-4">
                                    <div className="relative">
                                        <Input label="First Name" defaultValue={user.firstName} />
                                        <User className="absolute right-4 top-11 text-muted-foreground/40" size={16} />
                                    </div>
                                    <div className="relative">
                                        <Input label="Email Address" defaultValue={user.email} type="email" />
                                        <Mail className="absolute right-4 top-11 text-muted-foreground/40" size={16} />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="relative">
                                        <Input label="Last Name" defaultValue={user.lastName} />
                                        <User className="absolute right-4 top-11 text-muted-foreground/40" size={16} />
                                    </div>
                                    <div className="relative">
                                        <Input label="Phone Number" defaultValue={user.phone} />
                                        <Phone className="absolute right-4 top-11 text-muted-foreground/40" size={16} />
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-secondary mb-8 border-b pb-4">Mailing Address</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                                <div className="md:col-span-2">
                                    <Input label="Street Address" defaultValue={user.address} />
                                </div>
                                <Input label="City" defaultValue={user.city} />
                                <Input label="Country" defaultValue={user.country} />
                            </div>

                            <div className="flex justify-end gap-4 border-t pt-8">
                                <Button variant="outline" className="px-8 border-muted-foreground/20">Discard Changes</Button>
                                <Button variant="gold" className="px-10 font-bold shadow-lg">Save Profile</Button>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}

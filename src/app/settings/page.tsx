"use client";

import React, { useState } from "react";
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
    User,
    Bell,
    Shield,
    Camera,
    Check,
    Mail,
    Phone,
    Globe,
    Lock,
    Eye,
    EyeOff,
    Smartphone,
    CreditCard,
    ChevronRight,
    Circle
} from "lucide-react";

type SettingTab = "profile" | "notifications" | "security" | "billing";

export default function SettingsPage() {
    const [activeTab, setActiveTab] = useState<SettingTab>("profile");
    const [showPassword, setShowPassword] = useState(false);

    const tabs = [
        { id: "profile", label: "Profile Info", icon: <User size={18} /> },
        { id: "notifications", label: "Notifications", icon: <Bell size={18} /> },
        { id: "security", label: "Security", icon: <Shield size={18} /> },
    ];

    const notifications = [
        { title: "Booking Confirmed", desc: "Your booking at Marriott Marquis is confirmed.", date: "2 hours ago", unread: true, type: "success" },
        { title: "New Message", desc: "Owner of Hilton Dubai replied to your inquiry.", date: "5 hours ago", unread: true, type: "info" },
        { title: "Price Drop Alert", desc: "Prices for 'Paris Weekend' hotels just dropped by 15%.", date: "1 day ago", unread: false, type: "warning" },
        { title: "Security Login", desc: "New login detected from Safari on Mac OS.", date: "2 days ago", unread: false, type: "security" },
    ];

    return (
        <DashboardLayout role="guest">
            <div className="max-w-5xl mx-auto space-y-8">
                {/* Header */}
                <div>
                    <h1 className="text-3xl font-black text-secondary">Account Infinity</h1>
                    <p className="text-muted-foreground italic">Manage your profile, security, and refined preferences.</p>
                </div>

                <div className="flex flex-col md:flex-row gap-8">
                    {/* Sidebar Tabs */}
                    <div className="w-full md:w-64 space-y-2">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as SettingTab)}
                                className={cn(
                                    "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all duration-300",
                                    activeTab === tab.id
                                        ? "bg-secondary text-white font-bold luxury-shadow"
                                        : "text-muted-foreground hover:bg-muted/50 hover:text-secondary"
                                )}
                            >
                                <span className={cn(activeTab === tab.id ? "text-primary" : "text-muted-foreground/60")}>
                                    {tab.icon}
                                </span>
                                {tab.label}
                                {activeTab === tab.id && <ChevronRight size={14} className="ml-auto" />}
                            </button>
                        ))}
                    </div>

                    {/* Content Area */}
                    <div className="flex-1">
                        {activeTab === "profile" && (
                            <Card className="p-8 border-none luxury-shadow bg-white space-y-8">
                                <div className="flex flex-col sm:flex-row items-center gap-6 pb-8 border-b">
                                    <div className="relative group">
                                        <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black text-3xl luxury-shadow-sm overflow-hidden">
                                            JD
                                        </div>
                                        <button className="absolute bottom-0 right-0 p-2 bg-white rounded-full luxury-shadow text-primary hover:scale-110 transition-transform">
                                            <Camera size={16} />
                                        </button>
                                    </div>
                                    <div className="text-center sm:text-left">
                                        <h3 className="text-xl font-bold text-secondary">John Doe</h3>
                                        <p className="text-sm text-muted-foreground italic">Elite Member • Joined Oct 2023</p>
                                    </div>
                                    <Button variant="primary" className="sm:ml-auto rounded-xl">Save Changes</Button>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">Full Name</label>
                                        <div className="relative">
                                            <Input className="pl-10 h-12 bg-muted/20 border-none rounded-xl focus-visible:ring-primary/30" defaultValue="John Doe" />
                                            <User className="absolute left-3 top-3.5 text-muted-foreground/50" size={18} />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">Email Address</label>
                                        <div className="relative">
                                            <Input className="pl-10 h-12 bg-muted/20 border-none rounded-xl focus-visible:ring-primary/30" defaultValue="john.doe@starlux.com" />
                                            <Mail className="absolute left-3 top-3.5 text-muted-foreground/50" size={18} />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">Phone Number</label>
                                        <div className="relative">
                                            <Input className="pl-10 h-12 bg-muted/20 border-none rounded-xl focus-visible:ring-primary/30" defaultValue="+1 (555) 000-0000" />
                                            <Phone className="absolute left-3 top-3.5 text-muted-foreground/50" size={18} />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">Location</label>
                                        <div className="relative">
                                            <Input className="pl-10 h-12 bg-muted/20 border-none rounded-xl focus-visible:ring-primary/30" defaultValue="New York, USA" />
                                            <Globe className="absolute left-3 top-3.5 text-muted-foreground/50" size={18} />
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        )}

                        {activeTab === "notifications" && (
                            <div className="space-y-4">
                                <Card className="p-6 border-none luxury-shadow bg-white flex justify-between items-center">
                                    <div>
                                        <h3 className="font-bold text-secondary">Notification Center</h3>
                                        <p className="text-xs text-muted-foreground italic">Stay updated with your latest activities.</p>
                                    </div>
                                    <Button variant="outline" size="sm" className="rounded-lg text-[10px] font-black uppercase tracking-widest">Mark All as Read</Button>
                                </Card>

                                <div className="space-y-3">
                                    {notifications.map((notif, i) => (
                                        <Card key={i} className={cn(
                                            "p-5 border-none luxury-shadow-sm transition-all cursor-pointer flex gap-4 items-start",
                                            notif.unread ? "bg-white border-l-4 border-l-primary" : "bg-white/60 opacity-80"
                                        )}>
                                            <div className={cn(
                                                "p-2.5 rounded-xl",
                                                notif.type === "success" ? "bg-green-100 text-green-600" :
                                                    notif.type === "info" ? "bg-blue-100 text-blue-600" :
                                                        notif.type === "warning" ? "bg-orange-100 text-orange-600" : "bg-red-100 text-red-600"
                                            )}>
                                                {notif.type === "security" ? <Shield size={20} /> : <Bell size={20} />}
                                            </div>
                                            <div className="flex-1 space-y-1">
                                                <div className="flex justify-between items-start">
                                                    <p className="font-bold text-secondary text-sm">{notif.title}</p>
                                                    <span className="text-[10px] text-muted-foreground font-medium">{notif.date}</span>
                                                </div>
                                                <p className="text-xs text-muted-foreground leading-relaxed">{notif.desc}</p>
                                            </div>
                                            {notif.unread && (
                                                <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                                            )}
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === "security" && (
                            <Card className="p-8 border-none luxury-shadow bg-white space-y-8">
                                <h3 className="text-xl font-bold text-secondary">Access Control</h3>

                                <div className="space-y-6">
                                    <div className="p-6 bg-muted/20 rounded-2xl border flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <div className="p-3 bg-white rounded-xl luxury-shadow-sm text-primary">
                                                <Smartphone size={24} />
                                            </div>
                                            <div>
                                                <p className="font-bold text-secondary">Two-Factor Authentication</p>
                                                <p className="text-xs text-muted-foreground italic">Add an extra layer of protection to your account.</p>
                                            </div>
                                        </div>
                                        <Button variant="outline" className="rounded-xl border-primary text-primary hover:bg-primary/5">Enable</Button>
                                    </div>

                                    <div className="space-y-4">
                                        <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">Change Password</label>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="relative">
                                                <Input
                                                    type={showPassword ? "text" : "password"}
                                                    className="pl-10 h-12 bg-muted/20 border-none rounded-xl focus-visible:ring-primary/30"
                                                    placeholder="Current Password"
                                                />
                                                <Lock className="absolute left-3 top-3.5 text-muted-foreground/50" size={18} />
                                                <button
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    className="absolute right-3 top-3.5 text-muted-foreground/50 hover:text-primary transition-colors"
                                                >
                                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                                </button>
                                            </div>
                                            <div className="relative">
                                                <Input
                                                    type={showPassword ? "text" : "password"}
                                                    className="pl-10 h-12 bg-muted/20 border-none rounded-xl focus-visible:ring-primary/30"
                                                    placeholder="New Password"
                                                />
                                                <Lock className="absolute left-3 top-3.5 text-muted-foreground/50" size={18} />
                                            </div>
                                        </div>
                                        <Button className="w-full md:w-auto px-8 rounded-xl bg-secondary text-white hover:bg-secondary/90 transition-all font-bold">Update Security</Button>
                                    </div>

                                    <div className="pt-6 border-t font-medium text-xs text-muted-foreground">
                                        <p>Recent Sessions</p>
                                        <div className="mt-4 space-y-3">
                                            <div className="flex items-center justify-between text-[11px]">
                                                <span className="flex items-center gap-2"><Circle size={8} className="fill-green-500 text-green-500" /> Chrome on MacOS • New York (Active)</span>
                                                <span className="text-muted-foreground/40 italic">Current Device</span>
                                            </div>
                                            <div className="flex items-center justify-between text-[11px]">
                                                <span className="flex items-center gap-2"><Circle size={8} className="fill-muted-foreground/20 text-muted-foreground/20" /> Safari on iPhone 15 • London</span>
                                                <span className="text-muted-foreground/40 font-bold uppercase tracking-tighter">Sign Out</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        )}
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}

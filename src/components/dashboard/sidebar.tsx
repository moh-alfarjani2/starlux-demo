"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import {
    LayoutDashboard,
    Settings,
    LogOut,
    ClipboardList,
    Heart,
    User,
    Hotel,
    BarChart3,
    Users,
    MessageSquare,
    Bookmark as BookmarkIcon,
    CalendarDays
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarItem {
    icon: React.ReactNode;
    label: string;
    href: string;
}

interface DashboardSidebarProps {
    role?: "guest" | "owner" | "admin";
    isOpen?: boolean;
    onClose?: () => void;
}

export const DashboardSidebar = ({ role = "guest", isOpen, onClose }: DashboardSidebarProps) => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentFullUrl = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : "");

    const guestItems: SidebarItem[] = [
        { icon: <LayoutDashboard size={20} />, label: "Dashboard", href: "/dashboard" },
        { icon: <CalendarDays size={20} />, label: "My Bookings", href: "/dashboard/bookings" },
        { icon: <Heart size={20} />, label: "Favorites", href: "/dashboard/favorites" },
        { icon: <MessageSquare size={20} />, label: "My Reviews", href: "/dashboard/reviews" },
        { icon: <User size={20} />, label: "Profile", href: "/dashboard/profile" },
    ];

    const ownerItems: SidebarItem[] = [
        { icon: <LayoutDashboard size={20} />, label: "Overview", href: "/owner" },
        { icon: <Hotel size={20} />, label: "My Hotels", href: "/owner/rooms" },
        { icon: <CalendarDays size={20} />, label: "Manage Bookings", href: "/owner/bookings" },
        { icon: <BarChart3 size={20} />, label: "Analytics", href: "/owner?tab=analytics" },
        { icon: <Settings size={20} />, label: "Settings", href: "/owner?tab=settings" },
    ];

    const adminItems: SidebarItem[] = [
        { icon: <LayoutDashboard size={20} />, label: "System Overview", href: "/admin" },
        { icon: <Hotel size={20} />, label: "Hotel Approvals", href: "/admin?tab=approvals" },
        { icon: <Users size={20} />, label: "User Management", href: "/admin?tab=users" },
        { icon: <BarChart3 size={20} />, label: "Financials", href: "/admin?tab=financials" },
    ];

    const items = role === "owner" ? ownerItems : role === "admin" ? adminItems : guestItems;

    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
                    onClick={onClose}
                />
            )}

            <aside className={cn(
                "fixed lg:sticky top-0 left-0 z-50 w-64 h-screen glass border-r flex flex-col p-6 overflow-hidden transition-transform duration-300 lg:translate-x-0",
                isOpen ? "translate-x-0" : "-translate-x-full"
            )}>
                {/* Brand */}
                <Link href="/" className="flex items-center space-x-3 mb-12">
                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center luxury-shadow shrink-0">
                        <span className="text-white font-bold text-xl">S</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-lg font-bold tracking-tight text-secondary">Starlux</span>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-accent">{role}</span>
                    </div>
                </Link>

                {/* Nav Items */}
                <nav className="flex-1 space-y-2">
                    <p className="text-[10px] font-black uppercase text-muted-foreground/60 tracking-[0.2em] mb-4 ml-2">Main Menu</p>
                    {items.map((item) => {
                        const isActive = currentFullUrl === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "relative flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group",
                                    isActive
                                        ? "bg-white text-secondary luxury-shadow font-bold"
                                        : "text-muted-foreground hover:bg-muted/50 hover:text-secondary"
                                )}
                            >
                                {/* Active Accent Bar */}
                                {isActive && (
                                    <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-primary rounded-full" />
                                )}

                                <span className={cn(
                                    "transition-colors",
                                    isActive ? "text-primary" : "text-muted-foreground/60 group-hover:text-primary"
                                )}>
                                    {item.icon}
                                </span>
                                <span className="text-sm tracking-wide">{item.label}</span>
                            </Link>
                        );
                    })}
                </nav>

                {/* Footer Nav */}
                <div className="mt-auto space-y-2">
                    <Link
                        href="/settings"
                        className={cn(
                            "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300",
                            pathname === "/settings"
                                ? "bg-white text-secondary luxury-shadow font-bold"
                                : "text-muted-foreground hover:bg-muted/50 hover:text-secondary"
                        )}
                    >
                        <Settings size={20} className={pathname === "/settings" ? "text-primary" : ""} />
                        <span className="text-sm">Account Settings</span>
                    </Link>
                    <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 transition-all">
                        <LogOut size={20} />
                        <span className="text-sm font-bold">Log Out</span>
                    </button>
                </div>
            </aside>
        </>
    );
};

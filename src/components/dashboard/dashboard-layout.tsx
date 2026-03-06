"use client";

import React, { useState } from "react";
import { DashboardSidebar } from "@/components/dashboard/sidebar";
import { Button } from "@/components/ui/button";
import { Bell, Search, Menu, X } from "lucide-react";

export const DashboardLayout = ({
    children,
    role = "guest"
}: {
    children: React.ReactNode;
    role?: "guest" | "owner" | "admin";
}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="flex bg-muted/20 min-h-screen">
            <DashboardSidebar
                role={role}
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
            />

            <div className="flex-1 flex flex-col min-w-0">
                {/* Dashboard Header */}
                <header className="h-20 bg-white/80 backdrop-blur-md border-b sticky top-0 z-30 px-4 sm:px-8 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4 flex-1">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="lg:hidden"
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        >
                            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
                        </Button>

                        <div className="hidden sm:flex items-center gap-4 bg-muted/50 px-4 py-2 rounded-xl w-full max-w-md border">
                            <Search size={18} className="text-muted-foreground" />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="bg-transparent border-none outline-none text-sm w-full"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="icon" className="relative">
                            <Bell size={20} />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-white" />
                        </Button>
                        <div className="h-8 w-px bg-muted mx-2" />
                        <div className="flex items-center gap-3 cursor-pointer group">
                            <div className="text-right hidden sm:block">
                                <p className="text-sm font-bold text-secondary">John Doe</p>
                                <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-widest">{role}</p>
                            </div>
                            <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-accent-foreground font-bold shadow-sm group-hover:luxury-shadow transition-all">
                                JD
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main className="p-8">
                    {children}
                </main>
            </div>
        </div>
    );
};

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, User, Search, Heart, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
                isScrolled ? "glass py-3 shadow-md" : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center luxury-shadow">
                        <span className="text-white font-bold text-xl">S</span>
                    </div>
                    <span className={cn(
                        "text-2xl font-bold tracking-tight transition-colors",
                        isScrolled ? "text-secondary" : "text-white"
                    )}>
                        Starlux
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className={cn(
                    "hidden md:flex items-center space-x-8 font-medium transition-colors",
                    isScrolled ? "text-secondary/80" : "text-white/90"
                )}>
                    <Link href="/hotels" className="hover:text-primary transition-colors">Find Hotels</Link>
                    <Link href="/hotels" className="hover:text-primary transition-colors">Destinations</Link>
                    <Link href="/hotels" className="hover:text-primary transition-colors">Special Deals</Link>
                    <Link href="/owner" className="flex items-center space-x-1 text-accent hover:text-accent/80">
                        <Briefcase size={18} />
                        <span>List Property</span>
                    </Link>
                </div>

                {/* Action Buttons */}
                <div className="hidden md:flex items-center space-x-4">
                    <Button variant="ghost" size="icon" className={isScrolled ? "text-secondary" : "text-white"}>
                        <Search size={20} />
                    </Button>
                    <Button variant="ghost" size="icon" className={isScrolled ? "text-secondary" : "text-white"}>
                        <Heart size={20} />
                    </Button>
                    <div className="h-6 w-px bg-white/20 mx-2" />
                    <Button variant={isScrolled ? "primary" : "gold"} className="rounded-full">
                        Sign In
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className={cn("md:hidden p-2", isScrolled ? "text-secondary" : "text-white")}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t p-6 flex flex-col space-y-4 shadow-xl animate-in fade-in slide-in-from-top-4">
                    <Link href="/hotels" className="text-lg font-medium text-secondary">Find Hotels</Link>
                    <Link href="/hotels" className="text-lg font-medium text-secondary">Destinations</Link>
                    <Link href="/hotels" className="text-lg font-medium text-secondary">Special Deals</Link>
                    <hr />
                    <Button variant="primary" className="w-full">Sign In</Button>
                    <Button variant="outline" className="w-full">List Your Property</Button>
                </div>
            )}
        </nav>
    );
};

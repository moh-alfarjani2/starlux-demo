"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname, useSearchParams } from "next/navigation";
import { Menu, X, User, Search, Heart, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";
import { DemoAccessModal } from "./demo-access-modal";

export const Navbar = ({ transparent = false }: { transparent?: boolean }) => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Logic: If on a transparent-capable page (like Home hero) and NOT scrolled, use white text on transparent.
    // Otherwise (scrolled OR on a light page), use dark text on glass background.
    const isNavbarDark = isScrolled || !transparent;

    const navLinks = [
        { label: "Find Hotels", href: "/hotels" },
        { label: "Destinations", href: "/hotels?tab=destinations" },
        { label: "Special Deals", href: "/hotels?tab=deals" },
    ];

    return (
        <>
            <nav
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
                    isNavbarDark ? "glass py-3 shadow-md" : "bg-transparent"
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
                            isNavbarDark ? "text-secondary" : "text-white"
                        )}>
                            Starlux
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className={cn(
                        "hidden md:flex items-center space-x-8 font-medium transition-colors",
                        isNavbarDark ? "text-secondary/80" : "text-white/90"
                    )}>
                        {navLinks.map((link) => {
                            const currentPath = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : "");
                            const isActive = currentPath === link.href;

                            return (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className={cn(
                                        "relative py-2 hover:text-primary transition-colors",
                                        isActive && (isNavbarDark ? "text-primary font-bold" : "text-accent font-bold")
                                    )}
                                >
                                    {link.label}
                                    {isActive && (
                                        <div className={cn(
                                            "absolute -bottom-1 left-0 right-0 h-0.5 rounded-full transition-all",
                                            isNavbarDark ? "bg-primary" : "bg-accent"
                                        )} />
                                    )}
                                </Link>
                            );
                        })}
                        <Link href="/owner" className={cn(
                            "flex items-center space-x-1 hover:text-accent/80 transition-colors",
                            pathname.startsWith("/owner") ? "text-accent font-bold" : "text-accent/80"
                        )}>
                            <Briefcase size={18} />
                            <span>List Property</span>
                        </Link>
                    </div>

                    {/* Action Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Button variant="ghost" size="icon" className={isNavbarDark ? "text-secondary" : "text-white"}>
                            <Search size={20} />
                        </Button>
                        <Button variant="ghost" size="icon" className={isNavbarDark ? "text-secondary" : "text-white"}>
                            <Heart size={20} />
                        </Button>
                        <div className={cn("h-6 w-px mx-2 transition-colors", isNavbarDark ? "bg-secondary/10" : "bg-white/20")} />
                        <Button
                            variant={isNavbarDark ? "primary" : "gold"}
                            className="rounded-full"
                            onClick={() => setIsDemoModalOpen(true)}
                        >
                            Sign In
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className={cn("md:hidden p-2", isNavbarDark ? "text-secondary" : "text-white")}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t p-6 flex flex-col space-y-4 shadow-xl animate-in fade-in slide-in-from-top-4">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className={cn(
                                        "text-lg font-medium transition-colors",
                                        isActive ? "text-primary font-bold pl-2 border-l-4 border-primary" : "text-secondary"
                                    )}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                        <hr />
                        <Button variant="primary" className="w-full" onClick={() => { setIsDemoModalOpen(true); setIsMobileMenuOpen(false); }}>Sign In</Button>
                        <Button variant="outline" className="w-full">List Your Property</Button>
                    </div>
                )}
            </nav>

            <DemoAccessModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
        </>
    );
};

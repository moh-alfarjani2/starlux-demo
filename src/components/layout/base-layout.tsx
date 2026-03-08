import React from "react";
import { Navbar } from "./navbar";
import Link from "next/link";

export const BaseLayout = ({ children, transparentNavbar = false }: { children: React.ReactNode, transparentNavbar?: boolean }) => {
    return (
        <div className="font-sans">
            <Navbar transparent={transparentNavbar} />
            <main className="min-h-screen">
                {children}
            </main>
            {/* Footer will be added here */}
            <footer className="bg-secondary text-white py-12 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center space-x-2 mb-6">
                            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">S</span>
                            </div>
                            <span className="text-xl font-bold tracking-tight">Starlux</span>
                        </div>
                        <p className="text-white/60 leading-relaxed">
                            Redefining luxury travel. Discover exclusive hotels and unique experiences across the globe.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold mb-6 text-accent">Discover</h4>
                        <ul className="space-y-4 text-white/70">
                            <li><Link href="/hotels" className="hover:text-white transition-colors">Hotels in Dubai</Link></li>
                            <li><Link href="/hotels" className="hover:text-white transition-colors">London Escapes</Link></li>
                            <li><Link href="/hotels" className="hover:text-white transition-colors">Parisian Luxury</Link></li>
                            <li><Link href="/hotels" className="hover:text-white transition-colors">Beach Resorts</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-6 text-accent">Company</h4>
                        <ul className="space-y-4 text-white/70">
                            <li><Link href="/hotels" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/hotels" className="hover:text-white transition-colors">Contact</Link></li>
                            <li><Link href="/owner" className="hover:text-white transition-colors">Partner with us</Link></li>
                            <li><Link href="/hotels" className="hover:text-white transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-6 text-accent">Newsletter</h4>
                        <p className="text-sm text-white/60 mb-4">Subscribe to receive special offers and travel inspiration.</p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-sm w-full outline-none focus:border-accent"
                            />
                            <button className="bg-primary hover:bg-primary/90 px-4 py-2 rounded-lg transition-all">Join</button>
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 text-center text-white/40 text-sm">
                    © <span suppressHydrationWarning>{new Date().getFullYear()}</span> Starlux Luxury Hotels. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

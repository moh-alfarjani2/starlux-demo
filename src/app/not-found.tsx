import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MoveLeft, HelpCircle } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-secondary flex items-center justify-center p-6 text-white text-center">
            <div className="max-w-md w-full animate-in fade-in zoom-in duration-700">
                <div className="w-24 h-24 bg-primary/20 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-primary/30 luxury-shadow">
                    <HelpCircle className="text-primary" size={48} />
                </div>

                <h1 className="text-8xl font-black text-white/10 mb-[-2rem] tracking-tighter">404</h1>
                <h2 className="text-4xl font-bold mb-6 text-accent">Destination Not Found</h2>

                <p className="text-white/60 mb-12 text-lg italic leading-relaxed">
                    It seems the luxury escape you are looking for has moved or does not exist in our current collection.
                </p>

                <div className="space-y-4">
                    <Link to="/">
                        <Button variant="gold" className="w-full py-7 text-lg rounded-xl font-bold">
                            <MoveLeft className="mr-2" size={20} /> Return to Homepage
                        </Button>
                    </Link>
                    <Link to="/hotels">
                        <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
                            Explore All Hotels
                        </Button>
                    </Link>
                </div>

                <div className="mt-16 flex items-center justify-center gap-2 opacity-50">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">S</span>
                    </div>
                    <span className="text-sm font-bold tracking-tight">Starlux Concierge</span>
                </div>
            </div>
        </div>
    );
}

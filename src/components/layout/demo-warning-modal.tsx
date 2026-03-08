"use client";

import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Info, ShieldAlert, CheckCircle2, Check } from "lucide-react";

export function DemoWarningModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [dontShowAgain, setDontShowAgain] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const hasSeenWarning = localStorage.getItem("starlux_demo_dismissed_final");
        if (!hasSeenWarning) {
            // Small delay to let the initial animation play
            const timer = setTimeout(() => setIsOpen(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleDismiss = () => {
        if (dontShowAgain) {
            localStorage.setItem("starlux_demo_dismissed_final", "true");
        }
        setIsOpen(false);
    };

    if (!isMounted) return null;

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="sm:max-w-3xl p-0 overflow-hidden border-none bg-transparent shadow-none w-[95vw]">
                {/* max-h-[90vh] ensures the modal doesn't exceed screen height, and flex col allows internal scrolling */}
                <div className="bg-white rounded-3xl overflow-hidden luxury-shadow flex flex-col max-h-[90vh]">

                    {/* Fixed Header Banner */}
                    <div className="bg-secondary p-6 sm:p-8 text-center relative overflow-hidden shrink-0">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -mr-10 -mt-10" />
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl -ml-10 -mb-10" />

                        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-md border border-white/20">
                            <Info size={32} className="text-white" />
                        </div>
                        {/* Replaced h2 with DialogTitle for accessibility */}
                        <DialogTitle className="text-2xl font-black text-white tracking-tight">
                            Project Demonstration
                        </DialogTitle>
                        <p className="text-white/70 text-sm mt-2 flex items-center justify-center gap-2">
                            <ShieldAlert size={14} className="text-accent" /> Read before proceeding
                        </p>
                    </div>

                    {/* Scrollable Content */}
                    <div className="p-6 sm:p-8 space-y-6 overflow-y-auto grow custom-scrollbar">
                        <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                            <p>
                                Welcome to <strong>Starlux Hotel Booking</strong>. Please note that this is a <strong className="text-secondary">frontend showcase / portfolio project</strong> designed to demonstrate UI/UX capabilities, state management, and modern web development techniques.
                            </p>

                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                                <li className="flex items-start gap-3 bg-muted/40 p-4 rounded-xl border border-muted-foreground/10 hover:border-primary/30 transition-colors">
                                    <CheckCircle2 size={20} className="text-green-600 shrink-0 mt-0.5" />
                                    <span className="text-sm"><strong>No Real Database:</strong> All data (hotels, bookings, users) is hardcoded or mocked in memory.</span>
                                </li>
                                <li className="flex items-start gap-3 bg-muted/40 p-4 rounded-xl border border-muted-foreground/10 hover:border-primary/30 transition-colors">
                                    <CheckCircle2 size={20} className="text-green-600 shrink-0 mt-0.5" />
                                    <span className="text-sm"><strong>Interactive UI:</strong> You can book rooms, switch roles (Guest, Owner, Admin), and navigate dashboards.</span>
                                </li>
                                <li className="flex items-start gap-3 bg-muted/40 p-4 rounded-xl border border-muted-foreground/10 hover:border-primary/30 transition-colors sm:col-span-2">
                                    <CheckCircle2 size={20} className="text-green-600 shrink-0 mt-0.5" />
                                    <span className="text-sm"><strong>Demo Purpose Only:</strong> No real payments or real reservations are processed.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Fixed Footer Actions */}
                    <div className="p-6 sm:p-8 border-t bg-gray-50/80 backdrop-blur-sm shrink-0 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <label className="flex items-center gap-3 cursor-pointer text-sm text-muted-foreground hover:text-secondary group select-none transition-colors">
                            <div className="relative flex items-center justify-center w-5 h-5 border-2 rounded-md border-muted-foreground/40 group-hover:border-primary transition-colors bg-white shadow-sm shrink-0">
                                <input
                                    type="checkbox"
                                    className="peer sr-only"
                                    checked={dontShowAgain}
                                    onChange={(e) => setDontShowAgain(e.target.checked)}
                                />
                                <Check size={14} className="text-primary opacity-0 peer-checked:opacity-100 transition-opacity" strokeWidth={3} />
                            </div>
                            <span className="font-medium text-left">Do not show this message again</span>
                        </label>

                        <Button
                            onClick={handleDismiss}
                            className="w-full sm:w-auto px-8 h-12 rounded-xl bg-primary hover:bg-primary/90 text-white font-bold luxury-shadow-sm transition-all focus:ring-2 focus:ring-primary/50 shrink-0"
                        >
                            I Understand, Continue
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}

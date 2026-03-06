"use client";

import React from "react";
import { BaseLayout } from "@/components/layout/base-layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Download, Printer, Home, Calendar, MapPin, User, Mail, CreditCard, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function ConfirmationPage() {
    const [reservationId, setReservationId] = React.useState<string>("");

    React.useEffect(() => {
        setReservationId("SLX-" + Math.random().toString(36).substring(2, 9).toUpperCase());
    }, []);

    return (
        <BaseLayout>
            <div className="bg-muted/30 pt-32 pb-20 px-6">
                <div className="max-w-3xl mx-auto">
                    {/* Success Message */}
                    <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                            <CheckCircle2 className="text-green-600" size={48} />
                        </div>
                        <h1 className="text-4xl font-bold text-secondary mb-4">Reservation Confirmed!</h1>
                        <p className="text-muted-foreground text-lg italic">
                            Thank you for choosing Starlux. Your luxury escape awaits.
                        </p>
                        <div className="mt-6 flex justify-center items-center gap-2">
                            <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Booking ID:</span>
                            <span className="text-xl font-bold text-primary font-mono select-all bg-white px-4 py-1 rounded-lg border luxury-shadow">
                                {reservationId}
                            </span>
                        </div>
                    </div>

                    {/* Ticket/Voucher Card */}
                    <Card className="overflow-hidden border-none luxury-shadow bg-white animate-in fade-in duration-1000 delay-200">
                        <div className="bg-secondary p-8 text-white flex justify-between items-center border-b-4 border-accent/30">
                            <div>
                                <h2 className="text-2xl font-bold tracking-tight">Booking Voucher</h2>
                                <p className="text-white/60 text-sm italic">Please present this digital voucher upon arrival.</p>
                            </div>
                            <div className="text-right">
                                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-2">
                                    <span className="text-white font-bold text-xl">S</span>
                                </div>
                                <span className="text-xs font-bold uppercase tracking-widest text-accent">Starlux Premium</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2">
                            {/* Left Side: Stay Details */}
                            <div className="p-8 border-r">
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="p-3 bg-muted rounded-xl text-primary h-fit"><Home size={20} /></div>
                                        <div>
                                            <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Property</h3>
                                            <p className="font-bold text-secondary text-lg">The Grand Burj Resort</p>
                                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                                <MapPin size={12} /> Downtown Dubai, UAE
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="p-3 bg-muted rounded-xl text-primary h-fit"><Calendar size={20} /></div>
                                        <div className="grid grid-cols-2 gap-8">
                                            <div>
                                                <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Check-in</h3>
                                                <p className="font-bold text-secondary">Oct 12, 2026</p>
                                                <p className="text-[10px] text-muted-foreground">From 14:00</p>
                                            </div>
                                            <div>
                                                <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Check-out</h3>
                                                <p className="font-bold text-secondary">Oct 15, 2026</p>
                                                <p className="text-[10px] text-muted-foreground">Until 12:00</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="p-3 bg-muted rounded-xl text-primary h-fit"><User size={20} /></div>
                                        <div>
                                            <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Guest Details</h3>
                                            <p className="font-bold text-secondary">Mr. John Doe</p>
                                            <p className="text-sm text-muted-foreground">2 Adults • Deluxe King Room</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side: Payment & Actions */}
                            <div className="p-8 bg-muted/20">
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Payment Summary</h3>
                                        <div className="space-y-2">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-secondary/60">Paid via Credit Card</span>
                                                <span className="font-bold text-secondary font-mono">**** 4242</span>
                                            </div>
                                            <div className="flex justify-between items-end pt-2">
                                                <span className="text-secondary font-bold">Total Amount</span>
                                                <span className="text-2xl font-black text-primary">$3,800.00</span>
                                            </div>
                                        </div>
                                    </div>

                                    <hr className="border-secondary/10" />

                                    <div className="space-y-3 pt-4">
                                        <Button variant="outline" className="w-full justify-start border-muted-foreground/20 hover:bg-white bg-white">
                                            <Download className="mr-3" size={18} /> Download PDF Invoice
                                        </Button>
                                        <Button variant="outline" className="w-full justify-start border-muted-foreground/20 hover:bg-white bg-white">
                                            <Printer className="mr-3" size={18} /> Print Confirmation
                                        </Button>
                                        <Link href="/" className="block">
                                            <Button variant="primary" className="w-full">
                                                Back to Homepage
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Accent */}
                        <div className="bg-accent/10 p-4 border-t border-accent/20 flex items-center justify-center gap-2">
                            <Mail className="text-accent" size={16} />
                            <p className="text-xs text-secondary font-medium">A copy of this confirmation has been sent to john@example.com</p>
                        </div>
                    </Card>

                    {/* Additional Info Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                        <Card className="p-6 border-none luxury-shadow bg-white flex items-start gap-4 hover:border-r-4 hover:border-primary transition-all">
                            <div className="p-2 bg-primary/10 rounded-lg text-primary"><CreditCard size={20} /></div>
                            <div>
                                <h4 className="font-bold text-secondary mb-1">Important Info</h4>
                                <p className="text-xs text-muted-foreground leading-relaxed italic">
                                    A security deposit of $500 will be pre-authorized on your card at check-in. This is fully refundable.
                                </p>
                            </div>
                        </Card>
                        <Card className="p-6 border-none luxury-shadow bg-white flex items-start gap-4 hover:border-r-4 hover:border-accent transition-all">
                            <div className="p-2 bg-accent/10 rounded-lg text-accent"><CheckCircle2 size={20} /></div>
                            <div>
                                <h4 className="font-bold text-secondary mb-1">Manage Booking</h4>
                                <Link href="/dashboard/bookings" className="text-xs text-primary font-bold inline-flex items-center hover:underline">
                                    Go to my dashboard <ChevronRight size={12} />
                                </Link>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </BaseLayout>
    );
}

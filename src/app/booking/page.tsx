"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { BaseLayout } from "@/components/layout/base-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ShieldCheck, Info, CreditCard, ChevronRight, Calendar, Users, MapPin } from "lucide-react";
import Link from "next/link";

export default function BookingPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.push("/payment");
    };

    return (
        <BaseLayout>
            <div className="bg-muted/30 pt-32 pb-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <form onSubmit={handleSubmit}>
                        {/* Progress Header */}
                        <div className="flex items-center justify-center gap-4 mb-12">
                            <div className="flex items-center gap-2 text-primary font-bold">
                                <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm">1</span>
                                <span>Details</span>
                            </div>
                            <div className="w-12 h-px bg-muted" />
                            <div className="flex items-center gap-2 text-muted-foreground font-medium">
                                <span className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-sm text-secondary">2</span>
                                <span>Payment</span>
                            </div>
                            <div className="w-12 h-px bg-muted" />
                            <div className="flex items-center gap-2 text-muted-foreground font-medium">
                                <span className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-sm text-secondary">3</span>
                                <span>Confirm</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Left Column: Form */}
                            <div className="md:col-span-2 space-y-8">
                                <Card className="p-8 luxury-shadow border-none bg-white">
                                    <h2 className="text-2xl font-bold text-secondary mb-8 flex items-center gap-2">
                                        <span className="p-2 bg-primary/10 rounded-lg text-primary"><Info size={20} /></span>
                                        Guest Information
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <Input
                                            label="First Name"
                                            placeholder="e.g. John"
                                            required
                                            value={formData.firstName}
                                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                        />
                                        <Input
                                            label="Last Name"
                                            placeholder="e.g. Doe"
                                            required
                                            value={formData.lastName}
                                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                        />
                                        <Input
                                            label="Email Address"
                                            placeholder="john@example.com"
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                        <Input
                                            label="Phone Number"
                                            placeholder="+971 00 000 0000"
                                            required
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        />
                                    </div>
                                    <div className="mt-6">
                                        <label className="text-sm font-medium text-secondary-foreground/80 block mb-2">Special Requests (Optional)</label>
                                        <textarea
                                            className="w-full min-h-[120px] rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                                            placeholder="e.g. Early check-in, dietary requirements..."
                                        ></textarea>
                                    </div>
                                </Card>

                                <Card className="p-8 luxury-shadow border-none bg-white">
                                    <h2 className="text-2xl font-bold text-secondary mb-8 flex items-center gap-2">
                                        <span className="p-2 bg-primary/10 rounded-lg text-primary"><CreditCard size={20} /></span>
                                        Secure Your Booking
                                    </h2>
                                    <p className="text-muted-foreground mb-6 italic text-sm">
                                        Your reservation is protected. You won't be charged until the final step.
                                    </p>
                                    <div className="flex flex-col gap-4">
                                        <Button type="submit" variant="gold" size="lg" className="w-full py-7 font-bold text-lg rounded-xl">
                                            Proceed to Payment <ChevronRight className="ml-2" />
                                        </Button>
                                        <p className="text-center text-xs text-muted-foreground flex items-center justify-center gap-1">
                                            <ShieldCheck size={14} className="text-primary" /> Encrypted & Secure SSL Connection
                                        </p>
                                    </div>
                                </Card>
                            </div>

                            {/* Right Column: Summary Card */}
                            <div className="md:col-span-1">
                                <div className="grid gap-6 sticky top-28">
                                    <Card className="overflow-hidden border-none luxury-shadow bg-white">
                                        <div className="h-40 w-full relative">
                                            <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Hotel" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                            <div className="absolute bottom-4 left-4 text-white">
                                                <h3 className="font-bold text-lg">The Grand Burj Resort</h3>
                                                <div className="flex items-center gap-1 text-xs opacity-80">
                                                    <MapPin size={10} /> Dubai, UAE
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-6 space-y-6">
                                            <div className="space-y-3">
                                                <div className="flex justify-between text-sm">
                                                    <span className="text-muted-foreground flex items-center gap-2"><Calendar size={14} /> Dates</span>
                                                    <span className="font-bold text-secondary">Oct 12 — Oct 15</span>
                                                </div>
                                                <div className="flex justify-between text-sm">
                                                    <span className="text-muted-foreground flex items-center gap-2"><Users size={14} /> Guests</span>
                                                    <span className="font-bold text-secondary">2 Adults</span>
                                                </div>
                                            </div>

                                            <hr />

                                            <div className="space-y-2">
                                                <h4 className="text-xs font-bold uppercase tracking-widest text-primary">Price Details</h4>
                                                <div className="flex justify-between text-sm">
                                                    <span className="text-muted-foreground">$1,200 x 3 nights</span>
                                                    <span className="font-bold text-secondary">$3,600</span>
                                                </div>
                                                <div className="flex justify-between text-sm">
                                                    <span className="text-muted-foreground">Cleaning Fee</span>
                                                    <span className="font-bold text-secondary">$80</span>
                                                </div>
                                                <div className="flex justify-between text-sm">
                                                    <span className="text-muted-foreground">Service Fee</span>
                                                    <span className="font-bold text-secondary">$120</span>
                                                </div>
                                            </div>

                                            <hr className="border-secondary/10" />

                                            <div className="flex justify-between items-end">
                                                <span className="text-lg font-bold text-secondary">Total (USD)</span>
                                                <span className="text-3xl font-black text-primary">$3,800</span>
                                            </div>
                                        </div>
                                    </Card>

                                    <Card className="p-4 bg-accent/10 border-accent/20 flex gap-3">
                                        <Info className="text-accent shrink-0" size={20} />
                                        <p className="text-xs text-accent-foreground/80 leading-tight italic">
                                            Free cancellation until Oct 10. Change of plans? No problem.
                                        </p>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </BaseLayout>
    );
}

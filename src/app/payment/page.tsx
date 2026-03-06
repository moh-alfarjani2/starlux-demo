"use client";

import React from "react";
import { BaseLayout } from "@/components/layout/base-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Lock, CreditCard, ShieldCheck, ChevronLeft, CreditCard as CardIcon } from "lucide-react";
import Link from "next/link";

export default function PaymentPage() {
    return (
        <BaseLayout>
            <div className="bg-muted/30 pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Progress Header */}
                    <div className="flex items-center justify-center gap-4 mb-12">
                        <div className="flex items-center gap-2 text-primary font-bold opacity-60">
                            <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm">✓</span>
                            <span>Details</span>
                        </div>
                        <div className="w-12 h-px bg-primary/40" />
                        <div className="flex items-center gap-2 text-primary font-bold">
                            <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm">2</span>
                            <span>Payment</span>
                        </div>
                        <div className="w-12 h-px bg-muted" />
                        <div className="flex items-center gap-2 text-muted-foreground font-medium">
                            <span className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-sm text-secondary">3</span>
                            <span>Confirm</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Payment Form */}
                        <div className="space-y-8">
                            <div>
                                <Link href="/booking" className="text-sm font-medium text-primary hover:underline flex items-center gap-1 mb-6">
                                    <ChevronLeft size={16} /> Edit guest information
                                </Link>
                                <h2 className="text-3xl font-bold text-secondary mb-2">Payment Method</h2>
                                <p className="text-muted-foreground italic">Add your card details to secure your reservation.</p>
                            </div>

                            <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <button className="flex items-center justify-center gap-2 p-4 border-2 border-primary bg-primary/5 rounded-xl transition-all">
                                        <CardIcon className="text-primary" />
                                        <span className="font-bold text-secondary">Credit Card</span>
                                    </button>
                                    <button className="flex items-center justify-center gap-2 p-4 border-2 border-transparent bg-white rounded-xl hover:border-muted transition-all">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-5" alt="PayPal" />
                                    </button>
                                </div>

                                <Card className="p-8 luxury-shadow border-none bg-white space-y-6">
                                    <Input label="Cardholder Name" placeholder="Mr. John Doe" />
                                    <div className="relative">
                                        <Input label="Card Number" placeholder="0000 0000 0000 0000" />
                                        <div className="absolute right-4 top-11 flex gap-1 items-center">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-3" alt="Visa" />
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-4" alt="MC" />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <Input label="Expiry Date" placeholder="MM / YY" />
                                        <div className="relative">
                                            <Input label="CVV" placeholder="123" />
                                            <Lock className="absolute right-4 top-11 text-muted-foreground" size={16} />
                                        </div>
                                    </div>
                                </Card>
                            </div>

                            <div className="p-6 bg-primary/5 rounded-2xl flex gap-4 border border-primary/10">
                                <ShieldCheck className="text-primary shrink-0" size={24} />
                                <p className="text-sm text-secondary/80 leading-relaxed italic">
                                    Your payment information is processed securely. We do not store your credit card details on our servers.
                                </p>
                            </div>
                        </div>

                        {/* Summary & Final Action */}
                        <div className="space-y-8 lg:pt-24">
                            <Card className="p-8 luxury-shadow border-none bg-secondary text-white">
                                <h3 className="text-xl font-bold mb-6 text-accent">Order Summary</h3>
                                <div className="space-y-4 mb-8">
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-white/60">Property:</span>
                                        <span className="font-bold underline decoration-accent/30 underline-offset-4">The Grand Burj Resort</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-white/60">Dates:</span>
                                        <span className="font-bold">Oct 12 — Oct 15</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-white/60">Guests:</span>
                                        <span className="font-bold">2 Adults</span>
                                    </div>
                                </div>

                                <hr className="border-white/10 mb-8" />

                                <div className="space-y-3 mb-8">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-white/60">Subtotal</span>
                                        <span className="font-bold">$3,680.00</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-white/60">Inclusive Taxes</span>
                                        <span className="font-bold">$120.00</span>
                                    </div>
                                </div>

                                <div className="flex justify-between items-end mb-8">
                                    <span className="text-lg font-bold">You Pay</span>
                                    <span className="text-4xl font-black text-accent">$3,800.00</span>
                                </div>

                                <Link href="/confirmation">
                                    <Button variant="gold" size="lg" className="w-full py-8 text-xl font-bold rounded-xl active:scale-95 transition-all">
                                        Pay Now
                                    </Button>
                                </Link>
                                <p className="text-center text-[10px] text-white/40 mt-6 uppercase tracking-widest font-bold">
                                    Billed in USD • Non-Refundable Offer
                                </p>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </BaseLayout>
    );
}

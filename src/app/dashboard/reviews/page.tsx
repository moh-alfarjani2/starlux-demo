"use client";

import React from "react";
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MessageSquare, Calendar, ExternalLink, ThumbsUp } from "lucide-react";

export default function ReviewsPage() {
    const reviews = [
        {
            id: "1",
            hotel: "The Grand Burj Resort",
            date: "Oct 20, 2026",
            rating: 5,
            comment: "Absolutely breathtaking! The service was impeccable and the views of Dubai were unmatched. Can't wait for my next visit.",
            likes: 12
        },
        {
            id: "2",
            hotel: "Alpine Peak Lodge",
            date: "Jan 25, 2026",
            rating: 4,
            comment: "Stunning location and great skiing access. The spa was incredible. Only minor issue was the restaurant being fully booked one night.",
            likes: 8
        }
    ];

    return (
        <DashboardLayout role="guest">
            <div className="space-y-8">
                <div>
                    <h1 className="text-3xl font-bold text-secondary">My Reviews</h1>
                    <p className="text-muted-foreground italic">Sharing your premium experiences with the Starlux community.</p>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    {reviews.map((review) => (
                        <Card key={review.id} className="p-8 border-none luxury-shadow bg-white hover:border-r-4 hover:border-primary transition-all group">
                            <div className="flex flex-col md:flex-row justify-between gap-6">
                                <div className="space-y-4 flex-1">
                                    <div className="flex items-center gap-4">
                                        <div className="flex text-accent">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} size={16} className={i < review.rating ? "fill-accent" : "text-muted-foreground/30"} />
                                            ))}
                                        </div>
                                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium italic">
                                            <Calendar size={14} /> {review.date}
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors underline decoration-accent/0 group-hover:decoration-accent/20 underline-offset-8">
                                        {review.hotel}
                                    </h3>
                                    <p className="text-secondary/70 leading-relaxed italic text-lg">
                                        "{review.comment}"
                                    </p>
                                    <div className="flex items-center gap-4 pt-4">
                                        <button className="flex items-center gap-1.5 text-xs font-bold text-muted-foreground hover:text-primary transition-colors">
                                            <ThumbsUp size={14} /> {review.likes} people found this helpful
                                        </button>
                                    </div>
                                </div>
                                <div className="md:w-48 flex flex-col gap-2 shrink-0">
                                    <Button variant="outline" className="w-full gap-2 border-muted-foreground/20 hover:bg-muted/50">
                                        <ExternalLink size={16} /> Edit Review
                                    </Button>
                                    <Button variant="ghost" className="w-full text-red-500 hover:bg-red-50">
                                        Delete
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    ))}

                    <Card className="p-12 border-2 border-dashed border-muted-foreground/20 bg-muted/5 flex flex-col items-center justify-center text-center">
                        <MessageSquare size={48} className="text-muted-foreground/20 mb-4" />
                        <h3 className="text-xl font-bold text-secondary/60">Have a recent stay?</h3>
                        <p className="text-muted-foreground text-sm mb-6">Your feedback helps owners maintain elite standards.</p>
                        <Button variant="gold" className="rounded-xl px-10">Write a Review</Button>
                    </Card>
                </div>
            </div>
        </DashboardLayout>
    );
}

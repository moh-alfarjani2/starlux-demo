"use client";

import React, { Suspense } from "react";
import HotelDetailClient from "./hotel-detail-client";

export default function HotelViewPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-secondary flex items-center justify-center text-white">Loading Luxury Stay...</div>}>
            <HotelDetailClient />
        </Suspense>
    );
}

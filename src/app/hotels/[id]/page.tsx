import { MOCK_HOTELS } from "@/lib/mock-data";
import HotelDetailClient from "./hotel-detail-client";

// Required for Next.js static export with dynamic routes
export function generateStaticParams() {
    return MOCK_HOTELS.map((hotel) => ({
        id: hotel.id,
    }));
}

export default function HotelDetailsPage() {
    return <HotelDetailClient />;
}

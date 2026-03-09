export interface Hotel {
    id: string;
    name: string;
    location: string;
    price: number;
    rating: number;
    image: string;
    reviews: number;
    amenities: string[];
    description: string;
    rooms?: Room[];
}

export interface Room {
    name: string;
    price: number;
    size: string;
    guests: string;
    bed: string;
    image: string;
    description: string;
}

export const MOCK_HOTELS: Hotel[] = [
    {
        id: "1",
        name: "The Grand Burj Resort & Spa",
        location: "Dubai, UAE",
        price: 1200,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1200",
        reviews: 1240,
        amenities: ["Free WiFi", "Infinity Pool", "Spa", "Private Beach", "Michelin Breakfast"],
        description: "Indulge in unparalleled luxury at The Grand Burj Resort, where world-class service meets breathtaking Arabian architecture. Located in the heart of Dubai, our resort offers stunning views of the Burj Khalifa and the Dubai Fountain.",
        rooms: [
            {
                name: "Deluxe King Room",
                price: 1200,
                size: "85m²",
                guests: "2 Adults",
                bed: "1 King Bed",
                image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=400",
                description: "Elegant and spacious room featuring a floor-to-ceiling city view and a marble bathroom."
            },
            {
                name: "Executive Ocean Suite",
                price: 1850,
                size: "120m²",
                guests: "2 Adults, 1 Child",
                bed: "1 King Bed, 1 Sofa Bed",
                image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=400",
                description: "Panoramic ocean views with a separate living area and exclusive lounge access."
            }
        ]
    },
    {
        id: "2",
        name: "Royal Parisian Palace",
        location: "Paris, France",
        price: 850,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=1200",
        reviews: 890,
        amenities: ["Classic Architecture", "Michelin Dining", "Valet Parking", "Art Gallery"],
        description: "Experience the timeless elegance of Paris at the Royal Parisian Palace, steps away from the Louvre and the Champs-Élysées.",
        rooms: [
            {
                name: "Classic Parisian Room",
                price: 850,
                size: "45m²",
                guests: "2 Adults",
                bed: "1 Queen Bed",
                image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=400",
                description: "Cozy and charming room with traditional French décor and street views."
            }
        ]
    },
    {
        id: "3",
        name: "Oceanic Blue Maldives",
        location: "Malé, Maldives",
        price: 2400,
        rating: 5.0,
        image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&q=80&w=1200",
        reviews: 450,
        amenities: ["Overwater Villa", "All inclusive", "Diving Center", "Private Butler"],
        description: "A tropical paradise awaits at Oceanic Blue Maldives, featuring luxurious overwater villas and crystal clear turquoise waters.",
        rooms: []
    },
    {
        id: "4",
        name: "London Bridge Historic Stay",
        location: "London, UK",
        price: 550,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200",
        reviews: 2100,
        amenities: ["Heritage Building", "Afternoon Tea", "City Tours", "Gym"],
        description: "Immerse yourself in history at London Bridge Historic Stay, offering a perfect blend of classic charm and modern comfort.",
        rooms: []
    }
];

export const MOCK_STATS = {
    guest: [
        { label: "Total Bookings", value: "12", color: "bg-primary/10" },
        { label: "Wishlist", value: "24", color: "bg-red-50" },
        { label: "Reviews", value: "8", color: "bg-accent/10" },
        { label: "Points", value: "2.4k", color: "bg-green-50" },
    ],
    owner: [
        { label: "Total Revenue", value: "$45,200", change: "+12.5%", isUp: true },
        { label: "Bookings", value: "128", change: "+5.2%", isUp: true },
        { label: "Avg. Occupancy", value: "82%", change: "-2.1%", isUp: false },
        { label: "Total Properties", value: "4", change: "0%", isUp: true },
    ],
    admin: [
        { label: "Total Revenue", value: "$1.2M", change: "+18%", isUp: true },
        { label: "Total Hotels", value: "482", change: "+4", isUp: true },
        { label: "Active Users", value: "12,450", change: "+850", isUp: true },
        { label: "Pending Approvals", value: "14", change: "", isUp: false },
    ]
};

export interface Booking {
    id: string;
    hotel: string;
    location: string;
    dates: string;
    price: string;
    status: string;
    image: string;
    isUpcoming: boolean;
}

export interface UserProfile {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    country: string;
    membership: string;
    stats: {
        points: string;
        stays: number;
    }
}

export const MOCK_BOOKINGS: Booking[] = [
    {
        id: "SLX-A1B2C3D4",
        hotel: "The Grand Burj Resort",
        location: "Dubai, UAE",
        dates: "Oct 12 — Oct 15, 2026",
        price: "$3,800",
        status: "Confirmed",
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=400",
        isUpcoming: true
    },
    {
        id: "SLX-X5Y6Z7W8",
        hotel: "Alpine Peak Lodge",
        location: "Zermatt, Switzerland",
        dates: "Jan 15 — Jan 20, 2026",
        price: "$4,500",
        status: "Completed",
        image: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&q=80&w=400",
        isUpcoming: false
    }
];

export const MOCK_FAVORITES = [
    {
        id: "1",
        name: "The Grand Burj Resort",
        location: "Dubai, UAE",
        price: 1200,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=400",
    },
    {
        id: "2",
        name: "Alpine Peak Lodge",
        location: "Zermatt, Switzerland",
        price: 850,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&q=80&w=400",
    }
];

export const MOCK_USER_PROFILE: UserProfile = {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+971 50 123 4567",
    address: "Penthouse 42, Burj Vista",
    city: "Dubai",
    country: "United Arab Emirates",
    membership: "Platinum Elite Member",
    stats: {
        points: "24k",
        stays: 12
    }
};

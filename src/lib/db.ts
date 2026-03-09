import { MOCK_HOTELS, MOCK_BOOKINGS, MOCK_USER_PROFILE, Hotel, Booking, UserProfile } from "./mock-data";

export interface DBStructure {
    hotels: Hotel[];
    bookings: any[];
    profile: any;
    favorites: string[]; // Hotel IDs
    lastUpdated: string;
}

export const DB_KEY = "starlux_demo_db";

export const getDB = (): DBStructure => {
    if (typeof window === "undefined") return {
        hotels: MOCK_HOTELS,
        bookings: MOCK_BOOKINGS,
        profile: MOCK_USER_PROFILE,
        favorites: ["1", "2"],
        lastUpdated: new Date().toISOString()
    };

    const stored = localStorage.getItem(DB_KEY);
    if (stored) {
        try {
            return JSON.parse(stored);
        } catch (e) {
            console.error("Failed to parse local storage DB, resetting...");
            localStorage.removeItem(DB_KEY);
        }
    }

    // Initialize with mock data
    const initialDB: DBStructure = {
        hotels: MOCK_HOTELS,
        bookings: MOCK_BOOKINGS,
        profile: MOCK_USER_PROFILE,
        favorites: ["1", "2"],
        lastUpdated: new Date().toISOString()
    };
    saveDB(initialDB);
    return initialDB;
};

export const saveDB = (db: DBStructure) => {
    if (typeof window === "undefined") return;
    db.lastUpdated = new Date().toISOString();
    localStorage.setItem(DB_KEY, JSON.stringify(db));
};

export const resetDB = () => {
    if (typeof window === "undefined") return;
    localStorage.removeItem(DB_KEY);
    window.location.reload();
};

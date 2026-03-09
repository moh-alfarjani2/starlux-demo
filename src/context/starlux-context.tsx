"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { getDB, saveDB, DBStructure, resetDB, DB_KEY } from "@/lib/db";
import { Hotel } from "@/lib/mock-data";

interface StarluxContextType {
    db: DBStructure;
    addBooking: (booking: any) => void;
    addHotel: (hotel: Hotel) => void;
    updateProfile: (profile: any) => void;
    toggleFavorite: (hotelId: string) => void;
    resetDemo: () => void;
}

const StarluxContext = createContext<StarluxContextType | undefined>(undefined);

import { MOCK_HOTELS, MOCK_BOOKINGS, MOCK_USER_PROFILE } from "@/lib/mock-data";

export const StarluxProvider = ({ children }: { children: ReactNode }) => {
    // 1. Initialize with static mock data to ensure SSR and first client render match exactly
    const [db, setDb] = useState<DBStructure>({
        hotels: MOCK_HOTELS,
        bookings: MOCK_BOOKINGS,
        profile: MOCK_USER_PROFILE,
        favorites: ["1", "2"],
        lastUpdated: new Date().toISOString()
    });
    const [isMounted, setIsMounted] = useState(false);

    // 2. Hydrate from localStorage ONLY after mounting on the client
    useEffect(() => {
        setIsMounted(true);
        const savedData = getDB();
        setDb(savedData);

        // Listen for storage changes from other tabs
        const handleStorageChange = (e: StorageEvent) => {
            if (e.key === DB_KEY && e.newValue) {
                setDb(JSON.parse(e.newValue));
            }
        };

        window.addEventListener("storage", handleStorageChange);
        return () => window.removeEventListener("storage", handleStorageChange);
    }, []);

    // 3. Sync with localStorage on subsequent changes, but only if mounted
    useEffect(() => {
        if (isMounted) {
            saveDB(db);
        }
    }, [db, isMounted]);

    const addBooking = (booking: any) => {
        setDb(prev => ({
            ...prev,
            bookings: [booking, ...prev.bookings]
        }));
    };

    const addHotel = (hotel: Hotel) => {
        setDb(prev => ({
            ...prev,
            hotels: [hotel, ...prev.hotels]
        }));
    };

    const updateProfile = (profile: any) => {
        setDb(prev => ({
            ...prev,
            profile: { ...prev.profile, ...profile }
        }));
    };

    const toggleFavorite = (hotelId: string) => {
        setDb(prev => {
            const isFavorite = prev.favorites.includes(hotelId);
            return {
                ...prev,
                favorites: isFavorite
                    ? prev.favorites.filter(id => id !== hotelId)
                    : [...prev.favorites, hotelId]
            };
        });
    };

    const handleReset = () => {
        const defaultData: DBStructure = {
            hotels: MOCK_HOTELS,
            bookings: MOCK_BOOKINGS,
            profile: MOCK_USER_PROFILE,
            favorites: ["1", "2"],
            lastUpdated: new Date().toISOString()
        };
        setDb(defaultData);
        saveDB(defaultData);

        // Visual feedback
        if (typeof window !== "undefined") {
            alert("Demo has been reset to initial state.");
            window.location.href = "/";
        }
    };

    return (
        <StarluxContext.Provider value={{
            db,
            addBooking,
            addHotel,
            updateProfile,
            toggleFavorite,
            resetDemo: handleReset
        }}>
            {children}
        </StarluxContext.Provider>
    );
};

export const useStarlux = () => {
    const context = useContext(StarluxContext);
    if (context === undefined) {
        throw new Error("useStarlux must be used within a StarluxProvider");
    }
    return context;
};

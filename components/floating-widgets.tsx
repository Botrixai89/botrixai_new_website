"use client"

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

export const FloatingWidgets = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const openBooking = () => {
        window.open("https://calendly.com/connectbotrixai/", "_blank");
    };

    return (
        <>
            {/* Sticky Book Demo Button (visible on scroll) */}
            <div
                className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
            >
                <Button
                    size="lg"
                    className="px-8 py-6 flex items-center gap-2 text-lg rounded-full border-0 bg-bone text-ink hover:bg-white font-medium"
                    onClick={openBooking}
                >
                    <Calendar className="w-5 h-5" />
                    Book Free Demo
                </Button>
            </div>
        </>
    );
};

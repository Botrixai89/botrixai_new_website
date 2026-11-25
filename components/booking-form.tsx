"use client"

import React from 'react';
import { Button } from "@/components/ui/button"

export const BookingForm = () => {
    return (
        <div className="bg-surface-1 p-8 rounded-3xl light-edge border border-signal/30 max-w-xl mx-auto">
            <h3 className="text-2xl text-bone mb-6 font-medium tracking-[-0.02em]">Schedule Your Free AI Strategy Session</h3>
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-bone/80 mb-1">Full Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-hairline" placeholder="John Doe" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-bone/80 mb-1">Business Email</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-hairline" placeholder="john@company.com" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-bone/80 mb-1">Industry</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-hairline">
                        <option>Healthcare</option>
                        <option>Real Estate</option>
                        <option>Education</option>
                        <option>Retail / E-commerce</option>
                        <option>Others</option>
                    </select>
                </div>
                <Button
                    className="w-full py-6 text-lg rounded-full border-0 bg-bone text-ink hover:bg-white font-medium"
                    onClick={() => window.open('https://calendly.com/connectbotrixai/', '_blank')}
                >
                    Book My Demo Now
                </Button>
            </div>
            <p className="mt-4 text-xs text-center text-dim">
                15-min session • Local Raipur Support • No Commitment
            </p>
        </div>
    );
};

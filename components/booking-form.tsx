"use client"

import React from 'react';
import { Button } from "@/components/ui/button"

export const BookingForm = () => {
    return (
        <div className="bg-white p-8 rounded-3xl shadow-2xl border border-emerald-100 max-w-xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Schedule Your Free AI Strategy Session</h3>
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200" placeholder="John Doe" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Business Email</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200" placeholder="john@company.com" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Industry</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-gray-200">
                        <option>Healthcare</option>
                        <option>Real Estate</option>
                        <option>Education</option>
                        <option>Retail / E-commerce</option>
                        <option>Others</option>
                    </select>
                </div>
                <Button
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-6 rounded-xl text-lg font-bold"
                    onClick={() => window.open('https://calendly.com/connectbotrixai/', '_blank')}
                >
                    Book My Demo Now
                </Button>
            </div>
            <p className="mt-4 text-xs text-center text-gray-500">
                15-min session • Local Raipur Support • No Commitment
            </p>
        </div>
    );
};

import React from 'react';

export const LocalBusinessSchema = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "BotrixAI",
        "image": "https://www.botrixai.com/og-image.jpg",
        "@id": "https://www.botrixai.com",
        "url": "https://www.botrixai.com",
        "telephone": "+917000XXXXXX",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Moudhapara",
            "addressLocality": "Raipur",
            "addressRegion": "Chhattisgarh",
            "postalCode": "492001",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 21.2514,
            "longitude": 81.6296
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
            ],
            "opens": "09:00",
            "closes": "19:00"
        },
        "sameAs": [
            "https://www.facebook.com/botrixai",
            "https://www.instagram.com/botrixai",
            "https://www.linkedin.com/company/botrixai"
        ],
        "priceRange": "$$"
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

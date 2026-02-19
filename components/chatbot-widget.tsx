"use client"

import Script from 'next/script'

export default function ChatbotWidget() {
    return (
        <Script
            src="https://bot-wframe.botrixai.com/output.js"
            strategy="afterInteractive"
            onLoad={() => {
                // @ts-ignore
                if (window.on) {
                    // @ts-ignore
                    window.on('YW9kTU1ibklocFprckowTzo3MjRmMmVlY2E5MTVhY2FkYTE1YzA1YWJmMmZlY2FjN2M3ZTFjMWNiYjRlMWMwM2YzZTNmMzFiZWFkODg4Mzg3YjU5ODBmYzQxMTIzZWQwNWUzMTY3NGUzY2E5MGI3ZDA=', false, '596f9aab-c63c-4b8e-9de9-2538bd0faa4e');
                }
            }}
        />
    );
}

// VIPDashboard.js
import React, { useState, useEffect } from 'react';
import { generateQRCode, destroySession } from './whatsappService';

const VIPDashboard = () => {
    const [qrCode, setQrCode] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        // Function to handle QR code generation
        const handleQRCodeGeneration = async () => {
            try {
                // Step 1: Destroy previous session
                await destroySession();
               
                // Step 2: Generate fresh QR code
                const newQRCode = await generateQRCode();
                setQrCode(newQRCode);
                setError(null);
            } catch (err) {
                // Step 3: Handle connection errors
                setError('Failed to generate QR code. Please try again.');
            }
        };

        handleQRCodeGeneration();
    }, []);

    return (
        <div>
            <h1>VIP Dashboard</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {qrCode && <img src={qrCode} alt="WhatsApp QR Code" />}
        </div>
    );
};

export default VIPDashboard;
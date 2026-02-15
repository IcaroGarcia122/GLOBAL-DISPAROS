import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode.react';
import Modal from 'react-modal';
import { useWebSocket } from 'react-use-websocket';

const VIPDashboard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [qrCodeValue, setQrCodeValue] = useState('');
    const [sessionId, setSessionId] = useState(null);
    const { sendMessage, lastMessage } = useWebSocket('wss://your.websocket.url', {
        onOpen: () => console.log('WebSocket connection established'),
        onClose: () => console.log('WebSocket connection closed'),
    });

    useEffect(() => {
        // Handle session management and cleanup
        if (sessionId) {
            // Perform session cleanup if necessary
            return () => {
                // Cleanup code here
                setSessionId(null);
            };
        }
    }, [sessionId]);

    const handleOpenModal = () => {
        // Generate new QR code value
        const newSessionId = 'session_' + Date.now();
        setSessionId(newSessionId);
        setQrCodeValue(newSessionId);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        if (lastMessage) {
            // Handle message from WebSocket
            console.log('Received message:', lastMessage.data);
        }
    }, [lastMessage]);

    return (
        <div>
            <h1>VIP Dashboard</h1>
            <button onClick={handleOpenModal}>Generate QR Code</button>
            <Modal isOpen={isModalOpen} onRequestClose={handleCloseModal}>
                <h2>Scan this QR code</h2>
                <QRCode value={qrCodeValue} />
                <button onClick={handleCloseModal}>Close</button>
            </Modal>
        </div>
    );
};

export default VIPDashboard;
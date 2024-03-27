// ConfirmationToast.js
import React from 'react';
import { useToaster } from 'react-hot-toast';

const ConfirmationToast = ({ message, onConfirm }) => {
    const toaster = useToaster();

    const handleConfirm = () => {
        toaster.dismiss(); // Close the toast
        onConfirm(true); // Call the onConfirm function with true indicating confirmation
    };

    const handleCancel = () => {
        toaster.dismiss(); // Close the toast
        onConfirm(false); // Call the onConfirm function with false indicating cancellation
    };

    return (
        <div>
            <div>{message}</div>
            <button onClick={handleConfirm}>Yes</button>
            <button onClick={handleCancel}>No</button>
        </div>
    );
};

export default ConfirmationToast;

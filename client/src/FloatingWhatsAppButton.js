import React from "react";
import ReactWhatsapp from "react-whatsapp";
import "./FloatingWhatsAppButton.css";

const FloatingWhatsAppButton = () => {
    return (
        <div className="whatsapp-float">
            <ReactWhatsapp
                number="+84965741051"
                message="Hello! I would like to know more about your services."
                className="whatsapp-button"
            >
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                    alt="WhatsApp"
                    className="whatsapp-icon"
                />
            </ReactWhatsapp>
        </div>
    );
};

export default FloatingWhatsAppButton;

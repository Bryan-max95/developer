import React from "react";

const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/message/BWN47V52BRYUE1" 
      target="_blank" 
      id="whatsapp-button" 
      aria-label="WhatsApp"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: 'transparent',
        border: 'none',
        zIndex: 9999, // Asegúrate de que esté por encima de otros elementos
      }}
    >
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
        alt="WhatsApp" 
        width="60" 
        height="60"
        style={{
          borderRadius: '50%',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
          transition: 'transform 0.3s ease',
        }}
      />
    </a>
  );
};

export default WhatsAppButton;

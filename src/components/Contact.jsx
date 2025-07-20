import React from 'react';
import { FaFacebook, FaWhatsapp, FaLinkedin, FaBehance } from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="p-8 text-center">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <p className="text-gray-700">Email: <a href="mailto:xasanmuqtaar952@gmail.com" className="text-blue-600">xasanmuqtaar952@gmail.com</a></p>
      <p className="text-gray-700 mb-6">Phone: <a href="tel:+252614041111" className="text-blue-600">+252 61 4041111</a></p>
      
      <div className="flex justify-center gap-6 text-2xl text-blue-600">
        <a href="https://www.facebook.com/share/19cWopULGG/" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://Wa.me//+252614041111" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
        <a href="https://www.linkedin.com/in/hassan-mukhtar-hassan-12767a343?utm_source=" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://www.behance.net/xasanmuqtaar" target="_blank" rel="noopener noreferrer">
          <FaBehance />
        </a>
      </div>
    </section>
  );
}
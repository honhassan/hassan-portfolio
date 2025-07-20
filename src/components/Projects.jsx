import React from 'react';

export default function Projects() {
  return (
    <section className="p-8 bg-gray-100 text-center">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <p className="text-gray-700 mb-4">Some highlights of my design and branding work.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
        <div className="bg-white shadow rounded overflow-hidden">
          <img src="https://via.placeholder.com/400x200.png?text=Project+1" alt="Project 1" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="font-bold text-lg mb-2">Brand Identity</h3>
            <p className="text-gray-600 mb-2">Complete rebranding for a local business, increasing social engagement by 30%.</p>
            <a href="https://enghassan8.github.io/websitePORTO/" target="_blank" className="text-blue-600 underline">View Live</a>
          </div>
        </div>
        <div className="bg-white shadow rounded overflow-hidden">
          <img src="https://via.placeholder.com/400x200.png?text=Project+2" alt="Project 2" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="font-bold text-lg mb-2">Social Media Designs</h3>
            <p className="text-gray-600 mb-2">Series of modern, clean posts for client campaigns.</p>
            <a href="https://www.behance.net/" target="_blank" className="text-blue-600 underline">View on Behance</a>
          </div>
        </div>
        <div className="bg-white shadow rounded overflow-hidden">
          <img src="https://via.placeholder.com/400x200.png?text=Project+3" alt="Project 3" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="font-bold text-lg mb-2">Web Mockups</h3>
            <p className="text-gray-600 mb-2">UI/UX layouts for responsive web design using Figma and Illustrator.</p>
            <a href="https://www.figma.com/" target="_blank" className="text-blue-600 underline">View Figma</a>
          </div>
        </div>
      </div>
    </section>
  );
}
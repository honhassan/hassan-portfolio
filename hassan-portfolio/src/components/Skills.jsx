import React from 'react';

export default function Skills() {
  return (
    <section className="p-8 text-center">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <ul className="flex flex-wrap justify-center gap-4 text-gray-700">
        <li className="bg-blue-100 px-4 py-2 rounded">Adobe Photoshop</li>
        <li className="bg-blue-100 px-4 py-2 rounded">Adobe Illustrator</li>
        <li className="bg-blue-100 px-4 py-2 rounded">InDesign</li>
        <li className="bg-blue-100 px-4 py-2 rounded">Web Design</li>
        <li className="bg-blue-100 px-4 py-2 rounded">Branding</li>
        <li className="bg-blue-100 px-4 py-2 rounded">Social Media Design</li>
      </ul>
    </section>
  );
}
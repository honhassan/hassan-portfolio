
import React from 'react';
import profile from '/assets/profile.jpg';
import logo from '/assets/logo.png';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="bg-blue-600 text-white p-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-10 w-10" />
          <h1 className="text-xl font-bold">Hassan Hirgalay</h1>
        </div>
        <a href="/assets/HassanCV.pdf" download className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100">
          Download CV
        </a>
      </header>

      <main className="p-8 text-center">
        <img src={profile} alt="Profile" className="mx-auto rounded-full h-40 w-40 object-cover mb-4 shadow" />
        <h2 className="text-3xl font-bold">I'm a Graphic Designer</h2>
        <p className="mt-2 text-gray-600 max-w-xl mx-auto">
          I specialize in brand design, social media content, and visual storytelling. Passionate about clean and impactful visuals.
        </p>
      </main>

      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

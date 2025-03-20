import React, { useState } from 'react';
import { pokeballImg, openPokeImg } from '../utils/index';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);  

  return (
    <header className="bg-background w-full py-4 fixed top-0 z-50">
      <nav className="font-nav-font flex items-center justify-between max-w-6xl mx-auto px-4 h-16">
        {/* Left-aligned Pokédex */}
        <div className="flex-1 flex justify-start items-center h-full">
          <div className="text-primary-text cursor-pointer text-lg font-medium hover:text-opacity-80 transition-all active:scale-95">
            Pokédex
          </div>
        </div>

        {/* Centered Pokéball */}
        <div className="flex-1 flex justify-center items-center h-full relative">
          <div 
            className="relative h-14 w-14"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <img
              src={pokeballImg}
              alt="Closed Pokéball"
              className={`absolute inset-0 h-full w-full transition-all duration-500 ${
                isOpen ? 'opacity-0 rotate-[360deg]' : 'opacity-100 rotate-0'
              }`}
            />
            <img
              src={openPokeImg}
              alt="Open Pokéball"
              className={`absolute inset-0 h-full w-full transition-all duration-500 ${
                isOpen ? 'opacity-100 scale-150' : 'opacity-0 scale-90'
              }`}
            />
          </div>
        </div>

        {/* Right-aligned Language */}
        <div className="flex-1 flex justify-end items-center h-full">
          <div className="text-primary-text cursor-pointer text-lg font-medium hover:text-opacity-80 transition-all active:scale-95">
            Français
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
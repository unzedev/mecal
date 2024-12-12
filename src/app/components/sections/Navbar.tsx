'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Info Bar */}
      <div className='hidden md:block bg-red-950 text-white py-2'>
        <div className='container max-w-6xl mx-auto px-4 flex justify-between items-center text-sm'>
          <div className='flex items-center gap-6'>
            <div className='flex items-center gap-2'>
              <Phone size={14} />
              <span>(51) 3033-7924</span>
            </div>
            <div className='flex items-center gap-2'>
              <Mail size={14} />
              <span>contato@mecal.com.br</span>
            </div>
          </div>
          <div className='flex gap-4'>
            <span>Seg - Sex: 8:00 - 18:00</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 py-4'
        }`}
      >
        <nav className='container max-w-6xl mx-auto px-4'>
          <div className='flex items-center justify-between'>
            <div className='flex-shrink-0'>
              <Image
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQM0g7GsrD8U4gHLYH4QtZQDoK9RPueB4VjA&s'
                alt='Mecal Logo'
                width={170}
                height={80}
                className='object-contain'
                draggable={false}
              />
            </div>

            {/* Desktop Navigation */}
            <div className='hidden md:flex items-center gap-8'>
              {['Início', 'Serviços', 'Sobre', 'Contato'].map((item) => (
                <Link
                  key={item}
                  href={`/#${item.toLowerCase()}`}
                  className='text-red-950 font-medium hover:text-red-600 transition-colors relative group'
                >
                  {item}
                  <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full' />
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className='md:hidden p-2 text-red-950 hover:text-red-600 transition-colors'
              aria-label='Toggle Menu'
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden absolute left-0 right-0 top-full bg-white shadow-lg transition-all duration-300 ${
              menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
          >
            <div className='container max-w-6xl mx-auto px-4 py-4 flex flex-col gap-4'>
              {['Início', 'Serviços', 'Sobre', 'Contato'].map((item) => (
                <Link
                  key={item}
                  href={`/#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className='text-red-950 font-medium hover:text-red-600 transition-colors py-2'
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;

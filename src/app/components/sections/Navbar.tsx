'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className='bg-white text-red-900 p-4'>
      <nav className='container mx-auto flex items-center justify-between'>
        <div className='font-bold'>
          <Image
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQM0g7GsrD8U4gHLYH4QtZQDoK9RPueB4VjA&s'
            alt='Mecal Logo'
            width={120}
            height={40}
            className='object-contain'
            draggable={false}
          />
        </div>
        {/* Desktop Links */}
        <div className='hidden md:flex gap-7'>
          <Link href='/#inicio'>Início</Link>
          <Link href='/#servicos'>Serviços</Link>
          <Link href='/#sobre'>Sobre</Link>
          <Link href='/#contato'>Contato</Link>
        </div>
        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className='md:hidden p-2 focus:outline-none' aria-label='Menu'>
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
          </svg>
        </button>
      </nav>
      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className='md:hidden bg-red-800 mt-2 p-4 rounded-lg'>
          <Link href='/#inicio' className='block py-2 text-white' onClick={() => setMenuOpen(false)}>
            Início
          </Link>
          <Link href='/#servicos' className='block py-2 text-white' onClick={() => setMenuOpen(false)}>
            Serviços
          </Link>
          <Link href='/#sobre' className='block py-2 text-white' onClick={() => setMenuOpen(false)}>
            Sobre
          </Link>
          <Link href='/#contato' className='block py-2 text-white' onClick={() => setMenuOpen(false)}>
            Contato
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;

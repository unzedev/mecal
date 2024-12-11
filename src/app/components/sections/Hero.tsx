'use client';

import { Button } from '@/components/ui/Button';
import { useState, useEffect } from 'react';

const backgroundImages = [
  'https://static.wixstatic.com/media/a0b220_d41edadf2817443ca3c47945890491cb~mv2.png/v1/fill/w_1046,h_596,al_c,q_90,enc_auto/1606734358_27c89fa2f7401f26f76ffd1493487004_80590.png',
  'https://static.wixstatic.com/media/a0b220_f4d0c3c7306a4e1585b9ec19ecd083f7~mv2.jpeg/v1/fill/w_1046,h_596,al_c,q_85,enc_auto/1531980576_ea6948a86a13ebd6ce7d8c5c301c1c91_80590.jpeg',
  'https://static.wixstatic.com/media/a0b220_48a49617b0a64344af3f32c2e37279c9~mv2.jpeg/v1/fill/w_1046,h_588,al_c,q_85,enc_auto/1531980547_6e76e8c440724451b3521b3fc7e398ee_80590.jpeg',
  'https://static.wixstatic.com/media/a0b220_efcc44b04070440597744071a0c9916a~mv2.jpeg/v1/fill/w_1046,h_596,al_c,q_85,enc_auto/1531980557_4eb23a806c7d2d30575f1158aadaf114_80590.jpeg',
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
        setFade(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id='inicio' className='relative h-[600px] flex items-center justify-center'>
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
          fade ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ backgroundImage: `url(${backgroundImages[currentIndex]})` }}
      />
      <div className='absolute inset-0 bg-black/60 z-10' />
      <div className='relative z-20 text-center text-white max-w-4xl mx-auto px-4'>
        <h1 className='text-5xl font-bold mb-6'>Especialistas em Hidrojateamento Industrial</h1>
        <p className='text-xl mb-8'>Soluções de alta pressão para limpeza industrial em todo Brasil desde 1996</p>
        <Button
          size='lg'
          className='bg-red-600 hover:bg-red-700'
          onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Solicite um Orçamento
        </Button>
      </div>
    </section>
  );
}

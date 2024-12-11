'use client';

import { Card } from '@/components/ui/Card';
import Image from 'next/image';
import { ImgComparisonSlider } from '@img-comparison-slider/react';

export default function Results() {
  const beforeAfterCases = [
    {
      title: 'Limpeza de Caldeira Industrial',
      before: 'https://placehold.co/600x400/FFF/000',
      after: 'https://placehold.co/600x400/000/FFF',
      description: 'Remoção completa de incrustações e resíduos',
    },
    {
      title: 'Preparação de Superfície',
      before: 'https://placehold.co/600x400/FFF/000',
      after: 'https://placehold.co/600x400/000/FFF',
      description: 'Tratamento para pintura industrial',
    },
  ];

  return (
    <section className='py-16'>
      <div className='max-w-6xl mx-auto px-4'>
        <h2 className='text-3xl font-bold text-center mb-12'>Resultados Comprovados</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          {beforeAfterCases.map((item, index) => (
            <Card key={index} className='overflow-hidden'>
              <div className='p-6'>
                <h3 className='text-xl font-semibold mb-4'>{item.title}</h3>
                <ImgComparisonSlider hover>
                  <figure slot='first' className='relative m-0'>
                    <Image slot='first' src={item.before} alt={'Antes'} width={600} height={400} className='w-full' />
                    <figcaption className='absolute top-1/2 left-3 bg-white border border-gray-300 rounded-xl text-gray-800 opacity-80 p-3 transform -translate-y-1/2 leading-none'>
                      Antes
                    </figcaption>
                  </figure>
                  <figure slot='second' className='relative m-0'>
                    <Image slot='second' src={item.after} alt={'Depois'} width={600} height={400} className='w-full' />
                    <figcaption className='absolute top-1/2 right-3 bg-white border border-gray-300 rounded-xl text-gray-800 opacity-80 p-3 transform -translate-y-1/2 leading-none'>
                      Depois
                    </figcaption>
                  </figure>
                </ImgComparisonSlider>
                <p className='mt-4 text-gray-600'>{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

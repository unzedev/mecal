import { Card } from '@/components/ui/Card';
import { Shield, Droplets, Sparkles, Target } from 'lucide-react';

export default function BenefitsSection() {
  const benefits = [
    {
      icon: <Shield className='w-12 h-12 text-red-600' />,
      title: 'Segurança em Áreas de Risco',
      description: 'Ideal para zonas com alto risco de explosão, pois não gera faíscas nem poeira durante o processo.',
    },
    {
      icon: <Droplets className='w-12 h-12 text-red-600' />,
      title: 'Sem Produtos Químicos',
      description: 'Processo 100% mecânico que não compromete a integridade dos equipamentos do cliente.',
    },
    {
      icon: <Sparkles className='w-12 h-12 text-red-600' />,
      title: 'Resultados Superiores',
      description: 'Limpeza profunda e eficiente para diversos tipos de superfícies e equipamentos.',
    },
    {
      icon: <Target className='w-12 h-12 text-red-600' />,
      title: 'Especialistas em Limpeza Industrial',
      description: '60% da nossa receita vem da limpeza industrial, garantindo expertise e excelência.',
    },
  ];

  return (
    <section className='py-16 bg-gray-50'>
      <div className='max-w-6xl mx-auto px-4'>
        <h2 className='text-3xl font-bold text-center mb-12'>Por que Escolher o Hidrojateamento?</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {benefits.map((benefit, index) => (
            <Card key={index} className='p-6 text-center'>
              <div className='flex justify-center mb-4'>{benefit.icon}</div>
              <h3 className='text-xl font-semibold mb-2'>{benefit.title}</h3>
              <p className='text-gray-600'>{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

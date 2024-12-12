import { Card } from '@/components/ui/Card';
import { Droplets, Factory, Wrench } from 'lucide-react';

export const services = [
  {
    icon: Wrench,
    title: 'Limpeza Técnica',
    color: 'from-red-500 to-red-600',
    items: [
      'Corte de concreto com hidrojateamento',
      'Remoção de incrustações e depósitos',
      'Limpeza de superfícies industriais',
      'Desobstrução de tubulações e galerias',
      'Preparação de superfícies para manutenção',
    ],
  },
  {
    icon: Droplets,
    title: 'Limpeza Especializada',
    color: 'from-blue-500 to-blue-600',
    items: [
      'Hidrojateamento de alta pressão',
      'Limpeza de trocadores de calor',
      'Desincrustação de equipamentos industriais',
      'Limpeza de tanques e reservatórios',
      'Manutenção preventiva industrial',
    ],
  },
];

export const equipments = [
  {
    name: 'Caldeiras',
    description: 'Remoção de incrustações e depósitos minerais com hidrojateamento de alta pressão.',
  },
  {
    name: 'Condensadores',
    description: 'Limpeza profunda para restaurar a eficiência da troca térmica.',
  },
  {
    name: 'Evaporadores',
    description: 'Desincrustação e remoção de depósitos para melhor desempenho.',
  },
  {
    name: 'Fornalhas',
    description: 'Limpeza especializada para remoção de resíduos e incrustações.',
  },
  {
    name: 'Trocadores de Calor',
    description: 'Hidrojateamento para desobstrução e recuperação da eficiência.',
  },
  {
    name: 'Tubulações',
    description: 'Desobstrução e limpeza de tubulações industriais de todos os diâmetros.',
  },
  {
    name: 'Torres de Resfriamento',
    description: 'Remoção de incrustações e biofilme com hidrojateamento.',
  },
  {
    name: 'Tanques',
    description: 'Limpeza industrial de tanques e reservatórios com água pressurizada.',
  },
  {
    name: 'Filtros Industriais',
    description: 'Desobstrução e limpeza de elementos filtrantes.',
  },
];

export default function ServicesSection() {
  return (
    <section id='servicos' className='py-16 bg-gradient-to-b from-white to-red-50'>
      <div className='max-w-6xl mx-auto px-4'>
        <h2 className='text-3xl font-bold text-center mb-16'>Nossos Serviços</h2>

        <div className='grid md:grid-cols-2 gap-8 mb-10'>
          {services.map((service) => (
            <div className='relative group' key={service.title}>
              <Card className='p-8 bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-transparent hover:border-t-4 hover:border-red-500'>
                <div className='absolute -top-6 left-8'>
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg transform -rotate-6 group-hover:rotate-0 transition-transform duration-300`}
                  >
                    <service.icon className='w-8 h-8 text-white' />
                  </div>
                </div>
                <div className='mt-6'>
                  <h3 className='text-xl font-semibold mb-6'>{service.title}</h3>
                  <ul className='space-y-3'>
                    {service.items.map((item, i) => (
                      <li key={i} className='flex items-start space-x-2'>
                        <span className='w-1.5 h-1.5 rounded-full bg-red-500 mt-2' />
                        <span className='text-gray-600 flex-1'>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </div>
          ))}
        </div>
        <div className='grid md:grid-cols-3 gap-6'>
          {equipments.map((equipment) => (
            <Card
              key={equipment.name}
              className='p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-200'
            >
              <Factory className='w-8 h-8 text-red-600 mb-4' />
              <h4 className='text-lg font-medium text-gray-800'>{equipment.name}</h4>
              <p className='text-sm text-gray-600 mt-2'>{equipment.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

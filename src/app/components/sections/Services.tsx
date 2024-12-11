import { Card } from '@/components/ui/Card';
import { Wrench, Factory, Droplets } from 'lucide-react';

export default function ServicesSection() {
  const equipments = [
    { name: 'Caldeiras', description: 'Manutenção e inspeção para garantir máxima eficiência.' },
    { name: 'Condensadores de resfriamento', description: 'Soluções para troca térmica eficiente.' },
    { name: 'Evaporadores', description: 'Limpeza e reparos em evaporadores industriais.' },
    { name: 'Fornalha', description: 'Manutenção para operação segura e econômica.' },
    { name: 'Filtros', description: 'Substituição e limpeza de filtros industriais.' },
    { name: 'Misturadores', description: 'Ajustes e inspeções em misturadores de processo.' },
    { name: 'Permutadores de Calor', description: 'Serviços técnicos para troca térmica confiável.' },
    { name: 'Torres', description: 'Manutenção em torres de resfriamento e destilação.' },
    { name: 'Trocador de Calor', description: 'Reparos e limpeza de trocadores de calor.' },
    { name: 'Tubulação (10mm a 2000mm)', description: 'Desobstrução e substituição de tubulações.' },
    { name: 'Vasos', description: 'Inspeção e reparos em vasos de pressão.' },
    { name: 'Apicoamento em superfície de concreto', description: 'Técnicas precisas para acabamento industrial.' },
  ];

  return (
    <section id='servicos' className='py-16 bg-gray-50'>
      <div className='max-w-6xl mx-auto px-4'>
        <h2 className='text-3xl font-bold text-center mb-12'>Nossos Serviços</h2>

        <div className='grid md:grid-cols-2 gap-8 mb-16'>
          <div>
            <h3 className='text-xl font-semibold mb-4 flex items-center'>
              <Wrench className='w-6 h-6 text-red-600 mr-2' />
              Limpeza Técnica
            </h3>
            <ul className='space-y-2 text-gray-600'>
              <li>• Corte de concreto (hidrodemolição)</li>
              <li>• Remoção de camada de tinta</li>
              <li>• Remoção de borracha em piso</li>
              <li>• Desobstrução de adutoras e galerias</li>
              <li>• Preparação de superfícies</li>
            </ul>
          </div>
          <div>
            <h3 className='text-xl font-semibold mb-4 flex items-center'>
              <Droplets className='w-6 h-6 text-red-600 mr-2' />
              Limpeza Especializada
            </h3>
            <ul className='space-y-2 text-gray-600'>
              <li>• Limpeza de redes de esgotos</li>
              <li>• Limpeza de áreas alagadas</li>
              <li>• Manutenção de redes de água potável</li>
              <li>• Limpeza de colunas de destilação</li>
              <li>• Limpeza industrial de alta precisão</li>
            </ul>
          </div>
        </div>

        <h3 className='text-2xl font-semibold mb-8 text-center'>Equipamentos que Atendemos</h3>
        <div className='grid md:grid-cols-3 gap-6'>
          {equipments.map((item, i) => (
            <Card key={i} className='p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-200'>
              <Factory className='w-8 h-8 text-red-600 mb-4' />
              <h4 className='text-lg font-medium text-gray-800'>{item.name}</h4>
              <p className='text-sm text-gray-600 mt-2'>{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

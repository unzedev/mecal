import { Card } from '@/components/ui/Card';
import { MapPin, Phone, Mail } from 'lucide-react';
import { ContactForm } from '@/components/ui/ContactForm';

export const locations = [
  {
    title: 'Rio Grande do Sul',
    street: 'Rua 24 de Agosto, 2378',
    state: 'Liberdade, Esteio - RS',
    phone: '(51) 3033-7924',
    email: 'mecalrs@terra.com.br',
  },
  {
    title: 'Pernambuco',
    street: 'Antiga BR-101',
    state: 'Cabo de Santo Agostinho - PE',
    phone: '(00) 0000-0000',
  },
  {
    title: 'Rio de Janeiro',
    street: 'Rua Marumbi 600',
    state: 'Duque de Caxias - RJ',
    phone: '(00) 0000-0000',
  },
];

export default function ContactSection() {
  return (
    <section id='contato' className='py-24 bg-gradient-to-b from-gray-50 to-gray-100'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl font-bold mb-4'>Entre em Contato</h2>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            Estamos prontos para atender suas necessidades de limpeza industrial. Entre em contato com a unidade mais
            próxima ou solicite um orçamento.
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-12'>
          <div>
            <h3 className='text-2xl font-semibold mb-12'>Nossas Unidades</h3>
            <div className='space-y-10'>
              {locations.map(({ title, street, state, phone, email }) => (
                <Card
                  key={title}
                  className='group p-6 bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-b-4 border-transparent hover:border-b-4 hover:border-red-500'
                >
                  <div className='relative'>
                    <div className='absolute -top-10 right-0'>
                      <div className='w-16 h-16 bg-red-100 rounded-full flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-transform duration-300'>
                        <MapPin className='w-8 h-8 text-red-600' />
                      </div>
                    </div>

                    <h4 className='text-xl font-semibold mb-4'>{title}</h4>
                    <div className='space-y-4'>
                      <div className='text-gray-600'>
                        <p>{street}</p>
                        <p>{state}</p>
                      </div>

                      <div className='space-y-2'>
                        <p className='flex items-center text-gray-600'>
                          <Phone className='w-4 h-4 text-red-600 mr-2' />
                          {phone}
                        </p>
                        {email && (
                          <p className='flex items-center text-gray-600'>
                            <Mail className='w-4 h-4 text-red-600 mr-2' />
                            {email}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className='text-2xl font-semibold mb-12'>Solicite um Orçamento</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

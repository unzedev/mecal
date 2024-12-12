import { Droplets, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className='bg-red-950 text-red-50'>
      <div className='max-w-6xl mx-auto px-4 py-12'>
        <div className='grid md:grid-cols-3 gap-8'>
          <div>
            <div className='flex items-center space-x-2 mb-4'>
              <Droplets className='w-6 h-6 text-red-500' />
              <span className='text-lg font-bold text-white'>MECAL</span>
            </div>
            <p className='text-sm'>
              Especialistas em hidrojateamento industrial desde 1996, oferecendo soluções de alta pressão para limpeza
              industrial em todo o Brasil.
            </p>
          </div>

          <div>
            <h3 className='text-lg font-semibold text-white mb-4'>Contato</h3>
            <div className='space-y-3'>
              <div className='flex items-center space-x-2'>
                <Phone className='w-4 h-4 text-red-500' />
                <span>(51) 3333-7654</span>
              </div>
              <div className='flex items-center space-x-2'>
                <Mail className='w-4 h-4 text-red-500' />
                <span>contato@mecal.com.br</span>
              </div>
              <div className='flex items-center space-x-2'>
                <MapPin className='w-4 h-4 text-red-500' />
                <span>Rio Grande do Sul, Brasil</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className='text-lg font-semibold text-white mb-4'>Horário</h3>
            <div className='space-y-2'>
              <p>Segunda - Sexta</p>
              <p className='font-semibold text-white'>08:00 - 18:00</p>
              <p className='mt-4 text-sm'>Atendimento 24h para emergências industriais</p>
            </div>
          </div>
        </div>

        <div className='border-t border-red-900 mt-8 pt-8 text-sm text-center'>
          © {new Date().getFullYear()} MECAL. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}

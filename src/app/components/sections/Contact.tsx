import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id='contato' className='py-16'>
      <div className='max-w-6xl mx-auto px-4'>
        <h2 className='text-3xl font-bold text-center mb-12'>Entre em Contato</h2>

        <div className='grid md:grid-cols-2 gap-12'>
          <div>
            <h3 className='text-2xl font-semibold mb-6'>Nossas Unidades</h3>
            <div className='grid gap-6'>
              <Card className='p-6'>
                <h4 className='text-xl font-semibold mb-4 flex items-center'>
                  <MapPin className='w-6 h-6 text-red-600 mr-2' />
                  Rio Grande do Sul
                </h4>
                <p className='text-gray-600 mb-2'>Rua 24 de Agosto, 2378</p>
                <p className='text-gray-600 mb-2'>Liberdade, Esteio - RS</p>
                <p className='text-gray-600 mb-2'>Brasil</p>
                <div className='mt-4'>
                  <p className='flex items-center mb-2'>
                    <Phone className='w-4 h-4 text-red-600 mr-2' />
                    (51) 3033-7924
                  </p>
                  <p className='flex items-center'>
                    <Mail className='w-4 h-4 text-red-600 mr-2' />
                    mecalrs@terra.com.br
                  </p>
                </div>
              </Card>
            </div>
          </div>

          <div>
            <h3 className='text-2xl font-semibold mb-6'>Solicite um Orçamento</h3>
            <Card className='p-6'>
              <form className='space-y-4'>
                <div>
                  <label className='block text-sm font-medium mb-1'>Nome</label>
                  <input type='text' className='w-full p-2 border rounded-md' />
                </div>
                <div>
                  <label className='block text-sm font-medium mb-1'>Email</label>
                  <input type='email' className='w-full p-2 border rounded-md' />
                </div>
                <div>
                  <label className='block text-sm font-medium mb-1'>Telefone</label>
                  <input type='tel' className='w-full p-2 border rounded-md' />
                </div>
                <div>
                  <label className='block text-sm font-medium mb-1'>Mensagem</label>
                  <textarea className='w-full p-2 border rounded-md' rows={4}></textarea>
                </div>
                <Button className='w-full bg-red-600 hover:bg-red-700'>Enviar Mensagem</Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

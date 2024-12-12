'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Send } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <Card className='p-8 bg-white shadow-lg'>
      <form onSubmit={handleSubmit} className='space-y-6'>
        <div className='space-y-4'>
          <div>
            <label className='text-sm font-medium text-gray-700 mb-1 block'>Nome</label>
            <input
              type='text'
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className='flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50'
              placeholder='Seu nome completo'
            />
          </div>

          <div>
            <label className='text-sm font-medium text-gray-700 mb-1 block'>Email</label>
            <input
              type='email'
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className='flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50'
              placeholder='seu@email.com'
            />
          </div>

          <div>
            <label className='text-sm font-medium text-gray-700 mb-1 block'>Telefone</label>
            <input
              type='tel'
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className='flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50'
              placeholder='(00) 00000-0000'
            />
          </div>

          <div>
            <label className='text-sm font-medium text-gray-700 mb-1 block'>Mensagem</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className='flex min-h-[100px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50'
              placeholder='Descreva seu projeto ou necessidade...'
            />
          </div>
        </div>

        <Button type='submit' className='w-full bg-red-600 hover:bg-red-700 text-white'>
          <Send className='w-4 h-4 mr-2' />
          Enviar Mensagem
        </Button>
      </form>
    </Card>
  );
}

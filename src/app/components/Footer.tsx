export default function Footer() {
  return (
    <footer className='bg-gray-100 py-12'>
      <div className='max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8'>
        <div>
          <h3 className='font-bold text-lg mb-4'>MECAL Hidrojateamento</h3>
          <p className='text-gray-600'>Referência em serviços de limpeza e manutenção industrial desde 1996.</p>
        </div>
        <div>
          <h3 className='font-bold text-lg mb-4'>Nossas Sedes</h3>
          <ul className='text-gray-600 space-y-2'>
            <li>Rio Grande do Sul</li>
            <li>Rio de Janeiro</li>
            <li>Pernambuco</li>
          </ul>
        </div>
        <div>
          <h3 className='font-bold text-lg mb-4'>Contato</h3>
          <ul className='text-gray-600 space-y-2'>
            <li>Rua 24 de Agosto, 2378</li>
            <li>Liberdade, Esteio - RS</li>
            <li>(51) 3033-7924</li>
            <li>mecalrs@terra.com.br</li>
          </ul>
        </div>
      </div>
      <div className='max-w-6xl mx-auto px-4 mt-8 pt-8 border-t border-gray-200 text-center text-gray-600'>
        <p>© {new Date().getFullYear()} Mecal. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

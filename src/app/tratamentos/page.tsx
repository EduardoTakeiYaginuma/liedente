import React from 'react'

import Image from 'next/image'
const page = () => {
  return (



<div>
    <h1 className="section-title text-center mb-1 mt-12 text-2xl md:text-3xl lg:text-4xl font-bold">Nossos tratamentos disponíveis</h1>
    <div className="w-32 h-1 bg-primary mx-auto mt-2 mb-8"></div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-10 m-10 justify-items-center">
  {/* Item padrão: usa w-full com max-width pra controlar o tamanho em telas maiores */}
  <div className="relative w-full max-w-[600px] h-48 sm:h-56 md:h-64 lg:h-80 overflow-hidden shadow-lg rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer">
    <Image src="/images/implantes.png" alt="Implantes" fill className="object-cover" />
    <div className="absolute inset-0 bg-gradient-to-br from-secondary/70 to-secondary/50" />
    <div className="absolute inset-0 flex items-center justify-center">
      <p className="text-white text-sm sm:text-2xl font-bold drop-shadow-lg">Implantodontia (Implantes)</p>
    </div>
  </div>

  <div className="relative w-full max-w-[600px] h-48 sm:h-56 md:h-64 lg:h-80 overflow-hidden shadow-lg rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer">
    <Image src="/images/endodontia.png" alt="Endodontia" fill className="object-cover" />
    <div className="absolute inset-0 bg-gradient-to-br from-secondary/70 to-secondary/50" />
    <div className="absolute inset-0 flex items-center justify-center">
      <p className="text-white text-sm sm:text-2xl font-bold drop-shadow-lg">Endodontia (Tratamento de Canal)</p>
    </div>
  </div>

  <div className="relative w-full max-w-[600px] h-48 sm:h-56 md:h-64 lg:h-80 overflow-hidden shadow-lg rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer">
    <Image src="/images/periodontia.png" alt="Periodontia" fill className="object-cover" />
    <div className="absolute inset-0 bg-gradient-to-br from-secondary/70 to-secondary/50" />
    <div className="absolute inset-0 flex items-center justify-center">
      <p className="text-white text-sm sm:text-2xl font-bold drop-shadow-lg">Periodontia (Limpeza)</p>
    </div>
  </div>

  <div className="relative w-full max-w-[600px] h-48 sm:h-56 md:h-64 lg:h-80 overflow-hidden shadow-lg rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer">
    <Image src="/images/ortodontia.jpeg" alt="Ortodontia" fill className="object-cover" />
    <div className="absolute inset-0 bg-gradient-to-br from-secondary/70 to-secondary/50" />
    <div className="absolute inset-0 flex items-center justify-center">
      <p className="text-white text-sm sm:text-2xl font-bold drop-shadow-lg">Ortodontia</p>
    </div>
  </div>

  <div className="relative w-full max-w-[600px] h-48 sm:h-56 md:h-64 lg:h-80 overflow-hidden shadow-lg rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer">
    <Image src="/images/protese_dentaria.png" alt="Prótese Dentária" fill className="object-cover" />
    <div className="absolute inset-0 bg-gradient-to-br from-secondary/70 to-secondary/50" />
    <div className="absolute inset-0 flex items-center justify-center">
      <p className="text-white text-sm sm:text-2xl font-bold drop-shadow-lg">Prótese Dentária</p>
    </div>
  </div>

  <div className="relative w-full max-w-[600px] h-48 sm:h-56 md:h-64 lg:h-80 overflow-hidden shadow-lg rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer">
    <Image src="/images/dentistica.png" alt="Dentística" fill className="object-cover" />
    <div className="absolute inset-0 bg-gradient-to-br from-secondary/70 to-secondary/50" />
    <div className="absolute inset-0 flex items-center justify-center">
      <p className="text-white text-sm sm:text-2xl font-bold drop-shadow-lg">Dentística (Estética)</p>
    </div>
  </div>

  {/* Última linha: ocupa as 2 colunas em md+ */}
  <div className="relative w-full max-w-[1200px] h-56 sm:h-64 md:h-72 lg:h-80 overflow-hidden shadow-lg rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer col-span-1 md:col-span-2">
    <Image src="/images/harmonizacao_facial.png" alt="Harmonização Facial" fill className="object-cover" />
    <div className="absolute inset-0 bg-gradient-to-br from-secondary/70 to-secondary/50" />
    <div className="absolute inset-0 flex items-center justify-center">
      <p className="text-white text-sm sm:text-2xl font-bold drop-shadow-lg">Harmonização Facial</p>
    </div>
  </div>
</div>
</div>

  )
}

export default page

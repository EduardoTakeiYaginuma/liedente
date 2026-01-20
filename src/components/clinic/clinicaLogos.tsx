import React from 'react'
import Image from 'next/image'
const clinicaLogos = () => {
  return (
<div className="max-w-4xl mx-auto px-4 my-10">
  {/* 🔹 Primeira linha: 3 imagens */}
  <div className="flex flex-wrap justify-center items-center gap-1">
    <Image
      src="/images/liedente_kids.jpg"
      alt="Liedente Kids"
      width={300}
      height={300}
      className="w-[250px] h-auto object-contain"
    />
    <Image
      src="/images/liedente_lab.jpg"
      alt="Liedente Lab"
      width={300}
      height={300}
      className="w-[250px] h-auto object-contain"
    />
    <Image
      src="/images/liedente_implantes.jpg"
      alt="Liedente Implantes"
      width={300}
      height={300}
      className="w-[250px] h-auto object-contain"
    />
  

  {/* 🔹 Segunda linha: 2 imagens */}
  
    <Image
      src="/images/liedente_ortodontia.jpg"
      alt="Liedente Ortodontia"
      width={300}
      height={300}
      className="w-[250px] h-auto object-contain"
    />
    <Image
      src="/images/liedente_harmonizacao.jpg"
      alt="Liedente Harmonização"
      width={300}
      height={300}
      className="w-[250px] h-auto object-contain"
    />
  </div>
</div>
  )
}

export default clinicaLogos
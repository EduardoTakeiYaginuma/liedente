import React from 'react'
import Image from 'next/image'

const clinicaImagens = () => {
  const images = [
    { src: '/images/liedente_kids.jpg', alt: 'Liedente Kids' },
    { src: '/images/liedente_implantes.png', alt: 'Liedente Implantes' },
    { src: '/images/liedente_ortodontia.png', alt: 'Liedente Ortodontia' },
    { src: '/images/liedente_harmonizacao.png', alt: 'Liedente Harmonização' },
    { src: '/images/liedente_lab.png', alt: 'Liedente Lab' },
  ]

  return (
    <div className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div key={index} className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default clinicaImagens

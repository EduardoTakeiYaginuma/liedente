import React from 'react'
import Image from 'next/image'

const clinicaRecepcao = () => {
    return (
        <div className="relative w-full h-[50vh] sm:h-[50vh] md:h-[50vh] lg:h-[50vh]">
            <Image
                src="/images/clinica_recepcao.jpg"
                alt="Recepção da clínica Liedente"
                fill
                className="object-cover"
                priority
            />
            {/* overlay escuro para melhorar legibilidade do texto */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/70 to-secondary/50" />
            {/* texto centralizado sobre a imagem */}
            <div className="absolute inset-0 flex items-center justify-center px-3 sm:px-4 md:px-6 lg:px-8">
                <h1 style={{fontWeight: 'bold',  fontFamily:"sans-serif"}} className="z-10 text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-center max-w-5xl leading-relaxed drop-shadow-lg">
                    Estamos em constante evolução para oferecer o que ha de melhor no mundo odontológico e, assim, continuarmos sendo referência no mercado
                        

                </h1>
            </div>
        </div>
    )
}

export default clinicaRecepcao

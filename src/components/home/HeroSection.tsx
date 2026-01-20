'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const HeroSection = () => {
  const slides = [
    {
      image: '/images/slideshow1.jpg',
      title: 'Sorrisos saudáveis começam com cuidado de verdade.',
      description: 'O sorriso que você sempre sonhou, com o cuidado que você merece.'
    },
    {
      image: '/images/slideshow2.jpg',
      title: 'Tecnologia avançada para o seu sorriso',
      description: 'Equipamentos modernos e profissionais qualificados ao seu dispor.'
    },
    {
      image: '/images/slideshow3.jpg',
      title: 'Sua saúde bucal em boas mãos',
      description: 'Experiência e dedicação em cada atendimento.'
    }
  ]

  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Muda a cada 5 segundos

    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-100 min-h-[700px] flex items-center overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          {/* Overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/60 via-secondary/40 to-transparent"></div>
        </div>
      ))}

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6 animate-slide-up">
            <div className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full mb-4">
              <span className="text-sm font-medium">Bem-vindo à Liedente</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight transition-all duration-500">
              {slides[currentSlide].title}
            </h1>
            <p className="text-lg md:text-xl text-gray-100 transition-all duration-500">
              {slides[currentSlide].description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/contato" className="btn-primary inline-block text-center text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                Agendar consulta
              </Link>
              <Link href="/tratamentos" className="inline-block text-center text-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 border-2 border-white/50">
                Nossos Tratamentos
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 text-white p-3 md:p-4 rounded-full transition-all duration-300 backdrop-blur-md shadow-lg hover:scale-110"
        aria-label="Slide anterior"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 text-white p-3 md:p-4 rounded-full transition-all duration-300 backdrop-blur-md shadow-lg hover:scale-110"
        aria-label="Próximo slide"
      >
        <ChevronRight size={28} />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default HeroSection


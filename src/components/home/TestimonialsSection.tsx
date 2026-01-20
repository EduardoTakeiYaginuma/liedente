'use client'

import { useState } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Maria Silva',
      role: 'Paciente desde 2020',
      content: 'Excelente atendimento! Profissionais extremamente qualificados e atenciosos. Recomendo!',
      rating: 5,
      image: '/images/avatar1.jpg',
    },
    {
      name: 'João Santos',
      role: 'Paciente desde 2019',
      content: 'A melhor clínica odontológica que já frequentei. Tecnologia de ponta e muito cuidado.',
      rating: 5,
      image: '/images/avatar2.jpg',
    },
    {
      name: 'Ana Paula',
      role: 'Paciente desde 2021',
      content: 'Sempre fui muito bem atendida. Ambiente acolhedor e profissionais competentes.',
      rating: 5,
      image: '/images/avatar3.jpg',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50/50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-primary text-sm font-semibold">Depoimentos</span>
          </div>
          <h2 className="section-title">O que nossos pacientes dizem</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            A satisfação de nossos pacientes é nossa maior conquista
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 transition-all duration-500">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent p-1">
                  <div className="w-full h-full rounded-full bg-gray-200 overflow-hidden">
                    {/* Placeholder for avatar */}
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <span className="text-3xl font-bold text-primary">
                        {testimonials[currentIndex].name.charAt(0)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                {/* Stars */}
                <div className="flex justify-center md:justify-start gap-1 mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="fill-yellow-400 text-yellow-400" size={20} />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-lg md:text-xl text-secondary-muted italic mb-6">
                  "{testimonials[currentIndex].content}"
                </p>

                {/* Author */}
                <div>
                  <p className="text-lg font-bold text-secondary">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-sm text-secondary-muted">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white hover:bg-primary text-secondary hover:text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white hover:bg-primary text-secondary hover:text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Próximo depoimento"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-primary/30'
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection

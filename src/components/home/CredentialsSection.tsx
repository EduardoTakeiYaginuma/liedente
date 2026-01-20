'use client'

import { useEffect, useRef, useState } from 'react'

const CredentialsSection = () => {
  const credentials = [
    { value: 12, label: 'mil  cirurgias de implantes', prefix: '+' },
    { value: 24, label: 'anos de experiência', prefix: '+' },
    { value: 3, label: 'consultórios', prefix: '+' },
  ]

  return (
    <section className="bg-gradient-to-br from-secondary via-secondary-light to-secondary py-24 relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center text-white mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Referência em Excelência Odontológica</h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-200">
            Com uma equipe de dentistas altamente qualificada e uma infraestrutura surpreendente, 
            a Liedente é referência em tratamentos odontológicos multidisciplinares 
            de alta e baixa complexidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {credentials.map((credential, index) => (
            <CounterCard
              key={index}
              value={credential.value}
              label={credential.label}
              prefix={credential.prefix}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

const CounterCard = ({ value, label, prefix }: { value: number; label: string; prefix: string }) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000 // 2 segundos
    const steps = 60
    const increment = value / steps
    const stepDuration = duration / steps

    let currentStep = 0
    const timer = setInterval(() => {
      currentStep++
      if (currentStep <= steps) {
        setCount(Math.floor(increment * currentStep))
      } else {
        setCount(value)
        clearInterval(timer)
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [isVisible, value])

  return (
    <div ref={ref} className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 text-center shadow-2xl hover:shadow-primary/20 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105">
      <div className="bg-gradient-to-br from-primary/10 to-accent/10 w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center">
        <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center">
          <span className="text-3xl font-bold text-primary">{prefix}</span>
        </div>
      </div>
      <h3 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
        {count}
      </h3>
      <p className="text-base md:text-lg text-secondary font-semibold uppercase tracking-wide">
        {label}
      </p>
    </div>
  )
}

export default CredentialsSection


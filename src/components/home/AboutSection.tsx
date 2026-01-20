import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle, Users, Award, Clock } from 'lucide-react'

const AboutSection = () => {
  const features = [
    { icon: Users, title: 'Equipe Especializada', description: 'Mais de 10 profissionais qualificados' },
    { icon: Award, title: 'Excelência em Atendimento', description: 'Compromisso com a qualidade' },
    { icon: Clock, title: 'Horários Flexíveis', description: 'Atendimento que se adapta a você' },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/30 mt-0">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1 space-y-6">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-2">
              <span className="text-primary text-sm font-semibold">Sobre Nós</span>
            </div>
            <h2 className="section-title text-secondary">
              Tecnologia de ponta e profissionais qualificados para cuidar da sua saúde bucal
            </h2>
            <p className="section-subtitle">
              A Liedente conta com três sedes estratégicas e uma equipe de especialistas comprometida em oferecer o melhor em tratamentos odontológicos, sempre priorizando seu conforto e bem-estar.
            </p>
            
            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="flex flex-col items-start space-y-2 p-4 rounded-lg bg-white/60 backdrop-blur-sm hover:bg-white transition-all duration-300 hover:shadow-md">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <h3 className="font-semibold text-secondary text-sm">{feature.title}</h3>
                    <p className="text-xs text-secondary-muted">{feature.description}</p>
                  </div>
                )
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link href="/a-clinica" className="btn-primary inline-block text-center">
                Conheça a Clínica
              </Link>
              <Link href="/tratamentos" className="btn-outline inline-block text-center">
                Ver Tratamentos
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative h-[400px] lg:h-[550px] rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="/images/slideshow3.jpg"
                alt="Clínica Liedente"
                fill
                className="object-cover"
              />
              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs hidden sm:block">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <CheckCircle className="text-primary" size={32} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-secondary">15+</p>
                  <p className="text-sm text-secondary-muted">Anos de Experiência</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection


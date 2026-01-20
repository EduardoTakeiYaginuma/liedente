import Link from 'next/link'
import Image from 'next/image'
import { Phone, MapPin, Mail } from 'lucide-react'

const Footer = () => {
  const locations = [
    {
      name: 'Campinas',
      address: 'Av. Carlos Lacerda, 38',
      district: 'Jardim Santa Lúcia',
      phone: '(19) 3223-4443',
      whatsapp: '(19) 99677-9433',
    },
    {
      name: 'Paulínia',
      address: 'R. Salvador Lombardi Netto, 114',
      district: 'Centro',
      phone: '(19) 3933-2060',
      whatsapp: '(19) 98924-4882',
    },
    {
      name: 'Sumaré',
      address: 'Av. Rebouças, 2468',
      district: 'Centro',
      phone: '(19) 3883-4680',
      whatsapp: '(19) 99177-4417',
    },
  ]

  const quickLinks = [
    { label: 'A Clínica', href: '/a-clinica' },
    { label: 'Tratamentos', href: '/tratamentos' },
    { label: 'Corpo Clínico', href: '/corpo-clinico' },
    { label: 'Contato', href: '/contato' },
  ]

  return (
    <footer className="bg-gradient-to-br from-secondary via-secondary-light to-secondary-dark text-white relative mt-20">
      {/* Wave divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>
      
      <div className="container-custom py-16 pt-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex flex-col items-start mb-4">
              <Image
                src="/images/logo_em_branco.png"
                alt="Liedente Dental Clinic"
                width={240}   //no momento somente utilizadas pelos seus pixels
                height={75}  
                style={{height: '125px' }} //forcando tamanho da imagem
                className="!w-[225px] mb-2 ml-[-0px] mt-4"
              />
            </div>
          </div>

          {/* Locations */}
          {locations.map((location) => (
            <div key={location.name} className="lg:col-span-1">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <MapPin className="text-primary" size={20} />
                {location.name}
              </h3>
              <div className="space-y-3 text-sm">
                <p className="text-gray-300">{location.address}</p>
                <p className="text-gray-300">{location.district}</p>
                <div className="flex items-start gap-2 text-gray-300">
                  <Phone size={16} className="mt-1 flex-shrink-0" />
                  <span>{location.phone}</span>
                </div>
                <Link
                  href={`https://wa.me/${location.whatsapp.replace(/\D/g, '')}`}
                  target="_blank"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 text-sm shadow-md hover:shadow-lg transform hover:-translate-y-1"
                >
                  <Phone size={16} />
                  {location.whatsapp}
                </Link>
              </div>
            </div>
          ))}

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-all duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-4"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 mt-12 pt-8 pb-6">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400 text-center md:text-left">
              &copy; {new Date().getFullYear()} Liedente Dental Clinic. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Mail size={16} />
              <a href="mailto:contato@liedente.com.br" className="hover:text-primary transition-colors">
                contato@liedente.com.br
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


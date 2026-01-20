import ContactFormWithClinic from '@/components/contact/ContactFormWithClinic'
import LocationsSection from '@/components/contact/LocationsSection'

export const metadata = {
  title: 'Contato - Liedente',
  description: 'Entre em contato com a Liedente. Temos 3 unidades: Campinas, Paulínia e Sumaré.',
}

export default function ContatoPage() {
  return (
    <>
      <div className="bg-gray-50 py-8">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold text-secondary mb-2">
            Entre em contato conosco
          </h1>
        <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
      </div>


      <LocationsSection />
      
      <section className="py-12 pb-8 bg-white">
        <div className="container-custom">
          <ContactFormWithClinic />
        </div>
      </section>
    </>
  )
}


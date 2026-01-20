import Link from 'next/link'
import { MapPin, Phone } from 'lucide-react'

const LocationsSection = () => {
  const locations = [
    {
      name: 'Campinas',
      address: 'Av. Carlos Lacerda, 38',
      district: 'Jardim Santa Lúcia',
      phone: "(19) 3223-4443",
    },
    {
      name: 'Paulínia',
      address: 'R. Salvador Lombardi Netto, 114',
      district: 'Centro',
      phone: '(19) 3933-2060',
    },
    {
      name: 'Sumaré',
      address: 'Av. Rebouças, 2468',
      district: 'Centro',
      phone: '(19) 3883-4680',
    },
  ]

  return (
    <section className="bg-secondary py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((location) => (
            <div key={location.name} className="text-center text-white">
              <h3 className="text-primary text-2xl font-bold mb-4">
                {location.name}
              </h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-start justify-center space-x-2">
                  <MapPin size={20} className="mt-1 flex-shrink-0" />
                  <div className="text-left">
                    <p className="text-gray-200">{location.address}</p>
                    {location.district && (
                      <p className="text-gray-200">{location.district}</p>
                    )}
                  </div>
                </div>
              </div>
              <Link
                href={`https://wa.me/${location.phone.replace(/\D/g, '')}`}
                target="_blank"
                className="inline-flex items-center justify-center space-x-2 btn-primary"
              >
                <Phone size={18} />
                <span>{location.phone}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LocationsSection


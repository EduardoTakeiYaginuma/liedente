// Site Configuration
export const SITE_CONFIG = {
  name: 'Liedente Dental Clinic',
  description: 'Clínica Odontológica de excelência em Campinas, Paulínia e Sumaré',
  url: 'https://liedente.com.br',
  email: 'contato@liedente.com.br',
}

// Navigation Links
export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'A Clínica', href: '/a-clinica' },
  { label: 'Tratamentos', href: '/tratamentos' },
  { label: 'Corpo Clínico', href: '/corpo-clinico' },
  { label: 'Contato', href: '/contato' },
]

// Clinic Locations
export const LOCATIONS = [
  {
    id: 'campinas',
    name: 'Campinas',
    address: 'Av. Carlos Lacerda, 38',
    district: 'Jardim Santa Lúcia',
    city: 'Campinas',
    state: 'SP',
    zipCode: '13040-020',
    phone: '(19) 3223-4443',
    whatsapp: '(19) 99677-9433',
    mapUrl: 'https://maps.google.com/?q=Av.+Carlos+Lacerda+38+Campinas',
  },
  {
    id: 'paulinia',
    name: 'Paulínia',
    address: 'R. Salvador Lombardi Netto, 114',
    district: 'Centro',
    city: 'Paulínia',
    state: 'SP',
    zipCode: '13140-000',
    phone: '(19) 3933-2060',
    whatsapp: '(19) 98924-4882',
    mapUrl: 'https://maps.google.com/?q=R.+Salvador+Lombardi+Netto+114+Paulinia',
  },
  {
    id: 'sumare',
    name: 'Sumaré',
    address: 'Av. Rebouças, 2468',
    district: 'Centro',
    city: 'Sumaré',
    state: 'SP',
    zipCode: '13170-000',
    phone: '(19) 3883-4680',
    whatsapp: '(19) 99177-4417',
    mapUrl: 'https://maps.google.com/?q=Av.+Reboucas+2468+Sumare',
  },
]

// Treatments
export const TREATMENTS = [
  {
    id: 'implantes',
    name: 'Implantes Dentários',
    description: 'Recupere seu sorriso com implantes de alta qualidade',
    icon: '🦷',
  },
  {
    id: 'ortodontia',
    name: 'Ortodontia',
    description: 'Aparelhos fixos e alinhadores invisíveis',
    icon: '😁',
  },
  {
    id: 'estetica',
    name: 'Estética Dental',
    description: 'Clareamento, lentes de contato e facetas',
    icon: '✨',
  },
  {
    id: 'protese',
    name: 'Prótese Dentária',
    description: 'Próteses fixas e removíveis',
    icon: '🦷',
  },
  {
    id: 'endodontia',
    name: 'Endodontia',
    description: 'Tratamento de canal com tecnologia avançada',
    icon: '💉',
  },
  {
    id: 'periodontia',
    name: 'Periodontia',
    description: 'Tratamento de gengivas e ossos',
    icon: '🩺',
  },
]

// Stats/Credentials
export const STATS = [
  { value: 12, label: 'mil cirurgias de implantes', prefix: '+' },
  { value: 24, label: 'anos de experiência', prefix: '+' },
  { value: 3, label: 'consultórios', prefix: '+' },
]

// Social Media
export const SOCIAL_MEDIA = {
  facebook: 'https://facebook.com/liedente',
  instagram: 'https://instagram.com/liedente',
  linkedin: 'https://linkedin.com/company/liedente',
}

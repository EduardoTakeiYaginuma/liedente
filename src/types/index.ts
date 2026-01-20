// Types for the application

export interface Location {
  name: string
  address: string
  district: string
  phone: string
  whatsapp: string
}

export interface Stat {
  value: string
  label: string
  suffix?: string
}

export interface Treatment {
  title: string
  description: string
}

export interface ContactFormData {
  nome: string
  email: string
  assunto: string
  mensagem: string
}

export interface NavItem {
  label: string
  href: string
}


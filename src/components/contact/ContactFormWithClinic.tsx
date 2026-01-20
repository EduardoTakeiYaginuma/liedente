'use client'

import { useState } from 'react'
import emailjs from 'emailjs-com'

const ContactFormWithClinic = () => {
  const clinicas = [
    {
      nome: 'Campinas',
      endereco: 'Av. Carlos Lacerda, 38 - Jardim Santa Lúcia',
      email: 'recep.campinas@liedente.com.br',
      mapa:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.0976736831473!2d-47.06348668449636!3d-22.90467384346159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8cf32b4f8b3f7%3A0x7d4a5d7a5a4a5a4a!2sAv.%20Carlos%20Lacerda%2C%2038%20-%20Jardim%20Santa%20Lucia%2C%20Campinas%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890',
    },
    {
      nome: 'Paulínia',
      endereco: 'R. Salvador Lombardi Netto, 114 - Centro',
      email: 'recep.paulinia@liedente.com.br',
      mapa:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.524332575386!2d-47.1540012!3d-22.7611797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8bd275eb48189%3A0xd9b06ff512f9ad2a!2sR.%20Salvador%20Lombardi%20Netto%2C%20114%20-%20Centro%2C%20Paul%C3%ADnia%20-%20SP%2C%2013140-000!5e0!3m2!1spt-BR!2sbr!4v1730740000000',
    },
    {
      nome: 'Sumaré',
      endereco: 'Av. Rebouças, 2468 - Centro',
      email: 'recep.sumare@liedente.com.br',
      mapa:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3676.205632315564!2d-47.2669215!3d-22.8214565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8bb7a5b6e8f4d%3A0x1a4a6ef0a5f3d3ce!2sAv.%20Rebou%C3%A7as%2C%202468%20-%20Centro%2C%20Sumar%C3%A9%20-%20SP%2C%2013170-230!5e0!3m2!1spt-BR!2sbr!4v1730740000001',
    },
  ]

  const [selectedClinica, setSelectedClinica] = useState(clinicas[0])
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleClinicaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const clinica = clinicas.find((c) => c.nome === e.target.value)
    if (clinica) {
      setSelectedClinica(clinica)
    }
  }

  // utilitário simples de validação de e-mail (básico)
  const isValidEmail = (email?: string) => {
    if (!email) return false
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email.trim())
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      const recipientRaw = selectedClinica.email ?? ''
      const recipient = recipientRaw.trim()

      // DEBUG logs
      console.groupCollapsed('ContactFormWithClinic Debug')
      console.log('selectedClinica:', selectedClinica)
      console.log('recipient email (raw):', recipientRaw)
      console.log('recipient email (trimmed):', recipient)
      console.log('formData:', formData)
      console.log('ENV:', {
        SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      })
      console.groupEnd()

      // validações básicas antes de enviar
      if (!isValidEmail(recipient)) {
        console.error('Abortando envio: email da clínica inválido ou vazio:', recipient)
        setSubmitMessage('Falha: e-mail da unidade inválido. Verifique o console.')
        setIsSubmitting(false)
        return
      }
      if (!formData.nome || !formData.email || !formData.mensagem) {
        setSubmitMessage('Preencha nome, e-mail e mensagem antes de enviar.')
        setIsSubmitting(false)
        return
      }
      if (!isValidEmail(formData.email)) {
        setSubmitMessage('O e-mail fornecido é inválido.')
        setIsSubmitting(false)
        return
      }

      // monta os template params - inclui to_email e clinica_email
      const templateParams = {
        from_name: formData.nome,
        from_email: formData.email,
        from_telefone: formData.telefone,
        subject: formData.assunto,
        message: formData.mensagem,
        clinica: selectedClinica.nome,
        to_email: recipient,
      }

      console.log('TEMPLATE PARAMS (antes do send):', templateParams)

      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )

      console.log('EmailJS send result:', result)
      setSubmitMessage(`Mensagem enviada com sucesso para a unidade ${selectedClinica.nome}! Entraremos em contato em breve.`)
      setFormData({ nome: '', email: '', telefone: '', assunto: '', mensagem: '' })
    } catch (err: any) {
      console.error('Erro raw do EmailJS:', err)
      if (err && err.status) console.error('Status:', err.status)
      if (err && err.text) console.error('Text:', err.text)
      if (err && err.response && typeof err.response.text === 'function') {
        const txt = await err.response.text().catch(() => 'no-body')
        console.error('response.text():', txt)
      }
      setSubmitMessage('Ocorreu um erro ao enviar sua mensagem. Veja console para detalhes.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Formulário */}
      <div>
        <h2 className="text-2xl font-bold text-secondary mb-6">Envie sua mensagem</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="clinica" className="block text-sm font-medium text-gray-700 mb-2">
              Selecione a unidade
            </label>
            <select
              id="clinica"
              name="clinica"
              value={selectedClinica.nome}
              onChange={handleClinicaChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white"
            >
              {clinicas.map((clinica) => (
                <option key={clinica.nome} value={clinica.nome}>
                  {clinica.nome} - {clinica.endereco}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
              Nome
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
              placeholder="Seu nome completo"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
              placeholder="seu@email.com"
            />
          </div>

          <div>
            <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">
              Telefone
            </label>
            <input
              type="text"
              id="telefone"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
              placeholder="Seu telefone com DDD"
            />
          </div>

          <div>
            <label htmlFor="assunto" className="block text-sm font-medium text-gray-700 mb-2">
              Assunto
            </label>
            <input
              type="text"
              id="assunto"
              name="assunto"
              value={formData.assunto}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
              placeholder="Assunto da mensagem"
            />
          </div>

          <div>
            <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-2">
              Mensagem
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              value={formData.mensagem}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
              placeholder="Escreva sua mensagem aqui..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
          </button>

          {submitMessage && (
            <div
              className={`p-4 rounded-lg border ${
                submitMessage.includes('sucesso')
                  ? 'bg-green-50 text-green-800 border-green-200'
                  : 'bg-red-50 text-red-800 border-red-200'
              }`}
            >
              {submitMessage}
            </div>
          )}
        </form>
      </div>

      {/* Mapa */}
      <div>
        <h2 className="text-2xl font-bold text-secondary mb-6">Localização - {selectedClinica.nome}</h2>
        <div className="h-[600px] bg-gray-200 rounded-lg overflow-hidden shadow-lg">
          <iframe
            key={selectedClinica.nome}
            src={selectedClinica.mapa}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  )
}

export default ContactFormWithClinic

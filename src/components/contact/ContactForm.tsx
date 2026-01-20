'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'

type FormData = {
  nome: string
  email: string
  telefone: string
  assunto: string
  mensagem: string
  unidade: string
}

const UNIT_EMAILS: Record<string, string> = {
  campinas: 'tpenha30@gmail.com',
  paulinia: 'thipcpenha@gmail.com',
  sumare: 'contato-sumare@exemplo.com',
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: '',
    unidade: 'campinas', // default
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    // pega e-mail da unidade selecionada (fallback para um e-mail genérico)
    const recipientEmail = UNIT_EMAILS[formData.unidade] ?? ''

    // === DEBUG: checagens antes de enviar ===
    console.groupCollapsed('%cContactForm Debug', 'color: #0b69ff; font-weight: 700')
    console.log('formData:', formData)
    console.log('recipientEmail (from UNIT_EMAILS):', recipientEmail)
    console.log('ENV VARS:',
      'SERVICE_ID=', process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      'TEMPLATE_ID=', process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      'PUBLIC_KEY=', process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    )
    console.groupEnd()

    if (!recipientEmail) {
      console.error('Abortando envio: recipientEmail está vazio. Verifique UNIT_EMAILS e o value do select.')
      setSubmitMessage('Falha: e-mail da unidade não definido. Verifique o console.')
      setIsSubmitting(false)
      return
    }

    const templateParams = {
      from_name: formData.nome,
      from_email: formData.email,
      from_telefone: formData.telefone,
      subject: formData.assunto,
      message: formData.mensagem,
      to_email: recipientEmail, // variável usada para preencher o "To" no template do EmailJS
      unidade: formData.unidade,
    }

    // outro log para confirmar que to_email existe no templateParams
    console.log('TEMPLATE PARAMS antes do send:', templateParams)

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      console.log('EmailJS send result:', result)
      setSubmitMessage('Mensagem enviada com sucesso! Entraremos em contato em breve.')
      setFormData({ nome: '', email: '', telefone: '', assunto: '', mensagem: '', unidade: 'campinas' })
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
    <div>
      <form onSubmit={handleSubmit} className="space-y-6" id="contact-form">
        {/* … seus inputs (nome, email, telefone, assunto, mensagem) … */}

        <div>
          <label htmlFor="unidade" className="block text-sm font-medium text-gray-700 mb-2">Unidade</label>
          <select
            id="unidade"
            name="unidade"
            value={formData.unidade}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
          >
            <option value="campinas">Campinas</option>
            <option value="paulinia">Paulínia</option>
            <option value="sumare">Sumaré</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
        </button>

        {submitMessage && (
          <div className="bg-green-50 text-green-800 p-4 rounded-lg border border-green-200">
            {submitMessage}
          </div>
        )}
      </form>
    </div>
  )
}

export default ContactForm

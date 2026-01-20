'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'Quais formas de pagamento são aceitas?',
    answer: 'Aceitamos dinheiro, cartões de crédito e débito, e também trabalhamos com diversos planos odontológicos. Consulte-nos para mais informações sobre parcelamento.',
  },
  {
    question: 'A clínica atende convênios?',
    answer: 'Sim, trabalhamos com diversos convênios odontológicos. Entre em contato para verificar se o seu plano é aceito.',
  },
  {
    question: 'Como funciona o agendamento?',
    answer: 'Você pode agendar por telefone, WhatsApp ou através do formulário de contato em nosso site. Nossa equipe retornará em até 24 horas.',
  },
  {
    question: 'Qual o tempo de duração do tratamento de implante?',
    answer: 'O tempo varia de acordo com cada caso, mas geralmente leva de 3 a 6 meses. Na primeira consulta, nosso especialista fará uma avaliação completa.',
  },
  {
    question: 'A clínica oferece atendimento de emergência?',
    answer: 'Sim, temos um sistema de plantão para emergências. Entre em contato através dos nossos telefones para mais informações.',
  },
]

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-primary text-sm font-semibold">FAQ</span>
          </div>
          <h2 className="section-title">Perguntas Frequentes</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Tire suas dúvidas sobre nossos serviços e tratamentos
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50/50 to-cyan-50/30 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left group"
              >
                <span className="font-semibold text-secondary group-hover:text-primary transition-colors duration-300">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`text-primary flex-shrink-0 ml-4 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  size={20}
                />
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-4 text-secondary-muted">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-secondary-muted mb-4">Não encontrou o que procurava?</p>
          <a
            href="/contato"
            className="btn-primary inline-block"
          >
            Entre em contato
          </a>
        </div>
      </div>
    </section>
  )
}

export default FAQSection

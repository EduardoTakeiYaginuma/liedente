export const metadata = {
  title: 'Corpo Clínico - Liedente',
  description: 'Conheça nossa equipe de profissionais especializados.',
}
//w-24 h-1 bg-primary
export default function CorpoClinicoPage() {
  return (
    <div className="py-12 pb-8">
      <div className="container-custom">
        <h1 className="section-title text-center mb-1">Corpo Clínico</h1>
        <div className="w-24 h-1 bg-primary mx-auto mt-0 mb-6"></div> 

        
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-lg text-gray-700">
            Nossa equipe é composta por mais de 10 especialistas altamente qualificados, 
            dedicados a proporcionar o melhor atendimento e cuidado com sua saúde bucal.
          </p>
        </div>

        {/* IMAGENS DOS PROFISSIONAIS */}
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-8">
          {[
            {
              nome: "Dra. Ayra Martins",
              imagem: "/images/6.jpg",
            },
            {
              nome: "Dra. Elisabete Sakiko Komatu Higa",
              imagem: "/images/7.jpg",
            },
            {
              nome: "Dra. Giulia Taniguchi de Mattos",
              imagem: "/images/3.jpg",
            },
            {
              nome: "Dra. Jennifer Mayumi Hashimoto",
              imagem: "/images/8.jpg",
            },
            {
              nome: "Dra. Jéssica de Oliveira Souza",
              imagem: "/images/4.jpg",
            },
            {
              nome: "Dra. Luciane Satiko Suzuki",
              imagem: "/images/2.jpg",
            },
            {
              nome: "Dra. Maria Luiza Rocha Sato",
              imagem: "/images/12.jpeg",
            },
            {
              nome: "Dra. Marisa Toshie Yaginuma",
              imagem: "/images/11.jpg",
            },
            {
              nome: "Dra. Mayara Tofaneli Brito",
              imagem: "/images/10.jpg",
            },
            {
              nome: "Dra. Polyana Belletati Barbosa",
              imagem: "/images/1.jpg",
            },
            {
              nome: "Dra. Priscila Watanabe Tomiyama",
              imagem: "/images/5.jpg",
            },

          ].map((profissional, index) => (
            <div key={index} className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm">
              <img
                src={profissional.imagem}
                alt={profissional.nome || `Profissional ${index + 1}`}
                className="object-cover w-full h-auto rounded-lg shadow-lg"
              />
              <p className="text-center mt-3 font-semibold text-gray-700">{profissional.nome}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 mb-8 text-center">
          <p className="text-xl md:text-2xl text-gray-700 mb-8 font-medium max-w-3xl mx-auto">
            Quer conhecer melhor nossa equipe? Entre em contato para agendar uma consulta.
          </p>
          <a href="/contato" className="btn-primary inline-block text-lg px-12 py-4">
            Agendar Consulta
          </a>
        </div>
      </div>
    </div>
  )
}


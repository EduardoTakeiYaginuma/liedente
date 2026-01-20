import React from 'react'
import Image from 'next/image'

const ClinicaFundadores = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-10 md:p-12 lg:p-14">
      
      {/* Imagem */}
      <div className="flex-shrink-0">
        <Image
          src="/images/clinica_fundadores.jpg"
          alt="Fundadores da Clínica Liedente"
          width={400}
          height={400}
          className="w-full md:w-[400px] h-auto object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Texto */}
      <div
        style={{ fontFamily: "Scada, sans-serif" }}
        className="flex-1 text-center md:text-left text-xs lg:text-base max-w-[900px]"
      >
        <p className="mt-8 mb-8 leading-relaxed">
          <span style={{ color: "#389fdc" }} className="font-semibold">
            Fundada em 2001
          </span>, a Clínica Liedente teve seu início como o consultório particular da{" "}
          <span style={{ color: "#389fdc" }} className="font-semibold">
            Dra. Priscila Watanabe Tomiyama
          </span>, uma profissional dedicada e apaixonada pela odontologia.
        </p>

        <p className="mb-8 leading-relaxed">
          Formada pela renomada{" "}
          <span style={{ color: "#389fdc" }} className="font-semibold">
            USP
          </span>{" "}
          de São Paulo, a Dra. Priscila se aperfeiçoou em quase todas as áreas da odontologia moderna,
          buscando sempre a excelência no atendimento. Com uma visão humanizada e comprometida com a saúde bucal da comunidade,
          ela optou por dedicar sua carreira a atender a população que mais necessitava de cuidados odontológicos de qualidade.
        </p>

        <p className="mb-8 leading-relaxed">
          Assim, iniciaram-se os trabalhos na Av. Carlos Lacerda, no Jardim Santa Lúcia em Campinas, onde o consultório cresceu
          e se transformou na Clínica Liedente, mantendo-se na mesma avenida e expandindo sua estrutura para melhor atender
          seus pacientes com conforto e tecnologia.
        </p>

        <p className="mb-8 leading-relaxed">
          Com o sucesso e reconhecimento da qualidade dos serviços prestados, em{" "}
          <span style={{ color: "#389fdc" }} className="font-semibold">
            2012 foi inaugurada a unidade de Paulínia
          </span>{" "}
          e em{" "}
          <span style={{ color: "#389fdc" }} className="font-semibold">
            2015 a unidade de Sumaré
          </span>. Hoje, com orgulho, contamos com{" "}
          <span style={{ color: "#389fdc" }} className="font-semibold">
            03 unidades estrategicamente localizadas
          </span>, todas com o objetivo de levar tratamento odontológico de qualidade e acessível
          ao alcance de toda a população da região.
        </p>

        <p className="mb-8 leading-relaxed">
          Estamos em constante evolução, investindo em tecnologia de ponta, capacitação profissional contínua e infraestrutura moderna
          para oferecer o que há de melhor no mundo odontológico. Assim, mantemos nosso compromisso de continuarmos sendo referência no mercado,
          sempre colocando o bem-estar e a satisfação de nossos pacientes em primeiro lugar.
        </p>
      </div>
    </div>
  )
}

export default ClinicaFundadores

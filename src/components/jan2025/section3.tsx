import { Check } from "lucide-react"
import Image from "next/image"

export function Benefits() {
  const benefits = [
    "Falar inglês com fluência e naturalidade em qualquer situação.",
    "Viajar de forma independente e aproveitar experiências culturais sem barreiras.",
    "Melhorar a performance em reuniões, apresentações e interações no trabalho.",
    "Se destacar profissionalmente, alcançando cargos mais altos ou oportunidades internacionais.",
  ]

  return (
    <section className="relative bg-white z-[-2]">
      <Image
        src="/images/bandeira.webp"
        alt="Overcome the Impossible"
        width={1920}
        height={1080}
        objectPosition="center"
        className="-left-4 md:left-0 top-0 w-10 md:w-15 lg:w-40 h-full z-[-1] absolute"
      />
      <div className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Por que esse evento é para você?</h2>

        <div className="max-w-3xl mx-auto">
          <p className="text-gray-400 text-center mb-12">
            Assim como no filme Interestelar, você enfrentará a gravidade dos seus desafios e descobrirá que a
            verdadeira força para superar o impossível está dentro de você.
          </p>

          <div className="bg-[#0A0314] rounded-xl text-white">
            <h3 className="text-xl font-semibold mb-6 bg-[#1C0634] py-4 rounded-tr-xl rounded-tl-xl text-center">Benefícios de participar do Overcome the Impossible</h3>
            <ul className="space-y-4 p-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-8 w-8 bg-blue-400 mt-1 flex-shrink-0 text-white rounded-full p-2" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}


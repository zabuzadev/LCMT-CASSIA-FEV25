import { BrainCircuit, ShieldCheck, Speech } from "lucide-react"
import Image from "next/image"

export function Methodology() {
    const methods = [
      {
        number: "BrainCircuit",
        title: "Estratégias para conectar inglês a contextos profissionais e pessoais",
      },
      {
        number: "ShieldCheck",
        title: "Técnicas de redução de ansiedade",
      },
      {
        number: "Speech",
        title: "Métodos para criar impacto imediato ao falar",
      },
    ]
  
    return (
      <section className="relative py-16 px-4 bg-white z-[-2]">
         <Image
                src="/images/bandeira.webp"
                alt="Overcome the Impossible"
                width={1920}
                height={1080}
                objectPosition="center"
                className="-left-4 md:left-0 top-0 w-10 md:w-15 lg:w-40 h-full z-[-1] absolute"
              />
        <div className="container mx-auto max-w-3xl z-10">
          <h3 className="text-2xl font-bold text-center mb-8 text-[#1C0634]">
            Metodologia exclusiva, baseada na ciência e na prática real:
          </h3>
  
          <div className="space-y-4 ">
            {methods.map((method, index) => (
              <div key={index} className="bg-[#1C0634] p-4 rounded-xl flex items-center gap-4 text-white">
                {method.number === "BrainCircuit" && <BrainCircuit className="w-12 h-12 text-black bg-white rounded-full p-2" />}
                {method.number === "ShieldCheck" && <ShieldCheck className="w-12 h-12 text-black bg-white rounded-full p-2" />}
                {method.number === "Speech" && <Speech className="w-12 h-12 text-black bg-white rounded-full p-2" />}
                <p>{method.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  
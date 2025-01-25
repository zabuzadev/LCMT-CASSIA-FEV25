import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, Globe } from "lucide-react"
import Image from "next/image"
import Form from "./form"

export function HeroSection() {
  return (
    <div className="relative min-h-[600px] px-4 py-16 overflow-hidden bg-[url('/images/bg.webp')] bg-cover bg-center flex items-center justify-center">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Rocket effect */}
        <div className="absolute left-1/2 -translate-x-1/2 top-20 w-full max-w-[100px]">
          <Image
            width={100}
            height={100}
            src="/images/rocket.webp"
            alt=""
            className="w-full h-auto"
          />
        </div>

        {/* Smoke effect */}
        <div className="absolute -top-6 md:-top-20 left-1/2  -translate-x-1/2">
          <Image
            width={500}
            height={500}
            src="/images/smoke.webp"
            alt=""
            className="w-[500px] h-auto"
          />
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto grid md:grid-cols-2 gap-12 relative z-10 text-white max-w-6xl">
        <div className="space-y-4">
          <Image
            src="/images/logo.webp"
            alt="Rocket"
            width={400}
            height={400}
          />
          <p className="text-xl text-gray-300">
            A jornada para destravar seu inglês e transformar o impossível em realidade.
          </p>
          <p className="text-gray-400">
            Você já imaginou quantas oportunidades estão além da barreira do idioma? Agora é sua chance de superá-las e
            alcançar novos horizontes.
          </p>
          <div className="space-y-2 bg-gray-900/50 p-4 rounded-lg inline-block">
            <div className="flex items-center gap-2">
              <span className="text-gray-400 flex items-center gap-1">
                <Calendar size={20} />Data:</span>
              <span>30/01 (Quinta-feira)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-400 flex items-center gap-1">
                <Clock size={20} />
                Horário:</span>
              <span>19h</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-400 flex items-center gap-1">
                <Globe size={20} />
                Formato:</span>
              <span>Online, ao vivo e gratuito</span>
            </div>
          </div>

          {/* Form */}
          <div className="bg-gray-900/50 p-6 rounded-xl backdrop-blur">
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Inscreva-se gratuitamente</h2>
          </div>
         <Form 
            webhookLink="https://n8n.aesmkt.com.br/webhook/cassia-lzto-fev25"
         />
        </div>
        </div>

        {/* Image */}
        <div className="self-end">
          <Image
            src="/images/cassia-hero.webp"
            alt="Cássia Luz"
            width={300}
            height={300}
            className="w-60 h-72 md:w-full md:h-full md:max-h-[700px] place-self-center"
          />
        </div>
       
      </div>
    </div>
  )
}


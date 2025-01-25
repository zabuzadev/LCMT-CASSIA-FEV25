import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function MentorSection() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/images/cassia.webp"
              width={600}
              height={600}
              alt="Mentor"
              className="rounded-xl w-full max-w-md mx-auto"
            />
          </div>

          <div className="space-y-6 text-white">
            <div className="inline-flex items-center gap-2 bg-red-300/50 text-white font-bold px-3 py-1 rounded-full">
              <Heart className="w-4 h-4" />
              <span>Sua Mentora</span>
            </div>

            <h2 className="text-2xl font-bold">Quem será sua mentora?</h2>

            <div className="space-y-4 text-gray-300">
              <p>
                Sou graduada em Letras - Inglês pela UFPE, com mestrado em Linguística e graduada em Cinema e Vídeo pela
                FAAP.
              </p>
              <p>
                Possuo certificações internacionais de ensino de inglês por Cambridge e Oxford, com foco em metodologia
                da aprendizagem e pensamento crítico.
              </p>
              <p>
                Minha missão é ensinar inglês como uma ponte para conexões globais, indo além do idioma, permitindo ao
                Brasileiro a ajudar você a falar com confiança, criar impacto e transformar seu mundo.
              </p>
            </div>

            <blockquote className="border-l-4 border-red-500 pl-4 italic text-gray-100 bg-white/10 p-4 rounded-xl">
              "O impossível é apenas o começo para quem tem as ferramentas certas."
              <footer className="mt-2 font-semibold text-white">— Cássia Lorena</footer>
            </blockquote>

            <Button variant="destructive" className="bg-red-600 px-6 py-6 hover:bg-red-700 font-bold" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Quero Participar e Transformar Minha Vida
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}


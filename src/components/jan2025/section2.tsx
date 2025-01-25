import { Button } from "@/components/ui/button"

export function SuccessStories() {
  return (
    <section className=" bg-[#0A0213] text-white">
      <div className="flex justify-center space-x-4">
        <span className="bg-blue-500 w-36 h-1 rounded-bl-xl rounded-br-xl"></span>
        <span className="bg-white w-36 h-1 rounded-bl-xl rounded-br-xl"></span>
        <span className="bg-red-500 w-36 h-1 rounded-bl-xl rounded-br-xl"></span>
      </div>
      <div className="container mx-auto text-center space-y-12 pt-16 pb-4 px-4">
        <h2 className="text-3xl font-bold max-w-2xl mx-auto">
          Você se dedica, tenta métodos diferentes, mas a fluência parece longe?
        </h2>
        <p className="text-gray-400 max-w-3xl mx-auto">
          Assim como no filme Interestelar, você enfrentará a gravidade dos seus desafios e descobrirá que a verdadeira
          força para superar o impossível está dentro de você.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-xl text-black">
            <img src="/images/pessoasVendoUmGrafico.webp" alt="Students working" className="mb-4 w-full" />
            <p className="font-semibold">Alunos que saíram do bloqueio e hoje lideram projetos internacionais.</p>
          </div>
          <div className="bg-white p-6 rounded-xl text-black">
            <img src="/images/conversaEmPublico.webp" alt="Public speaking" className="mb-4 w-full" />
            <p className="font-semibold">Pessoas que superaram o medo de falar em público em outra língua.</p>
          </div>
        </div>

      <Button variant="destructive" className="bg-red-600 px-6 py-6 mb-16 hover:bg-red-700 font-bold" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        Quero Mudar de Patamar
      </Button>

      
      </div>
      <div className="flex justify-center space-x-4 mt-6">
        <span className="bg-blue-500 w-36 h-1 rounded-tl-xl rounded-tr-xl"></span>
        <span className="bg-white w-36 h-1 rounded-tl-xl rounded-tr-xl"></span>
        <span className="bg-red-500 w-36 h-1 rounded-tl-xl rounded-tr-xl"></span>
      </div>
    </section>
  )
}


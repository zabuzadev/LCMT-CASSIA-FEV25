"use client";
import { CalendarDays, Clock, Globe2, Heart, Stethoscope } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function ObgPage() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 83) {
          clearInterval(interval);
          return 83;
        }
        return prev + 1;
      });
    }, 50); // Ajuste o tempo de animação aqui

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-[url('/images/bg.webp')] bg-cover bg-center pt-12 pb-24 min-h-screen flex justify-center items-center">
      <div className="container mx-auto px-4 relative ">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="p-6 bg-white/20 border-none shadow-lg rounded-3xl">
            <div className="space-y-6">
              <Image
                src="/images/logo.webp"
                alt="Logo"
                width={400}
                height={60}
                className="mx-auto"
              />
              <h1 className="text-3xl md:text-4xl lg:text-3xl font-bold text-gray-100 leading-tight">
                Parabéns! Você acaba de dar um grande passo na sua jornada para
                falar inglês fluente.
              </h1>
              <div className="relative bg-gray-200 rounded-full h-8 shadow-md overflow-hidden">
                <div
                  className="h-full bg-blue-500 transition-all ease-out rounded-tr-3xl rounded-br-3xl"
                  style={{ width: `${progress}%` }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold">
                  Inscrição quase concluída - 87%
                </div>
              </div>
              <h2 className="text-xl md:text-lg text-pink-100 ">
                Nosso treinamento <span className="text-blue-400 font-extrabold">exclusivo</span> vai ensinar você a conquistar a
                <span className="text-blue-400 font-bold"> fluência em inglês</span> que abre portas para oportunidades incríveis,
                seja para viajar, trabalhar no exterior ou até ganhar mais na
                sua profissão. <span className="text-blue-400 font-bold">Tudo isso de forma prática</span>, mesmo começando do
                zero.
              </h2>

              <h3 className="text-xl md:text-lg text-pink-100 font-bold">
                Para finalizar sua participação, entre agora mesmo para o grupo
                exclusivo do WhatsApp.
              </h3>

              <Link
                href="https://chat.whatsapp.com/LumutcqFwxuBJ8qNade9lA"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white w-full text-center px-6 py-3 rounded-lg font-bold text-xl"
              >
                Quero fazer parte do grupo especial
              </Link>

              <p className="text-lg text-pink-100 font-semibold">
                O grupo é a forma mais segura de garantir que você
                <span className="text-blue-500">
                  {" "}
                  receberá o link da aula e todos os materiais exclusivos que
                  preparamos.
                </span>
              </p>
              <p className="text-lg text-pink-100 font-semibold">
                Fique tranquilo, o grupo é silencioso e seguro. Apenas nossa
                equipe vai mandar mensagem.
              </p>
            </div>
          </div>

          <div className="relative ">
            <Image
              src="/images/obg.png"
              alt="Cássia Lorena"
              width={500}
              height={400}
              className="mx-auto relative rounded-3xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

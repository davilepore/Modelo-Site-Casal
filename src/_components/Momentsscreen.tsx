"use client";

import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "./_ui/card";
import { Carousel, CarouselContent, CarouselItem } from "./_ui/carousel";

type Item = {
  id: number;
  title: string;
  image: string;
  description: string;
};

const items: Item[] = [
  {
    id: 1,
    title: "Nosso Primeiro Encontro",
    image: "/representativa.webp",
    description: "O dia que tudo começou ❤️",
  },
  {
    id: 2,
    title: "Nossa Primeira Viagem",
    image: "/representativa.webp",
    description: "Momentos inesquecíveis juntos ✨",
  },
  {
    id: 3,
    title: "Dia Especial",
    image: "/representativa.webp",
    description: "Um dos dias mais felizes da minha vida 💕",
  },
];

export default function Momentsscreen() {
  const [active, setActive] = React.useState(0);
  const [selected, setSelected] = React.useState<Item | null>(null);

  if (selected) {
    return (
      <div className="min-h-full flex flex-col items-center justify-center w-[80%] mx-auto bg-black/50 backdrop-blur-md text-white">
        <h1 className="text-4xl mb-6">{selected.title}</h1>

        <Image
          src={selected.image}
          width={200}
          height={200}
          alt={selected.title}
          className="rounded-xl object-cover mb-6"
        />

        <p className="max-w-xl text-center leading-relaxed text-gray-200">
          {selected.description}
        </p>

        <button
          onClick={() => setSelected(null)}
          className="mt-6 px-6 py-2 bg-pink-500 rounded-lg hover:bg-pink-600 transition"
        >
          Voltar
        </button>
      </div>
    );
  }

  return (
    <div
      id="moments"
      className="flex items-center justify-center flex-col  gap-10 py-20"
    >
      <h1 className="text-4xl text-white">Nossos Momentos</h1>

      <Carousel
        className="w-full max-w-sm"
        setApi={(api) => {
          if (!api) return;
          api.on("select", () => {
            setActive(api.selectedScrollSnap());
          });
        }}
      >
        <CarouselContent>
          {items.map((item, index) => {
            const isActive = index === active;

            return (
              <CarouselItem key={item.id} className="basis-1/2 md:basis-1/3">
                <div
                  onClick={() => isActive && setSelected(item)}
                  className={`
                    p-2 transition-all duration-300 cursor-pointer
                    ${
                      isActive
                        ? "opacity-100 scale-100"
                        : "opacity-40 scale-90 pointer-events-none"
                    }
                  `}
                >
                  <Card>
                    <CardContent className="relative aspect-square p-0 overflow-hidden rounded-xl">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

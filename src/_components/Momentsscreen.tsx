"use client";

import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "./_ui/card";
import { Carousel, CarouselContent, CarouselItem } from "./_ui/carousel";

const items = [
  {
    id: 1,
    image: "/representativa.webp",
    onClick: () => alert("Clicou na foto 1"),
  },
  {
    id: 2,
    image: "/representativa.webp",
    onClick: () => alert("Clicou na foto 2"),
  },
  {
    id: 3,
    image: "/representativa.webp",
    onClick: () => alert("Clicou na foto 3"),
  },
  {
    id: 4,
    image: "/representativa.webp",
    onClick: () => alert("Clicou na foto 4"),
  },
  {
    id: 5,
    image: "/representativa.webp",
    onClick: () => alert("Clicou na foto 5"),
  },
];

export default function Momentsscreen() {
  const [active, setActive] = React.useState(0);

  return (
    <div className="flex items-center justify-center flex-col">
      <h1>Nossos Momentos</h1>
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
                  onClick={isActive ? item.onClick : undefined}
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
                        alt={`Foto ${item.id}`}
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

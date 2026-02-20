"use client";

import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

type HeartType = {
  id: number;
  left: number;
  duration: number;
  size: number;
};

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<HeartType[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newHeart: HeartType = {
        id: Date.now(),
        left: Math.random() * 100,
        duration: 4 + Math.random() * 4,
        size: 12 + Math.random() * 20,
      };

      setHearts((prev) => [...prev, newHeart]);

      // remove depois de 8s pra não acumular
      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
      }, 8000);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <Heart
          key={heart.id}
          className="absolute bottom-0 text-[#ff1493] opacity-70 animate-float"
          style={{
            left: `${heart.left}%`,
            animationDuration: `${heart.duration}s`,
            width: `${heart.size}px`,
            height: `${heart.size}px`,
          }}
          fill="currentColor"
        />
      ))}
    </div>
  );
}

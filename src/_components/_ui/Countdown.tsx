"use client";

import { Calendar } from "lucide-react";
import { useEffect, useState } from "react";

type Tempo = {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export default function Countdown() {
  const [tempo, setTempo] = useState<Tempo>({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const dataInicial = new Date("2024-09-03T17:00:00");

    const interval = setInterval(() => {
      const agora = new Date();

      let years = agora.getFullYear() - dataInicial.getFullYear();
      let months = agora.getMonth() - dataInicial.getMonth();
      let days = agora.getDate() - dataInicial.getDate();

      let hours = agora.getHours() - dataInicial.getHours();
      let minutes = agora.getMinutes() - dataInicial.getMinutes();
      let seconds = agora.getSeconds() - dataInicial.getSeconds();

      // Ajuste segundos
      if (seconds < 0) {
        seconds += 60;
        minutes--;
      }

      // Ajuste minutos
      if (minutes < 0) {
        minutes += 60;
        hours--;
      }

      // Ajuste horas
      if (hours < 0) {
        hours += 24;
        days--;
      }

      // Ajuste dias
      if (days < 0) {
        months--;
        const ultimoMes = new Date(
          agora.getFullYear(),
          agora.getMonth(),
          0,
        ).getDate();
        days += ultimoMes;
      }

      // Ajuste meses
      if (months < 0) {
        months += 12;
        years--;
      }

      setTempo({ years, months, days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-4">
      <h1 className="flex justify-center gap-2">
        <Calendar />
        Juntos desde: 03/09/2024
      </h1>
      <div className="flex flex-col gap-4 justify-center items-center">
        <div className="flex gap-4 items-center justify-center">
          <h2 className="flex flex-col border border-red-600 p-2 rounded-lg text-center">
            {tempo.years} <span>anos</span>
          </h2>
          <h2 className="flex flex-col border border-red-600 p-2 rounded-lg text-center">
            {tempo.months} <span>meses</span>
          </h2>
          <h2 className="flex flex-col border border-red-600 p-2 rounded-lg text-center">
            {tempo.days} <span>dias</span>
          </h2>
        </div>
        <div className="flex justify-center border border-red-600 rounded-xl p-2 w-fit">
          <h2>{tempo.hours}:</h2>
          <h2>{tempo.minutes}:</h2>
          <h2>{tempo.seconds}</h2>
        </div>
      </div>
    </div>
  );
}

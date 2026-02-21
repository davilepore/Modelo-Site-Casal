"use client";

import { Calendar } from "lucide-react";
import { useEffect, useState } from "react";
import CountUp from "./CountUp";

type Tempo = {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totaldays: number;
};

export default function Countdown() {
  const [tempo, setTempo] = useState<Tempo>({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    totaldays: 0,
  });

  useEffect(() => {
    const dataInicial = new Date("2024-09-03T17:00:00");

    const interval = setInterval(() => {
      const agora = new Date();

      const diff = agora.getTime() - dataInicial.getTime();
      const totaldays = Math.floor(diff / (1000 * 60 * 60 * 24));

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

      setTempo({ years, months, days, hours, minutes, seconds, totaldays });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-10 text-[#f3e8ff] text-2xl">
      <h1 className="flex justify-center gap-3 items-center">
        <Calendar />
        Juntos desde: 03/09/2024
      </h1>
      <div className="flex flex-col gap-10 justify-center items-center">
        <div className="flex gap-4 items-center justify-center">
          <h2 className="flex flex-col border-2 border-[#ff1493] p-3 rounded-lg text-center shadow-[0_0_15px_rgba(255,20,147,0.8)]">
            <CountUp
              from={0}
              to={tempo.years}
              separator=","
              direction="up"
              duration={1}
              className="count-up-text"
            />
            <span>anos</span>
          </h2>
          <h2 className="flex flex-col border-2 border-[#ff1493] p-3 rounded-lg text-center shadow-[0_0_15px_rgba(255,20,147,0.8)]">
            <CountUp
              from={0}
              to={tempo.months}
              separator=","
              direction="up"
              duration={1}
              className="count-up-text"
            />{" "}
            <span>meses</span>
          </h2>
          <h2 className="flex flex-col border-2 border-[#ff1493] p-3 rounded-lg text-center shadow-[0_0_15px_rgba(255,20,147,0.8)]">
            <CountUp
              from={0}
              to={tempo.days}
              separator=","
              direction="up"
              duration={1}
              className="count-up-text"
            />{" "}
            <span>dias</span>
          </h2>
        </div>
        <div className="flex justify-center border-2 border-[#ff1493] shadow-[0_0_15px_rgba(255,20,147,0.8)] rounded-xl p-2 w-[40%]">
          <h2>
            {" "}
            <CountUp
              from={0}
              to={tempo.hours}
              separator=","
              direction="up"
              duration={1}
              className="count-up-text"
            />
            :
          </h2>
          <h2>
            {" "}
            <CountUp
              from={0}
              to={tempo.minutes}
              separator=","
              direction="up"
              duration={1}
              className="count-up-text"
            />
            :
          </h2>
          <h2>
            {" "}
            <CountUp
              from={0}
              to={tempo.seconds}
              separator=","
              direction="up"
              duration={1}
              className="count-up-text"
            />
          </h2>
        </div>
        <h2>
          <span>São </span>
          <CountUp
            from={0}
            to={tempo.totaldays}
            separator=","
            direction="up"
            duration={1}
            className="count-up-text"
          />{" "}
          dias te amando
        </h2>
      </div>
    </div>
  );
}

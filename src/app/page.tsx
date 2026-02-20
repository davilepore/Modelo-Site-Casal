import FloatingHearts from "@/_components/_ui/FloatingHearts";
import Navbar from "@/_components/_ui/Navbar";
import Firstscreen from "@/_components/Firstscreen";
import Momentsscreen from "@/_components/Momentsscreen";
import Musicscreen from "@/_components/Musicscreen";
import Timescreen from "@/_components/Timescreen";
import { Great_Vibes } from "next/font/google";

export default function Home() {
  return (
    <div
      className=" bg-[#1a001f]  
bg-[radial-gradient(circle_at_20%_30%,rgba(255,105,180,0.25),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(255,20,147,0.2),transparent_40%)]
"
    >
      <Navbar />

      <FloatingHearts />

      <Timescreen />

      <Firstscreen />

      <Musicscreen />

      <Momentsscreen />
    </div>
  );
}

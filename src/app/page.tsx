import FloatingHearts from "@/_components/_ui/FloatingHearts";
import Navbar from "@/_components/_ui/Navbar";
import Firstscreen from "@/_components/Firstscreen";
import Momentsscreen from "@/_components/Momentsscreen";
import Musicscreen from "@/_components/Musicscreen";
import Timescreen from "@/_components/Timescreen";
import { Heart } from "lucide-react";

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
      <div className="flex items-center justify-center w-full my-10 px-6">
        <div className="flex-1 h-1 bg-pink-400 rounded-full"></div>

        <div className="mx-4 relative">
          <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(236,72,153,0.7)] animate-pulse">
            <Heart fill="pink" />
          </div>
        </div>

        <div className="flex-1 h-1 bg-pink-400 rounded-full"></div>
      </div>

      <Firstscreen />
      <div className="flex items-center justify-center w-full my-10 px-6">
        <div className="flex-1 h-1 bg-pink-400 rounded-full"></div>

        <div className="mx-4 relative">
          <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(236,72,153,0.7)] animate-pulse">
            <Heart fill="pink" />
          </div>
        </div>

        <div className="flex-1 h-1 bg-pink-400 rounded-full"></div>
      </div>

      <Momentsscreen />

      <div className="flex items-center justify-center w-full my-10 px-6">
        <div className="flex-1 h-1 bg-pink-400 rounded-full"></div>

        <div className="mx-4 relative">
          <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(236,72,153,0.7)] animate-pulse">
            <Heart fill="pink" />
          </div>
        </div>

        <div className="flex-1 h-1 bg-pink-400 rounded-full"></div>
      </div>
      <Musicscreen />
    </div>
  );
}

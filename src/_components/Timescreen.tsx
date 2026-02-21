import { Heart } from "lucide-react";
import Countdown from "./_ui/Countdown";

function Timescreen() {
  return (
    <div className="min-h-screen flex items-center flex-col space-y-20 pt-30">
      <div className="flex justify-between w-[80%] h-10">
        <Heart
          size={50}
          fill="rgba(255,20,147,0.9)"
          stroke="rgba(255,20,147,0.9)"
          className="rotate-[-25deg]"
        />
        <Heart
          size={50}
          fill="rgba(255,20,147,0.9)"
          stroke="rgba(255,20,147,0.9)"
        />
        <Heart
          size={50}
          fill="rgba(255,20,147,0.9)"
          stroke="rgba(255,20,147,0.9)"
          className="rotate-25"
        />
      </div>
      <div className="text-white space-y-3 text-4xl">
        <h2>Para minha</h2>
        <h2>Princesinha</h2>
      </div>
      <Countdown />
    </div>
  );
}

export default Timescreen;

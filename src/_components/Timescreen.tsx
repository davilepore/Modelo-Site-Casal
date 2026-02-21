import { Heart } from "lucide-react";
import Countdown from "./_ui/Countdown";

function Timescreen() {
  return (
    <div
      id="timeScreen"
      className="flex items-center flex-col space-y-20 pt-30"
    >
      <div className="flex justify-between w-[80%] h-10 drop-shadow-[0_0_10px_rgba(255,20,147,1)]">
        <Heart
          size={50}
          fill="rgba(255,20,147,0.9)"
          stroke="rgba(255,20,147,0.9)"
          className="rotate-[-25deg] heart-beat"
        />
        <Heart
          size={50}
          fill="rgba(255,20,147,0.9)"
          stroke="rgba(255,20,147,0.9)"
          className="heart-beat"
        />
        <Heart
          size={50}
          fill="rgba(255,20,147,0.9)"
          stroke="rgba(255,20,147,0.9)"
          className="rotate-25 heart-beat"
        />
      </div>
      <div className="text-white space-y-3 text-4xl">
        <h2>Para minha</h2>
        <h2 className="text-center">Princesa</h2>
      </div>
      <Countdown />
    </div>
  );
}

export default Timescreen;

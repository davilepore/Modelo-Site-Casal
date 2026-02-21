import Image from "next/image";

function Firstscreen() {
  return (
    <div
      id="forYou"
      className="min-h-screen flex flex-col items-center p-6 gap-10 py-15"
    >
      <h2 className="text-4xl text-white">Fulano e Fulana</h2>

      <div className="relative w-70 h-85">
        <Image
          className="absolute"
          src="/representativa.webp"
          alt="Logo"
          fill
        />
      </div>
      <div className="flex items-center justify-center p-6 flex-col rounded-md gap-3 shadow-[0_0_40px_rgba(255,20,147,0.8)] max-w-[80%] mx-auto">
        <p className="leading-relaxed text-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
          temporibus excepturi ipsum totam eum sequi quasi, minima ut sint iste
          vel qui saepe. Unde modi ratione numquam? Odit, necessitatibus a.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia non
          voluptatem commodi blanditiis aliquid? Doloremque rerum voluptatem
          possimus dolorem odit ea quisquam ipsum corporis nesciunt quidem
          alias, magni vel quos!
        </p>
      </div>
    </div>
  );
}

export default Firstscreen;

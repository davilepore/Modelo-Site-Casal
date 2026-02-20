import Image from "next/image";

function Firstscreen() {
  return (
    <div className="min-h-screen flex flex-col items-center p-6 gap-6">
      <h1 className="text-3xl">Feliz 1 ano e 6 meses</h1>
      <h2 className="text-2xl">Fulano e Fulana</h2>

      <div className="relative w-70 h-85">
        <Image
          className="absolute"
          src="/representativa.webp"
          alt="Logo"
          fill
        />
      </div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
        temporibus excepturi ipsum totam eum sequi quasi, minima ut sint iste
        vel qui saepe. Unde modi ratione numquam? Odit, necessitatibus a.
      </p>
    </div>
  );
}

export default Firstscreen;

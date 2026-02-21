import { Music } from "lucide-react";

function Musicscreen() {
  return (
    <div
      id="music"
      className="flex items-center justify-center flex-col gap-10 pb-30 py-15"
    >
      <h2 className="flex items-center gap-3 text-3xl text-white">
        <Music className="w-5 h-5" />
        Nossa Música
        <Music className="w-5 h-5" />
      </h2>
      <div className="flex items-center justify-center flex-col gap-3 shadow-[0_0_40px_rgba(255,20,147,0.8)] w-[80%] mx-auto p-6">
        <iframe
          data-testid="embed-iframe"
          className="h-40 w-full"
          src="https://open.spotify.com/embed/track/5SoOozhQ7KZx55I6EzPwVo?utm_source=generator&theme=0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Musicscreen;

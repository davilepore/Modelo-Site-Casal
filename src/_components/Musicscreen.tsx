import { Heart } from "lucide-react";

function Musicscreen() {
  return (
    <div className="flex items-center justify-center flex-col gap-3">
      <h2 className="flex gap-2">
        <Heart />
        Nossa Música
        <Heart />
      </h2>
      <iframe
        data-testid="embed-iframe"
        className=""
        src="https://open.spotify.com/embed/track/5SoOozhQ7KZx55I6EzPwVo?utm_source=generator&theme=0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default Musicscreen;

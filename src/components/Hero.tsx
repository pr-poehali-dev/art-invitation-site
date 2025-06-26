import { useState } from "react";
import Icon from "@/components/ui/icon";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center p-6 overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-20 left-10 w-32 h-32 watercolor-blob animate-float opacity-30"></div>
      <div
        className="absolute bottom-20 right-10 w-24 h-24 watercolor-blob animate-float opacity-20"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/4 w-16 h-16 watercolor-blob animate-float opacity-25"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* Мерцающие звёздочки */}
      <div className="absolute top-32 right-1/4 text-art-orange animate-sparkle text-2xl">
        ✨
      </div>
      <div
        className="absolute bottom-32 left-1/3 text-art-lavender animate-sparkle text-xl"
        style={{ animationDelay: "0.5s" }}
      >
        🎨
      </div>
      <div
        className="absolute top-1/3 right-1/3 text-art-pink animate-sparkle text-lg"
        style={{ animationDelay: "1.5s" }}
      >
        💕
      </div>

      <div className="text-center max-w-4xl relative z-10">
        <div className="inline-block mb-8 relative">
          <Icon
            name="Palette"
            size={80}
            className="text-art-orange mx-auto mb-4 animate-float"
          />
          <div className="absolute -top-2 -right-2 text-3xl animate-sparkle">
            ✨
          </div>
        </div>

        <h1
          className="font-caveat text-6xl md:text-8xl font-bold text-art-brown mb-6 leading-tight"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Дорогой мой муж! 💕
        </h1>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border-4 border-art-peach paint-brush">
          <p className="text-2xl md:text-3xl font-caveat text-art-brown mb-4 leading-relaxed">
            Ты приглашён на самое важное событие в моей жизни художницы! 🎭
          </p>

          <div className="flex items-center justify-center gap-2 mb-6">
            <Icon name="Calendar" size={24} className="text-art-orange" />
            <span className="text-xl font-montserrat font-semibold text-art-brown">
              Защита дипломных работ
            </span>
            <Icon name="Sparkles" size={24} className="text-art-lavender" />
          </div>

          <p className="text-lg text-art-brown/80 mb-6 font-montserrat">
            Я защищаю свои автопортреты, и без твоей поддержки
            <br className="hidden md:block" />
            это будет просто не то же самое!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <div className="flex items-center gap-2 text-art-orange">
              <Icon name="Clock" size={20} />
              <span className="font-montserrat font-semibold">
                Время: 14:00
              </span>
            </div>
            <div className="flex items-center gap-2 text-art-orange">
              <Icon name="MapPin" size={20} />
              <span className="font-montserrat font-semibold">
                Художественная школа
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8 animate-bounce">
          <Icon
            name="ChevronDown"
            size={32}
            className="text-art-orange mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

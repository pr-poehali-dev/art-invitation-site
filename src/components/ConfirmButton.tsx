import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ConfirmButton = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleConfirm = () => {
    setIsConfirmed(true);
    setShowConfetti(true);

    // Убираем конфетти через 3 секунды
    setTimeout(() => {
      setShowConfetti(false);
    }, 3000);
  };

  const createConfetti = () => {
    const colors = ["art-orange", "art-pink", "art-lavender", "art-cream"];
    const shapes = ["🎉", "🎊", "✨", "💕", "🎨"];

    return Array.from({ length: 50 }, (_, i) => (
      <div
        key={i}
        className="absolute animate-confetti pointer-events-none"
        style={{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`,
          animationDuration: `${2 + Math.random() * 2}s`,
        }}
      >
        {shapes[Math.floor(Math.random() * shapes.length)]}
      </div>
    ));
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-art-orange/10 to-art-lavender/10 relative overflow-hidden">
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {createConfetti()}
        </div>
      )}

      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="font-caveat text-5xl md:text-6xl font-bold text-art-brown mb-6">
            Ну что, любимый? 💕
          </h2>
          <p className="text-2xl text-art-brown/80 font-montserrat mb-8">
            Подтверди, что ты будешь там и сделаешь меня самой счастливой!
          </p>
        </div>

        <div className="space-y-8">
          {!isConfirmed ? (
            <div className="space-y-6">
              <Button
                onClick={handleConfirm}
                size="lg"
                className="bg-art-orange hover:bg-art-orange/90 text-white font-caveat text-2xl px-12 py-6 rounded-2xl border-4 border-art-orange shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <Icon name="Heart" size={24} className="mr-3" />
                Обещаю быть! 💕
                <Icon name="Sparkles" size={24} className="ml-3" />
              </Button>

              <p className="text-art-brown/60 font-montserrat">
                Нажми, чтобы осчастливить свою жену!
              </p>
            </div>
          ) : (
            <div className="space-y-6 animate-scale-in">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border-4 border-art-pink/50">
                <div className="text-6xl mb-4 animate-float">🥳</div>
                <h3 className="font-caveat text-4xl font-bold text-art-brown mb-4">
                  Ура! Ты лучший!
                </h3>
                <p className="text-xl text-art-brown/80 font-montserrat mb-6">
                  Я так счастлива! Теперь я точно знаю, что справлюсь с защитой!
                  Ты мой самый главный вдохновитель!
                </p>

                <div className="flex justify-center gap-4 text-3xl">
                  <span className="animate-sparkle">💕</span>
                  <span
                    className="animate-sparkle"
                    style={{ animationDelay: "0.5s" }}
                  >
                    🎨
                  </span>
                  <span
                    className="animate-sparkle"
                    style={{ animationDelay: "1s" }}
                  >
                    ✨
                  </span>
                  <span
                    className="animate-sparkle"
                    style={{ animationDelay: "1.5s" }}
                  >
                    🥰
                  </span>
                </div>
              </div>

              <div className="bg-art-sage/30 rounded-xl p-6 border-2 border-art-sage/50">
                <h4 className="font-caveat text-2xl font-bold text-art-brown mb-3">
                  Не забудь! 📅
                </h4>
                <div className="space-y-2 text-art-brown/80 font-montserrat">
                  <div className="flex items-center justify-center gap-2">
                    <Icon name="Calendar" size={20} />
                    <span>Дата защиты: [Дата]</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Icon name="Clock" size={20} />
                    <span>Время: 14:00</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Icon name="MapPin" size={20} />
                    <span>Художественная школа</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ConfirmButton;

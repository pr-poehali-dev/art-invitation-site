import Icon from "@/components/ui/icon";

const Bonuses = () => {
  const bonuses = [
    {
      icon: "Coffee",
      title: "Кофе и вкусняшки",
      description:
        "Обещаю купить тебе твой любимый кофе и что-нибудь вкусненькое после защиты! ☕",
      emoji: "☕",
    },
    {
      icon: "Camera",
      title: "Эксклюзивные фото",
      description:
        "Сделаем памятные фотографии с дипломом и моими работами для семейного архива! 📸",
      emoji: "📸",
    },
    {
      icon: "Gift",
      title: "Сюрприз для тебя",
      description:
        "У меня есть специальный подарок для самого лучшего мужа и поддержки! 🎁",
      emoji: "🎁",
    },
    {
      icon: "PartyPopper",
      title: "Празднование",
      description: "Отметим это дело в твоём любимом ресторане! Я угощаю! 🍾",
      emoji: "🍾",
    },
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-caveat text-5xl md:text-6xl font-bold text-art-brown mb-6">
            Бонусы для тебя! 🎉
          </h2>
          <p className="text-xl text-art-brown/80 font-montserrat max-w-2xl mx-auto">
            Потому что лучший муж заслуживает лучшие награды за поддержку!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {bonuses.map((bonus, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 border-art-peach hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center canvas-texture"
            >
              <div className="text-6xl mb-4 animate-float">{bonus.emoji}</div>
              <h3 className="font-caveat text-xl font-bold text-art-brown mb-3">
                {bonus.title}
              </h3>
              <p className="text-art-brown/80 font-montserrat text-sm leading-relaxed">
                {bonus.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-art-pink/20 to-art-lavender/20 rounded-2xl p-8 border-2 border-art-pink/30 text-center">
          <Icon
            name="Heart"
            size={48}
            className="text-art-pink mx-auto mb-4 animate-float"
          />
          <h3 className="font-caveat text-3xl font-bold text-art-brown mb-4">
            И самое главное... 💕
          </h3>
          <p className="text-xl text-art-brown/80 font-montserrat mb-6">
            Твоя жена будет безумно счастлива и благодарна за твою поддержку!
            Это значит больше всех подарков в мире!
          </p>
          <div className="flex justify-center gap-2 text-2xl">
            <span className="animate-sparkle">💕</span>
            <span
              className="animate-sparkle"
              style={{ animationDelay: "0.5s" }}
            >
              🥰
            </span>
            <span className="animate-sparkle" style={{ animationDelay: "1s" }}>
              😘
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bonuses;

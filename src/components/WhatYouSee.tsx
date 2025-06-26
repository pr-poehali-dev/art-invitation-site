import Icon from "@/components/ui/icon";

const WhatYouSee = () => {
  const experiences = [
    {
      icon: "Eye",
      title: "Мои автопортреты",
      description:
        "Увидишь, как я изображаю саму себя в разных техниках и стилях 🎨",
    },
    {
      icon: "Mic",
      title: "Защитная речь",
      description:
        "Услышишь, как я рассказываю о своём творческом пути и концепции работ 🎤",
    },
    {
      icon: "Users",
      title: "Художественная среда",
      description:
        "Погрузишься в атмосферу творчества и искусства среди единомышленников 🌟",
    },
    {
      icon: "Award",
      title: "Момент триумфа",
      description:
        "Станешь свидетелем получения диплома и моих счастливых слёз! 🏆",
    },
  ];

  return (
    <section className="py-20 px-6 bg-art-sage/30 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-caveat text-5xl md:text-6xl font-bold text-art-brown mb-6">
            Что ты увидишь? 👀
          </h2>
          <p className="text-xl text-art-brown/80 font-montserrat max-w-2xl mx-auto">
            Приготовься к незабываемому зрелищу! Это будет настоящий
            спектакль...
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="flex items-start gap-6 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 border-art-peach hover:shadow-xl transition-all duration-300"
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-art-orange/20 flex items-center justify-center">
                  <Icon
                    name={exp.icon as any}
                    size={24}
                    className="text-art-orange"
                  />
                </div>
              </div>

              <div>
                <h3 className="font-caveat text-2xl font-bold text-art-brown mb-2">
                  {exp.title}
                </h3>
                <p className="text-art-brown/80 font-montserrat leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-art-orange/10 to-art-lavender/10 rounded-2xl p-8 border-2 border-art-orange/20">
          <div className="text-center">
            <Icon
              name="Palette"
              size={48}
              className="text-art-orange mx-auto mb-4"
            />
            <h3 className="font-caveat text-3xl font-bold text-art-brown mb-4">
              Эксклюзивный предпросмотр! 🎭
            </h3>
            <p className="text-lg text-art-brown/80 font-montserrat mb-6">
              Ты будешь первым, кто увидит все мои работы собранные вместе.
              Некоторые автопортреты я делала, думая о тебе! 💕
            </p>
            <div className="flex justify-center gap-4 text-4xl">
              <span className="animate-float">🖼️</span>
              <span
                className="animate-float"
                style={{ animationDelay: "0.5s" }}
              >
                🎨
              </span>
              <span className="animate-float" style={{ animationDelay: "1s" }}>
                ✨
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouSee;

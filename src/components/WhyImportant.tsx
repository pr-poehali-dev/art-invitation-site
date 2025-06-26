import Icon from "@/components/ui/icon";

const WhyImportant = () => {
  const reasons = [
    {
      icon: "Heart",
      title: "Моральная поддержка",
      description:
        "Твоё присутствие даст мне уверенность и спокойствие. Когда ты рядом, я чувствую себя непобедимой! 💪",
      color: "art-pink",
    },
    {
      icon: "Star",
      title: "Один раз в жизни",
      description:
        "Это единственная и неповторимая защита диплома. Такой момент больше никогда не повторится! ⭐",
      color: "art-lavender",
    },
    {
      icon: "Users",
      title: "Свидетель триумфа",
      description:
        "Ты будешь первым, кто увидит, как твоя жена становится дипломированным художником! 🎓",
      color: "art-orange",
    },
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-caveat text-5xl md:text-6xl font-bold text-art-brown mb-6">
            Почему это так важно? 🤔
          </h2>
          <p className="text-xl text-art-brown/80 font-montserrat max-w-2xl mx-auto">
            Позволь объяснить, почему твоё присутствие критически важно для
            меня...
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border-2 border-art-peach hover:shadow-xl transition-all duration-300 hover:-translate-y-2 canvas-texture"
            >
              <div className="text-center mb-6">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-${reason.color}/20 mb-4`}
                >
                  <Icon
                    name={reason.icon as any}
                    size={32}
                    className={`text-${reason.color}`}
                  />
                </div>
                <h3 className="font-caveat text-2xl font-bold text-art-brown mb-3">
                  {reason.title}
                </h3>
              </div>

              <p className="text-art-brown/80 font-montserrat leading-relaxed text-center">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-block bg-art-orange/10 rounded-full px-8 py-4 border-2 border-art-orange/20">
            <p className="font-caveat text-2xl text-art-brown">
              Без тебя это будет просто не то! 😢
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyImportant;

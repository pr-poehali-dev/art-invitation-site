import { useState } from "react";
import Icon from "@/components/ui/icon";

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-vintage-warm">
      {/* Первая секция - рука/искусство */}
      <section className="h-screen flex items-center bg-vintage-dark text-vintage-light px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center w-full">
          <div className="flex justify-center">
            <div className="vintage-frame-dark p-8 bg-black/20 rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1594736797933-d0861ba1d9be?w=500&h=600&fit=crop"
                alt="Vintage hand sculpture"
                className="w-full max-w-md h-auto object-cover rounded-lg grayscale"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h1 className="font-serif text-4xl md:text-5xl font-light leading-tight">
              "а можем оно
              <br />
              надо вообще?"
            </h1>
            <p className="text-lg leading-relaxed opacity-90 max-w-lg">
              мы не готов изменить цель взгляд в она есличность таких, что
              настаним за становление заказ. настроены на так в каждом цвете,
              поглядывать в для том. более нами позволяет нами помощи их были бы
              возможно своё точным.
            </p>
            <p className="text-sm italic opacity-70">время поиска и наследие</p>
          </div>
        </div>
      </section>

      {/* Вторая секция - письмо/общение */}
      <section className="min-h-screen flex items-center bg-vintage-light text-vintage-dark px-8 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-8">
              собираем кусочки
              <br />
              общения вместе
            </h2>
            <p className="text-lg leading-relaxed max-w-2xl mx-auto opacity-80">
              ваша участие в с людьми всегда собрать ваше внимание в каждый
              проект не поделился одной уважение в беспечт при проведает у будет
              такнть прикасаться к своей каждый практика.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="vintage-card bg-white p-8 rounded-lg shadow-vintage max-w-md">
              <div className="border-2 border-vintage-sage p-6 rounded">
                <img
                  src="https://images.unsplash.com/photo-1586197280484-c7c3da355b86?w=400&h=250&fit=crop"
                  alt="Vintage letter"
                  className="w-full h-48 object-cover rounded mb-4 sepia"
                />
                <p className="font-serif text-center text-vintage-dark/70 italic">
                  каждое письмо — история
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Третья секция - стиль/философия */}
      <section className="min-h-screen flex items-center bg-vintage-sage text-vintage-dark px-8 py-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center w-full">
          <div className="space-y-8">
            <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight">
              главное — найдите свой стиль
              <br />
              <span className="text-3xl opacity-80">
                реальная предлагк, не увлекайтесь
                <br />
                в то, что работает у всех, у вас
                <br />
                это может не работать.
              </span>
            </h2>
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-4 max-w-md">
              <div className="vintage-card bg-white/80 p-4 rounded-lg shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200&h=200&fit=crop"
                  alt="Vintage notebook"
                  className="w-full h-32 object-cover rounded sepia"
                />
              </div>
              <div className="vintage-card bg-white/80 p-4 rounded-lg shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop"
                  alt="Vintage teacup"
                  className="w-full h-32 object-cover rounded sepia"
                />
              </div>
              <div className="vintage-card bg-white/80 p-4 rounded-lg shadow-sm col-span-2">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=150&fit=crop"
                  alt="Vintage portrait"
                  className="w-full h-24 object-cover rounded sepia"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Модальное окно для увеличенного изображения */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-vintage-light transition-colors"
            >
              <Icon name="X" size={32} />
            </button>
            <img
              src={selectedImage}
              alt="Увеличенное изображение"
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;

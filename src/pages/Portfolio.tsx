import { useState } from "react";
import Icon from "@/components/ui/icon";

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const portfolioItems = [
    {
      id: 1,
      title: "Lunch Break",
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop",
      category: "Натюрморт",
    },
    {
      id: 2,
      title: "Морской пейзаж",
      image:
        "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=400&h=300&fit=crop",
      category: "Пейзаж",
    },
    {
      id: 3,
      title: "Домашний уют",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      category: "Интерьер",
    },
    {
      id: 4,
      title: "Утренний кофе",
      image:
        "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=300&fit=crop",
      category: "Натюрморт",
    },
    {
      id: 5,
      title: "Осенние краски",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
      category: "Природа",
    },
    {
      id: 6,
      title: "Домашний питомец",
      image:
        "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=300&fit=crop",
      category: "Портрет",
    },
    {
      id: 7,
      title: "Вязаные носки",
      image:
        "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop",
      category: "Текстиль",
    },
    {
      id: 8,
      title: "Винтажный блокнот",
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
      category: "Винтаж",
    },
  ];

  return (
    <div className="min-h-screen bg-vintage-sage">
      {/* Первая секция - Карта времени */}
      <section className="relative py-20 px-6 bg-vintage-forest text-vintage-cream">
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${encodeURI("https://cdn.poehali.dev/files/6133ea03-b7a9-4969-8191-17ff304d2b6c.png")})`,
            }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-serif text-4xl md:text-5xl font-light mb-8 leading-tight">
                segodnya
              </h1>
              <div className="vintage-line mb-6"></div>
              <p className="text-lg leading-relaxed opacity-90">
                а тут интерес нужно
                <br />
                вызвать у тех кто
                <br />
                пролистались старые
                <br />
                мелочишки не работают, а ты в<br />
                пространстве.
              </p>
            </div>

            <div className="text-right">
              <h2 className="font-serif text-3xl md:text-4xl font-light mb-8">
                vchera
              </h2>
              <div className="vintage-line ml-auto mb-6"></div>
              <p className="text-lg leading-relaxed opacity-90">
                тут можно делать шаблонные ролики,
                <br />
                вылизывать сторис "доброе утро",
                <br />
                красоточить и чувствовать себя
                <br />
                супер.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Вторая секция - Портфолио */}
      <section className="py-20 px-6 bg-vintage-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-light text-vintage-forest mb-4">
              trend na
              <span className="italic font-light">iskrennost'</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className="group cursor-pointer vintage-card"
                onClick={() => setSelectedImage(item.image)}
              >
                <div className="aspect-square bg-vintage-sage/20 rounded-lg overflow-hidden shadow-vintage">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="mt-3 text-center">
                  <h3 className="font-serif text-sm text-vintage-forest/80">
                    {item.title}
                  </h3>
                  <p className="text-xs text-vintage-forest/60 mt-1">
                    {item.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Третья секция - Философия */}
      <section className="py-20 px-6 bg-vintage-sage/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-vintage-forest mb-8 leading-tight">
                novaya iskrennost' —<br />
                <span className="italic font-light text-3xl">
                  shag v proshloe
                </span>
              </h2>

              <p className="text-vintage-forest/80 leading-relaxed mb-8">
                возвращаемся назад, где не было
                <br />
                фальши и притворства, искренность
                <br />
                обыденная жизнь, все старое и забытое.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="vintage-frame">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop"
                  alt="vintage portrait"
                  className="w-full h-full object-cover"
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
              className="absolute -top-12 right-0 text-white hover:text-vintage-cream transition-colors"
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

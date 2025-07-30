import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      title: "Металлообработка",
      description: "Точное фрезерование, токарные работы, шлифовка металлических изделий",
      icon: "Settings",
      image: "/img/66b17c48-021f-45d1-af11-ddab8faf7ebb.jpg"
    },
    {
      title: "Машиностроение", 
      description: "Производство станочного оборудования и промышленных механизмов",
      icon: "Cog",
      image: "/img/d1027215-44e3-4c0d-9f5e-ae9ec4429314.jpg"
    },
    {
      title: "Сертификация",
      description: "Полный контроль качества, сертификаты соответствия ISO стандартам",
      icon: "Shield",
      image: "/img/2ee5a566-6884-44f9-9163-15a682fda4f9.jpg"
    }
  ];

  const equipment = [
    { name: "Станки ЧПУ", specs: "5-осевые, точность ±0.01мм" },
    { name: "Токарные центры", specs: "Диаметр обработки до 800мм" },
    { name: "Фрезерные станки", specs: "Рабочее поле 2000x1500мм" },
    { name: "Шлифовальное оборудование", specs: "Шероховатость Ra 0.8" }
  ];

  const certificates = [
    "ISO 9001:2015", "ISO 14001:2015", "OHSAS 18001", "Росстандарт"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-white/90 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Factory" size={28} className="text-secondary" />
              <span className="text-xl font-roboto-condensed font-bold text-foreground">МЕТАЛЛЗАВОД</span>
            </div>
            <div className="hidden md:flex space-x-6">
              {["Главная", "Производство", "Продукция", "Оборудование", "Сертификаты", "О заводе", "Контакты"].map((item) => (
                <a key={item} href="#" className="text-muted-foreground hover:text-foreground transition-colors font-open-sans">{item}</a>
              ))}
            </div>
            <Button className="bg-secondary hover:bg-secondary/90">
              Связаться с нами
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 to-secondary/5 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#f0f0f0_25%,transparent_25%,transparent_75%,#f0f0f0_75%,#f0f0f0),linear-gradient(45deg,#f0f0f0_25%,transparent_25%,transparent_75%,#f0f0f0_75%,#f0f0f0)] bg-[length:20px_20px] bg-[0_0,10px_10px] opacity-30"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-roboto-condensed font-black text-primary mb-6 leading-tight">
              ПРОМЫШЛЕННОЕ
              <span className="block text-secondary">ПРОИЗВОДСТВО</span>
            </h1>
            <p className="text-xl text-muted-foreground font-open-sans mb-8 max-w-2xl mx-auto">
              Ведущий завод машиностроения и металлообработки. Высокоточное оборудование, 
              сертифицированные технологии, индивидуальные решения для промышленности.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-lg px-8">
                <Icon name="Phone" size={20} className="mr-2" />
                Заказать консультацию
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Icon name="Download" size={20} className="mr-2" />
                Скачать каталог
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-roboto-condensed font-bold text-primary mb-4">НАШИ ВОЗМОЖНОСТИ</h2>
            <p className="text-muted-foreground font-open-sans text-lg max-w-2xl mx-auto">
              Полный цикл производства от проектирования до финальной сборки и контроля качества
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-secondary">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-all duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-secondary/90 backdrop-blur p-3 rounded-lg">
                      <Icon name={service.icon as any} size={24} className="text-white" />
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="font-roboto-condensed text-xl">{service.title}</CardTitle>
                  <CardDescription className="font-open-sans">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-roboto-condensed font-bold text-primary mb-4">СОВРЕМЕННОЕ ОБОРУДОВАНИЕ</h2>
            <p className="text-muted-foreground font-open-sans text-lg">
              Высокотехнологичные станки и механизмы для точной обработки металлов
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipment.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Wrench" size={28} className="text-secondary" />
                  </div>
                  <CardTitle className="font-roboto-condensed text-lg">{item.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground font-open-sans">{item.specs}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-roboto-condensed font-bold text-primary mb-4">КАЧЕСТВО И СЕРТИФИКАЦИЯ</h2>
            <p className="text-muted-foreground font-open-sans text-lg">
              Международные стандарты качества и сертификаты соответствия
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {certificates.map((cert, index) => (
              <Badge key={index} variant="outline" className="px-6 py-3 text-base font-open-sans border-secondary text-secondary">
                <Icon name="Award" size={16} className="mr-2" />
                {cert}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-roboto-condensed font-bold mb-6">ГОТОВЫ К СОТРУДНИЧЕСТВУ?</h2>
              <p className="text-lg font-open-sans mb-6 text-white/90">
                Обсудим ваш проект, предложим оптимальные решения и рассчитаем стоимость работ. 
                Работаем с предприятиями по всей России.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Icon name="Phone" size={20} className="mr-3 text-secondary" />
                  <span className="font-open-sans">+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" size={20} className="mr-3 text-secondary" />
                  <span className="font-open-sans">info@metallzavod.ru</span>
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" size={20} className="mr-3 text-secondary" />
                  <span className="font-open-sans">г. Москва, Промышленная ул., 15</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
                <Icon name="Factory" size={80} className="mx-auto mb-6 text-secondary" />
                <h3 className="text-2xl font-roboto-condensed font-bold mb-4">30+ ЛЕТ ОПЫТА</h3>
                <p className="font-open-sans text-white/90">
                  Надежный партнер для крупнейших промышленных предприятий России
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary/90 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="Factory" size={24} className="text-secondary" />
              <span className="font-roboto-condensed font-bold">МЕТАЛЛЗАВОД</span>
            </div>
            <p className="text-white/70 font-open-sans text-sm">
              © 2024 Металлзавод. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
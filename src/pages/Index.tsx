import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Star, Download, Smartphone, Brain, Trophy, TrendingUp, Users, Zap, Shield, Clock, Heart, MessageSquare } from 'lucide-react';

export default function KuponixLanding() {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-emerald-400" />,
      title: "Yapay Zeka Gücü",
      description: "Her gün AI tarafından analiz edilen ve oluşturulan profesyonel bahis kuponları"
    },
    {
      icon: <Users className="w-8 h-8 text-emerald-400" />,
      title: "Topluluk Oylaması",
      description: "Kuponları oylayın, diğer kullanıcıların görüşlerini öğrenin"
    },
    {
      icon: <Trophy className="w-8 h-8 text-emerald-400" />,
      title: "Liderlik Tablosu",
      description: "En başarılı kullanıcıları takip edin, rekabette öne geçin"
    },
    {
      icon: <Heart className="w-8 h-8 text-emerald-400" />,
      title: "Favorilerim",
      description: "Beğendiğiniz kuponları favorilere ekleyin, kolayca erişin"
    },
    {
      icon: <Clock className="w-8 h-8 text-emerald-400" />,
      title: "Geçmiş Analizi",
      description: "Tüm geçmiş kuponları görüntüleyin, başarı oranlarını analiz edin"
    },
    {
      icon: <Zap className="w-8 h-8 text-emerald-400" />,
      title: "Gerçek Zamanlı",
      description: "Anlık veri güncellemeleri ve canlı sonuçlar"
    }
  ];

  const testimonials = [
    {
      name: "Mehmet K.",
      text: "Kuponix sayesinde bahis stratejim tamamen değişti. AI'ın önerileri gerçekten çok başarılı!",
      rating: 5
    },
    {
      name: "Ayşe T.",
      text: "Uygulamanın arayüzü çok şık ve kullanımı kolay. Favoriler özelliği harika!",
      rating: 5
    },
    {
      name: "Okan D.",
      text: "Liderlik tablosunda üst sıralardayım. Topluluk oylaması çok faydalı bir özellik.",
      rating: 5
    }
  ];

  const screenshots = [
    "Ana sayfa ve günlük kuponlar",
    "Kupon detay ve yorum sistemi", 
    "Favoriler ve geçmiş kuponlar",
    "Liderlik tablosu ve profil"
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-black/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
              <Trophy className="w-5 h-5 text-black" />
            </div>
            <span className="text-2xl font-bold text-emerald-400">Kuponix</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="hover:text-emerald-400 transition-colors">Özellikler</a>
            <a href="#screenshots" className="hover:text-emerald-400 transition-colors">Ekran Görüntüleri</a>
            <a href="#testimonials" className="hover:text-emerald-400 transition-colors">Yorumlar</a>
            <a href="#download" className="hover:text-emerald-400 transition-colors">İndir</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center bg-gradient-to-b from-black to-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent"></div>
        <div className="container mx-auto relative z-10">
          <Badge className="mb-6 bg-emerald-500/20 text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/30 transition-all">
            🚀 Yapay Zeka Destekli Bahis Kuponları
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-400 to-white bg-clip-text text-transparent animate-pulse">
            Kuponix
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Yapay zekanın gücüyle günlük bahis kuponları alın, toplulukla etkileşime geçin ve kazancınızı artırın. 
            <span className="text-emerald-400 font-semibold"> Gelecek burada!</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold px-8 py-3 text-lg transition-all transform hover:scale-105">
              <Download className="w-5 h-5 mr-2" />
              Hemen İndir
            </Button>
            <Button variant="outline" size="lg" className="border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 px-8 py-3 text-lg transition-all">
              <Smartphone className="w-5 h-5 mr-2" />
              Demo İzle
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400">10K+</div>
              <div className="text-gray-400">Aktif Kullanıcı</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400">85%</div>
              <div className="text-gray-400">Başarı Oranı</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400">500+</div>
              <div className="text-gray-400">Günlük Kupon</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400">24/7</div>
              <div className="text-gray-400">Destek</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Neden <span className="text-emerald-400">Kuponix</span>?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Modern teknoloji ile bahis deneyiminizi bir üst seviyeye taşıyacak özellikler
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-emerald-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <CardContent className="p-6">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section id="screenshots" className="py-20 px-4 bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Uygulama <span className="text-emerald-400">Görünümü</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Modern ve kullanıcı dostu arayüzümüzü keşfedin
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {screenshots.map((screenshot, index) => (
              <Card key={index} className="bg-gray-800/30 border-gray-700 hover:border-emerald-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <CardContent className="p-4">
                  <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 rounded-lg h-80 mb-4 flex items-center justify-center">
                    <Smartphone className="w-16 h-16 text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-center text-white">{screenshot}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Kullanıcı <span className="text-emerald-400">Yorumları</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Binlerce memnun kullanıcımızın deneyimlerini keşfedin
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-emerald-500/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.text}"</p>
                  <div className="font-semibold text-emerald-400">- {testimonial.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 px-4 bg-gradient-to-r from-emerald-500/10 to-emerald-600/5">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Hemen <span className="text-emerald-400">Başlayın</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Kuponix'i indirin ve yapay zeka destekli bahis kuponlarıyla kazanmaya başlayın!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold px-12 py-4 text-lg transition-all transform hover:scale-105">
              <Download className="w-6 h-6 mr-3" />
              APK İndir
            </Button>
            <Button size="lg" variant="outline" className="border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 px-12 py-4 text-lg transition-all">
              <Smartphone className="w-6 h-6 mr-3" />
              Play Store
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <div className="flex items-center">
              <Shield className="w-4 h-4 mr-2 text-emerald-400" />
              100% Güvenli
            </div>
            <div className="flex items-center">
              <TrendingUp className="w-4 h-4 mr-2 text-emerald-400" />
              Sürekli Güncellenen
            </div>
            <div className="flex items-center">
              <MessageSquare className="w-4 h-4 mr-2 text-emerald-400" />
              7/24 Destek
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-black border-t border-gray-800">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-black" />
                </div>
                <span className="text-2xl font-bold text-emerald-400">Kuponix</span>
              </div>
              <p className="text-gray-400">
                Yapay zeka destekli bahis kuponları ile geleceği yakalayın.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Özellikler</h3>
              <ul className="space-y-2 text-gray-400">
                <li>AI Kuponları</li>
                <li>Topluluk Oylaması</li>
                <li>Liderlik Tablosu</li>
                <li>Favoriler</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Destek</h3>
              <ul className="space-y-2 text-gray-400">
                <li>SSS</li>
                <li>İletişim</li>
                <li>Kullanım Kılavuzu</li>
                <li>Geri Bildirim</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">İletişim</h3>
              <ul className="space-y-2 text-gray-400">
                <li>info@kuponix.com</li>
                <li>+90 XXX XXX XX XX</li>
                <li>İstanbul, Türkiye</li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-800" />
          
          <div className="text-center text-gray-400">
            <p>&copy; 2024 Kuponix. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
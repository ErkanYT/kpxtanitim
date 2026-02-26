const translations = {
    tr: {
        title: "Kuponix - Yapay Zeka Destekli Bahis Kuponları",
        nav_features: "Özellikler",
        nav_testimonials: "Yorumlar",
        nav_download: "İndir",
        hero_badge: "🚀 Yapay Zeka Destekli Bahis Kuponları",
        hero_description: "Yapay zekanın gücüyle günlük bahis kuponları alın, toplulukla etkileşime geçin ve kazancınızı artırın.",
        hero_description_highlight: "Gelecek burada!",
        btn_download: "Hemen İndir",
        btn_virustotal: "VirusTotal Sonucu",
        stat_users_label: "Aktif Kullanıcı",
        stat_success_label: "Başarı Oranı",
        stat_daily_label: "Günlük Kupon",
        stat_support_label: "Destek",
        features_title: "Neden <span class=\"highlight\">Kuponix</span>?",
        features_subtitle: "Modern teknoloji ile bahis deneyiminizi bir üst seviyeye taşıyacak özellikler",
        feature1_title: "Yapay Zeka Gücü",
        feature1_desc: "Her gün AI tarafından analiz edilen ve oluşturulan profesyonel bahis kuponları",
        feature2_title: "Topluluk Oylaması",
        feature2_desc: "Kuponları oylayın, diğer kullanıcıların görüşlerini öğrenin",
        feature3_title: "Liderlik Tablosu",
        feature3_desc: "En başarılı kullanıcıları takip edin, rekabette öne geçin",
        feature4_title: "Favorilerim",
        feature4_desc: "Beğendiğiniz kuponları favorilere ekleyin, kolayca erişin",
        feature5_title: "Geçmiş Analizi",
        feature5_desc: "Tüm geçmiş kuponları görüntüleyin, başarı oranlarını analiz edin",
        feature6_title: "Gerçek Zamanlı",
        feature6_desc: "Anlık veri güncellemeleri ve canlı sonuçlar",
        testimonials_title: "Kullanıcı <span class=\"highlight\">Yorumları</span>",
        testimonials_subtitle: "Binlerce memnun kullanıcımızın deneyimlerini keşfedin",
        test1_text: "\"Kuponix sayesinde bahis stratejim tamamen değişti. AI'ın önerileri gerçekten çok başarılı!\"",
        test2_text: "\"Uygulamanın arayüzü çok şık ve kullanımı kolay. Favoriler özelliği harika!\"",
        test3_text: "\"Liderlik tablosunda üst sıralardayım. Topluluk oylaması çok faydalı bir özellik.\"",
        download_title: "Hemen <span class=\"highlight\">Başlayın</span>",
        download_subtitle: "Kuponix'i indirin ve yapay zeka destekli bahis kuponlarıyla kazanmaya başlayın!",
        btn_download_apk: "APK İndir",
        feature_safe: "100% Güvenli",
        feature_updated: "Sürekli Güncellenen",
        feature_support: "7/24 Destek",
        footer_desc: "Yapay zeka destekli bahis kuponları ile geleceği yakalayın.",
        footer_features_title: "Özellikler",
        footer_f1: "AI Kuponları",
        footer_f2: "Topluluk Oylaması",
        footer_f3: "Liderlik Tablosu",
        footer_f4: "Favoriler",
        footer_support_title: "Destek",
        footer_s1: "SSS",
        footer_s2: "İletişim",
        footer_s3: "Kullanım Kılavuzu",
        footer_s4: "Geri Bildirim",
        footer_contact_title: "İletişim",
        footer_country: "İstanbul, Türkiye",
        footer_rights: "&copy; 2024 Kuponix. Tüm hakları saklıdır."
    },
    en: {
        title: "Kuponix - AI-Powered Betting Tips",
        nav_features: "Features",
        nav_testimonials: "Reviews",
        nav_download: "Download",
        hero_badge: "🚀 AI-Powered Betting Tips",
        hero_description: "Get daily betting tips powered by AI, interact with the community, and increase your earnings.",
        hero_description_highlight: "The future is here!",
        btn_download: "Download Now",
        btn_virustotal: "VirusTotal Result",
        stat_users_label: "Active Users",
        stat_success_label: "Success Rate",
        stat_daily_label: "Daily Tips",
        stat_support_label: "Support",
        features_title: "Why <span class=\"highlight\">Kuponix</span>?",
        features_subtitle: "Features that will take your betting experience to the next level with modern technology",
        feature1_title: "AI Power",
        feature1_desc: "Professional betting tips analyzed and generated everyday by AI",
        feature2_title: "Community Voting",
        feature2_desc: "Vote on tips and learn what other users think",
        feature3_title: "Leaderboard",
        feature3_desc: "Follow the most successful users and get ahead in the competition",
        feature4_title: "My Favorites",
        feature4_desc: "Add the tips you like to your favorites for easy access",
        feature5_title: "History Analysis",
        feature5_desc: "View all past tips and analyze their success rates",
        feature6_title: "Real-Time",
        feature6_desc: "Instant data updates and live results",
        testimonials_title: "User <span class=\"highlight\">Reviews</span>",
        testimonials_subtitle: "Discover the experiences of thousands of our satisfied users",
        test1_text: "\"My betting strategy has completely changed thanks to Kuponix. AI's suggestions are really successful!\"",
        test2_text: "\"The app's interface is very stylish and easy to use. The favorites feature is great!\"",
        test3_text: "\"I'm at the top of the leaderboard. Community voting is a very useful feature.\"",
        download_title: "Get <span class=\"highlight\">Started</span> Now",
        download_subtitle: "Download Kuponix and start winning with AI-powered betting tips!",
        btn_download_apk: "Download APK",
        feature_safe: "100% Safe",
        feature_updated: "Constantly Updated",
        feature_support: "24/7 Support",
        footer_desc: "Catch the future with AI-powered betting tips.",
        footer_features_title: "Features",
        footer_f1: "AI Tips",
        footer_f2: "Community Voting",
        footer_f3: "Leaderboard",
        footer_f4: "Favorites",
        footer_support_title: "Support",
        footer_s1: "FAQ",
        footer_s2: "Contact",
        footer_s3: "User Guide",
        footer_s4: "Feedback",
        footer_contact_title: "Contact",
        footer_country: "Istanbul, Turkey",
        footer_rights: "&copy; 2024 Kuponix. All rights reserved."
    }
};

let currentLang = 'tr';

function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('kuponix_lang', lang);

    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (key === 'title') {
                document.title = translations[lang][key];
            } else {
                element.innerHTML = translations[lang][key];
            }
        }
    });

    // Update language switcher UI
    document.getElementById('lang-tr').style.opacity = lang === 'tr' ? '1' : '0.5';
    document.getElementById('lang-en').style.opacity = lang === 'en' ? '1' : '0.5';
}

function initLanguage() {
    let savedLang = localStorage.getItem('kuponix_lang');
    if (!savedLang) {
        // IP / Device language detection
        const userLang = navigator.language || navigator.userLanguage;
        if (userLang.startsWith('tr')) {
            savedLang = 'tr';
        } else {
            savedLang = 'en'; // default to english for non-turkish
        }
    }
    setLanguage(savedLang);
}

document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
});

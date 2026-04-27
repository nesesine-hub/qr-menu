// ============================================================
//  KURULUM DOSYASI — Sadece bu dosyayı düzenleyin
// ============================================================

const QR_MENU_CONFIG = {

  // 1. İŞLETME BİLGİLERİ
  isletmeAdi: "İşletme Adı",        // Menüde görünecek isim
  logo: "logo.png",                   // Logo dosya adı (GitHub'a yükleyin)

  // 2. GİRİŞ BİLGİLERİ (Admin ve Garson ekranı için)
  kullaniciAdi: "admin",
  sifre: "sifre123",

  // 3. TOP FIYATI (Dondurma gibi top bazlı ürünler için)
  topFiyati: 80,

  // 4. FİREBASE AYARLARI
  // Firebase Console → Proje Ayarları → Web Uygulaması → Config
  firebase: {
    apiKey: "BURAYA_API_KEY",
    authDomain: "BURAYA_AUTH_DOMAIN",
    databaseURL: "BURAYA_DATABASE_URL",
    projectId: "BURAYA_PROJECT_ID",
    storageBucket: "BURAYA_STORAGE_BUCKET",
    messagingSenderId: "BURAYA_SENDER_ID",
    appId: "BURAYA_APP_ID"
  }

};

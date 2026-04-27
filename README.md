# QR Menü Sistemi

Restoran, kafe ve işletmeler için QR kodlu dijital menü sistemi.  
Müşteri sipariş verir → Garson ekranına düşer → Ödeme alınır.

---

## Özellikler

- 📱 QR kod ile açılan müşteri menüsü
- 🛒 Sepet sistemi (birden fazla ürün eklenebilir)
- 👨‍🍳 Gerçek zamanlı garson ekranı
- 🔧 Admin paneli (menü düzenleme, fotoğraf, stok yönetimi)
- 📊 Günlük/haftalık/aylık rapor + Excel çıktısı
- 🔔 Yeni sipariş ses bildirimi
- 💳 Ödeme durumu takibi

---

## Kurulum (10 dakika)

### 1. Firebase Projesi Oluştur
1. [console.firebase.google.com](https://console.firebase.google.com) → **Add project**
2. Sol menü → **Realtime Database** → **Create database** → **Test mode**
3. Sol menü → **Project Settings** → **Your apps** → `</>` (Web) → Uygulamayı kaydet
4. Çıkan `firebaseConfig` bilgilerini kopyala

### 2. config.js Dosyasını Doldur
```js
const QR_MENU_CONFIG = {
  isletmeAdi: "Kafe Adı",
  logo: "logo.png",
  kullaniciAdi: "admin",
  sifre: "sifre123",
  topFiyati: 80,
  firebase: {
    apiKey: "...",
    authDomain: "...",
    databaseURL: "...",
    projectId: "...",
    storageBucket: "...",
    messagingSenderId: "...",
    appId: "..."
  }
};
```

### 3. GitHub Pages'e Yükle
1. GitHub'da yeni **Public** repo oluştur
2. 4 dosyayı yükle: `config.js`, `menu.html`, `garson.html`, `admin.html`
3. Logo dosyanı da yükle (config'deki isimle aynı olsun)
4. **Settings → Pages → Deploy from branch → main → Save**

### 4. Firebase Güvenlik Kuralları
Firebase → Realtime Database → **Rules** sekmesi:
```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

---

## Kullanım

| Dosya | Adres | Açıklama |
|-------|-------|----------|
| `menu.html` | `site.com/menu.html?masa=1` | Müşteri menüsü (QR koda eklenir) |
| `garson.html` | `site.com/garson.html` | Garson/kasiyer ekranı |
| `admin.html` | `site.com/admin.html` | Menü yönetimi |

---

## QR Kod Oluşturma
**Admin paneli → QR Kodlar sekmesi** → Bölge adı + masa aralığı gir → Oluştur → İndir → Yazdır

---

## Giriş Bilgileri
`config.js` dosyasındaki `kullaniciAdi` ve `sifre` ile girilir.  
Admin ve garson ekranı aynı şifreyi kullanır.

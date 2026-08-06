// urunlerimiz.js - Benzersiz Ürün Çeşidi Filtreleme ve Doğrudan Sepete Ekleme

const urunler = [
    // --- PEYNİR ÇEŞİTLERİ (101 Adet - Tekrarlar Temizlendi, SEO Uyumlu Görsel Adları) ---
    { kategori: "peynir", gorsel: "img/peynir/bolu-kolot-peyniri-500-gr-12.webp", isim: "Bolu Kolot Peyniri 500 Gr * 12" },
    { kategori: "peynir", gorsel: "img/peynir/iskenderoglu-kolot-peynir-500-gr-16.webp", isim: "İskenderoğlu Kolot Peynir 500 Gr * 16" },
    { kategori: "peynir", gorsel: "img/peynir/ariste-kolot-peyniri-500-gr-10.webp", isim: "Ariste Kolot Peyniri 500 Gr * 10" },
    { kategori: "peynir", gorsel: "img/peynir/kebir-kuymak-peynir-500-gr-12.webp", isim: "Kebir Kuymak Peynir 500 Gr * 12" },
    { kategori: "peynir", gorsel: "img/peynir/iskenderoglu-kuymak-peynir-500-gr-24.webp", isim: "İskenderoğlu Kuymak Peynir 500 Gr * 24" },
    { kategori: "peynir", gorsel: "img/peynir/ozdemir-mihalic-peynir-kg.webp", isim: "Özdemir Mihaliç Peynir Kg" },
    { kategori: "peynir", gorsel: "img/peynir/teksut-mihalic-peyniri-350-gr-6.webp", isim: "Teksüt Mihaliç Peyniri 350 Gr * 6" },
    { kategori: "peynir", gorsel: "img/peynir/ariste-mihalic-peyniri-300-gr-6.webp", isim: "Ariste Mihaliç Peyniri 300 Gr * 6" },
    { kategori: "peynir", gorsel: "img/peynir/lente-isli-cerkez-peyniri-vakumlu-1500-gr.webp", isim: "Lente İsli Çerkez Peyniri Vakumlu 1500 Gr" },
    { kategori: "peynir", gorsel: "img/peynir/lente-emmantel-500-gr-vakumlu.webp", isim: "Lente Emmantel 500 Gr Vakumlu" },
    { kategori: "peynir", gorsel: "img/peynir/ithal-frico-peynir-edam-biberli-kg.webp", isim: "İthal - Frico Peynir Edam Biberli Kg" },
    { kategori: "peynir", gorsel: "img/peynir/ithal-frico-peynir-edam-otlu-kg.webp", isim: "İthal - Frico Peynir Edam Otlu Kg" },
    { kategori: "peynir", gorsel: "img/peynir/ithal-frico-peynir-edam-sade-kg.webp", isim: "İthal - Frico Peynir Edam Sade Kg" },
    { kategori: "peynir", gorsel: "img/peynir/lente-gouda-sade-edam-500-gr-vakumlu.webp", isim: "Lente Gouda Sade & Edam 500 Gr Vakumlu" },
    { kategori: "peynir", gorsel: "img/peynir/brie-peynir-125-gr-paket.webp", isim: "Brie Peynir 125 Gr Paket" },
    { kategori: "peynir", gorsel: "img/peynir/gravyer-peyniri-kars-kg.webp", isim: "Gravyer Peyniri (Kars) Kg" },
    { kategori: "peynir", gorsel: "img/peynir/ariste-kars-gravyer-peyniri-5-kg.webp", isim: "Ariste Kars Gravyer Peyniri 5 Kg" },
    { kategori: "peynir", gorsel: "img/peynir/bahar-sepet-peyniri-baharatli-350-gr-vakumlu.webp", isim: "Bahar Sepet Peyniri Baharatlı 350 Gr Vakumlu" },
    { kategori: "peynir", gorsel: "img/peynir/bolu-sepet-peyniri-500-gr-24.webp", isim: "Bolu Sepet Peyniri 500 Gr * 24" },
    { kategori: "peynir", gorsel: "img/peynir/saribas-sepet-peyniri-sade-kg.webp", isim: "Sarıbaş Sepet Peyniri Sade Kg" },
    { kategori: "peynir", gorsel: "img/peynir/saribas-sepet-peyniri-biberli-kg.webp", isim: "Sarıbaş Sepet Peyniri Biberli Kg" },
    { kategori: "peynir", gorsel: "img/peynir/bahar-sepet-peyniri-corek-otlu-350-gr-vakumlu.webp", isim: "Bahar Sepet Peyniri Çörek Otlu 350 Gr Vakumlu" },
    { kategori: "peynir", gorsel: "img/peynir/saribas-sepet-peyniri-corekotlu-kg.webp", isim: "Sarıbaş Sepet Peyniri Çörekotlu Kg" },
    { kategori: "peynir", gorsel: "img/peynir/bahar-sepet-peyniri-vakumlu-350-gr.webp", isim: "Bahar Sepet Peyniri Vakumlu 350 Gr" },
    { kategori: "peynir", gorsel: "img/peynir/ithal-kuflu-peynir-rokfor-kg.webp", isim: "İthal - Küflü Peynir (Rokfor) Kg" },
    { kategori: "peynir", gorsel: "img/peynir/ithal-blue-heaven-peynir-rokfor-kg.webp", isim: "İthal - Blue Heaven Peynir Rokfor Kg" },
    { kategori: "peynir", gorsel: "img/peynir/danablu-rokfor-danish-blu-cheese-vakumlu-500-gr.webp", isim: "Danablu Rokfor / Danish Blu Cheese Vakumlu 500 Gr" },
    { kategori: "peynir", gorsel: "img/peynir/lente-gouda-kimyonlu-500-gr-vakumlu.webp", isim: "Lente Gouda Kimyonlu 500 Gr Vakumlu" },
    { kategori: "peynir", gorsel: "img/peynir/lente-gouda-hardalli-500-gr-vakumlu.webp", isim: "Lente Gouda Hardallı 500 Gr Vakumlu" },
    { kategori: "peynir", gorsel: "img/peynir/lente-gouda-biberli-500-gr-vakumlu.webp", isim: "Lente Gouda Biberli 500 Gr Vakumlu" },
    { kategori: "peynir", gorsel: "img/peynir/hard-cheese-parmesan-parca-vakumlu-2000-gr.webp", isim: "Hard Cheese Parmesan Parça Vakumlu 2000 Gr" },
    { kategori: "peynir", gorsel: "img/peynir/ambrosini-parmesan-toz-grana-padano-vakumlu-1000-gr.webp", isim: "Ambrosini Parmesan Toz Grana Padano Vakumlu 1000 Gr" },
    { kategori: "peynir", gorsel: "img/peynir/ambrosini-parmesan-grana-padano-vakumlu-2000-gr.webp", isim: "Ambrosini Parmesan Grana Padano Vakumlu 2000 Gr" },
    { kategori: "peynir", gorsel: "img/peynir/ithal-kerry-gold-cheddar-blok-kg.webp", isim: "İthal - Kerry Gold Cheddar Blok Kg" },
    { kategori: "peynir", gorsel: "img/peynir/royal-cheddar-burger-peynir-dilimli-1000-gr-8.webp", isim: "Royal Cheddar Burger Peynir Dilimli 1000 Gr * 8" },
    { kategori: "peynir", gorsel: "img/peynir/cobanoglu-cheddar-dilimli-peynir-1000-gr-6.webp", isim: "Çobanoğlu Cheddar Dilimli Peynir 1000 Gr * 6" },
    { kategori: "peynir", gorsel: "img/peynir/parmesan-peynir-toz-1000-gr-10-adet.webp", isim: "Parmesan Peynir Toz 1000 Gr * 10 Adet" },
    { kategori: "peynir", gorsel: "img/peynir/tulsut-tulum-peynir-cuval-beyaz-25-kg.webp", isim: "Tulsüt Tulum Peynir Çuval (Beyaz) 25 Kg" },
    { kategori: "peynir", gorsel: "img/peynir/tulsut-tulum-peynir-cuval-sari-25-kg.webp", isim: "Tulsüt Tulum Peynir Çuval (Sarı) 25 Kg" },
    { kategori: "peynir", gorsel: "img/peynir/meric-hellim-peynir-kibris-az-tuzlu-225-gr-48.webp", isim: "Meriç Hellim Peynir Kıbrıs Az Tuzlu 225 Gr * 48" },
    { kategori: "peynir", gorsel: "img/peynir/miracbey-tulum-peynir-yaprak-cuval-25-kg.webp", isim: "Miraçbey Tulum Peynir Yaprak Çuval 25 Kg" },
    { kategori: "peynir", gorsel: "img/peynir/muratbey-mozarella-rende-150-gr-15.webp", isim: "Muratbey Mozarella Rende 150 Gr * 15" },
    { kategori: "peynir", gorsel: "img/peynir/aksa-orgu-peynir-1000-gr-8.webp", isim: "Aksa Örgü Peynir 1000 Gr * 8" },
    { kategori: "peynir", gorsel: "img/peynir/aksa-koy-peynir-t-yagli-kova-9-kg.webp", isim: "Aksa Köy Peynir T.yağlı Kova 9 Kg" },
    { kategori: "peynir", gorsel: "img/peynir/aksa-dil-peynir-1000-gr-8.webp", isim: "Aksa Dil Peynir 1000 Gr * 8" },
    { kategori: "peynir", gorsel: "img/peynir/aksa-cecil-peynir-2000-gr-4.webp", isim: "Aksa Çeçil Peynir 2000 Gr * 4" },
    { kategori: "peynir", gorsel: "img/peynir/ak-du-otlu-peynir-250-gr-18.webp", isim: "Ak-du Otlu Peynir 250 Gr * 18" },
    { kategori: "peynir", gorsel: "img/peynir/ak-du-tulum-peyniri-izmir-koyun-kg.webp", isim: "Ak-du Tulum Peyniri İzmir (Koyun) Kg" },
    { kategori: "peynir", gorsel: "img/peynir/ak-du-tulum-peyniri-izmir-inek-300-gr-12.webp", isim: "Ak-du Tulum Peyniri İzmir (İnek) 300 Gr * 12" },
    { kategori: "peynir", gorsel: "img/peynir/a-r-z-tulum-peyniri-vakumlu-kg.webp", isim: "A.r Z Tulum Peyniri (Vakumlu) Kg" },
    { kategori: "peynir", gorsel: "img/peynir/a-r-z-tulum-peyniri-kg.webp", isim: "A.r Z Tulum Peyniri Kg" },
    { kategori: "peynir", gorsel: "img/peynir/a-r-mus-eski-kasar-kg.webp", isim: "A.r.muş Eski Kaşar Kg" },
    { kategori: "peynir", gorsel: "img/peynir/pinar-beyaz-piknik-20-gr-120.webp", isim: "Pınar Beyaz Piknik 20 Gr * 120" },
    { kategori: "peynir", gorsel: "img/peynir/teksut-krem-peynir-piknik.webp", isim: "Teksüt Krem Peynir Piknik" },
    { kategori: "peynir", gorsel: "img/peynir/teksut-misket-peynir-2000-gr-2.webp", isim: "Teksüt Misket Peynir 2000 Gr * 2" },
    { kategori: "peynir", gorsel: "img/peynir/pinar-beyaz-2750-gr-4.webp", isim: "Pınar Beyaz 2750 Gr * 4" },
    { kategori: "peynir", gorsel: "img/peynir/bergaz-beyaz-peynir-koyun-ezine-18-kg.webp", isim: "Bergaz Beyaz Peynir Koyun Ezine 18 Kg" },
    { kategori: "peynir", gorsel: "img/peynir/gokcebayir-beyaz-peynir-ezine-inek-18-kg.webp", isim: "Gökçebayır Beyaz Peynir Ezine İnek 18 Kg" },
    { kategori: "peynir", gorsel: "img/peynir/altinkilic-beyaz-peynir-klasik-18-kg.webp", isim: "Altınkılıç Beyaz Peynir Klasik 18 Kg" },
    { kategori: "peynir", gorsel: "img/peynir/unal-beyaz-peynir-klasik-vakumlu-kg.webp", isim: "Ünal Beyaz Peynir Klasik Vakumlu Kg" },
    { kategori: "peynir", gorsel: "img/peynir/teksut-krem-peynir-kova-5-kg.webp", isim: "Teksüt Krem Peynir Kova 5 Kg" },
    { kategori: "peynir", gorsel: "img/peynir/ozgullu-dil-peynir-2000-gr-2.webp", isim: "Özgüllü Dil Peynir 2000 Gr * 2" },
    { kategori: "peynir", gorsel: "img/peynir/ozgullu-orgu-peynir-2000-gr-2.webp", isim: "Özgüllü Örgü Peynir 2000 Gr * 2" },
    { kategori: "peynir", gorsel: "img/peynir/muratbey-burgu-peynir-tava-4-kg.webp", isim: "Muratbey Burgu Peynir Tava 4 Kg" },
    { kategori: "peynir", gorsel: "img/peynir/muratbey-topi-peynir-tava-4-kg.webp", isim: "Muratbey Topi Peynir Tava 4 Kg" },
    { kategori: "peynir", gorsel: "img/peynir/karper-peynir-18-li-multipack-12.webp", isim: "Karper Peynir 18 Li Multipack * 12" },
    { kategori: "peynir", gorsel: "img/peynir/karper-peynir-8-li-100-gr-24.webp", isim: "Karper Peynir 8 Li 100 Gr * 24" },
    { kategori: "peynir", gorsel: "img/peynir/karper-peynir-16-li-ekonomik-200-gr-12.webp", isim: "Karper Peynir 16 Lı Ekonomik 200 Gr * 12" },
    { kategori: "peynir", gorsel: "img/peynir/kebir-kolot-peynir-400-gr-12.webp", isim: "Kebir Kolot Peynir 400 Gr * 12" },
    { kategori: "peynir", gorsel: "img/peynir/altinkilic-otlu-peynir-kg.webp", isim: "Altınkılıç Otlu Peynir Kg" },
    { kategori: "peynir", gorsel: "img/peynir/bahcivan-mozarella-rende-peynir-2000-gr-6.webp", isim: "Bahçıvan Mozarella Rende Peynir 2000 Gr * 6" },
    { kategori: "peynir", gorsel: "img/peynir/bolu-isli-peynir-kg.webp", isim: "Bolu İsli Peynir Kg" },
    { kategori: "peynir", gorsel: "img/peynir/cebeci-lor-peynir-500-gr-12.webp", isim: "Cebeci Lor Peynir 500 Gr * 12" },
    { kategori: "peynir", gorsel: "img/peynir/cebeci-lor-peynir-5-kg.webp", isim: "Cebeci Lor Peynir 5 Kg" },
    { kategori: "peynir", gorsel: "img/peynir/ekici-beyaz-peynir-lokum-kivami-20-kg.webp", isim: "Ekici Beyaz Peynir Lokum Kıvamı 20 Kg" },
    { kategori: "peynir", gorsel: "img/peynir/ekici-hellim-peyniri-225-gr-10.webp", isim: "Ekici Hellim Peyniri 225 Gr * 10" },
    { kategori: "peynir", gorsel: "img/peynir/gursut-krem-peynir-5-kg.webp", isim: "Gürsüt Krem Peynir 5 Kg" },
    { kategori: "peynir", gorsel: "img/peynir/altinkilic-otlu-peynir-100-gr-12.webp", isim: "Altınkılıç Otlu Peynir 100 Gr * 12" },
    { kategori: "peynir", gorsel: "img/peynir/kuzucu-beyaz-peynir-1-kg-12.webp", isim: "Kuzucu Beyaz Peynir 1 Kg * 12" },
    { kategori: "peynir", gorsel: "img/peynir/kuzucu-beyaz-peynir-5-kg.webp", isim: "Kuzucu Beyaz Peynir 5 Kg" },
    { kategori: "peynir", gorsel: "img/peynir/kuzucu-beyaz-peynir-17-kg.webp", isim: "Kuzucu Beyaz Peynir 17 Kg" },
    { kategori: "peynir", gorsel: "img/peynir/ezine-peynir.webp", isim: "Ezine Peynir" },
    { kategori: "peynir", gorsel: "img/peynir/altinkilic-ezine-peynir-inek-450-gr-8.webp", isim: "Altınkılıç Ezine Peynir İnek 450 Gr * 8" },
    { kategori: "peynir", gorsel: "img/peynir/unal-beyaz-peynir-extra-inek-18-kg.webp", isim: "Ünal Beyaz Peynir Extra İnek 18 Kg" },
    { kategori: "peynir", gorsel: "img/peynir/unal-beyaz-peynir-vakumlu-ince-dilim-kg.webp", isim: "Ünal Beyaz Peynir Vakumlu (İnce Dilim) Kg" },
    { kategori: "peynir", gorsel: "img/peynir/unal-cecil-peynir-250-gr-12.webp", isim: "Ünal Çeçil Peynir 250 Gr * 12" },
    { kategori: "peynir", gorsel: "img/peynir/unal-cecil-peynir-koli-4000-gr.webp", isim: "Ünal Çeçil Peynir (Koli) 4000 Gr" },
    { kategori: "peynir", gorsel: "img/peynir/unal-dil-peynir-250-gr-12.webp", isim: "Ünal Dil Peynir 250 Gr * 12" },
    { kategori: "peynir", gorsel: "img/peynir/unal-eski-kasar-anadolu-250-gr-12.webp", isim: "Ünal Eski Kaşar Anadolu 250 Gr * 12" },
    { kategori: "peynir", gorsel: "img/peynir/unal-orgu-peynir-250-gr-20.webp", isim: "Ünal Örgü Peynir 250 Gr * 20" },
    { kategori: "peynir", gorsel: "img/peynir/unal-taze-kasar-peynir-700-gr-12.webp", isim: "Ünal Taze Kaşar Peynir 700 Gr * 12" },
    { kategori: "peynir", gorsel: "img/peynir/unal-kasar-peyniri-400-gr-20.webp", isim: "Ünal Kaşar Peyniri 400 Gr * 20" },
    { kategori: "peynir", gorsel: "img/peynir/aksa-beyaz-peynir-klasik-inek-gold-18-kg.webp", isim: "Aksa Beyaz Peynir Klasik İnek Gold 18 Kg" },
    { kategori: "peynir", gorsel: "img/peynir/tahsildaroglu-ezine-peynir.webp", isim: "Tahsildaroğlu Ezine Peynir" },
    { kategori: "peynir", gorsel: "img/peynir/yesilcay-yarim-yagli-beyaz-peynir.webp", isim: "Yeşilçay Yarım Yağlı Beyaz Peynir" },
    { kategori: "peynir", gorsel: "img/peynir/onur-beyaz-peynir-olgunlastirilmis-inek-18-kg.webp", isim: "Onur Beyaz Peynir Olgunlaştırılmış İnek 18 Kg" },
    { kategori: "peynir", gorsel: "img/peynir/pele-sert-beyaz-peynir.webp", isim: "Pele Sert Beyaz Peynir" },
    { kategori: "peynir", gorsel: "img/peynir/ozgullu-cecil-peynir-2000-gr-2.webp", isim: "Özgüllü Çeçil Peynir 2000 Gr * 2" },
    { kategori: "peynir", gorsel: "img/peynir/guzelce-orgu-peynir.webp", isim: "Güzelce Örgü Peynir" },
    { kategori: "peynir", gorsel: "img/peynir/pele-cecil-peynir.webp", isim: "Pele Çeçil Peynir" },
    { kategori: "peynir", gorsel: "img/peynir/sensa-orgu-peynir-tava-3-kg.webp", isim: "Şensa Örgü Peynir Tava 3 Kg" },

    // --- KAŞAR ÇEŞİTLERİ (52 Adet) ---
    { kategori: "kasar", gorsel: "img/kasar/pinar-taze-kasar-peynir-1000-gr-12.webp", isim: "Pınar Taze Kaşar Peynir 1000 Gr * 12" },
    { kategori: "kasar", gorsel: "img/kasar/aylac-taze-tost-kasar-peynir-1000-gr-12.webp", isim: "Aylaç Taze Tost Kaşar Peynir 1000 Gr * 12" },
    { kategori: "kasar", gorsel: "img/kasar/ozgullu-taze-kasar-peynir-2-5-kg-5.webp", isim: "Özgüllü Taze Kaşar Peynir 2,5 Kg * 5" },
    { kategori: "kasar", gorsel: "img/kasar/trakya-eski-kasar-peynir-m-d-inek-kg.webp", isim: "Trakya Eski Kaşar Peynir M D İnek Kg" },
    { kategori: "kasar", gorsel: "img/kasar/sariguzel-taze-kasar-peynir-2000-gr-8.webp", isim: "Sarıgüzel Taze Kaşar Peynir 2000 Gr * 8" },
    { kategori: "kasar", gorsel: "img/kasar/icer-taze-kasar-peynir-1000-gr-12.webp", isim: "İçer Taze Kaşar Peynir 1000 Gr * 12" },
    { kategori: "kasar", gorsel: "img/kasar/ozgullu-taze-kasar-peynir-2000-gr-5.webp", isim: "Özgüllü Taze Kaşar Peynir 2000 Gr * 5" },
    { kategori: "kasar", gorsel: "img/kasar/muratbey-taze-kasar-peynir-2000-gr-6.webp", isim: "Muratbey Taze Kaşar Peynir 2000 Gr * 6" },
    { kategori: "kasar", gorsel: "img/kasar/mupas-eski-kasar-peynir-vakumlu-kg.webp", isim: "Mupaş Eski Kaşar Peynir Vakumlu Kg" },
    { kategori: "kasar", gorsel: "img/kasar/kars-eski-kasar-peynir-kg.webp", isim: "Kars Eski Kaşar Peynir Kg" },
    { kategori: "kasar", gorsel: "img/kasar/aksa-kasar-peyniri-yarim-yagli-1000-gr-12.webp", isim: "Aksa Kaşar Peyniri Yarım Yağlı 1000 Gr * 12" },
    { kategori: "kasar", gorsel: "img/kasar/has-taze-kasar-peynir-1000-gr-12.webp", isim: "Has Taze Kaşar Peynir 1000 Gr * 12" },
    { kategori: "kasar", gorsel: "img/kasar/aksa-kasar-peyniri-tam-yagli-1000-gr-12.webp", isim: "Aksa Kaşar Peyniri Tam Yağlı 1000 Gr * 12" },
    { kategori: "kasar", gorsel: "img/kasar/gunesoglu-taze-kasar-peynir-2000-gr-5.webp", isim: "Güneşoğlu Taze Kaşar Peynir 2000 Gr * 5" },
    { kategori: "kasar", gorsel: "img/kasar/gezek-taze-kasar-peynir-pidelik-2000-gr-5.webp", isim: "Gezek Taze Kaşar Peynir Pidelik 2000 Gr *5" },
    { kategori: "kasar", gorsel: "img/kasar/cobanyildizi-taze-kasar-peynir-1000-gr-12.webp", isim: "Çobanyıldızı Taze Kaşar Peynir 1000 Gr * 12" },
    { kategori: "kasar", gorsel: "img/kasar/cobanyildizi-taze-ksar-peynir-2000-gr-12.webp", isim: "Çobanyıldızı Taze Kaşar Peynir 2000 Gr * 12" },
    { kategori: "kasar", gorsel: "img/kasar/cobanoglu-taze-kasar-peynir-2000-gr-12.webp", isim: "Çobanoğlu Taze Kaşar Peynir 2₀₀₀ Gr * ₁₂" },
    { kategori: "kasar", gorsel: "img/kasar/unal-taze-kasar-peynir-700-gr-12.webp", isim: "Ünal Taze Kaşar Peynir 700 Gr * 12" },
    { kategori: "kasar", gorsel: "img/kasar/unal-eski-kasar-anadolu-250-gr-12.webp", isim: "Ünal Eski Kaşar Anadolu 250 Gr * 12" },
    { kategori: "kasar", gorsel: "img/kasar/teksut-taze-kasar-peyniri-600-gr-12.webp", isim: "Teksüt Taze Kaşar Peyniri 600 Gr * 12" },
    { kategori: "kasar", gorsel: "img/kasar/tahsildaroglu-taze-kasar-peynir-600-gr-12.webp", isim: "Tahsildaroğlu Taze Kaşar Peynir 600 Gr * 12" },
    { kategori: "kasar", gorsel: "img/kasar/tahsildaroglu-eski-kasar-ezine-350-gr-12.webp", isim: "Tahsildaroğlu Eski Kaşar Ezine 350 Gr * 12" },
    { kategori: "kasar", gorsel: "img/kasar/taciroglu-eski-kasar-250-gr-10.webp", isim: "Taciroğlu Eski Kaşar 250 Gr * 10" },
    { kategori: "kasar", gorsel: "img/kasar/gunesoglu-taze-kasar-peynir-1000-gr-10.webp", isim: "Güneşoğlu Taze Kaşar Peynir 1000 Gr * 10" },
    { kategori: "kasar", gorsel: "img/kasar/cobanoglu-taze-kasar-peynir-1000-gr-12.webp", isim: "Çobanoğlu Taze Kaşar Peynir 1000 Gr * 12" },
    { kategori: "kasar", gorsel: "img/kasar/muratbey-taze-kasar-peynir-500-gr-12.webp", isim: "Muratbey Taze Kaşar Peynir 500 Gr * 12" },
    { kategori: "kasar", gorsel: "img/kasar/cebeci-taze-kasar-peynir-1000-gr-12.webp", isim: "Cebeci Taze Kaşar Peynir 1000 Gr * 12" },
    { kategori: "kasar", gorsel: "img/kasar/altinkilic-eski-kasar-koyun-trakya-kg.webp", isim: "Altınkılıç Eski Kaşar Koyun Trakya Kg" },
    { kategori: "kasar", gorsel: "img/kasar/ozgullu-taze-kasar-peynir-1000-gr-10.webp", isim: "Özgüllü Taze Kaşar Peynir 1000 Gr * 10" },
    { kategori: "kasar", gorsel: "img/kasar/vahdet-taze-kasar-peynir-1000-gr-12.webp", isim: "Vahdet Taze Kaşar Peynir 1000 Gr * 12" },
    { kategori: "kasar", gorsel: "img/kasar/sariguzel-taze-kasar-peynir-1000-gr-12.webp", isim: "Sarıgüzel Taze Kaşar Peynir 1000 Gr * 12" },
    { kategori: "kasar", gorsel: "img/kasar/muratbey-taze-kasar-peynir-1000-gr-12.webp", isim: "Muratbey Taze Kaşar Peynir 1000 Gr * 12" },
    { kategori: "kasar", gorsel: "img/kasar/torku-taze-kasar-peynir-tost-600-gr-12.webp", isim: "Torku Taze Kaşar Peynir Tost 600 Gr * 12" },
    { kategori: "kasar", gorsel: "img/kasar/cobanoglu-taze-kasar-peynir-dilimli-1500-gr-8.webp", isim: "Çobanoğlu Taze Kaşar Peynir Dilimli 1500 Gr * 8" },
    { kategori: "kasar", gorsel: "img/kasar/cobanyildizi-taze-kasar-peynir-dilimli-1000-gr-6.webp", isim: "Çobanyıldızı Taze Kaşar Peynir Dilimli 1000 Gr * 6" },
    { kategori: "kasar", gorsel: "img/kasar/turkova-taze-ksar-peynir-dilimli-1500-gr-8.webp", isim: "Türkova Taze Kaşar Peynir Dilimli 15００ Gr * 8" },
    { kategori: "kasar", gorsel: "img/kasar/gultepe-taze-kasar-peynir-dilimli-1０００-gr-6.webp", isim: "Gültepe Taze Kaşar Peynir Dilimli １０００ Gr * 6" },
    { kategori: "kasar", gorsel: "img/kasar/narin-kasar-peyniri-dilimli-1000-gr-12.webp", isim: "Narin Kaşar Peyniri Dilimli 1000 Gr * 12" },
    { kategori: "kasar", gorsel: "img/kasar/kaskar-eski-kasar-dilimli-kg.webp", isim: "Kaşkar Eski Kaşar Dilimli Kg" },
    { kategori: "kasar", gorsel: "img/kasar/aksa-kasar-peyniri-dilimli-1000-gr-12.webp", isim: "Aksa Kaşar Peyniri Dilimli 1000 Gr * 12" },
    { kategori: "kasar", gorsel: "img/kasar/onur-taze-kasar-peynir-dilimli-500-gr-24.webp", isim: "Onur Taze Kaşar Peynir Dilimli 500 Gr * 24" },
    { kategori: "kasar", gorsel: "img/kasar/torku-taze-kasar-dilimli-350-gr-12.webp", isim: "Torku Taze Kaşar Dilimli 350 Gr * 12" },
    { kategori: "kasar", gorsel: "img/kasar/coskun-kasar-peyniri-tost-1000-gr-12.webp", isim: "Coşkun Kaşar Peyniri Tost 1000 Gr * 12" },
    { kategori: "kasar", gorsel: "img/kasar/muratbey-taze-kasar-peynir-dilimli-225-gr-24.webp", isim: "Muratbey Taze Kaşar Peynir Dilimli 225 Gr * 24" },
    { kategori: "kasar", gorsel: "img/kasar/gunesoglu-taze-kasar-peynir-dilimli-1000-gr-6.webp", isim: "Güneşoğlu Taze Kaşar Peynir Dilimli 1000 Gr *6" },
    { kategori: "kasar", gorsel: "img/kasar/cebeci-taze-kasar-peynir-dilimli-1000-gr-6.webp", isim: "Cebeci Taze Kaşar Peynir Dilimli 1000 Gr * 6" },
    { kategori: "kasar", gorsel: "img/kasar/cobanoglu-kasar-peyniri-dilimli-1000-gr-6.webp", isim: "Çobanoğlu Kaşar Peyniri Dilimli 1000 Gr * 6" },
    { kategori: "kasar", gorsel: "img/kasar/cobanoglu-kasar-yarim-yagli-dilimli-1000-gr-6.webp", isim: "Çobanoğlu Kaşar Yarım Yağlı Dilimli 1000 Gr * 6" },
    { kategori: "kasar", gorsel: "img/kasar/ozgullu-taze-kasar-peynir-dilimli-1000-gr-6.webp", isim: "Özgüllü Taze Kaşar Peynir Dilimli 1000 Gr * 6" },
    { kategori: "kasar", gorsel: "img/kasar/uzelkoy-dilimli-taze-kasar-1000-gr-9.webp", isim: "Uzelköy Dilimli Taze Kaşar 1000 Gr * 9" },
    { kategori: "kasar", gorsel: "img/kasar/sariguzel-dilimli-kasar-1000-gr.webp", isim: "Sarıgüzel Dilimli Kaşar 1000 Gr" },

    // --- ZEYTİN ÇEŞİTLERİ (74 Adet) ---
    { kategori: "zeytin", gorsel: "img/zeytin-siyah-az-tuzlu-5-kg.webp", isim: "Zeytin Siyah Az Tuzlu 5 Kg" },
    { kategori: "zeytin", gorsel: "img/zeytin-siyah-kalamata-10-kg.webp", isim: "Zeytin Siyah Kalamata 10 Kg" },
    { kategori: "zeytin", gorsel: "img/ege-eylul-yesil-zeytin-kuru-domates-dolgulu-10-kg.webp", isim: "Ege Eylül Yeşil Zeytin Kuru Domates Dolgulu 10 Kg" },
    { kategori: "zeytin", gorsel: "img/aksa-siyah-zeytin-gurme-181-210-10-kg.webp", isim: "Aksa Siyah Zeytin Gurme 181-210 10 Kg" },
    { kategori: "zeytin", gorsel: "img/aksa-siyah-zeytin-kizil-kahverengi-kapak-10-kg.webp", isim: "Aksa Siyah Zeytin Kızıl Kahverengi Kapak 10 Kg" },
    { kategori: "zeytin", gorsel: "img/aksa-siyah-zeytin-350-380-mavi-kapak-10-kg.webp", isim: "Aksa Siyah Zeytin 350-380 Mavi Kapak 10 Kg" },
    { kategori: "zeytin", gorsel: "img/aksa-siyah-zeytin-321-350-yesil-tnk-10-kg.webp", isim: "Aksa Siyah Zeytin 321-350 Yeşil Tnk 10 Kg" },
    { kategori: "zeytin", gorsel: "img/aksa-siyah-zeytin-290-320-kirmizi-tnk-10-kg.webp", isim: "Aksa Siyah Zeytin 290-320 Kırmızı Tnk 10 Kg" },
    { kategori: "zeytin", gorsel: "img/aksa-siyah-zeytin-260-290-bordo-tnk-10-kg.webp", isim: "Aksa Siyah Zeytin 260-290 Bordo Tnk 10 Kg" },
    { kategori: "zeytin", gorsel: "img/aksa-siyah-zeytin-230-260-siyah-tnk-10-kg.webp", isim: "Aksa Siyah Zeytin 230-260 Siyah Tnk 10 Kg" },
    { kategori: "zeytin", gorsel: "img/aksa-siyah-zeytin-201-230-beyaz-tnk-10-kg.webp", isim: "Aksa Siyah Zeytin 201-230 Beyaz Tnk 10 Kg" },
    { kategori: "zeytin", gorsel: "img/aksa-siyah-zeytin-ezmesi-kova-5-kg.webp", isim: "Aksa Siyah Zeytin Ezmesi Kova 5 Kg" },
    { kategori: "zeytin", gorsel: "img/marmara-birlik-siyah-zeytin-mega-800-gr-6.webp", isim: "Marmara Birlik Siyah Zeytin Mega 800 Gr * 6" },
    { kategori: "zeytin", gorsel: "img/marmara-birlik-siyah-zeytin-kuru-sele-800-gr-6.webp", isim: "Marmara Birlik Siyah Zeytin Kuru Sele 800 Gr *6" },
    { kategori: "zeytin", gorsel: "img/marmara-birlik-siyah-zeytin-gold-800-gr-6.webp", isim: "Marmara Birlik Siyah Zeytin Gold 800 Gr * 6" },
    { kategori: "zeytin", gorsel: "img/marmara-birlik-siyah-zeytin-az-tuzlu-800-gr-6.webp", isim: "Marmara Birlik Siyah Zeytin Az Tuzlu 800 Gr * 6" },
    { kategori: "zeytin", gorsel: "img/pele-jumbo-siyah-zeytin-290-320-clb-10-kg.webp", isim: "Pele Jumbo Siyah Zeytin 290-320 Clb 10 Kg" },
    { kategori: "zeytin", gorsel: "img/pele-siyah-zeytin-230-260-clb.webp", isim: "Pele Siyah Zeytin 230-260 Clb" },
    { kategori: "zeytin", gorsel: "img/gungor-yesil-zeytin-kirma-160-180-clb-10-kg.webp", isim: "Güngör Yeşil Zeytin Kırma 160-180 Clb 10 Kg" },
    { kategori: "zeytin", gorsel: "img/gungor-yesil-zeytin-biberli-180-200-clb-10-kg.webp", isim: "Güngör Yeşil Zeytin Biberli 180-200 Clb 10 Kg" },
    { kategori: "zeytin", gorsel: "img/gungor-yesil-zeytin-kokyeyl-100-120-clb-10-kg.webp", isim: "Güngör Yeşil Zeytin Kokyeyl 100-120 Clb 10 Kg" },
    { kategori: "zeytin", gorsel: "img/gungor-yesil-zeytin-kirma-120-140-clb-10-kg.webp", isim: "Güngör Yeşil Zeytin Kırma 120-140 Clb 10 Kg" },
    { kategori: "zeytin", gorsel: "img/gungor-yesil-zeytin-cizik-201-230-clb-10-kg.webp", isim: "Güngör Yeşil Zeytin Çizik 201-230 Clb 10 Kg" },
    { kategori: "zeytin", gorsel: "img/gungor-yesil-zeytin-biberli-200-230-clb-10-kg.webp", isim: "Güngör Yeşil Zeytin Biberli 200-230 Clb 10 Kg" },
    { kategori: "zeytin", gorsel: "img/gungor-yesil-zeytin-biberli-120-140-clb-10-kg.webp", isim: "Güngör Yeşil Zeytin Biberli 120-140 Clb 10 Kg" },
    { kategori: "zeytin", gorsel: "img/ece-yesil-zeytin-dilimli-370-gr-12.webp", isim: "Ece Yeşil Zeytin Dilimli 370 Gr * 12" },
    { kategori: "zeytin", gorsel: "img/ece-siyah-zeytin-light-400-gr-12.webp", isim: "Ece Siyah Zeytin Light 400 Gr * 12" },
    { kategori: "zeytin", gorsel: "img/ece-siyah-zeytin-dilimli-370-gr-12.webp", isim: "Ece Siyah Zeytin Dilimli 370 Gr * 12" },
    { kategori: "zeytin", gorsel: "img/bagci-yesil-zeytin-super-kirma-10-kg.webp", isim: "Bağcı Yeşil Zeytin Süper Kırma 10 Kg" },
    { kategori: "zeytin", gorsel: "img/bagci-yesil-zeytin-ozel-cizik-210-230-10-kg.webp", isim: "Bağcı Yeşil Zeytin Özel Çizik (210-230) 10 Kg" },
    { kategori: "zeytin", gorsel: "img/bagci-yesil-zeytin-kirma-700-gr-12.webp", isim: "Bağcı Yeşil Zeytin Kırma 700 Gr * 12" },
    { kategori: "zeytin", gorsel: "img/bagci-yesil-zeytin-cizik-700-gr-12.webp", isim: "Bağcı Yeşil Zeytin Çizik 700 Gr * 12" },
    { kategori: "zeytin", gorsel: "img/bagci-yesil-zeytin-biberli-700-gr-12.webp", isim: "Bağcı Yeşil Zeytin Biberli 700 Gr * 12" },
    { kategori: "zeytin", gorsel: "img/bagci-siyah-zeytin-pet-900-gr-6.webp", isim: "Bağcı Siyah Zeytin Pet 900 Gr * 6" },
    { kategori: "zeytin", gorsel: "img/bagbasi-zeytin-salatasi-5-kg.webp", isim: "Bağbaşı Zeytin Salatası 5 Kg" },
    { kategori: "zeytin", gorsel: "img/alan-siyah-zeytin-mega-10-kg.webp", isim: "Alan Siyah Zeytin Mega 10 Kg" },
    { kategori: "zeytin", gorsel: "img/alan-siyah-zeytin-special-10-kg.webp", isim: "Alan Siyah Zeytin Special 10 Kg" },
    { kategori: "zeytin", gorsel: "img/alan-siyah-zeytin-kuru-sele-ozel-urun-9-kg.webp", isim: "Alan Siyah Zeytin Kuru Sele Özel Ürün 9 Kg" },
    { kategori: "zeytin", gorsel: "img/alan-siyah-zeytin-jumbo-10-kg.webp", isim: "Alan Siyah Zeytin Jumbo 10 Kg" },
    { kategori: "zeytin", gorsel: "img/fora-zeytin-ezmesi-340-gr-6.webp", isim: "Fora Zeytin Ezmesi 340 Gr * 6" },
    { kategori: "zeytin", gorsel: "img/bagci-zeytin-ezmesi-200-gr-25.webp", isim: "Bağcı Zeytin Ezmesi 200 Gr * 25" },
    { kategori: "zeytin", gorsel: "img/siyah-zeytin-ezmesi-kova-5-kg.webp", isim: "Siyah Zeytin Ezmesi Kova 5 Kg" },
    { kategori: "zeytin", gorsel: "img/akdeniz-salatasi-izgara-zeytin-kova-3-kg-4.webp", isim: "Akdeniz Salatası Izgara Zeytin Kova 3 Kg * 4" },
    { kategori: "zeytin", gorsel: "img/bagci-yesil-zeytin-ozel-biberli-10-kg.webp", isim: "Bağcı Yeşil Zeytin Özel Biberli 10 Kg" },
    { kategori: "zeytin", gorsel: "img/bagci-yesil-zeytin-dilimli-8-kg.webp", isim: "Bağcı Yeşil Zeytin Dilimli 8 Kg" },
    { kategori: "zeytin", gorsel: "img/bagci-siyah-zeytin-dilimli-8-kg.webp", isim: "Bağcı Siyah Zeytin Dilimli 8 Kg" },
    { kategori: "zeytin", gorsel: "img/bagci-siyah-zeytin-prima-10-kg.webp", isim: "Bağcı Siyah Zeytin Prima 10 Kg" },
    { kategori: "zeytin", gorsel: "img/bagci-siyah-zeytin-super-4-kg-4.webp", isim: "Bağcı Siyah Zeytin Süper 4 Kg * 4" },
    { kategori: "zeytin", gorsel: "img/biberli-yesil-zeytin-120-140-kalibre.webp", isim: "Biberli Yeşil Zeytin (120-140) Kalibre" },
    { kategori: "zeytin", gorsel: "img/colban-biberli-yesil-zeytin-140-160-kalibre.webp", isim: "Çolban Biberli Yeşil Zeytin (140-160) Kalibre" },
    { kategori: "zeytin", gorsel: "img/ikram-yesil-zeytin-duble-grill-izgara-9-kg.webp", isim: "İkram Yeşil Zeytin Duble Grill Izgara 9 Kg" },
    { kategori: "zeytin", gorsel: "img/zova-yesil-zeytin-izgara-zeytin-grill-9-kg.webp", isim: "Zova Yeşil Zeytin Izgara Zeytin (Grill) 9 Kg" },
    { kategori: "zeytin", gorsel: "img/akbek.webp", isim: "Akbek Yağlı Sele Siyah Zeytin 10 kg 201-230 Kalibre" },
    { kategori: "zeytin", gorsel: "img/akbek.webp", isim: "Akbek Yağlı Sele Siyah Zeytin 10 kg 230-260 Kalibre" },
    { kategori: "zeytin", gorsel: "img/akbek.webp", isim: "Akbek Yağlı Sele Siyah Zeytin 10 kg 260-290 Kalibre" },
    { kategori: "zeytin", gorsel: "img/akbek.webp", isim: "Akbek Yağlı Sele Siyah Zeytin 10 kg 290-320 Kalibre" },
    { kategori: "zeytin", gorsel: "img/akbek.webp", isim: "Akbek Yağlı Sele Siyah Zeytin 10 kg 320-350 Kalibre" },
    { kategori: "zeytin", gorsel: "img/akbek.webp", isim: "Akbek Yağlı Sele Siyah Zeytin 10 kg 350-380 Kalibre" },
    { kategori: "zeytin", gorsel: "img/akbek.webp", isim: "Akbek Kuru Sele Siyah Zeytin 9 kg 260-290 Kalibre" },
    { kategori: "zeytin", gorsel: "img/akbek.webp", isim: "Akbek Çizik Yeşil Zeytin 10 kg 201-230 Kalibre" },
    { kategori: "zeytin", gorsel: "img/akbek.webp", isim: "Akbek Çizik Yeşil Zeytin 10 kg 230-260 Kalibre" },
    { kategori: "zeytin", gorsel: "img/akbek.webp", isim: "Akbek Çizik Yeşil Zeytin 10 kg 260-290 Kalibre" },
    { kategori: "zeytin", gorsel: "img/akbek.webp", isim: "Akbek Biberli Yeşil Zeytin 10 kg 180-200 Kalibre" },
    { kategori: "zeytin", gorsel: "img/akbek.webp", isim: "Akbek Biberli Yeşil Zeytin 10 kg 200-230 Kalibre" },
    { kategori: "zeytin", gorsel: "img/akbek.webp", isim: "Akbek Domat Kırma Yeşil Zeytin 10 kg 160-180 Kalibre" },
    { kategori: "zeytin", gorsel: "img/akbek.webp", isim: "Akbek Izgara Yeşil Zeytin 9 kg 160-180 Kalibre" },
    { kategori: "zeytin", gorsel: "img/akbek.webp", isim: "Akbek Izgara Yeşil Zeytin 9 kg 180-200 Kalibre" },
    { kategori: "zeytin", gorsel: "img/akbek.webp", isim: "Akbek Izgara Yeşil Zeytin 9 kg 200-230 Kalibre" },
    { kategori: "zeytin", gorsel: "img/akbek.webp", isim: "Akbek Girit Çizik (Alyanak) Yeşil Zeytin 10 kg 200-230 Kalibre" },
    { kategori: "zeytin", gorsel: "img/akbek.webp", isim: "Akbek Hal-Hal Yeşil Zeytin 10 kg" },
    { kategori: "zeytin", gorsel: "img/akbek.webp", isim: "Akbek Bademli Yeşil Zeytin 10 kg 110-120 Kalibre" },
    { kategori: "zeytin", gorsel: "img/akbek.webp", isim: "Akbek Hatay Kırma Yeşil Zeytin 10 kg 201-230 Kalibre" },
    { kategori: "zeytin", gorsel: "img/akbek.webp", isim: "Akbek Dilimli Yeşil Zeytin 8 kg" },
    { kategori: "zeytin", gorsel: "img/akbek.webp", isim: "Akbek Dilimli Siyah Zeytin 8 kg" },

    // --- JAMBON / ŞARKÜTERİ (70 Adet) ---
    { kategori: "et", gorsel: "img/jambon/besler-sucuk-gold-kg.webp", isim: "Beşler Sucuk Gold Kg" },
    { kategori: "et", gorsel: "img/jambon/besler-sucuk-catal-kg.webp", isim: "Beşler Sucuk Çatal Kg" },
    { kategori: "et", gorsel: "img/jambon/danet-jambon-pilic-sebzeli-2000-gr-2.webp", isim: "Danet Jambon Piliç Sebzeli 2000 Gr * 2" },
    { kategori: "et", gorsel: "img/jambon/danet-jambon-dana-2000-gr-2.webp", isim: "Danet Jambon Dana 2000 Gr * 2" },
    { kategori: "et", gorsel: "img/jambon/danet-kavurma-dana-blok-kg.webp", isim: "Danet Kavurma Dana Blok Kg" },
    { kategori: "et", gorsel: "img/jambon/capanoglu-pastirma-sirt-kg.webp", isim: "Çapanoğlu Pastırma Sırt Kg" },
    { kategori: "et", gorsel: "img/jambon/capanoglu-pastirma-secme-kg.webp", isim: "Çapanoğlu Pastırma Seçme Kg" },
    { kategori: "et", gorsel: "img/jambon/capanoglu-pastirma-dilimli-sirali-250-gr-30.webp", isim: "Çapanoğlu Pastırma Dilimli Sıralı 250 Gr * 30" },
    { kategori: "et", gorsel: "img/jambon/capanoglu-pastirma-dilimli-90-gr-15.webp", isim: "Çapanoğlu Pastırma Dilimli 90 Gr * 15" },
    { kategori: "et", gorsel: "img/jambon/capanoglu-kuru-et-blok-kg.webp", isim: "Çapanoğlu Kuru Et Blok Kg" },
    { kategori: "et", gorsel: "img/jambon/capanoglu-kuru-et-antrikot-blok-kg.webp", isim: "Çapanoğlu Kuru Et Antrikot Blok Kg" },
    { kategori: "et", gorsel: "img/jambon/capanoglu-kavurma-dilimli-150-gr-15.webp", isim: "Çapanoğlu Kavurma Dilimli 150 Gr * 15" },
    { kategori: "et", gorsel: "img/jambon/capanoglu-kavurma-dana-vakumlu-kare-kg.webp", isim: "Çapanoğlu Kavurma Dana Vakumlu Kare Kg" },
    { kategori: "et", gorsel: "img/jambon/capanoglu-kavurma-dana-tnk-kg.webp", isim: "Çapanoğlu Kavurma Dana Tnk Kg" },
    { kategori: "et", gorsel: "img/jambon/capanoglu-kavurma-dana-blok-kg.webp", isim: "Çapanoğlu Kavurma Dana Blok Kg" },
    { kategori: "et", gorsel: "img/jambon/capanoglu-jambon-dana-kg.webp", isim: "Çapanoğlu Jambon Dana Kg" },
    { kategori: "et", gorsel: "img/jambon/fume-dil-kg.webp", isim: "Füme Dil Kg" },
    { kategori: "et", gorsel: "img/jambon/ayan-fume-hindi-kg.webp", isim: "Ayan Füme Hindi Kg" },
    { kategori: "et", gorsel: "img/jambon/imamoglu-pastirma-dilim-cemensiz-100-gr-30.webp", isim: "İmamoğlu Pastırma Dilim (Çemensiz) 100 Gr * 30" },
    { kategori: "et", gorsel: "img/jambon/capanoglu-pastirma-antrikot-kg.webp", isim: "Çapanoğlu Pastırma Antrikot Kg" },
    { kategori: "et", gorsel: "img/jambon/coskun-pastirma-dilimli-80-gr-10.webp", isim: "Coşkun Pastırma Dilimli 80 Gr * 10" },
    { kategori: "et", gorsel: "img/jambon/basyazici-pastirma-dilim-secme-100-gr-20.webp", isim: "Başyazıcı Pastırma Dilim Seçme 100 Gr * 20" },
    { kategori: "et", gorsel: "img/jambon/besler-salam-dana-fistikli-1250-gr-6.webp", isim: "Beşler Salam Dana Fıstıklı 1250 Gr * 6" },
    { kategori: "et", gorsel: "img/jambon/sahin-kavurma-dana-blok-kg.webp", isim: "Şahin Kavurma Dana Blok Kg" },
    { kategori: "et", gorsel: "img/jambon/sahin-salam-dana-macar-900-gr-12.webp", isim: "Şahin Salam Dana Macar 900 Gr * 12" },
    { kategori: "et", gorsel: "img/jambon/sahin-salam-ispanyol-2-kg-6.webp", isim: "Şahin Salam İspanyol 2 Kg * 6" },
    { kategori: "et", gorsel: "img/jambon/pinar-salam-dana-macar-1000-gr-6.webp", isim: "Pınar Salam Dana Macar 1000 Gr * 6" },
    { kategori: "et", gorsel: "img/jambon/pinar-salam-dana-macar-fistikli-1000-gr-6.webp", isim: "Pınar Salam Dana Macar Fıstıklı 1000 Gr * 6" },
    { kategori: "et", gorsel: "img/jambon/namet-salam-dana-fistikli-1250-gr.webp", isim: "Namet Salam Dana Fıstıklı 1250 Gr" },
    { kategori: "et", gorsel: "img/jambon/danet-sucuk-pilic-dilimli-250-gr-12.webp", isim: "Danet Sucuk Piliç Dilimli 250 Gr * 12" },
    { kategori: "et", gorsel: "img/jambon/danet-sucuk-dana-kg.webp", isim: "Danet Sucuk Dana Kg" },
    { kategori: "et", gorsel: "img/jambon/coskun-sucuk-dana-catal-kg.webp", isim: "Coşkun Sucuk Dana Çatal Kg" },
    { kategori: "et", gorsel: "img/jambon/coskun-sucuk-dana-kasap-kvt-kg.webp", isim: "Coşkun Sucuk Dana Kasap Kvt Kg" },
    { kategori: "et", gorsel: "img/jambon/basyazici-kavurma-dana-blok-kg.webp", isim: "Başyazıcı Kavurma Dana Blok Kg" },
    { kategori: "et", gorsel: "img/jambon/basyazici-kavurma-dana-dilimli-100-gr-40.webp", isim: "Başyazıcı Kavurma Dana Dilimli 100 Gr * 40" },
    { kategori: "et", gorsel: "img/jambon/besler-jambon-dana-kg.webp", isim: "Beşler Jambon Dana Kg" },
    { kategori: "et", gorsel: "img/jambon/besler-kavurma-dana-blok-kg.webp", isim: "Beşler Kavurma Dana Blok Kg" },
    { kategori: "et", gorsel: "img/jambon/coskun-salam-dana-macar-kg.webp", isim: "Coşkun Salam Dana Macar - Kg" },
    { kategori: "et", gorsel: "img/jambon/coskun-salam-dana-ispanyol-kg.webp", isim: "Coşkun Salam Dana İspanyol Kg" },
    { kategori: "et", gorsel: "img/jambon/coskun-sucuk-dana-baton-kuvet-kg.webp", isim: "Coşkun Sucuk Dana Baton Küvet Kg" },
    { kategori: "et", gorsel: "img/jambon/banvit-salam-pilic-750-gr-10.webp", isim: "Banvit Salam Piliç 750 Gr * 10" },
    { kategori: "et", gorsel: "img/jambon/apikoglu-sucuk-dana-parmak-kuvet-kg.webp", isim: "Apikoğlu Sucuk Dana Parmak Küvet Kg" },
    { kategori: "et", gorsel: "img/jambon/apikoglu-sucuk-dana-kangal-kuvet-kg.webp", isim: "Apikoğlu Sucuk Dana Kangal Küvet Kg" },
    { kategori: "et", gorsel: "img/jambon/apikoglu-kavurma-dana-kg.webp", isim: "Apikoğlu Kavurma Dana Kg" },
    { kategori: "et", gorsel: "img/jambon/altinay-sosis-pilic-bufe-uzun-1000-12.webp", isim: "Altınay Sosis Piliç Büfe Uzun 1000 * 12" },
    { kategori: "et", gorsel: "img/jambon/altinay-sosis-pilic-julyen-kg.webp", isim: "Altınay Sosis Piliç (Jülyen) Kg" },
    { kategori: "et", gorsel: "img/jambon/altinay-jambon-pilic-kg.webp", isim: "Altınay Jambon Piliç Kg" },
    { kategori: "et", gorsel: "img/jambon/altinay-jambon-pilic-sebzeli-kg.webp", isim: "Altınay Jambon Piliç Sebzeli Kg" },
    { kategori: "et", gorsel: "img/jambon/altinay-jambon-dana-kg.webp", isim: "Altınay Jambon Dana Kg" },
    { kategori: "et", gorsel: "img/jambon/altinay-jambon-hindi.webp", isim: "Altınay Jambon Hindi" },
    { kategori: "et", gorsel: "img/jambon/besler-sucuk-dana-diiimli-500-gr-9.webp", isim: "Beşler Sucuk Dana Diiimli 500 Gr * 9" },
    { kategori: "et", gorsel: "img/jambon/inan-sucuk-dana-baton-bufe-350-gr-20.webp", isim: "İnan Sucuk Dana Baton Büfe 350 Gr * 20" },
    { kategori: "et", gorsel: "img/jambon/altinay-sucuk-dilimli-pilic-750-gr-16.webp", isim: "Altınay Sucuk Dilimli Piliç 750 Gr * 16" },
    { kategori: "et", gorsel: "img/jambon/hunkar-sucuk-pilic-baton-400-gr-20.webp", isim: "Hünkar Sucuk Piliç Baton 400 Gr * 20" },
    { kategori: "et", gorsel: "img/jambon/pinar-sosis-dana-kokteyl-215-gr-12.webp", isim: "Pınar Sosis Dana Kokteyl 215 Gr * 12" },
    { kategori: "et", gorsel: "img/jambon/pinar-sosis-dana-uzun-soyulmus-225-gr-12.webp", isim: "Pınar Sosis Dana Uzun Soyulmuş 225 Gr * 12" },
    { kategori: "et", gorsel: "img/besler-sosis-pilic-kokteyl-eko-700-gr-12.webp", isim: "Beşler Sosis Piliç Kokteyl Eko 700 Gr * 12" },
    { kategori: "et", gorsel: "img/besler-sosis-dana-kokteyl-220-gr-12.webp", isim: "Beşler Sosis Dana Kokteyl 220 Gr * 12" },
    { kategori: "et", gorsel: "img/besler-sosis-dana-kokteyl-220-gr-12-kg.webp", isim: "Beşler Sosis Dana Kokteyl 220 Gr * 12 Kg" },
    { kategori: "et", gorsel: "img/besler-dokme-sosis-pilic-kg.webp", isim: "Beşler Dökme Sosis Piliç Kg" },
    { kategori: "et", gorsel: "img/danet-sosis-pilic-kokteyl-250-gr-12.webp", isim: "Danet Sosis Piliç Kokteyl 250 Gr * 12" },
    { kategori: "et", gorsel: "img/banvit-salam-pilic-750-gr-10.webp", isim: "Banvit Salam Piliç 750 Gr * 10" },
    { kategori: "et", gorsel: "img/danet-salam-etli-macar-2000-gr-2.webp", isim: "Danet Salam Etli Macar 2000 Gr * 2" },
    { kategori: "et", gorsel: "img/danet-salam-dana-macar-2000-gr-2.webp", isim: "Danet Salam Dana Macar 2000 Gr * 2" },
    { kategori: "et", gorsel: "img/danet-salam-ispanyol-fistikli-2000-gr-2.webp", isim: "Danet Salam İspanyol Fıstıklı 2000 Gr * 2" },
    { kategori: "et", gorsel: "img/pinar-salam-hindi-etli-1000-gr-6.webp", isim: "Pınar Salam Hindi Etli 1000 Gr * 6" },
    { kategori: "et", gorsel: "img/pinar-salam-hindi-bufe-900-gr-6.webp", isim: "Pınar Salam Hindi Büfe 900 Gr * 6" },
    { kategori: "et", gorsel: "img/pinar-salam-hindi-fistikli-1000-gr-6.webp", isim: "Pınar Salam Hindi Fıstıklı 1000 Gr * 6" },
    { kategori: "et", gorsel: "img/basyazici-salam-dana-macar-900-gr-15.webp", isim: "Başyazıcı Salam Dana Macar 900 Gr * 15" },
    { kategori: "et", gorsel: "img/altinay-salam-pilic-eko-1000-gr-10.webp", isim: "Altınay Salam Piliç Eko 1000 Gr * 10" },

    // --- PİKNİK GRUBU (45 Adet) ---
    { kategori: "piknik", gorsel: "img/sutas-cam-bali-20-gr-36.webp", isim: "Sütaş Çam Balı 20 Gr * 36" },
    { kategori: "piknik", gorsel: "img/sutas-recel-cilek-piknik-20-gr-36.webp", isim: "Sütaş Reçel Çilek Piknik 20 Gr * 36" },
    { kategori: "piknik", gorsel: "img/sutas-tereyag-piknik-15-gr-48.webp", isim: "Sütaş Tereyağ Piknik 15 Gr * 48" },
    { kategori: "piknik", gorsel: "img/icim-taze-peynir-piknik-20-gr-128.webp", isim: "İçim Taze Peynir Piknik 20 Gr * 128" },
    { kategori: "piknik", gorsel: "img/icim-labne-peynir-piknik-20-gr-128.webp", isim: "İçim Labne Peynir Piknik 20 Gr * 128" },
    { kategori: "piknik", gorsel: "img/icim-tereyag-piknik-20-gr-128.webp", isim: "İçim Tereyağ Piknik 20 Gr * 128" },
    { kategori: "piknik", gorsel: "img/icim-recel-cilek-piknik-20-gr-96.webp", isim: "İçim Reçel Çilek Piknik 20 Gr * 96" },
    { kategori: "piknik", gorsel: "img/icim-recel-visne-piknik-20-gr-96.webp", isim: "İçim Reçel Vişne Piknik 20 Gr * 96" },
    { kategori: "piknik", gorsel: "img/icim-bal-piknik-20-gr-96.webp", isim: "İçim Bal Piknik 20 Gr * 96" },
    { kategori: "piknik", gorsel: "img/seyidoglu-recel-visne-piknik-200-gr-18.webp", isim: "Seyidoğlu Reçel Vişne Piknik 200 Gr * 18" },
    { kategori: "piknik", gorsel: "img/seyidoglu-recel-visne-piknik-100-gr-36.webp", isim: "Seyidoğlu Reçel Vişne Piknik 100 Gr * 36" },
    { kategori: "piknik", gorsel: "img/seyidoglu-recel-karma-piknik-200-gr-18.webp", isim: "Seyidoğlu Reçel Karma Piknik 200 Gr * 18" },
    { kategori: "piknik", gorsel: "img/seyidoglu-recel-karma-piknik-100-gr-36.webp", isim: "Seyidoğlu Reçel Karma Piknik 100 Gr * 36" },
    { kategori: "piknik", gorsel: "img/seyidoglu-recel-cilek-piknik-200-gr-18.webp", isim: "Seyidoğlu Reçel Çilek Piknik 200 Gr * 18" },
    { kategori: "piknik", gorsel: "img/seyidoglu-recel-cilek-piknik-100-gr-36.webp", isim: "Seyidoğlu Reçel Çilek Piknik 100 Gr * 36" },
    { kategori: "piknik", gorsel: "img/koska-piknik-visne-receli-20-gr-100.webp", isim: "Koska Piknik Vişne Reçeli 20 Gr * 100" },
    { kategori: "piknik", gorsel: "img/koska-piknik-cilek-receli-20-gr-100.webp", isim: "Koska Piknik Çilek Reçeli 20 Gr * 100" },
    { kategori: "piknik", gorsel: "img/seyidoglu-piknik-kakaolu-findik-krema-15-gr-100.webp", isim: "Seyidoğlu Piknik Kakaolu Fındık Krema 15 Gr * 100" },
    { kategori: "piknik", gorsel: "img/seyidoglu-piknik-cam-bali-15-gr-100.webp", isim: "Seyidoğlu Piknik Çam Balı 15 Gr * 100" },
    { kategori: "piknik", gorsel: "img/koska-piknik-cam-bali-20-gr-100.webp", isim: "Koska Piknik Çam Balı 20 Gr * 100" },
    { kategori: "piknik", gorsel: "img/koska-piknik-cikos-cokokrem-15-gr-100.webp", isim: "Koska Piknik Çikos Çokokrem 15 Gr * 100" },
    { kategori: "piknik", gorsel: "img/koska-helva-sade-piknik-20-gr-25.webp", isim: "Koska Helva Sade Piknik 20 Gr * 25" },
    { kategori: "piknik", gorsel: "img/seyidoglu-recel-piknik-cilek-20-gr-100.webp", isim: "Seyidoğlu Reçel Piknik Çilek 20 Gr * 100" },
    { kategori: "piknik", gorsel: "img/seyidoglu-recel-piknik-visne-20-gr-100.webp", isim: "Seyidoğlu Reçel Piknik Vişne 20 Gr * 100" },
    { kategori: "piknik", gorsel: "img/seyidoglu-recel-piknik-kayisi-20-gr-100.webp", isim: "Seyidoğlu Reçel Piknik Kayısı 20 Gr * 100" },
    { kategori: "piknik", gorsel: "img/koska-piknik-tereyag-10-gr-100.webp", isim: "Koska Piknik Tereyağ 10 Gr * 100" },
    { kategori: "piknik", gorsel: "img/seyidoglu-piknik-tereyag-10-gr-100.webp", isim: "Seyidoğlu Piknik Tereyağ 10 Gr * 100" },
    { kategori: "piknik", gorsel: "img/pinar-tereyag-piknik-10-gr-192.webp", isim: "Pınar Tereyağ Piknik 10 Gr * 192" },
    { kategori: "piknik", gorsel: "img/teksut-piknik-tereyag-10-gr-100.webp", isim: "Teksüt Piknik Tereyağ 10 Gr * 100" },
    { kategori: "piknik", gorsel: "img/koska-piknik-tahin-pekmez-20-gr-100.webp", isim: "Koska Piknik Tahin-Pekmez 20 Gr * 100" },
    { kategori: "piknik", gorsel: "img/seyidoglu-tahinli-pekmez-piknik-20-gr-100.webp", isim: "Seyidoğlu Tahinli Pekmez Piknik 20 Gr * 100" },
    { kategori: "piknik", gorsel: "img/pinar-beyaz-piknik-20-gr-120.webp", isim: "Pınar Beyaz Piknik 20 Gr * 120" },
    { kategori: "piknik", gorsel: "img/teksut-krem-peynir-piknik.webp", isim: "Teksüt Krem Peynir Piknik" },
    { kategori: "piknik", gorsel: "img/karper-peynir-18li-multipack-12.webp", isim: "Karper Peynir 18'li Multipack * 12" },
    { kategori: "piknik", gorsel: "img/karper-peynir-8li-100-gr-24.webp", isim: "Karper Peynir 8'li 100 Gr * 24" },
    { kategori: "piknik", gorsel: "img/karper-peynir-16li-ekonomik-200-gr-12.webp", isim: "Karper Peynir 16'lı Ekonomik 200 Gr * 12" },
    { kategori: "piknik", gorsel: "img/heinz-barbeku-sos-bbq-hp-klasik-465-gr-8.webp", isim: "Heinz Barbekü Sos Bbq Hp Klasik 465 Gr * 8" },
    { kategori: "piknik", gorsel: "img/heinz-hardal-mild-445-gr-10.webp", isim: "Heinz Hardal Mild 445 Gr * 10" },
    { kategori: "piknik", gorsel: "img/heinz-ketcap-acili-460-gr-10.webp", isim: "Heinz Ketçap Acılı 460 Gr * 10" },
    { kategori: "piknik", gorsel: "img/heinz-ketcap-tatli-460-gr-10.webp", isim: "Heinz Ketçap Tatlı 460 Gr * 10" },
    { kategori: "piknik", gorsel: "img/heinz-mayonez-400-gr-12.webp", isim: "Heinz Mayonez 400 Gr * 12" },
    { kategori: "piknik", gorsel: "img/heinz-sos-aci-biberli-hot-chilli-245-gr-8.webp", isim: "Heinz Sos Acı Biberli (Hot Chilli) 245 Gr * 8" },
    { kategori: "piknik", gorsel: "img/calve-ranch-sos-245-gr-12.webp", isim: "Calve Ranch Sos 245 Gr * 12" },
    { kategori: "piknik", gorsel: "img/tukas-ketcap-kova-9-kg.webp", isim: "Tukaş Ketçap Kova 9 Kg" },
    { kategori: "piknik", gorsel: "img/tukas-mayonez-kova-8-kg.webp", isim: "Tukaş Mayonez Kova 8 Kg" },

    // --- YOĞURT GRUBU (3 Adet) ---
    { kategori: "yogurt", gorsel: "img/gursut-yogurt-suzme-10-kg.webp", isim: "Gürsüt Yoğurt Süzme 10 Kg" },
    { kategori: "yogurt", gorsel: "img/teksut-suzme-yogurt-9-kg.webp", isim: "Teksüt Süzme Yoğurt 9 Kg" },
    { kategori: "yogurt", gorsel: "img/ozpey-suzme-yogurt-kova-5-kg.webp", isim: "Özpey Süzme Yoğurt Kova 5 Kg" },

    // --- AMBALAJ - KAĞIT GRUBU - GIDA DIŞI ÜRÜNLER (19 Adet) ---
    { kategori: "ambalaj", gorsel: "img/focus-havlu-24lu.webp", isim: "Focus Havlu 24'lü" },
    { kategori: "ambalaj", gorsel: "img/focus-tuvalet-kagidi-48li.webp", isim: "Focus Tuvalet Kağıdı 48'li" },
    { kategori: "ambalaj", gorsel: "img/icten-cekmeli-havlu-6li-2-5-kg.webp", isim: "İçten Çekmeli Havlu 6'lı 2,5 Kg" },
    { kategori: "ambalaj", gorsel: "img/hareketli-havlu-6li-2-5-kg.webp", isim: "Hareketli Havlu 6'lı 2,5 Kg" },
    { kategori: "ambalaj", gorsel: "img/mini-jumbo-tuvalet-kagidi-6li-2-5-kg.webp", isim: "Mini Jumbo Tuvalet Kağıdı 6'lı 2,5 Kg" },
    { kategori: "ambalaj", gorsel: "img/z-havlu-pecete-100lu.webp", isim: "Z Havlu Peçete 100'lü" },
    { kategori: "ambalaj", gorsel: "img/dispanser-pecete-100lu.webp", isim: "Dispanser Peçete 100'lü" },
    { kategori: "ambalaj", gorsel: "img/mutfak-bezi-40-40.webp", isim: "Mutfak Bezi 40*40" },
    { kategori: "ambalaj", gorsel: "img/eldiven-beyaz-100lu-20.webp", isim: "Eldiven (Beyaz) 100'lü * 20" },
    { kategori: "ambalaj", gorsel: "img/eldiven-siyah-100lu-20.webp", isim: "Eldiven (Siyah) 100'lü * 20" },
    { kategori: "ambalaj", gorsel: "img/eldiven-mavi-100lu-20.webp", isim: "Eldiven (Mavi) 100'lü * 20" },
    { kategori: "ambalaj", gorsel: "img/eldiven-beyaz-pudrasiz-100lu-20.webp", isim: "Eldiven (Beyaz Pudrasız) 100'lü * 20" },
    { kategori: "ambalaj", gorsel: "img/karton-bardak-3000-adet.webp", isim: "Karton Bardak 3000 Adet" },
    { kategori: "ambalaj", gorsel: "img/strec-film-30-cm.webp", isim: "Streç Film (30 Cm)" },
    { kategori: "ambalaj", gorsel: "img/strec-film-45-cm.webp", isim: "Streç Film (45 Cm)" },
    { kategori: "ambalaj", gorsel: "img/aluminyum-folyo-30-cm-2-kg.webp", isim: "Alüminyum Folyo (30 Cm) 2 Kg" },
    { kategori: "ambalaj", gorsel: "img/aluminyum-folyo-45-cm-2-kg.webp", isim: "Alüminyum Folyo (45 Cm) 2 Kg" },
    { kategori: "ambalaj", gorsel: "img/tahta-karistirici-a-kalite-500-adet.webp", isim: "Tahta Karıştırıcı A Kalite 500 Adet" },
    { kategori: "ambalaj", gorsel: "img/tahta-karistirici-b-kalite-500-adet.webp", isim: "Tahta Karıştırıcı B Kalite 500 Adet" },

    // --- MARGARİN GRUBU (5 Adet) ---
    { kategori: "margarin", gorsel: "img/birma-margarin-250-gr-48.webp", isim: "Birma Margarin 250 Gr * 48" },
    { kategori: "margarin", gorsel: "img/yayla-margarin-250-gr-48.webp", isim: "Yayla Margarin 250 Gr * 48" },
    { kategori: "margarin", gorsel: "img/bizim-margarin-250-gr-48.webp", isim: "Bizim Margarin 250 Gr * 48" },
    { kategori: "margarin", gorsel: "img/terem-margarin-250-gr-48.webp", isim: "Terem Margarin 250 Gr * 48" },
    { kategori: "margarin", gorsel: "img/sana-margarin-250-gr-24.webp", isim: "Sana Margarin 250 Gr * 24" },

    // --- BAKLIYAT GRUBU (48 Adet) ---
    { kategori: "bakliyat", gorsel: "img/yesil-mersin-gonen-baldo-25-kg.webp", isim: "Yeşil Mersin Gönen Baldo 25 Kg" },
    { kategori: "bakliyat", gorsel: "img/yesil-mersin-trakya-baldo-25-kg.webp", isim: "Yeşil Mersin Trakya Baldo 25 Kg" },
    { kategori: "bakliyat", gorsel: "img/yesil-mersin-osmancik-pirinc-25-kg.webp", isim: "Yeşil Mersin Osmancık Pirinç 25 Kg" },
    { kategori: "bakliyat", gorsel: "img/yesil-mersin-kirik-pirinc-25-kg.webp", isim: "Yeşil Mersin Kırık Pirinç 25 Kg" },
    { kategori: "bakliyat", gorsel: "img/yesil-mersin-iri-bulgur-25-kg.webp", isim: "Yeşil Mersin İri Bulgur 25 Kg" },
    { kategori: "bakliyat", gorsel: "img/yesil-mersin-orta-bulgur-25-kg.webp", isim: "Yeşil Mersin Orta Bulgur 25 Kg" },
    { kategori: "bakliyat", gorsel: "img/yesil-mersin-koftelik-bulgur-25-kg.webp", isim: "Yeşil Mersin Köftelik Bulgur 25 Kg" },
    { kategori: "bakliyat", gorsel: "img/yesil-mersin-kirmizi-mercimek-futbol-25-kg.webp", isim: "Yeşil Mersin Kırmızı Mercimek Futbol 25 Kg" },
    { kategori: "bakliyat", gorsel: "img/yesil-mersin-yesil-mercimek-25-kg.webp", isim: "Yeşil Mersin Yeşil Mercimek 25 Kg" },
    { kategori: "bakliyat", gorsel: "img/yesil-mersin-sira-fasulye-25-kg.webp", isim: "Yeşil Mersin Sıra Fasulye 25 Kg" },
    { kategori: "bakliyat", gorsel: "img/yesil-mersin-dermason-fasulye-25-kg.webp", isim: "Yeşil Mersin Dermason Fasulye 25 Kg" },
    { kategori: "bakliyat", gorsel: "img/yesil-mersin-8-mm-nohut-25-kg.webp", isim: "Yeşil Mersin 8 Mm Nohut 25 Kg" },
    { kategori: "bakliyat", gorsel: "img/yesil-mersin-10-mm-nohut-25-kg.webp", isim: "Yeşil Mersin 10 Mm Nohut 25 Kg" },
    { kategori: "bakliyat", gorsel: "img/yesil-mersin-asurelik-bugday-25-kg.webp", isim: "Yeşil Mersin Aşurelik Buğday 25 Kg" },
    { kategori: "bakliyat", gorsel: "img/yesil-mersin-patlayan-misir-25-kg.webp", isim: "Yeşil Mersin Patlayan Mısır 25 Kg" },
    { kategori: "bakliyat", gorsel: "img/yesil-mersin-2-5-kg-6-asurelik-bugday.webp", isim: "Yeşil Mersin 2,5 Kg * 6 Aşurelik Buğday" },
    { kategori: "bakliyat", gorsel: "img/yesil-mersin-2-5-kg-6-nohut-10-mm.webp", isim: "Yeşil Mersin 2,5 Kg * 6 Nohut 10 Mm" },
    { kategori: "bakliyat", gorsel: "img/yesil-mersin-2-5-kg-6-nohut-8-mm.webp", isim: "Yeşil Mersin 2,5 Kg * 6 Nohut 8 Mm" },
    { kategori: "bakliyat", gorsel: "img/yesil-mersin-2-5-kg-6-dermason-fasulye.webp", isim: "Yeşil Mersin 2,5 Kg * 6 Dermason Fasulye" },
    { kategori: "bakliyat", gorsel: "img/yesil-mersin-2-5-kg-6-sira-fasulye.webp", isim: "Yeşil Mersin 2,5 Kg * 6 Sıra Fasulye" },
    { kategori: "bakliyat", gorsel: "img/yesil-mersin-2-5-kg-6-yesil-mercimek.webp", isim: "Yeşil Mersin 2,5 Kg * 6 Yeşil Mercimek" },
    { kategori: "bakliyat", gorsel: "img/yesil-mersin-2-5-kg-6-kirmizi-mercimek-futbol.webp", isim: "Yeşil Mersin 2,5 Kg * 6 Kırmızı Mercimek Futbol" },
    { kategori: "bakliyat", gorsel: "img/yesil-mersin-2-5-kg-6-koftelik-bulgur.webp", isim: "Yeşil Mersin 2,5 Kg * 6 Köftelik Bulgur" },
    { kategori: "bakliyat", gorsel: "img/yesil-mersin-2-5-kg-6-orta-bulgur.webp", isim: "Yeşil Mersin 2,5 Kg * 6 Orta Bulgur" },
    { kategori: "bakliyat", gorsel: "img/yesil-mersin-2-5-kg-6-iri-bulgur.webp", isim: "Yeşil Mersin 2,5 Kg * 6 İri Bulgur" },
    { kategori: "bakliyat", gorsel: "img/yesil-mersin-2-5-kg-6-kirik-pirinc.webp", isim: "Yeşil Mersin 2,5 Kg * 6 Kırık Pirinç" },
    { kategori: "bakliyat", gorsel: "img/yesil-mersin-2-5-kg-6-osmancik.webp", isim: "Yeşil Mersin 2,5 Kg * 6 Osmancık" },
    { kategori: "bakliyat", gorsel: "img/yesil-mersin-2-5-kg-6-trakya-baldo.webp", isim: "Yeşil Mersin 2,5 Kg * 6 Trakya Baldo" },
    { kategori: "bakliyat", gorsel: "img/yesil-mersin-2-5-kg-6-gonen-baldo.webp", isim: "Yeşil Mersin 2,5 Kg * 6 Gönen Baldo" },
    { kategori: "bakliyat", gorsel: "img/filiz-makarna-tel-sehriye-5-kg.webp", isim: "Filiz Makarna Tel Şehriye 5 Kg" },
    { kategori: "bakliyat", gorsel: "img/filiz-makarna-arpa-sehriye-5-kg.webp", isim: "Filiz Makarna Arpa Şehriye 5 Kg" },
    { kategori: "bakliyat", gorsel: "img/olida-baldo-pirinc-5-kg.webp", isim: "Olida Baldo Pirinç 5 Kg" },
    { kategori: "bakliyat", gorsel: "img/olida-osmancik-pirinc-5-kg.webp", isim: "Olida Osmancık Pirinç 5 Kg" },
    { kategori: "bakliyat", gorsel: "img/olida-bulgur-5-kg.webp", isim: "Olida Bulgur 5 Kg" },
    { kategori: "bakliyat", gorsel: "img/olida-mercimek-5-kg.webp", isim: "Olida Mercimek 5 Kg" },
    { kategori: "bakliyat", gorsel: "img/olida-yesil-mercimek-5-kg.webp", isim: "Olida Yeşil Mercimek 5 Kg" },
    { kategori: "bakliyat", gorsel: "img/olida-fasulye-konya-5-kg.webp", isim: "Olida Fasulye Konya 5 Kg" },
    { kategori: "bakliyat", gorsel: "img/olida-beyaz-ithal-nohut-5-kg.webp", isim: "Olida Beyaz İthal Nohut 5 Kg" },
    { kategori: "bakliyat", gorsel: "img/kalyon-baldo-pirinc-25-kg.webp", isim: "Kalyon Baldo Pirinç 25 Kg" },
    { kategori: "bakliyat", gorsel: "img/zeki-osmancik-pirinc-25-kg.webp", isim: "Zeki Osmancık Pirinç 25 Kg" },
    { kategori: "bakliyat", gorsel: "img/ozsari-bulgur-25-kg.webp", isim: "Özsarı Bulgur 25 Kg" },
    { kategori: "bakliyat", gorsel: "img/ithal-kirmizi-mercimek-25-kg.webp", isim: "İthal Kırmızı Mercimek 25 Kg" },
    { kategori: "bakliyat", gorsel: "img/yerli-kirmizi-mercimek-25-kg.webp", isim: "Yerli Kırmızı Mercimek 25 Kg" },
    { kategori: "bakliyat", gorsel: "img/yesil-mercimek-25-kg.webp", isim: "Yeşil Mercimek 25 Kg" },
    { kategori: "bakliyat", gorsel: "img/yerli-konya-fasulye-8-mm-25-kg.webp", isim: "Yerli Konya Fasulye 8 Mm 25 Kg" },
    { kategori: "bakliyat", gorsel: "img/ithal-fasulye-9-mm-25-kg.webp", isim: "İthal Fasulye 9 Mm 25 Kg" },
    { kategori: "bakliyat", gorsel: "img/beyaz-nohut-meksika-12-mm-25-kg.webp", isim: "Beyaz Nohut Meksika 12 Mm 25 Kg" },
    { kategori: "bakliyat", gorsel: "img/nohut-9-mm-25-kg.webp", isim: "Nohut 9 Mm 25 Kg" },

    // --- YAĞ GRUBU (7 Adet) ---
    { kategori: "yag", gorsel: "img/bizim-kizartma-yagi-18-l.webp", isim: "Bizim Kızartma Yağı 18 L" },
    { kategori: "yag", gorsel: "img/komili-aycicek-yagi-18-l-teneke.webp", isim: "Komili Ayçiçek Yağı 18 L Teneke" },
    { kategori: "yag", gorsel: "img/yudum-aycicek-yagi-5-l-pet.webp", isim: "Yudum Ayçiçek Yağı 5 L Pet" },
    { kategori: "yag", gorsel: "img/biryag-aycicek-yagi-5-l-pet.webp", isim: "Biryağ Ayçiçek Yağı 5 L Pet" },
    { kategori: "yag", gorsel: "img/komili-sizma-zeytinyagi-5-l-teneke.webp", isim: "Komili Sızma Zeytinyağı 5 L Teneke" },
    { kategori: "yag", gorsel: "img/taris-riviera-zeytinyagi-5-l-pet.webp", isim: "Tariş Riviera Zeytinyağı 5 L Pet" },
    { kategori: "yag", gorsel: "img/kirlangic-riviera-zeytinyagi-5-l-pet.webp", isim: "Kırlangıç Riviera Zeytinyağı 5 L Pet" },

    // --- YUMURTA ÇEŞİTLERİ (4 Çeşit) ---
    { kategori: "yumurta", gorsel: "img/yumurta-m-boy-30lu-koli.webp", isim: "Yumurta M Boy 30'lu Koli" },
    { kategori: "yumurta", gorsel: "img/yumurta-l-boy-30lu-koli.webp", isim: "Yumurta L Boy 30'lu Koli" },
    { kategori: "yumurta", gorsel: "img/yumurta-xl-boy-30lu-koli.webp", isim: "Yumurta XL Boy 30'lu Koli" },
    { kategori: "yumurta", gorsel: "img/koy-yumurtasi-30lu-koli.webp", isim: "Köy Yumurtası 30'lu Koli" }
];

const container = document.getElementById('product-container');
const categoryTitle = document.getElementById('category-title');
const productCountBadge = document.getElementById('product-count');

// Aynı kategori ve isimdeki mükerrer ürünleri temizler (Benzersiz Çeşit Listesi)
function getUniqueProducts(list) {
    const seen = new Set();
    return list.filter(urun => {
        const key = `${urun.kategori}_${urun.isim.trim().toLowerCase()}`;
        if (seen.has(key)) {
            return false;
        }
        seen.add(key);
        return true;
    });
}

function renderProducts(list) {
    if (!container) return;
    container.innerHTML = ""; 

    // Çeşitleri benzersizleştir
    let processedList = getUniqueProducts(list);

    const sortSelect = document.getElementById('sortSelect');
    const sortValue = sortSelect ? sortSelect.value : 'default';

    if (sortValue === 'az') {
        processedList.sort((a, b) => a.isim.localeCompare(b.isim, 'tr', { sensitivity: 'base' }));
    } else if (sortValue === 'za') {
        processedList.sort((a, b) => b.isim.localeCompare(a.isim, 'tr', { sensitivity: 'base' }));
    }

    processedList.forEach((urun, index) => {
        const productHTML = `
            <div class="product-card" data-category="${urun.kategori}">
                <div class="product-img-wrapper">
                    <img src="${urun.gorsel}" alt="Ürün Fotoğrafı" class="product-img">
                </div>
                <div class="product-info">
                    <h4 class="product-title">${urun.isim}</h4>
                    <div class="product-actions">
                        <button class="add-to-cart-btn" type="button" onclick="addSpecificToCart(${index})">Sepete Ekle</button>
                    </div>
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', productHTML);
    });

    if(productCountBadge) {
        productCountBadge.innerText = `${processedList.length} Ürün`;
    }
}

// Ürünü ve seçilen adeti sepete ekleme
window.addSpecificToCart = function(index) {
    const sortSelect = document.getElementById('sortSelect');
    const sortValue = sortSelect ? sortSelect.value : 'default';
    const searchInput = document.getElementById('searchInput');
    const searchText = searchInput ? searchInput.value.toLowerCase() : "";
    const activeCategoryLink = document.querySelector('.filter-category-list a.active');
    const currentCategory = activeCategoryLink ? activeCategoryLink.getAttribute('data-target') : 'all';

    let filtered = urunler.filter(urun => {
        const matchCategory = currentCategory === 'all' || urun.kategori === currentCategory;
        const matchSearch = urun.isim.toLowerCase().includes(searchText);
        return matchCategory && matchSearch;
    });

    // Filtrelenmiş ve benzersizleştirilmiş listeden ürünü seç
    filtered = getUniqueProducts(filtered);

    if (sortValue === 'az') {
        filtered.sort((a, b) => a.isim.localeCompare(b.isim, 'tr', { sensitivity: 'base' }));
    } else if (sortValue === 'za') {
        filtered.sort((a, b) => b.isim.localeCompare(a.isim, 'tr', { sensitivity: 'base' }));
    }

    const urun = filtered[index];
    const quantity = 1;

    if (!urun) return;

    let cart = JSON.parse(localStorage.getItem('orekaCart')) || [];
    let existingIndex = cart.findIndex(item => item.name === urun.isim);

    if (existingIndex !== -1) {
        cart[existingIndex].quantity = parseInt(cart[existingIndex].quantity || 1) + 1;
    } else {
        cart.push({
            name: urun.isim,
            category: urun.kategori,
            image: urun.gorsel || 'orekalogo.png',
            description: 'Oreka marka kaliteli ürün.',
            quantity: quantity
        });
    }

    localStorage.setItem('orekaCart', JSON.stringify(cart));
    if (typeof updateNavBadge === 'function') {
        updateNavBadge();
    }

    // Modal Göster
    showCartModal(urun.isim, quantity);
};

function showCartModal(productName, qty) {
    const overlay = document.getElementById('cartModalOverlay');
    const textEl = document.getElementById('modalProductText');
    if (textEl) {
        textEl.innerHTML = `<strong>"${productName}"</strong> teklif sepetinize başarıyla eklendi.`;
    }
    if (overlay) {
        overlay.classList.add('active');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (container) {
        renderProducts(urunler);
        setupFilters();
    }

    const modalContinueBtn = document.getElementById('modalContinueBtn');
    const overlay = document.getElementById('cartModalOverlay');
    if (modalContinueBtn && overlay) {
        modalContinueBtn.addEventListener('click', () => {
            overlay.classList.remove('active');
        });
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.classList.remove('active');
            }
        });
    }
});

function setupFilters() {
    const searchInput = document.getElementById('searchInput');
    const categoryLinks = document.querySelectorAll('.filter-category-list a');
    const sortSelect = document.getElementById('sortSelect');
    let currentCategory = 'all';

    function filterData() {
        const searchText = searchInput ? searchInput.value.toLowerCase() : "";
        const filteredList = urunler.filter(urun => {
            const matchCategory = currentCategory === 'all' || urun.kategori === currentCategory;
            const matchSearch = urun.isim.toLowerCase().includes(searchText);
            return matchCategory && matchSearch;
        });
        renderProducts(filteredList);
    }

    if (searchInput) {
        searchInput.addEventListener('input', filterData);
    }

    if (sortSelect) {
        sortSelect.addEventListener('change', filterData);
    }

    categoryLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            categoryLinks.forEach(l => l.classList.remove('active'));
            e.target.classList.add('active');
            
            currentCategory = e.target.getAttribute('data-target');
            if(categoryTitle) categoryTitle.innerText = e.target.innerText;
            
            filterData();
        });
    });
}
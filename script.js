document.querySelectorAll(".footer [data-year]").forEach((node) => {
  node.textContent = new Date().getFullYear();
});

const I18N_STORAGE_KEY = "cbk_site_lang";
const SUPPORTED_LANGS = ["en", "tr"];
const KEY_DEFAULTS = new Map();

const pageHeadTranslations = {
  "/": {
    en: {
      title: "Can B. Kalayci, Ph.D.",
      description: "Academic homepage of Can B. Kalayci, Professor of Operations Research and Artificial Intelligence."
    },
    tr: {
      title: "Can B. Kalayci, Ph.D.",
      description: "Yöneylem Araştırması ve Yapay Zeka Profesörü Can B. Kalayci'nin akademik web sitesi."
    }
  },
  "/cv/": {
    en: {
      title: "CV | Can B. Kalayci",
      description: "Curriculum vitae of Can B. Kalayci."
    },
    tr: {
      title: "Özgeçmiş | Can B. Kalayci",
      description: "Can B. Kalayci'nin özgeçmişi."
    }
  },
  "/research/": {
    en: {
      title: "Research | Can B. Kalayci",
      description: "Research interests and selected publications of Can B. Kalayci."
    },
    tr: {
      title: "Araştırma | Can B. Kalayci",
      description: "Can B. Kalayci'nin araştırma alanları ve seçili yayınları."
    }
  },
  "/publications/": {
    en: {
      title: "Publications | Can B. Kalayci",
      description: "Complete publications list of Can B. Kalayci."
    },
    tr: {
      title: "Yayınlar | Can B. Kalayci",
      description: "Can B. Kalayci'nin tam yayın listesi."
    }
  },
  "/teaching/": {
    en: {
      title: "Teaching | Can B. Kalayci",
      description: "Teaching and supervision activities of Can B. Kalayci."
    },
    tr: {
      title: "Eğitim | Can B. Kalayci",
      description: "Can B. Kalayci'nin öğretim ve danışmanlık faaliyetleri."
    }
  },
  "/projects/": {
    en: {
      title: "Projects | Can B. Kalayci",
      description: "Academic projects and practical applications led by Can B. Kalayci."
    },
    tr: {
      title: "Projeler | Can B. Kalayci",
      description: "Can B. Kalayci tarafından yürütülen akademik projeler ve uygulamalar."
    }
  },
  "/experience/": {
    en: {
      title: "Experience | Can B. Kalayci",
      description: "Academic and professional experience of Can B. Kalayci."
    },
    tr: {
      title: "Deneyim | Can B. Kalayci",
      description: "Can B. Kalayci'nin akademik ve profesyonel deneyimi."
    }
  },
  "/service/": {
    en: {
      title: "Service & Awards | Can B. Kalayci",
      description: "Academic service, editorial activities, and awards of Can B. Kalayci."
    },
    tr: {
      title: "Hizmet ve Ödüller | Can B. Kalayci",
      description: "Can B. Kalayci'nin akademik hizmet, editörlük faaliyetleri ve ödülleri."
    }
  }
};

const trKeyTranslations = {
  "shared.role": "Yöneylem Araştırması ve Yapay Zeka Profesörü",
  "shared.photoAlt": "Can B. Kalayci portresi",
  "shared.topNavAria": "Ana gezinme",
  "home.subtitle": "Yöneylem Araştırması ve Yapay Zeka Profesörü",
  "home.address": `Endüstri Mühendisliği Bölümü,
          <a href="https://www.pau.edu.tr/" target="_blank" rel="noreferrer">
            Pamukkale Üniversitesi
          </a>
          <br />
          Kınıklı Kampüsü, 20160 Denizli, Türkiye`,
  "home.bio1": "Karmaşık karar sistemleri için optimizasyon ve yapay zeka yöntemleri üzerine çalışıyorum; özellikle rotalama, sürdürülebilir üretim, söküm hattı dengeleme ve kombinatoryal optimizasyona odaklanıyorum.",
  "home.bio2": "Güncel çalışmalarım hibrit metasezgiselleri, makine öğrenmesi destekli optimizasyonu ve endüstri mühendisliği uygulamaları için sürdürülebilirlik odaklı modellemeyi kapsamaktadır.",
  "home.quickLinksHeading": "Hızlı Bağlantılar",
  "home.quickLinksList": `<li>
            <a href="/cv/">Özgeçmiş (Web Sürümü)</a>
          </li>
          <li>
            <a href="/research/">Araştırma alanları ve seçili yayınlar</a>
          </li>
          <li>
            <a href="/publications/">Tam yayın listesi</a>
          </li>
          <li>
            <a href="/teaching/">Dersler ve danışmanlıklar</a>
          </li>
          <li>
            <a href="/projects/">Akademik projeler ve uygulamalar</a>
          </li>
          <li>
            <a href="/experience/">Akademik ve profesyonel deneyim</a>
          </li>
          <li>
            <a href="/service/">Akademik hizmetler, editörlük ve ödüller</a>
          </li>`,
  "cv.title": "Özgeçmiş",
  "cv.subtitle": "Kapsamlı akademik profil",
  "cv.researchHeading": "Araştırma Alanları",
  "cv.researchList": `<li>
            <strong>Optimizasyon ve Yapay Zeka Algoritmalarının Tasarımı ve Analizi:</strong>
            metasezgiseller, makine öğrenmesi destekli optimizasyon ve hibrit yöntemler.
          </li>
          <li>
            <strong>Uygulama Alanları:</strong> araç rotalama, çizelgeleme, söküm hattı dengeleme
            ve portföy optimizasyonu.
          </li>
          <li>
            <strong>Sürdürülebilirlik:</strong> çevresel açıdan duyarlı modelleme ve döngüsel
            üretim sistemleri.
          </li>`,
  "cv.educationHeading": "Eğitim",
  "cv.educationList": `<li>
            <strong>Northeastern University</strong>, Boston, MA, ABD (2008-2012)<br />
            Endüstri Mühendisliğinde Doktora<br />
            Tez:
            <em>Algorithms for Solving Sequence-Dependent Disassembly Line Balancing Problems</em><br />
            Danışman: Prof. Surendra M. Gupta<br />
            Arşiv:
            <a
              href="https://repository.library.northeastern.edu/files/neu:1605"
              target="_blank"
              rel="noreferrer"
            >
              Northeastern University Arşivi
            </a>
          </li>
          <li>
            <strong>Pamukkale University</strong>, Denizli, Türkiye (2005-2008)<br />
            Endüstri Mühendisliğinde Yüksek Lisans<br />
            Tez:
            <em>
              A Student Success-Oriented Examination Timetabling Model and Its Software
              Implementation
            </em><br />
            Danışman: Prof. Askiner Gungor
          </li>
          <li>
            <strong>Sakarya University</strong>, Sakarya, Türkiye (2001-2005)<br />
            Bilgisayar Mühendisliğinde Lisans, Yüksek Onur Derecesiyle Mezuniyet
          </li>`,
  "cv.skillsHeading": "Teknik Beceriler",
  "cv.skillsList": `<li><strong>Programlama:</strong> Python, MATLAB, C/C++, Julia</li>
          <li><strong>Optimizasyon:</strong> Gurobi, IBM CPLEX</li>
          <li><strong>Veri Analizi ve Makine Öğrenmesi:</strong> pandas, NumPy, Scikit-learn</li>
          <li><strong>Bilimsel Yazım:</strong> LaTeX, Overleaf</li>`,
  "cv.languagesHeading": "Yabancı Diller",
  "cv.languagesList": `<li><strong>İngilizce:</strong> C1-C2 (Yetkin)</li>
          <li><strong>Türkçe:</strong> Anadili (C2)</li>`,
  "research.title": "Araştırma",
  "research.interestsHeading": "Araştırma Alanları",
  "research.interestsList": `<li>
            <strong>Yöntemsel:</strong> metasezgiseller, kombinatoryal optimizasyon,
            makine öğrenmesi destekli optimizasyon ve kuantumdan ilham alan yaklaşımlar.
          </li>
          <li>
            <strong>Uygulama alanları:</strong> çok bölmeli araç rotalama, elektrikli araç
            rotalama, söküm hattı dengeleme, çizelgeleme ve portföy optimizasyonu.
          </li>
          <li>
            <strong>Sürdürülebilirlik:</strong> döngüsel üretim sistemleri ve çevresel açıdan
            duyarlı karar modelleri.
          </li>`,
  "research.selectedHeading": "Seçili Dergi Yayınları",
  "publications.title": "Yayınlar",
  "publications.filtersAria": "Yayın filtreleri",
  "teaching.title": "Eğitim",
  "teaching.coursesHeading": "Dersler",
  "teaching.coursesList": `<li>ENM 543 - Endüstri Mühendisliğinde Yapay Zeka Yöntemleri</li>
          <li>IENG 435 - Problem Çözmede Sezgisel Yöntemler</li>
          <li>CENG 280 - Programlamanın Temelleri ve Algoritma Tasarımı</li>
          <li>CENG 191 - Programlamaya Giriş</li>
          <li>CENG 110 - Orta Düzey Programlama</li>
          <li>ENM 555 - MATLAB ve Uygulamaları</li>
          <li>IENG 473 - Portföy Optimizasyonu</li>
          <li>ENM 503 - İstatistiksel Deney Tasarımı</li>
          <li>IENG 217 - Olasılık ve İstatistik</li>
          <li>IENG 426 - Çevreye Duyarlı Üretim</li>
          <li>MUHY 578 - Yönetim Bilişim Sistemleri</li>
          <li>IENG 108 - Endüstri Mühendisliği Uygulamaları</li>
          <li>MUHF 401 - Mühendislikte Vaka Çalışmaları</li>`,
  "teaching.thesesHeading": "Yönetilen Tezler",
  "teaching.thesesList": `<li>
            Yusuf Yılmaz, Doktora (2023) - Birincil Danışman<br />
            <em>Elektrikli Araç Rotalama Problemlerinin Çözümü için Değişken Komşuluk Arama Algoritmaları.</em>
          </li>
          <li>
            Mehmet Anıl Akbay, Yüksek Lisans (2019) - Birincil Danışman<br />
            <em>
              Kardinalite Kısıtlı Portföy Optimizasyonu için Değişken Komşuluk Arama
              Algoritmasına Dayalı Bir Çözüm Yaklaşımı.
            </em>
          </li>
          <li>
            Umut Mete, Yüksek Lisans (2019) - Birincil Danışman<br />
            <em>Permütasyon Akış Tipi Çizelgeleme için Değişken Komşuluk Arama Yaklaşımı.</em>
          </li>
          <li>
            Sevcan Karagöz, Yüksek Lisans (2019) - Birincil Danışman<br />
            <em>Mikro Yapılı Magnezyum Alaşımının Yorulma Davranışlarının Sezgisel Algoritmalar Kullanılarak Belirlenmesi.</em>
          </li>
          <li>
            Ökkeş Ertenlice, Yüksek Lisans (2018) - Birincil Danışman<br />
            <em>Kardinalite Kısıtlı Portföy Optimizasyonu için Yapay Arı Kolonisi Algoritması Tabanlı Bir Çözüm Yaklaşımı.</em>
          </li>
          <li>
            Can Kaya, Yüksek Lisans (2017) - Birincil Danışman<br />
            <em>
              Eşzamanlı Toplama ve Dağıtım İçeren Araç Rotalama Problemi için Karınca
              Kolonisi Sistemi Destekli Değişken Komşuluk Arama Algoritması.
            </em>
          </li>
          <li>
            Hasan Akyer, Doktora (2016) - Eş Danışman<br />
            <em>Optimum Portföy Yönetimi için Sezgisel Yaklaşımlar.</em>
          </li>`,
  "projects.title": "Projeler",
  "projects.subtitle": "Destekli araştırma projeleri ve fonlar",
  "projects.heading": "Araştırma Projeleri",
  "projects.list": `<li>
            <strong>Sürdürülebilir Kısmi Söküm Hattı Dengeleme Problemi için Yeni Modeller ve Çözüm Yaklaşımları</strong>
            (TÜBİTAK 1001 Projesi, Türkiye, 2024-Devam Ediyor). Yürütücü.
          </li>
          <li>
            <strong>Sürdürülebilir Şehir Lojistiği için Etkin Rotalama Algoritmalarının Geliştirilmesi</strong>
            (TÜBİTAK 1001 Projesi, Türkiye, 2019-2022). Yürütücü.
          </li>
          <li>
            <strong>Süt Toplama Problemi için Bütünleşik Bir Model ve Etkin Çözüm Yaklaşımlarının Geliştirilmesi</strong>
            (TÜBİTAK 3501 Projesi, Türkiye, 2018-2020). Araştırmacı. Proje yürütücüsü: Dr. Olcay Polat.
          </li>
          <li>
            <strong>Mikro Yapılı Magnezyum Alaşımının Yorulma Davranışlarının Sezgisel Algoritmalar Kullanılarak Belirlenmesi</strong>
            (Pamukkale Üniversitesi BAP Projesi, Türkiye, 2018-2019). Yürütücü.
          </li>
          <li>
            <strong>Kardinalite Kısıtlı Portföy Optimizasyonu için Etkin Algoritmaların Tasarlanması</strong>
            (TÜBİTAK 3501 Projesi, Türkiye, 2015-2017). Yürütücü.
          </li>
          <li>
            <strong>Araç Rotalama Problemleri için Model ve Çözüm Yaklaşımlarının Geliştirilmesi</strong>
            (Pamukkale Üniversitesi BAP Projesi, Türkiye, 2015-2016). Yürütücü.
          </li>
          <li>
            <strong>Besleyici Konteyner Gemisi Rotalama Problemi için Çözüm Yaklaşımları</strong>
            (Pamukkale Üniversitesi BAP Projesi, Türkiye, 2014-2015). Araştırmacı. Proje yürütücüsü: Dr. Olcay Polat.
          </li>
          <li>
            <strong>Zaman Kısıtları Altında Eşzamanlı Toplama ve Dağıtım İçeren Araç Rotalama Problemlerinin Metasezgisel Yöntemlerle Çözümü</strong>
            (Pamukkale Üniversitesi BAP Projesi, Türkiye, 2014-2015). Yürütücü.
          </li>`,
  "experience.title": "Deneyim",
  "experience.subtitle": "Akademik ve profesyonel roller",
  "experience.list": `<li>
            <strong>Dekan Yardımcısı</strong>, Mühendislik Fakültesi, Pamukkale University,
            Denizli, Türkiye (2021-2022). Akademik planlama ve kalite güvence süreçlerini
            yürüttü, disiplinler arası iş birliği girişimlerini koordine etti.
          </li>
          <li>
            <strong>Araştırma Danışmanı</strong>, Zapata Computing, Inc., Boston, MA
            (2021-2022). Kuantumdan ilham alan kombinatoryal optimizasyon ve
            metasezgisel yöntemlerin entegrasyonu alanlarında katkı sundu.
          </li>
          <li>
            <strong>Öğretim Asistanı</strong>, College of Engineering, Northeastern University,
            Boston, MA (2010-2011). Optimizasyon ve algoritma derslerini, laboratuvarları
            ve öğrenci projelerini destekledi.
          </li>
          <li>
            <strong>Araştırma Stajyeri</strong>, Cybernetics and AI Lab, Technical University of
            Košice, Slovakya (2003 Yaz Dönemi). Akıllı sistemler için yazılım bileşenleri
            geliştirdi.
          </li>`,
  "service.title": "Hizmet ve Ödüller",
  "service.subtitle": "Akademik hizmet, hakemlik ve ödüller",
  "service.serviceHeading": "Akademik Hizmetler",
  "service.serviceList": `<li>
            <strong>TÜBİTAK Proje Değerlendiricisi ve Panelisti</strong>,
            Endüstri Mühendisliği Bölümü, Pamukkale University (2015-Devam Ediyor).
            100'den fazla araştırma önerisinde panelist ve dış hakem olarak görev yaptı.
          </li>
          <li>
            <strong>Erasmus+ Bölüm Koordinatörü</strong>,
            Endüstri Mühendisliği Bölümü, Pamukkale University (2018-Devam Ediyor).
            Erasmus+ hareketlilik programları, ders eşdeğerliği ve danışmanlık süreçlerini yönetti.
          </li>`,
  "service.awardsHeading": "Burslar ve Ödüller",
  "service.awardsList": `<li>Dünyanın En Etkili %2 Bilim İnsanı listesinde yer alma (Stanford University / Elsevier), 2021-2024.</li>
          <li>Pamukkale University Yıllık Ödül Töreni Atıf Ödülü, 2019.</li>
          <li>MESS, İtalya Metaheuristics Competition, Bronz Madalya, 2018.</li>
          <li>Yükseköğretim Kurulu (YÖK) tam burslu doktora bursu, 2008-2012.</li>
          <li>Sakarya University, Yüksek Onur Derecesi ile Mezuniyet, 2005.</li>`,
  "service.reviewHeading": "Editörlük ve Hakemlik Faaliyetleri",
  "service.elsevierLabel": "Elsevier Dergileri",
  "service.springerLabel": "Springer Dergileri",
  "service.tfLabel": "Taylor & Francis Dergileri",
  "service.emeraldLabel": "Emerald Dergileri"
};

initLanguageToggle();
initPublicationFilters();

function initLanguageToggle() {
  const mastheadInner = document.querySelector(".masthead-inner");
  if (!mastheadInner) {
    return;
  }

  captureDefaultKeyContent();

  let lang = localStorage.getItem(I18N_STORAGE_KEY);
  if (!SUPPORTED_LANGS.includes(lang)) {
    lang = "en";
  }

  const switchNode = document.createElement("div");
  switchNode.className = "lang-switch";
  switchNode.setAttribute("aria-label", "Language switch");
  switchNode.innerHTML = `
    <button type="button" class="lang-btn" data-lang="en">EN</button>
    <button type="button" class="lang-btn" data-lang="tr">TR</button>
  `;
  mastheadInner.appendChild(switchNode);

  switchNode.querySelectorAll(".lang-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const selected = button.dataset.lang;
      applyLanguage(selected, switchNode);
      localStorage.setItem(I18N_STORAGE_KEY, selected);
    });
  });

  applyLanguage(lang, switchNode);
}

function captureDefaultKeyContent() {
  document.querySelectorAll("[data-i18n-key]").forEach((node) => {
    const key = node.dataset.i18nKey;
    if (!key || KEY_DEFAULTS.has(key)) {
      return;
    }
    KEY_DEFAULTS.set(key, readNodeValue(node));
  });
}

function readNodeValue(node) {
  const attrName = node.dataset.i18nAttr;
  if (attrName) {
    return node.getAttribute(attrName) || "";
  }
  if (node.dataset.i18nHtml === "true") {
    return node.innerHTML.trim();
  }
  return (node.textContent || "").trim();
}

function writeNodeValue(node, value) {
  const attrName = node.dataset.i18nAttr;
  if (attrName) {
    node.setAttribute(attrName, value);
    return;
  }
  if (node.dataset.i18nHtml === "true") {
    node.innerHTML = value;
    return;
  }
  node.textContent = value;
}

function applyLanguage(lang, switchNode) {
  document.documentElement.lang = lang;

  switchNode.querySelectorAll(".lang-btn").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === lang);
  });
  switchNode.setAttribute("aria-label", lang === "tr" ? "Dil seçimi" : "Language switch");

  applyKeyTranslations(lang);

  document.querySelectorAll("[data-i18n-en][data-i18n-tr]").forEach((node) => {
    const translated = lang === "tr" ? node.dataset.i18nTr : node.dataset.i18nEn;
    node.textContent = translated;
  });

  const path = normalizePath(window.location.pathname);
  applyHeadTranslations(path, lang);
  applyPublicationUiTranslations(lang);
}

function applyKeyTranslations(lang) {
  document.querySelectorAll("[data-i18n-key]").forEach((node) => {
    const key = node.dataset.i18nKey;
    if (!key) {
      return;
    }
    const defaultValue = KEY_DEFAULTS.get(key);
    const translatedValue = trKeyTranslations[key];
    const value = lang === "tr" ? translatedValue || defaultValue : defaultValue;
    if (typeof value === "string") {
      writeNodeValue(node, value);
    }
  });
}

function applyHeadTranslations(path, lang) {
  const headMap = pageHeadTranslations[path];
  if (!headMap) {
    return;
  }
  const selected = lang === "tr" ? headMap.tr : headMap.en;
  if (selected.title) {
    document.title = selected.title;
  }
  const description = document.querySelector('meta[name="description"]');
  if (description && selected.description) {
    description.setAttribute("content", selected.description);
  }
}

function applyPublicationUiTranslations(lang) {
  const searchInput = document.getElementById("pub-search");
  if (searchInput) {
    searchInput.placeholder = lang === "tr" ? "Başlık, yazar, dergi" : "Title, author, journal";
    updatePubCountLabel(lang);
  }
  updatePublicationSubtitle(lang);
}

function initPublicationFilters() {
  const list = document.querySelector(".pub-list");
  const searchInput = document.getElementById("pub-search");
  const yearSelect = document.getElementById("pub-year-filter");
  if (!list || !searchInput || !yearSelect) {
    return;
  }

  const items = Array.from(list.querySelectorAll("li"));
  const years = Array.from(
    new Set(
      items
        .map((item) => item.dataset.year)
        .filter((year) => year && year !== "0")
    )
  ).sort((a, b) => Number(b) - Number(a));

  years.forEach((year) => {
    const option = document.createElement("option");
    option.value = year;
    option.textContent = year;
    yearSelect.appendChild(option);
  });

  const runFilter = () => {
    const query = searchInput.value.trim().toLowerCase();
    const selectedYear = yearSelect.value;

    items.forEach((item) => {
      const haystack = (item.dataset.search || item.textContent).toLowerCase();
      const year = item.dataset.year || "";

      const matchQuery = !query || haystack.includes(query);
      const matchYear = selectedYear === "all" || year === selectedYear;
      item.hidden = !(matchQuery && matchYear);
    });

    updatePubCountLabel(document.documentElement.lang || "en");
  };

  searchInput.addEventListener("input", runFilter);
  yearSelect.addEventListener("change", runFilter);

  runFilter();
}

function updatePubCountLabel(lang) {
  const list = document.querySelector(".pub-list");
  const counter = document.getElementById("pub-count");
  if (!list || !counter) {
    return;
  }
  const allItems = Array.from(list.querySelectorAll("li"));
  const visibleItems = allItems.filter((item) => !item.hidden).length;
  counter.textContent =
    lang === "tr"
      ? `${visibleItems} / ${allItems.length} yayın gösteriliyor`
      : `Showing ${visibleItems} of ${allItems.length} publications`;
}

function updatePublicationSubtitle(lang) {
  const list = document.querySelector(".pub-list");
  const subtitle = document.querySelector("article.content .subtitle");
  if (!list || !subtitle) {
    return;
  }
  const total = list.querySelectorAll("li").length;
  subtitle.textContent =
    lang === "tr" ? `Tam liste (${total} kayıt)` : `Complete list (${total} records)`;
}

function normalizePath(pathname) {
  if (!pathname.endsWith("/")) {
    return `${pathname}/`;
  }
  return pathname;
}

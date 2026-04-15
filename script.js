document.querySelectorAll(".footer [data-year]").forEach((node) => {
  node.textContent = new Date().getFullYear();
});

const I18N_STORAGE_KEY = "cbk_site_lang";
const SUPPORTED_LANGS = ["en", "tr"];

const pageTranslations = {
  "/": [
    { selector: ".subtitle", en: "Professor of Operations Research and Artificial Intelligence", tr: "Yöneylem Araştırması ve Yapay Zeka Profesörü" },
    { selector: "article.content h2:nth-of-type(1)", en: "Quick Links", tr: "Hızlı Bağlantılar" },
    { selector: "article.content ul li:nth-child(1) a", en: "Curriculum Vitae (Web Version)", tr: "Özgeçmiş (Web Sürümü)" },
    { selector: "article.content ul li:nth-child(2) a", en: "Research interests and selected publications", tr: "Araştırma alanları ve seçili yayınlar" },
    { selector: "article.content ul li:nth-child(3) a", en: "Complete publications list", tr: "Tam yayın listesi" },
    { selector: "article.content ul li:nth-child(4) a", en: "Teaching and supervision", tr: "Dersler ve danışmanlıklar" },
    { selector: "article.content ul li:nth-child(5) a", en: "Academic projects and applications", tr: "Akademik projeler ve uygulamalar" },
    { selector: "article.content ul li:nth-child(6) a", en: "Academic and professional experience", tr: "Akademik ve profesyonel deneyim" },
    { selector: "article.content ul li:nth-child(7) a", en: "Academic service, editorial work, and awards", tr: "Akademik hizmetler, editörlük ve ödüller" }
  ],
  "/cv/": [
    { selector: ".subtitle", en: "Central profile overview with shared section pages", tr: "Paylaşımlı bölüm sayfalarıyla merkezi profil özeti" },
    { selector: "article.content h2:nth-of-type(1)", en: "Research Interests", tr: "Araştırma Alanları" },
    { selector: "article.content h2:nth-of-type(2)", en: "Education", tr: "Eğitim" },
    { selector: "article.content h2:nth-of-type(3)", en: "Technical Skills", tr: "Teknik Beceriler" },
    { selector: "article.content h2:nth-of-type(4)", en: "Languages", tr: "Yabancı Diller" }
  ],
  "/research/": [
    { selector: "h1", en: "Research", tr: "Araştırma" },
    { selector: "article.content h2:nth-of-type(1)", en: "Research Interests", tr: "Araştırma Alanları" },
    { selector: "article.content h2:nth-of-type(2)", en: "Selected Journal Publications", tr: "Seçili Dergi Yayınları" },
    { selector: "article.content p:last-of-type", en: "For the full publication record, please see the Publications page.", tr: "Tüm yayın kayıtları için Yayınlar sayfasına bakabilirsiniz." }
  ],
  "/publications/": [
    { selector: "h1", en: "Publications", tr: "Yayınlar" },
    { selector: ".subtitle", en: "Complete list (31 records)", tr: "Tam liste (31 kayıt)" }
  ],
  "/teaching/": [
    { selector: "h1", en: "Teaching", tr: "Öğretim" },
    { selector: "article.content h2:nth-of-type(1)", en: "Courses", tr: "Dersler" },
    { selector: "article.content h2:nth-of-type(2)", en: "Supervised Theses", tr: "Yönetilen Tezler" }
  ],
  "/projects/": [
    { selector: "h1", en: "Projects", tr: "Projeler" },
    { selector: ".subtitle", en: "Funded research projects and grants", tr: "Destekli araştırma projeleri ve fonlar" },
    { selector: "article.content h2:nth-of-type(1)", en: "Research Projects", tr: "Araştırma Projeleri" },
    { selector: "article.content p:last-of-type", en: "Related outputs are listed on the Publications page.", tr: "İlgili çıktılar Yayınlar sayfasında listelenmektedir." }
  ],
  "/experience/": [
    { selector: "h1", en: "Experience", tr: "Deneyim" },
    { selector: ".subtitle", en: "Academic and professional roles", tr: "Akademik ve profesyonel roller" }
  ],
  "/service/": [
    { selector: "h1", en: "Service & Awards", tr: "Hizmet ve Ödüller" },
    { selector: ".subtitle", en: "Academic service, reviewing, and recognitions", tr: "Akademik hizmet, hakemlik ve ödüller" },
    { selector: "article.content h2:nth-of-type(1)", en: "Academic Service", tr: "Akademik Hizmetler" },
    { selector: "article.content h2:nth-of-type(2)", en: "Scholarships and Awards", tr: "Burslar ve Ödüller" },
    { selector: "article.content h2:nth-of-type(3)", en: "Editorial and Peer Review Activities", tr: "Editörlük ve Hakemlik Faaliyetleri" }
  ]
};

initLanguageToggle();
initPublicationFilters();

function initLanguageToggle() {
  const mastheadInner = document.querySelector(".masthead-inner");
  if (!mastheadInner) {
    return;
  }

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

function applyLanguage(lang, switchNode) {
  document.documentElement.lang = lang;

  switchNode.querySelectorAll(".lang-btn").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === lang);
  });

  document.querySelectorAll("[data-i18n-en][data-i18n-tr]").forEach((node) => {
    const translated = lang === "tr" ? node.dataset.i18nTr : node.dataset.i18nEn;
    node.textContent = translated;
  });

  const path = normalizePath(window.location.pathname);
  const pageMap = pageTranslations[path] || [];
  pageMap.forEach((entry) => {
    const target = document.querySelector(entry.selector);
    if (target) {
      target.textContent = lang === "tr" ? entry.tr : entry.en;
    }
  });

  const searchInput = document.getElementById("pub-search");
  if (searchInput) {
    searchInput.placeholder = lang === "tr" ? "Başlık, yazar, dergi" : "Title, author, journal";
    updatePubCountLabel(lang);
  }
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

function normalizePath(pathname) {
  if (!pathname.endsWith("/")) {
    return `${pathname}/`;
  }
  return pathname;
}

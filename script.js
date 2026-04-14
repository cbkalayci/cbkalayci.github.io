const translations = {
  en: {
    profile: {
      title:
        "Professor of Operations Research and Artificial Intelligence, Department of Industrial Engineering, Pamukkale University",
      note:
        "This website presents a concise bilingual overview of research, publications, teaching, and academic service."
    },
    tabs: {
      home: "Home",
      research: "Research",
      publications: "Publications",
      teaching: "Teaching",
      cv: "CV"
    },
    home: {
      label: "Overview",
      heading: "Academic work at the intersection of optimization, AI, and sustainable systems",
      body1:
        "I work on combinatorial optimization, metaheuristics, machine learning, and decision support methods for complex engineering systems. My research connects methodological depth with practical applications in manufacturing, logistics, and sustainability.",
      body2:
        "This site is a compact academic profile prepared for a public GitHub Pages presence, with English and Turkish views built around the same research record.",
      focusLabel: "Research Areas",
      highlightsLabel: "Selected Highlights"
    },
    research: {
      label: "Research",
      heading: "Projects, themes, and scholarly service",
      intro:
        "My recent work spans sustainable disassembly, electric and urban routing, portfolio optimization, fatigue modeling, and quantum-inspired optimization.",
      projectsLabel: "Funded Projects",
      serviceLabel: "Academic Service"
    },
    publications: {
      label: "Publications",
      heading: "Journal articles and conference work",
      countSuffix: "entries",
      readMore: "Link"
    },
    teaching: {
      heading: "Teaching and supervision",
      coursesLabel: "Courses",
      supervisionLabel: "Supervised Theses",
      skillsLabel: "Technical Skills",
      languagesLabel: "Languages"
    },
    cv: {
      educationLabel: "Education",
      awardsLabel: "Awards",
      experienceLabel: "Academic and Professional Experience"
    }
  },
  tr: {
    profile: {
      title:
        "Pamukkale Üniversitesi Endüstri Mühendisliği Bölümü, Yöneylem Araştırması ve Yapay Zeka Profesörü",
      note:
        "Bu site; araştırma, yayın, eğitim ve akademik hizmet çalışmalarının iki dilli kısa bir özetini sunar."
    },
    tabs: {
      home: "Ana Sayfa",
      research: "Araştırma",
      publications: "Yayınlar",
      teaching: "Eğitim",
      cv: "Özgeçmiş"
    },
    home: {
      label: "Genel Bakış",
      heading: "Optimizasyon, yapay zeka ve sürdürülebilir sistemlerin kesişiminde akademik çalışmalar",
      body1:
        "Çalışmalarım; kombinatoryal optimizasyon, metasezgiseller, makine öğrenmesi ve karmaşık mühendislik sistemleri için karar destek yöntemleri üzerine yoğunlaşmaktadır. Yöntemsel derinliği, üretim, lojistik ve sürdürülebilirlik uygulamalarıyla birleştirmeyi amaçlıyorum.",
      body2:
        "Bu site, ortak bir akademik kayıt üzerinden İngilizce ve Türkçe sunum sağlayan, GitHub Pages için hazırlanmış öz bir akademik profildir.",
      focusLabel: "Araştırma Alanları",
      highlightsLabel: "Öne Çıkanlar"
    },
    research: {
      label: "Araştırma",
      heading: "Projeler, temalar ve akademik hizmet",
      intro:
        "Son dönem çalışmalarım sürdürülebilir söküm sistemleri, elektrikli ve kentsel araç rotalama, portföy optimizasyonu, yorulma modelleme ve kuantum esinli optimizasyon başlıklarını kapsamaktadır.",
      projectsLabel: "Desteklenen Projeler",
      serviceLabel: "Akademik Hizmet"
    },
    publications: {
      label: "Yayınlar",
      heading: "Makale ve bildiri çalışmaları",
      countSuffix: "kayıt",
      readMore: "Bağlantı"
    },
    teaching: {
      heading: "Eğitim ve danışmanlık",
      coursesLabel: "Verilen Dersler",
      supervisionLabel: "Yönetilen Tezler",
      skillsLabel: "Teknik Yetkinlikler",
      languagesLabel: "Diller"
    },
    cv: {
      educationLabel: "Eğitim",
      awardsLabel: "Ödüller",
      experienceLabel: "Akademik ve Profesyonel Deneyim"
    }
  }
};

const content = {
  focus: {
    en: [
      "Metaheuristics",
      "Combinatorial Optimization",
      "Machine Learning",
      "Vehicle Routing",
      "Disassembly Line Balancing",
      "Sustainable Manufacturing"
    ],
    tr: [
      "Metasezgiseller",
      "Kombinatoryal Optimizasyon",
      "Makine Öğrenmesi",
      "Araç Rotalama",
      "Söküm Hattı Dengeleme",
      "Sürdürülebilir Üretim"
    ]
  },
  highlights: {
    en: [
      "Included in Stanford-Elsevier World's Top 2% Scientists list for 2021-2024.",
      "Principal investigator on national projects funded by TUBITAK.",
      "Research spans optimization, AI, sustainability, and industrial systems.",
      "Active reviewer for major journals in operations research and AI."
    ],
    tr: [
      "2021-2024 döneminde Stanford-Elsevier Dünyanın En Etkili %2 Bilim İnsanı listesinde yer aldı.",
      "TUBITAK destekli ulusal projelerde yürütücü olarak görev aldı.",
      "Araştırmaları optimizasyon, yapay zeka, sürdürülebilirlik ve endüstriyel sistemleri kapsar.",
      "Yöneylem araştırması ve yapay zeka alanındaki önde gelen dergiler için aktif hakemlik yapmaktadır."
    ]
  },
  projects: [
    {
      years: "2024-Present",
      yearsTr: "2024-Günümüz",
      titleEn:
        "New Models and Solution Approaches for the Sustainable Partial Disassembly Line Balancing Problem",
      titleTr:
        "Sürdürülebilir Kısmi Söküm Hattı Dengeleme Problemi için Yeni Modeller ve Çözüm Yaklaşımları",
      bodyEn:
        "TUBITAK 1001 project. Principal Investigator for a three-year study on sustainable partial disassembly dynamics and optimization.",
      bodyTr:
        "TUBITAK 1001 projesi. Sürdürülebilir kısmi söküm dinamikleri ve optimizasyonu üzerine üç yıllık çalışmanın yürütücüsü."
    },
    {
      years: "2019-2022",
      yearsTr: "2019-2022",
      titleEn: "Developing Efficient Routing Algorithms for Sustainable City Logistics",
      titleTr: "Sürdürülebilir Kent Lojistiği için Etkin Rotalama Algoritmalarının Geliştirilmesi",
      bodyEn:
        "TUBITAK 1001 project focused on eco-friendly and cost-efficient urban logistics systems.",
      bodyTr:
        "Çevre dostu ve maliyet etkin kentsel lojistik sistemlerine odaklanan TUBITAK 1001 projesi."
    },
    {
      years: "2018-2020",
      yearsTr: "2018-2020",
      titleEn:
        "An Integrated Model for the Milk Collection Problem and Development of Efficient Solution Approaches",
      titleTr:
        "Süt Toplama Problemi için Bütünleşik Bir Model ve Etkin Çözüm Yaklaşımlarının Geliştirilmesi",
      bodyEn:
        "TUBITAK 3501 project researcher. Developed models and heuristics for perishable collection routing.",
      bodyTr:
        "TUBITAK 3501 projesinde araştırmacı. Bozulabilir ürün toplama rotalama problemi için model ve sezgisel yöntemler geliştirildi."
    },
    {
      years: "2018-2019",
      yearsTr: "2018-2019",
      titleEn:
        "Determination of Fatigue Behaviors of Micro-Structure Magnesium Alloy Using Heuristic Algorithms",
      titleTr:
        "Mikro Yapılı Magnezyum Alaşımının Yorulma Davranışlarının Sezgisel Algoritmalar ile Belirlenmesi",
      bodyEn:
        "Pamukkale University internal grant. Principal Investigator applying optimization to fatigue behavior modeling.",
      bodyTr:
        "Pamukkale Üniversitesi BAP projesi. Yorulma davranışı modellemesinde optimizasyon yöntemlerini kullanan yürütücü proje."
    },
    {
      years: "2015-2017",
      yearsTr: "2015-2017",
      titleEn: "Designing Efficient Algorithms for Cardinality-Constrained Portfolio Optimization",
      titleTr: "Kardinalite Kısıtlı Portföy Optimizasyonu için Etkin Algoritmaların Tasarlanması",
      bodyEn:
        "TUBITAK 3501 project. Principal Investigator designing hybrid heuristics for constrained portfolio selection.",
      bodyTr:
        "TUBITAK 3501 projesi. Kısıtlı portföy seçimi için hibrit sezgisel yöntemler geliştiren yürütücü proje."
    },
    {
      years: "2015-2016",
      yearsTr: "2015-2016",
      titleEn: "Developing Models and Solution Approaches for Vehicle Routing Problems",
      titleTr: "Araç Rotalama Problemleri için Model ve Çözüm Yaklaşımlarının Geliştirilmesi",
      bodyEn:
        "Pamukkale University internal grant on routing variants with time windows and service constraints.",
      bodyTr:
        "Zaman pencereleri ve hizmet kısıtları içeren rotalama türlerine odaklanan Pamukkale Üniversitesi BAP projesi."
    },
    {
      years: "2014-2015",
      yearsTr: "2014-2015",
      titleEn: "Solution Approaches for the Feeder Containership Routing Problem",
      titleTr: "Besleyici Konteyner Gemisi Rotalama Problemi için Çözüm Yaklaşımları",
      bodyEn:
        "Project researcher contributing to maritime routing model development.",
      bodyTr:
        "Deniz taşımacılığı rotalama modellerinin geliştirilmesine katkı sunulan araştırmacı projesi."
    },
    {
      years: "2014-2015",
      yearsTr: "2014-2015",
      titleEn:
        "Solving Vehicle Routing Problems with Simultaneous Pickup and Delivery under Time Limits Using Metaheuristics",
      titleTr:
        "Zaman Kısıtlı Eşzamanlı Toplama ve Dağıtım Araç Rotalama Problemlerinin Metasezgiseller ile Çözümü",
      bodyEn:
        "Principal Investigator on metaheuristic methods for simultaneous pickup and delivery routing.",
      bodyTr:
        "Eşzamanlı toplama-dağıtım rotalama problemleri için metasezgisel yöntemler geliştiren yürütücü proje."
    }
  ],
  service: {
    en: [
      "TUBITAK project evaluator and panelist for more than 100 proposals.",
      "Erasmus+ Departmental Coordinator since 2018.",
      "Associate Dean of the Faculty of Engineering, 2021-2022.",
      "Reviewer for EJOR, COR, C&IE, JCP, KBS, ASOC, SWEVO, ESWA and related journals."
    ],
    tr: [
      "100'den fazla proje önerisi için TUBITAK değerlendiricisi ve panelisti.",
      "2018'den bu yana Erasmus+ Bölüm Koordinatörü.",
      "2021-2022 döneminde Mühendislik Fakültesi Dekan Yardımcısı.",
      "EJOR, COR, C&IE, JCP, KBS, ASOC, SWEVO, ESWA ve benzeri dergiler için hakem."
    ]
  },
  publications: [
    ["2024","CMSA based on set covering models for packing and routing problems","Annals of Operations Research","https://doi.org/10.1007/s10479-024-06295-9"],
    ["2020","A Parallel Variable Neighborhood Search Algorithm with Quadratic Programming for Cardinality Constrained Portfolio Optimization","Knowledge-Based Systems","https://doi.org/10.1016/j.knosys.2020.105944"],
    ["2021","A Variable Neighborhood Search Algorithm for Cost-Balanced Travelling Salesman Problem","Advances in Intelligent Systems and Computing","https://doi.org/10.1007/978-3-030-68520-1_3"],
    ["2022","Variable Neighborhood Search for the Two-Echelon Electric Vehicle Routing Problem with Time Windows","Applied Sciences","https://doi.org/10.3390/app12031014"],
    ["2024","Enhancing Combinatorial Optimization with Classical and Quantum Generative Models","Nature Communications","https://doi.org/10.1038/s41467-024-46959-5"],
    ["2018","A Survey of Swarm Intelligence for Portfolio Optimization: Algorithms and Applications","Swarm and Evolutionary Computation","https://doi.org/10.1016/j.swevo.2018.01.009"],
    ["2024","Advances in Partial Disassembly Line Balancing: A State-of-the-Art Review","Computers and Industrial Engineering","https://doi.org/10.1016/j.cie.2024.109898"],
    ["2020","Responsible & Sustainable Manufacturing","International Journal of Production Research","https://doi.org/10.1080/00207543.2020.1841968"],
    ["2013","Ant Colony Optimization for Sequence-Dependent Disassembly Line Balancing Problem","Journal of Manufacturing Technology Management","https://doi.org/10.1108/17410381311318909"],
    ["2016","An Ant Colony System Empowered Variable Neighborhood Search Algorithm for the Vehicle Routing Problem with Simultaneous Pickup and Delivery","Expert Systems with Applications","https://doi.org/10.1016/j.eswa.2016.09.017"],
    ["2013","Artificial Bee Colony Algorithm for Solving Sequence-Dependent Disassembly Line Balancing Problem","Expert Systems with Applications","https://doi.org/10.1016/j.eswa.2013.06.067"],
    ["2017","An Artificial Bee Colony Algorithm with Feasibility Enforcement and Infeasibility Toleration Procedures for Cardinality Constrained Portfolio Optimization","Expert Systems with Applications","https://doi.org/10.1016/j.eswa.2017.05.018"],
    ["2013","Balancing a Sequence-Dependent Disassembly Line Using Simulated Annealing Algorithm","Applications of Management Science","https://doi.org/10.1108/S0276-8976(2013)0000016008"],
    ["2019","Bee Colony Intelligence in Fatigue Life Estimation of Simulated Magnesium Alloy Welds","International Journal of Fatigue","https://doi.org/10.1016/j.ijfatigue.2019.05.032"],
    ["2019","A Comprehensive Review of Deterministic Models and Applications for Mean-Variance Portfolio Optimization","Expert Systems with Applications","https://doi.org/10.1016/j.eswa.2019.02.011"],
    ["2020","An Efficient Hybrid Metaheuristic Algorithm for Cardinality Constrained Portfolio Optimization","Swarm and Evolutionary Computation","https://doi.org/10.1016/j.swevo.2020.100662"],
    ["2012","A Genetic Algorithm Based Examination Timetabling Model Focusing on Student Success","Gazi University Journal of Science","https://www.scopus.com/inward/record.uri?eid=2-s2.0-84856583398"],
    ["2016","A Hybrid Genetic Algorithm for Sequence-Dependent Disassembly Line Balancing Problem","Annals of Operations Research","https://doi.org/10.1007/s10479-014-1641-3"],
    ["2015","Multi-Objective Fuzzy Disassembly Line Balancing Using a Hybrid Discrete Artificial Bee Colony Algorithm","Journal of Manufacturing Systems","https://doi.org/10.1016/j.jmsy.2014.11.015"],
    ["2013","A Particle Swarm Optimization Algorithm with Neighborhood-Based Mutation for Sequence-Dependent Disassembly Line Balancing Problem","International Journal of Advanced Manufacturing Technology","https://doi.org/10.1007/s00170-013-4990-1"],
    ["2020","Soft Computing Methods for Fatigue Life Estimation: A Review of the Current State and Future Trends","Fatigue and Fracture of Engineering Materials and Structures","https://doi.org/10.1111/ffe.13343"],
    ["2014","A Tabu Search Algorithm for Balancing a Sequence-Dependent Disassembly Line","Production Planning and Control","https://doi.org/10.1080/09537287.2013.782949"],
    ["2015","A Variable Neighbourhood Search Algorithm for Disassembly Lines","Journal of Manufacturing Technology Management","https://doi.org/10.1108/JMTM-11-2013-0168"],
    ["2019","Disassembly Line Balancing Problem: A Review of the State of the Art and Future Directions","International Journal of Production Research","https://doi.org/10.1080/00207543.2018.1428775"],
    ["2021","Classification of Raw Cow Milk Using Information Fusion Framework","Journal of Food Measurement and Characterization","https://doi.org/10.1007/s11694-021-01076-5"],
    ["2022","Modelling and Solving the Milk Collection Problem with Realistic Constraints","Computers and Operations Research","https://doi.org/10.1016/j.cor.2022.105759"],
    ["2015","A Perturbation Based Variable Neighborhood Search Heuristic for Solving the Vehicle Routing Problem with Simultaneous Pickup and Delivery with Time Limit","European Journal of Operational Research","https://doi.org/10.1016/j.ejor.2014.10.010"],
    ["2016","A Two-Phase Variable Neighbourhood Search Algorithm for Assembly Line Worker Assignment and Balancing Problem Type-II: An Industrial Case Study","International Journal of Production Research","https://doi.org/10.1080/00207543.2015.1055344"],
    ["2022","Low-Cycle Fatigue Parameters and Fatigue Life Estimation of High-Strength Steels with Artificial Neural Networks","Fatigue and Fracture of Engineering Materials and Structures","https://doi.org/10.1111/ffe.13847"],
    ["2022","Variable Neighborhood Search Algorithms to Solve the Electric Vehicle Routing Problem with Simultaneous Pickup and Delivery","Mathematics","https://doi.org/10.3390/math10173108"]
  ],
  courses: {
    en: [
      "ENM 543 - Artificial Intelligence Methodologies in Industrial Engineering",
      "IENG 435 - Heuristic Methods in Problem Solving",
      "CENG 280 - Programming Basics and Algorithm Design",
      "CENG 191 - Introduction to Programming",
      "CENG 110 - Intermediate Programming",
      "ENM 555 - MATLAB and Applications",
      "IENG 473 - Portfolio Optimization",
      "ENM 503 - Statistical Experimental Design",
      "IENG 217 - Probability and Statistics",
      "IENG 426 - Environmentally Conscious Manufacturing",
      "MUHY 578 - Management Information Systems",
      "IENG 108 - Industrial Engineering Applications",
      "MUHF 401 - Case Studies in Engineering"
    ],
    tr: [
      "ENM 543 - Endüstri Mühendisliğinde Yapay Zeka Yöntemleri",
      "IENG 435 - Problem Çözmede Sezgisel Yöntemler",
      "CENG 280 - Programlama Temelleri ve Algoritma Tasarımı",
      "CENG 191 - Programlamaya Giriş",
      "CENG 110 - Orta Düzey Programlama",
      "ENM 555 - MATLAB ve Uygulamaları",
      "IENG 473 - Portföy Optimizasyonu",
      "ENM 503 - İstatistiksel Deney Tasarımı",
      "IENG 217 - Olasılık ve İstatistik",
      "IENG 426 - Çevreye Duyarlı Üretim",
      "MUHY 578 - Yönetim Bilişim Sistemleri",
      "IENG 108 - Endüstri Mühendisliği Uygulamaları",
      "MUHF 401 - Mühendislikte Vaka Analizleri"
    ]
  },
  supervision: {
    en: [
      "Yusuf Yilmaz, Ph.D., 2023 - Variable Neighborhood Search Algorithms for Solving Electric Vehicle Routing Problems",
      "Mehmet Anil Akbay, M.Sc., 2019 - Variable Neighborhood Search for Cardinality-Constrained Portfolio Optimization",
      "Umut Mete, M.Sc., 2019 - A Variable Neighborhood Search Approach for Permutation Flow-Shop Scheduling",
      "Sevcan Karagoz, M.Sc., 2019 - Fatigue Behaviors of Micro-Structure Magnesium Alloy Using Heuristic Algorithms",
      "Okkes Ertenlice, M.Sc., 2018 - Artificial Bee Colony for Cardinality-Constrained Portfolio Optimization",
      "Can Kaya, M.Sc., 2017 - ACS-VNS for Vehicle Routing with Simultaneous Pickup and Delivery",
      "Hasan Akyer, Ph.D., 2016 - Heuristic Approaches for Optimal Portfolio Management (Co-advisor)"
    ],
    tr: [
      "Yusuf Yilmaz, Doktora, 2023 - Elektrikli Araç Rotalama Problemleri için Değişken Komşuluk Arama Algoritmaları",
      "Mehmet Anil Akbay, Yüksek Lisans, 2019 - Kardinalite Kısıtlı Portföy Optimizasyonu için Değişken Komşuluk Arama",
      "Umut Mete, Yüksek Lisans, 2019 - Permütasyon Akış Tipi Çizelgeleme için Değişken Komşuluk Arama Yaklaşımı",
      "Sevcan Karagoz, Yüksek Lisans, 2019 - Mikro Yapılı Magnezyum Alaşımının Yorulma Davranışları",
      "Okkes Ertenlice, Yüksek Lisans, 2018 - Kardinalite Kısıtlı Portföy Optimizasyonu için Yapay Arı Kolonisi Yaklaşımı",
      "Can Kaya, Yüksek Lisans, 2017 - Eşzamanlı Toplama ve Dağıtım için ACS-VNS Araç Rotalama Yaklaşımı",
      "Hasan Akyer, Doktora, 2016 - Optimum Portföy Yönetimi için Sezgisel Yaklaşımlar (Ortak danışman)"
    ]
  },
  skills: {
    en: [
      "Programming: Python, MATLAB, C/C++, Julia",
      "Optimization: Gurobi, IBM CPLEX",
      "Data Analysis and ML: pandas, NumPy, Scikit-learn",
      "Scientific Writing: LaTeX, Overleaf"
    ],
    tr: [
      "Programlama: Python, MATLAB, C/C++, Julia",
      "Optimizasyon: Gurobi, IBM CPLEX",
      "Veri Analizi ve ML: pandas, NumPy, Scikit-learn",
      "Bilimsel Yazım: LaTeX, Overleaf"
    ]
  },
  languages: {
    en: ["English: C1-C2", "Turkish: Native"],
    tr: ["İngilizce: C1-C2", "Türkçe: Anadili"]
  },
  education: {
    en: [
      ["2008-2012", "Northeastern University", "Ph.D. in Industrial Engineering"],
      ["2005-2008", "Pamukkale University", "M.Sc. in Industrial Engineering"],
      ["2001-2005", "Sakarya University", "B.Sc. in Computer Engineering"]
    ],
    tr: [
      ["2008-2012", "Northeastern University", "Endüstri Mühendisliği Doktora"],
      ["2005-2008", "Pamukkale University", "Endüstri Mühendisliği Yüksek Lisans"],
      ["2001-2005", "Sakarya University", "Bilgisayar Mühendisliği Lisans"]
    ]
  },
  awards: {
    en: [
      "Stanford-Elsevier World's Top 2% Scientists list, 2021-2024.",
      "Citation Award, Pamukkale University, 2019.",
      "Bronze Medal, Metaheuristics Competition at MESS, 2018.",
      "Fully funded YOK Ph.D. scholarship, 2008-2012.",
      "Graduated with High Honors, Sakarya University, 2005."
    ],
    tr: [
      "Stanford-Elsevier Dünyanın En Etkili %2 Bilim İnsanı listesi, 2021-2024.",
      "Pamukkale Üniversitesi Atıf Ödülü, 2019.",
      "MESS Metaheuristics Competition Bronz Madalya, 2018.",
      "Tam burslu YOK doktora bursu, 2008-2012.",
      "Sakarya Üniversitesi Yüksek Onur derecesiyle mezuniyet, 2005."
    ]
  },
  experience: {
    en: [
      ["2015-Present", "Pamukkale University", "TUBITAK Project Evaluator and Panelist"],
      ["2018-Present", "Pamukkale University", "Erasmus+ Departmental Coordinator"],
      ["2021-2022", "Pamukkale University", "Associate Dean"],
      ["2021-2022", "Zapata Computing, Inc.", "Research Consultant"],
      ["2010-2011", "Northeastern University", "Teaching Assistant"],
      ["Summer 2003", "Technical University of Kosice", "Research Intern"]
    ],
    tr: [
      ["2015-Günümüz", "Pamukkale University", "TUBITAK Proje Değerlendiricisi ve Panelisti"],
      ["2018-Günümüz", "Pamukkale University", "Erasmus+ Bölüm Koordinatörü"],
      ["2021-2022", "Pamukkale University", "Dekan Yardımcısı"],
      ["2021-2022", "Zapata Computing, Inc.", "Araştırma Danışmanı"],
      ["2010-2011", "Northeastern University", "Teaching Assistant"],
      ["Yaz 2003", "Technical University of Kosice", "Araştırma Stajyeri"]
    ]
  }
};

let currentLang = "en";

function getTranslation(path) {
  return path.split(".").reduce((acc, key) => acc[key], translations[currentLang]);
}

function setStaticText() {
  document.documentElement.lang = currentLang;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = getTranslation(node.dataset.i18n);
  });
}

function renderChips() {
  const container = document.getElementById("focus-list");
  container.innerHTML = "";
  content.focus[currentLang].forEach((item) => {
    const chip = document.createElement("span");
    chip.className = "chip";
    chip.textContent = item;
    container.appendChild(chip);
  });
}

function renderSimpleList(id, items) {
  const container = document.getElementById(id);
  container.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    container.appendChild(li);
  });
}

function renderProjects() {
  const container = document.getElementById("projects-list");
  container.innerHTML = "";
  content.projects.forEach((project) => {
    const article = document.createElement("article");
    article.className = "stack-item";
    article.innerHTML = `
      <p class="item-meta">${currentLang === "en" ? project.years : project.yearsTr}</p>
      <h3 class="item-title">${currentLang === "en" ? project.titleEn : project.titleTr}</h3>
      <p class="item-body">${currentLang === "en" ? project.bodyEn : project.bodyTr}</p>
    `;
    container.appendChild(article);
  });
}

function renderPublications() {
  const container = document.getElementById("publications-list");
  container.innerHTML = "";
  [...content.publications]
    .sort((a, b) => {
      const yearDiff = Number(b[0]) - Number(a[0]);
      return yearDiff !== 0 ? yearDiff : a[1].localeCompare(b[1]);
    })
    .forEach(([year, title, venue, link]) => {
    const article = document.createElement("article");
    article.className = "stack-item";
    article.innerHTML = `
      <p class="item-meta">${year} · ${venue}</p>
      <h3 class="item-title">${title}</h3>
      <a class="publication-link" href="${link}" target="_blank" rel="noreferrer">${getTranslation("publications.readMore")}</a>
    `;
    container.appendChild(article);
    });
  document.getElementById("publication-count").textContent = content.publications.length;
}

function renderTimeline(id, items) {
  const container = document.getElementById(id);
  container.innerHTML = "";
  items.forEach(([time, place, note]) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong class="time">${time}</strong> <strong>${place}</strong><div class="timeline-note">${note}</div>`;
    container.appendChild(li);
  });
}

function renderContent() {
  setStaticText();
  renderChips();
  renderSimpleList("home-highlights", content.highlights[currentLang]);
  renderProjects();
  renderSimpleList("service-list", content.service[currentLang]);
  renderPublications();
  renderSimpleList("courses-list", content.courses[currentLang]);
  renderSimpleList("supervision-list", content.supervision[currentLang]);
  renderSimpleList("skills-list", content.skills[currentLang]);
  renderSimpleList("languages-list", content.languages[currentLang]);
  renderSimpleList("awards-list", content.awards[currentLang]);
  renderTimeline("education-list", content.education[currentLang]);
  renderTimeline("experience-list", content.experience[currentLang]);
}

function activateTab(tabName) {
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.tab === tabName);
  });
  document.querySelectorAll(".tab-panel").forEach((panel) => {
    panel.classList.toggle("is-active", panel.dataset.panel === tabName);
  });
  window.location.hash = tabName;
}

document.querySelectorAll(".tab-button").forEach((button) => {
  button.addEventListener("click", () => activateTab(button.dataset.tab));
});

document.querySelectorAll(".lang-button").forEach((button) => {
  button.addEventListener("click", () => {
    currentLang = button.dataset.lang;
    document.querySelectorAll(".lang-button").forEach((langButton) => {
      langButton.classList.toggle("is-active", langButton.dataset.lang === currentLang);
    });
    renderContent();
  });
});

const initialTab = ["home", "research", "publications", "teaching", "cv"].includes(
  window.location.hash.replace("#", "")
)
  ? window.location.hash.replace("#", "")
  : "home";

renderContent();
activateTab(initialTab);

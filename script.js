document.querySelectorAll(".footer [data-year]").forEach((node) => {
  node.textContent = new Date().getFullYear();
});

const I18N_STORAGE_KEY = "cbk_site_lang";
const SUPPORTED_LANGS = ["en", "tr"];

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

const sharedTranslations = [
  {
    selector: ".role",
    all: true,
    en: "Professor of Operations Research and Artificial Intelligence",
    tr: "Yöneylem Araştırması ve Yapay Zeka Profesörü"
  },
  {
    selector: ".profile-photo",
    all: true,
    attr: "alt",
    en: "Portrait of Can B. Kalayci",
    tr: "Can B. Kalayci portresi"
  },
  {
    selector: ".top-nav",
    all: true,
    attr: "aria-label",
    en: "Main navigation",
    tr: "Ana gezinme"
  }
];

const pageTranslations = {
  "/": [
    { selector: ".subtitle", en: "Professor of Operations Research and Artificial Intelligence", tr: "Yöneylem Araştırması ve Yapay Zeka Profesörü" },
    {
      selector: "article.content p:nth-of-type(2)",
      html: true,
      en: `Department of Industrial Engineering,
          <a href="https://www.pau.edu.tr/" target="_blank" rel="noreferrer">
            Pamukkale University
          </a>
          <br />
          Kinikli Campus, 20160 Denizli, Turkey`,
      tr: `Endüstri Mühendisliği Bölümü,
          <a href="https://www.pau.edu.tr/" target="_blank" rel="noreferrer">
            Pamukkale Üniversitesi
          </a>
          <br />
          Kınıklı Kampüsü, 20160 Denizli, Türkiye`
    },
    {
      selector: "article.content p:nth-of-type(3)",
      en: "I work on optimization and AI methodologies for complex decision systems, with a focus on routing, sustainable manufacturing, disassembly line balancing, and combinatorial optimization.",
      tr: "Karmaşık karar sistemleri için optimizasyon ve yapay zeka yöntemleri üzerine çalışıyorum; özellikle rotalama, sürdürülebilir üretim, söküm hattı dengeleme ve kombinatoryal optimizasyona odaklanıyorum."
    },
    {
      selector: "article.content p:nth-of-type(4)",
      en: "My recent studies include hybrid metaheuristics, machine-learning assisted optimization, and sustainability-oriented modeling for industrial engineering applications.",
      tr: "Güncel çalışmalarım hibrit metasezgiselleri, makine öğrenmesi destekli optimizasyonu ve endüstri mühendisliği uygulamaları için sürdürülebilirlik odaklı modellemeyi kapsamaktadır."
    },
    { selector: "article.content h2:nth-of-type(1)", en: "Quick Links", tr: "Hızlı Bağlantılar" },
    { selector: "article.content > ul > li:nth-child(1) a", en: "Curriculum Vitae (Web Version)", tr: "Özgeçmiş (Web Sürümü)" },
    { selector: "article.content > ul > li:nth-child(2) a", en: "Research interests and selected publications", tr: "Araştırma alanları ve seçili yayınlar" },
    { selector: "article.content > ul > li:nth-child(3) a", en: "Complete publications list", tr: "Tam yayın listesi" },
    { selector: "article.content > ul > li:nth-child(4) a", en: "Teaching and supervision", tr: "Dersler ve danışmanlıklar" },
    { selector: "article.content > ul > li:nth-child(5) a", en: "Academic projects and applications", tr: "Akademik projeler ve uygulamalar" },
    { selector: "article.content > ul > li:nth-child(6) a", en: "Academic and professional experience", tr: "Akademik ve profesyonel deneyim" },
    { selector: "article.content > ul > li:nth-child(7) a", en: "Academic service, editorial work, and awards", tr: "Akademik hizmetler, editörlük ve ödüller" }
  ],
  "/cv/": [
    { selector: "h1", en: "Curriculum Vitae", tr: "Özgeçmiş" },
    { selector: ".subtitle", en: "Comprehensive academic profile", tr: "Kapsamlı akademik profil" },
    { selector: "article.content h2:nth-of-type(1)", en: "Research Interests", tr: "Araştırma Alanları" },
    { selector: "article.content h2:nth-of-type(2)", en: "Education", tr: "Eğitim" },
    { selector: "article.content h2:nth-of-type(3)", en: "Technical Skills", tr: "Teknik Beceriler" },
    { selector: "article.content h2:nth-of-type(4)", en: "Languages", tr: "Yabancı Diller" },
    {
      selector: "article.content ul:nth-of-type(1) li:nth-child(1)",
      html: true,
      en: `<strong>Design and Analysis of Optimization and AI Algorithms:</strong>
            metaheuristics, machine-learning-assisted optimization, and hybrid methods.`,
      tr: `<strong>Optimizasyon ve Yapay Zeka Algoritmalarının Tasarımı ve Analizi:</strong>
            metasezgiseller, makine öğrenmesi destekli optimizasyon ve hibrit yöntemler.`
    },
    {
      selector: "article.content ul:nth-of-type(1) li:nth-child(2)",
      html: true,
      en: `<strong>Application Domains:</strong> vehicle routing, scheduling, disassembly line
            balancing, and portfolio optimization.`,
      tr: `<strong>Uygulama Alanları:</strong> araç rotalama, çizelgeleme, söküm hattı dengeleme
            ve portföy optimizasyonu.`
    },
    {
      selector: "article.content ul:nth-of-type(1) li:nth-child(3)",
      html: true,
      en: `<strong>Sustainability:</strong> environmentally conscious modeling and circular
            manufacturing systems.`,
      tr: `<strong>Sürdürülebilirlik:</strong> çevresel açıdan duyarlı modelleme ve döngüsel
            üretim sistemleri.`
    },
    {
      selector: "article.content ul:nth-of-type(2) li:nth-child(1)",
      html: true,
      en: `<strong>Northeastern University</strong>, Boston, MA, USA (2008-2012)<br />
            Ph.D. in Industrial Engineering<br />
            Dissertation:
            <em>Algorithms for Solving Sequence-Dependent Disassembly Line Balancing Problems</em><br />
            Supervisor: Prof. Surendra M. Gupta<br />
            Repository:
            <a
              href="https://repository.library.northeastern.edu/files/neu:1605"
              target="_blank"
              rel="noreferrer"
            >
              Northeastern University Repository
            </a>`,
      tr: `<strong>Northeastern University</strong>, Boston, MA, ABD (2008-2012)<br />
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
            </a>`
    },
    {
      selector: "article.content ul:nth-of-type(2) li:nth-child(2)",
      html: true,
      en: `<strong>Pamukkale University</strong>, Denizli, Turkey (2005-2008)<br />
            M.Sc. in Industrial Engineering<br />
            Thesis:
            <em>
              A Student Success-Oriented Examination Timetabling Model and Its Software
              Implementation
            </em><br />
            Supervisor: Prof. Askiner Gungor`,
      tr: `<strong>Pamukkale University</strong>, Denizli, Türkiye (2005-2008)<br />
            Endüstri Mühendisliğinde Yüksek Lisans<br />
            Tez:
            <em>
              A Student Success-Oriented Examination Timetabling Model and Its Software
              Implementation
            </em><br />
            Danışman: Prof. Askiner Gungor`
    },
    {
      selector: "article.content ul:nth-of-type(2) li:nth-child(3)",
      html: true,
      en: `<strong>Sakarya University</strong>, Sakarya, Turkey (2001-2005)<br />
            B.Sc. in Computer Engineering, Graduated with High Honors`,
      tr: `<strong>Sakarya University</strong>, Sakarya, Türkiye (2001-2005)<br />
            Bilgisayar Mühendisliğinde Lisans, Yüksek Onur Derecesiyle Mezuniyet`
    },
    {
      selector: "article.content ul:nth-of-type(3) li:nth-child(1)",
      html: true,
      en: "<strong>Programming:</strong> Python, MATLAB, C/C++, Julia",
      tr: "<strong>Programlama:</strong> Python, MATLAB, C/C++, Julia"
    },
    {
      selector: "article.content ul:nth-of-type(3) li:nth-child(2)",
      html: true,
      en: "<strong>Optimization:</strong> Gurobi, IBM CPLEX",
      tr: "<strong>Optimizasyon:</strong> Gurobi, IBM CPLEX"
    },
    {
      selector: "article.content ul:nth-of-type(3) li:nth-child(3)",
      html: true,
      en: "<strong>Data Analysis and ML:</strong> pandas, NumPy, Scikit-learn",
      tr: "<strong>Veri Analizi ve Makine Öğrenmesi:</strong> pandas, NumPy, Scikit-learn"
    },
    {
      selector: "article.content ul:nth-of-type(3) li:nth-child(4)",
      html: true,
      en: "<strong>Scientific Writing:</strong> LaTeX, Overleaf",
      tr: "<strong>Bilimsel Yazım:</strong> LaTeX, Overleaf"
    },
    {
      selector: "article.content ul:nth-of-type(4) li:nth-child(1)",
      html: true,
      en: "<strong>English:</strong> C1-C2 (Proficient)",
      tr: "<strong>İngilizce:</strong> C1-C2 (Yetkin)"
    },
    {
      selector: "article.content ul:nth-of-type(4) li:nth-child(2)",
      html: true,
      en: "<strong>Turkish:</strong> Native speaker (C2)",
      tr: "<strong>Türkçe:</strong> Anadili (C2)"
    }
  ],
  "/research/": [
    { selector: "h1", en: "Research", tr: "Araştırma" },
    { selector: "article.content h2:nth-of-type(1)", en: "Research Interests", tr: "Araştırma Alanları" },
    {
      selector: "article.content ul:nth-of-type(1) li:nth-child(1)",
      html: true,
      en: `<strong>Methodological:</strong> metaheuristics, combinatorial optimization,
            machine-learning-assisted optimization, and quantum-inspired approaches.`,
      tr: `<strong>Yöntemsel:</strong> metasezgiseller, kombinatoryal optimizasyon,
            makine öğrenmesi destekli optimizasyon ve kuantumdan ilham alan yaklaşımlar.`
    },
    {
      selector: "article.content ul:nth-of-type(1) li:nth-child(2)",
      html: true,
      en: `<strong>Application domains:</strong> multi-compartment vehicle routing,
            electric vehicle routing, disassembly line balancing, scheduling, and
            portfolio optimization.`,
      tr: `<strong>Uygulama alanları:</strong> çok bölmeli araç rotalama, elektrikli araç
            rotalama, söküm hattı dengeleme, çizelgeleme ve portföy optimizasyonu.`
    },
    {
      selector: "article.content ul:nth-of-type(1) li:nth-child(3)",
      html: true,
      en: `<strong>Sustainability:</strong> circular manufacturing systems and
            environmentally conscious decision models.`,
      tr: `<strong>Sürdürülebilirlik:</strong> döngüsel üretim sistemleri ve çevresel açıdan
            duyarlı karar modelleri.`
    },
    { selector: "article.content h2:nth-of-type(2)", en: "Selected Journal Publications", tr: "Seçili Dergi Yayınları" }
  ],
  "/publications/": [
    { selector: "h1", en: "Publications", tr: "Yayınlar" },
    {
      selector: ".pub-tools",
      attr: "aria-label",
      en: "Publication filters",
      tr: "Yayın filtreleri"
    }
  ],
  "/teaching/": [
    { selector: "h1", en: "Teaching", tr: "Eğitim" },
    { selector: "article.content h2:nth-of-type(1)", en: "Courses", tr: "Dersler" },
    { selector: "article.content h2:nth-of-type(2)", en: "Supervised Theses", tr: "Yönetilen Tezler" },
    {
      selector: "article.content ul:nth-of-type(1) li:nth-child(1)",
      en: "ENM 543 - Artificial Intelligence Methodologies in Industrial Engineering",
      tr: "ENM 543 - Endüstri Mühendisliğinde Yapay Zeka Yöntemleri"
    },
    {
      selector: "article.content ul:nth-of-type(1) li:nth-child(2)",
      en: "IENG 435 - Heuristic Methods in Problem Solving",
      tr: "IENG 435 - Problem Çözmede Sezgisel Yöntemler"
    },
    {
      selector: "article.content ul:nth-of-type(1) li:nth-child(3)",
      en: "CENG 280 - Programming Basics and Algorithm Design",
      tr: "CENG 280 - Programlamanın Temelleri ve Algoritma Tasarımı"
    },
    {
      selector: "article.content ul:nth-of-type(1) li:nth-child(4)",
      en: "CENG 191 - Introduction to Programming",
      tr: "CENG 191 - Programlamaya Giriş"
    },
    {
      selector: "article.content ul:nth-of-type(1) li:nth-child(5)",
      en: "CENG 110 - Intermediate Programming",
      tr: "CENG 110 - Orta Düzey Programlama"
    },
    {
      selector: "article.content ul:nth-of-type(1) li:nth-child(6)",
      en: "ENM 555 - MATLAB and Applications",
      tr: "ENM 555 - MATLAB ve Uygulamaları"
    },
    {
      selector: "article.content ul:nth-of-type(1) li:nth-child(7)",
      en: "IENG 473 - Portfolio Optimization",
      tr: "IENG 473 - Portföy Optimizasyonu"
    },
    {
      selector: "article.content ul:nth-of-type(1) li:nth-child(8)",
      en: "ENM 503 - Statistical Experimental Design",
      tr: "ENM 503 - İstatistiksel Deney Tasarımı"
    },
    {
      selector: "article.content ul:nth-of-type(1) li:nth-child(9)",
      en: "IENG 217 - Probability and Statistics",
      tr: "IENG 217 - Olasılık ve İstatistik"
    },
    {
      selector: "article.content ul:nth-of-type(1) li:nth-child(10)",
      en: "IENG 426 - Environmentally Conscious Manufacturing",
      tr: "IENG 426 - Çevreye Duyarlı Üretim"
    },
    {
      selector: "article.content ul:nth-of-type(1) li:nth-child(11)",
      en: "MUHY 578 - Management Information Systems",
      tr: "MUHY 578 - Yönetim Bilişim Sistemleri"
    },
    {
      selector: "article.content ul:nth-of-type(1) li:nth-child(12)",
      en: "IENG 108 - Industrial Engineering Applications",
      tr: "IENG 108 - Endüstri Mühendisliği Uygulamaları"
    },
    {
      selector: "article.content ul:nth-of-type(1) li:nth-child(13)",
      en: "MUHF 401 - Case Studies in Engineering",
      tr: "MUHF 401 - Mühendislikte Vaka Çalışmaları"
    },
    {
      selector: "article.content ul:nth-of-type(2) li:nth-child(1)",
      html: true,
      en: `Yusuf Yılmaz, Ph.D. (2023) - Primary Advisor<br />
            <em>Variable Neighborhood Search Algorithms for Solving Electric Vehicle Routing Problems.</em>`,
      tr: `Yusuf Yılmaz, Doktora (2023) - Birincil Danışman<br />
            <em>Elektrikli Araç Rotalama Problemlerinin Çözümü için Değişken Komşuluk Arama Algoritmaları.</em>`
    },
    {
      selector: "article.content ul:nth-of-type(2) li:nth-child(2)",
      html: true,
      en: `Mehmet Anıl Akbay, M.Sc. (2019) - Primary Advisor<br />
            <em>
              A Solution Approach Based on Variable Neighborhood Search Algorithm for
              Cardinality-Constrained Portfolio Optimization.
            </em>`,
      tr: `Mehmet Anıl Akbay, Yüksek Lisans (2019) - Birincil Danışman<br />
            <em>
              Kardinalite Kısıtlı Portföy Optimizasyonu için Değişken Komşuluk Arama
              Algoritmasına Dayalı Bir Çözüm Yaklaşımı.
            </em>`
    },
    {
      selector: "article.content ul:nth-of-type(2) li:nth-child(3)",
      html: true,
      en: `Umut Mete, M.Sc. (2019) - Primary Advisor<br />
            <em>A Variable Neighborhood Search Approach for Permutation Flow-Shop Scheduling.</em>`,
      tr: `Umut Mete, Yüksek Lisans (2019) - Birincil Danışman<br />
            <em>Permütasyon Akış Tipi Çizelgeleme için Değişken Komşuluk Arama Yaklaşımı.</em>`
    },
    {
      selector: "article.content ul:nth-of-type(2) li:nth-child(4)",
      html: true,
      en: `Sevcan Karagöz, M.Sc. (2019) - Primary Advisor<br />
            <em>Determination of Fatigue Behaviors of Micro-Structure Magnesium Alloy Using Heuristic Algorithms.</em>`,
      tr: `Sevcan Karagöz, Yüksek Lisans (2019) - Birincil Danışman<br />
            <em>Mikro Yapılı Magnezyum Alaşımının Yorulma Davranışlarının Sezgisel Algoritmalar Kullanılarak Belirlenmesi.</em>`
    },
    {
      selector: "article.content ul:nth-of-type(2) li:nth-child(5)",
      html: true,
      en: `Ökkeş Ertenlice, M.Sc. (2018) - Primary Advisor<br />
            <em>An Artificial Bee Colony Algorithm-Based Solution Approach for Cardinality-Constrained Portfolio Optimization.</em>`,
      tr: `Ökkeş Ertenlice, Yüksek Lisans (2018) - Birincil Danışman<br />
            <em>Kardinalite Kısıtlı Portföy Optimizasyonu için Yapay Arı Kolonisi Algoritması Tabanlı Bir Çözüm Yaklaşımı.</em>`
    },
    {
      selector: "article.content ul:nth-of-type(2) li:nth-child(6)",
      html: true,
      en: `Can Kaya, M.Sc. (2017) - Primary Advisor<br />
            <em>
              An Ant Colony System Empowered Variable Neighborhood Search Algorithm for the
              Vehicle Routing Problem with Simultaneous Pickup and Delivery.
            </em>`,
      tr: `Can Kaya, Yüksek Lisans (2017) - Birincil Danışman<br />
            <em>
              Eşzamanlı Toplama ve Dağıtım İçeren Araç Rotalama Problemi için Karınca
              Kolonisi Sistemi Destekli Değişken Komşuluk Arama Algoritması.
            </em>`
    },
    {
      selector: "article.content ul:nth-of-type(2) li:nth-child(7)",
      html: true,
      en: `Hasan Akyer, Ph.D. (2016) - Co-Advisor<br />
            <em>Heuristic Approaches for Optimal Portfolio Management.</em>`,
      tr: `Hasan Akyer, Doktora (2016) - Eş Danışman<br />
            <em>Optimum Portföy Yönetimi için Sezgisel Yaklaşımlar.</em>`
    }
  ],
  "/projects/": [
    { selector: "h1", en: "Projects", tr: "Projeler" },
    { selector: ".subtitle", en: "Funded research projects and grants", tr: "Destekli araştırma projeleri ve fonlar" },
    { selector: "article.content h2:nth-of-type(1)", en: "Research Projects", tr: "Araştırma Projeleri" },
    {
      selector: "article.content ul:nth-of-type(1) li:nth-child(1)",
      html: true,
      en: `<strong>New Models and Solution Approaches for the Sustainable Partial Disassembly Line Balancing Problem</strong>
            (TÜBİTAK 1001 Grant, Turkey, 2024-Ongoing). Principal Investigator.`,
      tr: `<strong>Sürdürülebilir Kısmi Söküm Hattı Dengeleme Problemi için Yeni Modeller ve Çözüm Yaklaşımları</strong>
            (TÜBİTAK 1001 Projesi, Türkiye, 2024-Devam Ediyor). Yürütücü.`
    },
    {
      selector: "article.content ul:nth-of-type(1) li:nth-child(2)",
      html: true,
      en: `<strong>Developing Efficient Routing Algorithms for Sustainable City Logistics</strong>
            (TÜBİTAK 1001 Grant, Turkey, 2019-2022). Principal Investigator.`,
      tr: `<strong>Sürdürülebilir Şehir Lojistiği için Etkin Rotalama Algoritmalarının Geliştirilmesi</strong>
            (TÜBİTAK 1001 Projesi, Türkiye, 2019-2022). Yürütücü.`
    },
    {
      selector: "article.content ul:nth-of-type(1) li:nth-child(3)",
      html: true,
      en: `<strong>An Integrated Model for the Milk Collection Problem and Development of Efficient Solution Approaches</strong>
            (TÜBİTAK 3501 Grant, Turkey, 2018-2020). Project researcher. PI: Dr. Olcay Polat.`,
      tr: `<strong>Süt Toplama Problemi için Bütünleşik Bir Model ve Etkin Çözüm Yaklaşımlarının Geliştirilmesi</strong>
            (TÜBİTAK 3501 Projesi, Türkiye, 2018-2020). Araştırmacı. Proje yürütücüsü: Dr. Olcay Polat.`
    },
    {
      selector: "article.content ul:nth-of-type(1) li:nth-child(4)",
      html: true,
      en: `<strong>Determination of Fatigue Behaviors of Micro-Structure Magnesium Alloy Using Heuristic Algorithms</strong>
            (Pamukkale University Internal Grant, Turkey, 2018-2019). Principal Investigator.`,
      tr: `<strong>Mikro Yapılı Magnezyum Alaşımının Yorulma Davranışlarının Sezgisel Algoritmalar Kullanılarak Belirlenmesi</strong>
            (Pamukkale Üniversitesi BAP Projesi, Türkiye, 2018-2019). Yürütücü.`
    },
    {
      selector: "article.content ul:nth-of-type(1) li:nth-child(5)",
      html: true,
      en: `<strong>Designing Efficient Algorithms for Cardinality-Constrained Portfolio Optimization</strong>
            (TÜBİTAK 3501 Grant, Turkey, 2015-2017). Principal Investigator.`,
      tr: `<strong>Kardinalite Kısıtlı Portföy Optimizasyonu için Etkin Algoritmaların Tasarlanması</strong>
            (TÜBİTAK 3501 Projesi, Türkiye, 2015-2017). Yürütücü.`
    },
    {
      selector: "article.content ul:nth-of-type(1) li:nth-child(6)",
      html: true,
      en: `<strong>Developing Models and Solution Approaches for Vehicle Routing Problems</strong>
            (Pamukkale University Internal Grant, Turkey, 2015-2016). Principal Investigator.`,
      tr: `<strong>Araç Rotalama Problemleri için Model ve Çözüm Yaklaşımlarının Geliştirilmesi</strong>
            (Pamukkale Üniversitesi BAP Projesi, Türkiye, 2015-2016). Yürütücü.`
    },
    {
      selector: "article.content ul:nth-of-type(1) li:nth-child(7)",
      html: true,
      en: `<strong>Solution Approaches for the Feeder Containership Routing Problem</strong>
            (Pamukkale University Internal Grant, Turkey, 2014-2015). Project researcher. PI: Dr. Olcay Polat.`,
      tr: `<strong>Besleyici Konteyner Gemisi Rotalama Problemi için Çözüm Yaklaşımları</strong>
            (Pamukkale Üniversitesi BAP Projesi, Türkiye, 2014-2015). Araştırmacı. Proje yürütücüsü: Dr. Olcay Polat.`
    },
    {
      selector: "article.content ul:nth-of-type(1) li:nth-child(8)",
      html: true,
      en: `<strong>Solving Vehicle Routing Problems with Simultaneous Pickup and Delivery under Time Limits Using Metaheuristics</strong>
            (Pamukkale University Internal Grant, Turkey, 2014-2015). Principal Investigator.`,
      tr: `<strong>Zaman Kısıtları Altında Eşzamanlı Toplama ve Dağıtım İçeren Araç Rotalama Problemlerinin Metasezgisel Yöntemlerle Çözümü</strong>
            (Pamukkale Üniversitesi BAP Projesi, Türkiye, 2014-2015). Yürütücü.`
    }
  ],
  "/experience/": [
    { selector: "h1", en: "Experience", tr: "Deneyim" },
    { selector: ".subtitle", en: "Academic and professional roles", tr: "Akademik ve profesyonel roller" },
    {
      selector: "article.content ul:nth-of-type(1) li:nth-child(1)",
      html: true,
      en: `<strong>Associate Dean</strong>, Faculty of Engineering, Pamukkale University,
            Denizli, Turkey (2021-2022). Led academic planning and quality assurance
            processes and coordinated interdisciplinary collaboration initiatives.`,
      tr: `<strong>Dekan Yardımcısı</strong>, Mühendislik Fakültesi, Pamukkale University,
            Denizli, Türkiye (2021-2022). Akademik planlama ve kalite güvence süreçlerini
            yürüttü, disiplinler arası iş birliği girişimlerini koordine etti.`
    },
    {
      selector: "article.content ul:nth-of-type(1) li:nth-child(2)",
      html: true,
      en: `<strong>Research Consultant</strong>, Zapata Computing, Inc., Boston, MA
            (2021-2022). Contributed to quantum-inspired combinatorial optimization and
            integration of metaheuristic methods.`,
      tr: `<strong>Araştırma Danışmanı</strong>, Zapata Computing, Inc., Boston, MA
            (2021-2022). Kuantumdan ilham alan kombinatoryal optimizasyon ve
            metasezgisel yöntemlerin entegrasyonu alanlarında katkı sundu.`
    },
    {
      selector: "article.content ul:nth-of-type(1) li:nth-child(3)",
      html: true,
      en: `<strong>Teaching Assistant</strong>, College of Engineering, Northeastern University,
            Boston, MA (2010-2011). Supported optimization and algorithmic courses,
            labs, and student projects.`,
      tr: `<strong>Öğretim Asistanı</strong>, College of Engineering, Northeastern University,
            Boston, MA (2010-2011). Optimizasyon ve algoritma derslerini, laboratuvarları
            ve öğrenci projelerini destekledi.`
    },
    {
      selector: "article.content ul:nth-of-type(1) li:nth-child(4)",
      html: true,
      en: `<strong>Research Intern</strong>, Cybernetics and AI Lab, Technical University of
            Košice, Slovakia (Summer 2003). Developed software components for
            intelligent systems.`,
      tr: `<strong>Araştırma Stajyeri</strong>, Cybernetics and AI Lab, Technical University of
            Košice, Slovakya (2003 Yaz Dönemi). Akıllı sistemler için yazılım bileşenleri
            geliştirdi.`
    }
  ],
  "/service/": [
    { selector: "h1", en: "Service & Awards", tr: "Hizmet ve Ödüller" },
    { selector: ".subtitle", en: "Academic service, reviewing, and recognitions", tr: "Akademik hizmet, hakemlik ve ödüller" },
    { selector: "article.content h2:nth-of-type(1)", en: "Academic Service", tr: "Akademik Hizmetler" },
    { selector: "article.content h2:nth-of-type(2)", en: "Scholarships and Awards", tr: "Burslar ve Ödüller" },
    { selector: "article.content h2:nth-of-type(3)", en: "Editorial and Peer Review Activities", tr: "Editörlük ve Hakemlik Faaliyetleri" },
    {
      selector: "article.content ul:nth-of-type(1) li:nth-child(1)",
      html: true,
      en: `<strong>TÜBİTAK Project Evaluator and Panelist</strong>,
            Department of Industrial Engineering, Pamukkale University (2015-Ongoing).
            Served as panelist and external referee for over 100 research proposals.`,
      tr: `<strong>TÜBİTAK Proje Değerlendiricisi ve Panelisti</strong>,
            Endüstri Mühendisliği Bölümü, Pamukkale University (2015-Devam Ediyor).
            100'den fazla araştırma önerisinde panelist ve dış hakem olarak görev yaptı.`
    },
    {
      selector: "article.content ul:nth-of-type(1) li:nth-child(2)",
      html: true,
      en: `<strong>Erasmus+ Departmental Coordinator</strong>,
            Department of Industrial Engineering, Pamukkale University (2018-Ongoing).
            Managed Erasmus+ mobility programs, equivalency, and advising.`,
      tr: `<strong>Erasmus+ Bölüm Koordinatörü</strong>,
            Endüstri Mühendisliği Bölümü, Pamukkale University (2018-Devam Ediyor).
            Erasmus+ hareketlilik programları, ders eşdeğerliği ve danışmanlık süreçlerini yönetti.`
    },
    {
      selector: "article.content ul:nth-of-type(2) li:nth-child(1)",
      en: "Included in the World's Top 2% of Scientists list (Stanford University / Elsevier), 2021-2024.",
      tr: "Dünyanın En Etkili %2 Bilim İnsanı listesinde yer alma (Stanford University / Elsevier), 2021-2024."
    },
    {
      selector: "article.content ul:nth-of-type(2) li:nth-child(2)",
      en: "Citation Award recipient at Pamukkale University Annual Prize-Giving Ceremony, 2019.",
      tr: "Pamukkale University Yıllık Ödül Töreni Atıf Ödülü, 2019."
    },
    {
      selector: "article.content ul:nth-of-type(2) li:nth-child(3)",
      en: "Bronze Medal, Metaheuristics Competition at MESS, Italy, 2018.",
      tr: "MESS, İtalya Metaheuristics Competition, Bronz Madalya, 2018."
    },
    {
      selector: "article.content ul:nth-of-type(2) li:nth-child(4)",
      en: "Fully funded Ph.D. scholarship from Council of Higher Education (YÖK), 2008-2012.",
      tr: "Yükseköğretim Kurulu (YÖK) tam burslu doktora bursu, 2008-2012."
    },
    {
      selector: "article.content ul:nth-of-type(2) li:nth-child(5)",
      en: "Graduated with High Honors, Sakarya University, 2005.",
      tr: "Sakarya University, Yüksek Onur Derecesi ile Mezuniyet, 2005."
    },
    { selector: "article.content p:nth-of-type(2) strong", en: "Elsevier Journals", tr: "Elsevier Dergileri" },
    { selector: "article.content p:nth-of-type(3) strong", en: "Springer Journals", tr: "Springer Dergileri" },
    { selector: "article.content p:nth-of-type(4) strong", en: "Taylor & Francis Journals", tr: "Taylor & Francis Dergileri" },
    { selector: "article.content p:nth-of-type(5) strong", en: "Emerald Journals", tr: "Emerald Dergileri" }
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
  switchNode.setAttribute("aria-label", lang === "tr" ? "Dil seçimi" : "Language switch");

  applyTranslations(sharedTranslations, lang);

  document.querySelectorAll("[data-i18n-en][data-i18n-tr]").forEach((node) => {
    const translated = lang === "tr" ? node.dataset.i18nTr : node.dataset.i18nEn;
    node.textContent = translated;
  });

  const path = normalizePath(window.location.pathname);
  applyHeadTranslations(path, lang);
  const pageMap = pageTranslations[path] || [];
  applyTranslations(pageMap, lang);

  const searchInput = document.getElementById("pub-search");
  if (searchInput) {
    searchInput.placeholder = lang === "tr" ? "Başlık, yazar, dergi" : "Title, author, journal";
    updatePubCountLabel(lang);
  }

  updatePublicationSubtitle(lang);
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

function applyTranslations(entries, lang) {
  entries.forEach((entry) => {
    const targets = entry.all
      ? Array.from(document.querySelectorAll(entry.selector))
      : [document.querySelector(entry.selector)];

    targets.filter(Boolean).forEach((target) => {
      const value = lang === "tr" ? entry.tr : entry.en;
      if (entry.attr) {
        target.setAttribute(entry.attr, value);
        return;
      }
      if (entry.html) {
        target.innerHTML = value;
        return;
      }
      target.textContent = value;
    });
  });
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

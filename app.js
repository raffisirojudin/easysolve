// APP.JS — EasySolve (7 Kategori)

function showPage(pageId) {
  document.querySelectorAll(".page").forEach((p) => {
    p.classList.remove("active");
    p.classList.add("hidden");
  });
  const target = document.getElementById("page-" + pageId);
  if (target) {
    target.classList.remove("hidden");
    target.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  if (pageId === "history") DOMRenderer.renderHistory();
}

function showCategoryPage(category) {
  showPage("category");
  const meta = {
    matematika: {
      emoji: "📐",
      title: "Matematika",
      desc: "Bangun datar, ruang, trigonometri, statistik & aljabar lengkap.",
    },
    fisika: {
      emoji: "⚡",
      title: "Fisika",
      desc: "Gerak, gaya, energi, listrik, gelombang, fluida & termodinamika.",
    },
    kimia: {
      emoji: "🧪",
      title: "Kimia",
      desc: "Stoikiometri, larutan, asam-basa, gas ideal, kinetika & termokimia.",
    },
    biologi: {
      emoji: "🌿",
      title: "Biologi",
      desc: "IMT, denyut nadi, ekologi populasi, keanekaragaman & fisiologi.",
    },
    konversi: {
      emoji: "🔄",
      title: "Konversi",
      desc: "Suhu, panjang, berat, waktu, luas, volume, energi & tekanan.",
    },
    keuangan: {
      emoji: "💰",
      title: "Keuangan",
      desc: "Bunga, diskon, untung-rugi, pajak, kredit, BEP & ROI.",
    },
    geografi: {
      emoji: "🌍",
      title: "Geografi",
      desc: "Skala peta, kepadatan penduduk, demografi, jarak & zona waktu.",
    },
  };
  const info = meta[category] || { emoji: "", title: category, desc: "" };
  document.getElementById("category-page-title").textContent =
    info.emoji + " " + info.title;
  document.getElementById("category-page-desc").textContent = info.desc;
  document.getElementById("cat-breadcrumb-name").textContent = info.title;
  DOMRenderer.renderFormulaCards(
    CalculatorEngine.getByCategory(category),
    "category-formula-grid",
  );
}

function setNavActive(btn) {
  document
    .querySelectorAll(".nav-btn")
    .forEach((b) => b.classList.remove("active"));
  if (btn) btn.classList.add("active");
}
function closeMobileNav() {
  document.getElementById("mobile-nav").classList.add("hidden");
}
function clearHistory() {
  HistoryManager.clear();
  DOMRenderer.renderHistory();
}

function initSearch() {
  const inp = document.getElementById("global-search");
  const clr = document.getElementById("search-clear-btn");
  const cnt = document.getElementById("search-results-count");
  inp.addEventListener("input", () => {
    const kw = inp.value.trim();
    if (!kw) {
      clr.style.opacity = "0";
      cnt.classList.add("hidden");
      document.getElementById("home-list-title").textContent = "🔥 Semua Rumus";
      document.getElementById("home-list-subtitle").textContent =
        "Klik kartu untuk membuka kalkulator";
      DOMRenderer.renderFormulaCards(FORMULA_DB, "home-formula-grid");
    } else {
      clr.style.opacity = "1";
      const res = CalculatorEngine.search(kw);
      document.getElementById("home-list-title").textContent =
        '🔍 Hasil: "' + kw + '"';
      document.getElementById("home-list-subtitle").textContent = "";
      cnt.textContent = res.length + " rumus ditemukan";
      cnt.classList.remove("hidden");
      DOMRenderer.renderFormulaCards(res, "home-formula-grid");
    }
  });
  clr.addEventListener("click", () => {
    inp.value = "";
    inp.dispatchEvent(new Event("input"));
    inp.focus();
  });
}

function initHamburger() {
  const btn = document.getElementById("hamburger"),
    menu = document.getElementById("mobile-nav");
  if (btn && menu)
    btn.addEventListener("click", () => menu.classList.toggle("hidden"));
}

document.addEventListener("DOMContentLoaded", () => {
  [
    "matematika",
    "fisika",
    "kimia",
    "biologi",
    "konversi",
    "keuangan",
    "geografi",
  ].forEach((cat) => {
    const el = document.getElementById("count-" + cat);
    if (el)
      el.textContent =
        FORMULA_DB.filter((f) => f.category === cat).length + " rumus";
  });
  DOMRenderer.renderFormulaCards(FORMULA_DB, "home-formula-grid");
  initSearch();
  initHamburger();
});

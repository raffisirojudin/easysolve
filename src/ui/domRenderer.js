// =============================================
// DOM RENDERER + HISTORY — EasySolve
// Update tampilan HTML & kelola riwayat
// =============================================

// ─── HISTORY (Local Storage) ─────────────────
const HistoryManager = (() => {
  const KEY = "easysolve_history";
  const MAX = 10;

  function getAll() {
    try {
      return JSON.parse(localStorage.getItem(KEY)) || [];
    } catch {
      return [];
    }
  }

  function add(entry) {
    const history = getAll();
    history.unshift({
      ...entry,
      timestamp: new Date().toLocaleString("id-ID"),
    });
    if (history.length > MAX) history.pop();
    localStorage.setItem(KEY, JSON.stringify(history));
  }

  function clear() {
    localStorage.removeItem(KEY);
  }

  return { getAll, add, clear };
})();

// ─── DOM RENDERER ────────────────────────────
const DOMRenderer = (() => {
  /** Render kartu-kartu rumus ke container grid */
  function renderFormulaCards(formulas, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = "";

    if (formulas.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <span class="empty-icon">🔍</span>
          <p>Rumus tidak ditemukan. Coba kata kunci lain.</p>
        </div>`;
      return;
    }

    formulas.forEach((f) => {
      const card = document.createElement("div");
      card.className = "formula-card";
      card.dataset.id = f.id;
      card.innerHTML = `
        <div class="card-icon">${f.icon}</div>
        <div class="card-body">
          <span class="card-badge">${f.subcategory}</span>
          <h3 class="card-title">${f.name}</h3>
          <p class="card-desc">${f.description}</p>
        </div>
        <div class="card-arrow">→</div>`;
      card.addEventListener("click", () => openCalculator(f.id));
      container.appendChild(card);
    });
  }

  /** Render modal kalkulator untuk rumus tertentu */
  function openCalculator(formulaId) {
    const formula = FORMULA_DB.find((f) => f.id === formulaId);
    if (!formula) return;

    const modal = document.getElementById("calculator-modal");
    const content = document.getElementById("modal-content");

    // Build input fields HTML
    const fields = formula.variables
      .map((v) => {
        if (v.type === "select") {
          const options = v.options
            .map((o) => `<option value="${o}">${o}</option>`)
            .join("");
          return `
          <div class="field-group">
            <label for="inp-${v.key}">${v.label}</label>
            <select id="inp-${v.key}" data-key="${v.key}" class="calc-input">
              ${options}
            </select>
          </div>`;
        }
        return `
        <div class="field-group">
          <label for="inp-${v.key}">${v.label}${v.unit ? ` <span class="unit-tag">${v.unit}</span>` : ""}</label>
          <input
            type="${v.key === "data" ? "text" : "number"}"
            id="inp-${v.key}"
            data-key="${v.key}"
            class="calc-input"
            placeholder="${v.placeholder}"
            step="any"
          />
        </div>`;
      })
      .join("");

    content.innerHTML = `
      <div class="modal-header">
        <div>
          <span class="modal-badge">${formula.category} · ${formula.subcategory}</span>
          <h2 class="modal-title"><span class="modal-icon">${formula.icon}</span> ${formula.name}</h2>
          <p class="modal-desc">${formula.description}</p>
        </div>
        <button class="modal-close" id="modal-close-btn" aria-label="Tutup">✕</button>
      </div>

      <div class="formula-display">
        <div class="formula-latex" id="formula-latex-render"></div>
        <div class="formula-raw">${formula.latexFormula.replace(/\\/g, "")}</div>
      </div>

      <div class="input-section">
        <h4 class="section-label">📥 Masukkan Variabel</h4>
        <div class="fields-grid">${fields}</div>
      </div>

      <div class="calc-actions">
        <button class="btn-primary" id="btn-hitung">
          <span>🧮</span> Hitung Sekarang
        </button>
        <button class="btn-secondary" id="btn-reset">Reset</button>
      </div>

      <div id="result-section" class="result-section hidden">
        <div class="result-header">✅ Hasil Perhitungan</div>
        <div id="result-output" class="result-output"></div>
        <button class="btn-copy" id="btn-copy">📋 Salin Hasil</button>
      </div>

      <div id="steps-section" class="steps-section hidden">
        <div class="steps-toggle" id="steps-toggle">
          📖 Lihat Langkah-langkah Pengerjaan <span class="toggle-arrow">▾</span>
        </div>
        <div id="steps-content" class="steps-content"></div>
      </div>`;

    modal.classList.remove("hidden");
    modal.classList.add("visible");
    document.body.style.overflow = "hidden";

    // Render LaTeX with KaTeX
    try {
      katex.render(
        formula.latexFormula,
        document.getElementById("formula-latex-render"),
        {
          throwOnError: false,
          displayMode: true,
        },
      );
    } catch (e) {
      document.getElementById("formula-latex-render").textContent =
        formula.latexFormula;
    }

    // Event: Tutup modal
    document
      .getElementById("modal-close-btn")
      .addEventListener("click", closeCalculator);
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeCalculator();
    });

    // Event: Hitung
    document.getElementById("btn-hitung").addEventListener("click", () => {
      const values = collectInputValues(formula.variables);
      runCalculation(formula, values);
    });

    // Live: hitung saat mengetik
    content.querySelectorAll(".calc-input").forEach((inp) => {
      inp.addEventListener("input", () => {
        const values = collectInputValues(formula.variables);
        const allFilled = formula.variables.every((v) => {
          const val = values[v.key];
          return val !== undefined && val !== null && String(val).trim() !== "";
        });
        if (allFilled) runCalculation(formula, values);
      });
    });

    // Event: Reset
    document.getElementById("btn-reset").addEventListener("click", () => {
      content.querySelectorAll(".calc-input").forEach((inp) => {
        if (inp.tagName === "SELECT") inp.selectedIndex = 0;
        else inp.value = "";
      });
      document.getElementById("result-section").classList.add("hidden");
      document.getElementById("steps-section").classList.add("hidden");
    });
  }

  function collectInputValues(variables) {
    const values = {};
    variables.forEach((v) => {
      const el = document.getElementById(`inp-${v.key}`);
      if (el) values[v.key] = el.value;
    });
    return values;
  }

  function runCalculation(formula, values) {
    const resultSection = document.getElementById("result-section");
    const resultOutput = document.getElementById("result-output");
    const stepsSection = document.getElementById("steps-section");
    const stepsContent = document.getElementById("steps-content");
    const copyBtn = document.getElementById("btn-copy");

    try {
      const { result, steps } = CalculatorEngine.run(formula.id, values);

      // Render result
      let resultHTML = "";
      if (result.multiValue) {
        resultHTML = result.multiValue
          .map(
            (r) => `
          <div class="result-row">
            <span class="result-label">${r.label}</span>
            <span class="result-value">${Formatter.formatNumber(r.value)} <span class="result-unit">${r.unit}</span></span>
          </div>`,
          )
          .join("");
      } else {
        resultHTML = `
          <div class="result-main">
            <span class="result-number">${Formatter.formatNumber(result.value)}</span>
            <span class="result-unit-main">${result.unit}</span>
          </div>`;
      }

      resultOutput.innerHTML = resultHTML;
      resultSection.classList.remove("hidden");
      resultSection.classList.add("pop-in");

      // Steps
      stepsContent.innerHTML = steps
        .map(
          (s, i) => `
        <div class="step-item">
          <span class="step-num">${i + 1}</span>
          <span class="step-text">${s}</span>
        </div>`,
        )
        .join("");
      stepsSection.classList.remove("hidden");

      // Steps toggle
      const toggle = document.getElementById("steps-toggle");
      const content = document.getElementById("steps-content");
      content.classList.remove("open");
      toggle.onclick = () => {
        content.classList.toggle("open");
        toggle.querySelector(".toggle-arrow").textContent =
          content.classList.contains("open") ? "▴" : "▾";
      };

      // Copy to clipboard
      const copyText = result.multiValue
        ? result.multiValue
            .map(
              (r) => `${r.label}: ${Formatter.formatNumber(r.value)} ${r.unit}`,
            )
            .join(" | ")
        : `${formula.name}: ${Formatter.formatNumber(result.value)} ${result.unit}`;

      copyBtn.onclick = () => {
        navigator.clipboard.writeText(copyText).then(() => {
          copyBtn.textContent = "✅ Tersalin!";
          setTimeout(() => (copyBtn.textContent = "📋 Salin Hasil"), 2000);
        });
      };

      // Save to history
      HistoryManager.add({
        formulaId: formula.id,
        name: formula.name,
        result: copyText,
        values,
      });
      renderHistory();
    } catch (err) {
      resultOutput.innerHTML = `<div class="result-error">⚠️ ${err.message}</div>`;
      resultSection.classList.remove("hidden");
      stepsSection.classList.add("hidden");
    }
  }

  function closeCalculator() {
    const modal = document.getElementById("calculator-modal");
    modal.classList.remove("visible");
    modal.classList.add("hidden");
    document.body.style.overflow = "";
  }

  function renderHistory() {
    const container = document.getElementById("history-list");
    if (!container) return;
    const history = HistoryManager.getAll();

    if (history.length === 0) {
      container.innerHTML = `<p class="history-empty">Belum ada perhitungan.</p>`;
      return;
    }

    container.innerHTML = history
      .map(
        (h) => `
      <div class="history-item" data-id="${h.formulaId}">
        <div class="history-name">${h.name}</div>
        <div class="history-result">${h.result}</div>
        <div class="history-time">${h.timestamp}</div>
      </div>`,
      )
      .join("");

    container.querySelectorAll(".history-item").forEach((el) => {
      el.addEventListener("click", () => openCalculator(el.dataset.id));
    });
  }

  return { renderFormulaCards, openCalculator, renderHistory, closeCalculator };
})();

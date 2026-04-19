// =============================================
// CALCULATOR ENGINE — EasySolve
// Mesin utama yang memproses semua rumus
// =============================================

const CalculatorEngine = (() => {
  /**
   * Jalankan formula berdasarkan ID dan nilai variabel dari input user.
   * @param {string} formulaId - ID rumus dari FORMULA_DB
   * @param {Object} values    - Nilai variabel { key: value }
   * @returns {{ result: object, steps: string[] }}
   */
  function run(formulaId, values) {
    const formula = FORMULA_DB.find((f) => f.id === formulaId);
    if (!formula)
      throw new Error(`Rumus dengan ID "${formulaId}" tidak ditemukan.`);

    // Validasi semua variabel terisi
    const missingVars = formula.variables.filter((v) => {
      const val = values[v.key];
      return val === undefined || val === null || String(val).trim() === "";
    });
    if (missingVars.length > 0) {
      throw new Error(
        `Isi semua kolom: ${missingVars.map((v) => v.label).join(", ")}`,
      );
    }

    // Validasi angka (kecuali select dan data statistik)
    for (const variable of formula.variables) {
      if (variable.type === "select") continue;
      if (variable.key === "data") continue; // statistik multi-value
      const sanitized = Validator.sanitizeNumber(values[variable.key]);
      if (!Validator.isValid(sanitized)) {
        throw new Error(
          `Nilai "${variable.label}" harus berupa angka yang valid.`,
        );
      }
    }

    const result = formula.calculate(values);
    const steps = formula.steps(values);

    return { result, steps };
  }

  /**
   * Cari rumus berdasarkan keyword (nama / kategori / subkategori)
   */
  function search(keyword) {
    if (!keyword || keyword.trim() === "") return FORMULA_DB;
    const kw = keyword.toLowerCase().trim();
    return FORMULA_DB.filter(
      (f) =>
        f.name.toLowerCase().includes(kw) ||
        f.category.toLowerCase().includes(kw) ||
        f.subcategory.toLowerCase().includes(kw) ||
        f.description.toLowerCase().includes(kw),
    );
  }

  /**
   * Ambil semua rumus dalam kategori tertentu
   */
  function getByCategory(cat) {
    if (!cat || cat === "semua") return FORMULA_DB;
    return FORMULA_DB.filter((f) => f.category === cat);
  }

  return { run, search, getByCategory };
})();

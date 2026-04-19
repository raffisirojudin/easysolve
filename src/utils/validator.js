// =============================================
// VALIDATOR — EasySolve
// Validasi & sanitasi input dari pengguna
// =============================================

const Validator = (() => {
  /** Ubah string ke float, return NaN jika tidak valid */
  function sanitizeNumber(val) {
    if (val === null || val === undefined) return NaN;
    const cleaned = String(val).replace(/,/g, ".").trim();
    return parseFloat(cleaned);
  }

  /** Cek apakah nilai adalah angka yang valid (bukan NaN / Infinity) */
  function isValid(val) {
    return typeof val === "number" && isFinite(val) && !isNaN(val);
  }

  /** Cek pembagian oleh nol */
  function notZero(val, label = "Nilai") {
    if (parseFloat(val) === 0)
      throw new Error(`${label} tidak boleh nol (pembagian dengan nol)`);
  }

  /** Cek akar negatif */
  function notNegative(val, label = "Nilai") {
    if (parseFloat(val) < 0)
      throw new Error(`${label} tidak boleh negatif (akar negatif)`);
  }

  return { sanitizeNumber, isValid, notZero, notNegative };
})();

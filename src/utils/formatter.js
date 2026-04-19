// =============================================
// FORMATTER — EasySolve
// Mempercantik angka untuk ditampilkan di UI
// =============================================

const Formatter = (() => {
  /**
   * Format angka dengan mempertimbangkan desimal:
   * - Angka bulat → tampilkan bulat
   * - Desimal pendek → 4 digit
   * - Sangat besar/kecil → notasi ilmiah
   */
  function formatNumber(num) {
    if (!isFinite(num))
      return num === Infinity ? "∞ (tak hingga)" : "Tidak terdefinisi";
    if (isNaN(num)) return "Tidak valid (NaN)";

    const abs = Math.abs(num);

    // Bilangan bulat persis
    if (Number.isInteger(num)) return num.toLocaleString("id-ID");

    // Sangat kecil atau sangat besar → notasi ilmiah
    if (abs < 0.0001 || abs > 1e9) return num.toExponential(4);

    // Default: maksimal 6 digit desimal, hapus trailing zero
    return parseFloat(num.toFixed(6)).toLocaleString("id-ID", {
      maximumFractionDigits: 6,
    });
  }

  /** Format label kategori jadi Title Case */
  function formatCategory(cat) {
    return cat.charAt(0).toUpperCase() + cat.slice(1);
  }

  return { formatNumber, formatCategory };
})();

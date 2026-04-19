// =============================================
// FORMULA DATABASE — EasySolve ULTIMATE
// 120+ Rumus | 7 Kategori Lengkap
// matematika, fisika, kimia, biologi,
// konversi, keuangan, geografi
// =============================================

const FORMULA_DB = [
  // ════════════════════════════════════════════
  // 📐 MATEMATIKA — BANGUN DATAR
  // ════════════════════════════════════════════

  {
    id: "mat-001",
    name: "Luas Segitiga",
    category: "matematika",
    subcategory: "Bangun Datar",
    icon: "△",
    description: "Menghitung luas segitiga dari alas dan tinggi.",
    latexFormula: "L = \\frac{1}{2} \\times a \\times t",
    variables: [
      {
        key: "alas",
        label: "Alas (a)",
        unit: "satuan",
        placeholder: "cth: 10",
      },
      {
        key: "tinggi",
        label: "Tinggi (t)",
        unit: "satuan",
        placeholder: "cth: 6",
      },
    ],
    calculate(v) {
      return {
        value: 0.5 * parseFloat(v.alas) * parseFloat(v.tinggi),
        unit: "satuan²",
      };
    },
    steps(v) {
      const a = parseFloat(v.alas),
        t = parseFloat(v.tinggi);
      return [
        `Diketahui: a=${a}, t=${t}`,
        `L = ½ × ${a} × ${t} = ${0.5 * a * t} satuan²`,
      ];
    },
  },
  {
    id: "mat-002",
    name: "Luas Persegi Panjang",
    category: "matematika",
    subcategory: "Bangun Datar",
    icon: "▭",
    description: "Menghitung luas persegi panjang.",
    latexFormula: "L = p \\times l",
    variables: [
      {
        key: "panjang",
        label: "Panjang (p)",
        unit: "satuan",
        placeholder: "cth: 12",
      },
      {
        key: "lebar",
        label: "Lebar (l)",
        unit: "satuan",
        placeholder: "cth: 5",
      },
    ],
    calculate(v) {
      return {
        value: parseFloat(v.panjang) * parseFloat(v.lebar),
        unit: "satuan²",
      };
    },
    steps(v) {
      const p = parseFloat(v.panjang),
        l = parseFloat(v.lebar);
      return [`L = p × l = ${p} × ${l} = ${p * l} satuan²`];
    },
  },
  {
    id: "mat-003",
    name: "Luas Lingkaran",
    category: "matematika",
    subcategory: "Bangun Datar",
    icon: "○",
    description: "Menghitung luas lingkaran dari jari-jari.",
    latexFormula: "L = \\pi r^2",
    variables: [
      {
        key: "r",
        label: "Jari-jari (r)",
        unit: "satuan",
        placeholder: "cth: 7",
      },
    ],
    calculate(v) {
      const r = parseFloat(v.r);
      return { value: Math.PI * r * r, unit: "satuan²" };
    },
    steps(v) {
      const r = parseFloat(v.r);
      return [
        `L = π × r² = 3.14159 × ${r * r} ≈ ${(Math.PI * r * r).toFixed(4)} satuan²`,
      ];
    },
  },
  {
    id: "mat-004",
    name: "Keliling Lingkaran",
    category: "matematika",
    subcategory: "Bangun Datar",
    icon: "◎",
    description: "Menghitung keliling lingkaran.",
    latexFormula: "K = 2\\pi r",
    variables: [
      {
        key: "r",
        label: "Jari-jari (r)",
        unit: "satuan",
        placeholder: "cth: 7",
      },
    ],
    calculate(v) {
      return { value: 2 * Math.PI * parseFloat(v.r), unit: "satuan" };
    },
    steps(v) {
      const r = parseFloat(v.r);
      return [`K = 2 × π × ${r} ≈ ${(2 * Math.PI * r).toFixed(4)} satuan`];
    },
  },
  {
    id: "mat-005",
    name: "Teorema Pythagoras",
    category: "matematika",
    subcategory: "Bangun Datar",
    icon: "⊿",
    description: "Mencari sisi miring dari dua sisi siku-siku.",
    latexFormula: "c = \\sqrt{a^2 + b^2}",
    variables: [
      { key: "a", label: "Sisi a", unit: "satuan", placeholder: "cth: 3" },
      { key: "b", label: "Sisi b", unit: "satuan", placeholder: "cth: 4" },
    ],
    calculate(v) {
      const a = parseFloat(v.a),
        b = parseFloat(v.b);
      return { value: Math.sqrt(a * a + b * b), unit: "satuan" };
    },
    steps(v) {
      const a = parseFloat(v.a),
        b = parseFloat(v.b);
      return [
        `c² = ${a}² + ${b}² = ${a * a + b * b}`,
        `c = √${a * a + b * b} ≈ ${Math.sqrt(a * a + b * b).toFixed(4)} satuan`,
      ];
    },
  },
  {
    id: "mat-006",
    name: "Luas Trapesium",
    category: "matematika",
    subcategory: "Bangun Datar",
    icon: "⏢",
    description: "Luas trapesium dari dua sisi sejajar dan tinggi.",
    latexFormula: "L = \\frac{(a+b)}{2} \\times t",
    variables: [
      { key: "a", label: "Sisi a", unit: "satuan", placeholder: "cth: 8" },
      { key: "b", label: "Sisi b", unit: "satuan", placeholder: "cth: 5" },
      {
        key: "tinggi",
        label: "Tinggi (t)",
        unit: "satuan",
        placeholder: "cth: 4",
      },
    ],
    calculate(v) {
      const a = parseFloat(v.a),
        b = parseFloat(v.b),
        t = parseFloat(v.tinggi);
      return { value: ((a + b) / 2) * t, unit: "satuan²" };
    },
    steps(v) {
      const a = parseFloat(v.a),
        b = parseFloat(v.b),
        t = parseFloat(v.tinggi);
      return [`L = ½ × (${a}+${b}) × ${t} = ${((a + b) / 2) * t} satuan²`];
    },
  },
  {
    id: "mat-007",
    name: "Luas Jajargenjang",
    category: "matematika",
    subcategory: "Bangun Datar",
    icon: "▱",
    description: "Luas jajargenjang dari alas dan tinggi.",
    latexFormula: "L = a \\times t",
    variables: [
      { key: "alas", label: "Alas (a)", unit: "satuan", placeholder: "cth: 8" },
      {
        key: "tinggi",
        label: "Tinggi (t)",
        unit: "satuan",
        placeholder: "cth: 5",
      },
    ],
    calculate(v) {
      return {
        value: parseFloat(v.alas) * parseFloat(v.tinggi),
        unit: "satuan²",
      };
    },
    steps(v) {
      const a = parseFloat(v.alas),
        t = parseFloat(v.tinggi);
      return [`L = a × t = ${a} × ${t} = ${a * t} satuan²`];
    },
  },
  {
    id: "mat-008",
    name: "Luas Belah Ketupat",
    category: "matematika",
    subcategory: "Bangun Datar",
    icon: "◆",
    description: "Luas belah ketupat dari dua diagonal.",
    latexFormula: "L = \\frac{d_1 \\times d_2}{2}",
    variables: [
      {
        key: "d1",
        label: "Diagonal 1",
        unit: "satuan",
        placeholder: "cth: 10",
      },
      { key: "d2", label: "Diagonal 2", unit: "satuan", placeholder: "cth: 8" },
    ],
    calculate(v) {
      return {
        value: (parseFloat(v.d1) * parseFloat(v.d2)) / 2,
        unit: "satuan²",
      };
    },
    steps(v) {
      const d1 = parseFloat(v.d1),
        d2 = parseFloat(v.d2);
      return [`L = (${d1} × ${d2}) / 2 = ${(d1 * d2) / 2} satuan²`];
    },
  },
  {
    id: "mat-009",
    name: "Luas Layang-layang",
    category: "matematika",
    subcategory: "Bangun Datar",
    icon: "◇",
    description: "Luas layang-layang dari dua diagonal.",
    latexFormula: "L = \\frac{d_1 \\times d_2}{2}",
    variables: [
      {
        key: "d1",
        label: "Diagonal 1",
        unit: "satuan",
        placeholder: "cth: 12",
      },
      { key: "d2", label: "Diagonal 2", unit: "satuan", placeholder: "cth: 6" },
    ],
    calculate(v) {
      return {
        value: (parseFloat(v.d1) * parseFloat(v.d2)) / 2,
        unit: "satuan²",
      };
    },
    steps(v) {
      const d1 = parseFloat(v.d1),
        d2 = parseFloat(v.d2);
      return [`L = (${d1} × ${d2}) / 2 = ${(d1 * d2) / 2} satuan²`];
    },
  },
  {
    id: "mat-010",
    name: "Luas Persegi",
    category: "matematika",
    subcategory: "Bangun Datar",
    icon: "■",
    description: "Luas persegi dari sisinya.",
    latexFormula: "L = s^2",
    variables: [
      { key: "s", label: "Sisi (s)", unit: "satuan", placeholder: "cth: 7" },
    ],
    calculate(v) {
      const s = parseFloat(v.s);
      return { value: s * s, unit: "satuan²" };
    },
    steps(v) {
      const s = parseFloat(v.s);
      return [`L = s² = ${s}² = ${s * s} satuan²`];
    },
  },
  {
    id: "mat-011",
    name: "Keliling Persegi Panjang",
    category: "matematika",
    subcategory: "Bangun Datar",
    icon: "□",
    description: "Keliling persegi panjang.",
    latexFormula: "K = 2(p + l)",
    variables: [
      {
        key: "panjang",
        label: "Panjang (p)",
        unit: "satuan",
        placeholder: "cth: 10",
      },
      {
        key: "lebar",
        label: "Lebar (l)",
        unit: "satuan",
        placeholder: "cth: 6",
      },
    ],
    calculate(v) {
      return {
        value: 2 * (parseFloat(v.panjang) + parseFloat(v.lebar)),
        unit: "satuan",
      };
    },
    steps(v) {
      const p = parseFloat(v.panjang),
        l = parseFloat(v.lebar);
      return [`K = 2 × (${p}+${l}) = ${2 * (p + l)} satuan`];
    },
  },
  {
    id: "mat-012",
    name: "Keliling Segitiga",
    category: "matematika",
    subcategory: "Bangun Datar",
    icon: "△",
    description: "Keliling segitiga dari tiga sisinya.",
    latexFormula: "K = a + b + c",
    variables: [
      { key: "a", label: "Sisi a", unit: "satuan", placeholder: "cth: 3" },
      { key: "b", label: "Sisi b", unit: "satuan", placeholder: "cth: 4" },
      { key: "c", label: "Sisi c", unit: "satuan", placeholder: "cth: 5" },
    ],
    calculate(v) {
      return {
        value: parseFloat(v.a) + parseFloat(v.b) + parseFloat(v.c),
        unit: "satuan",
      };
    },
    steps(v) {
      const a = parseFloat(v.a),
        b = parseFloat(v.b),
        c = parseFloat(v.c);
      return [`K = ${a} + ${b} + ${c} = ${a + b + c} satuan`];
    },
  },
  {
    id: "mat-013",
    name: "Luas Segi Enam Beraturan",
    category: "matematika",
    subcategory: "Bangun Datar",
    icon: "⬡",
    description: "Luas heksagon beraturan dari panjang sisi.",
    latexFormula: "L = \\frac{3\\sqrt{3}}{2} s^2",
    variables: [
      {
        key: "s",
        label: "Panjang Sisi (s)",
        unit: "satuan",
        placeholder: "cth: 6",
      },
    ],
    calculate(v) {
      const s = parseFloat(v.s);
      return { value: ((3 * Math.sqrt(3)) / 2) * s * s, unit: "satuan²" };
    },
    steps(v) {
      const s = parseFloat(v.s);
      return [
        `L = (3√3/2) × ${s}² ≈ ${(((3 * Math.sqrt(3)) / 2) * s * s).toFixed(4)} satuan²`,
      ];
    },
  },
  {
    id: "mat-014",
    name: "Luas Segitiga (Heron)",
    category: "matematika",
    subcategory: "Bangun Datar",
    icon: "△",
    description: "Luas segitiga jika diketahui ketiga sisinya (Rumus Heron).",
    latexFormula: "L = \\sqrt{s(s-a)(s-b)(s-c)}",
    variables: [
      { key: "a", label: "Sisi a", unit: "satuan", placeholder: "cth: 5" },
      { key: "b", label: "Sisi b", unit: "satuan", placeholder: "cth: 6" },
      { key: "c", label: "Sisi c", unit: "satuan", placeholder: "cth: 7" },
    ],
    calculate(v) {
      const a = parseFloat(v.a),
        b = parseFloat(v.b),
        c = parseFloat(v.c),
        s = (a + b + c) / 2;
      const L = Math.sqrt(s * (s - a) * (s - b) * (s - c));
      return { value: L, unit: "satuan²" };
    },
    steps(v) {
      const a = parseFloat(v.a),
        b = parseFloat(v.b),
        c = parseFloat(v.c),
        s = (a + b + c) / 2;
      return [
        `s = (a+b+c)/2 = (${a}+${b}+${c})/2 = ${s}`,
        `L = √(${s}×${s - a}×${s - b}×${s - c}) ≈ ${Math.sqrt(s * (s - a) * (s - b) * (s - c)).toFixed(4)} satuan²`,
      ];
    },
  },

  // ════════════════════════════════════════════
  // 📐 MATEMATIKA — BANGUN RUANG
  // ════════════════════════════════════════════

  {
    id: "mat-020",
    name: "Volume Kubus",
    category: "matematika",
    subcategory: "Bangun Ruang",
    icon: "⬛",
    description: "Volume kubus dari sisinya.",
    latexFormula: "V = s^3",
    variables: [
      { key: "s", label: "Sisi (s)", unit: "satuan", placeholder: "cth: 5" },
    ],
    calculate(v) {
      const s = parseFloat(v.s);
      return { value: s ** 3, unit: "satuan³" };
    },
    steps(v) {
      const s = parseFloat(v.s);
      return [`V = s³ = ${s}³ = ${s ** 3} satuan³`];
    },
  },
  {
    id: "mat-021",
    name: "Luas Permukaan Kubus",
    category: "matematika",
    subcategory: "Bangun Ruang",
    icon: "⬛",
    description: "Luas permukaan kubus.",
    latexFormula: "LP = 6s^2",
    variables: [
      { key: "s", label: "Sisi (s)", unit: "satuan", placeholder: "cth: 5" },
    ],
    calculate(v) {
      const s = parseFloat(v.s);
      return { value: 6 * s * s, unit: "satuan²" };
    },
    steps(v) {
      const s = parseFloat(v.s);
      return [`LP = 6 × s² = 6 × ${s * s} = ${6 * s * s} satuan²`];
    },
  },
  {
    id: "mat-022",
    name: "Volume Balok",
    category: "matematika",
    subcategory: "Bangun Ruang",
    icon: "🟦",
    description: "Volume balok dari panjang, lebar, dan tinggi.",
    latexFormula: "V = p \\times l \\times t",
    variables: [
      {
        key: "panjang",
        label: "Panjang",
        unit: "satuan",
        placeholder: "cth: 10",
      },
      { key: "lebar", label: "Lebar", unit: "satuan", placeholder: "cth: 5" },
      { key: "tinggi", label: "Tinggi", unit: "satuan", placeholder: "cth: 3" },
    ],
    calculate(v) {
      return {
        value:
          parseFloat(v.panjang) * parseFloat(v.lebar) * parseFloat(v.tinggi),
        unit: "satuan³",
      };
    },
    steps(v) {
      const p = parseFloat(v.panjang),
        l = parseFloat(v.lebar),
        t = parseFloat(v.tinggi);
      return [`V = ${p} × ${l} × ${t} = ${p * l * t} satuan³`];
    },
  },
  {
    id: "mat-023",
    name: "Luas Permukaan Balok",
    category: "matematika",
    subcategory: "Bangun Ruang",
    icon: "🟦",
    description: "Luas permukaan balok.",
    latexFormula: "LP = 2(pl + pt + lt)",
    variables: [
      {
        key: "panjang",
        label: "Panjang",
        unit: "satuan",
        placeholder: "cth: 10",
      },
      { key: "lebar", label: "Lebar", unit: "satuan", placeholder: "cth: 5" },
      { key: "tinggi", label: "Tinggi", unit: "satuan", placeholder: "cth: 3" },
    ],
    calculate(v) {
      const p = parseFloat(v.panjang),
        l = parseFloat(v.lebar),
        t = parseFloat(v.tinggi);
      return { value: 2 * (p * l + p * t + l * t), unit: "satuan²" };
    },
    steps(v) {
      const p = parseFloat(v.panjang),
        l = parseFloat(v.lebar),
        t = parseFloat(v.tinggi);
      return [
        `LP = 2(${p * l}+${p * t}+${l * t}) = ${2 * (p * l + p * t + l * t)} satuan²`,
      ];
    },
  },
  {
    id: "mat-024",
    name: "Volume Bola",
    category: "matematika",
    subcategory: "Bangun Ruang",
    icon: "●",
    description: "Volume bola dari jari-jari.",
    latexFormula: "V = \\frac{4}{3}\\pi r^3",
    variables: [
      {
        key: "r",
        label: "Jari-jari (r)",
        unit: "satuan",
        placeholder: "cth: 6",
      },
    ],
    calculate(v) {
      const r = parseFloat(v.r);
      return { value: (4 / 3) * Math.PI * r ** 3, unit: "satuan³" };
    },
    steps(v) {
      const r = parseFloat(v.r);
      return [
        `V = (4/3) × π × ${r}³ ≈ ${((4 / 3) * Math.PI * r ** 3).toFixed(4)} satuan³`,
      ];
    },
  },
  {
    id: "mat-025",
    name: "Luas Permukaan Bola",
    category: "matematika",
    subcategory: "Bangun Ruang",
    icon: "●",
    description: "Luas permukaan bola.",
    latexFormula: "LP = 4\\pi r^2",
    variables: [
      {
        key: "r",
        label: "Jari-jari (r)",
        unit: "satuan",
        placeholder: "cth: 6",
      },
    ],
    calculate(v) {
      const r = parseFloat(v.r);
      return { value: 4 * Math.PI * r * r, unit: "satuan²" };
    },
    steps(v) {
      const r = parseFloat(v.r);
      return [
        `LP = 4 × π × ${r}² ≈ ${(4 * Math.PI * r * r).toFixed(4)} satuan²`,
      ];
    },
  },
  {
    id: "mat-026",
    name: "Volume Tabung",
    category: "matematika",
    subcategory: "Bangun Ruang",
    icon: "⬭",
    description: "Volume tabung dari jari-jari dan tinggi.",
    latexFormula: "V = \\pi r^2 t",
    variables: [
      {
        key: "r",
        label: "Jari-jari (r)",
        unit: "satuan",
        placeholder: "cth: 5",
      },
      {
        key: "tinggi",
        label: "Tinggi (t)",
        unit: "satuan",
        placeholder: "cth: 10",
      },
    ],
    calculate(v) {
      const r = parseFloat(v.r),
        t = parseFloat(v.tinggi);
      return { value: Math.PI * r * r * t, unit: "satuan³" };
    },
    steps(v) {
      const r = parseFloat(v.r),
        t = parseFloat(v.tinggi);
      return [
        `V = π × ${r}² × ${t} ≈ ${(Math.PI * r * r * t).toFixed(4)} satuan³`,
      ];
    },
  },
  {
    id: "mat-027",
    name: "Luas Permukaan Tabung",
    category: "matematika",
    subcategory: "Bangun Ruang",
    icon: "⬭",
    description: "Luas permukaan tabung termasuk dua tutup.",
    latexFormula: "LP = 2\\pi r(r + t)",
    variables: [
      {
        key: "r",
        label: "Jari-jari (r)",
        unit: "satuan",
        placeholder: "cth: 5",
      },
      {
        key: "tinggi",
        label: "Tinggi (t)",
        unit: "satuan",
        placeholder: "cth: 10",
      },
    ],
    calculate(v) {
      const r = parseFloat(v.r),
        t = parseFloat(v.tinggi);
      return { value: 2 * Math.PI * r * (r + t), unit: "satuan²" };
    },
    steps(v) {
      const r = parseFloat(v.r),
        t = parseFloat(v.tinggi);
      return [
        `LP = 2π × ${r} × (${r}+${t}) ≈ ${(2 * Math.PI * r * (r + t)).toFixed(4)} satuan²`,
      ];
    },
  },
  {
    id: "mat-028",
    name: "Volume Kerucut",
    category: "matematika",
    subcategory: "Bangun Ruang",
    icon: "△",
    description: "Volume kerucut dari jari-jari dan tinggi.",
    latexFormula: "V = \\frac{1}{3}\\pi r^2 t",
    variables: [
      {
        key: "r",
        label: "Jari-jari (r)",
        unit: "satuan",
        placeholder: "cth: 4",
      },
      {
        key: "tinggi",
        label: "Tinggi (t)",
        unit: "satuan",
        placeholder: "cth: 9",
      },
    ],
    calculate(v) {
      const r = parseFloat(v.r),
        t = parseFloat(v.tinggi);
      return { value: (1 / 3) * Math.PI * r * r * t, unit: "satuan³" };
    },
    steps(v) {
      const r = parseFloat(v.r),
        t = parseFloat(v.tinggi);
      return [
        `V = (1/3) × π × ${r}² × ${t} ≈ ${((1 / 3) * Math.PI * r * r * t).toFixed(4)} satuan³`,
      ];
    },
  },
  {
    id: "mat-029",
    name: "Luas Permukaan Kerucut",
    category: "matematika",
    subcategory: "Bangun Ruang",
    icon: "△",
    description: "Luas permukaan kerucut termasuk alas.",
    latexFormula: "LP = \\pi r(r + s)",
    variables: [
      {
        key: "r",
        label: "Jari-jari (r)",
        unit: "satuan",
        placeholder: "cth: 4",
      },
      {
        key: "s",
        label: "Garis pelukis (s)",
        unit: "satuan",
        placeholder: "cth: 5",
      },
    ],
    calculate(v) {
      const r = parseFloat(v.r),
        s = parseFloat(v.s);
      return { value: Math.PI * r * (r + s), unit: "satuan²" };
    },
    steps(v) {
      const r = parseFloat(v.r),
        s = parseFloat(v.s);
      return [
        `LP = π × ${r} × (${r}+${s}) ≈ ${(Math.PI * r * (r + s)).toFixed(4)} satuan²`,
      ];
    },
  },
  {
    id: "mat-030",
    name: "Volume Limas Segiempat",
    category: "matematika",
    subcategory: "Bangun Ruang",
    icon: "▲",
    description: "Volume limas dengan alas persegi.",
    latexFormula: "V = \\frac{1}{3} s^2 t",
    variables: [
      {
        key: "sisi",
        label: "Sisi alas (s)",
        unit: "satuan",
        placeholder: "cth: 6",
      },
      {
        key: "tinggi",
        label: "Tinggi (t)",
        unit: "satuan",
        placeholder: "cth: 8",
      },
    ],
    calculate(v) {
      const s = parseFloat(v.sisi),
        t = parseFloat(v.tinggi);
      return { value: (1 / 3) * s * s * t, unit: "satuan³" };
    },
    steps(v) {
      const s = parseFloat(v.sisi),
        t = parseFloat(v.tinggi);
      return [
        `V = (1/3) × ${s}² × ${t} = ${((1 / 3) * s * s * t).toFixed(4)} satuan³`,
      ];
    },
  },
  {
    id: "mat-031",
    name: "Volume Prisma Segitiga",
    category: "matematika",
    subcategory: "Bangun Ruang",
    icon: "▲",
    description: "Volume prisma segitiga dari luas alas dan tinggi prisma.",
    latexFormula: "V = L_{alas} \\times t",
    variables: [
      {
        key: "alas",
        label: "Alas segitiga",
        unit: "satuan",
        placeholder: "cth: 6",
      },
      {
        key: "tinggiSeg",
        label: "Tinggi segitiga",
        unit: "satuan",
        placeholder: "cth: 4",
      },
      {
        key: "tinggiPrisma",
        label: "Tinggi prisma",
        unit: "satuan",
        placeholder: "cth: 10",
      },
    ],
    calculate(v) {
      const a = parseFloat(v.alas),
        ts = parseFloat(v.tinggiSeg),
        tp = parseFloat(v.tinggiPrisma);
      return { value: 0.5 * a * ts * tp, unit: "satuan³" };
    },
    steps(v) {
      const a = parseFloat(v.alas),
        ts = parseFloat(v.tinggiSeg),
        tp = parseFloat(v.tinggiPrisma);
      return [
        `L alas = ½ × ${a} × ${ts} = ${0.5 * a * ts}`,
        `V = ${0.5 * a * ts} × ${tp} = ${0.5 * a * ts * tp} satuan³`,
      ];
    },
  },

  // ════════════════════════════════════════════
  // 📐 MATEMATIKA — TRIGONOMETRI
  // ════════════════════════════════════════════

  {
    id: "mat-040",
    name: "Sin / Cos / Tan",
    category: "matematika",
    subcategory: "Trigonometri",
    icon: "sin",
    description: "Nilai sinus, kosinus, dan tangen dari sudut.",
    latexFormula: "\\sin\\theta,\\;\\cos\\theta,\\;\\tan\\theta",
    variables: [
      {
        key: "sudut",
        label: "Sudut (°)",
        unit: "derajat",
        placeholder: "cth: 30",
      },
    ],
    calculate(v) {
      const deg = parseFloat(v.sudut),
        rad = (deg * Math.PI) / 180;
      return {
        multiValue: [
          { label: "Sin θ", value: Math.sin(rad), unit: "" },
          { label: "Cos θ", value: Math.cos(rad), unit: "" },
          { label: "Tan θ", value: Math.tan(rad), unit: "" },
        ],
      };
    },
    steps(v) {
      const d = parseFloat(v.sudut),
        r = (d * Math.PI) / 180;
      return [
        `θ = ${d}°`,
        `sin = ${Math.sin(r).toFixed(6)}`,
        `cos = ${Math.cos(r).toFixed(6)}`,
        `tan = ${Math.tan(r).toFixed(6)}`,
      ];
    },
  },
  {
    id: "mat-041",
    name: "Aturan Sinus",
    category: "matematika",
    subcategory: "Trigonometri",
    icon: "sin",
    description: "Mencari sisi b dari sisi a, sudut A dan sudut B.",
    latexFormula: "\\frac{a}{\\sin A} = \\frac{b}{\\sin B}",
    variables: [
      { key: "a", label: "Sisi a", unit: "satuan", placeholder: "cth: 10" },
      {
        key: "sudutA",
        label: "Sudut A (°)",
        unit: "°",
        placeholder: "cth: 45",
      },
      {
        key: "sudutB",
        label: "Sudut B (°)",
        unit: "°",
        placeholder: "cth: 60",
      },
    ],
    calculate(v) {
      const a = parseFloat(v.a),
        A = (parseFloat(v.sudutA) * Math.PI) / 180,
        B = (parseFloat(v.sudutB) * Math.PI) / 180;
      return { value: (a * Math.sin(B)) / Math.sin(A), unit: "satuan" };
    },
    steps(v) {
      const a = parseFloat(v.a),
        A = parseFloat(v.sudutA),
        B = parseFloat(v.sudutB),
        Ar = (A * Math.PI) / 180,
        Br = (B * Math.PI) / 180;
      return [
        `b = a × sin(B) / sin(A) = ${a} × ${Math.sin(Br).toFixed(4)} / ${Math.sin(Ar).toFixed(4)} ≈ ${((a * Math.sin(Br)) / Math.sin(Ar)).toFixed(4)}`,
      ];
    },
  },
  {
    id: "mat-042",
    name: "Aturan Kosinus",
    category: "matematika",
    subcategory: "Trigonometri",
    icon: "cos",
    description: "Mencari sisi c dari dua sisi dan sudut C di antaranya.",
    latexFormula: "c^2 = a^2 + b^2 - 2ab\\cos C",
    variables: [
      { key: "a", label: "Sisi a", unit: "satuan", placeholder: "cth: 8" },
      { key: "b", label: "Sisi b", unit: "satuan", placeholder: "cth: 6" },
      {
        key: "sudutC",
        label: "Sudut C (°)",
        unit: "°",
        placeholder: "cth: 60",
      },
    ],
    calculate(v) {
      const a = parseFloat(v.a),
        b = parseFloat(v.b),
        C = (parseFloat(v.sudutC) * Math.PI) / 180;
      return {
        value: Math.sqrt(a * a + b * b - 2 * a * b * Math.cos(C)),
        unit: "satuan",
      };
    },
    steps(v) {
      const a = parseFloat(v.a),
        b = parseFloat(v.b),
        C = parseFloat(v.sudutC),
        Cr = (C * Math.PI) / 180,
        c2 = a * a + b * b - 2 * a * b * Math.cos(Cr);
      return [
        `c² = ${a}²+${b}²-2×${a}×${b}×cos(${C}°)`,
        `c² = ${c2.toFixed(4)}  →  c ≈ ${Math.sqrt(c2).toFixed(4)} satuan`,
      ];
    },
  },
  {
    id: "mat-043",
    name: "Luas Segitiga (Trigonometri)",
    category: "matematika",
    subcategory: "Trigonometri",
    icon: "△",
    description: "Luas segitiga jika diketahui dua sisi dan sudut apitnya.",
    latexFormula: "L = \\frac{1}{2}ab\\sin C",
    variables: [
      { key: "a", label: "Sisi a", unit: "satuan", placeholder: "cth: 8" },
      { key: "b", label: "Sisi b", unit: "satuan", placeholder: "cth: 6" },
      { key: "C", label: "Sudut C (°)", unit: "°", placeholder: "cth: 45" },
    ],
    calculate(v) {
      const a = parseFloat(v.a),
        b = parseFloat(v.b),
        C = (parseFloat(v.C) * Math.PI) / 180;
      return { value: 0.5 * a * b * Math.sin(C), unit: "satuan²" };
    },
    steps(v) {
      const a = parseFloat(v.a),
        b = parseFloat(v.b),
        C = parseFloat(v.C),
        Cr = (C * Math.PI) / 180;
      return [
        `L = ½ × ${a} × ${b} × sin(${C}°) = ½ × ${a} × ${b} × ${Math.sin(Cr).toFixed(4)} ≈ ${(0.5 * a * b * Math.sin(Cr)).toFixed(4)} satuan²`,
      ];
    },
  },

  // ════════════════════════════════════════════
  // 📐 MATEMATIKA — STATISTIK
  // ════════════════════════════════════════════

  {
    id: "mat-050",
    name: "Rata-rata (Mean)",
    category: "matematika",
    subcategory: "Statistik",
    icon: "x̄",
    description: "Nilai rata-rata dari sekumpulan data.",
    latexFormula: "\\bar{x} = \\frac{\\sum x_i}{n}",
    variables: [
      {
        key: "data",
        label: "Data (pisah koma)",
        unit: "",
        placeholder: "cth: 70, 80, 90, 85, 75",
      },
    ],
    calculate(v) {
      const arr = v.data
        .split(",")
        .map((x) => parseFloat(x.trim()))
        .filter((x) => !isNaN(x));
      if (!arr.length) throw new Error("Data tidak valid");
      return { value: arr.reduce((a, b) => a + b, 0) / arr.length, unit: "" };
    },
    steps(v) {
      const arr = v.data
          .split(",")
          .map((x) => parseFloat(x.trim()))
          .filter((x) => !isNaN(x)),
        s = arr.reduce((a, b) => a + b, 0);
      return [
        `Data: ${arr.join(", ")}`,
        `Jumlah = ${s}, n = ${arr.length}`,
        `Mean = ${s} / ${arr.length} = ${(s / arr.length).toFixed(4)}`,
      ];
    },
  },
  {
    id: "mat-051",
    name: "Median",
    category: "matematika",
    subcategory: "Statistik",
    icon: "Me",
    description: "Nilai tengah dari data yang sudah diurutkan.",
    latexFormula: "\\text{Median} = x_{\\text{tengah}}",
    variables: [
      {
        key: "data",
        label: "Data (pisah koma)",
        unit: "",
        placeholder: "cth: 4, 7, 2, 9, 5",
      },
    ],
    calculate(v) {
      const arr = v.data
        .split(",")
        .map((x) => parseFloat(x.trim()))
        .filter((x) => !isNaN(x))
        .sort((a, b) => a - b);
      const mid = Math.floor(arr.length / 2);
      return {
        value: arr.length % 2 !== 0 ? arr[mid] : (arr[mid - 1] + arr[mid]) / 2,
        unit: "",
      };
    },
    steps(v) {
      const arr = v.data
        .split(",")
        .map((x) => parseFloat(x.trim()))
        .filter((x) => !isNaN(x))
        .sort((a, b) => a - b);
      const mid = Math.floor(arr.length / 2),
        odd = arr.length % 2 !== 0;
      return [
        `Diurutkan: ${arr.join(", ")}`,
        `n = ${arr.length} (${odd ? "ganjil" : "genap"})`,
        odd
          ? `Median = data ke-${mid + 1} = ${arr[mid]}`
          : `Median = (${arr[mid - 1]}+${arr[mid]})/2 = ${(arr[mid - 1] + arr[mid]) / 2}`,
      ];
    },
  },
  {
    id: "mat-052",
    name: "Modus",
    category: "matematika",
    subcategory: "Statistik",
    icon: "Mo",
    description: "Nilai yang paling sering muncul.",
    latexFormula: "\\text{Modus} = \\text{nilai frekuensi tertinggi}",
    variables: [
      {
        key: "data",
        label: "Data (pisah koma)",
        unit: "",
        placeholder: "cth: 3, 5, 3, 7, 5, 3",
      },
    ],
    calculate(v) {
      const arr = v.data
        .split(",")
        .map((x) => parseFloat(x.trim()))
        .filter((x) => !isNaN(x));
      const freq = {};
      arr.forEach((x) => (freq[x] = (freq[x] || 0) + 1));
      const max = Math.max(...Object.values(freq));
      const modes = Object.keys(freq)
        .filter((k) => freq[k] === max)
        .map(Number);
      return {
        value: modes[0],
        unit: `(muncul ${max}x)${modes.length > 1 ? " juga: " + modes.slice(1).join(", ") : ""}`,
      };
    },
    steps(v) {
      const arr = v.data
        .split(",")
        .map((x) => parseFloat(x.trim()))
        .filter((x) => !isNaN(x));
      const freq = {};
      arr.forEach((x) => (freq[x] = (freq[x] || 0) + 1));
      const max = Math.max(...Object.values(freq));
      const modes = Object.keys(freq).filter((k) => freq[k] === max);
      return [
        `Frekuensi: ${Object.entries(freq)
          .map(([k, v]) => `${k}→${v}x`)
          .join(", ")}`,
        `Modus: ${modes.join(", ")} (${max}x)`,
      ];
    },
  },
  {
    id: "mat-053",
    name: "Standar Deviasi",
    category: "matematika",
    subcategory: "Statistik",
    icon: "σ",
    description: "Mengukur sebaran data dari rata-ratanya.",
    latexFormula: "\\sigma = \\sqrt{\\frac{\\sum(x_i-\\bar{x})^2}{n}}",
    variables: [
      {
        key: "data",
        label: "Data (pisah koma)",
        unit: "",
        placeholder: "cth: 2, 4, 4, 4, 5, 5, 7, 9",
      },
    ],
    calculate(v) {
      const arr = v.data
        .split(",")
        .map((x) => parseFloat(x.trim()))
        .filter((x) => !isNaN(x));
      if (arr.length < 2) throw new Error("Minimal 2 data");
      const mean = arr.reduce((a, b) => a + b, 0) / arr.length;
      const variance =
        arr.reduce((s, x) => s + (x - mean) ** 2, 0) / arr.length;
      return { value: Math.sqrt(variance), unit: "" };
    },
    steps(v) {
      const arr = v.data
          .split(",")
          .map((x) => parseFloat(x.trim()))
          .filter((x) => !isNaN(x)),
        m = arr.reduce((a, b) => a + b, 0) / arr.length,
        vari = arr.reduce((s, x) => s + (x - m) ** 2, 0) / arr.length;
      return [
        `Mean = ${m.toFixed(4)}`,
        `Varians = ${vari.toFixed(4)}`,
        `σ = √${vari.toFixed(4)} ≈ ${Math.sqrt(vari).toFixed(4)}`,
      ];
    },
  },
  {
    id: "mat-054",
    name: "Kuartil (Q1, Q2, Q3)",
    category: "matematika",
    subcategory: "Statistik",
    icon: "Q",
    description: "Menghitung kuartil bawah, tengah, dan atas dari data.",
    latexFormula: "Q_1,\\;Q_2,\\;Q_3",
    variables: [
      {
        key: "data",
        label: "Data (pisah koma)",
        unit: "",
        placeholder: "cth: 2,4,6,8,10,12,14",
      },
    ],
    calculate(v) {
      const arr = v.data
        .split(",")
        .map((x) => parseFloat(x.trim()))
        .filter((x) => !isNaN(x))
        .sort((a, b) => a - b);
      const med = (a) => {
        const m = Math.floor(a.length / 2);
        return a.length % 2 !== 0 ? a[m] : (a[m - 1] + a[m]) / 2;
      };
      const mid = Math.floor(arr.length / 2);
      const lower = arr.slice(0, mid),
        upper = arr.length % 2 === 0 ? arr.slice(mid) : arr.slice(mid + 1);
      return {
        multiValue: [
          { label: "Q1 (Kuartil Bawah)", value: med(lower), unit: "" },
          { label: "Q2 (Median)", value: med(arr), unit: "" },
          { label: "Q3 (Kuartil Atas)", value: med(upper), unit: "" },
        ],
      };
    },
    steps(v) {
      const arr = v.data
        .split(",")
        .map((x) => parseFloat(x.trim()))
        .filter((x) => !isNaN(x))
        .sort((a, b) => a - b);
      return [
        `Data terurut: ${arr.join(", ")}`,
        `Bagi data menjadi 4 bagian sama besar`,
      ];
    },
  },
  {
    id: "mat-055",
    name: "Jangkauan & IQR",
    category: "matematika",
    subcategory: "Statistik",
    icon: "R",
    description: "Jangkauan dan Rentang Interkuartil (IQR).",
    latexFormula: "R = x_{max} - x_{min}",
    variables: [
      {
        key: "data",
        label: "Data (pisah koma)",
        unit: "",
        placeholder: "cth: 5,10,15,20,25,30",
      },
    ],
    calculate(v) {
      const arr = v.data
        .split(",")
        .map((x) => parseFloat(x.trim()))
        .filter((x) => !isNaN(x))
        .sort((a, b) => a - b);
      const med = (a) => {
        const m = Math.floor(a.length / 2);
        return a.length % 2 !== 0 ? a[m] : (a[m - 1] + a[m]) / 2;
      };
      const mid = Math.floor(arr.length / 2);
      const q1 = med(arr.slice(0, mid)),
        q3 = med(arr.length % 2 === 0 ? arr.slice(mid) : arr.slice(mid + 1));
      return {
        multiValue: [
          {
            label: "Jangkauan (R)",
            value: arr[arr.length - 1] - arr[0],
            unit: "",
          },
          { label: "IQR (Q3-Q1)", value: q3 - q1, unit: "" },
        ],
      };
    },
    steps(v) {
      const arr = v.data
        .split(",")
        .map((x) => parseFloat(x.trim()))
        .filter((x) => !isNaN(x))
        .sort((a, b) => a - b);
      return [
        `Jangkauan = ${arr[arr.length - 1]} - ${arr[0]} = ${arr[arr.length - 1] - arr[0]}`,
      ];
    },
  },

  // ════════════════════════════════════════════
  // 📐 MATEMATIKA — ALJABAR
  // ════════════════════════════════════════════

  {
    id: "mat-060",
    name: "Persentase",
    category: "matematika",
    subcategory: "Aljabar",
    icon: "%",
    description: "Nilai persentase dari suatu bilangan.",
    latexFormula: "\\% = \\frac{\\text{bagian}}{\\text{total}} \\times 100",
    variables: [
      { key: "bagian", label: "Bagian", unit: "", placeholder: "cth: 25" },
      { key: "total", label: "Total", unit: "", placeholder: "cth: 200" },
    ],
    calculate(v) {
      const b = parseFloat(v.bagian),
        t = parseFloat(v.total);
      if (!t) throw new Error("Total tidak boleh 0");
      return { value: (b / t) * 100, unit: "%" };
    },
    steps(v) {
      const b = parseFloat(v.bagian),
        t = parseFloat(v.total);
      return [`% = (${b} / ${t}) × 100 = ${((b / t) * 100).toFixed(4)}%`];
    },
  },
  {
    id: "mat-061",
    name: "Rumus ABC (Persamaan Kuadrat)",
    category: "matematika",
    subcategory: "Aljabar",
    icon: "x²",
    description: "Akar persamaan kuadrat ax² + bx + c = 0.",
    latexFormula: "x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}",
    variables: [
      { key: "a", label: "Koefisien a", unit: "", placeholder: "cth: 1" },
      { key: "b", label: "Koefisien b", unit: "", placeholder: "cth: -5" },
      { key: "c", label: "Koefisien c", unit: "", placeholder: "cth: 6" },
    ],
    calculate(v) {
      const a = parseFloat(v.a),
        b = parseFloat(v.b),
        c = parseFloat(v.c),
        D = b * b - 4 * a * c;
      if (D < 0) throw new Error("Diskriminan < 0: tidak ada akar real");
      return {
        multiValue: [
          { label: "Diskriminan D", value: D, unit: "" },
          { label: "x₁", value: (-b + Math.sqrt(D)) / (2 * a), unit: "" },
          { label: "x₂", value: (-b - Math.sqrt(D)) / (2 * a), unit: "" },
        ],
      };
    },
    steps(v) {
      const a = parseFloat(v.a),
        b = parseFloat(v.b),
        c = parseFloat(v.c),
        D = b * b - 4 * a * c;
      return [
        `D = b²-4ac = ${b * b}-${4 * a * c} = ${D}`,
        D >= 0
          ? `x₁ = (${-b}+√${D})/${2 * a} = ${((-b + Math.sqrt(D)) / (2 * a)).toFixed(4)}`
          : "D<0: tidak ada akar real",
        D >= 0
          ? `x₂ = (${-b}-√${D})/${2 * a} = ${((-b - Math.sqrt(D)) / (2 * a)).toFixed(4)}`
          : "",
      ];
    },
  },
  {
    id: "mat-062",
    name: "Barisan Aritmatika (Uₙ)",
    category: "matematika",
    subcategory: "Aljabar",
    icon: "aₙ",
    description: "Suku ke-n barisan aritmatika.",
    latexFormula: "U_n = a + (n-1)b",
    variables: [
      { key: "a", label: "Suku pertama (a)", unit: "", placeholder: "cth: 2" },
      { key: "b", label: "Beda (b)", unit: "", placeholder: "cth: 3" },
      { key: "n", label: "Suku ke-n", unit: "", placeholder: "cth: 10" },
    ],
    calculate(v) {
      const a = parseFloat(v.a),
        b = parseFloat(v.b),
        n = parseFloat(v.n);
      return { value: a + (n - 1) * b, unit: "" };
    },
    steps(v) {
      const a = parseFloat(v.a),
        b = parseFloat(v.b),
        n = parseFloat(v.n);
      return [`U${n} = ${a} + (${n}-1)×${b} = ${a + (n - 1) * b}`];
    },
  },
  {
    id: "mat-063",
    name: "Jumlah Aritmatika (Sₙ)",
    category: "matematika",
    subcategory: "Aljabar",
    icon: "Sₙ",
    description: "Jumlah n suku pertama barisan aritmatika.",
    latexFormula: "S_n = \\frac{n}{2}(2a+(n-1)b)",
    variables: [
      { key: "a", label: "Suku pertama (a)", unit: "", placeholder: "cth: 2" },
      { key: "b", label: "Beda (b)", unit: "", placeholder: "cth: 3" },
      { key: "n", label: "Jumlah suku (n)", unit: "", placeholder: "cth: 10" },
    ],
    calculate(v) {
      const a = parseFloat(v.a),
        b = parseFloat(v.b),
        n = parseFloat(v.n);
      return { value: (n / 2) * (2 * a + (n - 1) * b), unit: "" };
    },
    steps(v) {
      const a = parseFloat(v.a),
        b = parseFloat(v.b),
        n = parseFloat(v.n);
      return [
        `S${n} = (${n}/2) × (2×${a}+(${n}-1)×${b}) = ${(n / 2) * (2 * a + (n - 1) * b)}`,
      ];
    },
  },
  {
    id: "mat-064",
    name: "Barisan Geometri (Uₙ)",
    category: "matematika",
    subcategory: "Aljabar",
    icon: "rⁿ",
    description: "Suku ke-n barisan geometri.",
    latexFormula: "U_n = a \\cdot r^{n-1}",
    variables: [
      { key: "a", label: "Suku pertama (a)", unit: "", placeholder: "cth: 3" },
      { key: "r", label: "Rasio (r)", unit: "", placeholder: "cth: 2" },
      { key: "n", label: "Suku ke-n", unit: "", placeholder: "cth: 5" },
    ],
    calculate(v) {
      const a = parseFloat(v.a),
        r = parseFloat(v.r),
        n = parseFloat(v.n);
      return { value: a * Math.pow(r, n - 1), unit: "" };
    },
    steps(v) {
      const a = parseFloat(v.a),
        r = parseFloat(v.r),
        n = parseFloat(v.n);
      return [
        `U${n} = ${a} × ${r}^(${n}-1) = ${a} × ${Math.pow(r, n - 1)} = ${a * Math.pow(r, n - 1)}`,
      ];
    },
  },
  {
    id: "mat-065",
    name: "Jumlah Geometri Tak Hingga",
    category: "matematika",
    subcategory: "Aljabar",
    icon: "S∞",
    description: "Jumlah deret geometri tak hingga (|r| < 1).",
    latexFormula: "S_\\infty = \\frac{a}{1-r}",
    variables: [
      { key: "a", label: "Suku pertama (a)", unit: "", placeholder: "cth: 8" },
      { key: "r", label: "Rasio (r)", unit: "", placeholder: "cth: 0.5" },
    ],
    calculate(v) {
      const a = parseFloat(v.a),
        r = parseFloat(v.r);
      if (Math.abs(r) >= 1)
        throw new Error("|r| harus < 1 untuk deret konvergen");
      return { value: a / (1 - r), unit: "" };
    },
    steps(v) {
      const a = parseFloat(v.a),
        r = parseFloat(v.r);
      return [`S∞ = a / (1-r) = ${a} / (1-${r}) = ${(a / (1 - r)).toFixed(4)}`];
    },
  },
  {
    id: "mat-066",
    name: "Fungsi Linear",
    category: "matematika",
    subcategory: "Aljabar",
    icon: "f(x)",
    description: "Menghitung nilai y dari fungsi linear y = mx + b.",
    latexFormula: "y = mx + b",
    variables: [
      { key: "m", label: "Gradien (m)", unit: "", placeholder: "cth: 2" },
      { key: "b", label: "Konstanta (b)", unit: "", placeholder: "cth: 3" },
      { key: "x", label: "Nilai x", unit: "", placeholder: "cth: 5" },
    ],
    calculate(v) {
      const m = parseFloat(v.m),
        b = parseFloat(v.b),
        x = parseFloat(v.x);
      return { value: m * x + b, unit: "" };
    },
    steps(v) {
      const m = parseFloat(v.m),
        b = parseFloat(v.b),
        x = parseFloat(v.x);
      return [`y = ${m}×${x} + ${b} = ${m * x}+${b} = ${m * x + b}`];
    },
  },
  {
    id: "mat-067",
    name: "FPB & KPK",
    category: "matematika",
    subcategory: "Aljabar",
    icon: "FPB",
    description:
      "Mencari Faktor Persekutuan Terbesar dan Kelipatan Persekutuan Terkecil.",
    latexFormula: "FPB,\\;KPK",
    variables: [
      { key: "a", label: "Bilangan a", unit: "", placeholder: "cth: 12" },
      { key: "b", label: "Bilangan b", unit: "", placeholder: "cth: 18" },
    ],
    calculate(v) {
      const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
      const a = Math.round(parseFloat(v.a)),
        b = Math.round(parseFloat(v.b));
      const g = gcd(a, b);
      return {
        multiValue: [
          { label: "FPB", value: g, unit: "" },
          { label: "KPK", value: (a * b) / g, unit: "" },
        ],
      };
    },
    steps(v) {
      const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b)),
        a = Math.round(parseFloat(v.a)),
        b = Math.round(parseFloat(v.b)),
        g = gcd(a, b);
      return [
        `FPB(${a},${b}) = ${g}`,
        `KPK(${a},${b}) = (${a}×${b})/${g} = ${(a * b) / g}`,
      ];
    },
  },

  // ════════════════════════════════════════════
  // ⚡ FISIKA
  // ════════════════════════════════════════════

  {
    id: "fis-001",
    name: "Kecepatan Rata-rata",
    category: "fisika",
    subcategory: "Gerak",
    icon: "v",
    description: "Kecepatan dari jarak dan waktu.",
    latexFormula: "v = \\frac{s}{t}",
    variables: [
      { key: "jarak", label: "Jarak (s)", unit: "m", placeholder: "cth: 100" },
      { key: "waktu", label: "Waktu (t)", unit: "s", placeholder: "cth: 10" },
    ],
    calculate(v) {
      const s = parseFloat(v.jarak),
        t = parseFloat(v.waktu);
      if (!t) throw new Error("Waktu tidak boleh 0");
      return { value: s / t, unit: "m/s" };
    },
    steps(v) {
      const s = parseFloat(v.jarak),
        t = parseFloat(v.waktu);
      return [`v = s/t = ${s}/${t} = ${(s / t).toFixed(4)} m/s`];
    },
  },
  {
    id: "fis-002",
    name: "Hukum Newton II",
    category: "fisika",
    subcategory: "Gaya",
    icon: "F",
    description: "Gaya = massa × percepatan.",
    latexFormula: "F = m \\times a",
    variables: [
      { key: "massa", label: "Massa (m)", unit: "kg", placeholder: "cth: 10" },
      {
        key: "percepatan",
        label: "Percepatan (a)",
        unit: "m/s²",
        placeholder: "cth: 5",
      },
    ],
    calculate(v) {
      return {
        value: parseFloat(v.massa) * parseFloat(v.percepatan),
        unit: "N",
      };
    },
    steps(v) {
      const m = parseFloat(v.massa),
        a = parseFloat(v.percepatan);
      return [`F = m×a = ${m}×${a} = ${m * a} N`];
    },
  },
  {
    id: "fis-003",
    name: "Energi Kinetik",
    category: "fisika",
    subcategory: "Energi",
    icon: "Ek",
    description: "Energi karena gerak benda.",
    latexFormula: "E_k = \\frac{1}{2}mv^2",
    variables: [
      { key: "massa", label: "Massa (m)", unit: "kg", placeholder: "cth: 5" },
      {
        key: "kecepatan",
        label: "Kecepatan (v)",
        unit: "m/s",
        placeholder: "cth: 10",
      },
    ],
    calculate(v) {
      const m = parseFloat(v.massa),
        vel = parseFloat(v.kecepatan);
      return { value: 0.5 * m * vel * vel, unit: "J" };
    },
    steps(v) {
      const m = parseFloat(v.massa),
        v2 = parseFloat(v.kecepatan);
      return [
        `Ek = ½×${m}×${v2}² = ½×${m}×${v2 * v2} = ${0.5 * m * v2 * v2} J`,
      ];
    },
  },
  {
    id: "fis-004",
    name: "Energi Potensial",
    category: "fisika",
    subcategory: "Energi",
    icon: "Ep",
    description: "Energi karena posisi/ketinggian benda.",
    latexFormula: "E_p = mgh",
    variables: [
      { key: "massa", label: "Massa (m)", unit: "kg", placeholder: "cth: 2" },
      {
        key: "tinggi",
        label: "Ketinggian (h)",
        unit: "m",
        placeholder: "cth: 10",
      },
      {
        key: "g",
        label: "Gravitasi (g)",
        unit: "m/s²",
        placeholder: "cth: 9.8",
      },
    ],
    calculate(v) {
      return {
        value: parseFloat(v.massa) * parseFloat(v.g) * parseFloat(v.tinggi),
        unit: "J",
      };
    },
    steps(v) {
      const m = parseFloat(v.massa),
        g = parseFloat(v.g),
        h = parseFloat(v.tinggi);
      return [`Ep = m×g×h = ${m}×${g}×${h} = ${m * g * h} J`];
    },
  },
  {
    id: "fis-005",
    name: "Tekanan",
    category: "fisika",
    subcategory: "Gaya",
    icon: "P",
    description: "Gaya per satuan luas.",
    latexFormula: "P = \\frac{F}{A}",
    variables: [
      { key: "gaya", label: "Gaya (F)", unit: "N", placeholder: "cth: 50" },
      { key: "luas", label: "Luas (A)", unit: "m²", placeholder: "cth: 2" },
    ],
    calculate(v) {
      const f = parseFloat(v.gaya),
        a = parseFloat(v.luas);
      if (!a) throw new Error("Luas tidak boleh 0");
      return { value: f / a, unit: "Pa" };
    },
    steps(v) {
      const f = parseFloat(v.gaya),
        a = parseFloat(v.luas);
      return [`P = F/A = ${f}/${a} = ${(f / a).toFixed(4)} Pa`];
    },
  },
  {
    id: "fis-006",
    name: "Usaha (Work)",
    category: "fisika",
    subcategory: "Energi",
    icon: "W",
    description: "Usaha yang dilakukan gaya pada benda.",
    latexFormula: "W = Fs\\cos\\theta",
    variables: [
      { key: "gaya", label: "Gaya (F)", unit: "N", placeholder: "cth: 20" },
      { key: "jarak", label: "Jarak (s)", unit: "m", placeholder: "cth: 5" },
      { key: "sudut", label: "Sudut θ (°)", unit: "°", placeholder: "cth: 0" },
    ],
    calculate(v) {
      const f = parseFloat(v.gaya),
        s = parseFloat(v.jarak),
        r = (parseFloat(v.sudut) * Math.PI) / 180;
      return { value: f * s * Math.cos(r), unit: "J" };
    },
    steps(v) {
      const f = parseFloat(v.gaya),
        s = parseFloat(v.jarak),
        d = parseFloat(v.sudut),
        r = (d * Math.PI) / 180;
      return [
        `cos(${d}°) = ${Math.cos(r).toFixed(4)}`,
        `W = ${f}×${s}×${Math.cos(r).toFixed(4)} = ${(f * s * Math.cos(r)).toFixed(4)} J`,
      ];
    },
  },
  {
    id: "fis-007",
    name: "Hukum Ohm",
    category: "fisika",
    subcategory: "Listrik",
    icon: "V",
    description: "Hubungan tegangan, arus, dan hambatan.",
    latexFormula: "V = IR",
    variables: [
      { key: "arus", label: "Arus (I)", unit: "A", placeholder: "cth: 2" },
      {
        key: "hambatan",
        label: "Hambatan (R)",
        unit: "Ω",
        placeholder: "cth: 5",
      },
    ],
    calculate(v) {
      return { value: parseFloat(v.arus) * parseFloat(v.hambatan), unit: "V" };
    },
    steps(v) {
      const i = parseFloat(v.arus),
        r = parseFloat(v.hambatan);
      return [`V = I×R = ${i}×${r} = ${i * r} V`];
    },
  },
  {
    id: "fis-008",
    name: "Daya Listrik",
    category: "fisika",
    subcategory: "Listrik",
    icon: "P",
    description: "Daya yang dikonsumsi perangkat listrik.",
    latexFormula: "P = VI",
    variables: [
      {
        key: "tegangan",
        label: "Tegangan (V)",
        unit: "V",
        placeholder: "cth: 220",
      },
      { key: "arus", label: "Arus (I)", unit: "A", placeholder: "cth: 0.5" },
    ],
    calculate(v) {
      return { value: parseFloat(v.tegangan) * parseFloat(v.arus), unit: "W" };
    },
    steps(v) {
      const volt = parseFloat(v.tegangan),
        i = parseFloat(v.arus);
      return [`P = V×I = ${volt}×${i} = ${volt * i} W`];
    },
  },
  {
    id: "fis-009",
    name: "Percepatan",
    category: "fisika",
    subcategory: "Gerak",
    icon: "a",
    description: "Perubahan kecepatan per satuan waktu.",
    latexFormula: "a = \\frac{v_t - v_0}{t}",
    variables: [
      {
        key: "v0",
        label: "Kecepatan awal (v₀)",
        unit: "m/s",
        placeholder: "cth: 0",
      },
      {
        key: "vt",
        label: "Kecepatan akhir (vt)",
        unit: "m/s",
        placeholder: "cth: 20",
      },
      { key: "waktu", label: "Waktu (t)", unit: "s", placeholder: "cth: 4" },
    ],
    calculate(v) {
      const v0 = parseFloat(v.v0),
        vt = parseFloat(v.vt),
        t = parseFloat(v.waktu);
      if (!t) throw new Error("Waktu tidak boleh 0");
      return { value: (vt - v0) / t, unit: "m/s²" };
    },
    steps(v) {
      const v0 = parseFloat(v.v0),
        vt = parseFloat(v.vt),
        t = parseFloat(v.waktu);
      return [`a = (${vt}-${v0})/${t} = ${((vt - v0) / t).toFixed(4)} m/s²`];
    },
  },
  {
    id: "fis-010",
    name: "GLBB — Jarak Tempuh",
    category: "fisika",
    subcategory: "Gerak",
    icon: "s",
    description: "Jarak tempuh gerak lurus berubah beraturan.",
    latexFormula: "s = v_0t + \\frac{1}{2}at^2",
    variables: [
      { key: "v0", label: "v₀ (m/s)", unit: "m/s", placeholder: "cth: 0" },
      {
        key: "a",
        label: "Percepatan (a)",
        unit: "m/s²",
        placeholder: "cth: 4",
      },
      { key: "t", label: "Waktu (t)", unit: "s", placeholder: "cth: 3" },
    ],
    calculate(v) {
      const v0 = parseFloat(v.v0),
        a = parseFloat(v.a),
        t = parseFloat(v.t);
      return { value: v0 * t + 0.5 * a * t * t, unit: "m" };
    },
    steps(v) {
      const v0 = parseFloat(v.v0),
        a = parseFloat(v.a),
        t = parseFloat(v.t);
      return [
        `s = ${v0}×${t} + ½×${a}×${t * t} = ${v0 * t}+${0.5 * a * t * t} = ${v0 * t + 0.5 * a * t * t} m`,
      ];
    },
  },
  {
    id: "fis-011",
    name: "Momentum",
    category: "fisika",
    subcategory: "Gaya",
    icon: "p",
    description: "Hasil kali massa dan kecepatan.",
    latexFormula: "p = mv",
    variables: [
      { key: "massa", label: "Massa (m)", unit: "kg", placeholder: "cth: 5" },
      {
        key: "kecepatan",
        label: "Kecepatan (v)",
        unit: "m/s",
        placeholder: "cth: 10",
      },
    ],
    calculate(v) {
      return {
        value: parseFloat(v.massa) * parseFloat(v.kecepatan),
        unit: "kg·m/s",
      };
    },
    steps(v) {
      const m = parseFloat(v.massa),
        vel = parseFloat(v.kecepatan);
      return [`p = m×v = ${m}×${vel} = ${m * vel} kg·m/s`];
    },
  },
  {
    id: "fis-012",
    name: "Impuls",
    category: "fisika",
    subcategory: "Gaya",
    icon: "I",
    description: "Gaya yang bekerja dalam selang waktu tertentu.",
    latexFormula: "I = F \\times \\Delta t",
    variables: [
      { key: "gaya", label: "Gaya (F)", unit: "N", placeholder: "cth: 100" },
      {
        key: "dt",
        label: "Selang waktu (Δt)",
        unit: "s",
        placeholder: "cth: 0.02",
      },
    ],
    calculate(v) {
      return { value: parseFloat(v.gaya) * parseFloat(v.dt), unit: "N·s" };
    },
    steps(v) {
      const f = parseFloat(v.gaya),
        dt = parseFloat(v.dt);
      return [`I = F × Δt = ${f} × ${dt} = ${f * dt} N·s`];
    },
  },
  {
    id: "fis-013",
    name: "Berat Benda",
    category: "fisika",
    subcategory: "Gaya",
    icon: "W",
    description: "Gaya gravitasi pada benda.",
    latexFormula: "W = mg",
    variables: [
      { key: "massa", label: "Massa (m)", unit: "kg", placeholder: "cth: 60" },
      {
        key: "g",
        label: "Gravitasi (g)",
        unit: "m/s²",
        placeholder: "cth: 9.8",
      },
    ],
    calculate(v) {
      return { value: parseFloat(v.massa) * parseFloat(v.g), unit: "N" };
    },
    steps(v) {
      const m = parseFloat(v.massa),
        g = parseFloat(v.g);
      return [`W = m×g = ${m}×${g} = ${m * g} N`];
    },
  },
  {
    id: "fis-014",
    name: "Frekuensi & Periode",
    category: "fisika",
    subcategory: "Gelombang",
    icon: "f",
    description: "Hubungan frekuensi dan periode.",
    latexFormula: "f = \\frac{1}{T}",
    variables: [
      { key: "T", label: "Periode (T)", unit: "s", placeholder: "cth: 0.5" },
    ],
    calculate(v) {
      const T = parseFloat(v.T);
      if (!T) throw new Error("T tidak boleh 0");
      return {
        multiValue: [
          { label: "Frekuensi (f)", value: 1 / T, unit: "Hz" },
          { label: "Periode (T)", value: T, unit: "s" },
        ],
      };
    },
    steps(v) {
      const T = parseFloat(v.T);
      return [`f = 1/T = 1/${T} = ${(1 / T).toFixed(4)} Hz`];
    },
  },
  {
    id: "fis-015",
    name: "Cepat Rambat Gelombang",
    category: "fisika",
    subcategory: "Gelombang",
    icon: "λ",
    description: "Kecepatan gelombang dari frekuensi dan panjang gelombang.",
    latexFormula: "v = f\\lambda",
    variables: [
      {
        key: "frekuensi",
        label: "Frekuensi (f)",
        unit: "Hz",
        placeholder: "cth: 440",
      },
      {
        key: "lambda",
        label: "Panjang gelombang (λ)",
        unit: "m",
        placeholder: "cth: 0.78",
      },
    ],
    calculate(v) {
      return {
        value: parseFloat(v.frekuensi) * parseFloat(v.lambda),
        unit: "m/s",
      };
    },
    steps(v) {
      const f = parseFloat(v.frekuensi),
        l = parseFloat(v.lambda);
      return [`v = f×λ = ${f}×${l} = ${f * l} m/s`];
    },
  },
  {
    id: "fis-016",
    name: "Kalor (Panas)",
    category: "fisika",
    subcategory: "Termodinamika",
    icon: "Q",
    description: "Kalor yang dibutuhkan untuk mengubah suhu benda.",
    latexFormula: "Q = mc\\Delta T",
    variables: [
      { key: "massa", label: "Massa (m)", unit: "kg", placeholder: "cth: 2" },
      {
        key: "c",
        label: "Kalor jenis (c)",
        unit: "J/(kg·K)",
        placeholder: "cth: 4200",
      },
      { key: "deltaT", label: "ΔT suhu", unit: "°C", placeholder: "cth: 50" },
    ],
    calculate(v) {
      return {
        value: parseFloat(v.massa) * parseFloat(v.c) * parseFloat(v.deltaT),
        unit: "J",
      };
    },
    steps(v) {
      const m = parseFloat(v.massa),
        c = parseFloat(v.c),
        dT = parseFloat(v.deltaT);
      return [`Q = m×c×ΔT = ${m}×${c}×${dT} = ${m * c * dT} J`];
    },
  },
  {
    id: "fis-017",
    name: "Tekanan Hidrostatis",
    category: "fisika",
    subcategory: "Fluida",
    icon: "Ph",
    description: "Tekanan zat cair pada kedalaman tertentu.",
    latexFormula: "P = \\rho g h",
    variables: [
      {
        key: "rho",
        label: "Massa jenis ρ",
        unit: "kg/m³",
        placeholder: "cth: 1000",
      },
      {
        key: "g",
        label: "Gravitasi (g)",
        unit: "m/s²",
        placeholder: "cth: 9.8",
      },
      { key: "h", label: "Kedalaman (h)", unit: "m", placeholder: "cth: 5" },
    ],
    calculate(v) {
      return {
        value: parseFloat(v.rho) * parseFloat(v.g) * parseFloat(v.h),
        unit: "Pa",
      };
    },
    steps(v) {
      const r = parseFloat(v.rho),
        g = parseFloat(v.g),
        h = parseFloat(v.h);
      return [`P = ρ×g×h = ${r}×${g}×${h} = ${r * g * h} Pa`];
    },
  },
  {
    id: "fis-018",
    name: "Hukum Archimedes (Gaya Apung)",
    category: "fisika",
    subcategory: "Fluida",
    icon: "Fa",
    description: "Gaya apung yang dialami benda dalam fluida.",
    latexFormula: "F_a = \\rho_{fluida} \\cdot g \\cdot V",
    variables: [
      {
        key: "rho",
        label: "ρ fluida",
        unit: "kg/m³",
        placeholder: "cth: 1000",
      },
      { key: "g", label: "Gravitasi", unit: "m/s²", placeholder: "cth: 9.8" },
      {
        key: "V",
        label: "Volume tercelup (V)",
        unit: "m³",
        placeholder: "cth: 0.001",
      },
    ],
    calculate(v) {
      return {
        value: parseFloat(v.rho) * parseFloat(v.g) * parseFloat(v.V),
        unit: "N",
      };
    },
    steps(v) {
      const r = parseFloat(v.rho),
        g = parseFloat(v.g),
        vol = parseFloat(v.V);
      return [`Fa = ρ×g×V = ${r}×${g}×${vol} = ${r * g * vol} N`];
    },
  },
  {
    id: "fis-019",
    name: "Efisiensi Mesin",
    category: "fisika",
    subcategory: "Energi",
    icon: "η",
    description: "Perbandingan energi berguna dengan energi total.",
    latexFormula: "\\eta = \\frac{W_{out}}{W_{in}} \\times 100\\%",
    variables: [
      {
        key: "keluar",
        label: "Energi keluar (Wout)",
        unit: "J",
        placeholder: "cth: 80",
      },
      {
        key: "masuk",
        label: "Energi masuk (Win)",
        unit: "J",
        placeholder: "cth: 100",
      },
    ],
    calculate(v) {
      const o = parseFloat(v.keluar),
        i = parseFloat(v.masuk);
      if (!i) throw new Error("Win tidak boleh 0");
      return { value: (o / i) * 100, unit: "%" };
    },
    steps(v) {
      const o = parseFloat(v.keluar),
        i = parseFloat(v.masuk);
      return [`η = (${o}/${i}) × 100 = ${((o / i) * 100).toFixed(2)}%`];
    },
  },
  {
    id: "fis-020",
    name: "Hukum Gravitasi Newton",
    category: "fisika",
    subcategory: "Gaya",
    icon: "Fg",
    description: "Gaya gravitasi antara dua benda.",
    latexFormula: "F = G\\frac{m_1 m_2}{r^2}",
    variables: [
      {
        key: "m1",
        label: "Massa 1 (m₁)",
        unit: "kg",
        placeholder: "cth: 5.97e24",
      },
      { key: "m2", label: "Massa 2 (m₂)", unit: "kg", placeholder: "cth: 75" },
      { key: "r", label: "Jarak (r)", unit: "m", placeholder: "cth: 6.37e6" },
    ],
    calculate(v) {
      const G = 6.674e-11,
        m1 = parseFloat(v.m1),
        m2 = parseFloat(v.m2),
        r = parseFloat(v.r);
      return { value: (G * m1 * m2) / (r * r), unit: "N" };
    },
    steps(v) {
      const G = 6.674e-11,
        m1 = parseFloat(v.m1),
        m2 = parseFloat(v.m2),
        r = parseFloat(v.r);
      return [
        `G = 6.674×10⁻¹¹`,
        `F = (6.674×10⁻¹¹ × ${m1} × ${m2}) / ${r}² ≈ ${((G * m1 * m2) / (r * r)).toExponential(4)} N`,
      ];
    },
  },

  // ════════════════════════════════════════════
  // 🧪 KIMIA
  // ════════════════════════════════════════════

  {
    id: "kim-001",
    name: "Mol dari Massa",
    category: "kimia",
    subcategory: "Stoikiometri",
    icon: "n",
    description: "Jumlah mol dari massa dan massa molar.",
    latexFormula: "n = \\frac{m}{M}",
    variables: [
      { key: "massa", label: "Massa (m)", unit: "g", placeholder: "cth: 18" },
      {
        key: "molar",
        label: "Massa Molar (M)",
        unit: "g/mol",
        placeholder: "cth: 18",
      },
    ],
    calculate(v) {
      const m = parseFloat(v.massa),
        M = parseFloat(v.molar);
      if (!M) throw new Error("Massa molar tidak boleh 0");
      return { value: m / M, unit: "mol" };
    },
    steps(v) {
      const m = parseFloat(v.massa),
        M = parseFloat(v.molar);
      return [`n = m/M = ${m}/${M} = ${(m / M).toFixed(4)} mol`];
    },
  },
  {
    id: "kim-002",
    name: "Molaritas (Konsentrasi)",
    category: "kimia",
    subcategory: "Larutan",
    icon: "M",
    description: "Konsentrasi larutan dalam mol per liter.",
    latexFormula: "M = \\frac{n}{V}",
    variables: [
      { key: "mol", label: "Mol (n)", unit: "mol", placeholder: "cth: 0.5" },
      { key: "volume", label: "Volume (V)", unit: "L", placeholder: "cth: 2" },
    ],
    calculate(v) {
      const n = parseFloat(v.mol),
        V = parseFloat(v.volume);
      if (!V) throw new Error("Volume tidak boleh 0");
      return { value: n / V, unit: "mol/L" };
    },
    steps(v) {
      const n = parseFloat(v.mol),
        V = parseFloat(v.volume);
      return [`M = n/V = ${n}/${V} = ${(n / V).toFixed(4)} mol/L`];
    },
  },
  {
    id: "kim-003",
    name: "pH Larutan",
    category: "kimia",
    subcategory: "Asam Basa",
    icon: "pH",
    description: "Derajat keasaman dari konsentrasi H⁺.",
    latexFormula: "pH = -\\log[H^+]",
    variables: [
      {
        key: "hplus",
        label: "[H⁺] (mol/L)",
        unit: "mol/L",
        placeholder: "cth: 0.001",
      },
    ],
    calculate(v) {
      const h = parseFloat(v.hplus);
      if (h <= 0) throw new Error("[H⁺] harus > 0");
      const pH = -Math.log10(h);
      return {
        multiValue: [
          { label: "pH", value: pH, unit: "" },
          { label: "pOH", value: 14 - pH, unit: "" },
          {
            label: "Sifat",
            value: pH < 7 ? -1 : pH > 7 ? 1 : 0,
            unit: pH < 7 ? "(Asam)" : pH > 7 ? "(Basa)" : "(Netral)",
          },
        ],
      };
    },
    steps(v) {
      const h = parseFloat(v.hplus),
        pH = -Math.log10(h);
      return [
        `pH = -log(${h}) = ${pH.toFixed(4)}`,
        `pOH = 14 - ${pH.toFixed(4)} = ${(14 - pH).toFixed(4)}`,
        pH < 7
          ? "→ Bersifat ASAM"
          : pH > 7
            ? "→ Bersifat BASA"
            : "→ Bersifat NETRAL",
      ];
    },
  },
  {
    id: "kim-004",
    name: "Hukum Gas Ideal",
    category: "kimia",
    subcategory: "Gas",
    icon: "PV",
    description: "Hubungan P, V, n, T gas ideal.",
    latexFormula: "PV = nRT",
    variables: [
      { key: "n", label: "Mol (n)", unit: "mol", placeholder: "cth: 1" },
      { key: "T", label: "Suhu (T)", unit: "K", placeholder: "cth: 300" },
      { key: "V", label: "Volume (V)", unit: "L", placeholder: "cth: 24.6" },
    ],
    calculate(v) {
      const n = parseFloat(v.n),
        T = parseFloat(v.T),
        V = parseFloat(v.V),
        R = 0.08206;
      return { value: (n * R * T) / V, unit: "atm" };
    },
    steps(v) {
      const n = parseFloat(v.n),
        T = parseFloat(v.T),
        V = parseFloat(v.V),
        R = 0.08206;
      return [
        `P = nRT/V = (${n}×0.08206×${T})/${V} = ${((n * R * T) / V).toFixed(4)} atm`,
      ];
    },
  },
  {
    id: "kim-005",
    name: "Pengenceran Larutan",
    category: "kimia",
    subcategory: "Larutan",
    icon: "C",
    description: "Konsentrasi setelah pengenceran.",
    latexFormula: "M_1V_1 = M_2V_2",
    variables: [
      {
        key: "M1",
        label: "Molaritas awal (M₁)",
        unit: "mol/L",
        placeholder: "cth: 6",
      },
      {
        key: "V1",
        label: "Volume awal (V₁)",
        unit: "mL",
        placeholder: "cth: 50",
      },
      {
        key: "V2",
        label: "Volume akhir (V₂)",
        unit: "mL",
        placeholder: "cth: 300",
      },
    ],
    calculate(v) {
      const M1 = parseFloat(v.M1),
        V1 = parseFloat(v.V1),
        V2 = parseFloat(v.V2);
      if (!V2) throw new Error("V₂ tidak boleh 0");
      return { value: (M1 * V1) / V2, unit: "mol/L" };
    },
    steps(v) {
      const M1 = parseFloat(v.M1),
        V1 = parseFloat(v.V1),
        V2 = parseFloat(v.V2);
      return [
        `M₂ = M₁V₁/V₂ = (${M1}×${V1})/${V2} = ${((M1 * V1) / V2).toFixed(4)} mol/L`,
      ];
    },
  },
  {
    id: "kim-006",
    name: "Entalpi Reaksi (ΔH)",
    category: "kimia",
    subcategory: "Termokimia",
    icon: "ΔH",
    description: "Perubahan entalpi dari energi ikatan.",
    latexFormula: "\\Delta H = \\sum E_{putus} - \\sum E_{bentuk}",
    variables: [
      {
        key: "putus",
        label: "Energi ikatan putus",
        unit: "kJ/mol",
        placeholder: "cth: 1660",
      },
      {
        key: "bentuk",
        label: "Energi ikatan terbentuk",
        unit: "kJ/mol",
        placeholder: "cth: 1850",
      },
    ],
    calculate(v) {
      const p = parseFloat(v.putus),
        b = parseFloat(v.bentuk),
        dH = p - b;
      return {
        value: dH,
        unit: `kJ/mol (${dH < 0 ? "Eksoterm" : "Endoterm"})`,
      };
    },
    steps(v) {
      const p = parseFloat(v.putus),
        b = parseFloat(v.bentuk),
        dH = p - b;
      return [
        `ΔH = ${p} - ${b} = ${dH} kJ/mol`,
        dH < 0 ? "→ Eksoterm (melepas kalor)" : "→ Endoterm (menyerap kalor)",
      ];
    },
  },
  {
    id: "kim-007",
    name: "Laju Reaksi",
    category: "kimia",
    subcategory: "Kinetika",
    icon: "r",
    description: "Perubahan konsentrasi reaktan atau produk per satuan waktu.",
    latexFormula: "v = \\frac{\\Delta[A]}{\\Delta t}",
    variables: [
      {
        key: "dC",
        label: "ΔKonsentrasi (ΔC)",
        unit: "mol/L",
        placeholder: "cth: 0.4",
      },
      {
        key: "dt",
        label: "Selang waktu (Δt)",
        unit: "s",
        placeholder: "cth: 2",
      },
    ],
    calculate(v) {
      const dC = parseFloat(v.dC),
        dt = parseFloat(v.dt);
      if (!dt) throw new Error("Δt tidak boleh 0");
      return { value: dC / dt, unit: "mol/(L·s)" };
    },
    steps(v) {
      const dC = parseFloat(v.dC),
        dt = parseFloat(v.dt);
      return [`v = ΔC/Δt = ${dC}/${dt} = ${(dC / dt).toFixed(4)} mol/(L·s)`];
    },
  },
  {
    id: "kim-008",
    name: "Massa Molar Campuran",
    category: "kimia",
    subcategory: "Stoikiometri",
    icon: "M̄",
    description: "Massa molar rata-rata campuran gas dari dua komponen.",
    latexFormula: "\\bar{M} = x_1 M_1 + x_2 M_2",
    variables: [
      {
        key: "x1",
        label: "Fraksi mol 1 (x₁)",
        unit: "",
        placeholder: "cth: 0.6",
      },
      {
        key: "M1",
        label: "Massa molar 1 (M₁)",
        unit: "g/mol",
        placeholder: "cth: 28",
      },
      {
        key: "M2",
        label: "Massa molar 2 (M₂)",
        unit: "g/mol",
        placeholder: "cth: 32",
      },
    ],
    calculate(v) {
      const x1 = parseFloat(v.x1),
        M1 = parseFloat(v.M1),
        M2 = parseFloat(v.M2),
        x2 = 1 - x1;
      return { value: x1 * M1 + x2 * M2, unit: "g/mol" };
    },
    steps(v) {
      const x1 = parseFloat(v.x1),
        M1 = parseFloat(v.M1),
        M2 = parseFloat(v.M2),
        x2 = 1 - x1;
      return [
        `x₂ = 1 - ${x1} = ${x2}`,
        `M̄ = ${x1}×${M1} + ${x2}×${M2} = ${(x1 * M1 + x2 * M2).toFixed(4)} g/mol`,
      ];
    },
  },

  // ════════════════════════════════════════════
  // 🌿 BIOLOGI
  // ════════════════════════════════════════════

  {
    id: "bio-001",
    name: "Indeks Massa Tubuh (IMT/BMI)",
    category: "biologi",
    subcategory: "Fisiologi",
    icon: "BMI",
    description: "Mengukur proporsi berat badan terhadap tinggi badan.",
    latexFormula: "IMT = \\frac{BB}{TB^2}",
    variables: [
      {
        key: "bb",
        label: "Berat Badan (BB)",
        unit: "kg",
        placeholder: "cth: 65",
      },
      {
        key: "tb",
        label: "Tinggi Badan (TB)",
        unit: "m",
        placeholder: "cth: 1.70",
      },
    ],
    calculate(v) {
      const bb = parseFloat(v.bb),
        tb = parseFloat(v.tb);
      const imt = bb / (tb * tb);
      let kat = "";
      if (imt < 18.5) kat = "Kurus (Underweight)";
      else if (imt < 25) kat = "Normal";
      else if (imt < 30) kat = "Gemuk (Overweight)";
      else kat = "Obesitas";
      return {
        multiValue: [
          { label: "IMT", value: imt, unit: `kg/m²` },
          { label: "Kategori", value: imt, unit: kat },
        ],
      };
    },
    steps(v) {
      const bb = parseFloat(v.bb),
        tb = parseFloat(v.tb),
        imt = bb / (tb * tb);
      return [
        `IMT = BB/TB² = ${bb}/${tb * tb} = ${imt.toFixed(2)} kg/m²`,
        imt < 18.5
          ? "→ Kurus"
          : imt < 25
            ? "→ Normal"
            : imt < 30
              ? "→ Gemuk"
              : "→ Obesitas",
      ];
    },
  },
  {
    id: "bio-002",
    name: "Denyut Nadi Maksimal",
    category: "biologi",
    subcategory: "Fisiologi",
    icon: "♥",
    description: "Estimasi denyut nadi maksimum berdasarkan usia.",
    latexFormula: "HR_{max} = 220 - \\text{usia}",
    variables: [
      { key: "usia", label: "Usia", unit: "tahun", placeholder: "cth: 25" },
    ],
    calculate(v) {
      const usia = parseFloat(v.usia),
        max = 220 - usia;
      return {
        multiValue: [
          { label: "HR Maks", value: max, unit: "bpm" },
          {
            label: "Zona Latihan (60-80%)",
            value: max * 0.6,
            unit: `– ${(max * 0.8).toFixed(0)} bpm`,
          },
        ],
      };
    },
    steps(v) {
      const u = parseFloat(v.usia),
        max = 220 - u;
      return [
        `HR Max = 220 - ${u} = ${max} bpm`,
        `Zona latihan optimal: ${(max * 0.6).toFixed(0)} – ${(max * 0.8).toFixed(0)} bpm`,
      ];
    },
  },
  {
    id: "bio-003",
    name: "Pertumbuhan Populasi",
    category: "biologi",
    subcategory: "Ekologi",
    icon: "N",
    description: "Menghitung ukuran populasi setelah waktu tertentu.",
    latexFormula: "N_t = N_0 \\cdot e^{rt}",
    variables: [
      {
        key: "N0",
        label: "Populasi awal (N₀)",
        unit: "individu",
        placeholder: "cth: 100",
      },
      {
        key: "r",
        label: "Laju pertumbuhan (r)",
        unit: "/tahun",
        placeholder: "cth: 0.05",
      },
      { key: "t", label: "Waktu (t)", unit: "tahun", placeholder: "cth: 10" },
    ],
    calculate(v) {
      const N0 = parseFloat(v.N0),
        r = parseFloat(v.r),
        t = parseFloat(v.t);
      return { value: N0 * Math.exp(r * t), unit: "individu" };
    },
    steps(v) {
      const N0 = parseFloat(v.N0),
        r = parseFloat(v.r),
        t = parseFloat(v.t);
      return [
        `Nt = N₀ × e^(rt) = ${N0} × e^(${r}×${t}) = ${N0} × ${Math.exp(r * t).toFixed(4)} ≈ ${(N0 * Math.exp(r * t)).toFixed(2)}`,
      ];
    },
  },
  {
    id: "bio-004",
    name: "Nisbah Kelamin (Sex Ratio)",
    category: "biologi",
    subcategory: "Ekologi",
    icon: "♂♀",
    description: "Perbandingan jantan terhadap betina dalam populasi.",
    latexFormula: "SR = \\frac{\\text{Jantan}}{\\text{Betina}} \\times 100",
    variables: [
      {
        key: "jantan",
        label: "Jumlah Jantan",
        unit: "",
        placeholder: "cth: 48",
      },
      {
        key: "betina",
        label: "Jumlah Betina",
        unit: "",
        placeholder: "cth: 52",
      },
    ],
    calculate(v) {
      const j = parseFloat(v.jantan),
        b = parseFloat(v.betina);
      if (!b) throw new Error("Betina tidak boleh 0");
      return { value: (j / b) * 100, unit: "per 100 betina" };
    },
    steps(v) {
      const j = parseFloat(v.jantan),
        b = parseFloat(v.betina);
      return [
        `SR = (${j}/${b}) × 100 = ${((j / b) * 100).toFixed(2)} jantan per 100 betina`,
      ];
    },
  },
  {
    id: "bio-005",
    name: "Kepadatan Populasi",
    category: "biologi",
    subcategory: "Ekologi",
    icon: "D",
    description: "Jumlah individu per satuan luas area.",
    latexFormula: "D = \\frac{N}{A}",
    variables: [
      {
        key: "N",
        label: "Jumlah individu (N)",
        unit: "",
        placeholder: "cth: 500",
      },
      { key: "A", label: "Luas area (A)", unit: "m²", placeholder: "cth: 100" },
    ],
    calculate(v) {
      const N = parseFloat(v.N),
        A = parseFloat(v.A);
      if (!A) throw new Error("Luas tidak boleh 0");
      return { value: N / A, unit: "individu/m²" };
    },
    steps(v) {
      const N = parseFloat(v.N),
        A = parseFloat(v.A);
      return [`D = N/A = ${N}/${A} = ${(N / A).toFixed(4)} individu/m²`];
    },
  },
  {
    id: "bio-006",
    name: "Kadar Glukosa Darah",
    category: "biologi",
    subcategory: "Fisiologi",
    icon: "Glu",
    description: "Mengkonversi kadar glukosa antara mg/dL dan mmol/L.",
    latexFormula: "mmol/L = \\frac{mg/dL}{18}",
    variables: [
      {
        key: "nilai",
        label: "Kadar Glukosa",
        unit: "",
        placeholder: "cth: 90",
      },
      {
        key: "satuan",
        label: "Dari satuan",
        unit: "",
        type: "select",
        options: ["mg/dL", "mmol/L"],
      },
    ],
    calculate(v) {
      const val = parseFloat(v.nilai);
      if (v.satuan === "mg/dL")
        return {
          multiValue: [
            { label: "mmol/L", value: val / 18, unit: "" },
            {
              label: "Kategori",
              value: val < 70 ? -1 : val <= 100 ? 0 : val <= 125 ? 1 : 2,
              unit:
                val < 70
                  ? "Hipoglikemia"
                  : val <= 100
                    ? "Normal (puasa)"
                    : val <= 125
                      ? "Pra-diabetes"
                      : "Diabetes (cek dokter)",
            },
          ],
        };
      return {
        multiValue: [
          { label: "mg/dL", value: val * 18, unit: "" },
          {
            label: "Kategori",
            value: 0,
            unit:
              val * 18 < 70
                ? "Hipoglikemia"
                : val * 18 <= 100
                  ? "Normal"
                  : "Perlu cek dokter",
          },
        ],
      };
    },
    steps(v) {
      const val = parseFloat(v.nilai);
      return [
        v.satuan === "mg/dL"
          ? `mmol/L = ${val}/18 = ${(val / 18).toFixed(2)}`
          : `mg/dL = ${val}×18 = ${val * 18}`,
      ];
    },
  },
  {
    id: "bio-007",
    name: "Indeks Keanekaragaman (Shannon)",
    category: "biologi",
    subcategory: "Ekologi",
    icon: "H'",
    description: "Mengukur keanekaragaman spesies dalam komunitas.",
    latexFormula: "H' = -\\sum p_i \\ln p_i",
    variables: [
      {
        key: "data",
        label: "Jumlah tiap spesies (pisah koma)",
        unit: "",
        placeholder: "cth: 10, 5, 20, 8, 15",
      },
    ],
    calculate(v) {
      const arr = v.data
        .split(",")
        .map((x) => parseFloat(x.trim()))
        .filter((x) => !isNaN(x) && x > 0);
      const total = arr.reduce((a, b) => a + b, 0);
      const H = -arr.reduce((sum, n) => {
        const p = n / total;
        return sum + p * Math.log(p);
      }, 0);
      return { value: H, unit: "(H' > 2 = tinggi)" };
    },
    steps(v) {
      const arr = v.data
          .split(",")
          .map((x) => parseFloat(x.trim()))
          .filter((x) => !isNaN(x) && x > 0),
        total = arr.reduce((a, b) => a + b, 0);
      return [
        `N total = ${total}`,
        `Hitung pᵢ = nᵢ/N untuk tiap spesies`,
        `H' = -Σ(pᵢ × ln pᵢ) ≈ ${(-arr.reduce((s, n) => {
          const p = n / total;
          return s + p * Math.log(p);
        }, 0)).toFixed(4)}`,
      ];
    },
  },

  // ════════════════════════════════════════════
  // 🔄 KONVERSI
  // ════════════════════════════════════════════

  {
    id: "kon-001",
    name: "Konversi Suhu",
    category: "konversi",
    subcategory: "Suhu",
    icon: "°",
    description: "Celcius, Fahrenheit, dan Kelvin.",
    latexFormula: "F = \\frac{9}{5}C + 32",
    variables: [
      { key: "nilai", label: "Nilai Suhu", unit: "", placeholder: "cth: 100" },
      {
        key: "dari",
        label: "Dari satuan",
        unit: "",
        type: "select",
        options: ["Celcius (°C)", "Fahrenheit (°F)", "Kelvin (K)"],
      },
    ],
    calculate(v) {
      const val = parseFloat(v.nilai);
      let C;
      if (v.dari === "Celcius (°C)") {
        C = val;
        return {
          multiValue: [
            { label: "Fahrenheit", value: (C * 9) / 5 + 32, unit: "°F" },
            { label: "Kelvin", value: C + 273.15, unit: "K" },
          ],
        };
      } else if (v.dari === "Fahrenheit (°F)") {
        C = ((val - 32) * 5) / 9;
        return {
          multiValue: [
            { label: "Celcius", value: C, unit: "°C" },
            { label: "Kelvin", value: C + 273.15, unit: "K" },
          ],
        };
      } else {
        C = val - 273.15;
        return {
          multiValue: [
            { label: "Celcius", value: C, unit: "°C" },
            { label: "Fahrenheit", value: (C * 9) / 5 + 32, unit: "°F" },
          ],
        };
      }
    },
    steps(v) {
      const val = parseFloat(v.nilai);
      return [`Nilai asal: ${val} ${v.dari}`];
    },
  },
  {
    id: "kon-002",
    name: "Konversi Panjang",
    category: "konversi",
    subcategory: "Panjang",
    icon: "↔",
    description: "km, m, cm, mm, inci, kaki, mil.",
    latexFormula: "1\\;m = 100\\;cm",
    variables: [
      { key: "nilai", label: "Nilai", unit: "", placeholder: "cth: 1" },
      {
        key: "dari",
        label: "Dari",
        unit: "",
        type: "select",
        options: [
          "Kilometer (km)",
          "Meter (m)",
          "Centimeter (cm)",
          "Millimeter (mm)",
          "Inci (in)",
          "Kaki (ft)",
          "Mil (mi)",
        ],
      },
    ],
    calculate(v) {
      const val = parseFloat(v.nilai),
        toM = {
          "Kilometer (km)": 1000,
          "Meter (m)": 1,
          "Centimeter (cm)": 0.01,
          "Millimeter (mm)": 0.001,
          "Inci (in)": 0.0254,
          "Kaki (ft)": 0.3048,
          "Mil (mi)": 1609.34,
        };
      const m = val * toM[v.dari];
      return {
        multiValue: Object.entries(toM)
          .filter(([k]) => k !== v.dari)
          .map(([k, f]) => ({ label: k, value: m / f, unit: "" })),
      };
    },
    steps(v) {
      return [`${v.nilai} ${v.dari} → konversi via Meter`];
    },
  },
  {
    id: "kon-003",
    name: "Konversi Berat",
    category: "konversi",
    subcategory: "Berat",
    icon: "⚖",
    description: "Ton, kg, gram, mg, pon, ons.",
    latexFormula: "1\\;kg = 1000\\;g",
    variables: [
      { key: "nilai", label: "Nilai", unit: "", placeholder: "cth: 5" },
      {
        key: "dari",
        label: "Dari",
        unit: "",
        type: "select",
        options: [
          "Ton",
          "Kilogram (kg)",
          "Gram (g)",
          "Miligram (mg)",
          "Pon (lb)",
          "Ons (oz)",
        ],
      },
    ],
    calculate(v) {
      const val = parseFloat(v.nilai),
        toKg = {
          Ton: 1000,
          "Kilogram (kg)": 1,
          "Gram (g)": 0.001,
          "Miligram (mg)": 0.000001,
          "Pon (lb)": 0.453592,
          "Ons (oz)": 0.0283495,
        };
      const kg = val * toKg[v.dari];
      return {
        multiValue: Object.entries(toKg)
          .filter(([k]) => k !== v.dari)
          .map(([k, f]) => ({ label: k, value: kg / f, unit: "" })),
      };
    },
    steps(v) {
      return [`${v.nilai} ${v.dari} → konversi via Kilogram`];
    },
  },
  {
    id: "kon-004",
    name: "Konversi Waktu",
    category: "konversi",
    subcategory: "Waktu",
    icon: "⏱",
    description: "Detik, menit, jam, hari, minggu, bulan, tahun.",
    latexFormula: "1\\;jam = 3600\\;detik",
    variables: [
      { key: "nilai", label: "Nilai", unit: "", placeholder: "cth: 2" },
      {
        key: "dari",
        label: "Dari",
        unit: "",
        type: "select",
        options: [
          "Detik (s)",
          "Menit (min)",
          "Jam (h)",
          "Hari",
          "Minggu",
          "Bulan (30 hari)",
          "Tahun (365 hari)",
        ],
      },
    ],
    calculate(v) {
      const val = parseFloat(v.nilai),
        toSec = {
          "Detik (s)": 1,
          "Menit (min)": 60,
          "Jam (h)": 3600,
          Hari: 86400,
          Minggu: 604800,
          "Bulan (30 hari)": 2592000,
          "Tahun (365 hari)": 31536000,
        };
      const sec = val * toSec[v.dari];
      return {
        multiValue: Object.entries(toSec)
          .filter(([k]) => k !== v.dari)
          .map(([k, f]) => ({ label: k, value: sec / f, unit: "" })),
      };
    },
    steps(v) {
      return [`${v.nilai} ${v.dari} → konversi via Detik`];
    },
  },
  {
    id: "kon-005",
    name: "Konversi Luas",
    category: "konversi",
    subcategory: "Luas",
    icon: "□",
    description: "m², cm², km², hektar, are.",
    latexFormula: "1\\;m^2 = 10000\\;cm^2",
    variables: [
      { key: "nilai", label: "Nilai", unit: "", placeholder: "cth: 1" },
      {
        key: "dari",
        label: "Dari",
        unit: "",
        type: "select",
        options: ["m²", "cm²", "km²", "Hektar (ha)", "Are (a)", "Kaki² (ft²)"],
      },
    ],
    calculate(v) {
      const val = parseFloat(v.nilai),
        toM2 = {
          "m²": 1,
          "cm²": 0.0001,
          "km²": 1000000,
          "Hektar (ha)": 10000,
          "Are (a)": 100,
          "Kaki² (ft²)": 0.092903,
        };
      const m2 = val * toM2[v.dari];
      return {
        multiValue: Object.entries(toM2)
          .filter(([k]) => k !== v.dari)
          .map(([k, f]) => ({ label: k, value: m2 / f, unit: "" })),
      };
    },
    steps(v) {
      return [`${v.nilai} ${v.dari} → konversi via m²`];
    },
  },
  {
    id: "kon-006",
    name: "Konversi Volume",
    category: "konversi",
    subcategory: "Volume",
    icon: "⬛",
    description: "Liter, mL, m³, cm³, galon.",
    latexFormula: "1\\;L = 1000\\;mL",
    variables: [
      { key: "nilai", label: "Nilai", unit: "", placeholder: "cth: 1" },
      {
        key: "dari",
        label: "Dari",
        unit: "",
        type: "select",
        options: [
          "Liter (L)",
          "Mililiter (mL)",
          "m³",
          "cm³",
          "Galon (US)",
          "Galon (UK)",
        ],
      },
    ],
    calculate(v) {
      const val = parseFloat(v.nilai),
        toL = {
          "Liter (L)": 1,
          "Mililiter (mL)": 0.001,
          "m³": 1000,
          "cm³": 0.001,
          "Galon (US)": 3.78541,
          "Galon (UK)": 4.54609,
        };
      const l = val * toL[v.dari];
      return {
        multiValue: Object.entries(toL)
          .filter(([k]) => k !== v.dari)
          .map(([k, f]) => ({ label: k, value: l / f, unit: "" })),
      };
    },
    steps(v) {
      return [`${v.nilai} ${v.dari} → konversi via Liter`];
    },
  },
  {
    id: "kon-007",
    name: "Konversi Kecepatan",
    category: "konversi",
    subcategory: "Kecepatan",
    icon: "⚡",
    description: "m/s, km/h, mph, knot.",
    latexFormula: "1\\;m/s = 3.6\\;km/h",
    variables: [
      { key: "nilai", label: "Nilai", unit: "", placeholder: "cth: 100" },
      {
        key: "dari",
        label: "Dari",
        unit: "",
        type: "select",
        options: ["m/s", "km/h", "mph", "Knot", "ft/s"],
      },
    ],
    calculate(v) {
      const val = parseFloat(v.nilai),
        toMs = {
          "m/s": 1,
          "km/h": 1 / 3.6,
          mph: 0.44704,
          Knot: 0.514444,
          "ft/s": 0.3048,
        };
      const ms = val * toMs[v.dari];
      return {
        multiValue: Object.entries(toMs)
          .filter(([k]) => k !== v.dari)
          .map(([k, f]) => ({ label: k, value: ms / f, unit: "" })),
      };
    },
    steps(v) {
      return [`${v.nilai} ${v.dari} → konversi via m/s`];
    },
  },
  {
    id: "kon-008",
    name: "Konversi Energi",
    category: "konversi",
    subcategory: "Energi",
    icon: "⚡",
    description: "Joule, kJ, kalori, kkal, kWh.",
    latexFormula: "1\\;kJ = 1000\\;J",
    variables: [
      { key: "nilai", label: "Nilai", unit: "", placeholder: "cth: 1" },
      {
        key: "dari",
        label: "Dari",
        unit: "",
        type: "select",
        options: [
          "Joule (J)",
          "kiloJoule (kJ)",
          "Kalori (cal)",
          "kiloKalori (kcal)",
          "kWh",
          "eV",
        ],
      },
    ],
    calculate(v) {
      const val = parseFloat(v.nilai),
        toJ = {
          "Joule (J)": 1,
          "kiloJoule (kJ)": 1000,
          "Kalori (cal)": 4.184,
          "kiloKalori (kcal)": 4184,
          kWh: 3600000,
          eV: 1.60218e-19,
        };
      const j = val * toJ[v.dari];
      return {
        multiValue: Object.entries(toJ)
          .filter(([k]) => k !== v.dari)
          .map(([k, f]) => ({ label: k, value: j / f, unit: "" })),
      };
    },
    steps(v) {
      return [`${v.nilai} ${v.dari} → konversi via Joule`];
    },
  },
  {
    id: "kon-009",
    name: "Konversi Tekanan",
    category: "konversi",
    subcategory: "Tekanan",
    icon: "P",
    description: "Pascal, atm, bar, mmHg, psi.",
    latexFormula: "1\\;atm = 101325\\;Pa",
    variables: [
      { key: "nilai", label: "Nilai", unit: "", placeholder: "cth: 1" },
      {
        key: "dari",
        label: "Dari",
        unit: "",
        type: "select",
        options: [
          "Pascal (Pa)",
          "kilopascal (kPa)",
          "Atmosfer (atm)",
          "Bar",
          "mmHg (Torr)",
          "psi",
        ],
      },
    ],
    calculate(v) {
      const val = parseFloat(v.nilai),
        toPa = {
          "Pascal (Pa)": 1,
          "kilopascal (kPa)": 1000,
          "Atmosfer (atm)": 101325,
          Bar: 100000,
          "mmHg (Torr)": 133.322,
          psi: 6894.76,
        };
      const pa = val * toPa[v.dari];
      return {
        multiValue: Object.entries(toPa)
          .filter(([k]) => k !== v.dari)
          .map(([k, f]) => ({ label: k, value: pa / f, unit: "" })),
      };
    },
    steps(v) {
      return [`${v.nilai} ${v.dari} → konversi via Pascal`];
    },
  },

  // ════════════════════════════════════════════
  // 💰 KEUANGAN
  // ════════════════════════════════════════════

  {
    id: "keu-001",
    name: "Bunga Sederhana",
    category: "keuangan",
    subcategory: "Bunga",
    icon: "I",
    description: "Bunga yang dihitung dari pokok awal saja.",
    latexFormula: "I = P \\times r \\times t",
    variables: [
      { key: "P", label: "Pokok (P)", unit: "Rp", placeholder: "cth: 1000000" },
      { key: "r", label: "Bunga/tahun (%)", unit: "%", placeholder: "cth: 6" },
      { key: "t", label: "Waktu (tahun)", unit: "th", placeholder: "cth: 3" },
    ],
    calculate(v) {
      const P = parseFloat(v.P),
        r = parseFloat(v.r) / 100,
        t = parseFloat(v.t),
        I = P * r * t;
      return {
        multiValue: [
          { label: "Bunga (I)", value: I, unit: "Rp" },
          { label: "Total", value: P + I, unit: "Rp" },
        ],
      };
    },
    steps(v) {
      const P = parseFloat(v.P),
        r = parseFloat(v.r),
        t = parseFloat(v.t),
        I = P * (r / 100) * t;
      return [
        `I = ${P} × ${r / 100} × ${t} = Rp ${I.toLocaleString()}`,
        `Total = Rp ${(P + I).toLocaleString()}`,
      ];
    },
  },
  {
    id: "keu-002",
    name: "Bunga Majemuk",
    category: "keuangan",
    subcategory: "Bunga",
    icon: "A",
    description: "Bunga dihitung dari pokok + bunga sebelumnya.",
    latexFormula: "A = P(1+\\frac{r}{n})^{nt}",
    variables: [
      { key: "P", label: "Pokok (P)", unit: "Rp", placeholder: "cth: 1000000" },
      { key: "r", label: "Bunga/tahun (%)", unit: "%", placeholder: "cth: 8" },
      {
        key: "n",
        label: "Frekuensi/tahun",
        unit: "kali",
        placeholder: "cth: 12",
      },
      { key: "t", label: "Waktu (tahun)", unit: "th", placeholder: "cth: 5" },
    ],
    calculate(v) {
      const P = parseFloat(v.P),
        r = parseFloat(v.r) / 100,
        n = parseFloat(v.n),
        t = parseFloat(v.t),
        A = P * Math.pow(1 + r / n, n * t);
      return {
        multiValue: [
          { label: "Nilai akhir (A)", value: A, unit: "Rp" },
          { label: "Bunga total", value: A - P, unit: "Rp" },
        ],
      };
    },
    steps(v) {
      const P = parseFloat(v.P),
        r = parseFloat(v.r) / 100,
        n = parseFloat(v.n),
        t = parseFloat(v.t),
        A = P * Math.pow(1 + r / n, n * t);
      return [`A = ${P}×(1+${r}/${n})^(${n}×${t}) ≈ Rp ${A.toFixed(0)}`];
    },
  },
  {
    id: "keu-003",
    name: "Diskon & Harga Setelah Diskon",
    category: "keuangan",
    subcategory: "Harga",
    icon: "%",
    description: "Harga setelah potongan diskon.",
    latexFormula: "H_{akhir} = H \\times (1-\\frac{d}{100})",
    variables: [
      {
        key: "harga",
        label: "Harga awal",
        unit: "Rp",
        placeholder: "cth: 500000",
      },
      { key: "diskon", label: "Diskon (%)", unit: "%", placeholder: "cth: 20" },
    ],
    calculate(v) {
      const H = parseFloat(v.harga),
        d = parseFloat(v.diskon),
        pot = (H * d) / 100;
      return {
        multiValue: [
          { label: "Potongan", value: pot, unit: "Rp" },
          { label: "Harga akhir", value: H - pot, unit: "Rp" },
        ],
      };
    },
    steps(v) {
      const H = parseFloat(v.harga),
        d = parseFloat(v.diskon),
        pot = (H * d) / 100;
      return [
        `Potongan = ${H}×${d}/100 = Rp${pot.toLocaleString()}`,
        `Harga akhir = Rp${(H - pot).toLocaleString()}`,
      ];
    },
  },
  {
    id: "keu-004",
    name: "Untung & Rugi",
    category: "keuangan",
    subcategory: "Harga",
    icon: "±",
    description: "Selisih harga jual dan harga beli.",
    latexFormula: "\\text{Hasil} = H_{jual} - H_{beli}",
    variables: [
      {
        key: "beli",
        label: "Harga Beli",
        unit: "Rp",
        placeholder: "cth: 200000",
      },
      {
        key: "jual",
        label: "Harga Jual",
        unit: "Rp",
        placeholder: "cth: 250000",
      },
    ],
    calculate(v) {
      const b = parseFloat(v.beli),
        j = parseFloat(v.jual),
        sel = j - b,
        pct = (Math.abs(sel) / b) * 100;
      return {
        multiValue: [
          {
            label: sel >= 0 ? "Untung" : "Rugi",
            value: Math.abs(sel),
            unit: "Rp",
          },
          { label: "Persentase", value: pct, unit: "%" },
        ],
      };
    },
    steps(v) {
      const b = parseFloat(v.beli),
        j = parseFloat(v.jual),
        sel = j - b;
      return [
        `${sel >= 0 ? "Untung" : "Rugi"} = ${j}-${b} = Rp${Math.abs(sel).toLocaleString()}`,
        `Persentase = ${((Math.abs(sel) / b) * 100).toFixed(2)}%`,
      ];
    },
  },
  {
    id: "keu-005",
    name: "Pajak (PPN)",
    category: "keuangan",
    subcategory: "Pajak",
    icon: "Tax",
    description: "Harga setelah dikenakan pajak pertambahan nilai.",
    latexFormula: "Total = H \\times (1+\\frac{p}{100})",
    variables: [
      {
        key: "harga",
        label: "Harga sebelum pajak",
        unit: "Rp",
        placeholder: "cth: 1000000",
      },
      { key: "pajak", label: "Pajak (%)", unit: "%", placeholder: "cth: 11" },
    ],
    calculate(v) {
      const H = parseFloat(v.harga),
        p = parseFloat(v.pajak),
        jumlah = (H * p) / 100;
      return {
        multiValue: [
          { label: "Jumlah pajak", value: jumlah, unit: "Rp" },
          { label: "Total bayar", value: H + jumlah, unit: "Rp" },
        ],
      };
    },
    steps(v) {
      const H = parseFloat(v.harga),
        p = parseFloat(v.pajak),
        j = (H * p) / 100;
      return [
        `Pajak = ${H}×${p}/100 = Rp${j.toLocaleString()}`,
        `Total = Rp${(H + j).toLocaleString()}`,
      ];
    },
  },
  {
    id: "keu-006",
    name: "Break Even Point (BEP)",
    category: "keuangan",
    subcategory: "Bisnis",
    icon: "BEP",
    description: "Titik impas minimum unit yang harus terjual.",
    latexFormula: "BEP = \\frac{FC}{P - VC}",
    variables: [
      {
        key: "tetap",
        label: "Biaya Tetap (FC)",
        unit: "Rp",
        placeholder: "cth: 5000000",
      },
      {
        key: "harga",
        label: "Harga/unit (P)",
        unit: "Rp",
        placeholder: "cth: 50000",
      },
      {
        key: "variabel",
        label: "Biaya Variabel/unit (VC)",
        unit: "Rp",
        placeholder: "cth: 30000",
      },
    ],
    calculate(v) {
      const FC = parseFloat(v.tetap),
        P = parseFloat(v.harga),
        VC = parseFloat(v.variabel),
        m = P - VC;
      if (m <= 0) throw new Error("Harga > Biaya Variabel");
      const bep = FC / m;
      return {
        multiValue: [
          { label: "BEP (unit)", value: Math.ceil(bep), unit: "unit" },
          { label: "BEP (Rp)", value: Math.ceil(bep) * P, unit: "Rp" },
        ],
      };
    },
    steps(v) {
      const FC = parseFloat(v.tetap),
        P = parseFloat(v.harga),
        VC = parseFloat(v.variabel),
        m = P - VC,
        bep = FC / m;
      return [
        `Margin = ${P}-${VC} = Rp${m.toLocaleString()}`,
        `BEP = ${FC}/${m} = ${bep.toFixed(2)} unit → minimal ${Math.ceil(bep)} unit`,
      ];
    },
  },
  {
    id: "keu-007",
    name: "Angsuran Kredit (Anuitas)",
    category: "keuangan",
    subcategory: "Kredit",
    icon: "A",
    description: "Angsuran tetap bulanan untuk pinjaman kredit.",
    latexFormula: "A = \\frac{P \\cdot i}{1-(1+i)^{-n}}",
    variables: [
      {
        key: "P",
        label: "Pinjaman (P)",
        unit: "Rp",
        placeholder: "cth: 10000000",
      },
      { key: "r", label: "Bunga/tahun (%)", unit: "%", placeholder: "cth: 12" },
      {
        key: "n",
        label: "Tenor (bulan)",
        unit: "bulan",
        placeholder: "cth: 24",
      },
    ],
    calculate(v) {
      const P = parseFloat(v.P),
        r = parseFloat(v.r) / 100 / 12,
        n = parseFloat(v.n);
      const A = (P * r) / (1 - Math.pow(1 + r, -n));
      return {
        multiValue: [
          { label: "Angsuran/bulan", value: A, unit: "Rp" },
          { label: "Total bayar", value: A * n, unit: "Rp" },
          { label: "Total bunga", value: A * n - P, unit: "Rp" },
        ],
      };
    },
    steps(v) {
      const P = parseFloat(v.P),
        r = parseFloat(v.r) / 100 / 12,
        n = parseFloat(v.n),
        A = (P * r) / (1 - Math.pow(1 + r, -n));
      return [
        `i = ${v.r}%/th ÷ 12 = ${(r * 100).toFixed(4)}%/bln`,
        `A = (${P}×${r.toFixed(6)})/(1-(1+${r.toFixed(6)})^-${n}) ≈ Rp${A.toFixed(0)}`,
      ];
    },
  },
  {
    id: "keu-008",
    name: "Return on Investment (ROI)",
    category: "keuangan",
    subcategory: "Bisnis",
    icon: "ROI",
    description: "Persentase keuntungan dari investasi.",
    latexFormula:
      "ROI = \\frac{\\text{Keuntungan}}{\\text{Biaya}} \\times 100\\%",
    variables: [
      {
        key: "untung",
        label: "Keuntungan bersih",
        unit: "Rp",
        placeholder: "cth: 500000",
      },
      {
        key: "biaya",
        label: "Total biaya/investasi",
        unit: "Rp",
        placeholder: "cth: 2000000",
      },
    ],
    calculate(v) {
      const u = parseFloat(v.untung),
        b = parseFloat(v.biaya);
      if (!b) throw new Error("Biaya tidak boleh 0");
      return { value: (u / b) * 100, unit: "%" };
    },
    steps(v) {
      const u = parseFloat(v.untung),
        b = parseFloat(v.biaya);
      return [`ROI = (${u}/${b}) × 100 = ${((u / b) * 100).toFixed(2)}%`];
    },
  },

  // ════════════════════════════════════════════
  // 🌍 GEOGRAFI
  // ════════════════════════════════════════════

  {
    id: "geo-001",
    name: "Skala Peta",
    category: "geografi",
    subcategory: "Kartografi",
    icon: "📍",
    description: "Menghitung jarak sebenarnya atau jarak pada peta.",
    latexFormula: "\\text{Skala} = \\frac{d_{peta}}{d_{nyata}}",
    variables: [
      {
        key: "jarak_peta",
        label: "Jarak di peta (cm)",
        unit: "cm",
        placeholder: "cth: 5",
      },
      {
        key: "skala",
        label: "Penyebut skala",
        unit: "",
        placeholder: "cth: 1000000 (untuk 1:1.000.000)",
      },
    ],
    calculate(v) {
      const d = parseFloat(v.jarak_peta),
        s = parseFloat(v.skala),
        nyata = d * s;
      return {
        multiValue: [
          { label: "Jarak nyata (cm)", value: nyata, unit: "cm" },
          { label: "Jarak nyata (m)", value: nyata / 100, unit: "m" },
          { label: "Jarak nyata (km)", value: nyata / 100000, unit: "km" },
        ],
      };
    },
    steps(v) {
      const d = parseFloat(v.jarak_peta),
        s = parseFloat(v.skala);
      return [
        `Skala 1:${s.toLocaleString()}`,
        `Jarak nyata = ${d} × ${s.toLocaleString()} = ${(d * s).toLocaleString()} cm = ${((d * s) / 100000).toFixed(4)} km`,
      ];
    },
  },
  {
    id: "geo-002",
    name: "Kepadatan Penduduk",
    category: "geografi",
    subcategory: "Demografi",
    icon: "👥",
    description: "Jumlah penduduk per satuan luas wilayah.",
    latexFormula: "KP = \\frac{P}{L}",
    variables: [
      {
        key: "penduduk",
        label: "Jumlah penduduk (P)",
        unit: "jiwa",
        placeholder: "cth: 500000",
      },
      {
        key: "luas",
        label: "Luas wilayah (L)",
        unit: "km²",
        placeholder: "cth: 250",
      },
    ],
    calculate(v) {
      const p = parseFloat(v.penduduk),
        l = parseFloat(v.luas);
      if (!l) throw new Error("Luas tidak boleh 0");
      return { value: p / l, unit: "jiwa/km²" };
    },
    steps(v) {
      const p = parseFloat(v.penduduk),
        l = parseFloat(v.luas);
      return [
        `KP = P/L = ${p.toLocaleString()}/${l} = ${(p / l).toFixed(2)} jiwa/km²`,
      ];
    },
  },
  {
    id: "geo-003",
    name: "Laju Pertumbuhan Penduduk",
    category: "geografi",
    subcategory: "Demografi",
    icon: "📈",
    description: "Persentase perubahan jumlah penduduk per tahun.",
    latexFormula: "r = \\frac{P_t - P_0}{P_0} \\times 100\\%",
    variables: [
      {
        key: "P0",
        label: "Penduduk awal (P₀)",
        unit: "jiwa",
        placeholder: "cth: 1000000",
      },
      {
        key: "Pt",
        label: "Penduduk akhir (Pt)",
        unit: "jiwa",
        placeholder: "cth: 1100000",
      },
      {
        key: "t",
        label: "Selang waktu (tahun)",
        unit: "th",
        placeholder: "cth: 5",
      },
    ],
    calculate(v) {
      const P0 = parseFloat(v.P0),
        Pt = parseFloat(v.Pt),
        t = parseFloat(v.t);
      if (!P0 || !t) throw new Error("P₀ dan t tidak boleh 0");
      return { value: ((Pt - P0) / P0 / t) * 100, unit: "%/tahun" };
    },
    steps(v) {
      const P0 = parseFloat(v.P0),
        Pt = parseFloat(v.Pt),
        t = parseFloat(v.t);
      return [
        `r = ((${Pt}-${P0})/${P0}/${t}) × 100 = ${(((Pt - P0) / P0 / t) * 100).toFixed(4)}%/tahun`,
      ];
    },
  },
  {
    id: "geo-004",
    name: "Angka Kelahiran Kasar (CBR)",
    category: "geografi",
    subcategory: "Demografi",
    icon: "👶",
    description: "Jumlah kelahiran per 1000 penduduk per tahun.",
    latexFormula: "CBR = \\frac{B}{P} \\times 1000",
    variables: [
      {
        key: "lahir",
        label: "Jumlah kelahiran (B)",
        unit: "jiwa",
        placeholder: "cth: 2500",
      },
      {
        key: "penduduk",
        label: "Jumlah penduduk (P)",
        unit: "jiwa",
        placeholder: "cth: 500000",
      },
    ],
    calculate(v) {
      const B = parseFloat(v.lahir),
        P = parseFloat(v.penduduk);
      if (!P) throw new Error("Penduduk tidak boleh 0");
      return { value: (B / P) * 1000, unit: "per 1000 penduduk" };
    },
    steps(v) {
      const B = parseFloat(v.lahir),
        P = parseFloat(v.penduduk);
      return [`CBR = (${B}/${P}) × 1000 = ${((B / P) * 1000).toFixed(2)}`];
    },
  },
  {
    id: "geo-005",
    name: "Jarak Antar Kota (Haversine)",
    category: "geografi",
    subcategory: "Geospasial",
    icon: "🌐",
    description: "Jarak dua titik di bumi dari koordinat lintang-bujur.",
    latexFormula:
      "d = 2R\\arcsin\\sqrt{\\sin^2\\frac{\\Delta\\phi}{2}+\\cos\\phi_1\\cos\\phi_2\\sin^2\\frac{\\Delta\\lambda}{2}}",
    variables: [
      {
        key: "lat1",
        label: "Lintang titik 1 (°)",
        unit: "°",
        placeholder: "cth: -6.2",
      },
      {
        key: "lon1",
        label: "Bujur titik 1 (°)",
        unit: "°",
        placeholder: "cth: 106.8",
      },
      {
        key: "lat2",
        label: "Lintang titik 2 (°)",
        unit: "°",
        placeholder: "cth: -7.25",
      },
      {
        key: "lon2",
        label: "Bujur titik 2 (°)",
        unit: "°",
        placeholder: "cth: 112.75",
      },
    ],
    calculate(v) {
      const R = 6371,
        toRad = (x) => (x * Math.PI) / 180;
      const lat1 = toRad(parseFloat(v.lat1)),
        lat2 = toRad(parseFloat(v.lat2));
      const dLat = lat2 - lat1,
        dLon = toRad(parseFloat(v.lon2) - parseFloat(v.lon1));
      const a =
        Math.sin(dLat / 2) ** 2 +
        Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
      return { value: R * 2 * Math.asin(Math.sqrt(a)), unit: "km" };
    },
    steps(v) {
      const R = 6371,
        toRad = (x) => (x * Math.PI) / 180,
        lat1 = toRad(parseFloat(v.lat1)),
        lat2 = toRad(parseFloat(v.lat2)),
        dLat = lat2 - lat1,
        dLon = toRad(parseFloat(v.lon2) - parseFloat(v.lon1)),
        a =
          Math.sin(dLat / 2) ** 2 +
          Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
      return [
        `Menggunakan formula Haversine (R bumi = 6371 km)`,
        `Jarak ≈ ${(R * 2 * Math.asin(Math.sqrt(a))).toFixed(2)} km`,
      ];
    },
  },
  {
    id: "geo-006",
    name: "Zona Waktu",
    category: "geografi",
    subcategory: "Geospasial",
    icon: "🕐",
    description: "Menghitung perbedaan waktu antar zona berdasarkan bujur.",
    latexFormula: "\\Delta t = \\frac{\\Delta\\lambda}{15}",
    variables: [
      {
        key: "bujur1",
        label: "Bujur Kota 1 (°BT/BB)",
        unit: "°",
        placeholder: "cth: 107 (Bandung)",
      },
      {
        key: "bujur2",
        label: "Bujur Kota 2 (°BT/BB)",
        unit: "°",
        placeholder: "cth: 0 (London)",
      },
    ],
    calculate(v) {
      const b1 = parseFloat(v.bujur1),
        b2 = parseFloat(v.bujur2),
        diff = (b1 - b2) / 15;
      return {
        multiValue: [
          { label: "Selisih waktu", value: Math.abs(diff), unit: "jam" },
          {
            label: "Kota 1 vs Kota 2",
            value: diff,
            unit: diff > 0 ? "→ Kota 1 lebih maju" : "→ Kota 2 lebih maju",
          },
        ],
      };
    },
    steps(v) {
      const b1 = parseFloat(v.bujur1),
        b2 = parseFloat(v.bujur2);
      return [
        `Selisih bujur = ${b1} - ${b2} = ${b1 - b2}°`,
        `Selisih waktu = ${b1 - b2}° ÷ 15°/jam = ${((b1 - b2) / 15).toFixed(2)} jam`,
      ];
    },
  },
];

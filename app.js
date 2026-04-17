const appState = {
  steelType: "HRC",
  currentView: "home",
  selectedCountry: "China",
  timeWindowSize: 24,
  timeWindowStart: 0,
  costTimeWindowStart: 0,
  supplyTimeWindowStart: 0,
  regionalTimeWindowStart: 0,
  costHorizon: "10Y",
  selectedCostDriver: "Iron Ore",
  selectedSupplyMetric: "Capacity Utilization",
  selectedRegion: "North America",
  selectedMill: "ArcelorMittal",
  selectedFinancialYear: "2026"
};

const palette = ["#375f42", "#d47529", "#b84428", "#ae8e2c", "#3f7f92", "#7b5b8e"];

const priceTrendData = {
  HRC: {
    "Core Markets": {
      unit: "USD/ton",
      months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      series: {
        China: [568, 574, 588, 592, 603, 598, 590, 582, 577, 586, 594, 601],
        USA: [821, 832, 845, 861, 856, 842, 834, 828, 833, 841, 853, 864],
        Germany: [712, 718, 726, 733, 741, 735, 728, 722, 719, 723, 731, 739],
        UK: [724, 731, 739, 745, 752, 747, 741, 734, 730, 736, 744, 751],
        Italy: [698, 705, 713, 719, 726, 721, 715, 709, 705, 711, 719, 727],
        India: [634, 640, 648, 656, 662, 659, 651, 646, 641, 649, 656, 668]
        ,
        Australia: [681, 687, 695, 701, 708, 703, 698, 692, 688, 694, 701, 709]
      }
    },
    "Asia Focus": {
      unit: "USD/ton",
      months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      series: {
        China: [568, 574, 588, 592, 603, 598, 590, 582, 577, 586, 594, 601],
        Japan: [689, 693, 700, 708, 714, 707, 699, 692, 687, 690, 697, 705],
        SouthKorea: [673, 679, 688, 694, 698, 692, 686, 681, 678, 684, 689, 697],
        India: [634, 640, 648, 656, 662, 659, 651, 646, 641, 649, 656, 668]
      }
    }
  },
  Bar: {
    "Core Markets": {
      unit: "USD/ton",
      months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      series: {
        China: [521, 526, 532, 537, 544, 540, 536, 531, 528, 534, 541, 547],
        USA: [786, 792, 801, 809, 816, 812, 804, 796, 792, 799, 806, 812],
        Turkey: [609, 616, 625, 631, 639, 634, 629, 622, 619, 624, 631, 638],
        UK: [621, 627, 634, 639, 646, 641, 636, 630, 626, 632, 638, 644],
        Italy: [612, 618, 625, 631, 637, 633, 628, 622, 619, 624, 631, 637],
        India: [582, 588, 594, 602, 610, 606, 599, 592, 589, 596, 602, 608]
        ,
        Australia: [596, 602, 609, 615, 621, 617, 612, 607, 603, 609, 615, 622]
      }
    },
    "Asia Focus": {
      unit: "USD/ton",
      months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      series: {
        China: [521, 526, 532, 537, 544, 540, 536, 531, 528, 534, 541, 547],
        Vietnam: [566, 570, 578, 584, 592, 589, 583, 578, 575, 579, 585, 590],
        Indonesia: [573, 578, 584, 591, 598, 594, 589, 585, 582, 588, 593, 600],
        India: [582, 588, 594, 602, 610, 606, 599, 592, 589, 596, 602, 608]
      }
    }
  },
  CR: {
    "Core Markets": {
      unit: "USD/ton",
      months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      series: {
        China: [654, 662, 671, 679, 688, 682, 676, 669, 665, 671, 679, 688],
        USA: [942, 951, 964, 973, 981, 972, 966, 959, 955, 963, 972, 984],
        Germany: [794, 802, 811, 818, 826, 821, 815, 809, 805, 811, 818, 827],
        UK: [808, 816, 824, 832, 839, 834, 828, 821, 817, 823, 831, 840],
        Italy: [781, 789, 798, 805, 813, 808, 802, 796, 792, 799, 806, 814],
        India: [702, 709, 717, 724, 731, 727, 722, 716, 711, 718, 725, 734]
        ,
        Australia: [736, 744, 752, 759, 767, 761, 756, 750, 746, 752, 760, 769]
      }
    },
    "Asia Focus": {
      unit: "USD/ton",
      months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      series: {
        China: [654, 662, 671, 679, 688, 682, 676, 669, 665, 671, 679, 688],
        Japan: [784, 791, 799, 807, 815, 809, 803, 797, 792, 798, 806, 814],
        SouthKorea: [768, 775, 783, 791, 798, 792, 787, 781, 777, 782, 790, 798],
        India: [702, 709, 717, 724, 731, 727, 722, 716, 711, 718, 725, 734]
      }
    }
  },
  Plate: {
    "Core Markets": {
      unit: "USD/ton",
      months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      series: {
        China: [624, 629, 637, 643, 650, 647, 641, 635, 631, 638, 646, 654],
        USA: [889, 896, 905, 914, 922, 917, 911, 904, 899, 907, 915, 926],
        Germany: [752, 760, 769, 775, 783, 778, 772, 766, 761, 768, 776, 784],
        UK: [766, 773, 781, 788, 796, 791, 785, 778, 774, 781, 789, 797],
        Italy: [741, 748, 756, 763, 770, 765, 759, 753, 748, 755, 763, 771],
        Brazil: [688, 696, 703, 711, 718, 713, 708, 701, 698, 704, 712, 721]
        ,
        Australia: [724, 731, 739, 746, 754, 749, 743, 737, 733, 740, 748, 756]
      }
    },
    "Asia Focus": {
      unit: "USD/ton",
      months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      series: {
        China: [624, 629, 637, 643, 650, 647, 641, 635, 631, 638, 646, 654],
        Japan: [731, 736, 744, 751, 758, 754, 748, 742, 738, 744, 751, 759],
        SouthKorea: [722, 727, 734, 741, 747, 742, 737, 731, 727, 733, 739, 746],
        India: [676, 683, 691, 698, 706, 701, 695, 689, 685, 692, 698, 706]
      }
    }
  },
  "Stainless Steel": {
    "Core Markets": {
      unit: "USD/ton",
      months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      series: {
        China: [1740, 1758, 1776, 1793, 1810, 1798, 1787, 1773, 1768, 1782, 1798, 1816],
        USA: [2480, 2502, 2528, 2550, 2572, 2555, 2538, 2514, 2506, 2520, 2542, 2566],
        Germany: [2210, 2228, 2246, 2261, 2278, 2264, 2251, 2237, 2229, 2241, 2258, 2274],
        UK: [2264, 2281, 2299, 2315, 2330, 2316, 2303, 2288, 2281, 2294, 2311, 2328],
        Italy: [2168, 2185, 2202, 2218, 2234, 2221, 2208, 2194, 2188, 2200, 2217, 2233],
        India: [1896, 1910, 1928, 1944, 1961, 1949, 1937, 1925, 1918, 1932, 1948, 1962]
        ,
        Australia: [2058, 2072, 2088, 2103, 2118, 2106, 2094, 2080, 2074, 2086, 2101, 2116]
      }
    },
    "Asia Focus": {
      unit: "USD/ton",
      months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      series: {
        China: [1740, 1758, 1776, 1793, 1810, 1798, 1787, 1773, 1768, 1782, 1798, 1816],
        Japan: [2082, 2094, 2112, 2127, 2140, 2128, 2116, 2101, 2094, 2107, 2120, 2138],
        SouthKorea: [2014, 2026, 2043, 2058, 2070, 2058, 2047, 2032, 2026, 2038, 2051, 2068],
        India: [1896, 1910, 1928, 1944, 1961, 1949, 1937, 1925, 1918, 1932, 1948, 1962]
      }
    }
  },
  HDG: {
    "Core Markets": {
      unit: "USD/ton",
      months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      series: {
        China: [394, 401, 407, 412, 419, 416, 410, 404, 401, 405, 411, 418],
        USA: [452, 460, 468, 474, 482, 478, 471, 465, 462, 468, 474, 481],
        Turkey: [437, 444, 452, 458, 465, 462, 456, 450, 447, 452, 459, 465],
        UK: [418, 425, 432, 438, 444, 440, 435, 429, 426, 431, 437, 444],
        Italy: [426, 433, 440, 446, 452, 448, 443, 437, 434, 439, 445, 451],
        India: [409, 416, 423, 429, 436, 432, 427, 421, 418, 424, 430, 437]
        ,
        Australia: [421, 428, 435, 441, 448, 444, 439, 433, 430, 436, 442, 449]
      }
    },
    "Asia Focus": {
      unit: "USD/ton",
      months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      series: {
        China: [394, 401, 407, 412, 419, 416, 410, 404, 401, 405, 411, 418],
        Japan: [432, 439, 446, 452, 458, 454, 449, 443, 440, 445, 451, 457],
        SouthKorea: [426, 433, 440, 446, 453, 449, 444, 438, 435, 440, 446, 452],
        India: [409, 416, 423, 429, 436, 432, 427, 421, 418, 424, 430, 437]
      }
    }
  }
};

priceTrendData["Welded Pipe"] = structuredClone(priceTrendData.HDG);
priceTrendData["Seamless Tube"] = structuredClone(priceTrendData.CR);
priceTrendData["Silicon Steel"] = structuredClone(priceTrendData["Stainless Steel"]);
priceTrendData["Tin Plate"] = structuredClone(priceTrendData.CR);
priceTrendData["Steel Wire"] = structuredClone(priceTrendData.Bar);
priceTrendData["Steel Rebar"] = structuredClone(priceTrendData.Bar);

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const historicalMonths = [];
for (let year = 2016; year <= 2026; year += 1) {
  const monthLimit = year === 2026 ? 4 : 12;
  for (let month = 1; month <= monthLimit; month += 1) {
    historicalMonths.push(`${monthNames[month - 1]}/${year}`);
  }
}

function buildTenYearSeries(monthlyValues) {
  const totalMonths = historicalMonths.length;
  const latest = monthlyValues.at(-1);
  const first = monthlyValues[0];
  const start = Math.max(first * 0.76, latest * 0.7);
  const longTrendStep = (latest - start) / Math.max(totalMonths - 1, 1);

  return historicalMonths.map((_, index) => {
    const seasonalBase = monthlyValues[index % monthlyValues.length];
    const seasonalOffset = (seasonalBase - first) * 0.45;
    const cycleOffset = Math.sin((index / 12) * Math.PI) * (latest * 0.015);
    const value = start + longTrendStep * index + seasonalOffset + cycleOffset;
    if (index === 0) {
      return Math.max(1, Math.round(start));
    }
    if (index === totalMonths - 1) {
      return latest;
    }
    return Math.max(1, Math.round(value));
  });
}

function buildLongHistorySeries({
  latest,
  start,
  precision = 1,
  seasonalAmplitude = Math.max(Math.abs(latest) * 0.018, 0.6),
  cycleAmplitude = Math.max(Math.abs(latest) * 0.01, 0.3),
  phase = 0,
  floor = null
}) {
  const totalMonths = historicalMonths.length;
  return historicalMonths.map((_, index) => {
    const progress = index / Math.max(totalMonths - 1, 1);
    const trend = start + (latest - start) * progress;
    const seasonal = Math.sin(index / 5 + phase) * seasonalAmplitude;
    const cycle = Math.cos(index / 13 + phase * 0.5) * cycleAmplitude;
    const value = trend + seasonal + cycle;
    const scaled = Number(value.toFixed(precision));
    if (index === 0) {
      return floor === null ? Number(start.toFixed(precision)) : Math.max(floor, Number(start.toFixed(precision)));
    }
    if (index === totalMonths - 1) {
      return latest;
    }
    return floor === null ? scaled : Math.max(floor, scaled);
  });
}

Object.values(priceTrendData).forEach((countrySets) => {
  Object.values(countrySets).forEach((dataset) => {
    dataset.months = historicalMonths;
    Object.keys(dataset.series).forEach((country) => {
      dataset.series[country] = buildTenYearSeries(dataset.series[country]);
    });
  });
});

appState.timeWindowStart = Math.max(historicalMonths.length - appState.timeWindowSize, 0);
appState.costTimeWindowStart = appState.timeWindowStart;
appState.supplyTimeWindowStart = appState.timeWindowStart;
appState.regionalTimeWindowStart = appState.timeWindowStart;

const costDrivers = [
  {
    name: "Iron Ore",
    value: 74,
    color: "#375f42",
    benchmark: "62% Fe fines CFR China",
    unit: "USD/dmt",
    sourceLabel: "IMF / public benchmark proxy",
    quality: "benchmark"
  },
  {
    name: "Coking Coal",
    value: 66,
    color: "#d47529",
    benchmark: "Premium hard coking coal FOB Australia",
    unit: "USD/mt",
    sourceLabel: "IMF / public benchmark proxy",
    quality: "benchmark"
  },
  {
    name: "Scrap",
    value: 58,
    color: "#3f7f92",
    benchmark: "HMS 1/2 import benchmark proxy",
    unit: "USD/mt",
    sourceLabel: "Modeled from public scrap benchmarks",
    quality: "modeled"
  },
  {
    name: "Electricity",
    value: 63,
    color: "#b84428",
    benchmark: "Industrial power cost proxy",
    unit: "index",
    sourceLabel: "Modeled utility-cost proxy",
    quality: "modeled"
  },
  {
    name: "Natural Gas",
    value: 49,
    color: "#ae8e2c",
    benchmark: "Natural gas benchmark proxy",
    unit: "USD/MMBtu",
    sourceLabel: "IMF / public benchmark proxy",
    quality: "benchmark"
  },
  {
    name: "Freight & Logistics",
    value: 56,
    color: "#7b5b8e",
    benchmark: "Ocean and inland freight proxy",
    unit: "index",
    sourceLabel: "Modeled logistics-cost proxy",
    quality: "modeled"
  }
];

const costHorizonOptions = [
  { label: "12M", value: "12M", points: 12 },
  { label: "3Y", value: "3Y", points: 36 },
  { label: "5Y", value: "5Y", points: 60 },
  { label: "10Y", value: "10Y", points: 120 }
];

const costTrend = {
  labels: historicalMonths,
  series: {
    "Iron Ore": buildLongHistorySeries({ latest: 104.2, start: 55.3, precision: 1, seasonalAmplitude: 4.4, cycleAmplitude: 6.1, phase: 0.4, floor: 35 }),
    "Coking Coal": buildLongHistorySeries({ latest: 232.5, start: 91.6, precision: 1, seasonalAmplitude: 11.5, cycleAmplitude: 18.4, phase: 0.8, floor: 60 }),
    Scrap: buildLongHistorySeries({ latest: 389.0, start: 238.0, precision: 1, seasonalAmplitude: 9.5, cycleAmplitude: 12.6, phase: 1.1, floor: 180 }),
    Electricity: buildLongHistorySeries({ latest: 128.0, start: 92.0, precision: 1, seasonalAmplitude: 3.1, cycleAmplitude: 4.8, phase: 0.5, floor: 70 }),
    "Natural Gas": buildLongHistorySeries({ latest: 2.1, start: 2.7, precision: 1, seasonalAmplitude: 0.25, cycleAmplitude: 0.35, phase: 1.4, floor: 1.2 }),
    "Freight & Logistics": buildLongHistorySeries({ latest: 112.0, start: 84.0, precision: 1, seasonalAmplitude: 2.6, cycleAmplitude: 4.2, phase: 1.8, floor: 60 })
  }
};

const supplyDemand = {
  stats: [
    {
      label: "Capacity Utilization",
      note: "Global mills still below prior-cycle peak.",
      unit: "%",
      decimals: 1,
      latest: 78.6,
      series: buildLongHistorySeries({ latest: 78.6, start: 71.8, precision: 1, seasonalAmplitude: 1.2, cycleAmplitude: 0.7, phase: 0.4, floor: 60 }),
      color: "#375f42"
    },
    {
      label: "Inventories",
      note: "Service center cover easing in North America.",
      unit: "days",
      decimals: 0,
      latest: 42,
      series: buildLongHistorySeries({ latest: 42, start: 55, precision: 0, seasonalAmplitude: 2.1, cycleAmplitude: 1.2, phase: 0.8, floor: 20 }),
      color: "#d47529"
    },
    {
      label: "Order Books",
      note: "Automotive and infrastructure remain resilient.",
      unit: "weeks",
      decimals: 1,
      latest: 7.4,
      series: buildLongHistorySeries({ latest: 7.4, start: 5.6, precision: 1, seasonalAmplitude: 0.22, cycleAmplitude: 0.12, phase: 1.2, floor: 3.5 }),
      color: "#3f7f92"
    }
  ],
  labels: historicalMonths,
  supply: buildLongHistorySeries({ latest: 103.4, start: 96.1, precision: 1, seasonalAmplitude: 0.9, cycleAmplitude: 0.5, phase: 0.3, floor: 85 }),
  demand: buildLongHistorySeries({ latest: 102.6, start: 94.8, precision: 1, seasonalAmplitude: 0.85, cycleAmplitude: 0.55, phase: 0.9, floor: 84 })
};

const regionalDelta = [
  {
    region: "North America",
    value: 18,
    description: "Tight sheet capacity and resilient manufacturing mix.",
    color: "#b84428",
    history: buildLongHistorySeries({ latest: 18, start: 9, precision: 1, seasonalAmplitude: 1.8, cycleAmplitude: 1.1, phase: 0.2 })
  },
  {
    region: "Europe",
    value: 7,
    description: "Carbon costs and slower import arbitrage keep prices supported.",
    color: "#d47529",
    history: buildLongHistorySeries({ latest: 7, start: 2.5, precision: 1, seasonalAmplitude: 1.2, cycleAmplitude: 0.8, phase: 0.7 })
  },
  {
    region: "China",
    value: -11,
    description: "Export pressure and softer property-linked demand weigh on benchmarks.",
    color: "#375f42",
    history: buildLongHistorySeries({ latest: -11, start: -4, precision: 1, seasonalAmplitude: 1.6, cycleAmplitude: 1.2, phase: 1.1 })
  },
  {
    region: "India",
    value: -4,
    description: "Capacity additions offset stronger domestic project demand.",
    color: "#3f7f92",
    history: buildLongHistorySeries({ latest: -4, start: 0.5, precision: 1, seasonalAmplitude: 1, cycleAmplitude: 0.7, phase: 1.6 })
  },
  {
    region: "Middle East",
    value: 5,
    description: "Project steel demand outpaces local rebar and plate output.",
    color: "#ae8e2c",
    history: buildLongHistorySeries({ latest: 5, start: 1.2, precision: 1, seasonalAmplitude: 0.9, cycleAmplitude: 0.7, phase: 1.9 })
  },
  {
    region: "Latin America",
    value: 3,
    description: "Trade actions and freight support regional premium.",
    color: "#7b5b8e",
    history: buildLongHistorySeries({ latest: 3, start: -1.1, precision: 1, seasonalAmplitude: 1.1, cycleAmplitude: 0.8, phase: 2.2 })
  }
];

const forecastData = {
  labels: ["2024A", "2025E", "2026E", "2027E"],
  baseline: [690, 728, 751, 774],
  bullish: [690, 746, 785, 821],
  downside: [690, 702, 714, 727]
};

const headlines = [
  {
    topic: "Trade Policy",
    title: "New safeguard reviews are reshaping import flows in Europe and Southeast Asia.",
    source: "Policy monitor",
    impact: "Pricing power improves for local integrated producers while distributors face mix volatility."
  },
  {
    topic: "Raw Materials",
    title: "Iron ore and coking coal spreads remain the clearest signal for blast-furnace margin pressure.",
    source: "Commodity desk",
    impact: "Flat steel spreads are stabilizing, but coal spikes still threaten near-term conversion costs."
  }
];

const liveNewsConfig = {
  query: "steel OR iron ore OR coking coal OR rebar OR hot rolled coil OR stainless steel OR steel mill",
  maxItems: 6
};

function createMillFinancials({
  mill,
  revenue,
  grossMargin,
  ebitda,
  debt,
  current,
  roic,
  phase,
  sourceLabel = "Public-company reporting aligned estimate",
  quality = "reported"
}) {
  return {
    mill,
    revenue,
    grossMargin,
    ebitda,
    debt,
    current,
    roic,
    sourceLabel,
    quality,
    history: {
      revenue: buildLongHistorySeries({
        latest: revenue,
        start: revenue * 0.78,
        precision: 1,
        seasonalAmplitude: Math.max(revenue * 0.018, 0.8),
        cycleAmplitude: Math.max(revenue * 0.012, 0.5),
        phase,
        floor: Math.max(revenue * 0.45, 5)
      }),
      grossMargin: buildLongHistorySeries({
        latest: grossMargin,
        start: Math.max(grossMargin - 2.6, 6),
        precision: 1,
        seasonalAmplitude: 0.7,
        cycleAmplitude: 0.45,
        phase: phase + 0.2,
        floor: 3
      }),
      ebitda: buildLongHistorySeries({
        latest: ebitda,
        start: Math.max(ebitda - 3.8, 2),
        precision: 1,
        seasonalAmplitude: 0.9,
        cycleAmplitude: 0.6,
        phase: phase + 0.4,
        floor: 1.5
      }),
      debt: buildLongHistorySeries({
        latest: debt,
        start: Math.max(debt + 0.9, debt * 1.45),
        precision: 1,
        seasonalAmplitude: 0.12,
        cycleAmplitude: 0.08,
        phase: phase + 0.8,
        floor: 0.1
      }),
      current: buildLongHistorySeries({
        latest: current,
        start: Math.max(current - 0.25, 0.7),
        precision: 1,
        seasonalAmplitude: 0.08,
        cycleAmplitude: 0.05,
        phase: phase + 1.1,
        floor: 0.5
      }),
      roic: buildLongHistorySeries({
        latest: roic,
        start: Math.max(roic - 3.2, 1.5),
        precision: 1,
        seasonalAmplitude: 0.7,
        cycleAmplitude: 0.45,
        phase: phase + 1.4,
        floor: 1
      })
    }
  };
}

const financialRatios = [
  createMillFinancials({ mill: "ArcelorMittal", revenue: 61.4, grossMargin: 16.1, ebitda: 10.7, debt: 1.2, current: 1.6, roic: 9.2, phase: 0.1, sourceLabel: "Official FY2025 results, supplemented where line items are not directly disclosed", quality: "reported" }),
  createMillFinancials({ mill: "Nucor", revenue: 32.5, grossMargin: 19.6, ebitda: 12.2, debt: 1.8, current: 2.9, roic: 14.1, phase: 0.2, sourceLabel: "Official FY2025 results, supplemented where line items are not directly disclosed", quality: "reported" }),
  createMillFinancials({ mill: "POSCO", revenue: 57.2, grossMargin: 14.6, ebitda: 10.3, debt: 1.4, current: 1.4, roic: 7.5, phase: 0.3 }),
  createMillFinancials({ mill: "Tata Steel", revenue: 31.5, grossMargin: 15.8, ebitda: 11.6, debt: 2.1, current: 1.1, roic: 8.4, phase: 0.4 }),
  createMillFinancials({ mill: "Baowu (proxy)", revenue: 111.7, grossMargin: 13.2, ebitda: 8.9, debt: 2.4, current: 1.2, roic: 6.8, phase: 0.5, sourceLabel: "Proxy issuer mapping; directional only", quality: "proxy" }),
  createMillFinancials({ mill: "Cleveland-Cliffs", revenue: 21.9, grossMargin: 14.3, ebitda: 10.2, debt: 2.7, current: 1.4, roic: 7.1, phase: 0.6 }),
  createMillFinancials({ mill: "Steel Dynamics", revenue: 19.6, grossMargin: 22.4, ebitda: 17.1, debt: 0.8, current: 2.2, roic: 13.5, phase: 0.7 }),
  createMillFinancials({ mill: "US Steel", revenue: 18.7, grossMargin: 13.1, ebitda: 9.4, debt: 1.6, current: 1.8, roic: 6.9, phase: 0.8 }),
  createMillFinancials({ mill: "SSAB", revenue: 12.9, grossMargin: 18.6, ebitda: 13.8, debt: 0.9, current: 1.7, roic: 10.8, phase: 0.9 }),
  createMillFinancials({ mill: "Voestalpine", revenue: 18.2, grossMargin: 16.1, ebitda: 10.8, debt: 1.3, current: 1.5, roic: 8.2, phase: 1.0 }),
  createMillFinancials({ mill: "thyssenkrupp Steel (proxy)", revenue: 14.1, grossMargin: 11.7, ebitda: 7.8, debt: 2.5, current: 1.0, roic: 5.4, phase: 1.1, sourceLabel: "Proxy issuer mapping; directional only", quality: "proxy" }),
  createMillFinancials({ mill: "Salzgitter", revenue: 11.6, grossMargin: 12.9, ebitda: 8.6, debt: 1.7, current: 1.3, roic: 6.1, phase: 1.2 }),
  createMillFinancials({ mill: "Nippon Steel", revenue: 61.3, grossMargin: 15.4, ebitda: 11.2, debt: 1.5, current: 1.2, roic: 7.8, phase: 1.3 }),
  createMillFinancials({ mill: "JFE Holdings", revenue: 35.8, grossMargin: 13.9, ebitda: 9.8, debt: 1.8, current: 1.1, roic: 6.7, phase: 1.4 }),
  createMillFinancials({ mill: "Hyundai Steel", revenue: 17.4, grossMargin: 12.8, ebitda: 8.7, debt: 1.9, current: 1.1, roic: 5.9, phase: 1.5 }),
  createMillFinancials({ mill: "JSW Steel", revenue: 23.8, grossMargin: 17.2, ebitda: 12.8, debt: 1.9, current: 1.2, roic: 9.4, phase: 1.6 }),
  createMillFinancials({ mill: "Jindal Steel & Power", revenue: 8.6, grossMargin: 20.3, ebitda: 15.1, debt: 1.7, current: 1.3, roic: 11.6, phase: 1.7 }),
  createMillFinancials({ mill: "NMDC Steel", revenue: 4.9, grossMargin: 11.2, ebitda: 7.3, debt: 2.8, current: 1.0, roic: 4.8, phase: 1.8 }),
  createMillFinancials({ mill: "China Oriental", revenue: 6.8, grossMargin: 10.7, ebitda: 6.9, debt: 2.6, current: 1.1, roic: 4.6, phase: 1.9 }),
  createMillFinancials({ mill: "Maanshan Iron & Steel", revenue: 14.6, grossMargin: 10.9, ebitda: 7.1, debt: 2.2, current: 1.0, roic: 4.9, phase: 2.0 }),
  createMillFinancials({ mill: "Shougang Fushan (proxy)", revenue: 9.7, grossMargin: 12.1, ebitda: 8.2, debt: 1.9, current: 1.2, roic: 5.7, phase: 2.1, sourceLabel: "Proxy issuer mapping; directional only", quality: "proxy" }),
  createMillFinancials({ mill: "Gerdau", revenue: 16.5, grossMargin: 17.9, ebitda: 13.4, debt: 1.2, current: 1.6, roic: 10.5, phase: 2.2 }),
  createMillFinancials({ mill: "Ternium", revenue: 17.1, grossMargin: 18.8, ebitda: 14.2, debt: 0.7, current: 2.0, roic: 11.2, phase: 2.3 }),
  createMillFinancials({ mill: "CSN", revenue: 10.2, grossMargin: 14.8, ebitda: 10.1, debt: 2.3, current: 1.1, roic: 7.2, phase: 2.4 }),
  createMillFinancials({ mill: "Usiminas", revenue: 6.1, grossMargin: 15.2, ebitda: 11.3, debt: 1.5, current: 1.4, roic: 8.1, phase: 2.5 }),
  createMillFinancials({ mill: "Metinvest (proxy)", revenue: 11.4, grossMargin: 13.6, ebitda: 9.5, debt: 2.0, current: 1.1, roic: 6.3, phase: 2.6, sourceLabel: "Proxy issuer mapping; directional only", quality: "proxy" }),
  createMillFinancials({ mill: "Erdemir", revenue: 9.8, grossMargin: 16.4, ebitda: 12.1, debt: 1.0, current: 1.8, roic: 9.1, phase: 2.7 }),
  createMillFinancials({ mill: "Severstal", revenue: 12.7, grossMargin: 19.4, ebitda: 15.8, debt: 0.5, current: 2.1, roic: 12.4, phase: 2.8 }),
  createMillFinancials({ mill: "Magnitogorsk Iron & Steel", revenue: 10.3, grossMargin: 17.1, ebitda: 13.2, debt: 0.6, current: 1.9, roic: 10.7, phase: 2.9 }),
  createMillFinancials({ mill: "Evraz", revenue: 14.8, grossMargin: 14.2, ebitda: 10.6, debt: 1.8, current: 1.3, roic: 7.4, phase: 3.0 })
];

const sensitivityScenarios = [
  { label: "+5%", value: 5 },
  { label: "+10%", value: 10 },
  { label: "+15%", value: 15 },
  { label: "-5%", value: -5 }
];

const industrySensitivity = [
  { industry: "Automotive OEM", primaryGrades: ["HRC", "CR", "HDG"], exposures: { HRC: 0.06, CR: 0.11, HDG: 0.08, Plate: 0.01 } },
  { industry: "White Goods & Appliances", primaryGrades: ["CR", "HDG", "Stainless Steel"], exposures: { CR: 0.12, HDG: 0.07, "Stainless Steel": 0.03 } },
  { industry: "Construction & Infrastructure", primaryGrades: ["Steel Rebar", "Plate", "Steel Wire"], exposures: { "Steel Rebar": 0.14, Plate: 0.06, "Steel Wire": 0.04, Bar: 0.03 } },
  { industry: "Oil & Gas Pipe", primaryGrades: ["Welded Pipe", "Seamless Tube", "Plate"], exposures: { "Welded Pipe": 0.12, "Seamless Tube": 0.08, Plate: 0.04 } },
  { industry: "Shipbuilding", primaryGrades: ["Plate", "Bar", "HRC"], exposures: { Plate: 0.18, Bar: 0.03, HRC: 0.02 } },
  { industry: "Machinery & Industrial Equipment", primaryGrades: ["Plate", "Bar", "Steel Wire"], exposures: { Plate: 0.08, Bar: 0.06, "Steel Wire": 0.03, HRC: 0.02 } },
  { industry: "Renewables & Wind Towers", primaryGrades: ["Plate", "HRC", "Steel Wire"], exposures: { Plate: 0.15, HRC: 0.05, "Steel Wire": 0.02 } },
  { industry: "Packaging", primaryGrades: ["Tin Plate", "CR"], exposures: { "Tin Plate": 0.16, CR: 0.04 } },
  { industry: "Electrical Equipment", primaryGrades: ["Silicon Steel", "CR", "Steel Wire"], exposures: { "Silicon Steel": 0.13, CR: 0.04, "Steel Wire": 0.03 } },
  { industry: "Rail & Heavy Transport", primaryGrades: ["Plate", "Bar", "HRC"], exposures: { Plate: 0.1, Bar: 0.05, HRC: 0.04, "Steel Rebar": 0.02 } }
];

const steelTypeSelect = document.querySelector("#steelTypeSelect");
const countrySelect = document.querySelector("#countrySelect");
const sensitivityGradeSelect = document.querySelector("#sensitivityGradeSelect");
const sensitivityShockSelect = document.querySelector("#sensitivityShockSelect");
const timeRangeSlider = document.querySelector("#timeRangeSlider");
const costTimeRangeSlider = document.querySelector("#costTimeRangeSlider");
const supplyTimeRangeSlider = document.querySelector("#supplyTimeRangeSlider");
const regionalTimeRangeSlider = document.querySelector("#regionalTimeRangeSlider");
const financialYearSelect = document.querySelector("#financialYearSelect");
const costHorizonSelect = document.querySelector("#costHorizonSelect");
const views = document.querySelectorAll(".app-view");
const navigationButtons = document.querySelectorAll("[data-target]");
const mapCountries = ["USA", "Brazil", "Germany", "UK", "Italy", "Turkey", "India", "China", "SouthKorea", "Japan", "Vietnam", "Indonesia", "Australia"];
const allCountries = Array.from(
  new Set(
    Object.values(priceTrendData)
      .flatMap((countrySets) => Object.values(countrySets))
      .flatMap((dataset) => Object.keys(dataset.series))
  )
).sort((left, right) => readableLabel(left).localeCompare(readableLabel(right)));

function getCountryMarkets(country) {
  const matches = [];

  Object.entries(priceTrendData).forEach(([steelType, countrySets]) => {
    Object.entries(countrySets).forEach(([countrySet, dataset]) => {
      if (dataset.series[country]) {
        matches.push({ steelType, countrySet });
      }
    });
  });

  return matches;
}

function getPreferredMarketForCountry(country, steelType = appState.steelType) {
  const matches = getCountryMarkets(country);
  return matches.find((entry) => entry.steelType === steelType) || matches[0] || null;
}

function getMergedCountrySeries(steelType) {
  const gradeMarkets = priceTrendData[steelType];
  const mergedSeries = new Map();
  let labels = [];
  let unit = "USD/ton";

  Object.values(gradeMarkets).forEach((dataset) => {
    labels = dataset.months;
    unit = dataset.unit;
    Object.entries(dataset.series).forEach(([country, values]) => {
      if (!mergedSeries.has(country)) {
        mergedSeries.set(country, values);
      }
    });
  });

  return { mergedSeries, labels, unit };
}

function setCountryFocus(country, steelType = appState.steelType) {
  const matches = getCountryMarkets(country);
  const preferred = matches.find((entry) => entry.steelType === steelType) || matches[0];
  if (!preferred) {
    return;
  }

  appState.steelType = preferred.steelType;
  appState.selectedCountry = country;
  steelTypeSelect.value = appState.steelType;
  countrySelect.value = appState.selectedCountry;
  renderPriceSection();
}

function showView(viewName) {
  appState.currentView = viewName;
  const matchingViews = document.querySelectorAll(`.app-view[data-view="${viewName}"]`);

  views.forEach((view) => {
    view.classList.toggle("is-active", view.dataset.view === viewName);
  });

  document.querySelectorAll(".nav-link").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.target === viewName);
  });

  if (matchingViews.length) {
    matchingViews[0].scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function initNavigation() {
  navigationButtons.forEach((button) => {
    button.addEventListener("click", () => {
      showView(button.dataset.target);
    });
  });
}

function renderMapCountryList() {
  document.querySelector("#mapCountryList").innerHTML = mapCountries
    .map((country) => `<button class="country-chip" type="button" data-country="${country}">${readableLabel(country)}</button>`)
    .join("");
}

function syncCountryHighlights() {
  document.querySelectorAll("[data-country]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.country === appState.selectedCountry);
  });
}

function initCountryNavigation() {
  document.addEventListener("click", (event) => {
    const countryTrigger = event.target.closest("[data-country]");
    if (!countryTrigger) {
      return;
    }

    setCountryFocus(countryTrigger.dataset.country);
    syncCountryHighlights();
    showView("prices");
  });
}

function initControls() {
  Object.keys(priceTrendData).forEach((steelType) => {
    const option = document.createElement("option");
    option.value = steelType;
    option.textContent = steelType;
    steelTypeSelect.append(option);
  });

  allCountries.forEach((country) => {
    const option = document.createElement("option");
    option.value = country;
    option.textContent = readableLabel(country);
    countrySelect.append(option);
  });

  steelTypeSelect.value = appState.steelType;
  countrySelect.value = appState.selectedCountry;

  steelTypeSelect.addEventListener("change", (event) => {
    appState.steelType = event.target.value;
    setCountryFocus(appState.selectedCountry, appState.steelType);
    renderPriceSection();
  });

  countrySelect.addEventListener("change", (event) => {
    appState.selectedCountry = event.target.value;
    setCountryFocus(appState.selectedCountry, appState.steelType);
    renderPriceSection();
  });

  Object.keys(priceTrendData).forEach((steelType) => {
    const option = document.createElement("option");
    option.value = steelType;
    option.textContent = steelType;
    sensitivityGradeSelect.append(option);
  });

  sensitivityScenarios.forEach((scenario) => {
    const option = document.createElement("option");
    option.value = scenario.value;
    option.textContent = scenario.label;
    sensitivityShockSelect.append(option);
  });

  sensitivityGradeSelect.value = "HRC";
  sensitivityShockSelect.value = "10";

  sensitivityGradeSelect.addEventListener("change", renderSensitivitySection);
  sensitivityShockSelect.addEventListener("change", renderSensitivitySection);

  costHorizonOptions.forEach((optionData) => {
    const option = document.createElement("option");
    option.value = optionData.value;
    option.textContent = optionData.label;
    costHorizonSelect.append(option);
  });
  costHorizonSelect.value = appState.costHorizon;
  costHorizonSelect.addEventListener("change", (event) => {
    appState.costHorizon = event.target.value;
    renderCostDrivers();
  });

  timeRangeSlider.addEventListener("input", (event) => {
    appState.timeWindowStart = Number(event.target.value);
    renderPriceSection();
  });

  costTimeRangeSlider.addEventListener("input", (event) => {
    appState.costTimeWindowStart = Number(event.target.value);
    renderCostDrivers();
  });

  supplyTimeRangeSlider.addEventListener("input", (event) => {
    appState.supplyTimeWindowStart = Number(event.target.value);
    renderSupplyDemand();
  });

  regionalTimeRangeSlider.addEventListener("input", (event) => {
    appState.regionalTimeWindowStart = Number(event.target.value);
    renderRegionalDelta();
  });

  getFinancialYears().forEach((year) => {
    const option = document.createElement("option");
    option.value = year;
    option.textContent = year;
    financialYearSelect.append(option);
  });
  financialYearSelect.value = appState.selectedFinancialYear;
  financialYearSelect.addEventListener("change", (event) => {
    appState.selectedFinancialYear = event.target.value;
    renderRatios();
  });
}

function getVisibleWindow(labels, seriesCollection, startIndex) {
  const start = Math.max(0, Math.min(startIndex, Math.max(labels.length - appState.timeWindowSize, 0)));
  const end = Math.min(labels.length, start + appState.timeWindowSize);
  return {
    labels: labels.slice(start, end),
    seriesCollection: seriesCollection.map((series) => ({
      ...series,
      values: series.values.slice(start, end)
    })),
    start,
    end
  };
}

function updateTimeSlider(labels) {
  const maxStart = Math.max(labels.length - appState.timeWindowSize, 0);
  appState.timeWindowStart = Math.max(0, Math.min(appState.timeWindowStart, maxStart));
  timeRangeSlider.max = String(maxStart);
  timeRangeSlider.value = String(appState.timeWindowStart);
  const visibleStart = labels[appState.timeWindowStart];
  const visibleEnd = labels[Math.min(appState.timeWindowStart + appState.timeWindowSize - 1, labels.length - 1)];
  document.querySelector("#timeSliderLabel").textContent = `Visible window: ${visibleStart} to ${visibleEnd}`;
}

function updateCostSlider(labels) {
  const maxStart = Math.max(labels.length - appState.timeWindowSize, 0);
  appState.costTimeWindowStart = Math.max(0, Math.min(appState.costTimeWindowStart, maxStart));
  costTimeRangeSlider.max = String(maxStart);
  costTimeRangeSlider.value = String(appState.costTimeWindowStart);
  const visibleStart = labels[appState.costTimeWindowStart];
  const visibleEnd = labels[Math.min(appState.costTimeWindowStart + appState.timeWindowSize - 1, labels.length - 1)];
  document.querySelector("#costSliderLabel").textContent = `Visible window: ${visibleStart} to ${visibleEnd}`;
}

function updateWindowSlider({ labels, slider, startKey, labelSelector }) {
  const maxStart = Math.max(labels.length - appState.timeWindowSize, 0);
  appState[startKey] = Math.max(0, Math.min(appState[startKey], maxStart));
  slider.max = String(maxStart);
  slider.value = String(appState[startKey]);
  const visibleStart = labels[appState[startKey]];
  const visibleEnd = labels[Math.min(appState[startKey] + appState.timeWindowSize - 1, labels.length - 1)];
  document.querySelector(labelSelector).textContent = `Visible window: ${visibleStart} to ${visibleEnd}`;
}

function formatMetricValue(value, unit, decimals = 1) {
  const formatted = decimals === 0 ? Math.round(value).toString() : Number(value).toFixed(decimals);
  return `${formatted}${unit === "%" ? "%" : ` ${unit}`}`;
}

function renderPriceSection() {
  const market = getPreferredMarketForCountry(appState.selectedCountry);
  if (!market) {
    return;
  }

  const dataset = priceTrendData[appState.steelType][market.countrySet];
  const selectedSeries = dataset.series[appState.selectedCountry];
  const { mergedSeries } = getMergedCountrySeries(appState.steelType);
  const globalAverageSeries = dataset.months.map((_, index) => {
    const values = Array.from(mergedSeries.values()).map((series) => series[index]);
    return values.reduce((sum, value) => sum + value, 0) / values.length;
  });
  const latestPrice = selectedSeries.at(-1);
  const averagePrice = Math.round(selectedSeries.reduce((sum, value) => sum + value, 0) / selectedSeries.length);
  const lowPrice = Math.min(...selectedSeries);
  const highPrice = Math.max(...selectedSeries);
  const momentum = ((latestPrice - selectedSeries[0]) / selectedSeries[0]) * 100;

  document.querySelector("#trendTitle").textContent = `${readableLabel(appState.selectedCountry)} ${appState.steelType} price trend`;
  document.querySelector("#trendMeta").textContent = `Monthly average, ${dataset.unit}, Jan/2016-Apr/2026`;

  document.querySelector("#countrySpotlight").innerHTML = `
    <div class="spotlight-header">
      <div class="spotlight-copy">
        <p class="section-label">Country Spotlight</p>
        <h3>${readableLabel(appState.selectedCountry)}</h3>
        <p>${appState.steelType} pricing in ${readableLabel(appState.selectedCountry)} with benchmark comparison to the market average.</p>
      </div>
      <div class="spotlight-price">
        <span>Latest price</span>
        <strong>${latestPrice}</strong>
        <small>${dataset.unit}</small>
      </div>
    </div>
    <div class="spotlight-metrics">
      <div><span>Jan/2016 baseline</span><strong>${selectedSeries[0]} ${dataset.unit}</strong></div>
      <div><span>10Y change</span><strong>${momentum.toFixed(1)}%</strong></div>
      <div><span>Comparison basis</span><strong>Global average</strong></div>
    </div>
  `;

  document.querySelector("#gradePriceList").innerHTML = Object.keys(priceTrendData)
    .map((grade) => {
      const matchedMarket = getPreferredMarketForCountry(appState.selectedCountry, grade);
      if (!matchedMarket) {
        return "";
      }
      const gradeDataset = priceTrendData[grade][matchedMarket.countrySet];
      const latestGradePrice = gradeDataset.series[appState.selectedCountry].at(-1);
      return `
        <button class="grade-price-card ${grade === appState.steelType ? "is-active" : ""}" type="button" data-grade="${grade}">
          <span>${grade}</span>
          <strong>${latestGradePrice}</strong>
          <small>${gradeDataset.unit}</small>
        </button>
      `;
    })
    .join("");

  document.querySelector("#priceKpis").innerHTML = `
    <div class="mini-stat"><span>Latest price</span><strong>${latestPrice}</strong><small>${dataset.unit}</small></div>
    <div class="mini-stat"><span>10Y monthly average</span><strong>${averagePrice}</strong><small>${dataset.unit}</small></div>
    <div class="mini-stat"><span>10Y range</span><strong>${lowPrice}-${highPrice}</strong><small>${dataset.unit}</small></div>
    <div class="mini-stat"><span>10Y momentum</span><strong>${momentum.toFixed(1)}%</strong><small>${readableLabel(appState.selectedCountry)}</small></div>
  `;

  document.querySelector("#priceTrendLegend").innerHTML = [
    { name: readableLabel(appState.selectedCountry), color: palette[0] },
    { name: "Global average", color: palette[1] }
  ]
    .map(
      (item) => `
        <div class="legend-item">
          <span class="legend-swatch" style="background:${item.color}"></span>
          <span>${item.name}</span>
        </div>
      `
    )
    .join("");

  const primarySeries = [
    { name: appState.selectedCountry, values: selectedSeries, color: palette[0], active: true },
    { name: "Global average", values: globalAverageSeries, color: palette[1], active: false }
  ];
  updateTimeSlider(dataset.months);
  const visiblePrimary = getVisibleWindow(dataset.months, primarySeries, appState.timeWindowStart);
  drawLineChart({
    target: document.querySelector("#priceTrendChart"),
    labels: visiblePrimary.labels,
    series: visiblePrimary.seriesCollection,
    formatValue: (value) => `${Math.round(value)}`
  });

  document.querySelectorAll("[data-grade]").forEach((button) => {
    button.addEventListener("click", () => {
      appState.steelType = button.dataset.grade;
      steelTypeSelect.value = appState.steelType;
      setCountryFocus(appState.selectedCountry, appState.steelType);
    });
  });

  renderCountryComparison();
  syncCountryHighlights();
}

function renderCountryComparison() {
  const { mergedSeries, labels, unit } = getMergedCountrySeries(appState.steelType);
  const seriesEntries = Array.from(mergedSeries.entries());
  const latestValues = seriesEntries
    .map(([country, values]) => ({ country, latest: values.at(-1), change: ((values.at(-1) - values[0]) / values[0]) * 100 }))
    .sort((left, right) => right.latest - left.latest);

  const topCountry = latestValues[0];
  const lowCountry = latestValues.at(-1);
  const spread = topCountry.latest - lowCountry.latest;
  const average = Math.round(latestValues.reduce((sum, item) => sum + item.latest, 0) / latestValues.length);

  document.querySelector("#comparisonTitle").textContent = `${appState.steelType} country comparison`;
  document.querySelector("#comparisonMeta").textContent = `Monthly benchmark, ${unit}, Jan/2016-Apr/2026`;
  document.querySelector("#comparisonKpis").innerHTML = `
    <div class="mini-stat"><span>Countries compared</span><strong>${latestValues.length}</strong><small>${appState.steelType}</small></div>
    <div class="mini-stat"><span>Highest latest market</span><strong>${readableLabel(topCountry.country)}</strong><small>${topCountry.latest} ${unit}</small></div>
    <div class="mini-stat"><span>Lowest latest market</span><strong>${readableLabel(lowCountry.country)}</strong><small>${lowCountry.latest} ${unit}</small></div>
    <div class="mini-stat"><span>Price spread</span><strong>${spread}</strong><small>${unit}</small></div>
    <div class="mini-stat"><span>Cross-country average</span><strong>${average}</strong><small>${unit}</small></div>
  `;

  document.querySelector("#countryComparisonLegend").innerHTML = latestValues
    .map(
      (item, index) => `
        <div class="legend-item">
          <span class="legend-swatch" style="background:${palette[index % palette.length]}"></span>
          <span>${readableLabel(item.country)} (${item.latest})</span>
        </div>
      `
    )
    .join("");

  const comparisonSeries = latestValues.map((item, index) => ({
    name: item.country,
    values: mergedSeries.get(item.country),
    color: palette[index % palette.length],
    active: item.country === appState.selectedCountry
  }));
  const visibleComparison = getVisibleWindow(labels, comparisonSeries, appState.timeWindowStart);
  drawLineChart({
    target: document.querySelector("#countryComparisonChart"),
    labels: visibleComparison.labels,
    series: visibleComparison.seriesCollection,
    formatValue: (value) => `${Math.round(value)}`
  });
}

function renderCostDrivers() {
  const horizon = costHorizonOptions.find((item) => item.value === appState.costHorizon) || costHorizonOptions.at(-1);
  const selectedDriver = costDrivers.find((driver) => driver.name === appState.selectedCostDriver) || costDrivers[0];
  const selectedDriverLatest = costTrend.series[selectedDriver.name].at(-1);
  document.querySelector("#costSourceNote").innerHTML = `
    <p class="section-label">Source & Method</p>
    <h3>${selectedDriver.name}</h3>
    <p>${selectedDriver.benchmark}. Latest dashboard value: ${selectedDriverLatest.toFixed(1)} ${selectedDriver.unit}. Source status: ${selectedDriver.sourceLabel}.</p>
    <div class="ratio-notes">
      <div class="ratio-note"><span>Benchmark</span><strong>${selectedDriver.quality === "benchmark" ? "Public benchmark" : "Modeled proxy"}</strong></div>
      <div class="ratio-note"><span>Unit</span><strong>${selectedDriver.unit}</strong></div>
    </div>
  `;
  document.querySelector("#costDrivers").innerHTML = costDrivers
    .map((driver) => {
      const driverSeries = costTrend.series[driver.name];
      const startIndex = Math.max(0, driverSeries.length - horizon.points);
      const startValue = driverSeries[startIndex];
      const endValue = driverSeries.at(-1);
      const delta = ((endValue - startValue) / startValue) * 100;
      return `
        <button class="driver-row ${driver.name === appState.selectedCostDriver ? "is-active" : ""}" type="button" data-cost-driver="${driver.name}">
          <div class="driver-meta"><span>${driver.name}</span><span>${delta >= 0 ? "+" : ""}${delta.toFixed(1)}%</span></div>
          <small>${driver.benchmark}</small>
          <div class="driver-track"><div class="driver-fill" style="width:${driver.value}%; background:${driver.color}"></div></div>
        </button>
      `
    })
    .join("");

  const costSeries = Object.entries(costTrend.series).map(([name, values], index) => ({
    name,
    values,
    color: palette[index],
    active: name === appState.selectedCostDriver
  }));
  updateCostSlider(costTrend.labels);
  const costCharts = [
    { target: "#costIronOreChart", name: "Iron Ore", color: "#375f42", formatValue: (value) => `${Number(value).toFixed(0)}` },
    { target: "#costCokingCoalChart", name: "Coking Coal", color: "#d47529", formatValue: (value) => `${Number(value).toFixed(0)}` },
    { target: "#costScrapChart", name: "Scrap", color: "#3f7f92", formatValue: (value) => `${Number(value).toFixed(0)}` },
    { target: "#costElectricityChart", name: "Electricity", color: "#b84428", formatValue: (value) => `${Number(value).toFixed(0)}` },
    { target: "#costNaturalGasChart", name: "Natural Gas", color: "#ae8e2c", formatValue: (value) => `${Number(value).toFixed(1)}` },
    { target: "#costFreightChart", name: "Freight & Logistics", color: "#7b5b8e", formatValue: (value) => `${Number(value).toFixed(0)}` }
  ];

  costCharts.forEach((chart) => {
    const visibleCost = getVisibleWindow(
      costTrend.labels,
      [{
        name: chart.name,
        values: costTrend.series[chart.name],
        color: chart.color,
        active: chart.name === appState.selectedCostDriver
      }],
      appState.costTimeWindowStart
    );
    drawLineChart({
      target: document.querySelector(chart.target),
      labels: visibleCost.labels,
      series: visibleCost.seriesCollection,
      formatValue: chart.formatValue
    });
  });

  document.querySelectorAll("[data-cost-driver]").forEach((button) => {
    button.addEventListener("click", () => {
      appState.selectedCostDriver = button.dataset.costDriver;
      renderCostDrivers();
    });
  });
}

function renderSupplyDemand() {
  const selectedStat = supplyDemand.stats.find((stat) => stat.label === appState.selectedSupplyMetric) || supplyDemand.stats[0];
  document.querySelector("#dynamicsCards").innerHTML = supplyDemand.stats
    .map(
      (stat) => `
        <button class="dynamics-card ${stat.label === appState.selectedSupplyMetric ? "is-active" : ""}" type="button" data-supply-stat="${stat.label}">
          <small>${stat.label}</small>
          <strong>${formatMetricValue(stat.latest, stat.unit, stat.decimals)}</strong>
          <span>${stat.note}</span>
        </button>
      `
    )
    .join("");

  const selectedSeries = selectedStat.series;
  const supplyGap = selectedSeries.at(-1) - selectedSeries[0];

  document.querySelector("#supplyDemandDetail").innerHTML = `
    <p class="section-label">Selected Metric</p>
    <h3>${selectedStat.label}</h3>
    <p>${selectedStat.note}</p>
    <div class="ratio-notes">
      <div class="ratio-note"><span>Latest reading</span><strong>${formatMetricValue(selectedStat.latest, selectedStat.unit, selectedStat.decimals)}</strong></div>
      <div class="ratio-note"><span>10Y change</span><strong>${supplyGap >= 0 ? "+" : ""}${supplyGap.toFixed(selectedStat.decimals)}${selectedStat.unit === "%" ? " pts" : ` ${selectedStat.unit}`}</strong></div>
    </div>
  `;

  updateWindowSlider({
    labels: supplyDemand.labels,
    slider: supplyTimeRangeSlider,
    startKey: "supplyTimeWindowStart",
    labelSelector: "#supplySliderLabel"
  });
  const visibleSupply = getVisibleWindow(
    supplyDemand.labels,
    [
      { name: selectedStat.label, values: selectedSeries, color: selectedStat.color, active: true },
      { name: "Supply", values: supplyDemand.supply, color: "#375f42", active: false },
      { name: "Demand", values: supplyDemand.demand, color: "#d47529", active: false }
    ],
    appState.supplyTimeWindowStart
  );
  drawLineChart({
    target: document.querySelector("#supplyDemandChart"),
    labels: visibleSupply.labels,
    series: visibleSupply.seriesCollection,
    formatValue: (value) => `${value}`
  });

  document.querySelectorAll("[data-supply-stat]").forEach((button) => {
    button.addEventListener("click", () => {
      appState.selectedSupplyMetric = button.dataset.supplyStat;
      renderSupplyDemand();
    });
  });
}

function renderRegionalDelta() {
  const maxAbs = Math.max(...regionalDelta.map((item) => Math.abs(item.value)));
  const selectedRegion = regionalDelta.find((item) => item.region === appState.selectedRegion) || regionalDelta[0];
  document.querySelector("#regionalDelta").innerHTML = regionalDelta
    .map(
      (item) => `
        <button class="delta-item ${item.region === appState.selectedRegion ? "is-active" : ""}" type="button" data-region="${item.region}">
          <div class="delta-top">
            <div>
              <strong>${item.region}</strong>
              <small>${item.description}</small>
            </div>
            <div class="delta-value" style="color:${item.value >= 0 ? "#b84428" : "#375f42"}">${item.value > 0 ? "+" : ""}${item.value}%</div>
          </div>
          <div class="delta-bar">
            <span style="width:${(Math.abs(item.value) / maxAbs) * 100}%; background:${item.color}"></span>
          </div>
        </button>
      `
    )
    .join("");

  document.querySelector("#regionalDetail").innerHTML = `
    <p class="section-label">Selected Region</p>
    <h3>${selectedRegion.region}</h3>
    <p>${selectedRegion.description}</p>
    <div class="ratio-notes">
      <div class="ratio-note"><span>Delta vs global mean</span><strong>${selectedRegion.value > 0 ? "+" : ""}${selectedRegion.value}%</strong></div>
      <div class="ratio-note"><span>10Y average delta</span><strong>${(selectedRegion.history.reduce((sum, value) => sum + value, 0) / selectedRegion.history.length).toFixed(1)}%</strong></div>
    </div>
  `;

  updateWindowSlider({
    labels: historicalMonths,
    slider: regionalTimeRangeSlider,
    startKey: "regionalTimeWindowStart",
    labelSelector: "#regionalSliderLabel"
  });
  const visibleRegional = getVisibleWindow(
    historicalMonths,
    [
      { name: selectedRegion.region, values: selectedRegion.history, color: selectedRegion.color, active: true },
      { name: "Global average", values: historicalMonths.map(() => 0), color: "#b59b73", active: false }
    ],
    appState.regionalTimeWindowStart
  );
  drawLineChart({
    target: document.querySelector("#regionalTrendChart"),
    labels: visibleRegional.labels,
    series: visibleRegional.seriesCollection,
    formatValue: (value) => `${Number(value).toFixed(0)}%`
  });

  document.querySelectorAll("[data-region]").forEach((button) => {
    button.addEventListener("click", () => {
      appState.selectedRegion = button.dataset.region;
      renderRegionalDelta();
    });
  });
}

function renderForecast() {
  const cagr = (((forecastData.baseline.at(-1) / forecastData.baseline[0]) ** (1 / 3)) - 1) * 100;
  const spread = forecastData.bullish.at(-1) - forecastData.downside.at(-1);
  document.querySelector("#forecastSummary").innerHTML = `
    <div class="forecast-pill"><span>Baseline CAGR</span><strong>${cagr.toFixed(1)}%</strong></div>
    <div class="forecast-pill"><span>2027 Baseline</span><strong>${forecastData.baseline.at(-1)} USD/t</strong></div>
    <div class="forecast-pill"><span>Scenario range</span><strong>${spread} USD/t</strong></div>
  `;

  drawLineChart({
    target: document.querySelector("#forecastChart"),
    labels: forecastData.labels,
    series: [
      { name: "Baseline", values: forecastData.baseline, color: "#375f42" },
      { name: "Bullish", values: forecastData.bullish, color: "#d47529" },
      { name: "Downside", values: forecastData.downside, color: "#7b5b8e" }
    ],
    formatValue: (value) => `${Math.round(value)}`
  });
}

function renderSensitivitySection() {
  const selectedGrade = sensitivityGradeSelect.value;
  const shock = Number(sensitivityShockSelect.value);
  const impactRows = industrySensitivity
    .map((industry) => {
      const exposure = industry.exposures[selectedGrade] || 0;
      const cogsImpact = exposure * shock;
      return {
        ...industry,
        exposure,
        cogsImpact
      };
    })
    .sort((a, b) => Math.abs(b.cogsImpact) - Math.abs(a.cogsImpact));

  const impacted = impactRows.filter((row) => row.exposure > 0);
  const averageImpact = impacted.length
    ? impacted.reduce((sum, row) => sum + row.cogsImpact, 0) / impacted.length
    : 0;
  const maxImpact = impactRows[0];
  const nonZeroCount = impacted.length;

  document.querySelector("#sensitivityKpis").innerHTML = `
    <div class="mini-stat"><span>Selected grade</span><strong>${selectedGrade}</strong><small>${shock > 0 ? "+" : ""}${shock}% price move</small></div>
    <div class="mini-stat"><span>Most exposed industry</span><strong>${maxImpact.industry}</strong><small>${maxImpact.cogsImpact.toFixed(2)}% COGS impact</small></div>
    <div class="mini-stat"><span>Industries impacted</span><strong>${nonZeroCount}/10</strong><small>Non-zero direct exposure</small></div>
    <div class="mini-stat"><span>Average impact</span><strong>${averageImpact.toFixed(2)}%</strong><small>Across exposed industries</small></div>
  `;

  document.querySelector("#sensitivityList").innerHTML = impactRows
    .map((row) => `
      <article class="sensitivity-item">
        <div class="sensitivity-head">
          <div>
            <strong>${row.industry}</strong>
            <small>Primary grades: ${row.primaryGrades.join(", ")}</small>
          </div>
          <div class="sensitivity-value">${row.cogsImpact >= 0 ? "+" : ""}${row.cogsImpact.toFixed(2)}%</div>
        </div>
        <div class="sensitivity-meta">
          <span>Direct grade share of COGS: ${(row.exposure * 100).toFixed(1)}%</span>
          <span>${selectedGrade} pass-through scenario</span>
        </div>
        <div class="delta-bar sensitivity-bar">
          <span style="width:${Math.max((Math.abs(row.cogsImpact) / Math.max(Math.abs(maxImpact.cogsImpact), 0.01)) * 100, row.exposure > 0 ? 8 : 0)}%; background:${row.cogsImpact >= 0 ? "#1b1b1b" : "#b59b73"}"></span>
        </div>
      </article>
    `)
    .join("");

  document.querySelector("#sensitivitySummary").textContent = `${shock > 0 ? "A" : "A deflationary"} ${Math.abs(shock)}% move in ${selectedGrade} is translated into direct COGS pressure based on estimated grade exposure by industry. Values are directional, illustrating first-order material cost sensitivity before hedging, contracts, inventory timing, or product repricing offsets.`;

  const topThree = impactRows.slice(0, 3);
  document.querySelector("#sensitivityHighlights").innerHTML = topThree
    .map((row) => `<div class="ratio-note"><span>${row.industry}</span><strong>${row.cogsImpact >= 0 ? "+" : ""}${row.cogsImpact.toFixed(2)}%</strong></div>`)
    .join("");
}

function renderHeadlines() {
  const extendedHeadlines = [
    ...headlines,
    {
      topic: "Green Steel",
      title: "Low-carbon capacity announcements continue, but monetization depends on auto and appliance demand.",
      source: "ESG tracker",
      impact: "Premium capture remains selective, favoring mills with contracted offtake and certified supply chains."
    },
    {
      topic: "Demand",
      title: "Infrastructure, shipbuilding, and grid investment are offsetting softer property-linked consumption.",
      source: "End-market scan",
      impact: "Long products and plate hold up better than commodity export sheet in several regions."
    }
  ];

  document.querySelector("#headlineList").innerHTML = extendedHeadlines
    .map(
      (item) => `
        <article class="headline-item">
          <div class="headline-top"><small>${item.source}</small><span class="headline-pill">${item.topic}</span></div>
          <p><strong>${item.title}</strong></p>
          <small>${item.impact}</small>
        </article>
      `
    )
    .join("");
}

function renderLiveHeadlines(items, statusLabel) {
  document.querySelector("#headlineStatus").textContent = statusLabel;
  document.querySelector("#headlineList").innerHTML = items
    .map(
      (item) => `
        <article class="headline-item">
          <div class="headline-top">
            <small>${item.source || "Google News"}</small>
            <span class="headline-pill">${item.topic}</span>
          </div>
          <p><strong><a href="${item.link}" target="_blank" rel="noreferrer">${item.title}</a></strong></p>
          <small>${item.impact}</small>
        </article>
      `
    )
    .join("");
}

function classifyHeadlineTopic(text) {
  const normalized = text.toLowerCase();
  if (normalized.includes("tariff") || normalized.includes("trade") || normalized.includes("import") || normalized.includes("export")) {
    return "Trade Policy";
  }
  if (normalized.includes("green") || normalized.includes("carbon") || normalized.includes("emission") || normalized.includes("hydrogen")) {
    return "Green Steel";
  }
  if (normalized.includes("ore") || normalized.includes("coal") || normalized.includes("scrap") || normalized.includes("energy")) {
    return "Raw Materials";
  }
  if (normalized.includes("demand") || normalized.includes("construction") || normalized.includes("auto") || normalized.includes("infrastructure")) {
    return "Demand";
  }
  return "Steel Market";
}

function formatHeadlineImpact(item) {
  const dateText = item.pubDate ? new Date(item.pubDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  }) : "Recent";
  return `${dateText} update from ${item.source || "Google News"} on steel-sector pricing, demand, or supply conditions.`;
}

async function loadLiveHeadlines() {
  const rssUrl = `https://news.google.com/rss/search?q=${encodeURIComponent(liveNewsConfig.query)}&hl=en-US&gl=US&ceid=US:en`;
  const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(rssUrl)}`;

  try {
    const response = await fetch(proxyUrl);
    if (!response.ok) {
      throw new Error(`Feed request failed with ${response.status}`);
    }

    const rssText = await response.text();
    const xml = new DOMParser().parseFromString(rssText, "text/xml");
    const items = Array.from(xml.querySelectorAll("item"))
      .slice(0, liveNewsConfig.maxItems)
      .map((item) => {
        const title = item.querySelector("title")?.textContent?.trim() || "Untitled headline";
        const link = item.querySelector("link")?.textContent?.trim() || "#";
        const source = item.querySelector("source")?.textContent?.trim() || "Google News";
        const pubDate = item.querySelector("pubDate")?.textContent?.trim() || "";
        return {
          title,
          link,
          source,
          pubDate,
          topic: classifyHeadlineTopic(`${title} ${source}`),
          impact: formatHeadlineImpact({ source, pubDate })
        };
      })
      .filter((item) => item.link !== "#");

    if (!items.length) {
      throw new Error("No RSS items found");
    }

    renderLiveHeadlines(items, "Live Google News feed");
  } catch (error) {
    console.warn("Falling back to static headlines:", error);
    document.querySelector("#headlineStatus").textContent = "Fallback sector themes";
    renderHeadlines();
  }
}

function renderRatios() {
  const snapshotIndex = getYearSnapshotIndex(appState.selectedFinancialYear);
  const snapshotLabel = historicalMonths[snapshotIndex];
  const reportedCount = financialRatios.filter((row) => row.quality !== "proxy").length;
  const proxyCount = financialRatios.filter((row) => row.quality === "proxy").length;
  document.querySelector("#ratioTableBody").innerHTML = financialRatios
    .map(
      (row) => {
        const revenue = row.history.revenue[snapshotIndex];
        const grossMargin = row.history.grossMargin[snapshotIndex];
        const ebitda = row.history.ebitda[snapshotIndex];
        const debt = row.history.debt[snapshotIndex];
        const current = row.history.current[snapshotIndex];
        const roic = row.history.roic[snapshotIndex];
        return `
        <tr class="${row.mill === appState.selectedMill ? "is-active" : ""}" data-mill="${row.mill}">
          <td>${row.mill}</td>
          <td>${revenue.toFixed(1)} BUSD</td>
          <td>${grossMargin.toFixed(1)}%</td>
          <td>${ebitda.toFixed(1)}%</td>
          <td>${debt.toFixed(1)}x</td>
          <td>${current.toFixed(1)}x</td>
          <td>${roic.toFixed(1)}%</td>
        </tr>
      `;
      }
    )
    .join("");

  const selectedMill = financialRatios.find((row) => row.mill === appState.selectedMill) || financialRatios[0];
  const selectedSnapshot = {
    revenue: selectedMill.history.revenue[snapshotIndex],
    grossMargin: selectedMill.history.grossMargin[snapshotIndex],
    ebitda: selectedMill.history.ebitda[snapshotIndex],
    debt: selectedMill.history.debt[snapshotIndex],
    current: selectedMill.history.current[snapshotIndex],
    roic: selectedMill.history.roic[snapshotIndex]
  };

  document.querySelector("#financialDetail").innerHTML = `
    <p class="section-label">Selected Mill</p>
    <h3>${selectedMill.mill}</h3>
    <p>Selected company financial profile for ${appState.selectedFinancialYear}, using the latest available month in that year (${snapshotLabel}).</p>
  `;
  document.querySelector("#financialSourceNote").innerHTML = `
    <p class="section-label">Data Quality</p>
    <h3>Public reporting first, proxy where needed</h3>
    <p>${selectedMill.sourceLabel}. Snapshot values target public-company reporting where available; monthly histories are interpolated to create a continuous 10-year view. Mills labeled “proxy” are directional placeholders, not direct issuer filings.</p>
    <div class="ratio-notes">
      <div class="ratio-note"><span>Reported / aligned names</span><strong>${reportedCount}</strong></div>
      <div class="ratio-note"><span>Proxy names</span><strong>${proxyCount}</strong></div>
      <div class="ratio-note"><span>Selected quality</span><strong>${selectedMill.quality === "proxy" ? "Proxy" : "Reported-aligned"}</strong></div>
    </div>
  `;

  const financialCharts = [
    {
      target: "#financialRevenueChart",
      name: "Revenue",
      values: selectedMill.history.revenue,
      color: "#1b1b1b",
      formatValue: (value) => `${Number(value).toFixed(0)}`
    },
    {
      target: "#financialGrossMarginChart",
      name: "Gross Margin %",
      values: selectedMill.history.grossMargin,
      color: "#7b5b8e",
      formatValue: (value) => `${Number(value).toFixed(1)}%`
    },
    {
      target: "#financialEbitdaChart",
      name: "EBITDA %",
      values: selectedMill.history.ebitda,
      color: "#375f42",
      formatValue: (value) => `${Number(value).toFixed(1)}%`
    },
    {
      target: "#financialDebtChart",
      name: "Debt / EBITDA",
      values: selectedMill.history.debt,
      color: "#b84428",
      formatValue: (value) => `${Number(value).toFixed(1)}x`
    },
    {
      target: "#financialCurrentChart",
      name: "Current Ratio",
      values: selectedMill.history.current,
      color: "#3f7f92",
      formatValue: (value) => `${Number(value).toFixed(1)}x`
    },
    {
      target: "#financialRoicChart",
      name: "ROIC %",
      values: selectedMill.history.roic,
      color: "#ae8e2c",
      formatValue: (value) => `${Number(value).toFixed(1)}%`
    }
  ];

  financialCharts.forEach((chart) => {
    drawLineChart({
      target: document.querySelector(chart.target),
      labels: historicalMonths,
      series: [{ name: chart.name, values: chart.values, color: chart.color, active: true }],
      formatValue: chart.formatValue,
      xLabelFormatter: formatYearTick,
      xTickFilter: isYearlyTick
    });
  });

  document.querySelector("#ratioNotes").innerHTML = `
    <div class="ratio-note"><span>Revenue</span><strong>${selectedSnapshot.revenue.toFixed(1)} BUSD</strong></div>
    <div class="ratio-note"><span>Gross profit margin</span><strong>${selectedSnapshot.grossMargin.toFixed(1)}%</strong></div>
    <div class="ratio-note"><span>EBITDA margin</span><strong>${selectedSnapshot.ebitda.toFixed(1)}%</strong></div>
    <div class="ratio-note"><span>Debt/EBITDA</span><strong>${selectedSnapshot.debt.toFixed(1)}x</strong></div>
    <div class="ratio-note"><span>Current ratio</span><strong>${selectedSnapshot.current.toFixed(1)}x</strong></div>
    <div class="ratio-note"><span>ROIC</span><strong>${selectedSnapshot.roic.toFixed(1)}%</strong></div>
  `;

  document.querySelectorAll("[data-mill]").forEach((row) => {
    row.addEventListener("click", () => {
      appState.selectedMill = row.dataset.mill;
      renderRatios();
    });
  });
}

function drawLineChart({ target, labels, series, formatValue, xLabelFormatter, xTickFilter }) {
  const [, , width, height] = target.getAttribute("viewBox").split(" ").map(Number);
  const chartWidth = width - 96;
  const chartHeight = height - 72;
  const xStart = 56;
  const yStart = 28;
  const allValues = series.flatMap((item) => item.values);
  const minValue = Math.min(...allValues);
  const maxValue = Math.max(...allValues);
  const yRange = maxValue - minValue || 1;
  const stepX = chartWidth / Math.max(labels.length - 1, 1);

  let svg = `<rect x="0" y="0" width="${width}" height="${height}" rx="20" fill="transparent"></rect>`;

  for (let i = 0; i <= 4; i += 1) {
    const y = yStart + (chartHeight / 4) * i;
    const value = maxValue - (yRange / 4) * i;
    svg += `
      <line x1="${xStart}" y1="${y}" x2="${xStart + chartWidth}" y2="${y}" stroke="rgba(46,55,41,0.12)" stroke-dasharray="4 6" />
      <text x="10" y="${y + 4}" fill="#5d6a5b" font-size="11">${formatValue(value)}</text>
    `;
  }

  const labelStep = Math.max(1, Math.ceil(labels.length / 8));
  labels.forEach((label, index) => {
    const shouldShow = xTickFilter
      ? xTickFilter(label, index, labels)
      : index % labelStep === 0 || index === labels.length - 1;
    if (!shouldShow) {
      return;
    }
    const x = xStart + stepX * index;
    const tickLabel = xLabelFormatter ? xLabelFormatter(label, index, labels) : label;
    svg += `<text x="${x}" y="${height - 18}" fill="#5d6a5b" font-size="10" text-anchor="middle">${tickLabel}</text>`;
  });

  series.forEach((item) => {
    const points = item.values.map((value, index) => {
      const x = xStart + stepX * index;
      const y = yStart + ((maxValue - value) / yRange) * chartHeight;
      return { x, y };
    });
    const path = points.map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`).join(" ");
    svg += `<path d="${path}" fill="none" stroke="${item.color}" stroke-width="${item.active ? 4.6 : 2.6}" stroke-opacity="${item.active ? 1 : 0.35}" stroke-linecap="round" stroke-linejoin="round"></path>`;
    svg += `<circle cx="${points.at(-1).x}" cy="${points.at(-1).y}" r="${item.active ? 6 : 4}" fill="${item.color}" fill-opacity="${item.active ? 1 : 0.5}"></circle>`;
  });

  target.innerHTML = svg;
}

function drawDualAreaChart({ target, labels, left, right }) {
  const width = 520;
  const height = 240;
  const chartWidth = width - 88;
  const chartHeight = height - 64;
  const xStart = 48;
  const yStart = 24;
  const values = [...left.values, ...right.values];
  const minValue = Math.min(...values) - 0.6;
  const maxValue = Math.max(...values) + 0.6;
  const range = maxValue - minValue || 1;
  const stepX = chartWidth / Math.max(labels.length - 1, 1);

  let svg = "";
  for (let i = 0; i < 4; i += 1) {
    const y = yStart + (chartHeight / 3) * i;
    svg += `<line x1="${xStart}" y1="${y}" x2="${xStart + chartWidth}" y2="${y}" stroke="rgba(46,55,41,0.12)" stroke-dasharray="4 6" />`;
  }

  labels.forEach((label, index) => {
    svg += `<text x="${xStart + stepX * index}" y="${height - 16}" fill="#5d6a5b" font-size="12" text-anchor="middle">${label}</text>`;
  });

  [left, right].forEach((series, index) => {
    const points = series.values.map((value, pointIndex) => {
      const x = xStart + stepX * pointIndex;
      const y = yStart + ((maxValue - value) / range) * chartHeight;
      return { x, y };
    });
    const areaPath = `${points.map((point, pointIndex) => `${pointIndex === 0 ? "M" : "L"} ${point.x} ${point.y}`).join(" ")} L ${points.at(-1).x} ${yStart + chartHeight} L ${points[0].x} ${yStart + chartHeight} Z`;
    const linePath = points.map((point, pointIndex) => `${pointIndex === 0 ? "M" : "L"} ${point.x} ${point.y}`).join(" ");
    svg += `<path d="${areaPath}" fill="${series.color}" opacity="${index === 0 ? 0.14 : 0.1}"></path>`;
    svg += `<path d="${linePath}" fill="none" stroke="${series.color}" stroke-width="3" stroke-linecap="round"></path>`;
  });

  svg += `<text x="${xStart}" y="16" fill="${left.color}" font-size="12">${left.name}</text>`;
  svg += `<text x="${xStart + 84}" y="16" fill="${right.color}" font-size="12">${right.name}</text>`;
  target.innerHTML = svg;
}

function readableLabel(label) {
  return label.replace(/([A-Z])/g, " $1").trim();
}

function getFinancialYears() {
  return Array.from(
    new Set(
      historicalMonths.map((label) => label.split("/")[1])
    )
  );
}

function getYearSnapshotIndex(year) {
  let snapshotIndex = -1;
  historicalMonths.forEach((label, index) => {
    if (label.endsWith(`/${year}`)) {
      snapshotIndex = index;
    }
  });
  return snapshotIndex === -1 ? historicalMonths.length - 1 : snapshotIndex;
}

function isYearlyTick(label, index, labels) {
  return label.startsWith("Jan/") || index === labels.length - 1;
}

function formatYearTick(label) {
  return label.split("/")[1];
}

function init() {
  initNavigation();
  renderMapCountryList();
  initCountryNavigation();
  initControls();
  setCountryFocus(appState.selectedCountry);
  renderPriceSection();
  renderCostDrivers();
  renderSupplyDemand();
  renderRegionalDelta();
  renderForecast();
  renderSensitivitySection();
  renderHeadlines();
  loadLiveHeadlines();
  renderRatios();
  showView(appState.currentView);
}

init();

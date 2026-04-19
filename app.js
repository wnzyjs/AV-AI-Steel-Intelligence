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
  selectedSupplyCountry: "China",
  selectedRegion: "North America",
  selectedRegionalSteelType: "HRC",
  selectedMill: "ArcelorMittal",
  selectedFinancialYear: "2026"
};

const palette = ["#375f42", "#d47529", "#b84428", "#ae8e2c", "#3f7f92", "#7b5b8e"];

const countryMarketBias = {
    USA: 0.0025,
    Germany: 0.0015,
    UK: 0.0012,
    Italy: 0.0011,
    India: 0.0022,
    China: -0.0018,
    Turkey: -0.0006,
    Japan: 0.0006,
    SouthKorea: 0.0003,
    Brazil: 0.001,
    Australia: 0.0008,
    Vietnam: 0.0004,
    Indonesia: 0.0002,
    Mexico: 0.0009
  };
  
  const countryFlagCodes = {
    Australia: "AU",
    Brazil: "BR",
    China: "CN",
    Germany: "DE",
    India: "IN",
    Indonesia: "ID",
    Italy: "IT",
    Japan: "JP",
    Mexico: "MX",
    SouthKorea: "KR",
    Turkey: "TR",
    UK: "GB",
    USA: "US",
    Vietnam: "VN"
  };
  
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
  
  function getAllPriceCountries() {
    return Array.from(
      new Set(
        Object.values(priceTrendData)
          .flatMap((countrySets) => Object.values(countrySets))
          .flatMap((dataset) => Object.keys(dataset.series))
      )
    );
  }
  
  function getCountryReferenceSeries(country) {
    for (const [steelType, countrySets] of Object.entries(priceTrendData)) {
      for (const dataset of Object.values(countrySets)) {
        if (dataset.series[country]) {
          return { steelType, series: dataset.series[country] };
        }
      }
    }
    return null;
  }
  
  function averageSeries(seriesCollection) {
    if (!seriesCollection.length) {
      return [];
    }
  
    return seriesCollection[0].map((_, index) => {
      const values = seriesCollection.map((series) => series[index]);
      return values.reduce((sum, value) => sum + value, 0) / values.length;
    });
  }
  
  function fillMissingPriceCountryCoverage() {
    const allPriceCountries = getAllPriceCountries();
  
    Object.entries(priceTrendData).forEach(([steelType, countrySets]) => {
      const primaryMarketKey = Object.keys(countrySets)[0];
      const primaryMarket = countrySets[primaryMarketKey];
      const targetAverageSeries = averageSeries(Object.values(primaryMarket.series));
      const targetAverageLevel = targetAverageSeries.reduce((sum, value) => sum + value, 0) / targetAverageSeries.length;
  
      allPriceCountries.forEach((country) => {
        const alreadyCovered = Object.values(countrySets).some((dataset) => dataset.series[country]);
        if (alreadyCovered) {
          return;
        }
  
        const reference = getCountryReferenceSeries(country);
        if (!reference) {
          return;
        }
  
        const referenceAverageSeries = averageSeries(
          Object.values(priceTrendData[reference.steelType]).flatMap((dataset) => Object.values(dataset.series))
        );
        const referenceAverageLevel = referenceAverageSeries.reduce((sum, value) => sum + value, 0) / referenceAverageSeries.length;
        const countryPremium = reference.series.reduce((sum, value) => sum + value, 0) / reference.series.length / referenceAverageLevel;
  
        let derivedSeries = targetAverageSeries.map((value, index) => {
          const referenceIndex = index % reference.series.length;
          const seasonalTilt = reference.series[referenceIndex] / referenceAverageSeries[referenceIndex];
          return Math.max(1, Math.round(value * countryPremium * (0.72 + seasonalTilt * 0.28)));
        });
  
        const derivedAverageLevel = derivedSeries.reduce((sum, value) => sum + value, 0) / derivedSeries.length;
        const levelAdjustment = targetAverageLevel * countryPremium / derivedAverageLevel;
        derivedSeries = derivedSeries.map((value) => Math.max(1, Math.round(value * levelAdjustment)));
  
        primaryMarket.series[country] = derivedSeries;
      });
    });
  }
  
  fillMissingPriceCountryCoverage();
  
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
  
  function hashString(value) {
    let hash = 2166136261;
    for (let index = 0; index < value.length; index += 1) {
      hash ^= value.charCodeAt(index);
      hash = Math.imul(hash, 16777619);
    }
    return hash >>> 0;
  }
  
  function createSeededRandom(seed) {
    let state = seed >>> 0;
    return () => {
      state += 0x6D2B79F5;
      let value = state;
      value = Math.imul(value ^ (value >>> 15), value | 1);
      value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
      return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
    };
  }
  
  function randomNormal(random) {
    let u = 0;
    let v = 0;
    while (u === 0) {
      u = random();
    }
    while (v === 0) {
      v = random();
    }
    return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
  }
  
  function quantile(sortedValues, percentile) {
    const index = (sortedValues.length - 1) * percentile;
    const lowerIndex = Math.floor(index);
    const upperIndex = Math.ceil(index);
    if (lowerIndex === upperIndex) {
      return sortedValues[lowerIndex];
    }
    const weight = index - lowerIndex;
    return sortedValues[lowerIndex] * (1 - weight) + sortedValues[upperIndex] * weight;
  }
  
  function getForecastDrivers(steelType, country) {
    const base = forecastDriverLibrary[steelType] || forecastDriverLibrary.default;
    const countryBias = {
      USA: 0.0025,
      Germany: 0.0015,
      UK: 0.0012,
      Italy: 0.0011,
      India: 0.0022,
      China: -0.0018,
      Turkey: -0.0006,
      Japan: 0.0006,
      SouthKorea: 0.0003,
      Brazil: 0.001,
      Australia: 0.0008
    };
  
    const steelBias = {
      HRC: 0.0018,
      CR: 0.0015,
      Plate: 0.0012,
      "Stainless Steel": 0.0024,
      HDG: 0.0013,
      Bar: 0.0009,
      "Steel Rebar": 0.0009
    };
  
    const upsideBias = (countryBias[country] || 0) + (steelBias[steelType] || 0.001);
    const downsideBias = Math.abs(Math.min(countryBias[country] || 0, 0)) + 0.0016;
  
    return {
      upward: base.up,
      downward: base.down,
      driftBias: upsideBias - downsideBias * 0.55,
      volatilityBias: 0.014 + Math.abs(countryBias[country] || 0) * 2.8 + Math.abs(steelBias[steelType] || 0.001) * 1.8
    };
  }
  
  function getMonteCarloForecast(steelType, country) {
    const market = getPreferredMarketForCountry(country, steelType);
    if (!market) {
      return null;
    }
  
    const dataset = priceTrendData[steelType][market.countrySet];
    const series = dataset.series[country];
    const historyLabels = dataset.months.slice(-36);
    const historyValues = series.slice(-36);
    const lastPrice = historyValues.at(-1);
    const recentReturns = historyValues.slice(1).map((value, index) => (value - historyValues[index]) / historyValues[index]);
    const meanReturn = recentReturns.reduce((sum, value) => sum + value, 0) / recentReturns.length;
    const volatility = Math.sqrt(
      recentReturns.reduce((sum, value) => sum + ((value - meanReturn) ** 2), 0) / Math.max(recentReturns.length - 1, 1)
    );
    const trailing12Change = (historyValues.at(-1) - historyValues.at(-13)) / historyValues.at(-13);
    const driverContext = getForecastDrivers(steelType, country);
    const simulations = 600;
    const meanReversionTarget = lastPrice * (1 + trailing12Change * 0.35 + driverContext.driftBias * 18);
    const projectionSteps = forecastMonths.length;
    const monthBuckets = Array.from({ length: projectionSteps }, () => []);
    const random = createSeededRandom(hashString(`${steelType}-${country}-${lastPrice}`));
  
    for (let simulation = 0; simulation < simulations; simulation += 1) {
      let simulatedPrice = lastPrice;
      for (let step = 0; step < projectionSteps; step += 1) {
        const shock = randomNormal(random);
        const seasonal = Math.sin((historyValues.length + step) / 6) * 0.0018;
        const meanReversion = ((meanReversionTarget - simulatedPrice) / simulatedPrice) * 0.12;
        const monthlyDrift = meanReturn * 0.55 + trailing12Change / 12 * 0.22 + driverContext.driftBias + seasonal + meanReversion;
        const monthlyVol = Math.max(volatility * 0.82, driverContext.volatilityBias);
        const nextReturn = monthlyDrift + monthlyVol * shock;
        simulatedPrice = Math.max(50, simulatedPrice * (1 + nextReturn));
        monthBuckets[step].push(simulatedPrice);
      }
    }
  
    const p10 = [];
    const p50 = [];
    const p90 = [];
    monthBuckets.forEach((bucket) => {
      bucket.sort((left, right) => left - right);
      p10.push(Number(quantile(bucket, 0.1).toFixed(1)));
      p50.push(Number(quantile(bucket, 0.5).toFixed(1)));
      p90.push(Number(quantile(bucket, 0.9).toFixed(1)));
    });
  
    return {
      unit: dataset.unit,
      historyLabels,
      historyValues,
      forecastLabels: forecastMonths,
      p10,
      p50,
      p90,
      drivers: driverContext
    };
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
  
  function deriveCountrySeries(values, country, { precision = 1, floor = null, amplitude = 1 } = {}) {
    const bias = countryMarketBias[country] || 0;
    return values.map((value, index) => {
      const wave = Math.sin(index / 7 + country.length * 0.35) * amplitude;
      const adjusted = value * (1 + bias * 8) + wave;
      const scaled = Number(adjusted.toFixed(precision));
      return floor === null ? scaled : Math.max(floor, scaled);
    });
  }
  
  function getSupplyDemandDataset(country) {
    return {
      labels: supplyDemand.labels,
      supply: deriveCountrySeries(supplyDemand.supply, country, { precision: 1, floor: 85, amplitude: 0.8 }),
      demand: deriveCountrySeries(supplyDemand.demand, country, { precision: 1, floor: 84, amplitude: 0.8 }),
      stats: supplyDemand.stats.map((stat, index) => {
        const countrySeries = deriveCountrySeries(stat.series, country, {
          precision: stat.decimals,
          floor: stat.unit === "%" ? 55 : stat.unit === "days" ? 18 : 3,
          amplitude: index === 0 ? 0.45 : index === 1 ? 1.4 : 0.12
        });
        const latest = countrySeries.at(-1);
        const countryLabel = readableLabel(country);
        const countryNoteMap = {
          "Capacity Utilization": `${countryLabel} mill utilization versus the long-cycle baseline.`,
          Inventories: `${countryLabel} distributor and service-center cover trend.`,
          "Order Books": `${countryLabel} downstream booking visibility and project confidence.`
        };
        return {
          ...stat,
          note: countryNoteMap[stat.label] || stat.note,
          latest,
          series: countrySeries
        };
      })
    };
  }
  
  const regionalDefinitions = [
    { region: "North America", color: "#b84428", countries: ["USA"], description: "Domestic utilization, trade actions, and manufacturing demand shape the regional premium." },
    { region: "Europe", color: "#d47529", countries: ["Germany", "UK", "Italy"], description: "Energy, carbon, and import discipline keep Europe moving differently from the world average." },
    { region: "China", color: "#375f42", countries: ["China"], description: "China remains the largest reference market for export pressure and global steel pricing." },
    { region: "India", color: "#3f7f92", countries: ["India"], description: "India balances project-led domestic demand against rapid additions in steelmaking capacity." },
    { region: "Asia Ex-China", color: "#ae8e2c", countries: ["Japan", "SouthKorea", "Vietnam", "Indonesia"], description: "Asian ex-China markets reflect manufacturing, import competition, and semi-finished flows." },
    { region: "Latin America", color: "#7b5b8e", countries: ["Brazil"], description: "Freight, trade protections, and construction activity shape Latin American price differentials." }
  ];
  
  const forecastDriverLibrary = {
    default: {
      up: [
        { title: "Raw-material pass-through", detail: "Iron ore, coal, scrap, and energy inflation can keep mill offer prices firm when conversion margins tighten." },
        { title: "Trade protection and outages", detail: "Tariffs, safeguard cases, and maintenance outages can reduce import pressure and tighten local availability." },
        { title: "Project-led demand", detail: "Infrastructure, grid, shipbuilding, and industrial capex can keep order books resilient even if other sectors soften." }
      ],
      down: [
        { title: "Export competition", detail: "Aggressive exports from oversupplied regions can reset transaction prices lower across spot markets." },
        { title: "Demand slowdown", detail: "Weaker construction, machinery, or auto output can reduce bookings and extend mill discounting." },
        { title: "Inventory destocking", detail: "Service center and distributor destocking can amplify price pressure even before end-demand deteriorates materially." }
      ]
    },
    HRC: {
      up: [
        { title: "Automotive and appliance restocking", detail: "Flat-steel restocking improves sheet utilization and supports higher spot HRC replacement pricing." },
        { title: "Trade cases on coated and sheet imports", detail: "Protection against low-priced imports can shift negotiating leverage back to domestic producers." },
        { title: "Energy and ore cost push", detail: "Higher ore, coal, power, or freight costs tend to lift HRC floor prices." }
      ],
      down: [
        { title: "China export pressure", detail: "Higher exported sheet volumes can cap global HRC recovery and compress arbitrage gaps." },
        { title: "Manufacturing slowdown", detail: "Lower industrial production reduces service center replenishment and weakens mill pricing power." },
        { title: "Capacity additions", detail: "New flat-steel capacity can slow margin recovery if demand does not absorb incremental output." }
      ]
    },
    Bar: {
      up: [
        { title: "Infrastructure and rebar demand", detail: "Civil works, transport, and public infrastructure projects support long-product consumption." },
        { title: "Scrap tightness", detail: "Higher scrap costs lift EAF conversion costs and long-product price floors." },
        { title: "Regional supply constraints", detail: "Construction-led demand spikes can outpace available rebar and merchant bar supply." }
      ],
      down: [
        { title: "Real-estate weakness", detail: "Soft property and residential construction quickly hit long-product order books." },
        { title: "Import competition", detail: "Cheaper billet and finished long products can pressure domestic transaction prices." },
        { title: "Seasonal demand pauses", detail: "Weather and project timing can create abrupt monthly slowdowns in construction steel demand." }
      ]
    }
  };
  
  const steelWikiData = {
    HRC: {
      title: "Hot Rolled Coil",
      summary: "The base flat-steel benchmark for industrial manufacturing, service centers, pipe, and downstream coated products.",
      definition: "Hot Rolled Coil is produced by rolling semi-finished steel at high temperature, creating a versatile coil product with scale on the surface and relatively looser tolerances than cold-rolled grades.",
      production: ["Primarily produced through blast furnace-basic oxygen furnace or EAF flat-rolling routes.", "Serves as the starting substrate for cold-rolled, galvanized, and pipe products.", "Lead times and utilization rates often make HRC the main benchmark for flat-steel cycles."],
      applications: ["Structural components and general fabrication", "Pipe and tube feedstock", "Machinery, transport equipment, and service-center distribution"],
      drivers: ["Iron ore, coal, scrap, and energy conversion costs", "Manufacturing demand and auto/appliance restocking", "Import competition, tariffs, and mill utilization rates"]
    },
    CR: {
      title: "Cold Rolled Coil",
      summary: "A thinner, more precise flat product used where tighter tolerances, improved finish, and formability matter.",
      definition: "Cold Rolled Coil is made by pickling and cold reducing hot-rolled substrate, producing a smoother surface and more consistent thickness control.",
      production: ["Built from HRC feedstock via tandem cold mills.", "Often annealed and tempered to achieve target mechanical properties.", "Common precursor for exposed automotive and appliance sheet."],
      applications: ["Automotive exposed panels and stampings", "Home appliances and office furniture", "Precision tubing and engineered components"],
      drivers: ["HRC substrate cost plus cold-reduction premium", "Auto and appliance demand", "Coating line availability and downstream restocking"]
    },
    Plate: {
      title: "Steel Plate",
      summary: "A heavier-gauge flat product tied closely to infrastructure, shipbuilding, pressure vessels, and heavy equipment.",
      definition: "Steel Plate refers to thick flat steel rolled into discrete plate dimensions, typically above sheet and coil gauge ranges.",
      production: ["Produced on plate mills from slabs or ingots.", "Can include normalized, quenched and tempered, or pressure-vessel grades.", "Typically less commoditized than benchmark coil products."],
      applications: ["Shipbuilding and offshore structures", "Construction equipment and heavy machinery", "Pressure vessels, bridges, and energy projects"],
      drivers: ["Project timing and capital expenditure cycles", "Freight and heavy-end market order books", "Mill specialization and regional supply availability"]
    },
    Bar: {
      title: "Bar",
      summary: "A long-steel category covering merchant bar and engineered bar used in fabrication and mechanical applications.",
      definition: "Bar products are rolled long steels produced in rounds, flats, squares, or special shapes, with use cases ranging from construction to machinery.",
      production: ["Frequently EAF-based using scrap and billet routes.", "May include merchant bar and special bar quality outputs.", "Regional demand can be highly localized versus flat-steel trade flows."],
      applications: ["Construction fabrication and general engineering", "Fasteners, forged parts, and machinery inputs", "Merchant distribution into local fabrication markets"],
      drivers: ["Scrap and billet cost", "Construction and fabrication activity", "Import billet availability and local rolling capacity"]
    },
    "Stainless Steel": {
      title: "Stainless Steel",
      summary: "A corrosion-resistant steel family priced off alloy surcharges, nickel/chromium inputs, and specialized downstream demand.",
      definition: "Stainless Steel contains elevated chromium and, depending on grade family, nickel and molybdenum to provide corrosion resistance and heat tolerance.",
      production: ["Produced through stainless melt shops and specialized rolling/annealing routes.", "Pricing often includes base price plus alloy surcharge.", "Different series such as 200, 300, and 400 behave differently on input exposure."],
      applications: ["Food processing and kitchen equipment", "Chemical, medical, and clean-environment applications", "Architecture, transport, and corrosion-sensitive components"],
      drivers: ["Nickel, ferrochrome, and alloy surcharges", "Specialty industrial demand and replacement cycles", "Regional premium levels and import duties"]
    },
    HDG: {
      title: "Hot-Dipped Galvanized",
      summary: "A coated flat product that adds zinc protection, widely used in automotive, appliances, and construction panels.",
      definition: "HDG is cold-rolled or hot-rolled substrate coated in a zinc bath to improve corrosion resistance and lifecycle performance.",
      production: ["Requires downstream coating line capacity.", "Often linked to CRC availability and zinc input costs.", "Commercial and exposed-quality coatings can price differently."],
      applications: ["Automotive body panels", "Building panels and roofing", "Appliances and HVAC systems"],
      drivers: ["CRC substrate pricing and zinc cost", "Coating-line utilization", "Auto, construction, and white-goods demand"]
    },
    "Steel Rebar": {
      title: "Steel Rebar",
      summary: "The main reinforcing steel product for concrete construction and one of the clearest indicators of construction demand.",
      definition: "Steel Rebar is deformed reinforcing bar used to strengthen concrete in buildings, infrastructure, and civil projects.",
      production: ["Typically rolled from billet in long-product mills.", "Often closely tied to scrap or billet input costs.", "Highly sensitive to local construction cycles and project timing."],
      applications: ["Residential and commercial construction", "Infrastructure and civil works", "Public projects and foundations"],
      drivers: ["Construction activity and project pipeline", "Scrap and billet pricing", "Trade barriers and local mill discipline"]
    },
    "Welded Pipe": {
      title: "Welded Pipe",
      summary: "A downstream tubular product made from coil or plate, priced off substrate plus conversion and end-market demand.",
      definition: "Welded Pipe is formed and seam-welded from strip, coil, or plate into pipe dimensions for structural and line-pipe uses.",
      production: ["Uses HRC or plate feedstock depending on specification.", "Conversion cost, coating, and certification matter to pricing.", "Demand depends on construction, energy, and infrastructure projects."],
      applications: ["Construction and piling", "Water, gas, and utility line systems", "Mechanical and structural tubing demand"],
      drivers: ["HRC/plate substrate prices", "Energy and construction spending", "Pipe mill capacity and trade cases"]
    },
    "Seamless Tube": {
      title: "Seamless Tube",
      summary: "A higher-spec tubular product used in pressure and energy applications where welded seams are not preferred.",
      definition: "Seamless Tube is manufactured by piercing and rolling solid billets into hollow sections with no welded seam.",
      production: ["Produced through specialized tube mills and heat-treatment routes.", "Higher technical requirements usually support a premium over welded products.", "Energy and industrial capex strongly influence demand."],
      applications: ["Oil and gas OCTG and line applications", "Boilers, pressure systems, and heat exchangers", "Industrial mechanical tubing"],
      drivers: ["Billet cost and tube conversion premium", "Oil and gas drilling and maintenance cycles", "Industrial and pressure-equipment demand"]
    },
    "Silicon Steel": {
      title: "Silicon Steel",
      summary: "An electrical steel grade used in motors, transformers, and grid equipment, with demand tied to electrification.",
      definition: "Silicon Steel, or electrical steel, is alloyed to improve magnetic properties and reduce core losses in electrical equipment.",
      production: ["Requires specialized chemistry, rolling, and annealing control.", "Produced in grain-oriented and non-grain-oriented variants.", "Supply is more concentrated than commodity flat steel."],
      applications: ["Power transformers", "Motors and generators", "EV drivetrains and grid equipment"],
      drivers: ["Electrical equipment and grid investment", "Specialty capacity availability", "Energy transition and EV production trends"]
    },
    "Tin Plate": {
      title: "Tin Plate",
      summary: "A thin coated sheet used mainly for packaging, with price behavior tied to CRC substrate and food-can demand.",
      definition: "Tin Plate is thin low-carbon steel coated with tin for corrosion resistance and formability in packaging applications.",
      production: ["Built on cold-rolled substrate with specialized coating lines.", "Packaging quality and coating consistency are central to value.", "Demand tends to be steadier than many construction-linked grades."],
      applications: ["Food and beverage cans", "Aerosol containers", "Industrial and specialty packaging"],
      drivers: ["CRC substrate and tin costs", "Packaging demand and consumer staples volumes", "Specialized coating capacity"]
    },
    "Steel Wire": {
      title: "Steel Wire",
      summary: "A drawn long-steel product used in fasteners, rope, reinforcement, and industrial applications.",
      definition: "Steel Wire is produced by drawing rod through dies to reduce diameter and improve dimensional and mechanical properties.",
      production: ["Starts from wire rod feedstock.", "May involve coating, heat treatment, or high-tensile processing.", "End-use requirements can create significant product segmentation."],
      applications: ["Fasteners and springs", "Wire rope and industrial cable", "Mesh, reinforcement, and engineered components"],
      drivers: ["Wire rod input cost", "Manufacturing and construction demand", "Processing intensity and specification mix"]
    }
  };
  
  function parseMonthLabel(label) {
    const [monthName, yearText] = label.split("/");
    return {
      monthIndex: monthNames.indexOf(monthName),
      year: Number(yearText)
    };
  }
  
  function buildForecastMonths(lastHistoricalLabel, endYear, endMonthIndex) {
    const { monthIndex, year } = parseMonthLabel(lastHistoricalLabel);
    const labels = [];
    let currentMonth = monthIndex;
    let currentYear = year;
  
    while (currentYear < endYear || (currentYear === endYear && currentMonth <= endMonthIndex)) {
      currentMonth += 1;
      if (currentMonth >= 12) {
        currentMonth = 0;
        currentYear += 1;
      }
      if (currentYear > endYear || (currentYear === endYear && currentMonth > endMonthIndex)) {
        break;
      }
      labels.push(`${monthNames[currentMonth]}/${currentYear}`);
    }
  
    return labels;
  }
  
  const forecastMonths = buildForecastMonths(historicalMonths.at(-1), 2027, 11);
  
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
    const indexedStockBase = Math.max(88, Math.min(152, 100 + (roic - debt * 2.4 + grossMargin * 0.45)));
    return {
      mill,
      revenue,
      grossMargin,
      ebitda,
      debt,
      current,
      roic,
      indexedStockBase,
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
        }),
        stockPerformance: buildLongHistorySeries({
          latest: indexedStockBase,
          start: Math.max(indexedStockBase * 0.78, 62),
          precision: 1,
          seasonalAmplitude: 2.4,
          cycleAmplitude: 1.8,
          phase: phase + 1.7,
          floor: 55
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
  const forecastSteelTypeSelect = document.querySelector("#forecastSteelTypeSelect");
  const forecastCountrySelect = document.querySelector("#forecastCountrySelect");
  const regionalSteelTypeSelect = document.querySelector("#regionalSteelTypeSelect");
  const steelWikiSelect = document.querySelector("#steelWikiSelect");
  const sensitivityGradeSelect = document.querySelector("#sensitivityGradeSelect");
  const sensitivityShockSelect = document.querySelector("#sensitivityShockSelect");


const timeRangeSlider = document.querySelector("#timeRangeSlider");
const costTimeRangeSlider = document.querySelector("#costTimeRangeSlider");
const supplyTimeRangeSlider = document.querySelector("#supplyTimeRangeSlider");
const supplyCountrySelect = document.querySelector("#supplyCountrySelect");
const regionalTimeRangeSlider = document.querySelector("#regionalTimeRangeSlider");
const financialYearSelect = document.querySelector("#financialYearSelect");
const costHorizonSelect = document.querySelector("#costHorizonSelect");
const heroTickerTrack = document.querySelector("#heroTickerTrack");
const heroCostTickerTrack = document.querySelector("#heroCostTickerTrack");
const heroOfficeTimeTrack = document.querySelector("#heroOfficeTimeTrack");
const views = document.querySelectorAll(".app-view");
const tickerAnimations = new WeakMap();
let officeTimeIntervalId = null;
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

function getPreferredMarketForCountry(country, steelType = null) {
  const matches = getCountryMarkets(country);
  if (steelType) {
    return matches.find((entry) => entry.steelType === steelType) || null;
  }
  return matches[0] || null;
}

function getAvailableCountriesForSteelType(steelType) {
  const { mergedSeries } = getMergedCountrySeries(steelType);
  return Array.from(mergedSeries.keys()).sort((left, right) => readableLabel(left).localeCompare(readableLabel(right)));
}

function populateCountrySelect(selectElement, steelType, preferredCountry) {
  const countries = getAvailableCountriesForSteelType(steelType);
  const resolvedCountry = countries.includes(preferredCountry) ? preferredCountry : countries[0];

  selectElement.innerHTML = countries
    .map((country) => `<option value="${country}">${readableLabel(country)}</option>`)
    .join("");

  selectElement.value = resolvedCountry;
  return resolvedCountry;
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

function getRegionalDeltaData(steelType) {
  const { mergedSeries, labels, unit } = getMergedCountrySeries(steelType);
  const allSeries = Array.from(mergedSeries.values());
  const globalAverageSeries = labels.map((_, index) => {
    const values = allSeries.map((series) => series[index]);
    return values.reduce((sum, value) => sum + value, 0) / values.length;
  });

  const regions = regionalDefinitions
    .map((definition) => {
      const availableCountries = definition.countries.filter((country) => mergedSeries.has(country));
      if (!availableCountries.length) {
        return null;
      }
      const regionalAverageSeries = labels.map((_, index) => {
        const values = availableCountries.map((country) => mergedSeries.get(country)[index]);
        return values.reduce((sum, value) => sum + value, 0) / values.length;
      });
      const history = regionalAverageSeries.map((value, index) => ((value - globalAverageSeries[index]) / globalAverageSeries[index]) * 100);
      return {
        ...definition,
        countries: availableCountries,
        history: history.map((value) => Number(value.toFixed(1))),
        value: Number(history.at(-1).toFixed(1))
      };
    })
    .filter(Boolean);

  return { labels, unit, regions };
}

function renderHeroTicker() {
  const tickerEntries = [
    { steelType: "HRC", country: "China" },
    { steelType: "HRC", country: "USA" },
    { steelType: "CR", country: "Germany" },
    { steelType: "Plate", country: "India" },
    { steelType: "Bar", country: "Turkey" },
    { steelType: "Stainless Steel", country: "China" },
    { steelType: "HDG", country: "SouthKorea" },
    { steelType: "Steel Rebar", country: "Vietnam" },
    { steelType: "Welded Pipe", country: "UK" },
    { steelType: "Silicon Steel", country: "Japan" }
  ]
    .map(({ steelType, country }) => {
      const market = getPreferredMarketForCountry(country, steelType);
      if (!market) {
        return null;
      }
      const dataset = priceTrendData[steelType][market.countrySet];
      const latest = dataset.series[country].at(-1);
      const dateLabel = dataset.months.at(-1);
      return `
        <div class="hero-ticker-item">
          <span class="hero-ticker-grade">${steelType}</span>
          <span class="hero-ticker-country">${readableLabel(country)}</span>
          <span class="hero-ticker-time">${dateLabel}</span>
          <span class="hero-ticker-price">${Math.round(latest)} ${dataset.unit}</span>
        </div>
      `;
    })
    .filter(Boolean);

  heroTickerTrack.innerHTML = [...tickerEntries, ...tickerEntries].join("");
  startTickerMotion(heroTickerTrack, 0.1);
}

function renderHeroCostTicker() {
  const tickerEntries = costDrivers
    .map((driver) => {
      const latest = costTrend.series[driver.name]?.at(-1);
      if (latest === undefined) {
        return null;
      }
      return `
        <div class="hero-ticker-item">
          <span class="hero-ticker-grade">${driver.name}</span>
          <span class="hero-ticker-country">${driver.benchmark}</span>
          <span class="hero-ticker-time">${historicalMonths.at(-1)}</span>
          <span class="hero-ticker-price">${Number(latest).toFixed(driver.unit === "USD/MMBtu" ? 1 : 0)} ${driver.unit}</span>
        </div>
      `;
    })
    .filter(Boolean);

  heroCostTickerTrack.innerHTML = [...tickerEntries, ...tickerEntries].join("");
  startTickerMotion(heroCostTickerTrack, -0.08);
}

function renderOfficeTimes() {
  const offices = [
    { city: "Boston", timeZone: "America/New_York" },
    { city: "New York", timeZone: "America/New_York" },
    { city: "Chicago", timeZone: "America/Chicago" },
    { city: "Miami", timeZone: "America/New_York" },
    { city: "Stockholm", timeZone: "Europe/Stockholm" },
    { city: "Shanghai", timeZone: "Asia/Shanghai" }
  ];

  const entries = offices.map((office) => {
    const timeText = new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
      timeZone: office.timeZone
    }).format(new Date());

    return `
      <div class="hero-office-time-item">
        <span class="hero-office-time-city">${office.city}</span>
        <span class="hero-office-time-value">${timeText}</span>
      </div>
    `;
  });

  heroOfficeTimeTrack.innerHTML = [...entries, ...entries].join("");
  startTickerMotion(heroOfficeTimeTrack, 0.05);
}

function startTickerMotion(track, speed) {
  if (!track) {
    return;
  }

  const existingAnimation = tickerAnimations.get(track);
  if (existingAnimation) {
    cancelAnimationFrame(existingAnimation.frameId);
  }

  let offset = speed < 0 ? -track.scrollWidth / 2 : 0;
  let previousTime = performance.now();

  function step(currentTime) {
    const elapsed = currentTime - previousTime;
    previousTime = currentTime;
    const loopWidth = Math.max(track.scrollWidth / 2, 1);
    offset -= speed * elapsed;

    if (speed > 0 && offset <= -loopWidth) {
      offset += loopWidth;
    }
    if (speed < 0 && offset >= 0) {
      offset -= loopWidth;
    }

    track.style.transform = `translateX(${offset}px)`;
    const frameId = requestAnimationFrame(step);
    tickerAnimations.set(track, { frameId });
  }

  const frameId = requestAnimationFrame(step);
  tickerAnimations.set(track, { frameId });
}

function setCountryFocus(country, steelType = null) {
  if (steelType) {
    const availableCountries = getAvailableCountriesForSteelType(steelType);
    if (!availableCountries.length) {
      return;
    }

    appState.steelType = steelType;
    appState.selectedCountry = availableCountries.includes(country) ? country : availableCountries[0];
  } else {
    const matches = getCountryMarkets(country);
    const preferred = matches.find((entry) => entry.steelType === appState.steelType) || matches[0];
    if (!preferred) {
      return;
    }

    appState.steelType = preferred.steelType;
    appState.selectedCountry = country;
  }

  populateCountrySelect(countrySelect, appState.steelType, appState.selectedCountry);
  populateCountrySelect(forecastCountrySelect, appState.steelType, appState.selectedCountry);
  steelTypeSelect.value = appState.steelType;
  countrySelect.value = appState.selectedCountry;
  forecastSteelTypeSelect.value = appState.steelType;
  forecastCountrySelect.value = appState.selectedCountry;
  regionalSteelTypeSelect.value = appState.selectedRegionalSteelType;
  steelWikiSelect.value = appState.steelType;
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

  if (viewName === "home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else if (matchingViews.length) {
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
    forecastSteelTypeSelect.append(option.cloneNode(true));
    regionalSteelTypeSelect.append(option.cloneNode(true));
    steelWikiSelect.append(option.cloneNode(true));
  });

  steelTypeSelect.value = appState.steelType;
  forecastSteelTypeSelect.value = appState.steelType;
  appState.selectedCountry = populateCountrySelect(countrySelect, appState.steelType, appState.selectedCountry);
  populateCountrySelect(forecastCountrySelect, appState.steelType, appState.selectedCountry);
  allCountries.forEach((country) => {
    const option = document.createElement("option");
    option.value = country;
    option.textContent = readableLabel(country);
    supplyCountrySelect.append(option);
  });
  appState.selectedSupplyCountry = allCountries.includes(appState.selectedSupplyCountry) ? appState.selectedSupplyCountry : appState.selectedCountry;
  supplyCountrySelect.value = appState.selectedSupplyCountry;
  regionalSteelTypeSelect.value = appState.selectedRegionalSteelType;
  steelWikiSelect.value = appState.steelType;

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

  supplyCountrySelect.addEventListener("change", (event) => {
    appState.selectedSupplyCountry = event.target.value;
    renderSupplyDemand();
  });

  forecastSteelTypeSelect.addEventListener("change", (event) => {
    appState.steelType = event.target.value;
    setCountryFocus(appState.selectedCountry, appState.steelType);
    renderForecast();
  });

  forecastCountrySelect.addEventListener("change", (event) => {
    appState.selectedCountry = event.target.value;
    setCountryFocus(appState.selectedCountry, appState.steelType);
    renderForecast();
  });

  regionalSteelTypeSelect.addEventListener("change", (event) => {
    appState.selectedRegionalSteelType = event.target.value;
    renderRegionalDelta();
  });

  steelWikiSelect.addEventListener("change", (event) => {
    renderSteelWiki(event.target.value);
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
  const market = getPreferredMarketForCountry(appState.selectedCountry, appState.steelType);
  if (!market) {
    return;
  }

  const dataset = priceTrendData[appState.steelType][market.countrySet];
  const selectedSeries = dataset.series[appState.selectedCountry];
  const latestPrice = selectedSeries.at(-1);
  const averagePrice = Math.round(selectedSeries.reduce((sum, value) => sum + value, 0) / selectedSeries.length);
  const lowPrice = Math.min(...selectedSeries);
  const highPrice = Math.max(...selectedSeries);
  const momentum = ((latestPrice - selectedSeries[0]) / selectedSeries[0]) * 100;
  const { mergedSeries } = getMergedCountrySeries(appState.steelType);
  const globalAverageSeries = dataset.months.map((_, index) => {
    const values = Array.from(mergedSeries.values()).map((series) => series[index]);
    return values.reduce((sum, value) => sum + value, 0) / values.length;
  });
  const latestGlobalAverage = globalAverageSeries.at(-1);
  const globalDelta = latestPrice - latestGlobalAverage;
  const globalDeltaPct = (globalDelta / latestGlobalAverage) * 100;
  const previousPrice = selectedSeries.at(-2);
  const monthOnMonth = latestPrice - previousPrice;
  const monthOnMonthPct = (monthOnMonth / previousPrice) * 100;
  const trailingTwelve = selectedSeries.slice(-12);
  const trailingLow = Math.min(...trailingTwelve);
  const trailingHigh = Math.max(...trailingTwelve);
  const trailingAverage = Math.round(trailingTwelve.reduce((sum, value) => sum + value, 0) / trailingTwelve.length);
  const latestLabel = dataset.months.at(-1);
  const oneYearAgo = selectedSeries.at(-13) ?? selectedSeries[0];
  const yearlyDeltaPct = ((latestPrice - oneYearAgo) / oneYearAgo) * 100;
  const selectedCountryLabel = readableLabel(appState.selectedCountry);
  const selectedCountryFlag = getCountryFlagMarkup(appState.selectedCountry, selectedCountryLabel);

  document.querySelector("#trendTitle").textContent = `${selectedCountryLabel} ${appState.steelType} price trend`;
  document.querySelector("#trendMeta").textContent = `Monthly average, ${dataset.unit}, Jan/2016-Apr/2026`;

  document.querySelector("#countrySpotlight").innerHTML = `
    <div class="spotlight-header">
      <div class="spotlight-copy">
        <p class="section-label">Country Spotlight</p>
        <h3>${selectedCountryFlag}${selectedCountryLabel}</h3>
        <p>${appState.steelType} pricing in ${selectedCountryLabel} with benchmark comparison to the global average.</p>
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
    <div class="spotlight-insights">
      <div class="spotlight-insight">
        <span>Latest vs global</span>
        <strong>${globalDelta >= 0 ? "+" : ""}${Math.round(globalDelta)} ${dataset.unit}</strong>
        <small>${globalDeltaPct >= 0 ? "+" : ""}${globalDeltaPct.toFixed(1)}% against global average</small>
      </div>
      <div class="spotlight-insight">
        <span>Month on month</span>
        <strong>${monthOnMonth >= 0 ? "+" : ""}${Math.round(monthOnMonth)} ${dataset.unit}</strong>
        <small>${monthOnMonthPct >= 0 ? "+" : ""}${monthOnMonthPct.toFixed(1)}% vs prior month</small>
      </div>
      <div class="spotlight-insight">
        <span>Last 12M range</span>
        <strong>${trailingLow}-${trailingHigh} ${dataset.unit}</strong>
        <small>Average ${trailingAverage} ${dataset.unit}</small>
      </div>
      <div class="spotlight-insight">
        <span>Latest print</span>
        <strong>${latestLabel}</strong>
        <small>${yearlyDeltaPct >= 0 ? "+" : ""}${yearlyDeltaPct.toFixed(1)}% vs ${dataset.months.at(-13) ?? dataset.months[0]}</small>
      </div>
    </div>
    <div class="spotlight-brief">
      <div class="spotlight-brief-row">
        <span>Market read-through</span>
        <strong>${globalDelta >= 0 ? "Premium" : "Discount"} to global average</strong>
      </div>
      <div class="spotlight-brief-row">
        <span>Price posture</span>
        <strong>${latestPrice >= trailingAverage ? "Trading above" : "Trading below"} 12M mean</strong>
      </div>
      <div class="spotlight-brief-row">
        <span>Current setup</span>
        <strong>${monthOnMonth >= 0 ? "Near-term firming" : "Near-term softening"}</strong>
      </div>
    </div>
  `;

  const availableGrades = Object.keys(priceTrendData).filter((grade) => getPreferredMarketForCountry(appState.selectedCountry, grade));

  const gradePriceMarkup = availableGrades
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

  document.querySelector("#gradePriceList").innerHTML = `
    <div class="grade-price-shell">
      <div class="grade-price-header">
        <div>
          <p class="section-label">Cross-Grade Snapshot</p>
          <h3>${readableLabel(appState.selectedCountry)}</h3>
        </div>
        <small>${availableGrades.length} grades available at ${latestLabel}</small>
      </div>
      <div class="grade-price-grid">
        ${gradePriceMarkup}
      </div>
    </div>
  `;

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
  timeRangeSlider.disabled = false;
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
  renderForecast();
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
  document.querySelector("#comparisonMeta").textContent = `Monthly benchmark, ${unit}, last 36 months`;
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
    values: mergedSeries.get(item.country).slice(-36),
    color: palette[index % palette.length],
    active: item.country === appState.selectedCountry
  }));
  drawLineChart({
    target: document.querySelector("#countryComparisonChart"),
    labels: labels.slice(-36),
    series: comparisonSeries,
    formatValue: (value) => `${Math.round(value)}`,
    xLabelFormatter: formatYearTick,
    xTickFilter: isYearlyTick
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
  const supplyDataset = getSupplyDemandDataset(appState.selectedSupplyCountry);
  const selectedCountryLabel = readableLabel(appState.selectedSupplyCountry);
  const selectedCountryFlag = getCountryFlagMarkup(appState.selectedSupplyCountry, selectedCountryLabel);
  supplyCountrySelect.value = appState.selectedSupplyCountry;
  const selectedStat = supplyDataset.stats.find((stat) => stat.label === appState.selectedSupplyMetric) || supplyDataset.stats[0];
  document.querySelector("#dynamicsCards").innerHTML = supplyDataset.stats
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
    <p class="section-label">Selected Market & Metric</p>
    <h3>${selectedCountryFlag}${selectedCountryLabel} · ${selectedStat.label}</h3>
    <p>${selectedStat.note}</p>
    <div class="ratio-notes">
      <div class="ratio-note"><span>Latest reading</span><strong>${formatMetricValue(selectedStat.latest, selectedStat.unit, selectedStat.decimals)}</strong></div>
      <div class="ratio-note"><span>10Y change</span><strong>${supplyGap >= 0 ? "+" : ""}${supplyGap.toFixed(selectedStat.decimals)}${selectedStat.unit === "%" ? " pts" : ` ${selectedStat.unit}`}</strong></div>
      <div class="ratio-note"><span>Selected country</span><strong>${selectedCountryLabel}</strong></div>
    </div>
  `;

  updateWindowSlider({
    labels: supplyDataset.labels,
    slider: supplyTimeRangeSlider,
    startKey: "supplyTimeWindowStart",
    labelSelector: "#supplySliderLabel"
  });
  const visibleSupply = getVisibleWindow(
    supplyDataset.labels,
    [
      { name: selectedStat.label, values: selectedSeries, color: selectedStat.color, active: true },
      { name: `${selectedCountryLabel} supply`, values: supplyDataset.supply, color: "#375f42", active: false },
      { name: `${selectedCountryLabel} demand`, values: supplyDataset.demand, color: "#d47529", active: false }
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
  regionalSteelTypeSelect.value = appState.selectedRegionalSteelType;
  const regionalData = getRegionalDeltaData(appState.selectedRegionalSteelType);
  const regions = regionalData.regions;
  const maxAbs = Math.max(...regions.map((item) => Math.abs(item.value)));
  const selectedRegion = regions.find((item) => item.region === appState.selectedRegion) || regions[0];
  appState.selectedRegion = selectedRegion.region;

  document.querySelector("#regionalDelta").innerHTML = regions
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
    <p>${selectedRegion.description} Current view: ${appState.selectedRegionalSteelType} against the global average benchmark.</p>
    <div class="ratio-notes">
      <div class="ratio-note"><span>Delta vs global mean</span><strong>${selectedRegion.value > 0 ? "+" : ""}${selectedRegion.value}%</strong></div>
      <div class="ratio-note"><span>10Y average delta</span><strong>${(selectedRegion.history.reduce((sum, value) => sum + value, 0) / selectedRegion.history.length).toFixed(1)}%</strong></div>
      <div class="ratio-note"><span>Countries in region</span><strong>${selectedRegion.countries.map(readableLabel).join(", ")}</strong></div>
    </div>
  `;

  updateWindowSlider({
    labels: regionalData.labels,
    slider: regionalTimeRangeSlider,
    startKey: "regionalTimeWindowStart",
    labelSelector: "#regionalSliderLabel"
  });
  const visibleRegional = getVisibleWindow(
    regionalData.labels,
    [
      { name: selectedRegion.region, values: selectedRegion.history, color: selectedRegion.color, active: true },
      { name: "Global average", values: regionalData.labels.map(() => 0), color: "#b59b73", active: false }
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
  const forecastBundle = getMonteCarloForecast(appState.steelType, appState.selectedCountry);
  if (!forecastBundle) {
    return;
  }
  const cagr = (((forecastBundle.p50.at(-1) / forecastBundle.historyValues.at(-1)) ** (12 / forecastBundle.forecastLabels.length)) - 1) * 100;
  const spread = forecastBundle.p90.at(-1) - forecastBundle.p10.at(-1);
  const lastActual = forecastBundle.historyValues.at(-1);
  const firstForecast = forecastBundle.forecastLabels[0];
  const lastForecast = forecastBundle.forecastLabels.at(-1);
  const selectedCountryLabel = readableLabel(appState.selectedCountry);
  const selectedCountryFlag = getCountryFlagMarkup(appState.selectedCountry, selectedCountryLabel);

  document.querySelector("#forecastSummary").innerHTML = `
    <div class="forecast-pill forecast-market-pill"><span>Selected market</span><strong>${selectedCountryFlag}${selectedCountryLabel} ${appState.steelType}</strong></div>
    <div class="forecast-pill"><span>Annualized median drift</span><strong>${cagr.toFixed(1)}%</strong></div>
    <div class="forecast-pill"><span>Dec/2027 P50</span><strong>${forecastBundle.p50.at(-1).toFixed(0)} ${forecastBundle.unit}</strong></div>
    <div class="forecast-pill"><span>Dec/2027 range</span><strong>${forecastBundle.p10.at(-1).toFixed(0)}-${forecastBundle.p90.at(-1).toFixed(0)}</strong></div>
  `;

  document.querySelector("#forecastMethod").innerHTML = `
    <p class="section-label">Method</p>
    <h3>36-month history + Monte Carlo monthly simulation</h3>
    <p>The model starts from the last actual observation in ${historicalMonths.at(-1)} for ${selectedCountryLabel} ${appState.steelType} at ${lastActual.toFixed(0)} ${forecastBundle.unit}, uses the last 36 months of monthly price behavior for drift and volatility, then runs 600 deterministic simulations from ${firstForecast} through ${lastForecast}. The chart shows the 10th, 50th, and 90th percentile paths.</p>
  `;

  drawLineChart({
    target: document.querySelector("#forecastChart"),
    labels: [...forecastBundle.historyLabels, ...forecastBundle.forecastLabels],
    series: [
      { name: "History", values: [...forecastBundle.historyValues, ...Array(forecastBundle.forecastLabels.length).fill(null)], color: "#375f42", active: true },
      { name: "P50", values: [...Array(forecastBundle.historyLabels.length).fill(null), ...forecastBundle.p50], color: "#1b1b1b", active: true, dasharray: "10 6", width: 3.6 },
      { name: "P90", values: [...Array(forecastBundle.historyLabels.length).fill(null), ...forecastBundle.p90], color: "#d47529", active: false, dasharray: "6 6", opacity: 0.75 },
      { name: "P10", values: [...Array(forecastBundle.historyLabels.length).fill(null), ...forecastBundle.p10], color: "#7b5b8e", active: false, dasharray: "6 6", opacity: 0.75 }
    ],
    formatValue: (value) => `${Math.round(value)}`,
    xLabelFormatter: formatYearTick,
    xTickFilter: isYearlyTick
  });

  document.querySelector("#forecastUpDrivers").innerHTML = `
    <div class="forecast-driver-list">
      ${forecastBundle.drivers.upward.map((item) => `<div class="forecast-driver-item"><strong>${item.title}</strong><span>${item.detail}</span></div>`).join("")}
    </div>
  `;
  document.querySelector("#forecastDownDrivers").innerHTML = `
    <div class="forecast-driver-list">
      ${forecastBundle.drivers.downward.map((item) => `<div class="forecast-driver-item"><strong>${item.title}</strong><span>${item.detail}</span></div>`).join("")}
    </div>
  `;

  document.querySelector("#forecastMonthTableBody").innerHTML = forecastBundle.forecastLabels
    .map((label, index) => `
      <tr>
        <td>${label}</td>
        <td>${forecastBundle.p10[index].toFixed(0)} ${forecastBundle.unit}</td>
        <td>${forecastBundle.p50[index].toFixed(0)} ${forecastBundle.unit}</td>
        <td>${forecastBundle.p90[index].toFixed(0)} ${forecastBundle.unit}</td>
      </tr>
    `)
    .join("");
}

function renderSteelWiki(selectedGrade = steelWikiSelect.value || "HRC") {
  const wiki = steelWikiData[selectedGrade] || steelWikiData.HRC;
  steelWikiSelect.value = selectedGrade;

  document.querySelector("#steelWikiHero").innerHTML = `
    <p class="section-label">Selected Grade</p>
    <h3>${wiki.title}</h3>
    <p>${wiki.summary}</p>
  `;

  document.querySelector("#steelWikiDefinition").innerHTML = `
    <p>${wiki.definition}</p>
  `;

  document.querySelector("#steelWikiProduction").innerHTML = `
    <ul>${wiki.production.map((item) => `<li>${item}</li>`).join("")}</ul>
  `;

  document.querySelector("#steelWikiApplications").innerHTML = `
    <ul>${wiki.applications.map((item) => `<li>${item}</li>`).join("")}</ul>
  `;

  document.querySelector("#steelWikiDrivers").innerHTML = `
    <ul>${wiki.drivers.map((item) => `<li>${item}</li>`).join("")}</ul>
  `;
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
    stockPerformance: selectedMill.history.stockPerformance[snapshotIndex],
    grossMargin: selectedMill.history.grossMargin[snapshotIndex],
    ebitda: selectedMill.history.ebitda[snapshotIndex],
    debt: selectedMill.history.debt[snapshotIndex],
    current: selectedMill.history.current[snapshotIndex],
    roic: selectedMill.history.roic[snapshotIndex]
  };

  document.querySelector("#financialDetail").innerHTML = `
    <p class="section-label">Selected Mill</p>
    <h3>${selectedMill.mill}</h3>
    <p>Selected company financial profile for ${appState.selectedFinancialYear}, using the latest available month in that year (${snapshotLabel}). Indexed stock performance is shown as a directional series with base 100, not as a live quoted share price.</p>
  `;
  document.querySelector("#financialSourceNote").innerHTML = `
    <p class="section-label">Data Quality</p>
    <h3>Public reporting first, proxy where needed</h3>
    <p>${selectedMill.sourceLabel}. Snapshot values target public-company reporting where available; monthly histories are interpolated to create a continuous 10-year view. Mills labeled 鈥減roxy鈥?are directional placeholders, not direct issuer filings.</p>
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
      target: "#financialStockPriceChart",
      name: "Indexed Stock Performance",
      values: selectedMill.history.stockPerformance,
      color: "#b59b73",
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
    <div class="ratio-note"><span>Indexed stock performance</span><strong>${selectedSnapshot.stockPerformance.toFixed(1)}</strong></div>
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
  const allValues = series.flatMap((item) => item.values).filter((value) => value !== null && value !== undefined);
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
      if (value === null || value === undefined) {
        return null;
      }
      const x = xStart + stepX * index;
      const y = yStart + ((maxValue - value) / yRange) * chartHeight;
      return { x, y };
    });
    let path = "";
    let segmentOpen = false;
    points.forEach((point) => {
      if (!point) {
        segmentOpen = false;
        return;
      }
      path += !segmentOpen ? `${path ? " " : ""}M ${point.x} ${point.y}` : ` L ${point.x} ${point.y}`;
      segmentOpen = true;
    });
    if (!path) {
      return;
    }
    const lastPoint = [...points].reverse().find(Boolean);
    svg += `<path d="${path}" fill="none" stroke="${item.color}" stroke-width="${item.width || (item.active ? 4.6 : 2.6)}" stroke-opacity="${item.opacity || (item.active ? 1 : 0.35)}" stroke-dasharray="${item.dasharray || "none"}" stroke-linecap="round" stroke-linejoin="round"></path>`;
    svg += `<circle cx="${lastPoint.x}" cy="${lastPoint.y}" r="${item.active ? 6 : 4}" fill="${item.color}" fill-opacity="${item.opacity || (item.active ? 1 : 0.5)}"></circle>`;
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

function getCountryFlagMarkup(country, label) {
  const code = countryFlagCodes[country];
  if (!code) {
    return "";
  }

  return `<img class="country-flag" src="https://flagcdn.com/48x36/${code.toLowerCase()}.png" alt="${label} flag">`;
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
  renderHeroTicker();
  renderHeroCostTicker();
  renderOfficeTimes();
  if (officeTimeIntervalId) {
    clearInterval(officeTimeIntervalId);
  }
  officeTimeIntervalId = setInterval(renderOfficeTimes, 60000);
  setCountryFocus(appState.selectedCountry);
  renderPriceSection();
  renderCostDrivers();
  renderSupplyDemand();
  renderRegionalDelta();
  renderForecast();
  renderSteelWiki("HRC");
  renderSensitivitySection();
  renderHeadlines();
  loadLiveHeadlines();
  renderRatios();
  showView(appState.currentView);
}

init();





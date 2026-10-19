// Generated 2026-10-19 from research-grade iNaturalist observations in the FieldScout dataset (CA / OR+WA). Month share = share of a region's observations in that month.
export type Region = { n: number; share: number[]; peak: string[] };
export type Species = { slug: string; name: string; taxa: string[]; regions: Record<string, Region> };
export const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
export const SPECIES: Species[] = [
 {
  "slug": "chanterelles",
  "name": "Chanterelles",
  "taxa": [
   "Cantharellus"
  ],
  "regions": {
   "California": {
    "n": 357,
    "share": [
     0.218,
     0.151,
     0.095,
     0.025,
     0.006,
     0.006,
     0.008,
     0.036,
     0.053,
     0.087,
     0.143,
     0.171
    ],
    "peak": [
     "Jan",
     "Feb",
     "Dec"
    ]
   },
   "Oregon & Washington": {
    "n": 286,
    "share": [
     0.021,
     0.007,
     0.003,
     0.0,
     0.0,
     0.01,
     0.035,
     0.094,
     0.21,
     0.325,
     0.192,
     0.101
    ],
    "peak": [
     "Sep",
     "Oct",
     "Nov"
    ]
   }
  }
 },
 {
  "slug": "porcini",
  "name": "Porcini (King bolete)",
  "taxa": [
   "Boletus edulis",
   "Boletus rex-veris",
   "Boletus barrowsii"
  ],
  "regions": {
   "California": {
    "n": 621,
    "share": [
     0.085,
     0.016,
     0.01,
     0.008,
     0.082,
     0.077,
     0.032,
     0.064,
     0.069,
     0.148,
     0.193,
     0.214
    ],
    "peak": [
     "Oct",
     "Nov",
     "Dec"
    ]
   },
   "Oregon & Washington": {
    "n": 417,
    "share": [
     0.0,
     0.0,
     0.0,
     0.002,
     0.058,
     0.065,
     0.048,
     0.137,
     0.168,
     0.391,
     0.129,
     0.002
    ],
    "peak": [
     "Aug",
     "Sep",
     "Oct"
    ]
   }
  }
 },
 {
  "slug": "morels",
  "name": "Morels",
  "taxa": [
   "Morchella"
  ],
  "regions": {
   "California": {
    "n": 265,
    "share": [
     0.045,
     0.075,
     0.219,
     0.306,
     0.245,
     0.034,
     0.004,
     0.004,
     0.0,
     0.0,
     0.019,
     0.049
    ],
    "peak": [
     "Mar",
     "Apr",
     "May"
    ]
   },
   "Oregon & Washington": {
    "n": 178,
    "share": [
     0.0,
     0.0,
     0.056,
     0.534,
     0.354,
     0.051,
     0.006,
     0.0,
     0.0,
     0.0,
     0.0,
     0.0
    ],
    "peak": [
     "Mar",
     "Apr",
     "May"
    ]
   }
  }
 },
 {
  "slug": "matsutake",
  "name": "Matsutake",
  "taxa": [
   "Tricholoma murrillianum",
   "Tricholoma magnivelare"
  ],
  "regions": {
   "California": {
    "n": 48,
    "share": [
     0.292,
     0.021,
     0.021,
     0.0,
     0.0,
     0.0,
     0.0,
     0.0,
     0.042,
     0.062,
     0.25,
     0.312
    ],
    "peak": [
     "Jan",
     "Nov",
     "Dec"
    ]
   },
   "Oregon & Washington": {
    "n": 108,
    "share": [
     0.0,
     0.0,
     0.0,
     0.0,
     0.0,
     0.0,
     0.0,
     0.037,
     0.065,
     0.454,
     0.352,
     0.093
    ],
    "peak": [
     "Oct",
     "Nov",
     "Dec"
    ]
   }
  }
 },
 {
  "slug": "hedgehog-mushrooms",
  "name": "Hedgehog mushrooms",
  "taxa": [
   "Hydnum"
  ],
  "regions": {
   "California": {
    "n": 35,
    "share": [
     0.286,
     0.286,
     0.029,
     0.057,
     0.0,
     0.0,
     0.0,
     0.0,
     0.0,
     0.086,
     0.029,
     0.229
    ],
    "peak": [
     "Jan",
     "Feb",
     "Dec"
    ]
   }
  }
 },
 {
  "slug": "lobster-mushroom",
  "name": "Lobster mushroom",
  "taxa": [
   "Hypomyces lactifluorum"
  ],
  "regions": {
   "California": {
    "n": 166,
    "share": [
     0.006,
     0.0,
     0.0,
     0.0,
     0.0,
     0.012,
     0.066,
     0.133,
     0.223,
     0.283,
     0.229,
     0.048
    ],
    "peak": [
     "Sep",
     "Oct",
     "Nov"
    ]
   },
   "Oregon & Washington": {
    "n": 586,
    "share": [
     0.0,
     0.0,
     0.0,
     0.0,
     0.0,
     0.002,
     0.044,
     0.157,
     0.268,
     0.372,
     0.142,
     0.015
    ],
    "peak": [
     "Aug",
     "Sep",
     "Oct"
    ]
   }
  }
 },
 {
  "slug": "oyster-mushrooms",
  "name": "Oyster mushrooms",
  "taxa": [
   "Pleurotus"
  ],
  "regions": {
   "California": {
    "n": 259,
    "share": [
     0.181,
     0.058,
     0.042,
     0.027,
     0.008,
     0.027,
     0.008,
     0.019,
     0.031,
     0.073,
     0.154,
     0.371
    ],
    "peak": [
     "Jan",
     "Nov",
     "Dec"
    ]
   },
   "Oregon & Washington": {
    "n": 131,
    "share": [
     0.0,
     0.008,
     0.023,
     0.16,
     0.26,
     0.137,
     0.031,
     0.031,
     0.069,
     0.183,
     0.076,
     0.023
    ],
    "peak": [
     "Apr",
     "May",
     "Oct"
    ]
   }
  }
 },
 {
  "slug": "turkey-tail",
  "name": "Turkey tail",
  "taxa": [
   "Trametes versicolor"
  ],
  "regions": {
   "California": {
    "n": 1024,
    "share": [
     0.203,
     0.157,
     0.148,
     0.104,
     0.062,
     0.028,
     0.026,
     0.015,
     0.029,
     0.042,
     0.077,
     0.107
    ],
    "peak": [
     "Jan",
     "Feb",
     "Mar"
    ]
   },
   "Oregon & Washington": {
    "n": 473,
    "share": [
     0.127,
     0.114,
     0.116,
     0.123,
     0.063,
     0.017,
     0.027,
     0.017,
     0.027,
     0.127,
     0.133,
     0.108
    ],
    "peak": [
     "Jan",
     "Oct",
     "Nov"
    ]
   }
  }
 },
 {
  "slug": "chicken-of-the-woods",
  "name": "Chicken of the woods",
  "taxa": [
   "Laetiporus"
  ],
  "regions": {
   "California": {
    "n": 958,
    "share": [
     0.015,
     0.004,
     0.006,
     0.005,
     0.002,
     0.004,
     0.022,
     0.082,
     0.254,
     0.394,
     0.165,
     0.047
    ],
    "peak": [
     "Sep",
     "Oct",
     "Nov"
    ]
   },
   "Oregon & Washington": {
    "n": 162,
    "share": [
     0.0,
     0.0,
     0.0,
     0.006,
     0.0,
     0.006,
     0.037,
     0.352,
     0.407,
     0.142,
     0.037,
     0.012
    ],
    "peak": [
     "Aug",
     "Sep",
     "Oct"
    ]
   }
  }
 },
 {
  "slug": "yellowfoot",
  "name": "Yellowfoot (winter chanterelle)",
  "taxa": [
   "Craterellus tubaeformis"
  ],
  "regions": {
   "California": {
    "n": 80,
    "share": [
     0.225,
     0.1,
     0.037,
     0.05,
     0.0,
     0.0,
     0.013,
     0.0,
     0.013,
     0.05,
     0.2,
     0.312
    ],
    "peak": [
     "Jan",
     "Nov",
     "Dec"
    ]
   },
   "Oregon & Washington": {
    "n": 221,
    "share": [
     0.149,
     0.059,
     0.023,
     0.014,
     0.018,
     0.005,
     0.014,
     0.0,
     0.063,
     0.208,
     0.244,
     0.204
    ],
    "peak": [
     "Oct",
     "Nov",
     "Dec"
    ]
   }
  }
 },
 {
  "slug": "honey-mushrooms",
  "name": "Honey mushrooms (Armillaria)",
  "taxa": [
   "Armillaria"
  ],
  "regions": {
   "California": {
    "n": 404,
    "share": [
     0.275,
     0.01,
     0.0,
     0.0,
     0.0,
     0.0,
     0.0,
     0.0,
     0.0,
     0.015,
     0.153,
     0.547
    ],
    "peak": [
     "Jan",
     "Nov",
     "Dec"
    ]
   },
   "Oregon & Washington": {
    "n": 47,
    "share": [
     0.0,
     0.0,
     0.0,
     0.0,
     0.0,
     0.0,
     0.0,
     0.0,
     0.021,
     0.468,
     0.426,
     0.085
    ],
    "peak": [
     "Oct",
     "Nov",
     "Dec"
    ]
   }
  }
 },
 {
  "slug": "shaggy-mane",
  "name": "Shaggy mane",
  "taxa": [
   "Coprinus comatus"
  ],
  "regions": {
   "California": {
    "n": 323,
    "share": [
     0.136,
     0.084,
     0.077,
     0.09,
     0.022,
     0.006,
     0.003,
     0.015,
     0.025,
     0.074,
     0.204,
     0.263
    ],
    "peak": [
     "Jan",
     "Nov",
     "Dec"
    ]
   },
   "Oregon & Washington": {
    "n": 306,
    "share": [
     0.007,
     0.003,
     0.013,
     0.033,
     0.01,
     0.007,
     0.007,
     0.01,
     0.078,
     0.565,
     0.232,
     0.036
    ],
    "peak": [
     "Sep",
     "Oct",
     "Nov"
    ]
   }
  }
 },
 {
  "slug": "lions-mane-and-tooth-fungi",
  "name": "Lions mane and tooth fungi",
  "taxa": [
   "Hericium"
  ],
  "regions": {
   "California": {
    "n": 344,
    "share": [
     0.285,
     0.099,
     0.061,
     0.026,
     0.003,
     0.006,
     0.0,
     0.006,
     0.009,
     0.067,
     0.151,
     0.288
    ],
    "peak": [
     "Jan",
     "Nov",
     "Dec"
    ]
   },
   "Oregon & Washington": {
    "n": 88,
    "share": [
     0.0,
     0.0,
     0.011,
     0.011,
     0.0,
     0.0,
     0.0,
     0.011,
     0.136,
     0.477,
     0.239,
     0.114
    ],
    "peak": [
     "Sep",
     "Oct",
     "Nov"
    ]
   }
  }
 },
 {
  "slug": "cauliflower-mushroom",
  "name": "Cauliflower mushroom",
  "taxa": [
   "Sparassis"
  ],
  "regions": {
   "California": {
    "n": 81,
    "share": [
     0.333,
     0.062,
     0.0,
     0.0,
     0.0,
     0.0,
     0.0,
     0.012,
     0.037,
     0.037,
     0.16,
     0.358
    ],
    "peak": [
     "Jan",
     "Nov",
     "Dec"
    ]
   },
   "Oregon & Washington": {
    "n": 112,
    "share": [
     0.018,
     0.009,
     0.0,
     0.0,
     0.0,
     0.0,
     0.0,
     0.0,
     0.179,
     0.509,
     0.223,
     0.062
    ],
    "peak": [
     "Sep",
     "Oct",
     "Nov"
    ]
   }
  }
 },
 {
  "slug": "fly-agaric",
  "name": "Fly agaric",
  "taxa": [
   "Amanita muscaria"
  ],
  "regions": {
   "California": {
    "n": 1086,
    "share": [
     0.297,
     0.03,
     0.011,
     0.009,
     0.003,
     0.0,
     0.005,
     0.009,
     0.01,
     0.032,
     0.202,
     0.392
    ],
    "peak": [
     "Jan",
     "Nov",
     "Dec"
    ]
   },
   "Oregon & Washington": {
    "n": 772,
    "share": [
     0.001,
     0.0,
     0.0,
     0.0,
     0.001,
     0.003,
     0.004,
     0.018,
     0.073,
     0.426,
     0.407,
     0.067
    ],
    "peak": [
     "Sep",
     "Oct",
     "Nov"
    ]
   }
  }
 },
 {
  "slug": "candy-cap",
  "name": "Candy cap",
  "taxa": [
   "Lactarius rubidus",
   "Lactarius fragilis"
  ],
  "regions": {
   "California": {
    "n": 303,
    "share": [
     0.465,
     0.205,
     0.083,
     0.023,
     0.007,
     0.0,
     0.0,
     0.007,
     0.003,
     0.0,
     0.046,
     0.162
    ],
    "peak": [
     "Jan",
     "Feb",
     "Dec"
    ]
   },
   "Oregon & Washington": {
    "n": 80,
    "share": [
     0.138,
     0.025,
     0.013,
     0.0,
     0.0,
     0.0,
     0.0,
     0.0,
     0.013,
     0.087,
     0.512,
     0.212
    ],
    "peak": [
     "Jan",
     "Nov",
     "Dec"
    ]
   }
  }
 }
];

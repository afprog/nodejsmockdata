var express = require("express"),  
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override");
    mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());  
app.use(methodOverride());

var router = express.Router();

router.get('/', function(req, res) {  
	result = {
  "modelCode": "ZOE",
  "testDriveModel": "X101VE",
  "vehicleCapCode": "X101VEVPZOE",
  "program": "X10",
  "phase": "1",
  "modelKind": "VE",
  "commercialKind": "VP",
  "dataPath": "/product/model/ZOE/zoe",
  "configurator": "https://valid.ie.co.rplug.renault.com/c/BAL_/A?v=2",
  "docURI": "https://valid.ie.co.rplug.renault.com/doc/BAL_",
  "basicModelInformation": {
    "name": "ZOE"
  },
  "interiorColours": {
    "groupKey": "141",
    "colours": [
      {
        "key": "HARM01",
        "pricesKeyList": [
          "HARM01",
          "QPA$MV"
        ],
        "name": "Light trim",
        "type": "SYSTEMATIC"
      }
    ]
  },
  "exteriorColours": {
    "groupKey": "141",
    "colours": [
      {
        "key": "TEKNV",
        "pricesKeyList": [
          "TEKNV",
          "QPA$MV"
        ],
        "name": "Calico Grey",
        "type": "OPTION"
      },
      {
        "key": "OVRPH",
        "pricesKeyList": [
          "OVRPH",
          "QPA$OS2"
        ],
        "name": "Iceberg Blue",
        "type": "OPTION"
      },
      {
        "key": "TEQNC",
        "pricesKeyList": [
          "TEQNC",
          "QPA$MVS"
        ],
        "name": "Pearl White",
        "type": "OPTION"
      },
      {
        "key": "TERQG",
        "pricesKeyList": [
          "TERQG",
          "QPA$RQG"
        ],
        "name": "Zircon Blue",
        "type": "OPTION"
      },
      {
        "key": "TEGNE",
        "pricesKeyList": [
          "TEGNE",
          "QPA$MV"
        ],
        "name": "Pearl Black",
        "type": "OPTION"
      },
      {
        "key": "TEKNR",
        "pricesKeyList": [
          "TEKNR",
          "QPA$MV"
        ],
        "name": "Neptune Grey",
        "type": "OPTION"
      },
      {
        "key": "OV369",
        "pricesKeyList": [
          "OV369",
          "QPA$OS1"
        ],
        "name": "Glacier White",
        "type": "OPTION"
      }
    ]
  },
  "grades": {
    "grades": [
      {
        "key": "ENS_MDL2P1SERIELIM1",
        "dataPath": "/product/model/ZOE/zoe",
        "specialVersion": false,
        "versions": {
          "versions": [
            {
              "name": "Zoe Expression",
              "key": "VEC037_GRBR",
              "dataPath": "/product/model/ZOE/zoe",
              "exteriorColours": {
                "groupKey": "141",
                "colours": [
                  {
                    "key": "TERQG",
                    "pricesKeyList": [
                      "TERQG",
                      "QPA$RQG"
                    ],
                    "name": "Zircon Blue",
                    "type": "OPTION"
                  },
                  {
                    "key": "TEQNC",
                    "pricesKeyList": [
                      "TEQNC",
                      "QPA$MVS"
                    ],
                    "name": "Pearl White",
                    "type": "OPTION"
                  },
                  {
                    "key": "TEKNR",
                    "pricesKeyList": [
                      "TEKNR",
                      "QPA$MV"
                    ],
                    "name": "Neptune Grey",
                    "type": "OPTION"
                  },
                  {
                    "key": "OVRPH",
                    "pricesKeyList": [
                      "OVRPH",
                      "QPA$OS2"
                    ],
                    "name": "Iceberg Blue",
                    "type": "OPTION"
                  },
                  {
                    "key": "OV369",
                    "pricesKeyList": [
                      "OV369",
                      "QPA$OS1"
                    ],
                    "name": "Glacier White",
                    "type": "OPTION"
                  }
                ]
              },
              "interiorColours": {
                "groupKey": "141",
                "colours": [
                  {
                    "key": "HARM01",
                    "pricesKeyList": [
                      "HARM01",
                      "QPA$MV"
                    ],
                    "name": "Light trim",
                    "type": "SYSTEMATIC"
                  }
                ]
              },
              "price": "25898.0",
              "currency": "EUR",
              "priceList": {
                "PVCFT": "17489.82",
                "PVCTTC": "25898.0"
              },
              "priceCodes": [
                {
                  "key": "PVCFT",
                  "currency": "EUR"
                },
                {
                  "key": "PVCTTC",
                  "currency": "EUR"
                }
              ],
              "engine": {
                "key": "PT5554_electric_engine_PT1633_automatic_gearbox",
                "engineType": {
                  "key": "PT5554_electric_engine",
                  "value": "Electric engine",
                  "unit": "Engine",
                  "type": "SYSTEMATIC"
                },
                "battery": [
                  {
                    "key": "PT5554_electric_engine",
                    "type": "lease"
                  },
                  {
                    "key": "PT5554_electric_engine",
                    "type": "buy"
                  }
                ],
                "fuelType": {
                  "key": "PT1628_electric",
                  "value": "Electric",
                  "unit": "Fuel Type",
                  "type": "SYSTEMATIC"
                },
                "capacity": {
                  "key": "PT42_nc",
                  "value": "NC",
                  "unit": "Induction Capacity (cc)",
                  "type": "SYSTEMATIC"
                },
                "cylinders": {
                  "key": "PT44_nc",
                  "value": "NC",
                  "unit": "No. of Cylinders",
                  "type": "SYSTEMATIC"
                },
                "torque": {
                  "key": "PT1625_220",
                  "value": "220",
                  "unit": "Maximum Torque - Nm ISO",
                  "type": "SYSTEMATIC"
                },
                "power": {
                  "hp": {
                    "key": "PT5550_88",
                    "value": "88",
                    "unit": "Power (BHP)",
                    "type": "SYSTEMATIC"
                  },
                  "kw": {
                    "key": "PT5553_65",
                    "value": "65",
                    "unit": "Power (Kw)",
                    "type": "SYSTEMATIC"
                  }
                },
                "transmission": {
                  "key": "PT1633_automatic_gearbox",
                  "gears": {
                    "key": "PT47_nc",
                    "value": "NC",
                    "unit": "Number of Forward Gears",
                    "type": "SYSTEMATIC"
                  },
                  "gearBoxType": {
                    "key": "PT1633_automatic_gearbox",
                    "value": "Automatic gearbox",
                    "unit": "Gearbox Type",
                    "type": "SYSTEMATIC"
                  },
                  "specs": {
                    "specs": []
                  }
                },
                "performance": {
                  "maxSpeed": {
                    "key": "PT1121_135",
                    "value": "135",
                    "unit": "Maximum Speed - kph",
                    "type": "SYSTEMATIC"
                  }
                },
                "fuelConsumption": {
                  "urban": {
                    "key": "PT1641_0",
                    "value": "0",
                    "unit": "Urban (litres/100km)",
                    "type": "SYSTEMATIC"
                  },
                  "extraUrban": {
                    "key": "PT1642_0",
                    "value": "0",
                    "unit": "Extra Urban (litres/100km)",
                    "type": "SYSTEMATIC"
                  },
                  "combined": {
                    "key": "PT1643_0",
                    "value": "0",
                    "unit": "Combined (litres/100km)",
                    "type": "SYSTEMATIC"
                  },
                  "co2Emissions": {
                    "key": "PT1640_0",
                    "value": "0",
                    "unit": "CO2 (g/km)",
                    "type": "SYSTEMATIC"
                  }
                },
                "emissionControlStandard": {
                  "key": "PT3401_euro5",
                  "value": "EURO5",
                  "unit": "Emission Control Standard",
                  "type": "SYSTEMATIC"
                },
                "name": "Electric engine",
                "specs": {
                  "specs": [
                    {
                      "key": "PT3641_n_a",
                      "value": "N/A",
                      "unit": "Particle Filter",
                      "type": "SYSTEMATIC",
                      "pricesKeyList": [
                        "PT3641_n_a"
                      ]
                    },
                    {
                      "key": "PT1623_065_088_",
                      "value": "065 (088)",
                      "unit": "Maximum Power - kw ISO",
                      "type": "SYSTEMATIC",
                      "pricesKeyList": [
                        "PT1623_065_088_"
                      ]
                    },
                    {
                      "key": "PT1627_n_a",
                      "value": "N/A",
                      "unit": "Injection Type",
                      "type": "SYSTEMATIC",
                      "pricesKeyList": [
                        "PT1627_n_a"
                      ]
                    }
                  ]
                },
                "pricesKeyList": [
                  "PT5554_electric_engine",
                  null,
                  "PT1633_automatic_gearbox"
                ],
                "fullEngineName": "Electric engine Automatic gearbox NC"
              },
              "wheels": {
                "groupKey": "PT5556",
                "wheels": [
                  {
                    "key": "PT5556_15_steel_wheels",
                    "name": "15\" steel wheels",
                    "type": "OPTION",
                    "pricesKeyList": [
                      "PT5556_15_steel_wheels",
                      "RTOL15",
                      "RNORM"
                    ]
                  },
                  {
                    "key": "PT5556_16-E2-80-9D_aerotronic_alloy_wheels",
                    "name": "16” Aerotronic Alloy wheels",
                    "type": "OPTION",
                    "pricesKeyList": [
                      "PT5556_16-E2-80-9D_aerotronic_alloy_wheels",
                      "RALU16",
                      "RNORM"
                    ]
                  }
                ]
              },
              "upholsteries": {
                "groupKey": "122",
                "upholsteries": [
                  {
                    "key": "DRAP07",
                    "name": "Expression Black Interior",
                    "type": "SYSTEMATIC"
                  }
                ]
              },
              "trims": {
                "groupKey": "",
                "trims": []
              },
              "volume": {
                "specs": {
                  "specs": []
                }
              },
              "dimensions": {
                "height": {
                  "key": "PT1120_1562",
                  "value": "1562",
                  "unit": "Overall Height",
                  "type": "SYSTEMATIC"
                },
                "length": {
                  "key": "PT1118_4084",
                  "value": "4084",
                  "unit": "Overall Length",
                  "type": "SYSTEMATIC"
                },
                "specs": {
                  "specs": [
                    {
                      "key": "PT1664_2588",
                      "value": "2588",
                      "unit": "(A) Wheelbase",
                      "type": "SYSTEMATIC",
                      "pricesKeyList": [
                        "PT1664_2588"
                      ]
                    }
                  ]
                }
              },
              "weight": {
                "maxPayload": {
                  "key": "PT1661_434",
                  "value": "434",
                  "unit": "Maximum Payload (Including Driver) (kg)",
                  "type": "SYSTEMATIC"
                },
                "specs": {
                  "specs": [
                    {
                      "key": "PT1660_1943",
                      "value": "1943",
                      "unit": "Gross Train Weight (kg)",
                      "type": "SYSTEMATIC",
                      "pricesKeyList": [
                        "PT1660_1943"
                      ]
                    }
                  ]
                }
              },
              "charge": {
                "specs": {
                  "specs": []
                }
              },
              "packs": {
                "packs": []
              },
              "stylePacks": {
                "packs": [],
                "exteriorPackGroups": [],
                "interiorPackGroups": []
              },
              "accessoriesPacks": {
                "packs": []
              },
              "accessories": [],
              "equipmentSpecs": [
                {
                  "key": "AUD",
                  "value": "Connectivity & Sound system",
                  "specs": [
                    {
                      "key": "RAD37A",
                      "value": "Arkamys 3D Sound 4x35W radio",
                      "unit": "Connectivity & Sound system",
                      "type": "OPTION",
                      "price": "0.0"
                    },
                    {
                      "key": "RAD35A",
                      "value": "4x20W Classic radio with 2 front and 2 rear speakers",
                      "unit": "Connectivity & Sound system",
                      "type": "DEFAULT"
                    }
                  ]
                },
                {
                  "key": "MOT",
                  "value": "Engine",
                  "specs": [
                    {
                      "key": "KM",
                      "unit": "Engine",
                      "type": "SYSTEMATIC"
                    }
                  ]
                },
                {
                  "key": "MEDIA",
                  "value": "Communication & Navigation",
                  "specs": [
                    {
                      "key": "MAPSTD",
                      "value": "UK & Ireland mapping",
                      "unit": "Communication & Navigation",
                      "type": "DEFAULT"
                    },
                    {
                      "key": "MAPSUP",
                      "value": "Additional mapping - Western Europe",
                      "unit": "Communication & Navigation",
                      "type": "OPTION",
                      "price": "100.0"
                    },
                    {
                      "key": "TCU0G2",
                      "value": "Telematics",
                      "unit": "Communication & Navigation",
                      "type": "SYSTEMATIC"
                    },
                    {
                      "key": "NAV3G5",
                      "value": "R-Link 2 Navigation & Multimedia System",
                      "unit": "Communication & Navigation",
                      "type": "SYSTEMATIC"
                    },
                    {
                      "key": "SRV$MMLIVE",
                      "value": "LIVE Services",
                      "unit": "Communication & Navigation",
                      "type": "OPTION",
                      "price": "99.0"
                    }
                  ]
                },
                {
                  "key": "Spe Ze",
                  "value": "Specialist Z.E. Equipment",
                  "specs": [
                    {
                      "key": "026KWH",
                      "value": "Secondary battery capacity",
                      "unit": "Specialist Z.E. Equipment",
                      "type": "SYSTEMATIC"
                    },
                    {
                      "key": "CACBL2",
                      "value": "6 metre Charging cable (Type 2 Mode 3)",
                      "unit": "Specialist Z.E. Equipment",
                      "type": "SYSTEMATIC"
                    }
                  ]
                },
                {
                  "key": "COMFOR",
                  "value": "Comfort & Convenience",
                  "specs": [
                    {
                      "key": "ATAR",
                      "value": "Height adjustable headrests on outer rear seats",
                      "unit": "Comfort & Convenience",
                      "type": "SYSTEMATIC"
                    },
                    {
                      "key": "LVARMA",
                      "value": "Manual rear windows",
                      "unit": "Comfort & Convenience",
                      "type": "SYSTEMATIC"
                    },
                    {
                      "key": "FDIU1",
                      "value": "Daytime running lights",
                      "unit": "Comfort & Convenience",
                      "type": "SYSTEMATIC"
                    },
                    {
                      "key": "CAREG",
                      "value": "Dual-zone climate control",
                      "unit": "Comfort & Convenience",
                      "type": "SYSTEMATIC"
                    },
                    {
                      "key": "CEAVRH",
                      "value": "Height adjustable front seatbelts",
                      "unit": "Comfort & Convenience",
                      "type": "SYSTEMATIC"
                    },
                    {
                      "key": "LAC",
                      "value": "Rear heated window",
                      "unit": "Comfort & Convenience",
                      "type": "SYSTEMATIC"
                    },
                    {
                      "key": "RV",
                      "value": "Cruise control & speed limiter",
                      "unit": "Comfort & Convenience",
                      "type": "SYSTEMATIC"
                    },
                    {
                      "key": "LVAVEL",
                      "value": "Electric front windows",
                      "unit": "Comfort & Convenience",
                      "type": "SYSTEMATIC"
                    },
                    {
                      "key": "SUPCPE",
                      "value": "Deadlocking",
                      "unit": "Comfort & Convenience",
                      "type": "SYSTEMATIC"
                    },
                    {
                      "key": "RET02",
                      "value": "Electrically operated and heated door mirrors",
                      "unit": "Comfort & Convenience",
                      "type": "SYSTEMATIC"
                    },
                    {
                      "key": "SOP01C",
                      "value": "Renault keycard",
                      "unit": "Comfort & Convenience",
                      "type": "SYSTEMATIC"
                    }
                  ]
                },
                {
                  "key": "ZE",
                  "value": "Services ZE",
                  "specs": [
                    {
                      "key": "SRV$ZEINTER",
                      "value": "My Z.E. Interactive",
                      "unit": "Services ZE",
                      "type": "OPTION",
                      "price": "99.0",
                      "pricesKeyList": [
                        "SRV$ZEINTER"
                      ]
                    }
                  ]
                },
                {
                  "key": "DRIVIN",
                  "value": "Safety & Security",
                  "specs": [
                    {
                      "key": "KTGREP",
                      "value": "Tyre repair kit",
                      "unit": "Safety & Security",
                      "type": "SYSTEMATIC"
                    },
                    {
                      "key": "ALAR06",
                      "value": "R.A.I.D. (Renault Anti Intruder Device) automatic door locking",
                      "unit": "Safety & Security",
                      "type": "SYSTEMATIC"
                    },
                    {
                      "key": "CMAR3P",
                      "value": "3-point rear seatbelts",
                      "unit": "Safety & Security",
                      "type": "SYSTEMATIC"
                    },
                    {
                      "key": "ABS",
                      "value": "ABS with EBD (Electronic Brake Distribution) and emergency brake assist",
                      "unit": "Safety & Security",
                      "type": "SYSTEMATIC"
                    },
                    {
                      "key": "ASRESP",
                      "value": "ESC (Electronic Stability Control) with ASR (Traction Control)",
                      "unit": "Safety & Security",
                      "type": "SYSTEMATIC"
                    },
                    {
                      "key": "DPRPN",
                      "value": "Tyre pressure monitors",
                      "unit": "Safety & Security",
                      "type": "SYSTEMATIC"
                    },
                    {
                      "key": "ALOUCC",
                      "value": "Driver's seatbelt warning",
                      "unit": "Safety & Security",
                      "type": "SYSTEMATIC"
                    },
                    {
                      "key": "ISOFIX",
                      "value": "ISOFIX fittings on outer rear seats and front passenger seat",
                      "unit": "Safety & Security",
                      "type": "SYSTEMATIC"
                    },
                    {
                      "key": "AIRBA1",
                      "value": "Front passenger airbag",
                      "unit": "Safety & Security",
                      "type": "SYSTEMATIC"
                    }
                  ]
                }
              ],
              "techSpecs": [
                {
                  "key": "DEC411",
                  "value": "Engine Type and Conformance",
                  "specs": [
                    {
                      "key": "PT4321_renault_eco2",
                      "value": "Renault Eco2",
                      "unit": "Ecological Label",
                      "type": "SYSTEMATIC",
                      "pricesKeyList": [
                        "PT4321_renault_eco2"
                      ]
                    }
                  ]
                },
                {
                  "key": "DEC407",
                  "value": "Braking",
                  "specs": [
                    {
                      "key": "PT1653_ta_228",
                      "value": "TA-228",
                      "unit": "Rear Discs (Diameter mm)",
                      "type": "SYSTEMATIC",
                      "pricesKeyList": [
                        "PT1653_ta_228"
                      ]
                    },
                    {
                      "key": "PT1652_dv_258",
                      "value": "DV-258",
                      "unit": "Front Discs (Diameter mm)",
                      "type": "SYSTEMATIC",
                      "pricesKeyList": [
                        "PT1652_dv_258"
                      ]
                    }
                  ]
                },
                {
                  "key": "DEC408",
                  "value": "Tyres",
                  "specs": [
                    {
                      "key": "PT1635_185_65_r_15",
                      "value": "185/65  R 15",
                      "unit": "Size/Profile",
                      "type": "OPTION",
                      "pricesKeyList": [
                        "PT1635_185_65_r_15"
                      ]
                    },
                    {
                      "key": "PT1635_195_55_r_16",
                      "value": "195/55  R 16",
                      "unit": "Size/Profile",
                      "type": "OPTION",
                      "pricesKeyList": [
                        "PT1635_195_55_r_16"
                      ]
                    }
                  ]
                },
                {
                  "key": "DEC3181",
                  "value": "Key Specifications",
                  "specs": [
                    {
                      "key": "PT5383_automatic_gearbox",
                      "value": "Automatic gearbox",
                      "unit": "Gearbox",
                      "type": "SYSTEMATIC",
                      "pricesKeyList": [
                        "PT5383_automatic_gearbox"
                      ]
                    },
                    {
                      "key": "PT5548_life",
                      "value": "Life",
                      "unit": "Equipment Level",
                      "type": "SYSTEMATIC",
                      "pricesKeyList": [
                        "PT5548_life"
                      ]
                    },
                    {
                      "key": "PT5547_internet_connectivity",
                      "value": "Internet Connectivity",
                      "unit": "Connectivity",
                      "type": "SYSTEMATIC",
                      "pricesKeyList": [
                        "PT5547_internet_connectivity"
                      ]
                    },
                    {
                      "key": "PT5556_15_steel_wheels",
                      "value": "15\" steel wheels",
                      "unit": "Wheels",
                      "type": "OPTION",
                      "pricesKeyList": [
                        "PT5556_15_steel_wheels"
                      ]
                    },
                    {
                      "key": "PT5556_16-E2-80-9D_aerotronic_alloy_wheels",
                      "value": "16” Aerotronic Alloy wheels",
                      "unit": "Wheels",
                      "type": "OPTION",
                      "pricesKeyList": [
                        "PT5556_16-E2-80-9D_aerotronic_alloy_wheels"
                      ]
                    }
                  ]
                },
                {
                  "key": "DEC21",
                  "value": "Capacities",
                  "specs": [
                    {
                      "key": "PT301_nc",
                      "value": "NC",
                      "unit": "Fuel Tank - Litres",
                      "type": "SYSTEMATIC",
                      "pricesKeyList": [
                        "PT301_nc"
                      ]
                    }
                  ]
                }
              ],
              "body": {
                "doors": {
                  "key": "PT1262_5",
                  "value": "5",
                  "unit": "No. of Doors",
                  "type": "SYSTEMATIC"
                },
                "type": {
                  "key": "PT1261_hatch",
                  "value": "Hatch",
                  "unit": "Body Type Classification",
                  "type": "SYSTEMATIC"
                },
                "specs": {
                  "specs": []
                }
              },
              "seating": {
                "specs": {
                  "specs": []
                }
              },
              "localSemiClair": "LIF MA 8 IR"
            }
          ]
        },
        "engines": {
          "engines": [
            {
              "key": "PT5554_electric_engine_PT1633_automatic_gearbox",
              "engineType": {
                "key": "PT5554_electric_engine",
                "value": "Electric engine",
                "unit": "Engine",
                "type": "SYSTEMATIC"
              },
              "battery": [
                {
                  "key": "PT5554_electric_engine",
                  "type": "lease"
                },
                {
                  "key": "PT5554_electric_engine",
                  "type": "buy"
                }
              ],
              "fuelType": {
                "key": "PT1628_electric",
                "value": "Electric",
                "unit": "Fuel Type",
                "type": "SYSTEMATIC"
              },
              "capacity": {
                "key": "PT42_nc",
                "value": "NC",
                "unit": "Induction Capacity (cc)",
                "type": "SYSTEMATIC"
              },
              "cylinders": {
                "key": "PT44_nc",
                "value": "NC",
                "unit": "No. of Cylinders",
                "type": "SYSTEMATIC"
              },
              "torque": {
                "key": "PT1625_220",
                "value": "220",
                "unit": "Maximum Torque - Nm ISO",
                "type": "SYSTEMATIC"
              },
              "power": {
                "hp": {
                  "key": "PT5550_88",
                  "value": "88",
                  "unit": "Power (BHP)",
                  "type": "SYSTEMATIC"
                },
                "kw": {
                  "key": "PT5553_65",
                  "value": "65",
                  "unit": "Power (Kw)",
                  "type": "SYSTEMATIC"
                }
              },
              "transmission": {
                "key": "PT1633_automatic_gearbox",
                "gears": {
                  "key": "PT47_nc",
                  "value": "NC",
                  "unit": "Number of Forward Gears",
                  "type": "SYSTEMATIC"
                },
                "gearBoxType": {
                  "key": "PT1633_automatic_gearbox",
                  "value": "Automatic gearbox",
                  "unit": "Gearbox Type",
                  "type": "SYSTEMATIC"
                },
                "specs": {
                  "specs": []
                }
              },
              "performance": {
                "maxSpeed": {
                  "key": "PT1121_135",
                  "value": "135",
                  "unit": "Maximum Speed - kph",
                  "type": "SYSTEMATIC"
                }
              },
              "fuelConsumption": {
                "urban": {
                  "key": "PT1641_0",
                  "value": "0",
                  "unit": "Urban (litres/100km)",
                  "type": "SYSTEMATIC"
                },
                "extraUrban": {
                  "key": "PT1642_0",
                  "value": "0",
                  "unit": "Extra Urban (litres/100km)",
                  "type": "SYSTEMATIC"
                },
                "combined": {
                  "key": "PT1643_0",
                  "value": "0",
                  "unit": "Combined (litres/100km)",
                  "type": "SYSTEMATIC"
                },
                "co2Emissions": {
                  "key": "PT1640_0",
                  "value": "0",
                  "unit": "CO2 (g/km)",
                  "type": "SYSTEMATIC"
                }
              },
              "emissionControlStandard": {
                "key": "PT3401_euro5",
                "value": "EURO5",
                "unit": "Emission Control Standard",
                "type": "SYSTEMATIC"
              },
              "name": "Electric engine",
              "specs": {
                "specs": [
                  {
                    "key": "PT3641_n_a",
                    "value": "N/A",
                    "unit": "Particle Filter",
                    "type": "SYSTEMATIC",
                    "pricesKeyList": [
                      "PT3641_n_a"
                    ]
                  },
                  {
                    "key": "PT1623_065_088_",
                    "value": "065 (088)",
                    "unit": "Maximum Power - kw ISO",
                    "type": "SYSTEMATIC",
                    "pricesKeyList": [
                      "PT1623_065_088_"
                    ]
                  },
                  {
                    "key": "PT1627_n_a",
                    "value": "N/A",
                    "unit": "Injection Type",
                    "type": "SYSTEMATIC",
                    "pricesKeyList": [
                      "PT1627_n_a"
                    ]
                  }
                ]
              },
              "pricesKeyList": [
                "PT5554_electric_engine",
                null,
                "PT1633_automatic_gearbox"
              ],
              "fullEngineName": "Electric engine Automatic gearbox NC"
            }
          ]
        },
        "upholsteries": {
          "groupKey": "122",
          "upholsteries": [
            {
              "key": "DRAP07",
              "name": "Expression Black Interior",
              "type": "SYSTEMATIC"
            }
          ]
        },
        "trims": {
          "groupKey": "",
          "trims": []
        },
        "wheels": {
          "groupKey": "PT5556",
          "wheels": [
            {
              "key": "PT5556_16-E2-80-9D_aerotronic_alloy_wheels",
              "name": "16” Aerotronic Alloy wheels",
              "type": "OPTION",
              "pricesKeyList": [
                "PT5556_16-E2-80-9D_aerotronic_alloy_wheels",
                "RALU16",
                "RNORM"
              ]
            },
            {
              "key": "PT5556_15_steel_wheels",
              "name": "15\" steel wheels",
              "type": "OPTION",
              "pricesKeyList": [
                "PT5556_15_steel_wheels",
                "RTOL15",
                "RNORM"
              ]
            }
          ]
        },
        "exteriorColours": {
          "groupKey": "141",
          "colours": [
            {
              "key": "OVRPH",
              "pricesKeyList": [
                "OVRPH",
                "QPA$OS2"
              ],
              "name": "Iceberg Blue",
              "type": "OPTION"
            },
            {
              "key": "TEQNC",
              "pricesKeyList": [
                "TEQNC",
                "QPA$MVS"
              ],
              "name": "Pearl White",
              "type": "OPTION"
            },
            {
              "key": "TERQG",
              "pricesKeyList": [
                "TERQG",
                "QPA$RQG"
              ],
              "name": "Zircon Blue",
              "type": "OPTION"
            },
            {
              "key": "TEKNR",
              "pricesKeyList": [
                "TEKNR",
                "QPA$MV"
              ],
              "name": "Neptune Grey",
              "type": "OPTION"
            },
            {
              "key": "OV369",
              "pricesKeyList": [
                "OV369",
                "QPA$OS1"
              ],
              "name": "Glacier White",
              "type": "OPTION"
            }
          ]
        },
        "interiorColours": {
          "groupKey": "141",
          "colours": [
            {
              "key": "HARM01",
              "pricesKeyList": [
                "HARM01",
                "QPA$MV"
              ],
              "name": "Light trim",
              "type": "SYSTEMATIC"
            }
          ]
        },
        "packs": {
          "packs": []
        },
        "stylePacks": {
          "packs": [],
          "exteriorPackGroups": [],
          "interiorPackGroups": []
        },
        "accessories": [],
        "accessoryPacks": {
          "packs": [],
          "accessoryPackGroups": []
        },
        "equipmentSpecs": [
          {
            "key": "AUD",
            "value": "Connectivity & Sound system",
            "specs": [
              {
                "key": "RAD37A",
                "value": "Arkamys 3D Sound 4x35W radio",
                "unit": "Connectivity & Sound system",
                "type": "OPTION",
                "price": "0.0"
              },
              {
                "key": "RAD35A",
                "value": "4x20W Classic radio with 2 front and 2 rear speakers",
                "unit": "Connectivity & Sound system",
                "type": "DEFAULT"
              }
            ]
          },
          {
            "key": "MOT",
            "value": "Engine",
            "specs": [
              {
                "key": "KM",
                "unit": "Engine",
                "type": "SYSTEMATIC"
              }
            ]
          },
          {
            "key": "MEDIA",
            "value": "Communication & Navigation",
            "specs": [
              {
                "key": "MAPSTD",
                "value": "UK & Ireland mapping",
                "unit": "Communication & Navigation",
                "type": "DEFAULT"
              },
              {
                "key": "TCU0G2",
                "value": "Telematics",
                "unit": "Communication & Navigation",
                "type": "SYSTEMATIC"
              },
              {
                "key": "NAV3G5",
                "value": "R-Link 2 Navigation & Multimedia System",
                "unit": "Communication & Navigation",
                "type": "SYSTEMATIC"
              },
              {
                "key": "MAPSUP",
                "value": "Additional mapping - Western Europe",
                "unit": "Communication & Navigation",
                "type": "OPTION",
                "price": "100.0"
              },
              {
                "key": "SRV$MMLIVE",
                "value": "LIVE Services",
                "unit": "Communication & Navigation",
                "type": "OPTION",
                "price": "99.0"
              }
            ]
          },
          {
            "key": "Spe Ze",
            "value": "Specialist Z.E. Equipment",
            "specs": [
              {
                "key": "026KWH",
                "value": "Secondary battery capacity",
                "unit": "Specialist Z.E. Equipment",
                "type": "SYSTEMATIC"
              },
              {
                "key": "CACBL2",
                "value": "6 metre Charging cable (Type 2 Mode 3)",
                "unit": "Specialist Z.E. Equipment",
                "type": "SYSTEMATIC"
              }
            ]
          },
          {
            "key": "COMFOR",
            "value": "Comfort & Convenience",
            "specs": [
              {
                "key": "CEAVRH",
                "value": "Height adjustable front seatbelts",
                "unit": "Comfort & Convenience",
                "type": "SYSTEMATIC"
              },
              {
                "key": "RV",
                "value": "Cruise control & speed limiter",
                "unit": "Comfort & Convenience",
                "type": "SYSTEMATIC"
              },
              {
                "key": "LVARMA",
                "value": "Manual rear windows",
                "unit": "Comfort & Convenience",
                "type": "SYSTEMATIC"
              },
              {
                "key": "RET02",
                "value": "Electrically operated and heated door mirrors",
                "unit": "Comfort & Convenience",
                "type": "SYSTEMATIC"
              },
              {
                "key": "CAREG",
                "value": "Dual-zone climate control",
                "unit": "Comfort & Convenience",
                "type": "SYSTEMATIC"
              },
              {
                "key": "ATAR",
                "value": "Height adjustable headrests on outer rear seats",
                "unit": "Comfort & Convenience",
                "type": "SYSTEMATIC"
              },
              {
                "key": "FDIU1",
                "value": "Daytime running lights",
                "unit": "Comfort & Convenience",
                "type": "SYSTEMATIC"
              },
              {
                "key": "LVAVEL",
                "value": "Electric front windows",
                "unit": "Comfort & Convenience",
                "type": "SYSTEMATIC"
              },
              {
                "key": "SOP01C",
                "value": "Renault keycard",
                "unit": "Comfort & Convenience",
                "type": "SYSTEMATIC"
              },
              {
                "key": "LAC",
                "value": "Rear heated window",
                "unit": "Comfort & Convenience",
                "type": "SYSTEMATIC"
              },
              {
                "key": "SUPCPE",
                "value": "Deadlocking",
                "unit": "Comfort & Convenience",
                "type": "SYSTEMATIC"
              }
            ]
          },
          {
            "key": "ZE",
            "value": "Services ZE",
            "specs": [
              {
                "key": "SRV$ZEINTER",
                "value": "My Z.E. Interactive",
                "unit": "Services ZE",
                "type": "OPTION",
                "price": "99.0",
                "pricesKeyList": [
                  "SRV$ZEINTER"
                ]
              }
            ]
          },
          {
            "key": "DRIVIN",
            "value": "Safety & Security",
            "specs": [
              {
                "key": "ASRESP",
                "value": "ESC (Electronic Stability Control) with ASR (Traction Control)",
                "unit": "Safety & Security",
                "type": "SYSTEMATIC"
              },
              {
                "key": "ABS",
                "value": "ABS with EBD (Electronic Brake Distribution) and emergency brake assist",
                "unit": "Safety & Security",
                "type": "SYSTEMATIC"
              },
              {
                "key": "KTGREP",
                "value": "Tyre repair kit",
                "unit": "Safety & Security",
                "type": "SYSTEMATIC"
              },
              {
                "key": "DPRPN",
                "value": "Tyre pressure monitors",
                "unit": "Safety & Security",
                "type": "SYSTEMATIC"
              },
              {
                "key": "CMAR3P",
                "value": "3-point rear seatbelts",
                "unit": "Safety & Security",
                "type": "SYSTEMATIC"
              },
              {
                "key": "ISOFIX",
                "value": "ISOFIX fittings on outer rear seats and front passenger seat",
                "unit": "Safety & Security",
                "type": "SYSTEMATIC"
              },
              {
                "key": "ALAR06",
                "value": "R.A.I.D. (Renault Anti Intruder Device) automatic door locking",
                "unit": "Safety & Security",
                "type": "SYSTEMATIC"
              },
              {
                "key": "AIRBA1",
                "value": "Front passenger airbag",
                "unit": "Safety & Security",
                "type": "SYSTEMATIC"
              },
              {
                "key": "ALOUCC",
                "value": "Driver's seatbelt warning",
                "unit": "Safety & Security",
                "type": "SYSTEMATIC"
              }
            ]
          }
        ],
        "name": "Expression",
        "priceCodes": [
          {
            "key": "PVCFT",
            "currency": "EUR"
          },
          {
            "key": "PVCTTC",
            "currency": "EUR"
          }
        ]
      },
      {
        "key": "ENS_MDL2P1SERIELIM3",
        "dataPath": "/product/model/ZOE/zoe",
        "specialVersion": false,
        "versions": {
          "versions": [
            {
              "name": "Zoe Dynamique Intense",
              "key": "VEC039_GRBR",
              "dataPath": "/product/model/ZOE/zoe",
              "exteriorColours": {
                "groupKey": "141",
                "colours": [
                  {
                    "key": "TERQG",
                    "pricesKeyList": [
                      "TERQG",
                      "QPA$RQG"
                    ],
                    "name": "Zircon Blue",
                    "type": "OPTION"
                  },
                  {
                    "key": "TEQNC",
                    "pricesKeyList": [
                      "TEQNC",
                      "QPA$MVS"
                    ],
                    "name": "Pearl White",
                    "type": "OPTION"
                  },
                  {
                    "key": "TEKNV",
                    "pricesKeyList": [
                      "TEKNV",
                      "QPA$MV"
                    ],
                    "name": "Calico Grey",
                    "type": "OPTION"
                  },
                  {
                    "key": "TEKNR",
                    "pricesKeyList": [
                      "TEKNR",
                      "QPA$MV"
                    ],
                    "name": "Neptune Grey",
                    "type": "OPTION"
                  },
                  {
                    "key": "TEGNE",
                    "pricesKeyList": [
                      "TEGNE",
                      "QPA$MV"
                    ],
                    "name": "Pearl Black",
                    "type": "OPTION"
                  },
                  {
                    "key": "OVRPH",
                    "pricesKeyList": [
                      "OVRPH",
                      "QPA$OS2"
                    ],
                    "name": "Iceberg Blue",
                    "type": "OPTION"
                  },
                  {
                    "key": "OV369",
                    "pricesKeyList": [
                      "OV369",
                      "QPA$OS1"
                    ],
                    "name": "Glacier White",
                    "type": "OPTION"
                  }
                ]
              },
              "interiorColours": {
                "groupKey": "141",
                "colours": [
                  {
                    "key": "HARM01",
                    "pricesKeyList": [
                      "HARM01",
                      "QPA$MV"
                    ],
                    "name": "Light trim",
                    "type": "SYSTEMATIC"
                  }
                ]
              },
              "price": "27971.0",
              "currency": "EUR",
              "priceList": {
                "PVCFT": "19290.02",
                "PVCTTC": "27971.0"
              },
              "priceCodes": [
                {
                  "key": "PVCFT",
                  "currency": "EUR"
                },
                {
                  "key": "PVCTTC",
                  "currency": "EUR"
                }
              ],
              "engine": {
                "key": "PT5554_electric_engine_PT1633_automatic_gearbox",
                "engineType": {
                  "key": "PT5554_electric_engine",
                  "value": "Electric engine",
                  "unit": "Engine",
                  "type": "SYSTEMATIC"
                },
                "battery": [
                  {
                    "key": "PT5554_electric_engine",
                    "type": "lease"
                  },
                  {
                    "key": "PT5554_electric_engine",
                    "type": "buy"
                  }
                ],
                "fuelType": {
                  "key": "PT1628_electric",
                  "value": "Electric",
                  "unit": "Fuel Type",
                  "type": "SYSTEMATIC"
                },
                "capacity": {
                  "key": "PT42_nc",
                  "value": "NC",
                  "unit": "Induction Capacity (cc)",
                  "type": "SYSTEMATIC"
                },
                "cylinders": {
                  "key": "PT44_nc",
                  "value": "NC",
                  "unit": "No. of Cylinders",
                  "type": "SYSTEMATIC"
                },
                "torque": {
                  "key": "PT1625_220",
                  "value": "220",
                  "unit": "Maximum Torque - Nm ISO",
                  "type": "SYSTEMATIC"
                },
                "power": {
                  "hp": {
                    "key": "PT5550_88",
                    "value": "88",
                    "unit": "Power (BHP)",
                    "type": "SYSTEMATIC"
                  },
                  "kw": {
                    "key": "PT5553_65",
                    "value": "65",
                    "unit": "Power (Kw)",
                    "type": "SYSTEMATIC"
                  }
                },
                "transmission": {
                  "key": "PT1633_automatic_gearbox",
                  "gears": {
                    "key": "PT47_nc",
                    "value": "NC",
                    "unit": "Number of Forward Gears",
                    "type": "SYSTEMATIC"
                  },
                  "gearBoxType": {
                    "key": "PT1633_automatic_gearbox",
                    "value": "Automatic gearbox",
                    "unit": "Gearbox Type",
                    "type": "SYSTEMATIC"
                  },
                  "specs": {
                    "specs": []
                  }
                },
                "performance": {
                  "maxSpeed": {
                    "key": "PT1121_135",
                    "value": "135",
                    "unit": "Maximum Speed - kph",
                    "type": "SYSTEMATIC"
                  }
                },
                "fuelConsumption": {
                  "urban": {
                    "key": "PT1641_0",
                    "value": "0",
                    "unit": "Urban (litres/100km)",
                    "type": "SYSTEMATIC"
                  },
                  "extraUrban": {
                    "key": "PT1642_0",
                    "value": "0",
                    "unit": "Extra Urban (litres/100km)",
                    "type": "SYSTEMATIC"
                  },
                  "combined": {
                    "key": "PT1643_0",
                    "value": "0",
                    "unit": "Combined (litres/100km)",
                    "type": "SYSTEMATIC"
                  },
                  "co2Emissions": {
                    "key": "PT1640_0",
                    "value": "0",
                    "unit": "CO2 (g/km)",
                    "type": "SYSTEMATIC"
                  }
                },
                "emissionControlStandard": {
                  "key": "PT3401_euro5",
                  "value": "EURO5",
                  "unit": "Emission Control Standard",
                  "type": "SYSTEMATIC"
                },
                "name": "Electric engine",
                "specs": {
                  "specs": [
                    {
                      "key": "PT3641_n_a",
                      "value": "N/A",
                      "unit": "Particle Filter",
                      "type": "SYSTEMATIC",
                      "pricesKeyList": [
                        "PT3641_n_a"
                      ]
                    },
                    {
                      "key": "PT1623_065_088_",
                      "value": "065 (088)",
                      "unit": "Maximum Power - kw ISO",
                      "type": "SYSTEMATIC",
                      "pricesKeyList": [
                        "PT1623_065_088_"
                      ]
                    },
                    {
                      "key": "PT1627_n_a",
                      "value": "N/A",
                      "unit": "Injection Type",
                      "type": "SYSTEMATIC",
                      "pricesKeyList": [
                        "PT1627_n_a"
                      ]
                    }
                  ]
                },
                "pricesKeyList": [
                  "PT5554_electric_engine",
                  null,
                  "PT1633_automatic_gearbox"
                ],
                "fullEngineName": "Electric engine Automatic gearbox NC"
              },
              "wheels": {
                "groupKey": "PT5556",
                "wheels": [
                  {
                    "key": "PT5556_16-E2-80-9D_aerotronic_alloy_wheels",
                    "name": "16” Aerotronic Alloy wheels",
                    "type": "OPTION",
                    "pricesKeyList": [
                      "PT5556_16-E2-80-9D_aerotronic_alloy_wheels",
                      "RALU16",
                      "RNORM"
                    ]
                  },
                  {
                    "key": "PT5556_17-E2-80-9D_tech_run_diamond_cut_alloy_wheels",
                    "name": "17” Tech Run diamond cut Alloy wheels",
                    "type": "OPTION",
                    "pricesKeyList": [
                      "PT5556_17-E2-80-9D_tech_run_diamond_cut_alloy_wheels",
                      "RALU17",
                      "RNORM"
                    ]
                  }
                ]
              },
              "upholsteries": {
                "groupKey": "122",
                "upholsteries": [
                  {
                    "key": "DRAP03",
                    "name": "Intens Interior",
                    "type": "SYSTEMATIC"
                  }
                ]
              },
              "trims": {
                "groupKey": "",
                "trims": []
              },
              "volume": {
                "specs": {
                  "specs": []
                }
              },
              "dimensions": {
                "height": {
                  "key": "PT1120_1562",
                  "value": "1562",
                  "unit": "Overall Height",
                  "type": "SYSTEMATIC"
                },
                "length": {
                  "key": "PT1118_4084",
                  "value": "4084",
                  "unit": "Overall Length",
                  "type": "SYSTEMATIC"
                },
                "specs": {
                  "specs": [
                    {
                      "key": "PT1664_2588",
                      "value": "2588",
                      "unit": "(A) Wheelbase",
                      "type": "SYSTEMATIC",
                      "pricesKeyList": [
                        "PT1664_2588"
                      ]
                    }
                  ]
                }
              },
              "weight": {
                "maxPayload": {
                  "key": "PT1661_434",
                  "value": "434",
                  "unit": "Maximum Payload (Including Driver) (kg)",
                  "type": "SYSTEMATIC"
                },
                "specs": {
                  "specs": [
                    {
                      "key": "PT1660_1943",
                      "value": "1943",
                      "unit": "Gross Train Weight (kg)",
                      "type": "SYSTEMATIC",
                      "pricesKeyList": [
                        "PT1660_1943"
                      ]
                    }
                  ]
                }
              },
              "charge": {
                "specs": {
                  "specs": []
                }
              },
              "packs": {
                "packs": []
              },
              "stylePacks": {
                "packs": [],
                "exteriorPackGroups": [],
                "interiorPackGroups": []
              },
              "accessoriesPacks": {
                "packs": []
              },
              "accessories": [],
              "equipmentSpecs": [
                {
                  "key": "MOT",
                  "value": "Engine",
                  "specs": [
                    {
                      "key": "KM",
                      "unit": "Engine",
                      "type": "SYSTEMATIC"
                    }
                  ]
                },
                {
                  "key": "MEDIA",
                  "value": "Communication & Navigation",
                  "specs": [
                    {
                      "key": "MAPSTD",
                      "value": "UK & Ireland mapping",
                      "unit": "Communication & Navigation",
                      "type": "DEFAULT"
                    },
                    {
                      "key": "MAPSUP",
                      "value": "Additional mapping - Western Europe",
                      "unit": "Communication & Navigation",
                      "type": "OPTION",
                      "price": "100.0"
                    },
                    {
                      "key": "TCU0G2",
                      "value": "Telematics",
                      "unit": "Communication & Navigation",
                      "type": "SYSTEMATIC"
                    },
                    {
                      "key": "NAV3G5",
                      "value": "R-Link 2 Navigation & Multimedia System",
                      "unit": "Communication & Navigation",
                      "type": "SYSTEMATIC"
                    },
                    {
                      "key": "SRV$MMLIVE",
                      "value": "LIVE Services",
                      "unit": "Communication & Navigation",
                      "type": "OPTION",
                      "price": "99.0"
                    }
                  ]
                },
                {
                  "key": "Spe Ze",
                  "value": "Specialist Z.E. Equipment",
                  "specs": [
                    {
                      "key": "026KWH",
                      "value": "Secondary battery capacity",
                      "unit": "Specialist Z.E. Equipment",
                      "type": "SYSTEMATIC"
                    },
                    {
                      "key": "CACBL2",
                      "value": "6 metre Charging cable (Type 2 Mode 3)",
                      "unit": "Specialist Z.E. Equipment",
                      "type": "SYSTEMATIC"
                    }
                  ]
                },
                {
                  "key": "COMFOR",
                  "value": "Comfort & Convenience",
                  "specs": [
                    {
                      "key": "ATAR",
                      "value": "Height adjustable headrests on outer rear seats",
                      "unit": "Comfort & Convenience",
                      "type": "SYSTEMATIC"
                    },
                    {
                      "key": "FDIU1",
                      "value": "Daytime running lights",
                      "unit": "Comfort & Convenience",
                      "type": "SYSTEMATIC"
                    },
                    {
                      "key": "LVAREL",
                      "value": "Electric rear windows",
                      "unit": "Comfort & Convenience",
                      "type": "SYSTEMATIC"
                    },
                    {
                      "key": "CAREG",
                      "value": "Dual-zone climate control",
                      "unit": "Comfort & Convenience",
                      "type": "SYSTEMATIC"
                    },
                    {
                      "key": "CEAVRH",
                      "value": "Height adjustable front seatbelts",
                      "unit": "Comfort & Convenience",
                      "type": "SYSTEMATIC"
                    },
                    {
                      "key": "LAC",
                      "value": "Rear heated window",
                      "unit": "Comfort & Convenience",
                      "type": "SYSTEMATIC"
                    },
                    {
                      "key": "RV",
                      "value": "Cruise control & speed limiter",
                      "unit": "Comfort & Convenience",
                      "type": "SYSTEMATIC"
                    },
                    {
                      "key": "SUPCPE",
                      "value": "Deadlocking",
                      "unit": "Comfort & Convenience",
                      "type": "SYSTEMATIC"
                    },
                    {
                      "key": "LVAVIP",
                      "value": "Electric front windows with anti-pinch functionality",
                      "unit": "Comfort & Convenience",
                      "type": "SYSTEMATIC"
                    },
                    {
                      "key": "RDAR02",
                      "value": "Rear parking sensors with camera",
                      "unit": "Comfort & Convenience",
                      "type": "SYSTEMATIC"
                    },
                    {
                      "key": "RET02",
                      "value": "Electrically operated and heated door mirrors",
                      "unit": "Comfort & Convenience",
                      "type": "SYSTEMATIC"
                    },
                    {
                      "key": "SOP02C",
                      "value": "Renault keycard with handsfree entry",
                      "unit": "Comfort & Convenience",
                      "type": "SYSTEMATIC"
                    }
                  ]
                },
                {
                  "key": "ZE",
                  "value": "Services ZE",
                  "specs": [
                    {
                      "key": "SRV$ZEINTER",
                      "value": "My Z.E. Interactive",
                      "unit": "Services ZE",
                      "type": "OPTION",
                      "price": "99.0",
                      "pricesKeyList": [
                        "SRV$ZEINTER"
                      ]
                    }
                  ]
                },
                {
                  "key": "DRIVIN",
                  "value": "Safety & Security",
                  "specs": [
                    {
                      "key": "KTGREP",
                      "value": "Tyre repair kit",
                      "unit": "Safety & Security",
                      "type": "SYSTEMATIC"
                    },
                    {
                      "key": "ALAR06",
                      "value": "R.A.I.D. (Renault Anti Intruder Device) automatic door locking",
                      "unit": "Safety & Security",
                      "type": "SYSTEMATIC"
                    },
                    {
                      "key": "CMAR3P",
                      "value": "3-point rear seatbelts",
                      "unit": "Safety & Security",
                      "type": "SYSTEMATIC"
                    },
                    {
                      "key": "ABS",
                      "value": "ABS with EBD (Electronic Brake Distribution) and emergency brake assist",
                      "unit": "Safety & Security",
                      "type": "SYSTEMATIC"
                    },
                    {
                      "key": "ASRESP",
                      "value": "ESC (Electronic Stability Control) with ASR (Traction Control)",
                      "unit": "Safety & Security",
                      "type": "SYSTEMATIC"
                    },
                    {
                      "key": "DPRPN",
                      "value": "Tyre pressure monitors",
                      "unit": "Safety & Security",
                      "type": "SYSTEMATIC"
                    },
                    {
                      "key": "ALOUCC",
                      "value": "Driver's seatbelt warning",
                      "unit": "Safety & Security",
                      "type": "SYSTEMATIC"
                    },
                    {
                      "key": "ISOFIX",
                      "value": "ISOFIX fittings on outer rear seats and front passenger seat",
                      "unit": "Safety & Security",
                      "type": "SYSTEMATIC"
                    },
                    {
                      "key": "ALEVA",
                      "value": "Automatic lights and windscreen wipers",
                      "unit": "Safety & Security",
                      "type": "SYSTEMATIC"
                    },
                    {
                      "key": "AIRBA1",
                      "value": "Front passenger airbag",
                      "unit": "Safety & Security",
                      "type": "SYSTEMATIC"
                    }
                  ]
                }
              ],
              "techSpecs": [
                {
                  "key": "DEC411",
                  "value": "Engine Type and Conformance",
                  "specs": [
                    {
                      "key": "PT4321_renault_eco2",
                      "value": "Renault Eco2",
                      "unit": "Ecological Label",
                      "type": "SYSTEMATIC",
                      "pricesKeyList": [
                        "PT4321_renault_eco2"
                      ]
                    }
                  ]
                },
                {
                  "key": "DEC407",
                  "value": "Braking",
                  "specs": [
                    {
                      "key": "PT1653_ta_228",
                      "value": "TA-228",
                      "unit": "Rear Discs (Diameter mm)",
                      "type": "SYSTEMATIC",
                      "pricesKeyList": [
                        "PT1653_ta_228"
                      ]
                    },
                    {
                      "key": "PT1652_dv_258",
                      "value": "DV-258",
                      "unit": "Front Discs (Diameter mm)",
                      "type": "SYSTEMATIC",
                      "pricesKeyList": [
                        "PT1652_dv_258"
                      ]
                    }
                  ]
                },
                {
                  "key": "DEC408",
                  "value": "Tyres",
                  "specs": [
                    {
                      "key": "PT1635_195_55_r_16",
                      "value": "195/55  R 16",
                      "unit": "Size/Profile",
                      "type": "OPTION",
                      "pricesKeyList": [
                        "PT1635_195_55_r_16"
                      ]
                    },
                    {
                      "key": "PT1635_205_45_r_17",
                      "value": "205/45  R 17",
                      "unit": "Size/Profile",
                      "type": "OPTION",
                      "pricesKeyList": [
                        "PT1635_205_45_r_17"
                      ]
                    }
                  ]
                },
                {
                  "key": "DEC3181",
                  "value": "Key Specifications",
                  "specs": [
                    {
                      "key": "PT5383_automatic_gearbox",
                      "value": "Automatic gearbox",
                      "unit": "Gearbox",
                      "type": "SYSTEMATIC",
                      "pricesKeyList": [
                        "PT5383_automatic_gearbox"
                      ]
                    },
                    {
                      "key": "PT5548_dynamique_intense",
                      "value": "Dynamique Intense",
                      "unit": "Equipment Level",
                      "type": "SYSTEMATIC",
                      "pricesKeyList": [
                        "PT5548_dynamique_intense"
                      ]
                    },
                    {
                      "key": "PT5547_internet_connectivity",
                      "value": "Internet Connectivity",
                      "unit": "Connectivity",
                      "type": "SYSTEMATIC",
                      "pricesKeyList": [
                        "PT5547_internet_connectivity"
                      ]
                    },
                    {
                      "key": "PT5556_16-E2-80-9D_aerotronic_alloy_wheels",
                      "value": "16” Aerotronic Alloy wheels",
                      "unit": "Wheels",
                      "type": "OPTION",
                      "pricesKeyList": [
                        "PT5556_16-E2-80-9D_aerotronic_alloy_wheels"
                      ]
                    },
                    {
                      "key": "PT5556_17-E2-80-9D_tech_run_diamond_cut_alloy_wheels",
                      "value": "17” Tech Run diamond cut Alloy wheels",
                      "unit": "Wheels",
                      "type": "OPTION",
                      "pricesKeyList": [
                        "PT5556_17-E2-80-9D_tech_run_diamond_cut_alloy_wheels"
                      ]
                    }
                  ]
                },
                {
                  "key": "DEC21",
                  "value": "Capacities",
                  "specs": [
                    {
                      "key": "PT301_nc",
                      "value": "NC",
                      "unit": "Fuel Tank - Litres",
                      "type": "SYSTEMATIC",
                      "pricesKeyList": [
                        "PT301_nc"
                      ]
                    }
                  ]
                }
              ],
              "body": {
                "doors": {
                  "key": "PT1262_5",
                  "value": "5",
                  "unit": "No. of Doors",
                  "type": "SYSTEMATIC"
                },
                "type": {
                  "key": "PT1261_hatch",
                  "value": "Hatch",
                  "unit": "Body Type Classification",
                  "type": "SYSTEMATIC"
                },
                "specs": {
                  "specs": []
                }
              },
              "seating": {
                "specs": {
                  "specs": []
                }
              },
              "localSemiClair": "INT MA 8 IR"
            }
          ]
        },
        "engines": {
          "engines": [
            {
              "key": "PT5554_electric_engine_PT1633_automatic_gearbox",
              "engineType": {
                "key": "PT5554_electric_engine",
                "value": "Electric engine",
                "unit": "Engine",
                "type": "SYSTEMATIC"
              },
              "battery": [
                {
                  "key": "PT5554_electric_engine",
                  "type": "lease"
                },
                {
                  "key": "PT5554_electric_engine",
                  "type": "buy"
                }
              ],
              "fuelType": {
                "key": "PT1628_electric",
                "value": "Electric",
                "unit": "Fuel Type",
                "type": "SYSTEMATIC"
              },
              "capacity": {
                "key": "PT42_nc",
                "value": "NC",
                "unit": "Induction Capacity (cc)",
                "type": "SYSTEMATIC"
              },
              "cylinders": {
                "key": "PT44_nc",
                "value": "NC",
                "unit": "No. of Cylinders",
                "type": "SYSTEMATIC"
              },
              "torque": {
                "key": "PT1625_220",
                "value": "220",
                "unit": "Maximum Torque - Nm ISO",
                "type": "SYSTEMATIC"
              },
              "power": {
                "hp": {
                  "key": "PT5550_88",
                  "value": "88",
                  "unit": "Power (BHP)",
                  "type": "SYSTEMATIC"
                },
                "kw": {
                  "key": "PT5553_65",
                  "value": "65",
                  "unit": "Power (Kw)",
                  "type": "SYSTEMATIC"
                }
              },
              "transmission": {
                "key": "PT1633_automatic_gearbox",
                "gears": {
                  "key": "PT47_nc",
                  "value": "NC",
                  "unit": "Number of Forward Gears",
                  "type": "SYSTEMATIC"
                },
                "gearBoxType": {
                  "key": "PT1633_automatic_gearbox",
                  "value": "Automatic gearbox",
                  "unit": "Gearbox Type",
                  "type": "SYSTEMATIC"
                },
                "specs": {
                  "specs": []
                }
              },
              "performance": {
                "maxSpeed": {
                  "key": "PT1121_135",
                  "value": "135",
                  "unit": "Maximum Speed - kph",
                  "type": "SYSTEMATIC"
                }
              },
              "fuelConsumption": {
                "urban": {
                  "key": "PT1641_0",
                  "value": "0",
                  "unit": "Urban (litres/100km)",
                  "type": "SYSTEMATIC"
                },
                "extraUrban": {
                  "key": "PT1642_0",
                  "value": "0",
                  "unit": "Extra Urban (litres/100km)",
                  "type": "SYSTEMATIC"
                },
                "combined": {
                  "key": "PT1643_0",
                  "value": "0",
                  "unit": "Combined (litres/100km)",
                  "type": "SYSTEMATIC"
                },
                "co2Emissions": {
                  "key": "PT1640_0",
                  "value": "0",
                  "unit": "CO2 (g/km)",
                  "type": "SYSTEMATIC"
                }
              },
              "emissionControlStandard": {
                "key": "PT3401_euro5",
                "value": "EURO5",
                "unit": "Emission Control Standard",
                "type": "SYSTEMATIC"
              },
              "name": "Electric engine",
              "specs": {
                "specs": [
                  {
                    "key": "PT3641_n_a",
                    "value": "N/A",
                    "unit": "Particle Filter",
                    "type": "SYSTEMATIC",
                    "pricesKeyList": [
                      "PT3641_n_a"
                    ]
                  },
                  {
                    "key": "PT1623_065_088_",
                    "value": "065 (088)",
                    "unit": "Maximum Power - kw ISO",
                    "type": "SYSTEMATIC",
                    "pricesKeyList": [
                      "PT1623_065_088_"
                    ]
                  },
                  {
                    "key": "PT1627_n_a",
                    "value": "N/A",
                    "unit": "Injection Type",
                    "type": "SYSTEMATIC",
                    "pricesKeyList": [
                      "PT1627_n_a"
                    ]
                  }
                ]
              },
              "pricesKeyList": [
                "PT5554_electric_engine",
                null,
                "PT1633_automatic_gearbox"
              ],
              "fullEngineName": "Electric engine Automatic gearbox NC"
            }
          ]
        },
        "upholsteries": {
          "groupKey": "122",
          "upholsteries": [
            {
              "key": "DRAP03",
              "name": "Intens Interior",
              "type": "SYSTEMATIC"
            }
          ]
        },
        "trims": {
          "groupKey": "",
          "trims": []
        },
        "wheels": {
          "groupKey": "PT5556",
          "wheels": [
            {
              "key": "PT5556_17-E2-80-9D_tech_run_diamond_cut_alloy_wheels",
              "name": "17” Tech Run diamond cut Alloy wheels",
              "type": "OPTION",
              "pricesKeyList": [
                "PT5556_17-E2-80-9D_tech_run_diamond_cut_alloy_wheels",
                "RALU17",
                "RNORM"
              ]
            },
            {
              "key": "PT5556_16-E2-80-9D_aerotronic_alloy_wheels",
              "name": "16” Aerotronic Alloy wheels",
              "type": "OPTION",
              "pricesKeyList": [
                "PT5556_16-E2-80-9D_aerotronic_alloy_wheels",
                "RALU16",
                "RNORM"
              ]
            }
          ]
        },
        "exteriorColours": {
          "groupKey": "141",
          "colours": [
            {
              "key": "TEKNV",
              "pricesKeyList": [
                "TEKNV",
                "QPA$MV"
              ],
              "name": "Calico Grey",
              "type": "OPTION"
            },
            {
              "key": "OVRPH",
              "pricesKeyList": [
                "OVRPH",
                "QPA$OS2"
              ],
              "name": "Iceberg Blue",
              "type": "OPTION"
            },
            {
              "key": "TEQNC",
              "pricesKeyList": [
                "TEQNC",
                "QPA$MVS"
              ],
              "name": "Pearl White",
              "type": "OPTION"
            },
            {
              "key": "TERQG",
              "pricesKeyList": [
                "TERQG",
                "QPA$RQG"
              ],
              "name": "Zircon Blue",
              "type": "OPTION"
            },
            {
              "key": "TEGNE",
              "pricesKeyList": [
                "TEGNE",
                "QPA$MV"
              ],
              "name": "Pearl Black",
              "type": "OPTION"
            },
            {
              "key": "TEKNR",
              "pricesKeyList": [
                "TEKNR",
                "QPA$MV"
              ],
              "name": "Neptune Grey",
              "type": "OPTION"
            },
            {
              "key": "OV369",
              "pricesKeyList": [
                "OV369",
                "QPA$OS1"
              ],
              "name": "Glacier White",
              "type": "OPTION"
            }
          ]
        },
        "interiorColours": {
          "groupKey": "141",
          "colours": [
            {
              "key": "HARM01",
              "pricesKeyList": [
                "HARM01",
                "QPA$MV"
              ],
              "name": "Light trim",
              "type": "SYSTEMATIC"
            }
          ]
        },
        "packs": {
          "packs": []
        },
        "stylePacks": {
          "packs": [],
          "exteriorPackGroups": [],
          "interiorPackGroups": []
        },
        "accessories": [],
        "accessoryPacks": {
          "packs": [],
          "accessoryPackGroups": []
        },
        "equipmentSpecs": [
          {
            "key": "MOT",
            "value": "Engine",
            "specs": [
              {
                "key": "KM",
                "unit": "Engine",
                "type": "SYSTEMATIC"
              }
            ]
          },
          {
            "key": "MEDIA",
            "value": "Communication & Navigation",
            "specs": [
              {
                "key": "MAPSTD",
                "value": "UK & Ireland mapping",
                "unit": "Communication & Navigation",
                "type": "DEFAULT"
              },
              {
                "key": "TCU0G2",
                "value": "Telematics",
                "unit": "Communication & Navigation",
                "type": "SYSTEMATIC"
              },
              {
                "key": "NAV3G5",
                "value": "R-Link 2 Navigation & Multimedia System",
                "unit": "Communication & Navigation",
                "type": "SYSTEMATIC"
              },
              {
                "key": "MAPSUP",
                "value": "Additional mapping - Western Europe",
                "unit": "Communication & Navigation",
                "type": "OPTION",
                "price": "100.0"
              },
              {
                "key": "SRV$MMLIVE",
                "value": "LIVE Services",
                "unit": "Communication & Navigation",
                "type": "OPTION",
                "price": "99.0"
              }
            ]
          },
          {
            "key": "Spe Ze",
            "value": "Specialist Z.E. Equipment",
            "specs": [
              {
                "key": "026KWH",
                "value": "Secondary battery capacity",
                "unit": "Specialist Z.E. Equipment",
                "type": "SYSTEMATIC"
              },
              {
                "key": "CACBL2",
                "value": "6 metre Charging cable (Type 2 Mode 3)",
                "unit": "Specialist Z.E. Equipment",
                "type": "SYSTEMATIC"
              }
            ]
          },
          {
            "key": "COMFOR",
            "value": "Comfort & Convenience",
            "specs": [
              {
                "key": "CEAVRH",
                "value": "Height adjustable front seatbelts",
                "unit": "Comfort & Convenience",
                "type": "SYSTEMATIC"
              },
              {
                "key": "RV",
                "value": "Cruise control & speed limiter",
                "unit": "Comfort & Convenience",
                "type": "SYSTEMATIC"
              },
              {
                "key": "RET02",
                "value": "Electrically operated and heated door mirrors",
                "unit": "Comfort & Convenience",
                "type": "SYSTEMATIC"
              },
              {
                "key": "LVAREL",
                "value": "Electric rear windows",
                "unit": "Comfort & Convenience",
                "type": "SYSTEMATIC"
              },
              {
                "key": "CAREG",
                "value": "Dual-zone climate control",
                "unit": "Comfort & Convenience",
                "type": "SYSTEMATIC"
              },
              {
                "key": "ATAR",
                "value": "Height adjustable headrests on outer rear seats",
                "unit": "Comfort & Convenience",
                "type": "SYSTEMATIC"
              },
              {
                "key": "FDIU1",
                "value": "Daytime running lights",
                "unit": "Comfort & Convenience",
                "type": "SYSTEMATIC"
              },
              {
                "key": "LVAVIP",
                "value": "Electric front windows with anti-pinch functionality",
                "unit": "Comfort & Convenience",
                "type": "SYSTEMATIC"
              },
              {
                "key": "SOP02C",
                "value": "Renault keycard with handsfree entry",
                "unit": "Comfort & Convenience",
                "type": "SYSTEMATIC"
              },
              {
                "key": "LAC",
                "value": "Rear heated window",
                "unit": "Comfort & Convenience",
                "type": "SYSTEMATIC"
              },
              {
                "key": "SUPCPE",
                "value": "Deadlocking",
                "unit": "Comfort & Convenience",
                "type": "SYSTEMATIC"
              },
              {
                "key": "RDAR02",
                "value": "Rear parking sensors with camera",
                "unit": "Comfort & Convenience",
                "type": "SYSTEMATIC"
              }
            ]
          },
          {
            "key": "ZE",
            "value": "Services ZE",
            "specs": [
              {
                "key": "SRV$ZEINTER",
                "value": "My Z.E. Interactive",
                "unit": "Services ZE",
                "type": "OPTION",
                "price": "99.0",
                "pricesKeyList": [
                  "SRV$ZEINTER"
                ]
              }
            ]
          },
          {
            "key": "DRIVIN",
            "value": "Safety & Security",
            "specs": [
              {
                "key": "ASRESP",
                "value": "ESC (Electronic Stability Control) with ASR (Traction Control)",
                "unit": "Safety & Security",
                "type": "SYSTEMATIC"
              },
              {
                "key": "ABS",
                "value": "ABS with EBD (Electronic Brake Distribution) and emergency brake assist",
                "unit": "Safety & Security",
                "type": "SYSTEMATIC"
              },
              {
                "key": "ALEVA",
                "value": "Automatic lights and windscreen wipers",
                "unit": "Safety & Security",
                "type": "SYSTEMATIC"
              },
              {
                "key": "KTGREP",
                "value": "Tyre repair kit",
                "unit": "Safety & Security",
                "type": "SYSTEMATIC"
              },
              {
                "key": "DPRPN",
                "value": "Tyre pressure monitors",
                "unit": "Safety & Security",
                "type": "SYSTEMATIC"
              },
              {
                "key": "CMAR3P",
                "value": "3-point rear seatbelts",
                "unit": "Safety & Security",
                "type": "SYSTEMATIC"
              },
              {
                "key": "ISOFIX",
                "value": "ISOFIX fittings on outer rear seats and front passenger seat",
                "unit": "Safety & Security",
                "type": "SYSTEMATIC"
              },
              {
                "key": "ALAR06",
                "value": "R.A.I.D. (Renault Anti Intruder Device) automatic door locking",
                "unit": "Safety & Security",
                "type": "SYSTEMATIC"
              },
              {
                "key": "AIRBA1",
                "value": "Front passenger airbag",
                "unit": "Safety & Security",
                "type": "SYSTEMATIC"
              },
              {
                "key": "ALOUCC",
                "value": "Driver's seatbelt warning",
                "unit": "Safety & Security",
                "type": "SYSTEMATIC"
              }
            ]
          }
        ],
        "name": "Dynamique Intense",
        "priceCodes": [
          {
            "key": "PVCFT",
            "currency": "EUR"
          },
          {
            "key": "PVCTTC",
            "currency": "EUR"
          }
        ]
      },
      {
        "key": "ENS_MDL2P1SERIELIM2",
        "dataPath": "/product/model/ZOE/zoe",
        "specialVersion": false,
        "versions": {
          "versions": [
            {
              "name": "Zoe Dynamique Zen",
              "key": "VEC038_GRBR",
              "dataPath": "/product/model/ZOE/zoe",
              "exteriorColours": {
                "groupKey": "141",
                "colours": [
                  {
                    "key": "TERQG",
                    "pricesKeyList": [
                      "TERQG",
                      "QPA$RQG"
                    ],
                    "name": "Zircon Blue",
                    "type": "OPTION"
                  },
                  {
                    "key": "TEQNC",
                    "pricesKeyList": [
                      "TEQNC",
                      "QPA$MVS"
                    ],
                    "name": "Pearl White",
                    "type": "OPTION"
                  },
                  {
                    "key": "TEKNV",
                    "pricesKeyList": [
                      "TEKNV",
                      "QPA$MV"
                    ],
                    "name": "Calico Grey",
                    "type": "OPTION"
                  },
                  {
                    "key": "TEKNR",
                    "pricesKeyList": [
                      "TEKNR",
                      "QPA$MV"
                    ],
                    "name": "Neptune Grey",
                    "type": "OPTION"
                  },
                  {
                    "key": "TEGNE",
                    "pricesKeyList": [
                      "TEGNE",
                      "QPA$MV"
                    ],
                    "name": "Pearl Black",
                    "type": "OPTION"
                  },
                  {
                    "key": "OVRPH",
                    "pricesKeyList": [
                      "OVRPH",
                      "QPA$OS2"
                    ],
                    "name": "Iceberg Blue",
                    "type": "OPTION"
                  },
                  {
                    "key": "OV369",
                    "pricesKeyList": [
                      "OV369",
                      "QPA$OS1"
                    ],
                    "name": "Glacier White",
                    "type": "OPTION"
                  }
                ]
              },
              "interiorColours": {
                "groupKey": "141",
                "colours": [
                  {
                    "key": "HARM01",
                    "pricesKeyList": [
                      "HARM01",
                      "QPA$MV"
                    ],
                    "name": "Light trim",
                    "type": "SYSTEMATIC"
                  }
                ]
              },
              "price": "27971.0",
              "currency": "EUR",
              "priceList": {
                "PVCFT": "19290.02",
                "PVCTTC": "27971.0"
              },
              "priceCodes": [
                {
                  "key": "PVCFT",
                  "currency": "EUR"
                },
                {
                  "key": "PVCTTC",
                  "currency": "EUR"
                }
              ],
              "engine": {
                "key": "PT5554_electric_engine_PT1633_automatic_gearbox",
                "engineType": {
                  "key": "PT5554_electric_engine",
                  "value": "Electric engine",
                  "unit": "Engine",
                  "type": "SYSTEMATIC"
                },
                "battery": [
                  {
                    "key": "PT5554_electric_engine",
                    "type": "lease"
                  },
                  {
                    "key": "PT5554_electric_engine",
                    "type": "buy"
                  }
                ],
                "fuelType": {
                  "key": "PT1628_electric",
                  "value": "Electric",
                  "unit": "Fuel Type",
                  "type": "SYSTEMATIC"
                },
                "capacity": {
                  "key": "PT42_nc",
                  "value": "NC",
                  "unit": "Induction Capacity (cc)",
                  "type": "SYSTEMATIC"
                },
                "cylinders": {
                  "key": "PT44_nc",
                  "value": "NC",
                  "unit": "No. of Cylinders",
                  "type": "SYSTEMATIC"
                },
                "torque": {
                  "key": "PT1625_220",
                  "value": "220",
                  "unit": "Maximum Torque - Nm ISO",
                  "type": "SYSTEMATIC"
                },
                "power": {
                  "hp": {
                    "key": "PT5550_88",
                    "value": "88",
                    "unit": "Power (BHP)",
                    "type": "SYSTEMATIC"
                  },
                  "kw": {
                    "key": "PT5553_65",
                    "value": "65",
                    "unit": "Power (Kw)",
                    "type": "SYSTEMATIC"
                  }
                },
                "transmission": {
                  "key": "PT1633_automatic_gearbox",
                  "gears": {
                    "key": "PT47_nc",
                    "value": "NC",
                    "unit": "Number of Forward Gears",
                    "type": "SYSTEMATIC"
                  },
                  "gearBoxType": {
                    "key": "PT1633_automatic_gearbox",
                    "value": "Automatic gearbox",
                    "unit": "Gearbox Type",
                    "type": "SYSTEMATIC"
                  },
                  "specs": {
                    "specs": []
                  }
                },
                "performance": {
                  "maxSpeed": {
                    "key": "PT1121_135",
                    "value": "135",
                    "unit": "Maximum Speed - kph",
                    "type": "SYSTEMATIC"
                  }
                },
                "fuelConsumption": {
                  "urban": {
                    "key": "PT1641_0",
                    "value": "0",
                    "unit": "Urban (litres/100km)",
                    "type": "SYSTEMATIC"
                  },
                  "extraUrban": {
                    "key": "PT1642_0",
                    "value": "0",
                    "unit": "Extra Urban (litres/100km)",
                    "type": "SYSTEMATIC"
                  },
                  "combined": {
                    "key": "PT1643_0",
                    "value": "0",
                    "unit": "Combined (litres/100km)",
                    "type": "SYSTEMATIC"
                  },
                  "co2Emissions": {
                    "key": "PT1640_0",
                    "value": "0",
                    "unit": "CO2 (g/km)",
                    "type": "SYSTEMATIC"
                  }
                },
                "emissionControlStandard": {
                  "key": "PT3401_euro5",
                  "value": "EURO5",
                  "unit": "Emission Control Standard",
                  "type": "SYSTEMATIC"
                },
                "name": "Electric engine",
                "specs": {
                  "specs": [
                    {
                      "key": "PT3641_n_a",
                      "value": "N/A",
                      "unit": "Particle Filter",
                      "type": "SYSTEMATIC",
                      "pricesKeyList": [
                        "PT3641_n_a"
                      ]
                    },
                    {
                      "key": "PT1623_065_088_",
                      "value": "065 (088)",
                      "unit": "Maximum Power - kw ISO",
                      "type": "SYSTEMATIC",
                      "pricesKeyList": [
                        "PT1623_065_088_"
                      ]
                    },
                    {
                      "key": "PT1627_n_a",
                      "value": "N/A",
                      "unit": "Injection Type",
                      "type": "SYSTEMATIC",
                      "pricesKeyList": [
                        "PT1627_n_a"
                      ]
                    }
                  ]
                },
                "pricesKeyList": [
                  "PT5554_electric_engine",
                  null,
                  "PT1633_automatic_gearbox"
                ],
                "fullEngineName": "Electric engine Automatic gearbox NC"
              },
              "wheels": {
                "groupKey": "PT5556",
                "wheels": [
                  {
                    "key": "PT5556_16-E2-80-9D_aerotronic_alloy_wheels",
                    "name": "16” Aerotronic Alloy wheels",
                    "type": "OPTION",
                    "pricesKeyList": [
                      "PT5556_16-E2-80-9D_aerotronic_alloy_wheels",
                      "RALU16",
                      "RNORM"
                    ]
                  },
                  {
                    "key": "PT5556_17-E2-80-9D_tech_run_diamond_cut_alloy_wheels",
                    "name": "17” Tech Run diamond cut Alloy wheels",
                    "type": "OPTION",
                    "pricesKeyList": [
                      "PT5556_17-E2-80-9D_tech_run_diamond_cut_alloy_wheels",
                      "RALU17",
                      "RNORM"
                    ]
                  }
                ]
              },
              "upholsteries": {
                "groupKey": "122",
                "upholsteries": [
                  {
                    "key": "DRAP02",
                    "name": "Zen Interior with Teflon® treatment for maximum seat protection",
                    "type": "SYSTEMATIC"
                  }
                ]
              },
              "trims": {
                "groupKey": "",
                "trims": []
              },
              "volume": {
                "specs": {
                  "specs": []
                }
              },
              "dimensions": {
                "height": {
                  "key": "PT1120_1562",
                  "value": "1562",
                  "unit": "Overall Height",
                  "type": "SYSTEMATIC"
                },
                "length": {
                  "key": "PT1118_4084",
                  "value": "4084",
                  "unit": "Overall Length",
                  "type": "SYSTEMATIC"
                },
                "specs": {
                  "specs": [
                    {
                      "key": "PT1664_2588",
                      "value": "2588",
                      "unit": "(A) Wheelbase",
                      "type": "SYSTEMATIC",
                      "pricesKeyList": [
                        "PT1664_2588"
                      ]
                    }
                  ]
                }
              },
              "weight": {
                "maxPayload": {
                  "key": "PT1661_434",
                  "value": "434",
                  "unit": "Maximum Payload (Including Driver) (kg)",
                  "type": "SYSTEMATIC"
                },
                "specs": {
                  "specs": [
                    {
                      "key": "PT1660_1943",
                      "value": "1943",
                      "unit": "Gross Train Weight (kg)",
                      "type": "SYSTEMATIC",
                      "pricesKeyList": [
                        "PT1660_1943"
                      ]
                    }
                  ]
                }
              },
              "charge": {
                "specs": {
                  "specs": []
                }
              },
              "packs": {
                "packs": []
              },
              "stylePacks": {
                "packs": [],
                "exteriorPackGroups": [],
                "interiorPackGroups": []
              },
              "accessoriesPacks": {
                "packs": []
              },
              "accessories": [],
              "equipmentSpecs": [
                {
                  "key": "AUD",
                  "value": "Connectivity & Sound system",
                  "specs": [
                    {
                      "key": "RAD37A",
                      "value": "Arkamys 3D Sound 4x35W radio",
                      "unit": "Connectivity & Sound system",
                      "type": "SYSTEMATIC"
                    }
                  ]
                },
                {
                  "key": "MOT",
                  "value": "Engine",
                  "specs": [
                    {
                      "key": "KM",
                      "unit": "Engine",
                      "type": "SYSTEMATIC"
                    }
                  ]
                },
                {
                  "key": "MEDIA",
                  "value": "Communication & Navigation",
                  "specs": [
                    {
                      "key": "MAPSTD",
                      "value": "UK & Ireland mapping",
                      "unit": "Communication & Navigation",
                      "type": "DEFAULT"
                    },
                    {
                      "key": "MAPSUP",
                      "value": "Additional mapping - Western Europe",
                      "unit": "Communication & Navigation",
                      "type": "OPTION",
                      "price": "100.0"
                    },
                    {
                      "key": "TCU0G2",
                      "value": "Telematics",
                      "unit": "Communication & Navigation",
                      "type": "SYSTEMATIC"
                    },
                    {
                      "key": "NAV3G5",
                      "value": "R-Link 2 Navigation & Multimedia System",
                      "unit": "Communication & Navigation",
                      "type": "SYSTEMATIC"
                    },
                    {
                      "key": "SRV$MMLIVE",
                      "value": "LIVE Services",
                      "unit": "Communication & Navigation",
                      "type": "OPTION",
                      "price": "99.0"
                    }
                  ]
                },
                {
                  "key": "Spe Ze",
                  "value": "Specialist Z.E. Equipment",
                  "specs": [
                    {
                      "key": "026KWH",
                      "value": "Secondary battery capacity",
                      "unit": "Specialist Z.E. Equipment",
                      "type": "SYSTEMATIC"
                    },
                    {
                      "key": "DIFPAR",
                      "value": "Perfume difuser",
                      "unit": "Specialist Z.E. Equipment",
                      "type": "SYSTEMATIC"
                    },
                    {
                      "key": "CACBL2",
                      "value": "6 metre Charging cable (Type 2 Mode 3)",
                      "unit": "Specialist Z.E. Equipment",
                      "type": "SYSTEMATIC"
                    }
                  ]
                },
                {
                  "key": "COMFOR",
                  "value": "Comfort & Convenience",
                  "specs": [
                    {
                      "key": "ATAR",
                      "value": "Height adjustable headrests on outer rear seats",
                      "unit": "Comfort & Convenience",
                      "type": "SYSTEMATIC"
                    },
                    {
                      "key": "FDIU1",
                      "value": "Daytime running lights",
                      "unit": "Comfort & Convenience",
                      "type": "SYSTEMATIC"
                    },
                    {
                      "key": "LVAREL",
                      "value": "Electric rear windows",
                      "unit": "Comfort & Convenience",
                      "type": "SYSTEMATIC"
                    },
                    {
                      "key": "CAREG",
                      "value": "Dual-zone climate control",
                      "unit": "Comfort & Convenience",
                      "type": "SYSTEMATIC"
                    },
                    {
                      "key": "CEAVRH",
                      "value": "Height adjustable front seatbelts",
                      "unit": "Comfort & Convenience",
                      "type": "SYSTEMATIC"
                    },
                    {
                      "key": "LAC",
                      "value": "Rear heated window",
                      "unit": "Comfort & Convenience",
                      "type": "SYSTEMATIC"
                    },
                    {
                      "key": "RV",
                      "value": "Cruise control & speed limiter",
                      "unit": "Comfort & Convenience",
                      "type": "SYSTEMATIC"
                    },
                    {
                      "key": "SUPCPE",
                      "value": "Deadlocking",
                      "unit": "Comfort & Convenience",
                      "type": "SYSTEMATIC"
                    },
                    {
                      "key": "LVAVIP",
                      "value": "Electric front windows with anti-pinch functionality",
                      "unit": "Comfort & Convenience",
                      "type": "SYSTEMATIC"
                    },
                    {
                      "key": "RDAR01",
                      "value": "Rear parking sensors",
                      "unit": "Comfort & Convenience",
                      "type": "DEFAULT"
                    },
                    {
                      "key": "RDAR02",
                      "value": "Rear parking sensors with camera",
                      "unit": "Comfort & Convenience",
                      "type": "OPTION",
                      "price": "500.0"
                    },
                    {
                      "key": "RET02",
                      "value": "Electrically operated and heated door mirrors",
                      "unit": "Comfort & Convenience",
                      "type": "SYSTEMATIC"
                    },
                    {
                      "key": "SOP02C",
                      "value": "Renault keycard with handsfree entry",
                      "unit": "Comfort & Convenience",
                      "type": "SYSTEMATIC"
                    }
                  ]
                },
                {
                  "key": "ZE",
                  "value": "Services ZE",
                  "specs": [
                    {
                      "key": "SRV$ZEINTER",
                      "value": "My Z.E. Interactive",
                      "unit": "Services ZE",
                      "type": "OPTION",
                      "price": "99.0",
                      "pricesKeyList": [
                        "SRV$ZEINTER"
                      ]
                    }
                  ]
                },
                {
                  "key": "DRIVIN",
                  "value": "Safety & Security",
                  "specs": [
                    {
                      "key": "KTGREP",
                      "value": "Tyre repair kit",
                      "unit": "Safety & Security",
                      "type": "SYSTEMATIC"
                    },
                    {
                      "key": "ALAR06",
                      "value": "R.A.I.D. (Renault Anti Intruder Device) automatic door locking",
                      "unit": "Safety & Security",
                      "type": "SYSTEMATIC"
                    },
                    {
                      "key": "CMAR3P",
                      "value": "3-point rear seatbelts",
                      "unit": "Safety & Security",
                      "type": "SYSTEMATIC"
                    },
                    {
                      "key": "ABS",
                      "value": "ABS with EBD (Electronic Brake Distribution) and emergency brake assist",
                      "unit": "Safety & Security",
                      "type": "SYSTEMATIC"
                    },
                    {
                      "key": "ASRESP",
                      "value": "ESC (Electronic Stability Control) with ASR (Traction Control)",
                      "unit": "Safety & Security",
                      "type": "SYSTEMATIC"
                    },
                    {
                      "key": "DPRPN",
                      "value": "Tyre pressure monitors",
                      "unit": "Safety & Security",
                      "type": "SYSTEMATIC"
                    },
                    {
                      "key": "ALOUCC",
                      "value": "Driver's seatbelt warning",
                      "unit": "Safety & Security",
                      "type": "SYSTEMATIC"
                    },
                    {
                      "key": "ISOFIX",
                      "value": "ISOFIX fittings on outer rear seats and front passenger seat",
                      "unit": "Safety & Security",
                      "type": "SYSTEMATIC"
                    },
                    {
                      "key": "ALEVA",
                      "value": "Automatic lights and windscreen wipers",
                      "unit": "Safety & Security",
                      "type": "SYSTEMATIC"
                    },
                    {
                      "key": "AIRBA1",
                      "value": "Front passenger airbag",
                      "unit": "Safety & Security",
                      "type": "SYSTEMATIC"
                    }
                  ]
                }
              ],
              "techSpecs": [
                {
                  "key": "DEC411",
                  "value": "Engine Type and Conformance",
                  "specs": [
                    {
                      "key": "PT4321_renault_eco2",
                      "value": "Renault Eco2",
                      "unit": "Ecological Label",
                      "type": "SYSTEMATIC",
                      "pricesKeyList": [
                        "PT4321_renault_eco2"
                      ]
                    }
                  ]
                },
                {
                  "key": "DEC407",
                  "value": "Braking",
                  "specs": [
                    {
                      "key": "PT1653_ta_228",
                      "value": "TA-228",
                      "unit": "Rear Discs (Diameter mm)",
                      "type": "SYSTEMATIC",
                      "pricesKeyList": [
                        "PT1653_ta_228"
                      ]
                    },
                    {
                      "key": "PT1652_dv_258",
                      "value": "DV-258",
                      "unit": "Front Discs (Diameter mm)",
                      "type": "SYSTEMATIC",
                      "pricesKeyList": [
                        "PT1652_dv_258"
                      ]
                    }
                  ]
                },
                {
                  "key": "DEC408",
                  "value": "Tyres",
                  "specs": [
                    {
                      "key": "PT1635_195_55_r_16",
                      "value": "195/55  R 16",
                      "unit": "Size/Profile",
                      "type": "OPTION",
                      "pricesKeyList": [
                        "PT1635_195_55_r_16"
                      ]
                    },
                    {
                      "key": "PT1635_205_45_r_17",
                      "value": "205/45  R 17",
                      "unit": "Size/Profile",
                      "type": "OPTION",
                      "pricesKeyList": [
                        "PT1635_205_45_r_17"
                      ]
                    }
                  ]
                },
                {
                  "key": "DEC3181",
                  "value": "Key Specifications",
                  "specs": [
                    {
                      "key": "PT5383_automatic_gearbox",
                      "value": "Automatic gearbox",
                      "unit": "Gearbox",
                      "type": "SYSTEMATIC",
                      "pricesKeyList": [
                        "PT5383_automatic_gearbox"
                      ]
                    },
                    {
                      "key": "PT5548_dynamique_zen",
                      "value": "Dynamique Zen",
                      "unit": "Equipment Level",
                      "type": "SYSTEMATIC",
                      "pricesKeyList": [
                        "PT5548_dynamique_zen"
                      ]
                    },
                    {
                      "key": "PT5547_internet_connectivity",
                      "value": "Internet Connectivity",
                      "unit": "Connectivity",
                      "type": "SYSTEMATIC",
                      "pricesKeyList": [
                        "PT5547_internet_connectivity"
                      ]
                    },
                    {
                      "key": "PT5556_16-E2-80-9D_aerotronic_alloy_wheels",
                      "value": "16” Aerotronic Alloy wheels",
                      "unit": "Wheels",
                      "type": "OPTION",
                      "pricesKeyList": [
                        "PT5556_16-E2-80-9D_aerotronic_alloy_wheels"
                      ]
                    },
                    {
                      "key": "PT5556_17-E2-80-9D_tech_run_diamond_cut_alloy_wheels",
                      "value": "17” Tech Run diamond cut Alloy wheels",
                      "unit": "Wheels",
                      "type": "OPTION",
                      "pricesKeyList": [
                        "PT5556_17-E2-80-9D_tech_run_diamond_cut_alloy_wheels"
                      ]
                    }
                  ]
                },
                {
                  "key": "DEC21",
                  "value": "Capacities",
                  "specs": [
                    {
                      "key": "PT301_nc",
                      "value": "NC",
                      "unit": "Fuel Tank - Litres",
                      "type": "SYSTEMATIC",
                      "pricesKeyList": [
                        "PT301_nc"
                      ]
                    }
                  ]
                }
              ],
              "body": {
                "doors": {
                  "key": "PT1262_5",
                  "value": "5",
                  "unit": "No. of Doors",
                  "type": "SYSTEMATIC"
                },
                "type": {
                  "key": "PT1261_hatch",
                  "value": "Hatch",
                  "unit": "Body Type Classification",
                  "type": "SYSTEMATIC"
                },
                "specs": {
                  "specs": []
                }
              },
              "seating": {
                "specs": {
                  "specs": []
                }
              },
              "localSemiClair": "ZEN MA 8 IR"
            }
          ]
        },
        "engines": {
          "engines": [
            {
              "key": "PT5554_electric_engine_PT1633_automatic_gearbox",
              "engineType": {
                "key": "PT5554_electric_engine",
                "value": "Electric engine",
                "unit": "Engine",
                "type": "SYSTEMATIC"
              },
              "battery": [
                {
                  "key": "PT5554_electric_engine",
                  "type": "lease"
                },
                {
                  "key": "PT5554_electric_engine",
                  "type": "buy"
                }
              ],
              "fuelType": {
                "key": "PT1628_electric",
                "value": "Electric",
                "unit": "Fuel Type",
                "type": "SYSTEMATIC"
              },
              "capacity": {
                "key": "PT42_nc",
                "value": "NC",
                "unit": "Induction Capacity (cc)",
                "type": "SYSTEMATIC"
              },
              "cylinders": {
                "key": "PT44_nc",
                "value": "NC",
                "unit": "No. of Cylinders",
                "type": "SYSTEMATIC"
              },
              "torque": {
                "key": "PT1625_220",
                "value": "220",
                "unit": "Maximum Torque - Nm ISO",
                "type": "SYSTEMATIC"
              },
              "power": {
                "hp": {
                  "key": "PT5550_88",
                  "value": "88",
                  "unit": "Power (BHP)",
                  "type": "SYSTEMATIC"
                },
                "kw": {
                  "key": "PT5553_65",
                  "value": "65",
                  "unit": "Power (Kw)",
                  "type": "SYSTEMATIC"
                }
              },
              "transmission": {
                "key": "PT1633_automatic_gearbox",
                "gears": {
                  "key": "PT47_nc",
                  "value": "NC",
                  "unit": "Number of Forward Gears",
                  "type": "SYSTEMATIC"
                },
                "gearBoxType": {
                  "key": "PT1633_automatic_gearbox",
                  "value": "Automatic gearbox",
                  "unit": "Gearbox Type",
                  "type": "SYSTEMATIC"
                },
                "specs": {
                  "specs": []
                }
              },
              "performance": {
                "maxSpeed": {
                  "key": "PT1121_135",
                  "value": "135",
                  "unit": "Maximum Speed - kph",
                  "type": "SYSTEMATIC"
                }
              },
              "fuelConsumption": {
                "urban": {
                  "key": "PT1641_0",
                  "value": "0",
                  "unit": "Urban (litres/100km)",
                  "type": "SYSTEMATIC"
                },
                "extraUrban": {
                  "key": "PT1642_0",
                  "value": "0",
                  "unit": "Extra Urban (litres/100km)",
                  "type": "SYSTEMATIC"
                },
                "combined": {
                  "key": "PT1643_0",
                  "value": "0",
                  "unit": "Combined (litres/100km)",
                  "type": "SYSTEMATIC"
                },
                "co2Emissions": {
                  "key": "PT1640_0",
                  "value": "0",
                  "unit": "CO2 (g/km)",
                  "type": "SYSTEMATIC"
                }
              },
              "emissionControlStandard": {
                "key": "PT3401_euro5",
                "value": "EURO5",
                "unit": "Emission Control Standard",
                "type": "SYSTEMATIC"
              },
              "name": "Electric engine",
              "specs": {
                "specs": [
                  {
                    "key": "PT3641_n_a",
                    "value": "N/A",
                    "unit": "Particle Filter",
                    "type": "SYSTEMATIC",
                    "pricesKeyList": [
                      "PT3641_n_a"
                    ]
                  },
                  {
                    "key": "PT1623_065_088_",
                    "value": "065 (088)",
                    "unit": "Maximum Power - kw ISO",
                    "type": "SYSTEMATIC",
                    "pricesKeyList": [
                      "PT1623_065_088_"
                    ]
                  },
                  {
                    "key": "PT1627_n_a",
                    "value": "N/A",
                    "unit": "Injection Type",
                    "type": "SYSTEMATIC",
                    "pricesKeyList": [
                      "PT1627_n_a"
                    ]
                  }
                ]
              },
              "pricesKeyList": [
                "PT5554_electric_engine",
                null,
                "PT1633_automatic_gearbox"
              ],
              "fullEngineName": "Electric engine Automatic gearbox NC"
            }
          ]
        },
        "upholsteries": {
          "groupKey": "122",
          "upholsteries": [
            {
              "key": "DRAP02",
              "name": "Zen Interior with Teflon® treatment for maximum seat protection",
              "type": "SYSTEMATIC"
            }
          ]
        },
        "trims": {
          "groupKey": "",
          "trims": []
        },
        "wheels": {
          "groupKey": "PT5556",
          "wheels": [
            {
              "key": "PT5556_17-E2-80-9D_tech_run_diamond_cut_alloy_wheels",
              "name": "17” Tech Run diamond cut Alloy wheels",
              "type": "OPTION",
              "pricesKeyList": [
                "PT5556_17-E2-80-9D_tech_run_diamond_cut_alloy_wheels",
                "RALU17",
                "RNORM"
              ]
            },
            {
              "key": "PT5556_16-E2-80-9D_aerotronic_alloy_wheels",
              "name": "16” Aerotronic Alloy wheels",
              "type": "OPTION",
              "pricesKeyList": [
                "PT5556_16-E2-80-9D_aerotronic_alloy_wheels",
                "RALU16",
                "RNORM"
              ]
            }
          ]
        },
        "exteriorColours": {
          "groupKey": "141",
          "colours": [
            {
              "key": "TEKNV",
              "pricesKeyList": [
                "TEKNV",
                "QPA$MV"
              ],
              "name": "Calico Grey",
              "type": "OPTION"
            },
            {
              "key": "OVRPH",
              "pricesKeyList": [
                "OVRPH",
                "QPA$OS2"
              ],
              "name": "Iceberg Blue",
              "type": "OPTION"
            },
            {
              "key": "TEQNC",
              "pricesKeyList": [
                "TEQNC",
                "QPA$MVS"
              ],
              "name": "Pearl White",
              "type": "OPTION"
            },
            {
              "key": "TERQG",
              "pricesKeyList": [
                "TERQG",
                "QPA$RQG"
              ],
              "name": "Zircon Blue",
              "type": "OPTION"
            },
            {
              "key": "TEGNE",
              "pricesKeyList": [
                "TEGNE",
                "QPA$MV"
              ],
              "name": "Pearl Black",
              "type": "OPTION"
            },
            {
              "key": "TEKNR",
              "pricesKeyList": [
                "TEKNR",
                "QPA$MV"
              ],
              "name": "Neptune Grey",
              "type": "OPTION"
            },
            {
              "key": "OV369",
              "pricesKeyList": [
                "OV369",
                "QPA$OS1"
              ],
              "name": "Glacier White",
              "type": "OPTION"
            }
          ]
        },
        "interiorColours": {
          "groupKey": "141",
          "colours": [
            {
              "key": "HARM01",
              "pricesKeyList": [
                "HARM01",
                "QPA$MV"
              ],
              "name": "Light trim",
              "type": "SYSTEMATIC"
            }
          ]
        },
        "packs": {
          "packs": []
        },
        "stylePacks": {
          "packs": [],
          "exteriorPackGroups": [],
          "interiorPackGroups": []
        },
        "accessories": [],
        "accessoryPacks": {
          "packs": [],
          "accessoryPackGroups": []
        },
        "equipmentSpecs": [
          {
            "key": "AUD",
            "value": "Connectivity & Sound system",
            "specs": [
              {
                "key": "RAD37A",
                "value": "Arkamys 3D Sound 4x35W radio",
                "unit": "Connectivity & Sound system",
                "type": "SYSTEMATIC"
              }
            ]
          },
          {
            "key": "MOT",
            "value": "Engine",
            "specs": [
              {
                "key": "KM",
                "unit": "Engine",
                "type": "SYSTEMATIC"
              }
            ]
          },
          {
            "key": "MEDIA",
            "value": "Communication & Navigation",
            "specs": [
              {
                "key": "MAPSTD",
                "value": "UK & Ireland mapping",
                "unit": "Communication & Navigation",
                "type": "DEFAULT"
              },
              {
                "key": "TCU0G2",
                "value": "Telematics",
                "unit": "Communication & Navigation",
                "type": "SYSTEMATIC"
              },
              {
                "key": "NAV3G5",
                "value": "R-Link 2 Navigation & Multimedia System",
                "unit": "Communication & Navigation",
                "type": "SYSTEMATIC"
              },
              {
                "key": "MAPSUP",
                "value": "Additional mapping - Western Europe",
                "unit": "Communication & Navigation",
                "type": "OPTION",
                "price": "100.0"
              },
              {
                "key": "SRV$MMLIVE",
                "value": "LIVE Services",
                "unit": "Communication & Navigation",
                "type": "OPTION",
                "price": "99.0"
              }
            ]
          },
          {
            "key": "Spe Ze",
            "value": "Specialist Z.E. Equipment",
            "specs": [
              {
                "key": "026KWH",
                "value": "Secondary battery capacity",
                "unit": "Specialist Z.E. Equipment",
                "type": "SYSTEMATIC"
              },
              {
                "key": "CACBL2",
                "value": "6 metre Charging cable (Type 2 Mode 3)",
                "unit": "Specialist Z.E. Equipment",
                "type": "SYSTEMATIC"
              },
              {
                "key": "DIFPAR",
                "value": "Perfume difuser",
                "unit": "Specialist Z.E. Equipment",
                "type": "SYSTEMATIC"
              }
            ]
          },
          {
            "key": "COMFOR",
            "value": "Comfort & Convenience",
            "specs": [
              {
                "key": "RV",
                "value": "Cruise control & speed limiter",
                "unit": "Comfort & Convenience",
                "type": "SYSTEMATIC"
              },
              {
                "key": "RET02",
                "value": "Electrically operated and heated door mirrors",
                "unit": "Comfort & Convenience",
                "type": "SYSTEMATIC"
              },
              {
                "key": "LVAREL",
                "value": "Electric rear windows",
                "unit": "Comfort & Convenience",
                "type": "SYSTEMATIC"
              },
              {
                "key": "LVAVIP",
                "value": "Electric front windows with anti-pinch functionality",
                "unit": "Comfort & Convenience",
                "type": "SYSTEMATIC"
              },
              {
                "key": "SOP02C",
                "value": "Renault keycard with handsfree entry",
                "unit": "Comfort & Convenience",
                "type": "SYSTEMATIC"
              },
              {
                "key": "RDAR01",
                "value": "Rear parking sensors",
                "unit": "Comfort & Convenience",
                "type": "DEFAULT"
              },
              {
                "key": "LAC",
                "value": "Rear heated window",
                "unit": "Comfort & Convenience",
                "type": "SYSTEMATIC"
              },
              {
                "key": "RDAR02",
                "value": "Rear parking sensors with camera",
                "unit": "Comfort & Convenience",
                "type": "OPTION",
                "price": "500.0"
              },
              {
                "key": "CEAVRH",
                "value": "Height adjustable front seatbelts",
                "unit": "Comfort & Convenience",
                "type": "SYSTEMATIC"
              },
              {
                "key": "CAREG",
                "value": "Dual-zone climate control",
                "unit": "Comfort & Convenience",
                "type": "SYSTEMATIC"
              },
              {
                "key": "ATAR",
                "value": "Height adjustable headrests on outer rear seats",
                "unit": "Comfort & Convenience",
                "type": "SYSTEMATIC"
              },
              {
                "key": "FDIU1",
                "value": "Daytime running lights",
                "unit": "Comfort & Convenience",
                "type": "SYSTEMATIC"
              },
              {
                "key": "SUPCPE",
                "value": "Deadlocking",
                "unit": "Comfort & Convenience",
                "type": "SYSTEMATIC"
              }
            ]
          },
          {
            "key": "ZE",
            "value": "Services ZE",
            "specs": [
              {
                "key": "SRV$ZEINTER",
                "value": "My Z.E. Interactive",
                "unit": "Services ZE",
                "type": "OPTION",
                "price": "99.0",
                "pricesKeyList": [
                  "SRV$ZEINTER"
                ]
              }
            ]
          },
          {
            "key": "DRIVIN",
            "value": "Safety & Security",
            "specs": [
              {
                "key": "ASRESP",
                "value": "ESC (Electronic Stability Control) with ASR (Traction Control)",
                "unit": "Safety & Security",
                "type": "SYSTEMATIC"
              },
              {
                "key": "ABS",
                "value": "ABS with EBD (Electronic Brake Distribution) and emergency brake assist",
                "unit": "Safety & Security",
                "type": "SYSTEMATIC"
              },
              {
                "key": "ALEVA",
                "value": "Automatic lights and windscreen wipers",
                "unit": "Safety & Security",
                "type": "SYSTEMATIC"
              },
              {
                "key": "KTGREP",
                "value": "Tyre repair kit",
                "unit": "Safety & Security",
                "type": "SYSTEMATIC"
              },
              {
                "key": "DPRPN",
                "value": "Tyre pressure monitors",
                "unit": "Safety & Security",
                "type": "SYSTEMATIC"
              },
              {
                "key": "CMAR3P",
                "value": "3-point rear seatbelts",
                "unit": "Safety & Security",
                "type": "SYSTEMATIC"
              },
              {
                "key": "ISOFIX",
                "value": "ISOFIX fittings on outer rear seats and front passenger seat",
                "unit": "Safety & Security",
                "type": "SYSTEMATIC"
              },
              {
                "key": "ALAR06",
                "value": "R.A.I.D. (Renault Anti Intruder Device) automatic door locking",
                "unit": "Safety & Security",
                "type": "SYSTEMATIC"
              },
              {
                "key": "AIRBA1",
                "value": "Front passenger airbag",
                "unit": "Safety & Security",
                "type": "SYSTEMATIC"
              },
              {
                "key": "ALOUCC",
                "value": "Driver's seatbelt warning",
                "unit": "Safety & Security",
                "type": "SYSTEMATIC"
              }
            ]
          }
        ],
        "name": "Dynamique Zen",
        "priceCodes": [
          {
            "key": "PVCFT",
            "currency": "EUR"
          },
          {
            "key": "PVCTTC",
            "currency": "EUR"
          }
        ]
      }
    ]
  },
  "engines": {
    "engines": [
      {
        "key": "PT5554_electric_engine_PT1633_automatic_gearbox",
        "engineType": {
          "key": "PT5554_electric_engine",
          "value": "Electric engine",
          "unit": "Engine",
          "type": "SYSTEMATIC"
        },
        "battery": [
          {
            "key": "PT5554_electric_engine",
            "type": "lease"
          },
          {
            "key": "PT5554_electric_engine",
            "type": "buy"
          }
        ],
        "fuelType": {
          "key": "PT1628_electric",
          "value": "Electric",
          "unit": "Fuel Type",
          "type": "SYSTEMATIC"
        },
        "capacity": {
          "key": "PT42_nc",
          "value": "NC",
          "unit": "Induction Capacity (cc)",
          "type": "SYSTEMATIC"
        },
        "cylinders": {
          "key": "PT44_nc",
          "value": "NC",
          "unit": "No. of Cylinders",
          "type": "SYSTEMATIC"
        },
        "torque": {
          "key": "PT1625_220",
          "value": "220",
          "unit": "Maximum Torque - Nm ISO",
          "type": "SYSTEMATIC"
        },
        "power": {
          "hp": {
            "key": "PT5550_88",
            "value": "88",
            "unit": "Power (BHP)",
            "type": "SYSTEMATIC"
          },
          "kw": {
            "key": "PT5553_65",
            "value": "65",
            "unit": "Power (Kw)",
            "type": "SYSTEMATIC"
          }
        },
        "transmission": {
          "key": "PT1633_automatic_gearbox",
          "gears": {
            "key": "PT47_nc",
            "value": "NC",
            "unit": "Number of Forward Gears",
            "type": "SYSTEMATIC"
          },
          "gearBoxType": {
            "key": "PT1633_automatic_gearbox",
            "value": "Automatic gearbox",
            "unit": "Gearbox Type",
            "type": "SYSTEMATIC"
          },
          "specs": {
            "specs": []
          }
        },
        "performance": {
          "maxSpeed": {
            "key": "PT1121_135",
            "value": "135",
            "unit": "Maximum Speed - kph",
            "type": "SYSTEMATIC"
          }
        },
        "fuelConsumption": {
          "urban": {
            "key": "PT1641_0",
            "value": "0",
            "unit": "Urban (litres/100km)",
            "type": "SYSTEMATIC"
          },
          "extraUrban": {
            "key": "PT1642_0",
            "value": "0",
            "unit": "Extra Urban (litres/100km)",
            "type": "SYSTEMATIC"
          },
          "combined": {
            "key": "PT1643_0",
            "value": "0",
            "unit": "Combined (litres/100km)",
            "type": "SYSTEMATIC"
          },
          "co2Emissions": {
            "key": "PT1640_0",
            "value": "0",
            "unit": "CO2 (g/km)",
            "type": "SYSTEMATIC"
          }
        },
        "emissionControlStandard": {
          "key": "PT3401_euro5",
          "value": "EURO5",
          "unit": "Emission Control Standard",
          "type": "SYSTEMATIC"
        },
        "name": "Electric engine",
        "specs": {
          "specs": [
            {
              "key": "PT3641_n_a",
              "value": "N/A",
              "unit": "Particle Filter",
              "type": "SYSTEMATIC",
              "pricesKeyList": [
                "PT3641_n_a"
              ]
            },
            {
              "key": "PT1623_065_088_",
              "value": "065 (088)",
              "unit": "Maximum Power - kw ISO",
              "type": "SYSTEMATIC",
              "pricesKeyList": [
                "PT1623_065_088_"
              ]
            },
            {
              "key": "PT1627_n_a",
              "value": "N/A",
              "unit": "Injection Type",
              "type": "SYSTEMATIC",
              "pricesKeyList": [
                "PT1627_n_a"
              ]
            }
          ]
        },
        "pricesKeyList": [
          "PT5554_electric_engine",
          null,
          "PT1633_automatic_gearbox"
        ],
        "fullEngineName": "Electric engine Automatic gearbox NC"
      }
    ]
  },
  "upholsteries": {
    "groupKey": "122",
    "upholsteries": [
      {
        "key": "DRAP02",
        "name": "Zen Interior with Teflon® treatment for maximum seat protection",
        "type": "SYSTEMATIC"
      },
      {
        "key": "DRAP03",
        "name": "Intens Interior",
        "type": "SYSTEMATIC"
      },
      {
        "key": "DRAP07",
        "name": "Expression Black Interior",
        "type": "SYSTEMATIC"
      }
    ]
  },
  "trims": {
    "groupKey": "",
    "trims": []
  },
  "wheels": {
    "groupKey": "PT5556",
    "wheels": [
      {
        "key": "PT5556_17-E2-80-9D_tech_run_diamond_cut_alloy_wheels",
        "name": "17” Tech Run diamond cut Alloy wheels",
        "type": "OPTION",
        "pricesKeyList": [
          "PT5556_17-E2-80-9D_tech_run_diamond_cut_alloy_wheels",
          "RALU17",
          "RNORM"
        ]
      },
      {
        "key": "PT5556_16-E2-80-9D_aerotronic_alloy_wheels",
        "name": "16” Aerotronic Alloy wheels",
        "type": "OPTION",
        "pricesKeyList": [
          "PT5556_16-E2-80-9D_aerotronic_alloy_wheels",
          "RALU16",
          "RNORM"
        ]
      },
      {
        "key": "PT5556_15_steel_wheels",
        "name": "15\" steel wheels",
        "type": "OPTION",
        "pricesKeyList": [
          "PT5556_15_steel_wheels",
          "RTOL15",
          "RNORM"
        ]
      }
    ]
  },
  "packs": {
    "packs": []
  },
  "stylePacks": {
    "packs": [],
    "exteriorPackGroups": [],
    "interiorPackGroups": []
  },
  "accessoryPacks": {
    "packs": [],
    "accessoryPackGroups": []
  },
  "accessories": [],
  "equipmentSpecs": [
    {
      "key": "AUD",
      "value": "Connectivity & Sound system",
      "specs": [
        {
          "key": "RAD37A",
          "value": "Arkamys 3D Sound 4x35W radio",
          "unit": "Connectivity & Sound system",
          "type": "SYSTEMATIC"
        },
        {
          "key": "RAD35A",
          "value": "4x20W Classic radio with 2 front and 2 rear speakers",
          "unit": "Connectivity & Sound system",
          "type": "DEFAULT"
        }
      ]
    },
    {
      "key": "MOT",
      "value": "Engine",
      "specs": [
        {
          "key": "KM",
          "unit": "Engine",
          "type": "SYSTEMATIC"
        }
      ]
    },
    {
      "key": "MEDIA",
      "value": "Communication & Navigation",
      "specs": [
        {
          "key": "MAPSTD",
          "value": "UK & Ireland mapping",
          "unit": "Communication & Navigation",
          "type": "DEFAULT"
        },
        {
          "key": "TCU0G2",
          "value": "Telematics",
          "unit": "Communication & Navigation",
          "type": "SYSTEMATIC"
        },
        {
          "key": "NAV3G5",
          "value": "R-Link 2 Navigation & Multimedia System",
          "unit": "Communication & Navigation",
          "type": "SYSTEMATIC"
        },
        {
          "key": "MAPSUP",
          "value": "Additional mapping - Western Europe",
          "unit": "Communication & Navigation",
          "type": "OPTION",
          "price": "100.0"
        },
        {
          "key": "SRV$MMLIVE",
          "value": "LIVE Services",
          "unit": "Communication & Navigation",
          "type": "OPTION",
          "price": "99.0"
        }
      ]
    },
    {
      "key": "Spe Ze",
      "value": "Specialist Z.E. Equipment",
      "specs": [
        {
          "key": "026KWH",
          "value": "Secondary battery capacity",
          "unit": "Specialist Z.E. Equipment",
          "type": "SYSTEMATIC"
        },
        {
          "key": "CACBL2",
          "value": "6 metre Charging cable (Type 2 Mode 3)",
          "unit": "Specialist Z.E. Equipment",
          "type": "SYSTEMATIC"
        },
        {
          "key": "DIFPAR",
          "value": "Perfume difuser",
          "unit": "Specialist Z.E. Equipment",
          "type": "SYSTEMATIC"
        }
      ]
    },
    {
      "key": "COMFOR",
      "value": "Comfort & Convenience",
      "specs": [
        {
          "key": "RV",
          "value": "Cruise control & speed limiter",
          "unit": "Comfort & Convenience",
          "type": "SYSTEMATIC"
        },
        {
          "key": "LVARMA",
          "value": "Manual rear windows",
          "unit": "Comfort & Convenience",
          "type": "SYSTEMATIC"
        },
        {
          "key": "RET02",
          "value": "Electrically operated and heated door mirrors",
          "unit": "Comfort & Convenience",
          "type": "SYSTEMATIC"
        },
        {
          "key": "LVAREL",
          "value": "Electric rear windows",
          "unit": "Comfort & Convenience",
          "type": "SYSTEMATIC"
        },
        {
          "key": "LVAVEL",
          "value": "Electric front windows",
          "unit": "Comfort & Convenience",
          "type": "SYSTEMATIC"
        },
        {
          "key": "LVAVIP",
          "value": "Electric front windows with anti-pinch functionality",
          "unit": "Comfort & Convenience",
          "type": "SYSTEMATIC"
        },
        {
          "key": "SOP02C",
          "value": "Renault keycard with handsfree entry",
          "unit": "Comfort & Convenience",
          "type": "SYSTEMATIC"
        },
        {
          "key": "SOP01C",
          "value": "Renault keycard",
          "unit": "Comfort & Convenience",
          "type": "SYSTEMATIC"
        },
        {
          "key": "RDAR01",
          "value": "Rear parking sensors",
          "unit": "Comfort & Convenience",
          "type": "DEFAULT"
        },
        {
          "key": "LAC",
          "value": "Rear heated window",
          "unit": "Comfort & Convenience",
          "type": "SYSTEMATIC"
        },
        {
          "key": "RDAR02",
          "value": "Rear parking sensors with camera",
          "unit": "Comfort & Convenience",
          "type": "OPTION",
          "price": "500.0"
        },
        {
          "key": "CEAVRH",
          "value": "Height adjustable front seatbelts",
          "unit": "Comfort & Convenience",
          "type": "SYSTEMATIC"
        },
        {
          "key": "CAREG",
          "value": "Dual-zone climate control",
          "unit": "Comfort & Convenience",
          "type": "SYSTEMATIC"
        },
        {
          "key": "ATAR",
          "value": "Height adjustable headrests on outer rear seats",
          "unit": "Comfort & Convenience",
          "type": "SYSTEMATIC"
        },
        {
          "key": "FDIU1",
          "value": "Daytime running lights",
          "unit": "Comfort & Convenience",
          "type": "SYSTEMATIC"
        },
        {
          "key": "SUPCPE",
          "value": "Deadlocking",
          "unit": "Comfort & Convenience",
          "type": "SYSTEMATIC"
        }
      ]
    },
    {
      "key": "ZE",
      "value": "Services ZE",
      "specs": [
        {
          "key": "SRV$ZEINTER",
          "value": "My Z.E. Interactive",
          "unit": "Services ZE",
          "type": "OPTION",
          "price": "99.0",
          "pricesKeyList": [
            "SRV$ZEINTER"
          ]
        }
      ]
    },
    {
      "key": "DRIVIN",
      "value": "Safety & Security",
      "specs": [
        {
          "key": "ASRESP",
          "value": "ESC (Electronic Stability Control) with ASR (Traction Control)",
          "unit": "Safety & Security",
          "type": "SYSTEMATIC"
        },
        {
          "key": "ABS",
          "value": "ABS with EBD (Electronic Brake Distribution) and emergency brake assist",
          "unit": "Safety & Security",
          "type": "SYSTEMATIC"
        },
        {
          "key": "ALEVA",
          "value": "Automatic lights and windscreen wipers",
          "unit": "Safety & Security",
          "type": "SYSTEMATIC"
        },
        {
          "key": "KTGREP",
          "value": "Tyre repair kit",
          "unit": "Safety & Security",
          "type": "SYSTEMATIC"
        },
        {
          "key": "DPRPN",
          "value": "Tyre pressure monitors",
          "unit": "Safety & Security",
          "type": "SYSTEMATIC"
        },
        {
          "key": "CMAR3P",
          "value": "3-point rear seatbelts",
          "unit": "Safety & Security",
          "type": "SYSTEMATIC"
        },
        {
          "key": "ISOFIX",
          "value": "ISOFIX fittings on outer rear seats and front passenger seat",
          "unit": "Safety & Security",
          "type": "SYSTEMATIC"
        },
        {
          "key": "ALAR06",
          "value": "R.A.I.D. (Renault Anti Intruder Device) automatic door locking",
          "unit": "Safety & Security",
          "type": "SYSTEMATIC"
        },
        {
          "key": "AIRBA1",
          "value": "Front passenger airbag",
          "unit": "Safety & Security",
          "type": "SYSTEMATIC"
        },
        {
          "key": "ALOUCC",
          "value": "Driver's seatbelt warning",
          "unit": "Safety & Security",
          "type": "SYSTEMATIC"
        }
      ]
    }
  ],
  "priceCodes": [
    {
      "key": "PVCFT",
      "currency": "EUR"
    },
    {
      "key": "PVCTTC",
      "currency": "EUR"
    }
  ],
  "defaultPriceVersion": "PVCTTC",
  "defaultPriceOption": "PVCTTC",
  "localSemiClair": "ZOE",
  "inventoryCountEnabled": false
};
   res.send(result);
});

app.use(router);

app.listen(3000, function() {  
  console.log("Node server running on http://localhost:3000 ");
});
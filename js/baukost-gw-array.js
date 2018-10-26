var kompObj = [{
    "nummer":1,"name": "Gewächshauskonstruktion"},{
    "nummer":2, "name": "Energieschirm/Schattierung"},{
    "nummer":3, "name": "Kulturflächen"},{
    "nummer":4, "name": "Verkaufseinrichtungen"},{
    "nummer":5, "name": "Bewässerung"},{
    "nummer":6, "name": "Düngung"},{
    "nummer":7, "name":"Belichtung"},{
    "nummer":8, "name":"Klimaregelung"},{
    "nummer":9, "name":"Kühlanlagen"},{
    "nummer":10, "name":"Spezielle Arbeitsräume"},{
    "nummer":11, "name":"Sanitärräume/Sanitäranlagen"},{
    "nummer":12, "name":"Außenanlagen"},{
    "nummer":13, "name":"Wärmeerzeugung"},{ 
    "nummer":14, "name":"Wärmeausbringung"},{
    "nummer":15, "name":"Wärmerspeicherung"
}]


//Wird nicht nebötigt
var grKlassenArr = [
    "50 kW", "100 kW", "500 kW", "1000 kW", "5000 kW", "10000 kW"
]

var jsonObj = [{
    "nummer": 1,
    "sortierung": 14,
    "komponente": "Wärmeausbringung",
    "groesse": "50 kW",
    "position": "keine Heizung",
    "wert": "0"
}, {
    "nummer": 2,
    "sortierung": 14,
    "komponente": "Wärmeausbringung",
    "groesse": "50 kW",
    "position": "Rohrbündel-Wärmetauscher (zum Laden, Entladen von Niedertemperaturwärme)",
    "wert": "844,89"
}, {
    "nummer": 3,
    "sortierung": 14,
    "komponente": "Wärmeausbringung",
    "groesse": "50 kW",
    "position": "Luft/Konvektor-Heizung für Verkaufsgewächshäuser (2/3 Luftheizer, 1/3 Konvektoren)",
    "wert": "96,465"
}, {
    "nummer": 4,
    "sortierung": 14,
    "komponente": "Wärmeausbringung",
    "groesse": "50 kW",
    "position": "Boden/Konvektor-Heizung für Verkaufsgewächshäuser (2/3 Bodenheizung, 1/3 Konvektoren)",
    "wert": "192,93"
}, {
    "nummer": 5,
    "sortierung": 14,
    "komponente": "Wärmeausbringung",
    "groesse": "100 kW",
    "position": "keine Heizung",
    "wert": "0"
}, {
    "nummer": 6,
    "sortierung": 14,
    "komponente": "Wärmeausbringung",
    "groesse": "100 kW",
    "position": "Rohrbündel-Wärmetauscher (zum Laden, Entladen von Niedertemperaturwärme)",
    "wert": "768,5"
}, {
    "nummer": 7,
    "sortierung": 14,
    "komponente": "Wärmeausbringung",
    "groesse": "100 kW",
    "position": "Luft/Konvektor-Heizung für Verkaufsgewächshäuser (2/3 Luftheizer, 1/3 Konvektoren)",
    "wert": "83,18"
}, {
    "nummer": 8,
    "sortierung": 14,
    "komponente": "Wärmeausbringung",
    "groesse": "100 kW",
    "position": "Boden/Konvektor-Heizung für Verkaufsgewächshäuser (2/3 Bodenheizung, 1/3 Konvektoren)",
    "wert": "166,36"
}, {
    "nummer": 9,
    "sortierung": 14,
    "komponente": "Wärmeausbringung",
    "groesse": "500 kW",
    "position": "keine Heizung",
    "wert": "0"
}, {
    "nummer": 10,
    "sortierung": 14,
    "komponente": "Wärmeausbringung",
    "groesse": "500 kW",
    "position": "direkte Luftheizer",
    "wert": "46,731"
}, {
    "nummer": 11,
    "sortierung": 14,
    "komponente": "Wärmeausbringung",
    "groesse": "500 kW",
    "position": "gemischte Rohrheizung (Stahl)",
    "wert": "67,203"
}, {
    "nummer": 12,
    "sortierung": 14,
    "komponente": "Wärmeausbringung",
    "groesse": "500 kW",
    "position": "Bodenheizung (in Beton) 25 % / Rohrheizung 75 %",
    "wert": "79,137"
}, {
    "nummer": 13,
    "sortierung": 14,
    "komponente": "Wärmeausbringung",
    "groesse": "500 kW",
    "position": "Vegetationsheizung (Kunststoff) im Bestand 25 % / Rohrheizung 75 %",
    "wert": "80,621"
}, {
    "nummer": 14,
    "sortierung": 14,
    "komponente": "Wärmeausbringung",
    "groesse": "500 kW",
    "position": "Hebe-Senkheizung (Stahl) ",
    "wert": "84,766"
}, {
    "nummer": 15,
    "sortierung": 14,
    "komponente": "Wärmeausbringung",
    "groesse": "500 kW",
    "position": "Rohrbündel-Wärmetauscher (zum Laden, Entladen von Niedertemperaturwärme)",
    "wert": "699,02"
}, {
    "nummer": 16,
    "sortierung": 14,
    "komponente": "Wärmeausbringung",
    "groesse": "500 kW",
    "position": "Luft/Konvektor-Heizung für Verkaufsgewächshäuser (2/3 Luftheizer, 1/3 Konvektoren)",
    "wert": "71,72458819"
}, {
    "nummer": 17,
    "sortierung": 14,
    "komponente": "Wärmeausbringung",
    "groesse": "500 kW",
    "position": "Boden/Konvektor-Heizung für Verkaufsgewächshäuser (2/3 Bodenheizung, 1/3 Konvektoren)",
    "wert": "143,4491764"
}, {
    "nummer": 18,
    "sortierung": 14,
    "komponente": "Wärmeausbringung",
    "groesse": "1.000 kW",
    "position": "keine Heizung",
    "wert": "0"
}, {
    "nummer": 19,
    "sortierung": 14,
    "komponente": "Wärmeausbringung",
    "groesse": "1.000 kW",
    "position": "direkte Luftheizer",
    "wert": "42,55"
}, {
    "nummer": 20,
    "sortierung": 14,
    "komponente": "Wärmeausbringung",
    "groesse": "1.000 kW",
    "position": "gemischte Rohrheizung (Stahl)",
    "wert": "56,9825"
}, {
    "nummer": 21,
    "sortierung": 14,
    "komponente": "Wärmeausbringung",
    "groesse": "1.000 kW",
    "position": "Bodenheizung (in Beton) 25 % / Rohrheizung 75 %",
    "wert": "71,484"
}, {
    "nummer": 22,
    "sortierung": 14,
    "komponente": "Wärmeausbringung",
    "groesse": "1.000 kW",
    "position": "Vegetationsheizung (Kunststoff) im Bestand 25 % / Rohrheizung 75 %",
    "wert": "72,933"
}, {
    "nummer": 23,
    "sortierung": 14,
    "komponente": "Wärmeausbringung",
    "groesse": "1.000 kW",
    "position": "Hebe-Senkheizung (Stahl) ",
    "wert": "73,324"
}, {
    "nummer": 24,
    "sortierung": 14,
    "komponente": "Wärmeausbringung",
    "groesse": "1.000 kW",
    "position": "Rohrbündel-Wärmetauscher (zum Laden, Entladen von Niedertemperaturwärme)",
    "wert": "635,82"
}, {
    "nummer": 25,
    "sortierung": 14,
    "komponente": "Wärmeausbringung",
    "groesse": "5.000 kW",
    "position": "keine Heizung",
    "wert": "0"
}, {
    "nummer": 26,
    "sortierung": 14,
    "komponente": "Wärmeausbringung",
    "groesse": "5.000 kW",
    "position": "direkte Luftheizer",
    "wert": "37"
}, {
    "nummer": 27,
    "sortierung": 14,
    "komponente": "Wärmeausbringung",
    "groesse": "5.000 kW",
    "position": "gemischte Rohrheizung (Stahl)",
    "wert": "49,52027821"
}, {
    "nummer": 28,
    "sortierung": 14,
    "komponente": "Wärmeausbringung",
    "groesse": "5.000 kW",
    "position": "Bodenheizung (in Beton) 25 % / Rohrheizung 75 %",
    "wert": "62,2"
}, {
    "nummer": 29,
    "sortierung": 14,
    "komponente": "Wärmeausbringung",
    "groesse": "5.000 kW",
    "position": "Vegetationsheizung (Kunststoff) im Bestand 25 % / Rohrheizung 75 %",
    "wert": "63,4"
}, {
    "nummer": 30,
    "sortierung": 14,
    "komponente": "Wärmeausbringung",
    "groesse": "5.000 kW",
    "position": "Hebe-Senkheizung (Stahl) ",
    "wert": "63,8"
}, {
    "nummer": 31,
    "sortierung": 14,
    "komponente": "Wärmeausbringung",
    "groesse": "5.000 kW",
    "position": "Rohrbündel-Wärmetauscher (zum Laden, Entladen von Niedertemperaturwärme)",
    "wert": "552,9"
}, {
    "nummer": 32,
    "sortierung": 13,
    "komponente": "Wärmeerzeugung",
    "groesse": "50 kW",
    "position": "keine Heizung",
    "wert": "0"
}, {
    "nummer": 33,
    "sortierung": 13,
    "komponente": "Wärmeerzeugung",
    "groesse": "50 kW",
    "position": "Wärmetauscher (für Abwärme, Fernwärme, Fremdwärme)",
    "wert": "7,7"
}, {
    "nummer": 34,
    "sortierung": 13,
    "komponente": "Wärmeerzeugung",
    "groesse": "50 kW",
    "position": "Erdgas, Brennwert mit Abgaswärmetauscher, Einkesselanlage",
    "wert": "159,85"
}, {
    "nummer": 35,
    "sortierung": 13,
    "komponente": "Wärmeerzeugung",
    "groesse": "50 kW",
    "position": "Öl,  Einkesselanlage",
    "wert": "169,05"
}, {
    "nummer": 36,
    "sortierung": 13,
    "komponente": "Wärmeerzeugung",
    "groesse": "100 kW",
    "position": "keine Heizung",
    "wert": "0"
}, {
    "nummer": 37,
    "sortierung": 13,
    "komponente": "Wärmeerzeugung",
    "groesse": "100 kW",
    "position": "Wärmetauscher (für Abwärme, Fernwärme, Fremdwärme)",
    "wert": "6,9"
}, {
    "nummer": 38,
    "sortierung": 13,
    "komponente": "Wärmeerzeugung",
    "groesse": "100 kW",
    "position": "Erdgas, Brennwert mit Abgaswärmetauscher, Einkesselanlage",
    "wert": "158,92"
}, {
    "nummer": 39,
    "sortierung": 13,
    "komponente": "Wärmeerzeugung",
    "groesse": "100 kW",
    "position": "Öl,  Einkesselanlage",
    "wert": "168,01"
}, {
    "nummer": 40,
    "sortierung": 13,
    "komponente": "Wärmeerzeugung",
    "groesse": "500 kW",
    "position": "keine Heizung",
    "wert": "0"
}, {
    "nummer": 41,
    "sortierung": 13,
    "komponente": "Wärmeerzeugung",
    "groesse": "500 kW",
    "position": "Wärmetauscher (für Abwärme, Fernwärme, Fremdwärme)",
    "wert": "6,16"
}, {
    "nummer": 42,
    "sortierung": 13,
    "komponente": "Wärmeerzeugung",
    "groesse": "500 kW",
    "position": "Erdgas, Brennwert mit Abgaswärmetauscher, Einkesselanlage",
    "wert": "139,6"
}, {
    "nummer": 43,
    "sortierung": 13,
    "komponente": "Wärmeerzeugung",
    "groesse": "500 kW",
    "position": "Öl,  Einkesselanlage",
    "wert": "148,81"
}, {
    "nummer": 44,
    "sortierung": 13,
    "komponente": "Wärmeerzeugung",
    "groesse": "500 kW",
    "position": "Erdgas, Brennwert mit Abgaswärmetauscher, Zweikesselanlage, beide Kessel gleich groß",
    "wert": "160,51"
}, {
    "nummer": 45,
    "sortierung": 13,
    "komponente": "Wärmeerzeugung",
    "groesse": "500 kW",
    "position": "Öl/Erdgas (Mehrstoffbrennereinsatz), Einkesselanlage",
    "wert": "200,26"
}, {
    "nummer": 46,
    "sortierung": 13,
    "komponente": "Wärmeerzeugung",
    "groesse": "500 kW",
    "position": "Öl,  Zweikesselanlage,  beide Kessel gleich groß ",
    "wert": "176,77"
}, {
    "nummer": 47,
    "sortierung": 13,
    "komponente": "Wärmeerzeugung",
    "groesse": "500 kW",
    "position": "Öl/Erdgas (Mehrstoffbrennereinsatz), Zweikesselanlage, beide Kessel gleich groß",
    "wert": "198,41"
}, {
    "nummer": 48,
    "sortierung": 13,
    "komponente": "Wärmeerzeugung",
    "groesse": "500 kW",
    "position": "Kohle/Öl  Zweikesselanlage, beide Kessel gleich groß",
    "wert": "217,5338116"
}, {
    "nummer": 49,
    "sortierung": 13,
    "komponente": "Wärmeerzeugung",
    "groesse": "500 kW",
    "position": "Holz/Öl  Zweikesselanlage, beide Kessel gleich groß",
    "wert": "258,1038116"
}, {
    "nummer": 50,
    "sortierung": 13,
    "komponente": "Wärmeerzeugung",
    "groesse": "1.000 kW",
    "position": "keine Heizung",
    "wert": "0"
}, {
    "nummer": 51,
    "sortierung": 13,
    "komponente": "Wärmeerzeugung",
    "groesse": "1.000 kW",
    "position": "Wärmetauscher (für Abwärme, Fernwärme, Fremdwärme)",
    "wert": "5,5"
}, {
    "nummer": 52,
    "sortierung": 13,
    "komponente": "Wärmeerzeugung",
    "groesse": "1.000 kW",
    "position": "Erdgas, Brennwert mit Abgaswärmetauscher, Einkesselanlage",
    "wert": "114,3899381"
}, {
    "nummer": 53,
    "sortierung": 13,
    "komponente": "Wärmeerzeugung",
    "groesse": "1.000 kW",
    "position": "Öl,  Einkesselanlage",
    "wert": "123,851162"
}, {
    "nummer": 54,
    "sortierung": 13,
    "komponente": "Wärmeerzeugung",
    "groesse": "1.000 kW",
    "position": "Erdgas, Brennwert mit Abgaswärmetauscher, Zweikesselanlage, beide Kessel gleich groß",
    "wert": "128,5412707"
}, {
    "nummer": 55,
    "sortierung": 13,
    "komponente": "Wärmeerzeugung",
    "groesse": "1.000 kW",
    "position": "Öl/Erdgas (Mehrstoffbrennereinsatz), Einkesselanlage",
    "wert": "140,2078541"
}, {
    "nummer": 56,
    "sortierung": 13,
    "komponente": "Wärmeerzeugung",
    "groesse": "1.000 kW",
    "position": "Öl,  Zweikesselanlage,  beide Kessel gleich groß ",
    "wert": "144,1138158"
}, {
    "nummer": 57,
    "sortierung": 13,
    "komponente": "Wärmeerzeugung",
    "groesse": "1.000 kW",
    "position": "Öl/Erdgas (Mehrstoffbrennereinsatz), Zweikesselanlage, beide Kessel gleich groß",
    "wert": "160,349849"
}, {
    "nummer": 58,
    "sortierung": 13,
    "komponente": "Wärmeerzeugung",
    "groesse": "1.000 kW",
    "position": "Kohle/Öl  Zweikesselanlage, beide Kessel gleich groß",
    "wert": "177"
}, {
    "nummer": 59,
    "sortierung": 13,
    "komponente": "Wärmeerzeugung",
    "groesse": "1.000 kW",
    "position": "Holz/Öl  Zweikesselanlage, beide Kessel gleich groß",
    "wert": "213,4"
}, {
    "nummer": 60,
    "sortierung": 13,
    "komponente": "Wärmeerzeugung",
    "groesse": "5.000 kW",
    "position": "keine Heizung",
    "wert": "0"
}, {
    "nummer": 61,
    "sortierung": 13,
    "komponente": "Wärmeerzeugung",
    "groesse": "5.000 kW",
    "position": "Wärmetauscher (für Abwärme, Fernwärme, Fremdwärme)",
    "wert": "4,9"
}, {
    "nummer": 62,
    "sortierung": 13,
    "komponente": "Wärmeerzeugung",
    "groesse": "5.000 kW",
    "position": "Erdgas, Brennwert mit Abgaswärmetauscher, Einkesselanlage",
    "wert": "102,3481795"
}, {
    "nummer": 63,
    "sortierung": 13,
    "komponente": "Wärmeerzeugung",
    "groesse": "5.000 kW",
    "position": "Öl,  Einkesselanlage",
    "wert": "110,6"
}, {
    "nummer": 64,
    "sortierung": 13,
    "komponente": "Wärmeerzeugung",
    "groesse": "5.000 kW",
    "position": "Erdgas, Brennwert mit Abgaswärmetauscher, Zweikesselanlage, beide Kessel gleich groß",
    "wert": "114,8"
}, {
    "nummer": 65,
    "sortierung": 13,
    "komponente": "Wärmeerzeugung",
    "groesse": "5.000 kW",
    "position": "Öl/Erdgas (Mehrstoffbrennereinsatz), Einkesselanlage",
    "wert": "125,2"
}, {
    "nummer": 66,
    "sortierung": 13,
    "komponente": "Wärmeerzeugung",
    "groesse": "5.000 kW",
    "position": "Öl,  Zweikesselanlage,  beide Kessel gleich groß ",
    "wert": "128,7"
}, {
    "nummer": 67,
    "sortierung": 13,
    "komponente": "Wärmeerzeugung",
    "groesse": "5.000 kW",
    "position": "Öl/Erdgas (Mehrstoffbrennereinsatz), Zweikesselanlage, beide Kessel gleich groß",
    "wert": "143,2"
}, {
    "nummer": 68,
    "sortierung": 13,
    "komponente": "Wärmeerzeugung",
    "groesse": "5.000 kW",
    "position": "Kohle/Öl  Zweikesselanlage, beide Kessel gleich groß",
    "wert": "280,7"
}, {
    "nummer": 69,
    "sortierung": 13,
    "komponente": "Wärmeerzeugung",
    "groesse": "5.000 kW",
    "position": "Holz/Öl  Zweikesselanlage, beide Kessel gleich groß",
    "wert": "329,5"
}, {
    "nummer": 70,
    "sortierung": 15,
    "komponente": "Wärmespeicherung",
    "groesse": "50 kW",
    "position": "kein Speicher",
    "wert": "0"
}, {
    "nummer": 71,
    "sortierung": 15,
    "komponente": "Wärmespeicherung",
    "groesse": "50 kW",
    "position": "konventioneller Pufferspeicher (Wasser)",
    "wert": "113,9"
}, {
    "nummer": 72,
    "sortierung": 15,
    "komponente": "Wärmespeicherung",
    "groesse": "50 kW",
    "position": "Luft- Schotterspeicher (Low-tech-Version für Niedertemperaturwärme)",
    "wert": "333,41"
}, {
    "nummer": 73,
    "sortierung": 15,
    "komponente": "Wärmespeicherung",
    "groesse": "50 kW",
    "position": "Wasser-Wärmespeicher + Wärmepumpe (High-tech-Version für Niedertemperaturwärme)",
    "wert": "1112,37"
}, {
    "nummer": 74,
    "sortierung": 15,
    "komponente": "Wärmespeicherung",
    "groesse": "100 kW",
    "position": "kein Speicher",
    "wert": "0"
}, {
    "nummer": 75,
    "sortierung": 15,
    "komponente": "Wärmespeicherung",
    "groesse": "100 kW",
    "position": "konventioneller Pufferspeicher (Wasser)",
    "wert": "101,1"
}, {
    "nummer": 76,
    "sortierung": 15,
    "komponente": "Wärmespeicherung",
    "groesse": "100 kW",
    "position": "Luft- Schotterspeicher (Low-tech-Version für Niedertemperaturwärme)",
    "wert": "303,6855"
}, {
    "nummer": 77,
    "sortierung": 15,
    "komponente": "Wärmespeicherung",
    "groesse": "100 kW",
    "position": "Wasser-Wärmespeicher + Wärmepumpe (High-tech-Version für Niedertemperaturwärme)",
    "wert": "1007"
}, {
    "nummer": 78,
    "sortierung": 15,
    "komponente": "Wärmespeicherung",
    "groesse": "500 kW",
    "position": "kein Speicher",
    "wert": "0"
}, {
    "nummer": 79,
    "sortierung": 15,
    "komponente": "Wärmespeicherung",
    "groesse": "500 kW",
    "position": "konventioneller Pufferspeicher (Wasser)",
    "wert": "71,4"
}, {
    "nummer": 80,
    "sortierung": 15,
    "komponente": "Wärmespeicherung",
    "groesse": "500 kW",
    "position": "Luft- Schotterspeicher (Low-tech-Version für Niedertemperaturwärme)",
    "wert": "271,7"
}, {
    "nummer": 81,
    "sortierung": 15,
    "komponente": "Wärmespeicherung",
    "groesse": "500 kW",
    "position": "Wasser-Wärmespeicher + Wärmepumpe (High-tech-Version für Niedertemperaturwärme)",
    "wert": "893,36"
}, {
    "nummer": 82,
    "sortierung": 15,
    "komponente": "Wärmespeicherung",
    "groesse": "1.000 kW",
    "position": "kein Speicher",
    "wert": "0"
}, {
    "nummer": 83,
    "sortierung": 15,
    "komponente": "Wärmespeicherung",
    "groesse": "1.000 kW",
    "position": "konventioneller Pufferspeicher (Wasser)",
    "wert": "65"
}, {
    "nummer": 84,
    "sortierung": 15,
    "komponente": "Wärmespeicherung",
    "groesse": "1.000 kW",
    "position": "Luft- Schotterspeicher (Low-tech-Version für Niedertemperaturwärme)",
    "wert": "243,11"
}, {
    "nummer": 85,
    "sortierung": 15,
    "komponente": "Wärmespeicherung",
    "groesse": "1.000 kW",
    "position": "Wasser-Wärmespeicher + Wärmepumpe (High-tech-Version für Niedertemperaturwärme)",
    "wert": "810,36"
}, {
    "nummer": 86,
    "sortierung": 15,
    "komponente": "Wärmespeicherung",
    "groesse": "5.000 kW",
    "position": "kein Speicher",
    "wert": "0"
}, {
    "nummer": 87,
    "sortierung": 15,
    "komponente": "Wärmespeicherung",
    "groesse": "5.000 kW",
    "position": "konventioneller Pufferspeicher (Wasser)",
    "wert": "28,9"
}, {
    "nummer": 88,
    "sortierung": 15,
    "komponente": "Wärmespeicherung",
    "groesse": "5.000 kW",
    "position": "Luft- Schotterspeicher (Low-tech-Version für Niedertemperaturwärme)",
    "wert": "217,52"
}, {
    "nummer": 89,
    "sortierung": 15,
    "komponente": "Wärmespeicherung",
    "groesse": "5.000 kW",
    "position": "Wasser-Wärmespeicher + Wärmepumpe (High-tech-Version für Niedertemperaturwärme)",
    "wert": "653,4"
}]

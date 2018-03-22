// TODO: 1
const sklypai = {
  didysis: {
    vietu: 289,
    hektarai: 16,
    iregistruotas: true,
    medziai: [
      { tipas: 'berzas', aukstis: 22 },
      { tipas: 'azuolas', aukstis: 15 },
      { tipas: 'azuolas', aukstis: 14 },
      { tipas: 'pusis', aukstis: 36 },
    ],
  },
  mazasis: {
    vietu: 133,
    hektarai: 8,
    iregistruotas: false,
  }
};

// 1. Isdeconstructinti sklypai.didysis ir sklypai.mazasis viena eilute
// 2. Isdeconstructinti sklypai.didysis.hektarai ir sklypai.mazasis.hektarai vienam scope viena eilute
// 3. Trumpiausiu budu sukurti array susidedanti is sklypai.didysis.medziai objektu tipu
// 4. Trumpiausiu budu sukurti array susidedanti is sklypai.didysis.medziai objektu, kuriu tipas 'azuolas'
// 5. Sukurti kintamaji, kuris butu visu sklypai.didysis.medziai objektu, kuriu tipas 'azuolas', auksciu suma
// 6. Is failo 'questionsSecond.js' importuoti funkcija 'f' su nauju pavadinimu 'funkcija' ir paleisti, paduodant pirmajam argumentui 'sklypai' objekta

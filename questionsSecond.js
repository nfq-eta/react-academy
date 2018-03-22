// 1. Pakeisti funckijos argumentus 'sklypai' taip, kad funkcijos viduje butu kintamasis 'vietu' istrauktas is sklypai.vilnius.vietu
// 2. Pakeisti miestai.vilnius.vietu i kintamaji 'vietu'
// 3. Ismokti spread syntax
export const f = (sklypai) => {
  const miestai = {
    vilnius: {
      vietu: 160,
    },
    kaunas: {
      vietu: 170,
    }
  };

  console.log(miestai);
};

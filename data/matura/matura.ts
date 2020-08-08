const publishers = {
  bydgoszcz: {},
  cke: {
    title: "Centralna Komisja Egzaminacyjna",
    abbr: "CKE",
  },
  "echo-dnia": {},
  galileusz: {},
  lscdn: {},
  "nowa-era": {},
  nowiny: {},
  oke: {},
  operon: {},
  snm: {},
  tygodnik: {},
};

const basic = {
  type: "podstawa",
  publishers,
};

const extended = {
  type: "rozszerzenie",
};

const matura = {
  ...basic,
  ...extended,
};

export default matura;

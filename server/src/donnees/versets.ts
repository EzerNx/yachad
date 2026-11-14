export type Verset = {
  reference: string;
  texte: string;
};

export const versets: Verset[] = [
  {
    reference: "Psaume 121:2",
    texte: "Mon secours vient de l'Éternel, Qui a fait les cieux et la terre.",
  },
  {
    reference: "Pssaume 133:1",
    texte:
      "Voici, oh! qu'il est agréable, qu'il est doux Pour des frères de demeurer ensemble!",
  },
  {
    reference: "Galates 6:2",
    texte:
      "Portez les fardeaux les uns des autres, et vous accomplirez ainsi la loi de Christ.",
  },
];

export function trouverVerset(numeroTexte: string): Verset | undefined {
  if (/^\d+$/.test(numeroTexte)) {
    return versets[Number(numeroTexte)];
  }
  return undefined;
}

import express from "express";

type Verset = {
  reference: string;
  texte: string;
};

const PORT = 3000;
const app = express();

const versets: Verset[] = [
  {
    reference: "Psaume 121:2",
    texte: "Mon secours vient de l'Éternel, Qui a fait les cieux et la terre.",
  },
  {
    reference: "Psaume 133:1",
    texte:
      "Voici, oh! qu'il est agréable, qu'il est doux Pour des frères de demeurer ensemble!",
  },
  {
    reference: "Galates 6:2",
    texte:
      "Portez les fardeaux les uns des autres, et vous accomplirez ainsi la loi de Christ.",
  },
];

function trouverVerset(numeroTexte: string): Verset | undefined {
  // à toi
  if (/^\d+$/.test(numeroTexte)) {
    return versets[Number(numeroTexte)];
  }
  return undefined;
}

app.get("/", (req, res) => {
  res.send("Bonjour, je suis le serveur d'Ezer !");
});

app.get("/versets", (req, res) => {
  res.json(versets);
});

app.get("/versets/:numero", (req, res) => {
  const verset = trouverVerset(req.params.numero);

  if (verset == undefined) {
    res.status(404).send("Verset non trouvé");
    return;
  }

  res.json(verset);
});

app.use((req, res) => {
  res.status(404).send("Page non trouvée");
});

app.listen(PORT, () => {
  console.log(`Serveur démarré : http://localhost:${PORT}`);
});

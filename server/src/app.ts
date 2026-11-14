import express from "express";
import { routesVersets } from "./routes/versets.js";

export const app = express();

app.get("/", (req, res) => {
  res.send("Bonjour, je suis le serveur d'Ezer !");
});

app.use("/versets", routesVersets);

app.use((req, res) => {
  res.status(404).send("Page non trouvée");
});

import { Router } from "express";
import { versets, trouverVerset } from "../donnees/versets.js";

export const routesVersets = Router();

routesVersets.get("/", (req, res) => {
  res.json(versets);
});

routesVersets.get("/:numero", (req, res) => {
  const verset = trouverVerset(req.params.numero);
  if (verset === undefined) {
    res.status(404).send("Verset non trouvé");
    return;
  }
  res.json(verset);
});

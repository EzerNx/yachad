const http = require("node:http");

const PORT = 3000;

const versetDuJour = {
  reference: "Psaume 121:2",
  texte: "Mon secours vient de l'Éternel.",
};

const serveur = http.createServer((requete, reponse) => {
  console.log(requete.method, requete.url);

  if (requete.url === "/") {
    reponse.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    reponse.end("Bonjour, je suis le serveur d'Ezer !");
  } else if (requete.url === "/verset") {
    reponse.writeHead(200, {
      "Content-Type": "application/json; charset=utf-8",
    });
    reponse.end(JSON.stringify(versetDuJour));
  } else {
    reponse.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    reponse.end("Page introuvable");
  }
});

serveur.listen(PORT, () => {
  console.log(`Serveur démarré : http://localhost:${PORT}`);
});

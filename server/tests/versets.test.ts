import { describe, it, expect } from "vitest";
import request from "supertest";
import { app } from "../src/app.js";

describe("GET /versets/:numero", () => {
  it("renvoie le deuxième verset pour /versets/1", async () => {
    const reponse = await request(app).get("/versets/1");

    expect(reponse.status).toBe(200);
    expect(reponse.body.reference).toBe("Psaume 133:1");
  });

  it("renvoie 404 /versets/0x1", async () => {
    const reponse = await request(app).get("/versets/0x1");

    expect(reponse.status).toBe(404);
  });

  it("renvoie 404 /versets/abc", async () => {
    const reponse = await request(app).get("/versets/abc");

    expect(reponse.status).toBe(404);
  });

  it("renvoie 404 /versets/99", async () => {
    const reponse = await request(app).get("/versets/99");

    expect(reponse.status).toBe(404);
  });
});

describe("GET /versets", () => {
  it("renvoie la liste de versets pour /versets", async () => {
    const reponse = await request(app).get("/versets");

    expect(reponse.status).toBe(200);
    expect(reponse.body).toHaveLength(3);
    //.toBe("Psaume 133:1");
  });
});

describe("GET /", () => {
  it("renvoie le message d'accueil", async () => {
    const reponse = await request(app).get("/");

    expect(reponse.status).toBe(200);
    expect(reponse.text).toBe("Bonjour, je suis le serveur d'Ezer !");
  });
});

describe("Adresse inconnue", () => {
  it("renvoie 404 Page non trouvée pour /nimportequoi", async () => {
    const reponse = await request(app).get("/nimportequoi");

    expect(reponse.status).toBe(404);
    expect(reponse.text).toBe("Page non trouvée");
  });
});

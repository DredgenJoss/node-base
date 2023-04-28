import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import { AppMiddleware } from "./middleware/app-middleware";


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const middleware_api = new AppMiddleware();


middleware_api.middlewareApp(app);

// Endpoint de test
app.get("/api", (req, res) => {
  res.send(`
  ,___,
  [O.o]
  /)__)
  -"--"-
  ATHENA API `)
});

// Servicio
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});

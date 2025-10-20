//COntrola as rotas, ou seja o caminh da URL
import { Router } from "express";
import * as comidaController from './../controllers/comidaController.js'

const router = Router();

router. get("/", comidaController.listarTodos);
router. get("/:id", comidaController.listaUm);

export default router;
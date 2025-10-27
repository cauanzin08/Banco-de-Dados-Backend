//COntrola as rotas, ou seja o caminh da URL
import { Router } from "express";
import * as comidaController from './../controller/comidaController.js'

const router = Router();

router. get("/", comidaController.listarTodos);
router. get("/:id", comidaController.listaUm);
router.post("/", comidaController.criar);
router.delete("/:id", comidaController.deletar);
router.put("/:id", comidaController.atualizar)

export default router;
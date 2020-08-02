import { Router } from "express";
import { createUserController } from "./useCases/CreateUser";

const router = Router()

router.post('/users', (request, response) => {
  return createUserController.handle(request, response);
});

router.get('/', (req, resp) =>{
	resp.json({"msg": "Hello world"})
})
export { router }
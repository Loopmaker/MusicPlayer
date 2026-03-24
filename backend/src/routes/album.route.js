import { Router } from "express";

const router = Router();

router.get("/", (req, res) =>{
  res.send("Album route will GET method");
})
export default router;
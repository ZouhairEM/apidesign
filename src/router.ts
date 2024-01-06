import { Router } from "express";
import path from "path";

const router = Router();
/**
 * Product
 */
router.get("/product", (req, res) => {
  res.json({ message: req.shhh_secret });
});

router.get("/product/:id", () => {});
router.post("/product", () => {
});
router.put("/product/:id", () => {});
router.delete("/product/:id", () => {});

/**
 * Update
 */

router.get("/update", () => {});
router.get("/update/:id", () => {});
router.post("/update", () => {});
router.put("/update/:id", () => {});
router.delete("/update/:id", () => {});

/**
 * UpdatePoint
 */

router.get("/updatepoint", () => {});
router.get("/updatepoint/:id", () => {});
router.post("/updatepoint", () => {});
router.put("/updatepoint/:id", () => {});
router.delete("/updatepoint/:id", () => {});

export default router;
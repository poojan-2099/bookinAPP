import express from "express";

const router= express.Router();

router.get("/", (req,res)=>{
    res.send("Hellow ");
})

export default router;

import express from "express";

const router= express.Router();

router.get("/", async  (req,res)=>{
    try{

    }catch(err){
        res.status(500).json(err)
    }
})

export default router;

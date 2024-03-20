const findCotoProducts= require("../controllers/searchControllers/findCotoProducts")
const findCarrefourProducts= require("../controllers/searchControllers/findCarrefourProducts")
const findDiaProducts= require("../controllers/searchControllers/findDiaProducts")

const searchCotoHandler= async (req, res)=>{
    const product= req.params.product
    try {
      const result= await findCotoProducts(product)
      res.status(200).json(result)
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
const searchCarrefourHandler= async (req, res)=>{
    const product= req.params.product
    try {
      const result= await findCarrefourProducts(product)
      res.status(200).json(result)
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
const searchDiaHandler= async (req, res)=>{
    const product= req.params.product
    try {
      const result= await findDiaProducts(product)
      res.status(200).json(result)
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  module.exports= {searchCotoHandler, searchCarrefourHandler, searchDiaHandler};
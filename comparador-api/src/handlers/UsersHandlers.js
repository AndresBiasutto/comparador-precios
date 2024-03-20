const getUser = require("../controllers/User/getUsers");
const createUser= require("../controllers/User/newUser");
const findSearch= require("../controllers/User/findSearch")

const getUserHandler = async (req, res) => {
  try {
    const user = await getUser();
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const postUserHandler = async (req, res) => {
    const data = req.body;
    try {
      const order = await createUser(data);
      res.status(200).json(order);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  };

  const searchProductHandler= async (req, res)=>{
    const search= req.params.search
    try {
      const result= await findSearch(search)
      res.status(200).json(result)
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
  const searchCotoHandler= async (req, res)=>{
    const search= req.params.search
    try {
      const result= await findCotoProducts(search)
      res.status(200).json(result)
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

module.exports={getUserHandler, postUserHandler, searchProductHandler, searchCotoHandler}
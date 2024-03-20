const { Router } = require("express");
const SearchRouter = Router();
const {
    searchCotoHandler,
    searchCarrefourHandler,
    searchDiaHandler
  } = require("../handlers/ProductsHandlers");

SearchRouter.get("/coto/:product", searchCotoHandler);
SearchRouter.get("/carrefour/:product", searchCarrefourHandler);
SearchRouter.get("/dia/:product", searchDiaHandler);



module.exports = SearchRouter;
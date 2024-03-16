const puppeteer = require("puppeteer");
const searchCarrefourProducts = require("../../services/searchCarrefourProducts");
const searchDiaProducts = require("../../services/searchDiaProducts");
const searchCotoProducts = require("../../services/searchCotoProducts");

const findSearch = async (search) => {
  const browser = await puppeteer.launch({ headless: false });
  const pageDia = await browser.newPage();
  const diaProducts = await searchDiaProducts(pageDia, search);
  const pageCarrefour = await browser.newPage();
  const carrefourProducts = await searchCarrefourProducts(
    pageCarrefour,
    search
  );
  const pageCoto = await browser.newPage();
  const CotoProducts = await searchCotoProducts(pageCoto, search);

  await browser.close();

  return [carrefourProducts, diaProducts, CotoProducts];
};

module.exports = findSearch;

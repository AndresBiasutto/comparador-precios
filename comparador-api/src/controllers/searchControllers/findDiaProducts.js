const puppeteer= require("puppeteer")
const searchDiaProducts= require("../../services/searchDiaProducts")
const DiaProducts= require("../../models/DiaProducts")

const findDiaProducts= async (product)=>{
    const browser = await puppeteer.launch({ headless: false });
    const pageDia = await browser.newPage();
    const diaProducts = await searchDiaProducts(pageDia, product);
    const productsResponse= await DiaProducts.create(diaProducts)
    await browser.close();
    return productsResponse;
}

module.exports= findDiaProducts
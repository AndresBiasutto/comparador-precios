const searchCotoProducts= require("../../services/searchCotoProducts")
const puppeteer= require("puppeteer")
const CotoProducts= require("../../models/CotoProducts")

const findCotoProducts= async (product)=>{
    const browser = await puppeteer.launch({ headless: false });
    const pageCoto = await browser.newPage();
    const Products = await searchCotoProducts(pageCoto, product);
    const productsResponse= await CotoProducts.create(Products)
    await browser.close();
    return productsResponse
}

module.exports= findCotoProducts
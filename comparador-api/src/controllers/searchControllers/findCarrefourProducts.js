const puppeteer= require("puppeteer")
const searchCarrefourProducts= require("../../services/searchCarrefourProducts")
const CarrefourProducts= require("../../models/CarrefourProducts")

const findCarrefourProducts= async (product)=>{
    const browser = await puppeteer.launch({ headless: false });
    const pageCarrefour = await browser.newPage();
    const Products = await searchCarrefourProducts(pageCarrefour, product);
    const productsResponse= await CarrefourProducts.create(Products)
    await browser.close();
    return productsResponse
}

module.exports= findCarrefourProducts
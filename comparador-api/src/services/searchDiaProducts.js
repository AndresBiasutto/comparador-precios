const searchDiaProducts = async (page, search) => {
  await page.goto("https://diaonline.supermercadosdia.com.ar/");
  await page.waitForSelector(".diaio-region-locator-v2-0-x-sc__paragraph");
  await page.type(".vtex-styleguide-9-x-input", search);
  await page.keyboard.press("Enter");
  await page.waitForSelector(".vtex-search-result-3-x-galleryItem");

  const title = await page.title();

  const diaProducts = await page.evaluate(() => {
    const finalProductList = {
      store: "Dia",
      products: [],
    };

    const nodeList = document.querySelectorAll(
      ".vtex-search-result-3-x-galleryItem"
    );
    const products = [...nodeList].map((node) => {
      const prodName = node.querySelector(
        ".vtex-product-summary-2-x-productBrand"
      ).innerText;
      const prodPrice = node.querySelector(
        ".vtex-product-price-1-x-currencyContainer"
      ).innerText;
      const prodImg = node.querySelector(
        ".vtex-product-summary-2-x-imageNormal"
      ).src;
      const prodLink= node.querySelector(
        ".vtex-product-summary-2-x-clearLink"
      ).href

      return {
        name: prodName,
        price: prodPrice,
        img: prodImg,
        link: prodLink
      };
    });
finalProductList.products= products
    return finalProductList;
  });

  return diaProducts;
};
module.exports = searchDiaProducts;

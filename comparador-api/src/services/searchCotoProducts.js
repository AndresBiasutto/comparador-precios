const searchCotoProducts = async (page, search) => {
  await page.goto("https://www.cotodigital3.com.ar/");
  //await page.waitForSelector(".diaio-region-locator-v2-0-x-sc__paragraph");
  await page.type(".atg_store_searchInput", search);
  await page.keyboard.press("Enter");
  await page.waitForSelector("#products");

  const title = await page.title();

  const cotoProducts = await page.evaluate(() => {
    const finalProductList = {
      store: "Coto",
      products: [],
    };
    const nodeList = document.querySelectorAll("#products > .clearfix");
    console.log(nodeList);
    const products = [...nodeList].map((node) => {
      const prodName = node.querySelector(".span_productName").innerText;
      // Limpiar el precio
      const prodPriceNode = node.querySelector(
        ".atg_store_productPrice > .atg_store_newPrice"
      );
      const prodPriceText = prodPriceNode.textContent.trim(); // Eliminar espacios en blanco al inicio y final
      const prodPrice = prodPriceText.replace(/\n/g, ""); // Eliminar todos los caracteres que no sean dígitos
      const prodImg = node.querySelector("img").src;

      return {
        name: prodName,
        price: prodPrice,
        img: prodImg,
      };
    });
    finalProductList.products= products
    return finalProductList;
  });

  return cotoProducts;
};
module.exports = searchCotoProducts;

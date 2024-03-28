const searchCarrefourProducts = async (page, search) => {
  await page.setViewport({
    width: 1600,
    height: 900,
  });
  await page.goto("https://www.carrefour.com.ar/");
  await page.waitForSelector(".vtex-styleguide-9-x-input");
  await new Promise((r) => setTimeout(r, 4000));
  await page.type(".vtex-styleguide-9-x-input", search);
  await page.keyboard.press("Enter");
  await new Promise((s) => setTimeout(s, 7000));

  const title = await page.title();

  const carrefourProducts = await page.evaluate(() => {
    const nodeList = document.querySelectorAll(
      ".vtex-product-summary-2-x-container > a"
    );
    const products = [];
    const finalProductList = {
      store: "Carrefour",
      products: [],
    };

    nodeList.forEach((node) => {
      const productNameElement = node.querySelector(
        ".vtex-product-summary-2-x-productBrand"
      );
      const productPrizeElement = node.querySelector(
        ".vtex-flex-layout-0-x-flexColChild--wrapPrice"
      );
      const productImgElement = node.querySelector(
        ".vtex-product-summary-2-x-image"
      );
      const productLinkElement = node.querySelector(
        "a"
      );
      const productName = productNameElement
        ? productNameElement.innerText.trim()
        : "Product not found";
      const productPrize = productPrizeElement
        ? productPrizeElement.innerText.trim()
        : "Prize not found";
      const productImg = productImgElement
        ? productImgElement.src
        : "image not found";
      const productLink = productLinkElement
        ? productLinkElement.href
        : "link not found";

      const finalProd = {
        name: productName,
        price: productPrize,
        img: productImg,
        link: productLink,
      };

      products.push(finalProd);
    });
    finalProductList.products = products;
    return finalProductList;
  });

  return carrefourProducts;
};

module.exports = searchCarrefourProducts;

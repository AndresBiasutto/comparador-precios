const searchCarrefourProducts = async (page, search) => {
  await page.goto("https://www.carrefour.com.ar/");
  await page.waitForSelector(".vtex-styleguide-9-x-input");
  await new Promise((r) => setTimeout(r, 4000));
  await page.type(".vtex-styleguide-9-x-input", search);
  await page.keyboard.press("Enter");
  await page.waitForSelector(
    'span[data-specification-group="leyDeGondolas"][data-specification-name="pricePerUnit"]'
  );

  const title = await page.title();

  const carrefourProducts = await page.evaluate(() => {
    const nodeList = document.querySelectorAll(
      ".valtech-carrefourar-product-summary-status-0-x-container"
    );
    const products = [];

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
      const productName = productNameElement
        ? productNameElement.innerText.trim()
        : "Product name not found";
      const productPrize = productPrizeElement
        ? productPrizeElement.innerText.trim()
        : "Prize name not found";
      const productImg = productImgElement
        ? productImgElement.src
        : "image name not found";

      const finalProd = {
        store: "Carrefour",
        product: {
          name: productName,
          price: productPrize,
          img: productImg,
        },
      };

      products.push(finalProd);
    });

    return products;
  });

  return carrefourProducts;
};

module.exports= searchCarrefourProducts;
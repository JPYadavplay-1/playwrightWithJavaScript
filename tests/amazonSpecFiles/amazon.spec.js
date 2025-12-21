import { test, expect } from '@playwright/test';
import { HomePage } from './testAmazonFixtures.spec'
import { AmazonResultsPage } from '../../pages/amazonResult.page';
import { AmazonProductPage } from '../../pages/amazonProduct.page';

test('Amazon POM with .env & BasePage', async ({ page }) => {
  test.setTimeout(10*1000)// timeout for test 
  const home = new HomePage(page);
  const results = new AmazonResultsPage(page);

  await home.openHomePage();
  await home.acceptCookiesIfPresent();
  await home.searchProduct();

  // await results.verifyResultsLoaded();
  // await results.openFirstProduct();

  // // Handle new tab
  // const productTab = page.context().pages().pop();
  // const product = new AmazonProductPage(productTab);

  // await product.verifyProductDetails();
  // await expect(product.productTitle).toBeVisible();
});

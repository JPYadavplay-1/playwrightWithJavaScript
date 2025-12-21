import { test, expect } from '@playwright/test';

test('Amazon full POM flow', async ({ homePage, resultsPage, productPage }) => {
  await homePage.openHomePage();
  await homePage.acceptCookiesIfPresent();
  await homePage.searchProduct();

  // await resultsPage.selectFirstProduct();
  // await productPage.addToCart();
});

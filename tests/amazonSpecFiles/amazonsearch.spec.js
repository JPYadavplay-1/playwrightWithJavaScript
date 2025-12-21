require('dotenv').config();
const { test, expect } = require('../../fixtures/amazonhome.fixtures');

test('validate search and suggestion click', async ({ amazonSearchPage }) => {
  await amazonSearchPage.navigate();

  await amazonSearchPage.typeSearchText('cricket bat');

  const suggestions = await amazonSearchPage.waitForSuggestions();
  await expect(suggestions.first()).toBeVisible();

  await amazonSearchPage.clickContainsMatch('Cricket');
});

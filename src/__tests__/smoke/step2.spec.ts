import { expect, test } from '../../fixtures/mostlyaiFixtures';

import { search_value } from '../../test-data/data.json';

/**
 * TEST CASE 2
 * 
 * Go to page https://mostly.ai/
 * Click the "Search" button
 * Type "sythetic" (wrong spelling of synthetic) in search field
 * Press Enter
 * Verify if the following information is displayed “Sorry, no results for: sythetic”
 */

test('Verify search information', async ({ app }) => {
  const { search, searchResults } = app;

  await app.open();
  await search.setValueToSearch(search_value);
  await search.submitSearchRequest();
  expect(await searchResults.getSearchResultsInformation()).toContain('Sorry, no results for:');
  expect(await searchResults.getSearchResultsInformation()).toContain('sythetic');
});
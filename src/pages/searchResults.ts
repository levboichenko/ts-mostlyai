import BasePage from './base';

export class SearchResultsPage extends BasePage {
  private searchResultsInformation = this.locator('.search-results-header');


  async getSearchResultsInformation(index = 0) {
    const value = await this.searchResultsInformation.nth(index).innerText();
    const text = value.trim();
    return text;
  }
}

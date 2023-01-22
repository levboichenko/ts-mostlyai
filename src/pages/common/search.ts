import BasePage from '../base';

export class SearchComponent extends BasePage {
  private searchBtn = this.locator('[aria-label="Open search"]');
  private searchInput = this.locator('.oxy-header-container [type="search"]');

  async setValueToSearch(value: string): Promise<void> {
    await this.searchBtn.click();
    return await this.searchInput.fill(value);
  }

  async submitSearchRequest(): Promise<void> {
    await this.page.keyboard.press('Enter');
  }
}

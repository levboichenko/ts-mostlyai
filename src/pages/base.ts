import { Locator, Page, expect } from '@playwright/test';

import { TIMEOUTS } from '../test-data/constants';

export default abstract class BasePage {
  public page: Page;
  protected pageIndicator: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageIndicator = this.locator('body');
  }

  public locator(
    selector: string,
    options?: {
      has?: Locator;
      hasText?: string | RegExp;
    },
  ) {
    return this.page.locator(selector, options);
  }

  public async open(path = '/'): Promise<void> {
    await this.page.goto(path);
  }

  public async isOpened() {
    await this.pageIndicator.waitFor({ state: 'visible' });
  }

  public async reload(): Promise<void> {
    await this.page.evaluate(() => {
      window.location.reload();
    });
  }

  public get expect() {
    return expect(this.page);
  }

  public async focus(): Promise<void> {
    await this.page.bringToFront();
  }

  public async sleep(timeout = TIMEOUTS.medium): Promise<void> {
    await this.page.waitForTimeout(timeout);
  }

  public async pause(): Promise<void> {
    await this.page.pause();
  }

  public url(): string {
    return this.page.url();
  }

  async waitForLoad(timeout = 120_000): Promise<void> {
    await this.page.waitForLoadState('domcontentloaded', { timeout });
  }

  public async clear(element: Locator) {
    await element.click();
    await this.sleep(1000);
    await element.press('Shift+ArrowDown');
    await element.press('ArrowDown');
    const inputValue = await element.inputValue();
    for (let i = 0; i < inputValue.length; i++) {
      await element.press('Backspace');
    }
  }
}

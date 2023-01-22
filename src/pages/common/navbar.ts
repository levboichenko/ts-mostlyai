import BasePage from '../base';

export class NavbarComponent extends BasePage {
  private platformMenuLink = this.locator('.oxy-mega-menu li > [href="https://mostly.ai/synthetic-data-platform/"]');
  private syntheticDataMenuLink = this.locator('.oxy-mega-menu  li > [href="https://mostly.ai/synthetic-data/"]');
  private resourcesMenuLink = this.locator('.oxy-mega-menu  li > [href="https://mostly.ai/resources/"]');
  private companyMenuLink = this.locator('.oxy-mega-menu  li > [href="https://mostly.ai/about-us/"]');
  private contactMenuLink = this.locator('.oxy-inner-content [href="https://mostly.ai/contact/"]');

  async openContactForm() {
    // Weird behavior while hovering on links
    await this.resourcesMenuLink.hover();
    await this.companyMenuLink.hover();
    await this.contactMenuLink.click();
  }

  async getPlatformBookmark(): Promise<boolean> {
    return await this.platformMenuLink.isVisible();
  }

  async getSyncheticDataBookmark(): Promise<boolean> {
    return await this.syntheticDataMenuLink.isVisible();
  }

  async getResourcesBookmark(): Promise<boolean> {
    return await this.resourcesMenuLink.isVisible();
  }

  async getCompanyBookmark(): Promise<boolean> {
    return await this.companyMenuLink.isVisible();
  }
}

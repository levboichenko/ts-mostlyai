import { logger } from '../helpers/logger';
import BasePage from './base';

export class ContactPage extends BasePage {
  private firstNameInput = this.locator('[name="firstname"]');
  private lastNameInput = this.locator('[name="lastname"]');
  private yourBusinessEmailInput = this.locator('[name="email"]');
  private mobilePhoneNumberInput = this.locator('[name="mobilephone"]');
  private yourOrganizationInput = this.locator('[name="company"]');
  private countrySelector = this.locator('[name="country"]');
  private descriptionTextArea = this.locator('[name="message"]');
  private marketingOfferUpdatesCheckbox = this.locator('.hs-form-booleancheckbox input[type=checkbox]');
  private submitBtn = this.locator('.hs_submit');
  private contactForm = this.locator('.has-decor');

  async getBackgroundColorSubmitBtn() {
    const btn = this.page.locator('.hs_submit');
    await btn.evaluate((el) => {
      return window.getComputedStyle(el).getPropertyValue('background-image');
    })
  }

  async hoverOnContactForm() {
    await this.contactForm.hover();
  }

  async setFirstName(value: string): Promise<void> {
    await this.firstNameInput.type(value);
  }

  async setLastName(value: string): Promise<void> {
    await this.lastNameInput.type(value);
  }

  async setBusinessEmail(value: string): Promise<void> {
    await this.yourBusinessEmailInput.type(value);
  }

  async setMobilePhoneNumber(value: string): Promise<void> {
    await this.mobilePhoneNumberInput.type(value);
  }

  async setOrganizationName(value: string): Promise<void> {
    await this.yourOrganizationInput.type(value);
  }

  async selectCountry(value: string): Promise<void> {
    await this.countrySelector.selectOption(value);
  }

  async setTextToDescription(value: string): Promise<void> {
    await this.descriptionTextArea.fill(value);
  }

  async applyMarketingOffersUpdates(): Promise<void> {
    return await this.marketingOfferUpdatesCheckbox.check();
  }

  async hoverOnSubmitBtn() {
    await this.submitBtn.hover();
  }
}

import { test } from '../../fixtures/mostlyaiFixtures';

import { faker } from '@faker-js/faker';

/**
 * TEST CASE 3
 * 
 * Go to page https://mostly.ai/
 * Click “Contact” item under the “Company” bookmark
 * Fill following fields:
a. First Name
b. Last Name
c. Your Business Email
d. Mobile Phone Number
d. Mobile Phone Number
e. Your Organization
f. Country/Region
g. Description Field
 * Check “Marketing offers and updates” checkbox
 * Hover over “Send Message” button, but do not click it
 */

test('Verify contact form', async ({ app }) => {
  const { navbar, contact } = app;

  await app.open();
  await navbar.openContactForm();
  await contact.hoverOnContactForm();
  await contact.setFirstName(faker.name.firstName());
  await contact.setLastName(faker.name.lastName());
  await contact.setBusinessEmail(faker.internet.email());
  await contact.setMobilePhoneNumber(faker.phone.number('+48 91 ### ## ##'));
  await contact.setOrganizationName(faker.random.word());
  await contact.selectCountry("Austria");
  await contact.setTextToDescription(faker.lorem.lines(2));
  await contact.applyMarketingOffersUpdates();
  await contact.hoverOnSubmitBtn();
});


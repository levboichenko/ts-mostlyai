import { Page } from '@playwright/test';

import BasePage from '../pages/base';
import { NavbarComponent } from '../pages/common/navbar';
import { SearchComponent } from '../pages/common/search';
import { ContactPage } from '../pages/contactPage';
import { SearchResultsPage } from '../pages/searchResults';

export default class MostlyAI extends BasePage {
  // components
  readonly navbar: NavbarComponent;
  readonly search: SearchComponent;

  //pages
  readonly searchResults: SearchResultsPage;
  readonly contact: ContactPage;

  constructor(page: Page) {
    super(page);

    // components
    this.navbar = new NavbarComponent(this.page);
    this.search = new SearchComponent(this.page);

    // pages
    this.searchResults = new SearchResultsPage(this.page);
    this.contact = new ContactPage(this.page);
  }
}

import { expect, Page } from '@playwright/test';

export class LoginPageObject {
  private page: Page;

  // Selectors (public for test access)
  public usernameInput = '#username';
  public passwordInput = '#password';
  public submitButton = '#submit';
  public errorMessage = '#error';
  public successMessage = 'h1';

  constructor(page: Page) {
    this.page = page;
  }

  // Methods
  async navigateToLoginPage() {
    await this.page.goto('/practice-test-login/');
  }

  async fillUsername(username: string) {
    await this.page.fill(this.usernameInput, username);
  }

  async fillPassword(password: string) {
    await this.page.fill(this.passwordInput, password);
  }

  async clickLoginButton() {
    await this.page.click(this.submitButton);
  }

  async verifyURLContains(fragment: string) {
   await expect(this.page).toHaveURL(new RegExp(`${fragment}`));
  }

  async verifyInputsVisible() {
    await expect(this.page.locator(this.usernameInput)).toBeVisible();
    await expect(this.page.locator(this.passwordInput)).toBeVisible();
  }
}
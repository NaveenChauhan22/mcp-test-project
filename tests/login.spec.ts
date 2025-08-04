import { test, expect } from '@playwright/test';
import { LoginPageObject } from '../pageObjects/loginPageObject';

// Test data and expected values
const VALID_USERNAME = 'student';
const VALID_PASSWORD = 'Password123';
const INVALID_USERNAME = 'invalidUser';
const INVALID_PASSWORD = 'wrongPassword';
const UPPERCASE_USERNAME = 'STUDENT';
const LOWERCASE_PASSWORD = 'password123';
const WHITESPACE_USERNAME = ' student ';
const WHITESPACE_PASSWORD = ' Password123 ';
const EXPECTED_URL_FRAGMENT = 'logged-in-successfully';
const EXPECTED_SUCCESS_TEXT = 'Logged In Successfully';
const EXPECTED_USERNAME_ERROR = 'Your username is invalid!';
const EXPECTED_PASSWORD_ERROR = 'Your password is invalid!';

test.describe('Login Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/practice-test-login/');
  });

  test('Successful login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPageObject(page);
    await loginPage.fillUsername(VALID_USERNAME);
    await loginPage.fillPassword(VALID_PASSWORD);
    await loginPage.clickLoginButton();
    await loginPage.verifyURLContains(EXPECTED_URL_FRAGMENT);
    await expect(page.locator(loginPage.successMessage)).toHaveText(EXPECTED_SUCCESS_TEXT);
  });

  test('Unsuccessful login with invalid username', async ({ page }) => {
    const loginPage = new LoginPageObject(page);
    await loginPage.fillUsername(INVALID_USERNAME);
    await loginPage.fillPassword(VALID_PASSWORD);
    await loginPage.clickLoginButton();
    await expect(page.locator(loginPage.errorMessage)).toHaveText(EXPECTED_USERNAME_ERROR);
  });

  test('Unsuccessful login with invalid password', async ({ page }) => {
    const loginPage = new LoginPageObject(page);
    await loginPage.fillUsername(VALID_USERNAME);
    await loginPage.fillPassword(INVALID_PASSWORD);
    await loginPage.clickLoginButton();
    await expect(page.locator(loginPage.errorMessage)).toHaveText(EXPECTED_PASSWORD_ERROR);
  });

  test('Unsuccessful login with invalid username and password', async ({ page }) => {
    const loginPage = new LoginPageObject(page);
    await loginPage.fillUsername(INVALID_USERNAME);
    await loginPage.fillPassword(INVALID_PASSWORD);
    await loginPage.clickLoginButton();
    await expect(page.locator(loginPage.errorMessage)).toHaveText(EXPECTED_USERNAME_ERROR);
  });

  test('Unsuccessful login with empty username and password', async ({ page }) => {
    const loginPage = new LoginPageObject(page);
    await loginPage.fillUsername('');
    await loginPage.fillPassword('');
    await loginPage.clickLoginButton();
    await expect(page.locator(loginPage.errorMessage)).toHaveText(EXPECTED_USERNAME_ERROR);
  });

  test('Unsuccessful login with empty username', async ({ page }) => {
    const loginPage = new LoginPageObject(page);
    await loginPage.fillUsername('');
    await loginPage.fillPassword(VALID_PASSWORD);
    await loginPage.clickLoginButton();
    await expect(page.locator(loginPage.errorMessage)).toHaveText(EXPECTED_USERNAME_ERROR);
  });

  test('Unsuccessful login with empty password', async ({ page }) => {
    const loginPage = new LoginPageObject(page);
    await loginPage.fillUsername(VALID_USERNAME);
    await loginPage.fillPassword('');
    await loginPage.clickLoginButton();
    await expect(page.locator(loginPage.errorMessage)).toHaveText(EXPECTED_PASSWORD_ERROR);
  });

  test('Case sensitivity for username and password', async ({ page }) => {
    const loginPage = new LoginPageObject(page);
    await loginPage.fillUsername(UPPERCASE_USERNAME);
    await loginPage.fillPassword(VALID_PASSWORD);
    await loginPage.clickLoginButton();
    await expect(page.locator(loginPage.errorMessage)).toHaveText(EXPECTED_USERNAME_ERROR);
    await loginPage.fillUsername(VALID_USERNAME);
    await loginPage.fillPassword(LOWERCASE_PASSWORD);
    await loginPage.clickLoginButton();
    await expect(page.locator(loginPage.errorMessage)).toHaveText(EXPECTED_PASSWORD_ERROR);
  });

  test('Leading/trailing whitespace in credentials', async ({ page }) => {
    const loginPage = new LoginPageObject(page);
    await loginPage.fillUsername(WHITESPACE_USERNAME);
    await loginPage.fillPassword(WHITESPACE_PASSWORD);
    await loginPage.clickLoginButton();
    await expect(page.locator(loginPage.errorMessage)).toHaveText(EXPECTED_USERNAME_ERROR);
  });

  test('Tab keyboard navigation', async ({ page, browserName }) => {
    const loginPage = new LoginPageObject(page);
    const username = page.locator(loginPage.usernameInput);
    const password = page.locator(loginPage.passwordInput);
    const submit = page.locator(loginPage.submitButton);
    await username.focus();
    await page.keyboard.press('Tab');
    await expect(password).toBeFocused();
    await page.keyboard.press('Tab');
    if (browserName !== 'webkit') {
      await expect(submit).toBeFocused();
    }
  });

  test('Password masking', async ({ page }) => {
    const loginPage = new LoginPageObject(page);
    const password = page.locator(loginPage.passwordInput);
    await expect(password).toHaveAttribute('type', 'password');
  });

  test('Error message clarity and clearing', async ({ page }) => {
    const loginPage = new LoginPageObject(page);
    await loginPage.fillUsername(INVALID_USERNAME);
    await loginPage.fillPassword(INVALID_PASSWORD);
    await loginPage.clickLoginButton();
    await expect(page.locator(loginPage.errorMessage)).toBeVisible();
    await loginPage.fillUsername(VALID_USERNAME);
    await loginPage.fillPassword(VALID_PASSWORD);
    await loginPage.clickLoginButton();
    await expect(page.locator(loginPage.errorMessage)).not.toBeVisible();
    await expect(page.locator(loginPage.successMessage)).toHaveText(EXPECTED_SUCCESS_TEXT);
  });

  test('Refresh after failed login clears data', async ({ page }) => {
    const loginPage = new LoginPageObject(page);
    await loginPage.fillUsername(INVALID_USERNAME);
    await loginPage.fillPassword(INVALID_PASSWORD);
    await loginPage.clickLoginButton();
    await expect(page.locator(loginPage.errorMessage)).toBeVisible();
    await page.reload();
    await expect(page.locator(loginPage.usernameInput)).toHaveValue('');
    await expect(page.locator(loginPage.passwordInput)).toHaveValue('');
    await expect(page.locator(loginPage.errorMessage)).not.toHaveClass(/show/);
  });

  test('Back navigation after logout', async ({ page }) => {
    const loginPage = new LoginPageObject(page);
    await loginPage.fillUsername(VALID_USERNAME);
    await loginPage.fillPassword(VALID_PASSWORD);
    await loginPage.clickLoginButton();
    await loginPage.verifyURLContains(EXPECTED_URL_FRAGMENT);
    await page.click('a:has-text("Log out")');
    await loginPage.verifyInputsVisible();
    await page.goBack();
    await expect(page).not.toHaveURL(new RegExp(`.*${EXPECTED_URL_FRAGMENT}.*`));
    await loginPage.verifyInputsVisible();
  });

  test('Submit via Enter key', async ({ page }) => {
    const loginPage = new LoginPageObject(page);
    await loginPage.fillUsername(VALID_USERNAME);
    await loginPage.fillPassword(VALID_PASSWORD);
    await page.keyboard.press('Enter');
    await loginPage.verifyURLContains(EXPECTED_URL_FRAGMENT);
    await expect(page.locator(loginPage.successMessage)).toHaveText(EXPECTED_SUCCESS_TEXT);
  });

  test('Logout returns to login screen and fields are empty', async ({ page }) => {
    const loginPage = new LoginPageObject(page);
    await loginPage.fillUsername(VALID_USERNAME);
    await loginPage.fillPassword(VALID_PASSWORD);
    await loginPage.clickLoginButton();
    await loginPage.verifyURLContains(EXPECTED_URL_FRAGMENT);
    await expect(page.locator(loginPage.successMessage)).toHaveText(EXPECTED_SUCCESS_TEXT);
    await page.click('a:has-text("Log out")');
    await loginPage.verifyInputsVisible();
    await expect(page.locator(loginPage.usernameInput)).toHaveValue('');
    await expect(page.locator(loginPage.passwordInput)).toHaveValue('');
  });

  test('Logout after successful login returns to login screen', async ({ page }) => {
    const loginPage = new LoginPageObject(page);
    await loginPage.fillUsername(VALID_USERNAME);
    await loginPage.fillPassword(VALID_PASSWORD);
    await loginPage.clickLoginButton();
    await loginPage.verifyURLContains(EXPECTED_URL_FRAGMENT);
    await expect(page.locator(loginPage.successMessage)).toHaveText(EXPECTED_SUCCESS_TEXT);
    await page.click('a:has-text("Log out")');
    await loginPage.verifyInputsVisible();
  });
});
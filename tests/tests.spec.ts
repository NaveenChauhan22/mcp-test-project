import { test, expect, chromium, Browser, Page } from '@playwright/test';

const BASE_URL = '/practice-test-login/'; // Use path since baseURL is set in playwright.config.ts
const VALID_USERNAME = 'validUser'; // Replace with actual valid username
const VALID_PASSWORD = 'validPass'; // Replace with actual valid password
const INVALID_USERNAME = 'invalidUser';
const INVALID_PASSWORD = 'invalidPass';

async function login(page: Page, username: string, password: string) {
  await page.goto(BASE_URL);
  await page.fill('input[name="username"]', username);
  await page.fill('input[name="password"]', password);
  await page.click('button[type="submit"]');
}

test.describe('Manual Test Cases', () => {
  test('Valid Login', async ({}, testInfo) => {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(BASE_URL);
    await page.fill('input[name="username"]', VALID_USERNAME);
    expect(await page.inputValue('input[name="username"]')).toBe(VALID_USERNAME);
    await page.fill('input[name="password"]', VALID_PASSWORD);
    expect(await page.inputValue('input[name="password"]')).toBe(VALID_PASSWORD);
    await page.click('button[type="submit"]');
    await page.waitForURL('**/dashboard');
    expect(page.url()).toContain('/dashboard');
    await browser.close();
  });

  test('Logout Functionality', async ({}, testInfo) => {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();
    await login(page, VALID_USERNAME, VALID_PASSWORD);
    await page.waitForURL('**/dashboard');
    await page.click('button#logout');
    await page.waitForURL('**/login');
    expect(page.url()).toContain('/login');
    await browser.close();
  });

  test('Invalid Username', async ({}, testInfo) => {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(BASE_URL);
    await page.fill('input[name="username"]', INVALID_USERNAME);
    expect(await page.inputValue('input[name="username"]')).toBe(INVALID_USERNAME);
    await page.fill('input[name="password"]', VALID_PASSWORD);
    expect(await page.inputValue('input[name="password"]')).toBe(VALID_PASSWORD);
    await page.click('button[type="submit"]');
    const errorMsg = await page.textContent('.error-message');
    expect(errorMsg).toContain('Your username is invalid!');
    await browser.close();
  });

  test('Invalid Password', async ({}, testInfo) => {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(BASE_URL);
    await page.fill('input[name="username"]', VALID_USERNAME);
    expect(await page.inputValue('input[name="username"]')).toBe(VALID_USERNAME);
    await page.fill('input[name="password"]', INVALID_PASSWORD);
    expect(await page.inputValue('input[name="password"]')).toBe(INVALID_PASSWORD);
    await page.click('button[type="submit"]');
    const errorMsg = await page.textContent('.error-message');
    expect(errorMsg).toContain('Your password is invalid!');
    await browser.close();
  });

  test('Both Username and Password Invalid', async ({}, testInfo) => {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(BASE_URL);
    await page.fill('input[name="username"]', INVALID_USERNAME);
    expect(await page.inputValue('input[name="username"]')).toBe(INVALID_USERNAME);
    await page.fill('input[name="password"]', INVALID_PASSWORD);
    expect(await page.inputValue('input[name="password"]')).toBe(INVALID_PASSWORD);
    await page.click('button[type="submit"]');
    const errorMsg = await page.textContent('.error-message');
    expect(errorMsg).toContain('Your username is invalid!');
    await browser.close();
  });

  test('Empty Username Field', async ({}, testInfo) => {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(BASE_URL);
    await page.fill('input[name="username"]', '');
    await page.fill('input[name="password"]', VALID_PASSWORD);
    await page.click('button[type="submit"]');
    const errorMsg = await page.textContent('.error-message');
    expect(errorMsg).toContain('Your username is invalid!');
    await browser.close();
  });

  test('Empty Password Field', async ({}, testInfo) => {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(BASE_URL);
    await page.fill('input[name="username"]', VALID_USERNAME);
    await page.fill('input[name="password"]', '');
    await page.click('button[type="submit"]');
    const errorMsg = await page.textContent('.error-message');
    expect(errorMsg).toContain('Your password is invalid!');
    await browser.close();
  });

  test('Both Fields Empty', async ({}, testInfo) => {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(BASE_URL);
    await page.fill('input[name="username"]', '');
    await page.fill('input[name="password"]', '');
    await page.click('button[type="submit"]');
    const errorMsg = await page.textContent('.error-message');
    expect(errorMsg).toContain('Your username is invalid!');
    await browser.close();
  });

  test('Case Sensitivity Check', async ({}, testInfo) => {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(BASE_URL);
    await page.fill('input[name="username"]', VALID_USERNAME.toUpperCase());
    await page.fill('input[name="password"]', VALID_PASSWORD.toUpperCase());
    await page.click('button[type="submit"]');
    const errorMsg = await page.textContent('.error-message');
    expect(errorMsg).not.toBeNull();
    await browser.close();
  });

  test('Whitespace Handling', async ({}, testInfo) => {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(BASE_URL);
    await page.fill('input[name="username"]', ` ${VALID_USERNAME} `);
    await page.fill('input[name="password"]', ` ${VALID_PASSWORD} `);
    await page.click('button[type="submit"]');
    const errorMsg = await page.textContent('.error-message');
    expect(errorMsg).not.toBeNull();
    await browser.close();
  });

  test('Usability: Tab Navigation', async ({}, testInfo) => {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(BASE_URL);
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    // Add more tab checks as needed
    // Ideally, check focus order and accessibility
    await browser.close();
  });

  test('Usability: Password Masking', async ({}, testInfo) => {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(BASE_URL);
    await page.fill('input[name="password"]', VALID_PASSWORD);
    const inputType = await page.getAttribute('input[name="password"]', 'type');
    expect(inputType).toBe('password');
    await browser.close();
  });

  test('Usability: Error Message Clarity', async ({}, testInfo) => {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(BASE_URL);
    await page.fill('input[name="username"]', INVALID_USERNAME);
    await page.fill('input[name="password"]', INVALID_PASSWORD);
    await page.click('button[type="submit"]');
    const errorMsg = await page.textContent('.error-message');
    expect(errorMsg).not.toBeNull();
    await page.fill('input[name="username"]', VALID_USERNAME);
    await page.fill('input[name="password"]', VALID_PASSWORD);
    await page.click('button[type="submit"]');
    const errorMsgAfter = await page.textContent('.error-message');
    expect(errorMsgAfter).toBe('');
    await browser.close();
  });
});

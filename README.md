# MCP Test Project

This project demonstrates manual and automated testing of the Practice Test Automation login page using Playwright and the Model Context Protocol (MCP).

## Project Structure

- `manual-testing/` — Contains manual test cases, test plans, results, and screenshots.
  - `test-cases.md` — All manual test scenarios and steps.
  - `test-plan.md` — Manual test plan and strategy.
  - `test-results.html` — Latest manual test execution report.
  - `screenshots/` — Screenshots for failed manual test assertions.
- `playwright-report/` — Playwright automated test reports.
- `test-results/` — Error context and results for individual manual test runs.
- `tests/` — Automated Playwright test scripts (`tests.spec.ts`).
- `prompts/` — Prompt files for AI-assisted and manual test execution.
- `playwright.config.ts` — Playwright configuration.
- `tsconfig.json` — TypeScript configuration.
- `package.json` — Project dependencies and scripts.

## Manual Testing

Manual test cases are defined in `manual-testing/test-cases.md` and executed interactively using Playwright MCP. Results are documented in `manual-testing/test-results.html` with screenshots for failed assertions.

## Automated Testing

Automated tests are implemented in `tests/tests.spec.ts` using Playwright. Reports are generated in the `playwright-report/` directory.

## How to Run

### Prerequisites
- Node.js and npm installed
- Playwright installed (`npm install` and `npx playwright install`)

### Manual Test Execution
1. Follow the instructions in `prompts/manual-tests-execution.prompt.md` to execute manual tests.
2. View results in `manual-testing/test-results.html`.

### Exploratory Test Execution
1. Follow the instructions in `prompts/exploratory-ai-testing.prompt.md` to execute exploratory tests.
2. View results in `manual-testing/exploratory-testing/test-results.html`.

### Automated Test Execution
1. Run Playwright tests:
   ```bash
   npx playwright test
   ```
2. View reports in `playwright-report/`.

## Author
- Maintained by Naveen Chauhan
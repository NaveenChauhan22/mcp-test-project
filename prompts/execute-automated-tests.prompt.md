# Execute Manual Tests Prompt

## Objective
Execute each manual test case defined in `manual-testing/test-cases.md` using Chrome browser with Playwright MCP, ensuring the UI is visible (headless mode is set to false). After execution, publish a detailed test execution report in `manual-testing/test-results.md`.

## Instructions
- For each test case in `manual-testing/test-cases.md`:
  - Launch Chrome browser using Playwright MCP with `headless: false` to ensure the UI is visible during execution.
  - Follow each step as described in the test case, verifying the expectation after each step.
  - Mark the test as failed if any expectation is not met; otherwise, mark as passed.
- After all tests are executed:
  - Summarize the results in a report and publish it in `manual-testing/test-results.md`.
  - The report should include:
    - Test Case Name
    - Steps executed
    - Pass/Fail status for each expectation
    - Final Result (Passed/Failed)
    - Any relevant screenshots or error details for failed steps
    - Overwrite the existing content in `manual-testing/test-results.md` with the new results.

## Output Format
- The test execution report in `manual-testing/test-results.md` should be in Markdown and clearly structured for review.
- Example report entry:

---

### Valid Login
- **Steps Executed:**
  1. Enter valid username.
  2. Enter valid password.
  3. Click "Submit".
- **Final Result:** Passed

---

### Invalid Username
- **Steps Executed:**
  1. Enter an invalid username.
  2. Enter a valid password.
  3. Click "Submit".
     - Error message not displayed as expected.
- **Final Result:** Failed

---

## Requirements
- All tests must run on Chrome with Playwright MCP.
- UI must be visible (headless: false).
- Results must be published in `manual-testing/test-results.md` after execution.

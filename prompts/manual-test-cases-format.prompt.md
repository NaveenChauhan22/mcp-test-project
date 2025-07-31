# Manual Test Cases Format Prompt

## Objective
Create manual test cases covering all scenarios in the manual-testing/test-plan.md. Each test case should be modular, clearly structured, and ensure that the objective is only met if all steps pass. The test cases should be stored in a file named `manual-testing/test-cases.md`.

## Instructions
- Each test case must include:
  - **Test Case Name**
  - **Objective**: What the test aims to validate.
  - **Pre-requisites**: Any setup or conditions required before executing the test.
  - **Test Steps**: Numbered steps, each with a corresponding expectation.
  - **Step Expectation**: What should happen after each step. If any expectation fails, the test fails.
  - **Final Result**: If all steps and expectations pass, the objective is met.

## Output Format
Write each test case in Markdown as follows:

---

### Test Case Name
- **Objective:** [Describe the goal of the test]
- **Pre-requisites:**
  - [List any required setup, data, or environment]
- **Test Steps & Expectations:**
  1. [Step 1]
     - **Expectation:** [Expected outcome for step 1]
  2. [Step 2]
     - **Expectation:** [Expected outcome for step 2]
  ...
- **Final Result:**
  - If all expectations are met, the objective is achieved.
  - If any expectation fails, the test fails.

---

## Coverage
Test cases should cover all scenarios defined in `test-plan.md`, including:
- Valid login
- Logout
- Invalid username/password
- Empty fields
- Edge cases (case sensitivity, whitespace)
- Usability (tab navigation, password masking, error message clarity)

## Example

### Valid Login
- **Objective:** Verify that a user can log in with valid credentials.
- **Pre-requisites:**
  - User has valid username and password.
  - Browser is on the login page.
- **Test Steps & Expectations:**
  1. Enter valid username.
     - **Expectation:** Username is accepted.
  2. Enter valid password.
     - **Expectation:** Password is accepted.
  3. Click "Submit".
     - **Expectation:** User is redirected to the secure area.
- **Final Result:**
  - If all expectations are met, user is successfully logged in.
  - If any expectation fails, the test fails.

---

**Use this format for all manual test cases.**

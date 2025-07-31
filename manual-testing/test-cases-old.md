---

### Valid Login
- **Objective:** Verify that a user can log in with valid credentials.
- **Pre-requisites:**
  - User has valid username and password.
  - Browser is on the login page.
- **Test Steps & Expectations:**
  1. Enter username: `student`.
     - **Expectation:** Username is accepted.
  2. Enter password: `Password123`.
     - **Expectation:** Password is accepted.
  3. Click "Submit".
     - **Expectation:** User is redirected to the secure area/dashboard.
- **Final Result:**
  - If all expectations are met, user is successfully logged in.
  - If any expectation fails, the test fails.

---

---

### Logout Functionality
- **Objective:** Verify that a logged-in user can log out successfully.
- **Pre-requisites:**
  - User is logged in with valid credentials.
  - Browser is on the secure area/dashboard.
- **Test Steps & Expectations:**
  1. Click the "Logout" button.
     - **Expectation:** User is logged out and returned to the login page.
- **Final Result:**
  - If expectation is met, user is successfully logged out.
  - If expectation fails, the test fails.

---

### Invalid Username
- **Objective:** Ensure error handling for invalid username during login.
- **Pre-requisites:**
  - Browser is on the login page.
- **Test Steps & Expectations:**
  1. Enter an invalid username.
     - **Expectation:** Username is not accepted.
  2. Enter password: Password123.
     - **Expectation:** Password is accepted.
  3. Click "Submit".
     - **Expectation:** Error message displayed: "Your username is invalid!"
- **Final Result:**
  - If all expectations are met, error handling works for invalid username.
  - If any expectation fails, the test fails.

---

### Invalid Password
- **Objective:** Ensure error handling for invalid password during login.
- **Pre-requisites:**
  - Browser is on the login page.
- **Test Steps & Expectations:**
  1. Enter username: student.
     - **Expectation:** Username is accepted.
  2. Enter an invalid password.
     - **Expectation:** Password is not accepted.
  3. Click "Submit".
     - **Expectation:** Error message displayed: "Your password is invalid!"
- **Final Result:**
  - If all expectations are met, error handling works for invalid password.
  - If any expectation fails, the test fails.

---

### Both Username and Password Invalid
- **Objective:** Ensure error handling when both username and password are invalid.
- **Pre-requisites:**
  - Browser is on the login page.
- **Test Steps & Expectations:**
  1. Enter an invalid username.
     - **Expectation:** Username is not accepted.
  2. Enter an invalid password.
     - **Expectation:** Password is not accepted.
  3. Click "Submit".
     - **Expectation:** Error message displayed: "Your username is invalid!"
- **Final Result:**
  - If all expectations are met, error handling works for both invalid fields.
  - If any expectation fails, the test fails.

---

### Empty Username Field
- **Objective:** Ensure error handling for empty username field during login.
- **Pre-requisites:**
  - Browser is on the login page.
- **Test Steps & Expectations:**
  1. Leave the username field empty.
     - **Expectation:** Username is not accepted.
  2. Enter password: Password123.
     - **Expectation:** Password is accepted.
  3. Click "Submit".
     - **Expectation:** Error message displayed: "Your username is invalid!"
- **Final Result:**
  - If all expectations are met, error handling works for empty username field.
  - If any expectation fails, the test fails.

---

### Empty Password Field
- **Objective:** Ensure error handling for empty password field during login.
- **Pre-requisites:**
  - Browser is on the login page.
- **Test Steps & Expectations:**
  1. Enter username: student.
     - **Expectation:** Username is accepted.
  2. Leave the password field empty.
     - **Expectation:** Password is not accepted.
  3. Click "Submit".
     - **Expectation:** Error message displayed: "Your password is invalid!"
- **Final Result:**
  - If all expectations are met, error handling works for empty password field.
  - If any expectation fails, the test fails.

---

### Both Fields Empty
- **Objective:** Ensure error handling when both username and password fields are empty.
- **Pre-requisites:**
  - Browser is on the login page.
- **Test Steps & Expectations:**
  1. Leave both username and password fields empty.
     - **Expectation:** Both fields are not accepted.
  2. Click "Submit".
     - **Expectation:** Error message displayed: "Your username is invalid!"
- **Final Result:**
  - If all expectations are met, error handling works for both empty fields.
  - If any expectation fails, the test fails.

---

### Case Sensitivity Check
- **Objective:** Validate case sensitivity of login credentials.
- **Pre-requisites:**
  - User has valid credentials.
  - Browser is on the login page.
- **Test Steps & Expectations:**
  1. Enter username: STUDENT and password: PASSWORD123 (different casing).
     - **Expectation:** Login fails if credentials are case-sensitive; appropriate error message shown.
  2. Click "Submit".
     - **Expectation:** Error message is displayed if credentials are case-sensitive.
- **Final Result:**
  - If all expectations are met, case sensitivity is validated.
  - If any expectation fails, the test fails.

---

### Whitespace Handling
- **Objective:** Validate handling of leading/trailing whitespace in credentials.
- **Pre-requisites:**
  - User has valid credentials.
  - Browser is on the login page.
- **Test Steps & Expectations:**
  1. Enter username:  student  and password:  Password123  (with leading/trailing spaces).
     - **Expectation:** Login fails if spaces are not trimmed; appropriate error message shown.
  2. Click "Submit".
     - **Expectation:** Error message is displayed if spaces are not trimmed.
- **Final Result:**
  - If all expectations are met, whitespace handling is validated.
  - If any expectation fails, the test fails.

---

### Usability: Tab Navigation
- **Objective:** Ensure all login page elements are accessible via keyboard navigation.
- **Pre-requisites:**
  - Browser is on the login page.
- **Test Steps & Expectations:**
  1. Use the Tab key to navigate between fields and buttons.
     - **Expectation:** Focus moves logically; all elements are accessible via keyboard.
- **Final Result:**
  - If expectation is met, tab navigation is usable.
  - If expectation fails, the test fails.

---

### Usability: Password Masking
- **Objective:** Ensure password field masks input.
- **Pre-requisites:**
  - Browser is on the login page.
- **Test Steps & Expectations:**
  1. Enter a password in the password field.
     - **Expectation:** Password is masked (not visible as plain text).
- **Final Result:**
  - If expectation is met, password masking is working.
  - If expectation fails, the test fails.

---

### Usability: Error Message Clarity
- **Objective:** Ensure error messages are clear, visible, and disappear after correction.
- **Pre-requisites:**
  - Browser is on the login page.
- **Test Steps & Expectations:**
  1. Trigger an error (e.g., invalid credentials).
     - **Expectation:** Error message is clear and visible.
  2. Correct the error (enter valid credentials).
     - **Expectation:** Error message disappears after correction.
- **Final Result:**
  - If all expectations are met, error message clarity is validated.
  - If any expectation fails, the test fails.

---

# Practice Test Automation – Login Page Test Cases

## Functional Test Cases

### 1. Valid Login

- **Objective:** Verify user can log in with valid credentials.
- **Pre-requisites:** Browser is on the login page.
- **Test Steps & Expectations:**
  1. Enter username: `student`
      - *Expectation:* Username field accepts input.
  2. Enter password: `Password123`
      - *Expectation:* Password field accepts input.
  3. Click "Submit".
      - *Expectation:* Redirects to `/logged-in-successfully/`
      - *Expectation:* Page contains text **"Logged In Successfully"**
      - *Expectation:* "Log out" button is visible.
      - *Expectation:* Page displays the correct username in message **"Congratulations <username>. You successfully logged in!"**.
- **Final Result:** Pass if all above expectations are met.

### 2. Invalid Username

- **Objective:** Show error for invalid username.
- **Pre-requisites:** Browser is on the login page.
- **Test Steps & Expectations:**
  1. Enter username: `incorrectUser`
  2. Enter password: `Password123`
  3. Click "Submit"
      - *Expectation:* Error message: `Your username is invalid!`
      - *Expectation:* Remains on the login page.

### 3. Invalid Password

- **Objective:** Show error for invalid password.
- **Pre-requisites:** Browser is on the login page.
- **Test Steps & Expectations:**
  1. Enter username: `student`
  2. Enter password: `incorrectPassword`
  3. Click "Submit"
      - *Expectation:* Error message: `Your password is invalid!`
      - *Expectation:* Remains on the login page.

### 4. Both Username and Password Invalid

- **Objective:** Show username error if both username and password are incorrect.
- **Pre-requisites:** Browser is on the login page.
- **Test Steps & Expectations:**
  1. Enter username: `wrongUser`
  2. Enter password: `wrongPassword`
  3. Click "Submit"
      - *Expectation:* Error message: `Your username is invalid!` (username validated first).

### 5. Empty Username

- **Objective:** Show error when username is empty.
- **Test Steps & Expectations:**
  1. Leave username blank.
  2. Enter password: `Password123`
  3. Click "Submit"
      - *Expectation:* Error message: `Your username is invalid!`

### 6. Empty Password

- **Objective:** Show error when password is empty.
- **Test Steps & Expectations:**
  1. Enter username: `student`
  2. Leave password blank.
  3. Click "Submit"
      - *Expectation:* Error message: `Your password is invalid!`

### 7. Both Username and Password Empty

- **Objective:** Show username error when both fields are blank.
- **Test Steps & Expectations:**
  1. Leave both fields blank.
  2. Click "Submit"
      - *Expectation:* Error message: `Your username is invalid!`

## UI/Usability/Edge Cases

### 8. Logout Functionality

- **Objective:** Verify successful logout.
- **Pre-requisites:** User is logged in.
- **Test Steps & Expectations:**
  1. Click "Log out"
      - *Expectation:* Redirects to login page.
      - *Expectation:* Login form is present and fields are empty.

### 9. Case Sensitivity

- **Objective:** Confirm credentials are case-sensitive.
- **Test Steps & Expectations:**
  1. Enter username: `STUDENT`, password: `PASSWORD123`
  2. Click "Submit"
      - *Expectation:* Error message: `Your username is invalid!`
  3. Enter username: `student`, password: `password123`
  4. Click "Submit"
      - *Expectation:* Error message: `Your password is invalid!`

### 10. Leading/Trailing Whitespace

- **Objective:** Credentials with spaces are rejected.
- **Test Steps & Expectations:**
  1. Enter username: ` student `, password: ` Password123 `
  2. Click "Submit"
      - *Expectation:* Error message: `Your username is invalid!`

### 11. Tab Keyboard Navigation

- **Objective:** Ensure keyboard navigation is logical.
- **Test Steps & Expectations:**
  1. Focus page, use Tab key.
      - *Expectation:* Tab order: Username → Password → Submit.
      - *Expectation:* Each receives visible focus.

### 12. Password Masking

- **Objective:** Password is masked.
- **Test Steps & Expectations:**
  1. Enter any password.
      - *Expectation:* Characters are hidden (dot or asterisks shown).

### 13. Error Message Clarity & Clearing

- **Objective:** Error messages are visible, disappear after correction.
- **Test Steps & Expectations:**
  1. Enter invalid credentials, submit.
      - *Expectation:* Error message visible and clear.
  2. Enter valid credentials, submit.
      - *Expectation:* Error message disappears.
      - *Expectation:* Page shows "Logged In Successfully".

## Additional Robustness Test Cases

### 14. Refresh Behavior

- **Objective:** Refresh after failed login clears data.
- **Test Steps & Expectations:**
  1. Enter invalid credentials, attempt login.
  2. Refresh page.
      - *Expectation:* Username and password fields are cleared.
      - *Expectation:* No error message shown.

### 15. Back Navigation After Logout

- **Objective:** Secure page not accessible after logout.
- **Pre-requisites:** Browser is on the login page.
- **Test Steps & Expectations:**
  1. Enter username: `student`
      - *Expectation:* Username field accepts input.
  2. Enter password: `Password123`
      - *Expectation:* Password field accepts input.
  3. Click "Submit".
      - *Expectation:* Redirects to `/logged-in-successfully/`
      - *Expectation:* Page contains text **"Logged In Successfully"**
      - *Expectation:* "Log out" button is visible.
      - *Expectation:* Page displays the correct username in message **"Congratulations <username>. You successfully logged in!"**.
  4. Click "Log out" button.
      - *Expectation:* Redirects to login page.
      - *Expectation:* Login form is present and fields are empty.
  5. Press browser Back button.
      - *Expectation:* Access to secure page is prevented (redirected or blocked).
      - *Expectation:* Does not redirect to `/logged-in-successfully/`
      - *Expectation:* Page does not contain text **"Logged In Successfully"**

### 16. Submit via Enter Key

- **Objective:** Submit form using Enter key.
- **Test Steps & Expectations:**
  1. Enter username: `student`, password: `Password123`
  2. Press Enter key.
      - *Expectation:* Form submits as with mouse click.
      - *Expectation:* Redirects to `/logged-in-successfully/`
      - *Expectation:* Page contains text **"Logged In Successfully"**

**Notes:**

- All successful login scenarios must assert the visible text **"Logged In Successfully"** exactly.
- Error messages must match: `"Your username is invalid!"` and `"Your password is invalid!"`.
- Username is validated first for all checks. 
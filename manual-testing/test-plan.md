# Test Plan: Login Functionality

## Objective
To validate the login process, error handling, and usability of the login page.

## Test Cases

### 1. Valid Login
- **Steps:**
  1. Navigate to the login page.
  2. Enter a valid username.
  3. Enter a valid password.
  4. Click the "Submit" button.
- **Expected Result:** User is successfully logged in and redirected to the secure area/dashboard.

### 2. Logout Functionality
- **Steps:**
  1. Log in with valid credentials.
  2. Click the "Logout" button.
- **Expected Result:** User is logged out and returned to the login page.

### 3. Invalid Username
- **Steps:**
  1. Enter an invalid username.
  2. Enter a valid password.
  3. Click "Submit".
- **Expected Result:** Error message displayed: "Your username is invalid!"

### 4. Invalid Password
- **Steps:**
  1. Enter a valid username.
  2. Enter an invalid password.
  3. Click "Submit".
- **Expected Result:** Error message displayed: "Your password is invalid!"

### 5. Both Username and Password Invalid
- **Steps:**
  1. Enter an invalid username.
  2. Enter an invalid password.
  3. Click "Submit".
- **Expected Result:** Error message displayed: "Your username is invalid!"

### 6. Empty Username Field
- **Steps:**
  1. Leave the username field empty.
  2. Enter a valid password.
  3. Click "Submit".
- **Expected Result:** Error message displayed: "Your username is invalid!"

### 7. Empty Password Field
- **Steps:**
  1. Enter a valid username.
  2. Leave the password field empty.
  3. Click "Submit".
- **Expected Result:** Error message displayed: "Your password is invalid!"

### 8. Both Fields Empty
- **Steps:**
  1. Leave both username and password fields empty.
  2. Click "Submit".
- **Expected Result:** Error message displayed: "Your username is invalid!"

### 9. Case Sensitivity Check
- **Steps:**
  1. Enter valid credentials with different casing (e.g., uppercase/lowercase).
  2. Click "Submit".
- **Expected Result:** Login fails if credentials are case-sensitive; appropriate error message shown.

### 10. Whitespace Handling
- **Steps:**
  1. Enter valid credentials with leading/trailing spaces.
  2. Click "Submit".
- **Expected Result:** Login fails if spaces are not trimmed; appropriate error message shown.

### 11. Usability: Tab Navigation
- **Steps:**
  1. Use the Tab key to navigate between fields and buttons.
- **Expected Result:** Focus moves logically; all elements are accessible via keyboard.

### 12. Usability: Password Masking
- **Steps:**
  1. Enter a password in the password field.
- **Expected Result:** Password is masked (not visible as plain text).

### 13. Usability: Error Message Clarity
- **Steps:**
  1. Trigger an error (e.g., invalid credentials).
- **Expected Result:** Error message is clear, visible, and disappears after correction.

---

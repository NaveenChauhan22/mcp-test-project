---

### Valid Login
- **Steps Executed:**
  1. Enter valid username.
  2. Enter valid password.
  3. Click "Submit".
- **Final Result:** Failed
  - Error: Could not connect to http://localhost:3000/ (net::ERR_CONNECTION_REFUSED)

---

### Logout Functionality
- **Steps Executed:**
  1. Log in with valid credentials.
  2. Click the "Logout" button.
- **Final Result:** Failed
  - Error: Could not connect to http://localhost:3000/ (net::ERR_CONNECTION_REFUSED)

---

### Invalid Username
- **Steps Executed:**
  1. Enter an invalid username.
  2. Enter a valid password.
  3. Click "Submit".
- **Final Result:** Failed
  - Error: Could not connect to http://localhost:3000/ (net::ERR_CONNECTION_REFUSED)

---

### Invalid Password
- **Steps Executed:**
  1. Enter a valid username.
  2. Enter an invalid password.
  3. Click "Submit".
- **Final Result:** Failed
  - Error: Could not connect to http://localhost:3000/ (net::ERR_CONNECTION_REFUSED)

---

### Both Username and Password Invalid
- **Steps Executed:**
  1. Enter an invalid username.
  2. Enter an invalid password.
  3. Click "Submit".
- **Final Result:** Failed
  - Error: Could not connect to http://localhost:3000/ (net::ERR_CONNECTION_REFUSED)

---

### Empty Username Field
- **Steps Executed:**
  1. Leave the username field empty.
  2. Enter a valid password.
  3. Click "Submit".
- **Final Result:** Failed
  - Error: Could not connect to http://localhost:3000/ (net::ERR_CONNECTION_REFUSED)

---

### Empty Password Field
- **Steps Executed:**
  1. Enter a valid username.
  2. Leave the password field empty.
  3. Click "Submit".
- **Final Result:** Failed
  - Error: Could not connect to http://localhost:3000/ (net::ERR_CONNECTION_REFUSED)

---

### Both Fields Empty
- **Steps Executed:**
  1. Leave both username and password fields empty.
  2. Click "Submit".
- **Final Result:** Failed
  - Error: Could not connect to http://localhost:3000/ (net::ERR_CONNECTION_REFUSED)

---

### Case Sensitivity Check
- **Steps Executed:**
  1. Enter valid credentials with different casing.
  2. Click "Submit".
- **Final Result:** Failed
  - Error: Could not connect to http://localhost:3000/ (net::ERR_CONNECTION_REFUSED)

---

### Whitespace Handling
- **Steps Executed:**
  1. Enter valid credentials with leading/trailing spaces.
  2. Click "Submit".
- **Final Result:** Failed
  - Error: Could not connect to http://localhost:3000/ (net::ERR_CONNECTION_REFUSED)

---

### Usability: Tab Navigation
- **Steps Executed:**
  1. Use the Tab key to navigate between fields and buttons.
- **Final Result:** Failed
  - Error: Could not connect to http://localhost:3000/ (net::ERR_CONNECTION_REFUSED)

---

### Usability: Password Masking
- **Steps Executed:**
  1. Enter a password in the password field.
- **Final Result:** Failed
  - Error: Could not connect to http://localhost:3000/ (net::ERR_CONNECTION_REFUSED)

---

### Usability: Error Message Clarity
- **Steps Executed:**
  1. Trigger an error (e.g., invalid credentials).
  2. Correct the error (enter valid credentials).
- **Final Result:** Failed
  - Error: Could not connect to http://localhost:3000/ (net::ERR_CONNECTION_REFUSED)

---

mode: agent
description: 'Manually test a website using Playwright MCP'
tools: [playwright]
model: 'GPT-4.1'

Instructions: |
  1. Install Playwright MCP server if not already installed.
  2. Ensure the Playwright MCP server is running. If not, start it.
  3. Go to `https://practicetestautomation.com/practice-test-login/` in Chrome.
  4. Explore the website and test the login functionality.
  5. Do not generate or execute any automation scripts, all actions should be performed interactively via MCP.
  6. After the user confirms to start, do not prompt for any input or confirmation during execution; run all tests sequentially without further user interaction.
  7. After executing all tests, generate a detailed HTML report including:
     - Scenario name and description
     - Steps executed
     - Expected and actual results
     - Assertions (pass/fail)
     - Screenshots (for failures), save the screenshots in `manual-testing/exploratory-testing/screenshots/` and add links to them in the report
     - Execution time
     - Place the html report in `manual-testing/exploratory-testing/test-results.html`.
     - Overwrite the existing content in `manual-testing/exploratory-testing/test-results.html` with the new results.
     - Clear the `manual-testing/exploratory-testing/screenshots/` directory before saving new screenshots.
  8. Close the browser tabs after test execution is completed and report is generated.
  9. Stop the Playwright MCP server after all tests are executed.
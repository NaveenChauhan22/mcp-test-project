mode: agent
description: 'Execute manual tests for MCP-TEST-PROJECT'
tools:
  - changes
  - codebase
  - editFiles
  - fetch
  - findTestFiles
  - problems
  - runCommands
  - runTasks
  - runTests
  - search
  - searchResults
  - terminalLastCommand
  - terminalSelection
  - testFailure
  - playwright
  - browser_click
  - browser_close
  - browser_console_messages
  - browser_drag
  - browser_file_upload
  - browser_handle_dialog
  - browser_hover
  - browser_install
  - browser_navigate
  - browser_navigate_back
  - browser_navigate_forward
  - browser_network_requests
  - browser_pdf_save
  - browser_press_key
  - browser_resize
  - browser_select_option
  - browser_snapshot
  - browser_tab_close
  - browser_tab_list
  - browser_tab_new
  - browser_tab_select
  - browser_take_screenshot
  - browser_type
  - browser_wait_for
model: 'GPT-4.1'

- **Pre-requisites:**
  - Install Playwright MCP server if not already installed.
  - Ensure the Playwright MCP server is running. If not, start it.
  - If `manual-testing/test-results.html` exists, first delete it and then create a new one with the latest results.
  - Clear the `manual-testing/screenshots/` directory before saving new screenshots.

Instructions: |
  1. Launch Chrome installed via Playwright and navigate to `https://practicetestautomation.com/practice-test-login/`.
  2. For every scenario listed in the `manual-testing/test-cases.md` file (including all functional and usability cases):
    - Execute all scenarios sequentially, ensuring no scenario is skipped. Do not request any additional information or clarification until all scenarios are executed.
    - For each scenario:
      - Execute each step as described in the scenario.
      - Capture screenshots for failed assertions only.
      - Record the actual result and any discrepancies.
      - Append test results to the `manual-testing/test-results.html` file, with following details:
        - Scenario name and description
        - Steps executed
        - Expected and actual results
        - Assertions (pass/fail)
        - Screenshots if an assertion fails, save the screenshots in `manual-testing/screenshots/` and add links to them in the report
        - Execution time
  3. After executing all tests, update `manual-testing/test-results.html` to include the following:
     - A summary of the test execution in form of a matrix, that includes total number of tests executed, passed, and failed along with date and time of execution.
     - Highlight any critical issues found, right below the summary.
     - If all tests pass, include a success message; if any test fails, include a failure message with details.
     - Ensure the report is well-formatted and easy to read.
  4. Do not generate or execute any automation scripts, all actions should be performed interactively via MCP.
  5. Close the browser tabs after test execution is completed.
  6. Stop the Playwright MCP server after all tests are executed and report is generated.
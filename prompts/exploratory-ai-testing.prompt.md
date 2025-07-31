mode: agent
description: 'Manually test a website using Playwright MCP'
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
  - browser_wait_for_element
  - browser_wait_for_navigation
  - browser_wait_for_timeout
  - browser_wait_for_url
  - browser_wait_for_visible
  - browser_wait_for_invisible
  - browser_wait_for_console_message
  - browser_wait_for_network_idle
  - browser_wait_for_request
  - browser_wait_for_response
  - browser_wait_for_selector
  - browser_wait_for_text
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
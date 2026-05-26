---
agent: agent
description: 'Execute UI-driven exploratory login testing through Playwright MCP only'
tools: ['playwright/*']
model: 'GPT-4.1'
---

# Exploratory AI Testing Prompt

You are executing a live exploratory browser test run. Follow this prompt exactly and do not improvise.

This is not a request to inspect previous results, summarize an existing report, or execute predefined manual test cases. A successful run requires live browser interaction through Playwright MCP during this prompt execution.

Your first tool action must be a Playwright MCP browser action. Do not begin by reading this prompt file, searching the workspace, reading manual test cases, or inspecting project files. You are already inside the prompt instructions.

## Goal

Use Playwright MCP browser actions to explore and test the login page at:

`https://practicetestautomation.com/practice-test-login/`

Design and execute exploratory tests based only on what you observe in the live web UI through Playwright MCP. Produce exactly one freshly updated HTML report at:

`manual-testing/exploratory-testing/test-results.html`

The report is valid only if it is generated after live MCP browser execution in this run.

## Exploratory Scope

Explore the visible login workflow and create test ideas from the UI, page behavior, validation messages, navigation, and session behavior you observe. Cover the highest-value areas you can infer from the application:

- Successful login path.
- Invalid username and invalid password behavior.
- Empty-field behavior.
- Form submission by button and keyboard.
- Error message visibility, clarity, and clearing behavior.
- Logout and post-logout navigation behavior.
- Refresh and back-navigation behavior.
- Basic usability and accessibility signals visible through the UI, such as focus order, labels, button states, and password masking.

Do not use `manual-testing/test-cases.md` as an input. Do not read it, summarize it, or copy scenarios from it. The exploratory tests must be generated from live UI observation.

## Hard Rules

- Do not create, modify, or run any test scripts, helper scripts, specs, page objects, config files, or generated automation code.
- Do not run automated Playwright tests.
- Do not run `npx playwright test`, `npm test`, `npm run test`, `npx playwright show-report`, or any Playwright report viewer command.
- Do not launch a separate headless browser outside MCP.
- Do not open Playwright HTML reports.
- Do not read, parse, count, reuse, summarize, or trust any existing `manual-testing/exploratory-testing/test-results.html`.
- Do not use old screenshots or old report contents as evidence of test execution.
- Do not read this prompt file as a workspace file. These instructions are already loaded.
- Do not read `manual-testing/test-cases.md`.
- Do not search the workspace for this prompt, related files, existing tests, or test case definitions.
- Do not change files outside `manual-testing/exploratory-testing/test-results.html` and `manual-testing/exploratory-testing/screenshots/`.
- Do not ask the user for confirmation after execution begins. VS Code may still ask the user to trust/start the Playwright MCP server or approve individual Playwright MCP tool calls; those VS Code prompts are allowed.
- Do not offer alternate options, checklists, walkthroughs, scripts, or manual instructions.
- Do not stop early unless the target website is unreachable or the MCP browser cannot be launched.
- Do not provide the final response until the browser has been launched through MCP, exploratory tests have been executed through MCP, and `manual-testing/exploratory-testing/test-results.html` has been freshly overwritten.

## Allowed Shell Commands

Use shell commands only for setup and cleanup:

- `npm install` only if `node_modules/` is missing.
- `npm run playwright-install` only if Playwright browsers are missing.
- Commands needed to clear `manual-testing/exploratory-testing/screenshots/`.
- Commands needed to overwrite `manual-testing/exploratory-testing/test-results.html`.

Do not use shell commands to inspect existing reports, count old results, search for scripts, run Python, run `find`, run Playwright version checks, or discover alternate execution paths. No other shell commands are part of this task.

## Required Execution Procedure

1. Launch Chromium/Chrome through Playwright MCP. This must be the first tool action.
2. Navigate to `https://practicetestautomation.com/practice-test-login/` through Playwright MCP.
3. Observe the page and identify the available login form controls, navigation behavior, visible labels, expected user actions, and visible validation feedback.
4. Create exploratory test charters from the observed UI. Execute at least 10 distinct tests unless the page becomes unreachable.
5. If `node_modules/` is missing, run `npm install`. Otherwise do not install dependencies.
6. If Playwright browsers are missing, run `npm run playwright-install`. Otherwise do not install browsers.
7. Ensure the VS Code Playwright MCP server tools are available in this chat run. If VS Code prompts the user to trust/start the Playwright MCP server or approve Playwright MCP tool calls, wait for that approval and then continue. Do not run `npm run mcp-server`; VS Code manages the installed Playwright MCP server. If the Playwright MCP tools are unavailable after VS Code has had a chance to start the server, stop and use the failure response format.
8. Clear `manual-testing/exploratory-testing/screenshots/` before the test run.
9. Immediately overwrite `manual-testing/exploratory-testing/test-results.html` with a temporary placeholder that says `Exploratory MCP test run in progress` and includes the current date and time. This prevents accidental reuse of stale results.
10. Execute each exploratory test through Playwright MCP browser actions.
11. For each exploratory test:
    - Give the test a concise name/title.
    - Write a one-sentence summary of the risk or behavior being explored.
    - Record the observed steps.
    - Record the expected behavior inferred from the UI and standard login behavior.
    - Record the actual behavior observed through Playwright MCP.
    - Mark the test as passed or failed.
    - Assign failure severity when failed: Critical, High, Medium, or Low.
    - Capture screenshots only for failed tests.
    - Save failure screenshots only in `manual-testing/exploratory-testing/screenshots/`.
    - Record the Playwright MCP error log or observation statement that explains the failure. If no tool error exists, write `No Playwright MCP error log; failure based on observed UI state:` followed by the observed mismatch.
12. Generate `manual-testing/exploratory-testing/test-results.html` after all exploratory tests finish.
13. Close all browser tabs after the report is written.
14. Do not stop the VS Code-managed Playwright MCP server.

## Mandatory MCP Browser Actions

The run is incomplete unless you perform these live MCP browser actions:

- Launch a Chromium/Chrome browser through the Playwright MCP tool.
- Navigate the MCP browser to the target URL.
- Interact with the username field, password field, submit button, logout button, keyboard, refresh, and back navigation as needed by the exploratory tests.
- Observe the page after each action and use those live observations as the only source for actual results.

If you cannot launch or control the MCP browser, stop immediately and use only the failure response format below. Do not replace MCP execution with shell commands, existing reports, automation scripts, checklists, walkthroughs, options, or summaries.

## Existing Report Handling

Treat any existing `manual-testing/exploratory-testing/test-results.html` as stale and unusable. You may overwrite it, but you must not read it, summarize it, count its tests, or use it to determine pass/fail status.

Treat any existing files in `manual-testing/exploratory-testing/screenshots/` as stale and unusable. Clear the directory before the run. Only screenshots captured during this run may be linked in the report.

## Report Requirements

Generate a complete, presentable standalone HTML report with embedded CSS. Do not rely on external CSS, JavaScript, images, or chart libraries.

The report must include these sections in this order:

1. Proper title:
   - Use `Exploratory Login Test Report` as the main page title and `<h1>`.
   - Include a short subtitle that states the report was generated from live Playwright MCP exploratory testing.
2. Test execution details:
   - Date and time of execution.
   - Environment details, including target URL, browser used through MCP, execution mode, operating system if known, and tester as `AI via Playwright MCP`.
3. Test results pie chart:
   - Display Total Tests, Passed Tests, and Failed Tests.
   - Include a visual pie or donut chart using inline CSS, such as `conic-gradient`.
   - Include a legend and numeric counts.
4. Release Go/No-Go decision:
   - `No-Go` if any Critical or High severity failure exists.
   - `Go with Conditions` if failures exist but all are Medium or Low severity.
   - `Go` only if every test passed.
   - Include a short rationale tied to the observed failures and their severity.
5. Failed test details:
   - Include this section even if there are no failures.
   - For each failed test, include:
     - Test Name/Title/Summary.
     - Severity.
     - Failed step or failed expectation.
     - Failure reason.
     - Error log or observation statement from Playwright MCP.
     - Screenshot link using a relative path like `screenshots/<filename>.png`.
     - The screenshot link must be a normal clickable `<a href="screenshots/<filename>.png">` link that opens the saved screenshot.
6. Full exploratory test details:
   - Include every executed test, passed and failed.
   - Include test name/title, summary, steps, expected behavior, actual behavior, result, severity if failed, execution time, and screenshot link if failed.

## Final Response

After the run completes, respond only with the following. Do not produce this final response if MCP browser execution did not happen and the report was not freshly overwritten during this run.

- Total tests executed.
- Passed tests.
- Failed tests.
- Release decision.
- Path to `manual-testing/exploratory-testing/test-results.html`.
- Note whether screenshots were created.

## Failure Response

If live Playwright MCP browser execution is unavailable, respond only with:

`MCP browser execution failed: Playwright MCP browser control is unavailable in this environment. No exploratory tests were executed and no report was generated.`

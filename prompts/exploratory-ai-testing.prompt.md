mode: agent
description: 'Deterministically execute exploratory login tests through Playwright MCP only'
tools: [playwright]
model: 'GPT-4.1'

# Exploratory AI Testing Prompt

You are executing a live exploratory browser test run. Follow this prompt exactly and do not improvise.

This is not a request to inspect previous results. This is not a request to summarize an existing report. A successful run requires live browser interaction through Playwright MCP during this prompt execution.

## Goal

Execute all login scenarios from `manual-testing/test-cases.md` against:

`https://practicetestautomation.com/practice-test-login/`

Use Playwright MCP browser actions only for testing. Produce exactly one freshly updated HTML report at:

`manual-testing/exploratory-testing/test-results.html`

The report is valid only if it is generated after live MCP browser execution in this run.

## Hard Rules

- Do not create, modify, or run any test scripts, helper scripts, specs, page objects, config files, or generated automation code.
- Do not run automated Playwright tests.
- Do not run `npx playwright test`, `npm test`, `npm run test`, `npx playwright show-report`, or any Playwright report viewer command.
- Do not launch a separate headless browser outside MCP.
- Do not open Playwright HTML reports.
- Do not read, parse, count, reuse, summarize, or trust any existing `manual-testing/exploratory-testing/test-results.html`.
- Do not use old screenshots or old report contents as evidence of test execution.
- Do not change files outside `manual-testing/exploratory-testing/test-results.html` and `manual-testing/exploratory-testing/screenshots/`.
- Do not ask the user for confirmation after execution begins, except for the explicit `npm run mcp-server` permission gate described below.
- Do not offer alternate options, checklists, walkthroughs, scripts, or manual instructions.
- Do not skip, merge, reorder, rename, or invent scenarios.
- Do not stop early unless the target website is unreachable or the MCP browser cannot be launched.
- Do not provide the final response until the browser has been launched through MCP, all 16 scenarios have been executed through MCP, and `manual-testing/exploratory-testing/test-results.html` has been freshly overwritten.

## Allowed Shell Commands

Use shell commands only for setup and cleanup:

- `npm install` only if `node_modules/` is missing.
- `npm run playwright-install` only if Playwright browsers are missing.
- `npm run mcp-server` only if the Playwright MCP server is not already running.
- Commands needed to clear `manual-testing/exploratory-testing/screenshots/`.
- Commands needed to overwrite `manual-testing/exploratory-testing/test-results.html`.

Do not use shell commands to inspect existing reports, count old results, search for scripts, run Python, run `find`, run Playwright version checks, or discover alternate execution paths. No other shell commands are part of this task.

## Required Execution Procedure

1. Read `manual-testing/test-cases.md` only to obtain the 16 scenarios and expectations.
2. If `node_modules/` is missing, run `npm install`. Otherwise do not install dependencies.
3. If Playwright browsers are missing, run `npm run playwright-install`. Otherwise do not install browsers.
4. Ensure the Playwright MCP server is running. If it is not running, ask the user for permission to run `npm run mcp-server`. If permission is granted, start it with `npm run mcp-server` and continue without asking for more confirmation. If permission is denied or not provided, stop and use the failure response format.
5. Clear `manual-testing/exploratory-testing/screenshots/` before the test run.
6. Immediately overwrite `manual-testing/exploratory-testing/test-results.html` with a temporary placeholder that says `Exploratory MCP test run in progress` and includes the current date and time. This prevents accidental reuse of stale results.
7. Launch Chromium/Chrome through Playwright MCP. This step is mandatory.
8. Navigate to `https://practicetestautomation.com/practice-test-login/` through Playwright MCP. This step is mandatory.
9. Execute every listed scenario sequentially from scenario 1 through scenario 16 through Playwright MCP browser actions.
10. For each scenario:
    - Start from the login page unless the scenario explicitly requires another state.
    - Perform the steps exactly as written.
    - Verify every expectation exactly as written.
    - Record the actual result for each expectation.
    - Mark each assertion as passed or failed.
    - Capture screenshots only for failed assertions.
    - Save failure screenshots only in `manual-testing/exploratory-testing/screenshots/`.
11. Generate `manual-testing/exploratory-testing/test-results.html` after all scenarios finish.
12. Close all browser tabs after the report is written.
13. Stop the Playwright MCP server only if you started it during this run.

## Mandatory MCP Browser Actions

The run is incomplete unless you perform these live MCP browser actions:

- Launch a Chromium/Chrome browser through the Playwright MCP tool.
- Navigate the MCP browser to the target URL.
- Interact with the username field, password field, submit button, logout button, keyboard, refresh, and back navigation as required by the scenarios.
- Observe the page after each action and use those live observations as the only source for actual results.

If you cannot launch or control the MCP browser, stop immediately and use only the failure response format below. Do not replace MCP execution with shell commands, existing reports, automation scripts, checklists, walkthroughs, options, or summaries.

## Existing Report Handling

Treat any existing `manual-testing/exploratory-testing/test-results.html` as stale and unusable. You may overwrite it, but you must not read it, summarize it, count its scenarios, or use it to determine pass/fail status.

Treat any existing files in `manual-testing/exploratory-testing/screenshots/` as stale and unusable. Clear the directory before the run. Only screenshots captured during this run may be linked in the report.

## Report Requirements

The report must include:

- Execution date and time.
- A statement that the scenarios were executed through live Playwright MCP browser actions.
- Target URL.
- Browser used through MCP.
- Summary counts for total scenarios, passed scenarios, failed scenarios, total assertions, passed assertions, and failed assertions.
- A result section for each scenario in the same order as `manual-testing/test-cases.md`.
- For each scenario:
  - Scenario number and name.
  - Objective or description.
  - Steps executed.
  - Expected results.
  - Actual results.
  - Assertion status for each expectation.
  - Scenario execution time.
  - Links to screenshots only when assertions failed.
- Critical issues section.
- Overall status: passed only if every scenario and every assertion passed.

## Final Response

After the run completes, respond only with the following. Do not produce this final response if MCP browser execution did not happen and the report was not freshly overwritten during this run.

- Total scenarios executed.
- Passed scenarios.
- Failed scenarios.
- Path to `manual-testing/exploratory-testing/test-results.html`.
- Note whether screenshots were created.

## Failure Response

If live Playwright MCP browser execution is unavailable, respond only with:

`MCP browser execution failed: Playwright MCP browser control is unavailable in this environment. No scenarios were executed and no report was generated.`

const { test, expect } = require("@playwright/test");
const { SN_login } = require("./Commands/login.js"); // Use require for CommonJS modules

test('test', async ({ page }) => {
  await SN_login(page);
});
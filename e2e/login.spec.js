const { test, expect } = require('@playwright/test');
require('dotenv').config();
// Ensure that the environment variables are loaded correctly

//  fs module?
 const fs = require('fs');
 const path = require('path');
const logFile = path.resolve(__dirname, '../login-results.txt');
function logResult(message) {
  fs.appendFileSync(logFile, message + '\n', 'utf8');
}

// Read total number of users
const userCount = parseInt(process.env.USER_COUNT, 10);
const users = [];

for (let i = 1; i <= userCount; i++) {
  const username = process.env[`USER${i}_NAME`];
  const password = process.env[`USER${i}_PASS`];

  if (username && password) {
    users.push({ username, password });
  }
}

users.forEach(({ username, password }) => {
  test(`Login test for ${username};`, async ({ page }) => {
    const start = Date.now();
    try {
      await page.goto('https://dev311826.service-now.com'); // 2025_06_27: slows down? 
      await page.fill('#user_name', username);
      await page.fill('#user_password', password);
      await page.click('#sysverb_login');
      // await page.getByRole('textbox', { name: 'Password' }).click();
      // await page.getByRole('textbox', { name: 'Password' }).fill(password);
      await expect(page.getByRole('heading', { name: 'ServiceNow Studio' })).toBeVisible();
      // await page.locator('div').filter({ hasText: 'ServiceNow StudioThe future' }).nth(3);

      logResult(`[PASS] ${username} logged in successfully at ${new Date().toISOString()}`);
    } catch (err) {
      logResult(`[FAIL] ${username} failed to log in at ${new Date().toISOString()}`);
      throw err;
    }
    // const duration = Date.now() - start; [2025_07_01: removed]
    //  console.log(`${username} login test completed in ${duration}ms`);
    });
  });
  


// test('ServiceNow login', async ({ page }) => {
//     console.log("SN_USERNAME:", process.env.SN_USERNAME);
//     console.log("SN_PASSWORD:", process.env.SN_PASSWORD); 
    
//     await page.goto("https://dev311826.service-now.com"); 
//     await page.fill('#user_name', process.env.SN_USERNAME);
//     await page.fill('#user_password', process.env.SN_PASSWORD);
//     await page.click('#sysverb_login');
//     console.log("Current URL:", page.url());
//     await expect(page).toHaveURL(/now.*nav.*home/i); // regex!! CLutch
//     console.log("Current URL:", page.url());
//   });

  // idk why only works if passwords are displayed in console


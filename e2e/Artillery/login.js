const {SN_login} = require("../Commands/login.js"); // Use require for CommonJS modules

async function artillery_test(page) {
    await SN_login(page);
    // Add more artillery tests here if needed
    // For example, you can navigate to a specific page or perform actions
    // await page.goto('https://dev311826.service-now.com/some-page');
    // await page.click('#some-button');
    // await expect(page).toHaveURL(/some-expected-url/i);
}

module.exports = { artillery_test }; // Export the function for use in Artillery tests
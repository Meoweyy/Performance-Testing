const { expect } = require("@playwright/test");

async function SN_login(page){ 
    await page.goto('https://dev311826.service-now.com'); 
    await page.fill('#user_name',"aes.creator");
    await page.fill('#user_password', "oO$oOc$OX5l3");
    await page.click('#sysverb_login');
    await expect(page).toHaveURL(/login*_redirect.do/i);
    await expect(page).toHaveURL(/now.*nav.*ui/i, {timeout: 15000});
   // await expect(page.getByRole('button', { name: 'My ServiceNow landing page' }, {timeout: 15000})).toBeVisible();
}

module.exports = { SN_login }; 

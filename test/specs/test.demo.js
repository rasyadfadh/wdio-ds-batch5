

describe('Test saucedemo', () => {
    it('Test 1 - Login succesfully', async () => {
        await browser.url("https://www.saucedemo.com/")
        
        const usernametxtbox = await browser.$("#user-name")
        const passwordtxtbox = await browser.$("#password")
        const loginbtn = await browser.$('//input[@type="submit"]')

        await usernametxtbox.addValue("standard_user")
        await passwordtxtbox.addValue("secret_sauce")
        await loginbtn.click()
   
        await browser.pause(5000)
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        await expect(browser).toHaveTitle('Sauce Demo')

    });
});
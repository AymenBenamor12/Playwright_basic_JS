const { test, expect } = require('@playwright/test');

test.describe("iframe",()=>{
    

test('iframe ', async ({ page }) => {
  
 

 await page.goto('https://the-internet.herokuapp.com/iframe');
const frametest= page.frameLocator('#mce_0_ifr').locator('html')
 await frametest.click()
 
 await frametest.type('This is just a test typing in iframe')
 
});
})
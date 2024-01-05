const { test, expect } = require('@playwright/test');

test.describe("chek",()=>{
    

test('test', async ({ page }) => {
  
  test.setTimeout(1000)

  await page.goto('https://the-internet.herokuapp.com/checkboxes');
 await page.locator('input[type="chekbox"]').first().check()
 await page.locator('input[type="chekbox"]')(2).uncheck();

 
});
})
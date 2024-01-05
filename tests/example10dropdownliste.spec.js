const { test, expect } = require('@playwright/test');

test.describe("drop down list",()=>{
    

test('drop down list ', async ({ page }) => {
  
 

 await page.goto('https://the-internet.herokuapp.com/dropdown');
 await page.locator('#dropdown').selectOption('1')
 await page.pause()
 await expect(page.locator('#dropdown')).toHaveValue('1')
 await page.pause()
 await page.locator('#dropdown').selectOption({label:'Option 2'})
 await page.pause()
 await expect(page.locator('#dropdown')).toHaveValue('2')
 await page.pause()
});
})
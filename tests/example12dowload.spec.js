const { test, expect } = require('@playwright/test');

test.describe("download",()=>{
    

test('download ', async ({ page }) => {
  
 await page.goto('https://the-internet.herokuapp.com/download')
const [download]= await Promise.all([

    page.waitForEvent('download'),
    page.locator('text=text.txt ').click()
])
 
const path = await download.path();
const url = download.url();
console.log(path)
console.log(url)
});
})
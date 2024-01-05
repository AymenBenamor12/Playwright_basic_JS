const { test, expect } = require('@playwright/test');

test.describe("Upload",()=>{
    

test('Upload', async ({ page }) => {
  
 
const [fileChooser]= await Promise.all ([

    page.waitForEvent('filechooser'),
    page.locator('#file-upload').click()
])
 await page.goto('https://the-internet.herokuapp.com/upload');

 await page.setInputFiles('#file-upload','uploadedFiles/sample.pdf')

 await page.locator('input:has-text("Upload")').click()
 await expect(page.locator('text=File Uploaded!')).toBeVisible()
 await expect(page.locator('text=sample.pdf').click()).toBeVisible()

});
})
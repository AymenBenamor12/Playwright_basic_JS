
const { test, expect } = require('@playwright/test');

test.describe("pdf",()=>{
    

test('pdf ', async ({ page }) => {
  
 

 await page.goto('https://the-internet.herokuapp.com/');
 
});
})



//Commande : 
//npx Playwright pdf https://the-internet.herokuapp.com/ sample.pdf
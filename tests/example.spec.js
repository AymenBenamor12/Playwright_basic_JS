const { test , expect}= require ('@playwright/test');

test("First  test", async({page}) =>{

    //write testing code here 
    await page.goto('http://playwright.dev')
    await page.pause()
})


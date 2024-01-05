const { test, expect } = require('@playwright/test');

test("Testing Selectors",async({page})=>{

    await page.goto("https://demoqa.com/text-box")
    await page.pause()
    await page.locator('#userName').type(" Test Username")
    await page.pause()
    await page.locator('[placeholder="name@example.com"]').type(("testemail@test.com"))
    await page.pause()
    await page.locator('#currentAddress').type("this is the current address")
    await page.pause()
    await page.locator('#permanentAddress').type("this is the perment address")
    await page.pause()
    await page.locator('button:has-text("Submit")').click()
    await page.pause()
    
   


})
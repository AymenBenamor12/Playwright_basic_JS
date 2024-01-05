const { test, expect } = require('@playwright/test');

test("Testing Selectors",async({page})=>{

    await page.goto("https://demoqa.com/text-box")
    
    await page.locator('#userName').type(" Test Username")
    
    await page.locator('[placeholder="name@example.com"]').type(("testemail@test.com"))
    
    await page.locator('#currentAddress').type("this is the current address")
    
    await page.locator('#permanentAddress').type("this is the perment address")
    
    await page.locator('button:has-text("Submit")').click()
   await page.pause()


   await expect(page).toHaveTitle('DEMOQA')
   await page.pause()
   await expect(page).toHaveURL('https://demoqa.com/text-box')
    const name = page.locator('#name')
    const email = page.locator('#email')
    const currentAddres = page.locator('#currentAddress')
    const permantAdress = page.locator('#permanentAddress')
    const test = page.locator('#currentAddress')

    expect(test).toContainText()
    await page.pause()
    await expect(name).toBeVisible();
    await expect(name).toHaveText('Name: Test Username')
    
    await page.pause()
    await  expect(email).toBeVisible()
    await expect(email).toHaveText('Email:testemail@test.com')
    
    await page.pause()
    await  expect(currentAddres).toBeVisible()
    await expect(currentAddres).toHaveText('Current Address :this is the current address')
    
    await page.pause()
    await  expect(permantAdress).toBeVisible()
    await expect(permantAdress).toHaveText('Permananet Address :this is the perment address')



})
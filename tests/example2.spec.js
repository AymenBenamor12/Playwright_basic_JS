const { test, expect } = require('@playwright/test');


test.describe("Smoke Tests", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/')
    })
    test.afterEach(async ({ page }) => {
            console.log('this test finished');
        })
    

    test('Simple click test', async ({ page }) => {
        //skiping the test
        //test.skip(browserName === 'firefox','Working on the firefox fix')

        const Element = page.locator('text=Add/Remove Elements')
        const afElement = page.locator('text=Add Element')
        await Element.click();
        await afElement.click()
        await page.screenshot({ path: "sreenshot.png", fullPage: true })
    })

    test('Duplicate test l ', async ({ page }) => {

        await page.click('text=Add/Remove Elements');
        await page.click('text=Add Element')

    })

    test('Duplicate test 2 ', async ({ page }) => {

        await page.click('text=Add/Remove Elements');
        await page.click('text=Add Element')
    })



}) 
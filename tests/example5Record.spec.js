const { test, expect } = require('@playwright/test');

test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/');
  await page.locator('path').first().click();
  await page.locator('li').filter({ hasText: 'Text Box' }).click();
  await page.getByPlaceholder('Full Name').click();
  await page.getByPlaceholder('Full Name').fill('aaaaa');
  await page.getByPlaceholder('name@example.com').click();
  await page.getByPlaceholder('name@example.com').fill('tes@');
  await page.getByPlaceholder('Current Address').click();
  await page.getByPlaceholder('Current Address').fill('testttt');
  await page.locator('#permanentAddress').fill('tessskkk');
});
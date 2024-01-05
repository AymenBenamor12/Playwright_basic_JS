const { test, expect } = require('@playwright/test');

test.describe("emulator",()=>{
    test.use({
      viewport:{width:600,height:900}
    })
test.use({
  ...devices['iPhone 11'],
});

test('test', async ({ page }) => {
  
  test.setTimeout(1000)

  await page.goto('https://www.wikipedia.org/');
  await page.getByRole('link', { name: 'Wikidata Free knowledge base' }).click();
  await page.getByText('2023-10-09: The next Wikidata').click();
  await page.getByText('New to the wonderful world of').click();
});
})
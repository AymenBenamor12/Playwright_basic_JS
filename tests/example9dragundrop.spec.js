const { test, expect } = require('@playwright/test');

test.describe("darg and drop",()=>{
    

test('test darg and rop ', async ({ page }) => {
  
  test.setTimeout(1000)

  await page.goto('https://the-internet.herokuapp.com/drag_and_drop');
 await page.dragAndDrop('#column-a','#column-b')
 await page.pause()
 
 
});
})
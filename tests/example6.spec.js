const { test, expect } = require('@playwright/test');

 
test.describe("Authentication",()=>{

    test.use({
    
        storageState:"automationUser.json"
    })

    test.beforeEach(async({page})=>{
        await page.goto('https://qacart-todo.herokuapp.com')
    })
    test("Saving authentication",async({page})=>{
        
        await page.goto('https://qacart-todo.herokuapp.com')
        await page.locator('#email').fill("aymen.benamor@enis.tn")
        await page.locator('[data-testid="password"]').fill("@Aymen123456")
        await page.locator('#submit').click();
    
        await page.context().storageState ({path:'automationUser.json'})
    })
    
})
test("should be able to mark a todo as completed test1",async({page})=>{
    
    await page.locator('[data-testid="add"]').click();
      await page.locator('[data-testid="new-todo"]').fill('Learn Playwright');
      await page.locator('[data-testid="submit-newTask"]').click();
      await page.locator('[data-testid="complete-task"]').nth(0).click();
      const todoItem = page.locator('[data-testid="todo-item"]').nth(0);
      await expect(todoItem).toHaveCSS("background-color","rgb(33, 76, 97)");
  })
  

  test("welcome message should be displayed test 2",async({page})=>{
   
  
     
      const welcomemessage = page.locator('[data-testid="welcome"]');
      await expect(welcomemessage).toBeVisible();
  
  
})

  


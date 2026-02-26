import {test,expect} from '@playwright/test'
test("demoqa - Book Store App - Register",async function ({page}) {
    // Register
    await page.goto('https://demoqa.com/')
    await page.getByText('Book Store Application').click()
    await page.getByText('Login').click()
    await page.getByRole('button',{name:'New User'}).click()
    await page.getByPlaceholder('First Name').fill('ilham rafif',{delay:3000})
    await page.getByPlaceholder('Last Name').fill('d')
    await page.getByPlaceholder('UserName').fill('ilham20',{delay:3000})
    await page.getByPlaceholder('Password').fill('!lh4mk0pl4kZ',{delay:3000})
    await page.getByRole('button',{name:'Register'}).click()
})

test.only("demoqa - Book Store App - Login",async function ({page}) {
    await page.goto('https://demoqa.com/')
    await page.getByText('Book Store Application').click()
    await page.getByRole('button',{name:'Login'}).click()
    await page.getByRole('button',{name:'New User'}).click()
    await page.getByRole('button',{name:'Back to Login'}).click()
    await page.getByPlaceholder('UserName').fill('ilham20',{delay:3000})
    await page.getByPlaceholder('Password').fill('!lh4mk0pl4kZ',{delay:3000})
    await page.getByRole('button',{name:'Login'}).click()
})
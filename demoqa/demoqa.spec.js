import {test,expect} from '@playwright/test'
test("demoqa - Text Box - Positive Case",async function ({page}) {
    await page.goto('https://demoqa.com/text-box')
    await page.getByPlaceholder('Full Name').fill('Ilham',{delay:2000}) // fill full name
    await page.getByPlaceholder('name@example.com').fill('ilham@mail.com',{delay:3000}) // fill email
    await page.getByPlaceholder('Current Address').fill('Oslo',{delay:2000}) // fill address
    await page.locator('//*[@id="permanentAddress"]').fill('Oslo, Norway',{delay:4000}) // fill permanent address
    await page.locator('//*[@id="submit"]').click() // click submit button
    expect(await page.getByText('Ilham')).toBeTruthy() // validation check if text true (appear)
    await page.waitForTimeout(3000) 
})

test("demoqa - Text Box - Negative Case",async function ({page}) {
    await page.goto('https://demoqa.com/text-box')
    await page.getByPlaceholder('Full Name').fill('2008993511110001')
    await page.getByPlaceholder('name@example.com').fill('ilham.mail.com')
    await page.getByRole('button',{id:'submit'}).click()
    expect(page.getByPlaceholder('name@example.com')).toContainClass('mr-sm-2 field-error form-control') // validation for email field
    await page.waitForTimeout(3000)
})

test.only("demoqa - Checkbox",async function ({page}) {
    await page.goto('https://demoqa.com/')
    await page.getByText('Elements').click()
    await page.getByText('Check Box').click()
    await page.locator('//*[@id="root"]/div[1]/div/div/div[2]/div[2]/div/div[3]/div/div/div/div/span[2]').click()
    await page.locator('//*[@id="root"]/div[1]/div/div/div[2]/div[2]/div/div[3]/div/div/div/div[2]/span[2]').click()
    await page.locator('//*[@id="root"]/div[1]/div/div/div[2]/div[2]/div/div[3]/div/div/div/div[6]/span[2]').click()
    await page.getByText('Desktop').click()
    await page.getByText('Word File.doc').click()
    await page.waitForTimeout(3000)
})
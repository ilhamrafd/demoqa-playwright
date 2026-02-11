import {test,expect} from '@playwright/test'
test("demoqa - Text Box",async function ({page}) {
    await page.goto('https://demoqa.com/text-box')
    await page.getByPlaceholder('Full Name').fill('Ilham',{delay:2000}) // fill full name
    await page.getByPlaceholder('name@example.com').fill('ilham@mail.com',{delay:3000}) // fill email
    await page.getByPlaceholder('Current Address').fill('Oslo',{delay:2000}) // fill address
    await page.locator('//*[@id="permanentAddress"]').fill('Oslo, Norway',{delay:4000}) // fill permanent address
    await page.locator('//*[@id="submit"]').click() // click submit button
    expect(await page.getByText('Ilham')).toBeTruthy() // validation check if text true (appear)
    await page.waitForTimeout(3000)
})

test.only("demoqa - Checkbox",async function ({page}) {
    await page.goto('https://demoqa.com/checkbox')
    // using locator
    await page.locator('//*[@id="tree-node"]/ol/li/span/button').click() // click home checkbox
    expect(page.getByText('Downloads')).toBeTruthy() // validation check if text true (appear)
    await page.locator('//*[@id="tree-node"]/ol/li/ol/li[1]/span/button').click() // click desktop checkbox
    
    // using Frame Locator
    await page.getByText('Downloads').click()
    await page.getByRole('button',{name:'Toggle'}).nth(1).click()
    await page.getByText('Word File.doc').click()
    await page.waitForTimeout(3000)
})
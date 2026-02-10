import {test,expect} from '@playwright/test'
test("demoqa - Text Box",async function ({page}) {
    await page.goto('https://demoqa.com/text-box')
    await page.getByPlaceholder('Full Name').fill('Ilham',{delay:2000})
    await page.getByPlaceholder('name@example.com').fill('ilham@mail.com',{delay:3000})
    await page.getByPlaceholder('Current Address').fill('Oslo',{delay:2000})
    await page.locator('//*[@id="permanentAddress"]').fill('Oslo, Norway',{delay:4000})
    await page.locator('//*[@id="submit"]').click()
    expect(await page.getByText('Ilham')).toBeTruthy()
    await page.waitForTimeout(3000)
})

test.only("demoqa - Checkbox",async function ({page}) {
    await page.goto('https://demoqa.com/checkbox')
    await page.locator('//*[@id="tree-node"]/ol/li/span/button').click()
    // await page.locator('//*[@id="tree-node"]/ol/li/ol/li[1]/ol/li[1]/span/label').click()
    await page.waitForTimeout(3000)
})
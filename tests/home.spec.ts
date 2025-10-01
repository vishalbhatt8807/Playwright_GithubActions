import {test,expect} from '@playwright/test';

test.beforeEach(async({page})=>{
   await page.goto("https://www.flipkart.com/");
})

test('Perform search Operation', async({page}) => {
    await page.getByPlaceholder("Search for Products, Brands and More").click();
    await page.keyboard.down('Enter');
    await page.getByRole('link',{name:'t shirts'}).click();
    await expect(await page.getByPlaceholder("Search for Products, Brands and More").getAttribute('value')).toBe("t shirts")
    await page.waitForTimeout(5000);
    const product = (await page.$$("//div[@class='_75nlfW']/div")).length;
    console.log(product);
    expect(product).toBe(40);
});


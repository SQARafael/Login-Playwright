import { test, expect } from '@playwright/test';

test.beforeEach(async ({page})=>{
    await page.goto('https://demoqa.com/');
});

test.describe('Suite', ()=>{
    test('check box', async ({page})=>{
        const tagDivs= await page.$$('div.avatar.mx-auto.white');
        const btnElements= tagDivs[0];
        await btnElements.click();
        const rowLocator= page.getByRole('listitem');
        await rowLocator
                .filter({hasText:'Check Box'})
                .click();
        await page.getByTitle('Toggle').click();
        const checkbox= await page.$$('span.rct-checkbox');
        const desktop= checkbox[1];
        await desktop.check();

        await expect(page.getByText('You have selected :')).toBeVisible();

    });
});
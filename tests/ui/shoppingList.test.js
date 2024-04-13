const { test, expect } = require('@playwright/test');

test('Check cookbook page', async ({ page }) => {
    await page.goto('http://localhost:8080/cookbook');
    const list = await page.$('h1');
    expect(list).toBeTruthy();
  });
  
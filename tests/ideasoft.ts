import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testcase.myideasoft.com/');
  await page.getByPlaceholder('Aramak istediğiniz ürünü yazı').click();
  await page.getByLabel('Search').fill('ürün');
  await page.getByLabel('Search').press('Enter');
  await page.getByLabel('Önerilen sıralama En düşük').selectOption('price-asc');
  await page.getByText('Stoktakiler').click();
  await page.getByRole('button', { name: 'Ara' }).click();
  await page.locator('div').filter({ hasText: 'Giriş Yap Favorilerim Sepet' }).first().click();
  await page.locator('#results-page div').filter({ hasText: 'SEPETE EKLE Ürün 100,00 TL' }).nth(1).click();
  await page.getByText('Ürün 100,00 TL').click();
  await page.getByRole('link', { name: 'Ürün' }).first().click();
  await page.getByRole('link', { name: 'SEPETE EKLE' }).click();
  await new Promise(resolve => setTimeout(resolve, 3000));
  await page.getByRole('link', { name: 'SEPETE EKLE' }).click();
  await new Promise(resolve => setTimeout(resolve, 3000));
  await page.getByRole('link', { name: 'SEPETE EKLE' }).click();
  await new Promise(resolve => setTimeout(resolve, 3000));
  await page.getByRole('link', { name: 'SEPETE EKLE' }).click();
  await new Promise(resolve => setTimeout(resolve, 3000));
  await page.getByRole('link', { name: 'SEPETE EKLE' }).click();
  await new Promise(resolve => setTimeout(resolve, 3000));
  await page.getByRole('link', { name: 'Sepet 5' }).click();
  await expect(page.locator('#header')).toContainText('5');
  await page.locator('#cart-items').getByRole('textbox').click();
});
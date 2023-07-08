const { test, expect } = require("@playwright/test");
const {email_1, password_1, email_2} = require("./user.js");


test('SuccesAuth', async ({ page }) => {
  await page.goto('https://netology.ru/');
  await page.screenshot({ path:'./screenshots/screenshot1.png' });
  await page.getByRole('link', { name: 'Войти' }).click();
  await page.screenshot({ path:'./screenshots/screenshot2.png' });
  await page.getByPlaceholder('Email').click();
  await page.screenshot({ path:'./screenshots/screenshot3.png' });
  await page.getByPlaceholder('Email').fill(email_1);
  await page.screenshot({ path:'./screenshots/screenshot4.png' });
  await page.getByPlaceholder('Пароль').click();
  await page.screenshot({ path:'./screenshots/screenshot5.png' });
  await page.getByPlaceholder('Пароль').fill(password_1);
  await page.screenshot({ path:'./screenshots/screenshot6.png' });
  await page.getByTestId('login-submit-btn').click();
  await page.screenshot({ path:'./screenshots/screenshot7.png' });
  await page.getByText('АЩ').click();
  await page.screenshot({ path:'./screenshots/screenshot8.png' });

  await expect(page.getByRole('heading', { name: 'Мои курсы и профессии' })).toBeVisible();
  
});
test('NotSuccesAuth', async ({ page }) => {
  await page.goto('https://netology.ru/');
  await page.getByRole('link', { name: 'Войти' }).click();
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill(email_2);
  await page.getByPlaceholder('Пароль').click();
  await page.getByPlaceholder('Пароль').fill(password_1);
  await page.getByTestId('login-submit-btn').click();

  await expect(page.getByText('Вы ввели неправильно логин или пароль')).toBeVisible();
  });
  







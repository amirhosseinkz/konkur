const { test, expect } = require('@playwright/test');

const BASE_URL = process.env.KONKUR_BASE_URL || 'http://127.0.0.1:4173';

async function openFresh(page, hash = '/dashboard') {
  await page.goto(`${BASE_URL}/#${hash}`);
  await page.evaluate(() => localStorage.clear());
  await page.reload();
  await page.waitForTimeout(250);
}

async function openLastNightSubject(page, label) {
  await page.evaluate((subjectLabel) => {
    const details = [...document.querySelectorAll('details')].find((item) => item.querySelector('summary')?.textContent.trim() === subjectLabel);
    if (details && !details.open) details.querySelector('summary').click();
  }, label);
}

test('timer updates, restores, formats, and stops after submit', async ({ page }) => {
  await openFresh(page, '/exams/1404/exam/language');
  await page.getByRole('button', { name: 'شروع آزمون' }).click();
  await expect(page.locator('.exam-timer-display')).toHaveText(/\d{2}:\d{2}:\d{2}/);
  const first = await page.locator('.exam-timer-display').textContent();
  await page.waitForTimeout(2100);
  const second = await page.locator('.exam-timer-display').textContent();
  expect(second).not.toBe(first);
  await page.reload();
  await expect(page.locator('.exam-timer-display')).toHaveText(/\d{2}:\d{2}:\d{2}/);
  const restored = await page.locator('.exam-timer-display').textContent();
  await page.waitForTimeout(2100);
  expect(await page.locator('.exam-timer-display').textContent()).not.toBe(restored);
  page.on('dialog', (dialog) => dialog.accept());
  await page.getByRole('button', { name: 'ثبت نهایی' }).click();
  await expect(page.locator('.exam-timer-display')).toHaveCount(0);
});

test('mark for review persists and appears in palette', async ({ page }) => {
  await openFresh(page, '/exams/1404/exam/language');
  await page.getByRole('button', { name: 'شروع آزمون' }).click();
  await page.getByRole('button', { name: 'علامت برای مرور' }).click();
  await expect(page.locator('.palette-dot[data-review="true"]')).toHaveCount(1);
  await page.goto(page.url());
  await expect(page.locator('.palette-dot[data-review="true"]')).toHaveCount(1);
  await page.getByRole('button', { name: 'حذف علامت مرور' }).click();
  await expect(page.locator('.palette-dot[data-review="true"]')).toHaveCount(0);
});

test('question routes from bookmarks and search open exact custom range', async ({ page }) => {
  await openFresh(page, '/exams/1404/practice/language');
  await page.getByRole('button', { name: 'نشان‌کردن سؤال' }).click();
  await page.goto(`${BASE_URL}/#/bookmarks`);
  await page.locator('select').first().selectOption('question');
  const href = await page.locator('main').getByRole('link', { name: 'باز کردن' }).first().getAttribute('href');
  expect(href).toContain('/practice/custom?start=');
  await page.goto(`${BASE_URL}/#/search`);
  await page.locator('#global-search-input').fill('question:1404:ce-msc:1');
  await page.getByRole('button', { name: 'جست‌وجو' }).click();
  const searchHref = await page.locator('#search-results a').first().getAttribute('href');
  expect(searchHref).toContain('/practice/custom?start=');
});

test('practice confirmation, focus restoration, aria labels, and Last Night navigation', async ({ page }) => {
  await openFresh(page, '/exams/1404/practice/language');
  await page.getByRole('button', { name: 'ثبت و مشاهده نتایج' }).click();
  await expect(page.getByText('ثبت تمرین؟')).toBeVisible();
  await expect(page.getByRole('button', { name: 'ادامه' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'ثبت' })).toBeVisible();
  await page.goto(`${BASE_URL}/#/subjects`);
  await expect(page.locator('h1')).toBeFocused();
  await page.goto(`${BASE_URL}/#/exams/1404`);
  await page.getByText('بازه دلخواه سؤال‌ها').click();
  await expect(page.getByLabel('شروع بازه')).toBeVisible();
  await expect(page.getByLabel('پایان بازه')).toBeVisible();
  await page.goto(`${BASE_URL}/#/last-night`);
  await openLastNightSubject(page, 'زبان انگلیسی');
  await page.getByRole('button', { name: 'قانون طلایی تصادفی' }).click();
  await expect(page).toHaveURL(/\/subjects\/english\/golden-rules/);
  await page.goto(`${BASE_URL}/#/last-night`);
  await openLastNightSubject(page, 'زبان انگلیسی');
  await page.getByRole('button', { name: 'فلش‌کارت تصادفی' }).click();
  await expect(page).toHaveURL(/\/subjects\/english\/flashcards/);
  await page.goto(`${BASE_URL}/#/last-night`);
  await openLastNightSubject(page, 'زبان انگلیسی');
  await page.getByRole('button', { name: 'دام آزمون تصادفی' }).click();
  await expect(page).toHaveURL(/\/subjects\/english\/traps/);
});

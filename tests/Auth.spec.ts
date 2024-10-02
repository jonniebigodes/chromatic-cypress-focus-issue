import { expect, takeSnapshot, test } from '@chromatic-com/playwright'

test.describe('Authentication', () => {
  test.use({
    disableAutoSnapshot: true,
  })
  test('Should be able to fill the form and focus the button using JS focused', async ({
    page,
  }, testInfo) => {
    await page.goto('/login')

    await page.screenshot({
      path: './test-results/InitialLoginPageFocusJS.png',
      fullPage: true,
    })
    await takeSnapshot(
      page,
      'Playwright - JS Focus state - Initial state of the login page',
      testInfo
    )

    await page.locator('input[name="email"]').fill('test@email.com')
    await page.locator('input[name="password"]').fill('KC@2N6^?vsV+)w1t')
    // testing purpose
    await page.locator('button[type="submit"]').focus()
    await page.screenshot({
      path: './test-results/FilledFormFocusedButtonJS.png',
      fullPage: true,
    })
    await takeSnapshot(page, 'Playwright - JS Focus state - Button Focused', testInfo)

    await expect(page.locator('button[type="submit"]')).toBeFocused()
  })
})

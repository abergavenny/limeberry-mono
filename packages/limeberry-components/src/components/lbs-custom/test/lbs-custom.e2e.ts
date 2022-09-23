import { newE2EPage } from '@stencil/core/testing';

describe('lbs-custom', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<lbs-custom></lbs-custom>');

    const element = await page.find('lbs-custom');
    expect(element).toHaveClass('hydrated');
  });
});

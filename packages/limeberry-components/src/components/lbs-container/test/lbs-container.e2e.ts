import { newE2EPage } from '@stencil/core/testing';

describe('lbs-container', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<lbs-container></lbs-container>');

    const element = await page.find('lbs-container');
    expect(element).toHaveClass('hydrated');
  });
});

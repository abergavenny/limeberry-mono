import { newSpecPage } from '@stencil/core/testing';
import { LbsCustom } from '../lbs-custom';

describe('lbs-custom', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LbsCustom],
      html: `<lbs-custom></lbs-custom>`,
    });
    expect(page.root).toEqualHtml(`
      <lbs-custom>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </lbs-custom>
    `);
  });
});

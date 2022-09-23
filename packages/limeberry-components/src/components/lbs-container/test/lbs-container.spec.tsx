import { newSpecPage } from '@stencil/core/testing';
import { LbsContainer } from '../lbs-container';

describe('lbs-container', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LbsContainer],
      html: `<lbs-container></lbs-container>`,
    });
    expect(page.root).toEqualHtml(`
      <lbs-container>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </lbs-container>
    `);
  });
});

import { newSpecPage } from '@stencil/core/testing';
import { AccordionItem } from '../accordion-item';

describe('accordion-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AccordionItem],
      html: `<accordion-item></accordion-item>`,
    });
    expect(page.root).toEqualHtml(`
      <accordion-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </accordion-item>
    `);
  });
});

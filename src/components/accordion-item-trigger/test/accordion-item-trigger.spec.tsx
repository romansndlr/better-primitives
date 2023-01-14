import { newSpecPage } from '@stencil/core/testing';
import { AccordionItemTrigger } from '../accordion-item-trigger';

describe('accordion-item-trigger', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AccordionItemTrigger],
      html: `<accordion-item-trigger></accordion-item-trigger>`,
    });
    expect(page.root).toEqualHtml(`
      <accordion-item-trigger>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </accordion-item-trigger>
    `);
  });
});

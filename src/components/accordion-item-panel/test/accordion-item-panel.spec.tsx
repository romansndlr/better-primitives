import { newSpecPage } from '@stencil/core/testing';
import { AccordionItemPanel } from '../accordion-item-panel';

describe('accordion-item-panel', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AccordionItemPanel],
      html: `<accordion-item-panel></accordion-item-panel>`,
    });
    expect(page.root).toEqualHtml(`
      <accordion-item-panel>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </accordion-item-panel>
    `);
  });
});

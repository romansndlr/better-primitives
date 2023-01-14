import { newSpecPage } from '@stencil/core/testing';
import { Accordion } from '../accordion';

describe('x-accordion', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Accordion],
      html: `<x-accordion></x-accordion>`,
    });
    expect(page.root).toEqualHtml(`
      <x-accordion>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </x-accordion>
    `);
  });
});

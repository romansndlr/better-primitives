import { newE2EPage } from '@stencil/core/testing';

describe('accordion-item-panel', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<accordion-item-panel></accordion-item-panel>');

    const element = await page.find('accordion-item-panel');
    expect(element).toHaveClass('hydrated');
  });
});

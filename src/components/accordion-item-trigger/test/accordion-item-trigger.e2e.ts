import { newE2EPage } from '@stencil/core/testing';

describe('accordion-item-trigger', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<accordion-item-trigger></accordion-item-trigger>');

    const element = await page.find('accordion-item-trigger');
    expect(element).toHaveClass('hydrated');
  });
});

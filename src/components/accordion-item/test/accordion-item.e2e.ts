import { newE2EPage } from '@stencil/core/testing';

describe('accordion-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<accordion-item></accordion-item>');

    const element = await page.find('accordion-item');
    expect(element).toHaveClass('hydrated');
  });
});

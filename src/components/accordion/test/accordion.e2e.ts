import { newE2EPage } from '@stencil/core/testing';

describe('x-accordion', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<x-accordion></x-accordion>');

    const element = await page.find('x-accordion');
    expect(element).toHaveClass('hydrated');
  });
});

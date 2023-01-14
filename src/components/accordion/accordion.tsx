import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'x-accordion',
  shadow: false,
})
export class Accordion {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}

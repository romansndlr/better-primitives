import { Component, h, Host, Listen, Element, Prop } from '@stencil/core'

@Component({
  tag: 'x-accordion-item',
  shadow: false,
})
export class AccordionItem {
  @Element() el?: HTMLElement

  @Prop() class: string

  @Listen('xAccordionTriggerClicked')
  handleAccordionTriggerClicked() {
    const panel = this.getPanel()

    panel.isOpen = !panel.isOpen
  }

  getPanel() {
    return this.el.querySelector('x-accordion-item-panel')
  }

  render() {
    return (
      <Host class={this.class}>
        <slot></slot>
      </Host>
    )
  }
}

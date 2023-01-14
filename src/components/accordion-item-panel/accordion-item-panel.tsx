import { Component, h, Host, Prop, Element, State } from '@stencil/core'

@Component({
  tag: 'x-accordion-item-panel',
  shadow: false,
})
export class AccordionItemPanel {
  @Element() el: HTMLElement

  @Prop() isOpen: boolean = false

  @Prop() class: string

  @State() trigger: HTMLElement

  connectedCallback() {
    const item = this.el.closest('x-accordion-item')
    const trigger = item.querySelector('x-accordion-item-trigger')

    this.trigger = trigger
  }

  render() {
    return (
      <Host
        role="region"
        hidden={!this.isOpen}
        id={this.el.id || `x-accordion-item-panel-${accordionPanelIds++}`}
        aria-labelledby={this.trigger?.id}
        class={this.class}
      >
        <slot></slot>
      </Host>
    )
  }
}

let accordionPanelIds = 0

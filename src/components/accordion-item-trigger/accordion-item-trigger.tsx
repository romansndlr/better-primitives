import {
  Component,
  h,
  Host,
  Event,
  EventEmitter,
  State,
  Element,
  Prop,
} from '@stencil/core'

@Component({
  tag: 'x-accordion-item-trigger',
  shadow: false,
})
export class AccordionItemTrigger {
  @Element() el: HTMLElement

  @Event() xAccordionTriggerClicked: EventEmitter

  @State() isOpen: boolean = false

  @State() panel: HTMLElement

  @Prop() class: string

  @Prop() headingClass: string

  @Prop() buttonClass: string

  handleClick() {
    this.isOpen = !this.isOpen

    this.xAccordionTriggerClicked.emit()
  }

  connectedCallback() {
    const item = this.el.closest('x-accordion-item')
    const panel = item.querySelector('x-accordion-item-panel')

    this.panel = panel
  }

  render() {
    return (
      <Host class={this.class}>
        <h3 class={this.headingClass}>
          <button
            class={this.buttonClass}
            onClick={this.handleClick.bind(this)}
            type="button"
            aria-expanded={this.isOpen ? 'true' : 'false'}
            aria-controls={this.panel?.id}
            id={
              this.el.id || `x-accordion-item-trigger-${accordionTriggerIds++}`
            }
          >
            <slot></slot>
          </button>
        </h3>
      </Host>
    )
  }
}

let accordionTriggerIds = 0

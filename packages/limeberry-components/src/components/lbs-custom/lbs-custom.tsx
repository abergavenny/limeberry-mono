import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'lbs-custom',
  styleUrl: 'lbs-custom.css',
  shadow: true,
})
export class LbsCustom {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}

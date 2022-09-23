import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'lbs-container',
  styleUrl: 'lbs-container.css',
  shadow: true,
})
export class LbsContainer {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}

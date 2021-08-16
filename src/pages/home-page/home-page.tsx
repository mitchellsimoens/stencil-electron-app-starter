import { Component, Host, h } from '@stencil/core';
import { JSX } from '@stencil/core/internal';

@Component({
  tag: 'home-page',
})
export class HomePage {
  render(): JSX.Element {
    return (
      <Host>
        <div>Home Page Here</div>
      </Host>
    );
  }
}

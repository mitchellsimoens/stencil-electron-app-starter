import { Component, Host, h } from '@stencil/core';
import { JSX } from '@stencil/core/internal';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
})
export class AppHome {
  render(): JSX.Element {
    return (
      <Host>
        <app-header />
        <div>App</div>
      </Host>
    );
  }
}

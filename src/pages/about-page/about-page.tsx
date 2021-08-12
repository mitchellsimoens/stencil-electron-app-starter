import { Component, Host, h } from '@stencil/core';
import { JSX } from '@stencil/core/internal';

@Component({
  tag: 'about-page',
})
export class AboutPage {
  render(): JSX.Element {
    return (
      <Host>
        <app-header />
        <div>About Page Here</div>
      </Host>
    );
  }
}

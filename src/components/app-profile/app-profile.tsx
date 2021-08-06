import { Component, Host, h } from '@stencil/core';
import { JSX } from '@stencil/core/internal';

@Component({
  tag: 'app-profile',
  styleUrl: 'app-profile.css',
})
export class AppProfile {
  render(): JSX.Element {
    return (
      <Host>
        <app-header />
        <div>Profile</div>
      </Host>
    );
  }
}

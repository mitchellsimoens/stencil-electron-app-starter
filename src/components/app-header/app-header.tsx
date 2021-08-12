import { Component, h } from '@stencil/core';
import { JSX } from '@stencil/core/internal';

@Component({
  tag: 'app-header',
})
export class AppHeader {
  render(): JSX.Element {
    return (
      <ul>
        <li>
          <stencil-route-link url="/" exact={true}>
            Home
          </stencil-route-link>
        </li>
        <li>
          <stencil-route-link url="/about">About</stencil-route-link>
        </li>
      </ul>
    );
  }
}

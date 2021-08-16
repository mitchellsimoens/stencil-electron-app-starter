import { Component, Host, h } from '@stencil/core';
import { JSX } from '@stencil/core/internal';

@Component({
  tag: 'not-found-page',
})
export class NotFoundPage {
  render(): JSX.Element {
    return (
      <Host>
        <div>Not found</div>
      </Host>
    );
  }
}

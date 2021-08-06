import { Component, h } from '@stencil/core';
import { JSX } from '@stencil/core/internal';

@Component({
  tag: 'header-popover',
  styleUrl: 'header-popover.css',
})
export class HeaderPopover {
  render(): JSX.Element {
    return <div>Popover</div>;
  }
}

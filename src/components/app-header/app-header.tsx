import { Component, h } from '@stencil/core';
import { JSX } from '@stencil/core/internal';

@Component({
  tag: 'app-header',
  styleUrl: 'app-header.css',
  shadow: true,
})
export class AppHeader {
  render(): JSX.Element {
    return (
      <div class="flex flex-wrap items-center">
        <div class="flex w-full pt-2 content-center justify-between md:2-1/3 md:justify-end">
          <ul class="list-reset flex justify-between flex-1 md:flex-none items-center">
            <li class="flex-1 md:flex-none md:mr-3">
              <stencil-route-link activeClass="!text-white" anchorClass="inline-block py-2 px-4 no-underline text-gray-600" url="/" exact={true}>
                Home
              </stencil-route-link>
            </li>

            <li class="flex-1 md:flex-none md:mr-3">
              <stencil-route-link activeClass="!text-white" anchorClass="inline-block py-2 px-4 no-underline text-gray-600" url="/about">
                About
              </stencil-route-link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

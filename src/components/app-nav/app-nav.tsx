import { Component, h } from '@stencil/core';
import { JSX } from '@stencil/core/internal';

@Component({
  tag: 'app-nav',
})
export class AppNav {
  render(): JSX.Element {
    return (
      <div class="md:mt-12 md:w-48 md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between">
        <ul class="list-reset flex flex-row md:flex-col py-0 md:py-3 px-1 md:px-2 text-center md:text-left">
          <li class="mr-3 flex-1">
            <stencil-route-link
              activeClass="!border-pink-500 !text-white"
              anchorClass="block py-1 md:py-3 pl-1 align-middle no-underline text-gray-600 md:text-gray-400 hover:text-white border-b-2 border-gray-800 hover:border-pink-500"
              url="/"
              exact={true}
            >
              <fa-icon class="pr-0 md:pr-3 text-white" icon-name="tasks" icon-style="fas" />
              <span class="pb-1 md:pb-0 text-xs md:text-base block md:inline-block">Tasks</span>
            </stencil-route-link>
          </li>

          <li class="mr-3 flex-1">
            <stencil-route-link
              activeClass="!border-purple-500 !text-white"
              anchorClass="block py-1 md:py-3 pl-1 align-middle no-underline text-gray-600 md:text-gray-400 hover:text-white border-b-2 border-gray-800 hover:border-purple-500"
              url="/messages"
              exact={true}
            >
              <fa-icon class="pr-0 md:pr-3 text-white" icon-name="envelope" />
              <span class="pb-1 md:pb-0 text-xs md:text-base block md:inline-block">Messages</span>
            </stencil-route-link>
          </li>

          <li class="mr-3 flex-1">
            <stencil-route-link
              activeClass="!border-blue-600 !text-white"
              anchorClass="block py-1 md:py-3 pl-1 align-middle no-underline text-gray-600 md:text-gray-400 hover:text-white border-b-2 border-gray-800 hover:border-blue-600"
              url="/analytics"
              exact={true}
            >
              <fa-icon class="pr-0 md:pr-3 text-white" icon-name="chart-area" icon-style="fas" />
              <span class="pb-1 md:pb-0 text-xs md:text-base block md:inline-block">Analytics</span>
            </stencil-route-link>
          </li>

          <li class="mr-3 flex-1">
            <stencil-route-link
              activeClass="!border-red-500 !text-white"
              anchorClass="block py-1 md:py-3 pl-0 md:pl-1 align-middle no-underline text-gray-600 md:text-gray-400 hover:text-white border-b-2 border-gray-800 hover:border-red-500"
              url="/payments"
              exact={true}
            >
              <fa-icon class="pr-0 md:pr-3 text-white" icon-name="wallet" />
              <span class="pb-1 md:pb-0 text-xs md:text-base  block md:inline-block">Payments</span>
            </stencil-route-link>
          </li>
        </ul>
      </div>
    );
  }
}

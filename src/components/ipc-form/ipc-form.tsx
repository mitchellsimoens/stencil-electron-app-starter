import { Component, h } from '@stencil/core';
import { JSX } from '@stencil/core/internal';

@Component({
  tag: 'ipc-form',
  shadow: true,
})
export class IpcForm {
  private inputEl: HTMLInputElement;

  private onClick = (): void => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).ipcRenderer.send('foo', this.inputEl.value);
  };

  render(): JSX.Element {
    return (
      <div class="flex flex-wrap items-center">
        <input ref={el => (this.inputEl = el)} type="text" placeholder="Enter message here..." />
        <button onClick={this.onClick}>Send Message</button>
      </div>
    );
  }
}

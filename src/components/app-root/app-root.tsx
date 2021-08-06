import { Component, Listen, State, h } from '@stencil/core';
import { JSX } from '@stencil/core/internal';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
})
export class AppRoot {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @State() applicationMenu: any = [
    {
      label: 'Edit',
      submenu: [
        { role: 'undo' },
        { role: 'redo' },
        { type: 'separator' },
        { role: 'cut' },
        { role: 'copy' },
        { role: 'paste' },
        { role: 'pasteandmatchstyle' },
        { role: 'delete' },
        { role: 'selectall' },
      ],
    },
    {
      label: 'View',
      submenu: [
        { role: 'reload' },
        { role: 'forcereload' },
        { role: 'toggledevtools' },
        { type: 'separator' },
        { role: 'resetzoom' },
        { role: 'zoomin' },
        { role: 'zoomout' },
        { type: 'separator' },
        { role: 'togglefullscreen' },
      ],
    },
    {
      role: 'window',
      submenu: [
        { role: 'minimize' },
        { role: 'close' },
        {
          label: 'Go Back',
          click(): void {
            window.history.back();
          },
        },
        {
          label: 'Go Forward',
          click(): void {
            window.history.forward();
          },
        },
      ],
    },
    {
      role: 'help',
      submenu: [
        {
          label: 'Learn More',
          click(): void {
            // eslint-disable-next-line @typescript-eslint/no-var-requires
            require('electron').shell.openExternal('https://electronjs.org');
          },
        },
      ],
    },
  ];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @State() contextMenu: any = [
    {
      label: 'Item 1',
      click(): void {
        console.log('item 1 clicked');
      },
    },
    {
      label: 'Item 2',
      click(): void {
        console.log('item 2 clicked');
      },
    },
    {
      label: 'Go Back',
      click(): void {
        window.history.back();
      },
    },
    {
      label: 'Go Forward',
      click(): void {
        window.history.forward();
      },
    },
    {
      label: 'Reload',
      click(): void {
        window.location.reload();
      },
    },
  ];

  @Listen('window:visibilitychange')
  onVisibilityChange(): void {
    if (document.hidden) {
      console.log('app has been minimized');
    } else {
      console.log("and we're back again");
    }
  }

  @Listen('window:contextmenu')
  openContextMenu(e: CustomEvent): void {
    e.preventDefault();
    console.log('implement');
  }

  render(): JSX.Element {
    return <div>Root</div>;
  }
}

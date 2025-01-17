import { BrowserWindow, BrowserWindowConstructorOptions, Rectangle, app } from 'electron';
import { join } from 'path';
import { getStore } from './store';

export const openWindow = (name: string, options: BrowserWindowConstructorOptions): BrowserWindow => {
  const storeKey = `$window.bounds.${name}`;
  const store = getStore();
  const bounds: Rectangle = store.get(storeKey) as Rectangle;
  const win = new BrowserWindow({
    ...options,
    ...bounds,
    webPreferences: {
      preload: join(app.getAppPath(), '/window-preload.js'),
    },
  });

  win.on('close', (): void => store.set(storeKey, win.getBounds()));

  return win;
};

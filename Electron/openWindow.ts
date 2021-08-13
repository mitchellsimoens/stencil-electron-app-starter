import { BrowserWindow, BrowserWindowConstructorOptions } from 'electron';

// TODO check electron-store for size/position
export const openWindow = (_name: string, options: BrowserWindowConstructorOptions): BrowserWindow => {
  return new BrowserWindow({
    ...options,
  });
};

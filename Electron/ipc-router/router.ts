import { ipcMain, IpcMainEvent } from 'electron';

type Listener = (...args: unknown[]) => void;
type ElectronListener = (event: IpcMainEvent, ...args: unknown[]) => void;

class Router {
  listeners = new Map<string, Listener[]>();

  subscribe(channel: string, listener: Listener): void {
    let arr = this.listeners.get(channel);

    if (arr == null) {
      arr = [];

      this.listeners.set(channel, arr);

      ipcMain.on(channel, this.ipcListener(channel));
    }

    arr.push(listener);
  }

  unsubscribe(channel: string, listener: Listener): void {
    const arr = this.listeners.get(channel);

    if (arr != null) {
      const idx = arr.indexOf(listener);

      if (idx > -1) {
        arr.splice(idx, 1);
      }
    }
  }

  ipcListener(channel: string): ElectronListener {
    return (event: IpcMainEvent, ...args: unknown[]): void => {
      const listeners = this.listeners.get(channel);

      if (listeners != null) {
        args.push(event);
        listeners.forEach(listener => listener(...args));
      }
    };
  }
}

const router = new Router();

export default router;

export const handle =
  (channel: string) =>
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (target: unknown, _key: string, descriptor: PropertyDescriptor): void => {
    const origin = descriptor.value as Listener;
    const register = function (this: typeof target) {
      router.subscribe(channel, origin);
    };

    register.call(target);
  };

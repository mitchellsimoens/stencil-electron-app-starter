/**
 * This exposes the ipcRenderer to the renderer processes.
 * You can then get this by `window.ipcRenderer`.
 */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { ipcRenderer, contextBridge } = require('electron');

contextBridge.exposeInMainWorld('ipcRenderer', ipcRenderer);

/* eslint-disable @typescript-eslint/no-var-requires */
import { app, BrowserWindow } from 'electron';
import { readFileSync } from 'fs';
import { PackageJson } from '../src/Types/package-json';
import { openWindow } from './openWindow';
import { getStore } from './store';

// required to use require() here for some reason
const serve = require('electron-serve');
const path = require('path');

const isDev = process.execPath.includes('node_modules/electron/dist/electron');
const packageJSON: PackageJson = JSON.parse(readFileSync(path.join(__dirname, '..', 'package.json'), 'utf8'));
const loadURL = serve({ directory: path.join(__dirname, '..', 'www'), scheme: 'stencil-electron' });

if (isDev) {
  require('electron-reload')(path.join(__dirname, '..', 'www'), {
    electron: path.join(__dirname, '..', 'node_modules', '.bin', 'electron'),
    hardResetMethod: 'exit',
  });
}

// https://medium.com/@davembush/typescript-and-electron-the-right-way-141c2e15e4e1
class Application {
  static mainWindow: BrowserWindow;

  constructor() {
    // https://github.com/SimulatedGREG/electron-vue/issues/424 ??
    const appData = app.getPath('appData');

    app.setPath(
      'userData',
      path.join(
        appData,
        packageJSON.productName
          .replace(/[^a-z0-9]/gi, '_')
          .toLowerCase()
          .replace(/_{2,}/g, '_'),
      ),
    );

    getStore();

    app.on('window-all-closed', this.onWindowAllClosed.bind(this));
    app.on('ready', this.onReady.bind(this));
  }

  private onWindowAllClosed(): void {
    // TODO make a setting?
    if (process.platform !== 'darwin') {
      app.quit();
    }
  }

  private onClose(): void {
    // Dereference the window object.
    Application.mainWindow = null;
  }

  private onReady(): void {
    Application.mainWindow = openWindow('main', {
      icon: path.join(__dirname, '..', 'www', 'assets', 'icon', 'icon.png'),
    });

    loadURL(Application.mainWindow);

    if (isDev) {
      Application.mainWindow.webContents.openDevTools();
    }

    Application.mainWindow.on('closed', this.onClose.bind(this));
  }
}

new Application();

/*============================================================================*\

	JavaScript for a Basic Electron App
	-----------------------------------------------------------------------
	Made in California by Brian Sexton
	https://briansexton.com/
	-----------------------------------------------------------------------
	Based on the Electron Quick Start Tutorial
	https://electron.atom.io/docs/tutorial/quick-start/

\*============================================================================*/

'use strict';

const electron = require('electron');

const {app} = electron;

const {BrowserWindow} = electron;

let mainWindow;

app.on('activate', () => {

	if (mainWindow === null) {
		createMainWindow();
	}
});

app.on('ready', createMainWindow);

app.on('window-all-closed', () => {

	if (process.platform != 'darwin') {
		app.quit();
	}
});

function createMainWindow() {

	mainWindow = new BrowserWindow({width: 800, height: 600});

	mainWindow.loadURL('file://' + __dirname + '/index.html');

	// Uncomment the following to show Chrome dev tools by default.
	//mainWindow.webContents.openDevTools();

	mainWindow.on('closed', () => {
		mainWindow = null;
	});
}
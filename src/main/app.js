import { app } from 'electron'
import Window from './window';

let mainWindow;

class App {

    constructor() {
        this.setProtocol()
        app.on('ready', this.onReady.bind(this))
        app.on('window-all-closed', this.onAllClosed.bind(this))
        app.on('activate', this.onActivate.bind(this))
    }

    setProtocol() {
        app.setAsDefaultProtocolClient('alerta');
    }

    createMainWindow() {
        return new Window(this.onMainClose.bind(this));;
    }

    onReady() {
        mainWindow = this.createMainWindow();
    }

    onActivate() {
        if (mainWindow === null) {
            mainWindow = this.createMainWindow();
        }
    }

    onMainClose() {
        mainWindow = null;
    }

    onAllClosed() {
        if (process.platform !== 'darwin') {
            app.quit()
        }
    }
}

export default App;

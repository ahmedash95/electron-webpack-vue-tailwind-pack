import { app, BrowserWindow } from 'electron'
const isDevelopment = process.env.NODE_ENV !== 'production'
import * as path from 'path'
import { format as formatUrl } from 'url'

class Window extends BrowserWindow
{
    constructor(onClose) {
        super({
            webPreferences: {nodeIntegration: true}
        })
        if (isDevelopment) {
            this.webContents.openDevTools()
            this.loadURL(`http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`)
        } else {
            this.loadURL(formatUrl({
                pathname: path.join(__dirname, 'index.html'),
                protocol: 'file',
                slashes: true
            }))
        }

        this.on('closed', onClose.bind(this))
        this.webContents.on('devtools-opened', this.devtoolsOpened.bind(this))
    }

    devtoolsOpened() {
        this.focus()
        setImmediate(() => {
            this.focus()
        })
    }
}

export default Window;
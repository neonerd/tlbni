import rough from 'roughjs'

abstract class Scene {
    constructor (protected name: string, protected rootEl: HTMLElement) {
    }

    abstract init ();
    abstract render ();
}

export class HtmlScene extends Scene {
    init () {

    }

    render () {

    }
}

export class CanvasScene extends Scene {
    canvasEl: HTMLCanvasElement
    
    init () {
        this.canvasEl = document.createElement('canvas')
        this.canvasEl.width = this.rootEl.clientWidth
        this.canvasEl.height = this.rootEl.clientHeight
        this.rootEl.appendChild(this.canvasEl)
        const rc = rough.canvas(this.canvasEl)
        const d = rc.rectangle(100, 100, 100, 100)
    }

    render () {

    }
}
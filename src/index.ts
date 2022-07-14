console.log('===== ====== ====== ======')
console.log('to leto bolo niečím iné')
console.log('(c) 2022 andrej sýkora')
console.log('===== ====== ====== ======')

import '../vendor/css/reset.scss'

import { CanvasScene } from './gfx/renderer'

/**
 * Main function initializes the game
 */
function main () {
    const root = document.createElement('div')
    root.id = 'tl-root'
    root.style.width = '100vw'
    root.style.height = '100vh'

    document.body.appendChild(root)

    const s = new CanvasScene('test', root)
    s.init()
}

// ===
// Run the main function
// ===
main()
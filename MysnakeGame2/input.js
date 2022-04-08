let inputdirection = { x: 0, y: 0 }
let reverse={x:0,y:0}
window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp':
            if(reverse.y !==0) break
            inputdirection= { x: 0, y: -1 }
            break
        
            case 'ArrowDown':
            if(reverse.y !==0) break
            inputdirection= { x: 0, y: 1 }
            break
            case 'ArrowLeft':
            if(reverse.x !==0) break
            inputdirection= { x: -1, y: 0 }
            break
            case 'ArrowRight':
            if(reverse.x !==0) break
            inputdirection = { x: 1, y: 0 }
            break

    }
})

export function getinputdirection() {
    reverse=inputdirection
    return inputdirection
}


import { onsnake, expandsnake } from './snake.js'
import {randomgridposition} from './grid.js'

let food = getrandomfoodposition()
const expanstion_rate = 1

export function update() {
    if (onsnake(food)) {
        expandsnake(expanstion_rate)
        food =  getrandomfoodposition()
    }
}
export function draw(gameboard) {

    const foodelement = document.createElement('div')
    foodelement.style.gridRowStart = food.y
    foodelement.style.gridColumnStart = food.x
    foodelement.classList.add('food')
    gameboard.appendChild(foodelement)


}

function getrandomfoodposition(){
    let newfoodposition
    while (newfoodposition==null || onsnake(newfoodposition)) {
        newfoodposition=randomgridposition()
    }
    return newfoodposition;
} 
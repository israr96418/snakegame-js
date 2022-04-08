let lastRenderTime=0;
let gameover=false;
import {update as updatesnake ,draw as drawsnake,snake_speed,snakehead,snakeintersection} from './snake.js'
import {update as updatefood ,draw as drawfood} from './food.js'
import { outsidegride } from './grid.js';

const gameboard = document.getElementById('game-board')

function main(currentTime){
    if(gameover){
        if(confirm('You lose Press of to restart')){
            window.location='/'
        }
        return
    }
    window.requestAnimationFrame(main)
    const secondsSinceRenderTime=(currentTime-lastRenderTime)/1000;
    if(secondsSinceRenderTime < 1/snake_speed ) return;
  

   
    lastRenderTime=currentTime;
    console.log(secondsSinceRenderTime);

    update()
    draw()

}

window.requestAnimationFrame(main)

function update(){
    updatesnake();
    updatefood();
    checkdeath();
}
function draw(){
    gameboard.innerHTML='';
    drawsnake(gameboard);
    drawfood(gameboard);

}

function checkdeath(){
    gameover=outsidegride(snakehead())||snakeintersection()
}


    import { getinputdirection } from "./input.js";
export const snake_speed=10;
let  newsegment=0;

const snakebody = [
    {x:11,y:11}
  
]

export function update(){
    addsegment()
   const inputDirection = getinputdirection();
for(let i=snakebody.length-2; i>=0;i--)
   {
    snakebody[i+1]={...snakebody[i]}
    }
    snakebody[0].x += inputDirection.x;
    snakebody[0].y +=inputDirection.y;

  }
export function draw(gameboard){
    snakebody.forEach(segment=>{
        const snakeelement = document.createElement('div')
        snakeelement.style.gridRowStart=segment.y
        snakeelement.style.gridColumnStart=segment.x
        snakeelement.classList.add('snake')
        gameboard.appendChild(snakeelement)

    })
}
export function expandsnake(amount){
    newsegment += amount;
}

export function onsnake(position,{ignorehead=false}={}){
    return snakebody.some((segment,index)=>{
        if(ignorehead && index===0) return false
        return equalposition(segment,position)
    })
}

function equalposition(post1,post2){
    return post1.x==post2.x && post1.y==post2.y
}

function addsegment(){
    for(let i=0;i<newsegment;i++){
        snakebody.push({...snakebody[snakebody.length-1]})
    }
    newsegment=0
}

export function snakehead(){
    return  snakebody[0];
}

export function snakeintersection(){
    return onsnake(snakebody[0], {ignorehead:true})
}
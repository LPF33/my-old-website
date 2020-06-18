export function moveArm(){
    const num = Math.random()*1000;
    return{
        type : "moveArm",
        arm : num
    }
}

export function hideGameButton(value){
    return{
        type : "hideGames",
        action : value
    }
}

export function sendLightMode(value){
    return{
        type: "lightMode",
        action : value
    }
}
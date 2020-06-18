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

export function deleteLightMode(){
    return{
        type: "deleteLightMode",
        action : "delete"
    }
}

export function getArticles(search){
    return{
        type: "getArticles",
        action : search
    }
}

export function contactMe(){
    const num = Math.random()*1000;
    
    return{
        type: "contactMe",
        action: num
    }
}
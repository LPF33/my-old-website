export default function (state = {}, action) {

    if(action.type === "moveArm"){

        state = {
            ...state,
            arm: action.arm
        };
    }

    if(action.type === "hideGames"){

        state = {
            ...state,
            gamesStatus: action.action
        };
    }

    if(action.type === "lightMode"){

        state= {
            ...state,
            lightMode : action.action
        }
    }

    return state;
}
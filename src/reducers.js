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

    return state;
}
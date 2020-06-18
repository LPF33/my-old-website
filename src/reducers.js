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

    if(action.type === "deleteLightMode"){

        if(state.lightMode){
            delete state.lightMode;
        }

        state= {
            ...state
        }
    }

    if(action.type === "getArticles"){

        state= {
            ...state,
            articles : action.action
        }
    }

    if(action.type === "contactMe"){

        state= {
            ...state,
            contact : action.action
        }
    }

    if(action.type === "tagSearch"){

        state= {
            ...state,
            tagSearch : action.action
        }
    }

    return state;
}
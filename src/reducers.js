export default function (state = {}, action) {

    if(action.type === "moveArm"){

        state = {
            ...state,
            arm: action.arm
        };
    }

    if(action.type === "moveArmPicker"){

        state = {
            ...state,
            armpicker: action.armpicker
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

    if(action.type === "aboutMe"){

        state= {
            ...state,
            about : action.action
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
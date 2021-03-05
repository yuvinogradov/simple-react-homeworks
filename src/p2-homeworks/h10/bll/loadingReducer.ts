const initState = false;

export type ActionType = {
    type: "SET_LOADING";
    payload: boolean;
};

export const loadingReducer = (
    state = initState,
    action: ActionType
): boolean => {
    // fix any
    console.log("in reducer. action:", action);

    switch (action.type) {
        case "SET_LOADING": {
            return action.payload;
        }
        default:
            return state;
    }
};

export const loadingAC = (payload: boolean): ActionType => {
    console.log("loadingAC. payload:", payload);
    return {
        type: "SET_LOADING",
        //payload: payload
        payload
    };
}; // fix any

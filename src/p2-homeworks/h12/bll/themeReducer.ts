const initState = 'dark';

export type ActionType = {
    type: 'CHANGE_THEME'
    payload: string
}

export const themeReducer = (
    state = initState,
    action: ActionType
): any => { // fix any
    switch (action.type) {
        case "CHANGE_THEME": {
            return action.payload;
        }
        default: return state;
    }
};

export const changeThemeAC = (payload:string): ActionType => {
    return {
        type: "CHANGE_THEME",
        payload
    }
}; // fix any
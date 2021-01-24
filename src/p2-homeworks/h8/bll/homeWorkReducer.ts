export const homeWorkReducer = (state: any, action: any): any => {
  switch (action.type) {
    case "sort": {
      console.log(action.payload);
      console.log(state.map((a) => a.name));

      const arr = [1, 4, 3];
      console.log(arr.sort((a, b) => b - a));
      const sortKey = action.payload === "down" ? 1 : -1;
      const newState = state.sort((a, b) => {
        return a.name > b.name ? sortKey : sortKey * -1;
      });

      console.log(newState.map((a) => a.name));
      return newState;
    }
    case "check": {
      const newState = state.filter((person) => person.age >= action.payload);
      return newState;
    }
    default:
      return state;
  }
};

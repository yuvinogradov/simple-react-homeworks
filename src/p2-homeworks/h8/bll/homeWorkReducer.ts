export const homeWorkReducer = (state: any, action: any): any => {
  switch (action.type) {
    case "sort": {
      //console.log(action.payload);
      console.log(state.map((a:any) => a.name));

      // const arr = [1, 4, 3];
      // console.log(arr.sort((a:any, b) => b - a));
      // const sortKey = action.payload === "down" ? -1 : 1;
      // const newState = state.sort((a:any, b:any) => {
      //   return a.name > b.name ? sortKey : sortKey * -1;
      // });

      const sortKey = action.payload === "down" ? -1 : 1;
      const newState = [...state].sort((a:any, b:any) => {
        return a.name > b.name ? sortKey : sortKey * -1;
      });

      console.log(newState.map((a:any) => a.name));
      return newState;
    }
    case "check": {
      return  [...state].filter((person:any) => person.age >= action.payload);
    }
    default:
      return state;
  }
};

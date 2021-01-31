

export type homeworkReducerActionType = {
  type: 'sort' | 'check'
  payload: 'up' | 'down' | number
}

export type PersonType = {
  _id: number
  name: string
  age: number
}

export type PersonsStateType =  Array<PersonType>

export const homeWorkReducer = (state: PersonsStateType, action: homeworkReducerActionType): PersonsStateType => {
  switch (action.type) {
    case "sort": {
      //console.log(state.map((a:any) => a.name));

      const sortKey = action.payload === "down" ? -1 : 1;
      const newState = [...state].sort((a:PersonType, b:PersonType) => {
        return a.name > b.name ? sortKey : sortKey * -1;
      });

      console.log(newState.map((a:PersonType) => a.name));
      return newState;
    }
    case "check": {
      return  state.filter((person:PersonType) => person.age >= action.payload);
    }
    default:
      return state;
  }
};

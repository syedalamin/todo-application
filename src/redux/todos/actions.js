import { ADDED, ALLCOMPLETED, CLEARCOMPLETED, COLLERSELECTED, DLEDED, TOGGLED } from "./actionsTypes";

export const added = (todoText) => {
  return {
    type: ADDED,
    payload: todoText,
  };
};

export const toggle = (todoId) => {
  return {
    type: TOGGLED,
    payload: todoId,
  };
};

export const colorSelected = (todoId, color) => {
  return {
    type: COLLERSELECTED,
    payload: {
      todoId,
      color,
    },
  };
};


export const deleted = (todoId) =>{
    return{
        type: DLEDED,
        payload: todoId,
    }
}

export const allCompleted = () =>{
    return{
        type: ALLCOMPLETED
    }
}
export const clearcompleted = () =>{
    return {
        type: CLEARCOMPLETED,
    }
}
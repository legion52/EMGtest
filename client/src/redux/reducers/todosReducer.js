import { GET_TODO } from "../types/types";

export const todosReducer = (state = [], action) =>{
    const { type, payload } = action
  switch (type) {
    case GET_TODO:
      return payload;
      

    default:
      return state;
}

}

import { GET_TODO } from "../types/types";
import axios from "axios";

export const getTodo = (todo) =>({
  type: GET_TODO,
  payload: todo
})

export const addTodo = (todo) => async(dispatch) => {
 const formData = new FormData()
  formData.append('title', todo.title)
  formData.append('image', todo.img.sampleFile)
  const res = await axios.post(`/api/v1/todo`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}

export const getTodoFromServer = () => async(dispatch) => {
  const todo = await axios(`/api/v1/todo`)
  console.log(todo.data.response);
}

export const postImage = (newIncident)=> async (dispatch)=>{
 
}

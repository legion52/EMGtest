import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo, getTodoFromServer } from '../../redux/actions/todosAC'
import style from './style.module.css'


export default function Form() {
  const [input, setInput] = useState({title:'', img:{}})
  const upload = useRef()
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getTodoFromServer())
  }, [])

  const inputChange = (e) =>{
    setInput(prev => ({...prev, [e.target.name]: e.target.value.replace(/[0-9]/g, '')}))
    // console.log(input.img.sampleFile.size);
  }
  const hadleSubmit = (e) => {
    e.preventDefault()
    if(input.img.sampleFile.size <= 5242880){
      dispatch(addTodo(input))

    }else{
      alert('Размер файла превышает 5Мб')
    }

  }

  const imgHandle = async (e)=>{
    e.preventDefault();
    const newIncident = {
      sampleFile: upload.current.files[0],
    };
    setInput(prev=> ({...prev, img:newIncident}))

  }

  return (
    
    <div className={style.form}>
      <form onSubmit={hadleSubmit}>
        <div className="mb-3">
          <label htmlFor="textinp" className="form-label">Title</label>
          <textarea maxLength="115" name='title' value={input.title} onChange={inputChange} className="form-control" id="textinp" />
        </div>
        <div className="mb-3">
          <label htmlFor="file" className="form-label">File</label>
          <input type="file" name='img' onChange={imgHandle} ref={upload} className="form-control" id="file" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

import React from 'react'
import { useState} from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getUser } from '../../redux/actions/userAC'



export default function SignUpForm() {

  const [inputs, setInputs] = useState({name:'', email:'', password:''})
  const dispatch =useDispatch()
  const inputHandler = (e) => {
    setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
} 
  const navigate = useNavigate()


const submitHandler = (e) => {
    e.preventDefault()
    dispatch(getUser(inputs))
    navigate('/')
    setInputs({name:'', email:'', password:''})
}


  return (
    <div>SignUpForm
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">Name</label>
          <input type="text" className="form-control" id="exampleInputName" name='name' onChange={inputHandler} value={inputs.name}/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' onChange={inputHandler} value={inputs.email}/>
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" name='password' onChange={inputHandler} value={inputs.password}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

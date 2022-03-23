import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signInUser, userLogout } from '../../redux/actions/userAC';


export default function SignInForm() {
  const [inputs, setInputs] = useState({email:'', password:''});
    const dispatch = useDispatch()
  const inputHandler = (e) => {
    setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
  };
  const navigate = useNavigate()
  const user = useSelector(state => state.user) || 0


const submitHandler = (e) => {
    e.preventDefault();
    console.log(inputs);
    let payload = Object.entries(inputs).filter((el) => el[1]?el[1].trim():el[1])

    // dispatch(getUser(inputs))
    if(payload.length){
      console.log(payload);
      dispatch(signInUser(inputs))
      setInputs({email:'', password:''})
    }
    if(user.length){
      navigate('/')

    }
}
  return (
    <div>SignInForm
      <form onSubmit={submitHandler}>
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


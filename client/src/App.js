import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Main from './component /Main/Main';
import Navbar from './component /Navbar/Navbar';
import { checkUser } from './redux/actions/userAC';
import { Routes, Route,} from "react-router-dom";
import AuthUser from './component /ProtectedAuth/AuthUser';
import SignUpForm from './component /SignUpForm/SignUpForm';
import SignInForm from './component /SignInForm/SignInForm';

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(checkUser())
  }, [])
  return (
  
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/signup' element={
          <AuthUser>
            <SignUpForm />
          </AuthUser>} />
        <Route path='/signin' element={
          <AuthUser>
            <SignInForm />
          </AuthUser>} />
      </Routes>
    </div>
  );
}

export default App;

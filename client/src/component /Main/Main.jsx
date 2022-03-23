import React from 'react'
import { useSelector } from 'react-redux'
import Form from '../Form/Form'
import style from './style.module.css'


export default function Main() {
  const user = useSelector(state => state.user)
  return (
    <div className={style.wrapper}>
      {user?<Form />:<h3>Вы не авторизованы</h3>}
    </div>
  )
}

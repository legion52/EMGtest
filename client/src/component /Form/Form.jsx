import React from 'react'
import style from './style.module.css'


export default function Form() {
  return (
    <div className={style.form}><form>
    <div className="mb-3">
      <label htmlFor="textinp" className="form-label">Title</label>
      <input type="text" className="form-control" id="textinp" />
    </div>
    <div className="mb-3">
      <label htmlFor="textinp" className="form-label">File</label>
      <input type="file" className="form-control" id="textinp" />
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
  <span><h3>Необходимо написать сервис с авторизацией и кастомной формой ввода. В ней должны содержаться следующие элементы:
Поле ввода текста на 2 строки (не допускаются цифры)
Загрузка картинки (ограничение в 5 Мб)
Кнопка Добавить
Кнопка Добавить сохраняет данные в базу данных.
К серверу должен быть реализовать endpoint запрос GET, который получает в ответ последний добавленный элемент из базы данных в виде json – текст и ссылка на картинку.</h3></span>
  
  
  
  </div>
  )
}

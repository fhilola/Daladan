import React from 'react'
import './Utils.scss'

const Button = ({children, type, onClick}) => {
  return (
    <button type={type} className='btn' onClick={onClick}>{children}</button>
  )
}

const Form = ({children}) => {
  return (
    <form className='form'>{children}</form>
  )
}

const LabelInput = ({type, text, placeholder}) => {
  return (
    <label className='label'>{text}
      <input className='input' type={type} placeholder={placeholder}/>
    </label>
  )
}

const Container = ({children}) => {
  return (
    <div className='container'>{children}</div>
  )
}
export {Button, Form, LabelInput, Container}
import React from 'react'
import './Utils.scss'

const Button = ({children, type}) => {
  return (
    <button type={type} className='btn'>{children}</button>
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
export {Button, Form, LabelInput}
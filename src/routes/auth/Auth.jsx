import React from 'react'
import './Auth.scss'
import AuthImage from '../../assets/auth.png'
import Logo from '../../assets/logo.svg'
import { Button, Form, LabelInput } from '../../utils/Utils'

const Auth = () => {
  return (
    <section className='auth'>
      <div className='auth-image'>
        <img src={AuthImage} alt="" />
      </div>
      <div className='auth-content'>
        <img src={Logo} alt="" />
        <div className='auth-register'>
          <h2>Tizimga kirish</h2>
          <p >Boshqaruv panelimizga kirish uchun elektron pochta va parolingizni kiriting</p>
          <Form>
            <LabelInput text='Telefon raqam' placeholder='Telefon raqam' />
            <LabelInput text='Parol' placeholder='Parol' />
            <Button type='submit'>Tizimga kirish</Button>
          </Form>
        </div>
      </div>
    </section>
  )
}

export default Auth
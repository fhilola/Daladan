import './Utils.scss'
import React, { useState } from 'react';


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

const Table = ({data, type}) => {
  return (
    <table className='table'>
      <thead>
        <tr>
          <th></th>
          {
            Object.keys(data[0]).map((key, index)=>
            <th key={index}>{key}</th>
            )
          }
        </tr>
      </thead>
      <tbody>
        {
          data&&
          data.map((admin, index)=>
          <tr key={index}>
            <td>{index+1}</td>
            {
              Object.values(admin).map((value, index)=>
              <td key={index}>{value}</td>
              )
            }
          </tr>
          )
        }
      </tbody>
    </table>
  )
}

const OpenModal = ({children}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        {children}
      </Modal>
    </>
  )
}
export {Button, Form, LabelInput, Container, Table, OpenModal}
import './Utils.scss'
import React, { useState, useMemo } from 'react';
import { AiOutlinePlus } from "react-icons/ai";
import Category from '../assets/category.svg'
import { Switch, Button as AntButton, ConfigProvider, Popover, Segmented } from 'antd';
import { BsTrash3 } from "react-icons/bs";
import { RiEdit2Line } from "react-icons/ri";
import { } from 'antd';
const buttonWidth = 80;
const content = (
  <div className='popover'>
    <button><BsTrash3/>O`chirish</button>
    <button><RiEdit2Line/>O`zgartirish</button>
  </div>
);


const Button = ({ children, type, onClick }) => {
  return (
    <button type={type} className='btn' onClick={onClick}>{children}</button>
  )
}

const Form = ({ children }) => {
  return (
    <form className='form'>{children}</form>
  )
}

const LabelInput = ({ type, text, placeholder, options }) => {
  const handleGetFile = (e) => {
    const fileName = e.target.files[0].name
    document.getElementById('image-name').innerHTML = fileName
  }
  return (
    <label className='label'>{text}
      {
        type === 'file' ? <div className='file__wrapper'>
          <label htmlFor="file" className='file-label'>Reklama uchun rasm yuklash
            <AiOutlinePlus />
            <input onChange={handleGetFile} type="file" id='file' />
            <br />
            <span id='image-name'></span>
          </label>
        </div> :
          type === 'select' ? <select className='input' type={type} placeholder={placeholder}>{
            options?.map((option, index) =>
              <option key={index}>{option}</option>
            )
          }</select> : <input className='input' type={type} placeholder={placeholder} />
      }

    </label>
  )
}

const Container = ({ children }) => {
  return (
    <div className='container'>{children}</div>
  )
}

const Table = ({ data, type }) => {
  const [arrow, setArrow] = useState('Show');
  const mergedArrow = useMemo(() => {
    if (arrow === 'Hide') {
      return false;
    }
    if (arrow === 'Show') {
      return true;
    }
    return {
      pointAtCenter: true,
    };
  }, [arrow]);
  const [defaultChecked, setDefaultChecked] = useState(false);
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
    setDefaultChecked(checked);
  };
  return (
    <div className="table__wrapper">
      <table className='table'>
        <thead>
          <tr>
            <th></th>
            {
              Object.keys(data[0]).map((key, index) =>
                <th key={index}>{key}</th>,
              )
            }
            {
              type === 'category' ? <th></th> : null
            }

          </tr>
        </thead>
        <tbody>
          {
            data &&
            data.map((admin, index) =>
              <tr key={index}>
                <td>{index + 1}</td>
                {
                  Object.values(admin).map((value, index) =>
                    index === 0 && type === 'category' ? <td key={index}><img src={Category} alt="category" /></td> :
                      value === 'false' ? <td><Switch style={{ backgroundColor: 'var(--primary-green-color)' }} defaultChecked onChange={onChange} /></td> :
                        value === 'true' ? <td><Switch style={defaultChecked ? { backgroundColor: 'var(--primary-green-color)' } : { backgroundColor: 'var(--secondary-dark-color)' }} onChange={onChange} /></td> :
                          <td key={index}>{value}</td>
                  )
                }
                {
                  type === 'category' ?
                    <td style={{ textAlign: 'end', display: 'flex', justifyContent: 'center' }}>
                      <div
                        style={{
                          width: buttonWidth,
                        }}
                      >
                        <Popover placement="left" content={content} arrow={mergedArrow}>
                          <AntButton style={{border: 'none'}}>⋮</AntButton>
                        </Popover>
                      </div>
                    </td> : null
                }
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}

const OpenModal = ({ children }) => {
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
export { Button, Form, LabelInput, Container, Table, OpenModal }
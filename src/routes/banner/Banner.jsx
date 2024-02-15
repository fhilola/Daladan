import React, { useState } from 'react'
import { Button, Form, LabelInput } from '../../utils/Utils'
import { Modal, Button as AntButton, Flex } from 'antd'
import bannerimage from '../../assets/banner.svg'
import { FaRegTrashAlt } from "react-icons/fa";
import './Banner.scss'

const Banner = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const link = ['app_auth/55c16d85-009a-44b5-8f8e-134a9d2d269e/grant?authed_ids=1108357407251172327%2C1142043964366871832&desktop_protocol=figma&locale=en', 'app_auth/55c16d85-009a-44b5-8f8e-134a9d2d269e/grant?authed_ids=1108357407251172327%2C1142043964366871832&desktop_protocol=figma&locale=en', 'app_auth/55c16d85-009a-44b5-8f8e-134a9d2d269e/grant?authed_ids=1108357407251172327%2C1142043964366871832&desktop_protocol=figma&locale=en', 'app_auth/55c16d85-009a-44b5-8f8e-134a9d2d269e/grant?authed_ids=1108357407251172327%2C1142043964366871832&desktop_protocol=figma&locale=en', ]
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
    <div className='banner'>
      <div className="actions">
        <h2>Banner</h2>
        <Button onClick={showModal}>+</Button>
        <Modal className='modal' centered open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <h3>Banner qo`shish</h3>
          <Form>
            <LabelInput text='Rasm Yuklash PNG, JPG (345x180px)' type='file' />
            <LabelInput text='Url' placeholder='Url' />
            <Button>Saqlash</Button>
          </Form>
        </Modal>
      </div>
      <div className="banner-content__wrapper">
        {
          link.map((item, index)=>
          <div className="banner-content" key={index}>
            <img src={bannerimage} alt="" />
            <p>{item.slice(0, 32) + '...'}</p>
            <AntButton style={{width: '100%'}} danger><FaRegTrashAlt/>O`chirish</AntButton>
          </div>
          )
        }
      </div>
    </div>
  )
}

export default Banner
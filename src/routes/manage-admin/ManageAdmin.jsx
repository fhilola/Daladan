import React, { useState } from 'react'
import './ManageAdmin.scss'
import {  Table , Button, Form, LabelInput} from '../../utils/Utils'
import data from '../../data/admins.json'
import { Modal} from 'antd';
import { IoClose } from "react-icons/io5";

const ManageAdmin = () => {
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
    <main className="manage-admin">
      <div className="actions">
        <h2>Admin qo'shish</h2>
        <Button onClick={showModal}>+</Button>
        <Modal className='modal' centered title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <h3>Admin qo'shish</h3>
          <Form>
            <LabelInput text='To`liq ism' placeholder='To`liq ism' />
            <LabelInput text='Telefon raqami' placeholder='Telefon raqami' />
            <LabelInput text='Roli' placeholder='Roli' />
            <Button>Saqlash</Button>
          </Form>
          </Modal>
      </div>
      <Table data={data} type={'admin'} />
    </main>
  )
}

export default ManageAdmin
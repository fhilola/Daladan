import React, { useState } from 'react'
import { Button, Form, LabelInput } from '../../../utils/Utils';
import { Modal } from 'antd';

const Bolim = () => {
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

  const options = ['Poliz ekinlari', 'Hududiy ekonomika', 'Moliya', 'Ishlab chiqarish'];
  return (
    <section className='bolim'>
      <div className="actions">
        <h2>Bo`limlar</h2>
        <Button onClick={showModal}>+</Button>
        <Modal className='modal' centered open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <h3>Admin qo'shish</h3>
          <Form>
            <LabelInput text='Kategoriya' placeholder='Kategoriya' type={'select'} options={options}/>
            <LabelInput text='Bo`lim nomi' placeholder='Bo`lim nomi' />
            <LabelInput text='Булим номи' placeholder='Булим номи' />
            <Button>Saqlash</Button>
          </Form>
        </Modal>
      </div>
    </section>
  )
}

export default Bolim
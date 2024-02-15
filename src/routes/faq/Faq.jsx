import React, { useState } from 'react'
import { Form , Button, LabelInput} from '../../utils/Utils'
import { Modal } from 'antd'
import data from '../../data/yangiliklar.json'

const Faq = () => {
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
    <section className='faq'>
      <div className="actions">
        <h2>FAQ</h2>
        <Button onClick={showModal}>+</Button>
        <Modal className='modal' centered open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <h3>FAQ</h3>
          <Form>
            <LabelInput text='Savol nomi' placeholder='Savol nomi' />
            <LabelInput text='Savolga jabvob' placeholder='Savolga jabvob' />
            <LabelInput text='Савол номи' placeholder='Савол номи' />
            <LabelInput text='Саволга жавоб' placeholder='Саволга жавоб' />
            <Button>Saqlash</Button>
          </Form>
        </Modal>
      </div>
      <div className="news__wrapper">
        {
        data?.map((news, index) =>
          <div className="news__content" key={index}>
            <h4>{news.title}</h4>
            <p>{news.description}</p>
          </div>
        )
      }
      </div>
    </section>
  )
}

export default Faq
import React, { useState } from 'react'
import data from '../../data/yangiliklar.json'
import { Button, Form, LabelInput } from '../../utils/Utils'
import { Modal } from 'antd'
import './News.scss'

const News = () => {
  console.log(data);
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
    <section className='news'>
      <div className="actions">
        <h2>Yangiliklar</h2>
        <Button onClick={showModal}>+</Button>
        <Modal className='modal' centered open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <h3>Yangiliklar</h3>
          <Form>
            <LabelInput text='Yangilik nomi' placeholder='Yangilik nomi' />
            <LabelInput text='Izoh' placeholder='Izoh' />
            <LabelInput text='Янгилик номи' placeholder='Янгилик номи' />
            <LabelInput text='Изох' placeholder='Изох' />
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

export default News
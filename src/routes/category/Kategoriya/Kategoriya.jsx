import React, {useState} from 'react'
import { Table, Button, Form, LabelInput} from '../../../utils/Utils';
import { Modal} from 'antd';
import data from '../../../data/category.json'

const Kategoriya = () => {
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
    <section className='kategoriya'>
        <div className="actions">
            <h2>Kategoriyalar</h2>
            <Button onClick={showModal}>+</Button>
        <Modal className='modal' centered  open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <h3>Admin qo'shish</h3>
          <Form>
            <LabelInput text='Kategoriya nomi' placeholder='Kategoriya nomi' />
            <LabelInput text='Категория номи' placeholder='Категория номи' />
            <LabelInput text='Rasm Yuklash PNG, JPG (345x180px)' type='file' />
            <Button>Saqlash</Button>
          </Form>
          </Modal>
        </div>
        <Table data={data} type={'category'}/>
    </section>
  )
}

export default Kategoriya
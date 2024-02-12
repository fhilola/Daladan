import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Auth from './auth/Auth'
import Dashboard from '../pages/dashboard/Dashboard'
import Monitoring from './monitoring/Monitoring'
import ManageAdmin from './manage-admin/ManageAdmin'
import Category from './category/Category'
import News from './news/News'
import Banner from './banner/Banner'
import Faq from './faq/Faq'
import Kategoriya from './category/Kategoriya/Kategoriya'
import Bolim from './category/bolim/Bolim'

const RouteController = () => {
  return (
    <Routes>
        <Route path='/' element={<Auth/>}/>
        <Route path='/dashboard' element={<Dashboard/>}>
          <Route index element={<Monitoring/>}/>
          <Route path='/dashboard/manage-admin' element={<ManageAdmin/>}/>
          <Route path='/dashboard/category' element={<Category/>}>
            <Route index element={<Kategoriya/>}/>
            <Route path='/dashboard/category/bolim' element={<Bolim/>}/>
          </Route>
          <Route path='/dashboard/news' element={<News/>}/>
          <Route path='/dashboard/banner' element={<Banner/>}/>
          <Route path='/dashboard/faq' element={<Faq/>}/>
        </Route>
    </Routes>
  )
}

export default RouteController
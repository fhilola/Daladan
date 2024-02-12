import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './Category.scss'

const Category = () => {
  return (
    <main className='category'>
      <ul className='category-menu'>
        <li className='category-item'>
          <NavLink end className={({isActive}) => isActive ? 'category__link category__link--active' : 'category__link'} to='/dashboard/category'>Kategoriya</NavLink>
        </li>

        <li className='category-item'>
          <NavLink end className={({isActive}) => isActive ? 'category__link category__link--active' : 'category__link'} to='/dashboard/category/bolim'>Bo`lim</NavLink>
        </li>
      </ul>
      <Outlet />
    </main>
  )
}

export default Category
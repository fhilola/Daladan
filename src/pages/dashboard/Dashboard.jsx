import React from 'react'
import './Dashboard.scss'
import { NavLink, Outlet } from 'react-router-dom'
import { Container } from '../../utils/Utils'
import Logo from '../../assets/logo.svg'

const Dashboard = () => {
    return (
        <Container>
            <section className='dashboard'>
                <nav className='navbar'>
                    <img src={Logo} alt="" />
                    <div className="navbar-menu__wrapper">
                        <ul className='navbar-menu'>
                        <li className='navbar-menu__item'>
                            <NavLink to='/dashboard' end className={({isActive})=> isActive ? 'navbar-menu__link navbar-menu__link--active' : 'navbar-menu__link'}>Monitoring</NavLink>
                        </li>
                        <li className='navbar-menu__item'>
                            <NavLink to='/dashboard/manage-admin' end className={({isActive})=> isActive ? 'navbar-menu__link navbar-menu__link--active' : 'navbar-menu__link'}>Manage Admin</NavLink>
                        </li>
                        <li className='navbar-menu__item'>
                            <NavLink to='/dashboard/category' end className={({isActive})=> isActive ? 'navbar-menu__link navbar-menu__link--active' : 'navbar-menu__link'}>Category</NavLink>
                        </li>
                        <li className='navbar-menu__item'>
                            <NavLink to='/dashboard/news' end className={({isActive})=> isActive ? 'navbar-menu__link navbar-menu__link--active' : 'navbar-menu__link'}>News</NavLink>
                        </li>
                        <li className='navbar-menu__item'>
                            <NavLink to='/dashboard/banner' end className={({isActive})=> isActive ? 'navbar-menu__link navbar-menu__link--active' : 'navbar-menu__link'}>Banner</NavLink>
                        </li>
                        <li className='navbar-menu__item'>
                            <NavLink to='/dashboard/faq' end className={({isActive})=> isActive ? 'navbar-menu__link navbar-menu__link--active' : 'navbar-menu__link'}>FAQ</NavLink>
                        </li>
                    </ul>
                    </div>
                </nav>
                <Outlet />
            </section>
        </Container>
    )
}

export default Dashboard
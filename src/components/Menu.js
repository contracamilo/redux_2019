import React from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

const Menu = () => {
    return (
        <nav>
            
            
                <Breadcrumb>
                    <BreadcrumbItem><Link to={'/'}>Usuarios</Link></BreadcrumbItem>
                    <BreadcrumbItem><Link to={'/tareas'}>Tareas</Link></BreadcrumbItem>
                </Breadcrumb>
              
        </nav>
    )
}

export default Menu

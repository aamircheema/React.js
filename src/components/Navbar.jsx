import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='links'>
                <Link to='/'>Form</Link>
                {' '} {' '}
                <Link to='/cart'>
                    Table
                </Link>
            </div>
        </div>
    )
}

export default Navbar

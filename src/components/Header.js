import React from 'react';
import './HeaderStyles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div className='header'>
            <div className='header1'>
                <div className='header2'>
                    <div className='header3'>
                        <FontAwesomeIcon className='search-icon' icon={faMagnifyingGlass} />

                        <input className='search-text' placeholder='Search  by company name '></input>
                    </div>
                </div>
                <div className='profile'>
                    <div className='bell-icon'>
                        <FontAwesomeIcon className='' icon={faBell} />
                    </div>
                    <div className='profile1'>
                        <img className='profile-img' src='https://images.unsplash.com/photo-1600878459108-617a253537e9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
                        <div className='shailesh-investor'>
                            <h5 className='shailesh'>Shailesh Vickram</h5>
                            <h7 className='investor'>Investor</h7>

                        </div>
                        
                    </div>
                    <FontAwesomeIcon className='circleicon' icon={faCirclePlus} />
                </div>
            </div>
        </div>
    )
}

export default Header;

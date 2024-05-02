import React from 'react';
// import {Link} from 'react-router-dom';
import './NavbarStyles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';
import { faIndianRupee } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
  return (
    
    <nav className='navbar'>
        <div className='navbar-head'>
            <img className='navbar-image' src="https://cdn.pixabay.com/photo/2016/02/10/20/29/circle-1192509_1280.png"></img>
            <h3 className='climate-angels'>Climate Angels</h3>
        </div>
        <div className='navbar-col'>
            <div className='portfolio'>
                {/* <FontAwesomeIcon icon="fa-solid fa-arrow-trend-up" /> */}
                <FontAwesomeIcon icon={faArrowTrendUp}/>
                {/* <Link to="/">Portfolio</Link> */}
                <a href='/'>Portfolio</a>
            </div>
            <div className='invest'>
                <FontAwesomeIcon icon = {faIndianRupee}/>
                {/* <  Link to="/">Invest</Link> */}
                <a href='/'>Invest</a>

            </div>
            <div className='syndicates'>
                <FontAwesomeIcon icon={faUsers} />
                {/* <Link to="/">Syndicates</Link> */}
                <a href='/'>Syndicates</a>

            </div>
            <div className='ledger'>
                <FontAwesomeIcon icon={faBook} />
                {/* <Link to="/">Ledger</Link> */}
                <a href='/'>Ledger</a>

            </div>
            <div className='messages'>
                <FontAwesomeIcon icon={faMessage} />
                {/* <Link to="/">Messages</Link> */}
                <a href='/'>Messages</a>
                
            </div>
            <div className='events'>
                <FontAwesomeIcon icon={faCalendar} />
                {/* <Link to="/">Events</Link> */}
                <a href='/'>Events</a>

            </div>
            <div className='news'>
                <FontAwesomeIcon icon={faNewspaper} />
                {/* <Link to="/">News & Blogs</Link> */}
                <a href='/'>News & Blogs</a>

            </div>
            <div className='help'>
                <FontAwesomeIcon icon={faQuestionCircle} />
                {/* <Link to="/">Help & Support</Link> */}
                <a href='/'>Help & Support</a>

            </div>

        </div>
      
    </nav>
  )
}

export default Navbar;

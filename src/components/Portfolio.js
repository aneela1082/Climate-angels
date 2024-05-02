import React from 'react';
import Card from "./Card.js";
import data from "../data.js";
import { useState } from 'react';
import Activity from "./Activity.js";
import './PortfolioStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Portfolio = () => {

    const [cardData, setCardData] = useState(data);

    return (
        <div className='main'>
            <h1 className='myportfolio'>My Portfolio</h1>
            <div className='space'>
                <div className='dashboard'>
                    <span className='dashboard-text'>Dashboard</span>
                    
                </div>

                <div className='mis'>
                    <span>MIS and Updates</span>
                    
                </div>
                <div className='insights'>
                    <span className='insights-text'>Insights</span>
                    
                </div>
            </div>
            <hr/>
            <div className='search-filter'>
                <div className='search1'>
                    <div className='search2'>
                    <FontAwesomeIcon className='search-icon' icon={faMagnifyingGlass} />
                    <input className='search-box' placeholder='Search by company name'></input>

                    </div>
                </div>
                <div className='filter1'>
                
                    <FontAwesomeIcon className='filter-icon' icon={faFilter} />
                    <button className='filter-button'>Filter</button>
                

                </div>
            </div>
            <Activity cardData={cardData}></Activity>
        </div>
    )
}

export default Portfolio;

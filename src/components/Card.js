import React, { useState } from 'react';
import './CardStyles.css';

const Card = ({ tag, image, description, date }) => {

    const [readMore, setReadMore] = useState(false);

    //const info = readMore ? info: `${description.substring(0,200)}....`;

    function readmoreHandler() {
        setReadMore(!readMore);
    }

    return (
        <div className='card'>
            <div className='card1'>
                <div className='tag-icon'>
                    <span className='tag'>{tag}</span>
                    {/* icon */}
                </div>
                <div className='ace-group'>
                    <div className='ace-img-div'>
                        <img className='ace-img' src="https://media.licdn.com/dms/image/C560BAQHdwuBAEC1FLA/company-logo_200_200/0/1630652909113/ace_recycling_pte_ltd_logo?e=2147483647&v=beta&t=WGThocnxBlztWlp6waIdIsPNfpF6S-b8Sqw3WVmgHRA"></img>
                    </div>
                    <div className='ace-grp2'>
                        <h3 className='ace-green'>Ace Green Recycling</h3>
                        <div className='battery-grp'>
                            <h4 className='battery-recycle'>Battery Recycling</h4>
                            <h4 className='slash'>|</h4>
                            <h4 className='bengaluru'>Bengaluru</h4>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div >
                <div className='description'>
                    {description}
                </div>
                <div className='img-read'>

                    <img src={image} className="card-image"></img>



                    <span className='read-more' onClick={readmoreHandler}>
                        {readMore ? <button className='view-deal'><span className='text-view-deal'>VIEW DEAL</span></button> : 'READ MORE'}
                    </span>

                </div>

                <hr className='line-down'/>
                <span className='date'>{date}</span>


            </div>


        </div>
    )
}

export default Card;

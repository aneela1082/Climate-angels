import React from 'react'
import Card from './Card';
import './ActivityStyles.css';

const Activity = ({cardData}) => {
  return (
    <div>
        <div className='activity-feed'>
            <h2>Activity Feed</h2>
        </div>
        <div >
            {  
                cardData.map((data)=>{
                    return <Card {...data}></Card>
                })
            }
        </div>

    </div>
  )
}

export default Activity;

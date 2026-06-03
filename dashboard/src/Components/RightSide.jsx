import React from 'react'
import './RightSide.css'
import Update from './Update'
import CustomerReview from './CustomerReview'

const RightSide = () => {
    return (
        <div className="RightSide">
            <div>
                <h3>Updates</h3>
                <Update />
            </div>
            <div>
                <CustomerReview />
            </div>
        </div>
    )
}

export default RightSide;
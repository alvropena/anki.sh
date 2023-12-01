import React from 'react'

function TodayCard() {
    return (
        <div>
            <h1 className='text-2xl'>Today</h1>
            <p>Studied 3 cards in 2.62 seconds today (0.87s/card)</p>
            <p>Again count: 3 (100%)</p>
            <p>Learn: 3, Review: 0, Relearn: 0, Filtered: 0</p>
            <p>No mature cards were studied today.</p>
        </div>
    )
}

export default TodayCard
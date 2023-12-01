import React from 'react'

function TodayCard() {
    return (
        <div>
            <h1 className='text-2xl'>Today</h1>
            <div className='flex flex-col items-center gap-2'>
                <p className='mt-2'>Studied 3 cards in 2.62 seconds today (0.87s/card)</p>
                <p>Again count: 3 (100%)</p>
                <p>Learn: 3, Review: 0, Relearn: 0, Filtered: 0</p>
                <p>No mature cards were studied today.</p>
            </div>
        </div>
    )
}

export default TodayCard
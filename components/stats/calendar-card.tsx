import React from 'react'
import { Button } from '../ui/button'
import { ChevronLeftCircle, ChevronRightCircle } from 'lucide-react'

function CalendarCard() {
    return (
        <div>
            <h1 className='text-2xl'>Calendar</h1>
            <div className='flex flex-row items-center justify-center gap-2'>
                <button>
                    <ChevronLeftCircle size={18} />
                </button>
                <p>2023</p>
                <button>
                    <ChevronRightCircle size={18} />
                </button>
            </div>
        </div>
    )
}

export default CalendarCard
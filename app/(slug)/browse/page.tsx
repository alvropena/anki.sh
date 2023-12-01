import Search from '@/components/search'
import { Heart, Flag, Clock, Tag, Circle, BookMarked } from 'lucide-react'
import React from 'react'


function Browse() {
    return (
        <div>
            <Search />
            <div className='flex flex-row'>
                <Heart />
                <p>Saved Searches</p>
            </div>
            <div className='flex flex-row'>
                <Clock />
                <p>Today</p>
            </div>
            <div className='flex flex-row'>
                <Flag />
                <p>Flags</p>
            </div>
            <div className='flex flex-row'>
                <Circle />
                <p>Card State</p>
            </div>
            <div className='flex flex-row'>
                <BookMarked />
                <p>Decks</p>
            </div>
            <div className='flex flex-row'>
                <Flag />
                <p>Note Types</p>
            </div>
            <div className='flex flex-row'>
                <Tag />
                <p>Tags</p>
            </div>
        </div>
    )
}

export default Browse